"use client"

import React, { useEffect, useRef } from 'react'

export function MinimalHexBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    // Create fewer, larger hexagons
    const hexagons: Array<{
      x: number
      y: number
      size: number
      opacity: number
      speed: number
      angle: number
    }> = []

    // Only 5-7 hexagons total
    const hexCount = 5 + Math.floor(Math.random() * 3)
    
    for (let i = 0; i < hexCount; i++) {
      hexagons.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 100 + Math.random() * 200, // Large hexagons
        opacity: 0.01 + Math.random() * 0.02, // Very subtle
        speed: 0.1 + Math.random() * 0.2,
        angle: Math.random() * Math.PI * 2
      })
    }

    // Draw flat-top hexagon outline
    const drawHexagon = (x: number, y: number, size: number, opacity: number) => {
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i
        const hx = x + size * Math.cos(angle)
        const hy = y + size * Math.sin(angle)
        if (i === 0) {
          ctx.moveTo(hx, hy)
        } else {
          ctx.lineTo(hx, hy)
        }
      }
      ctx.closePath()
      
      // Only stroke, no fill
      ctx.strokeStyle = `rgba(255, 136, 0, ${opacity})`
      ctx.lineWidth = 1
      ctx.stroke()
    }

    // Animation loop
    let animationId: number
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw hexagons
      hexagons.forEach(hex => {
        // Slow floating movement
        hex.x += Math.cos(hex.angle) * hex.speed
        hex.y += Math.sin(hex.angle) * hex.speed * 0.5
        
        // Wrap around edges
        if (hex.x > canvas.width + hex.size) hex.x = -hex.size
        if (hex.x < -hex.size) hex.x = canvas.width + hex.size
        if (hex.y > canvas.height + hex.size) hex.y = -hex.size
        if (hex.y < -hex.size) hex.y = canvas.height + hex.size
        
        // Draw main hexagon
        drawHexagon(hex.x, hex.y, hex.size, hex.opacity)
        
        // Draw inner hexagon for depth
        drawHexagon(hex.x, hex.y, hex.size * 0.7, hex.opacity * 0.5)
      })
      
      animationId = requestAnimationFrame(animate)
    }
    
    animate()
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ 
        opacity: 0.4,
        mixBlendMode: 'screen'
      }}
    />
  )
} 