"use client"

/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect, useRef } from 'react'

export function HexagonGrid() {
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

    // Hexagon parameters (flat-top orientation)
    const hexRadius = 30
    const hexHeight = hexRadius * 2
    const hexWidth = Math.sqrt(3) * hexRadius
    const vertDist = hexHeight * 3/4
    
    // Grid of hexagons with properties
    const hexagons: Array<{
      x: number
      y: number
      opacity: number
      targetOpacity: number
      pulseSpeed: number
      glowIntensity: number
    }> = []

    // Create hexagon grid
    const cols = Math.ceil(canvas.width / hexWidth) + 2
    const rows = Math.ceil(canvas.height / vertDist) + 2
    
    for (let row = -1; row < rows; row++) {
      for (let col = -1; col < cols; col++) {
        const x = col * hexWidth + (row % 2) * (hexWidth / 2)
        const y = row * vertDist
        
        hexagons.push({
          x,
          y,
          opacity: 0.02 + Math.random() * 0.03,
          targetOpacity: 0.02 + Math.random() * 0.03,
          pulseSpeed: 0.001 + Math.random() * 0.002,
          glowIntensity: 0
        })
      }
    }

    // Draw flat-top hexagon
    const drawHexagon = (x: number, y: number, radius: number) => {
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i
        const hx = x + radius * Math.cos(angle)
        const hy = y + radius * Math.sin(angle)
        if (i === 0) {
          ctx.moveTo(hx, hy)
        } else {
          ctx.lineTo(hx, hy)
        }
      }
      ctx.closePath()
    }

    // Mouse tracking for interactive glow
    let mouseX = -1000
    let mouseY = -1000
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    
    const handleMouseLeave = () => {
      mouseX = -1000
      mouseY = -1000
    }
    
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    // Animation loop
    let animationId: number
    let time = 0
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Create subtle gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0)')
      gradient.addColorStop(0.5, 'rgba(255, 136, 0, 0.01)')
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Draw hexagons
      hexagons.forEach((hex, index) => {
        // Calculate distance from mouse
        const dist = Math.sqrt(
          Math.pow(mouseX - hex.x, 2) + 
          Math.pow(mouseY - hex.y, 2)
        )
        
        // Interactive glow effect
        const maxGlowDist = 150
        if (dist < maxGlowDist) {
          hex.glowIntensity = Math.min(hex.glowIntensity + 0.02, 1 - (dist / maxGlowDist))
        } else {
          hex.glowIntensity = Math.max(hex.glowIntensity - 0.02, 0)
        }
        
        // Pulse animation
        if (Math.random() < 0.0005) {
          hex.targetOpacity = 0.1 + Math.random() * 0.15
        }
        
        hex.opacity += (hex.targetOpacity - hex.opacity) * hex.pulseSpeed
        
        if (Math.abs(hex.opacity - hex.targetOpacity) < 0.001) {
          hex.targetOpacity = 0.02 + Math.random() * 0.03
        }
        
        // Draw hexagon with glow
        if (hex.glowIntensity > 0) {
          // Glow effect
          const glowGradient = ctx.createRadialGradient(
            hex.x, hex.y, 0,
            hex.x, hex.y, hexRadius * 2
          )
          glowGradient.addColorStop(0, `rgba(255, 136, 0, ${hex.glowIntensity * 0.3})`)
          glowGradient.addColorStop(0.5, `rgba(255, 136, 0, ${hex.glowIntensity * 0.1})`)
          glowGradient.addColorStop(1, 'rgba(255, 136, 0, 0)')
          
          ctx.fillStyle = glowGradient
          drawHexagon(hex.x, hex.y, hexRadius * 1.5)
          ctx.fill()
        }
        
        // Draw main hexagon
        drawHexagon(hex.x, hex.y, hexRadius)
        
        // Fill with subtle color
        const fillOpacity = hex.opacity + hex.glowIntensity * 0.2
        ctx.fillStyle = `rgba(255, 136, 0, ${fillOpacity * 0.3})`
        ctx.fill()
        
        // Draw border
        ctx.strokeStyle = `rgba(255, 136, 0, ${hex.opacity + hex.glowIntensity * 0.5})`
        ctx.lineWidth = 1
        ctx.stroke()
        
        // Add subtle inner glow for active hexagons
        if (hex.glowIntensity > 0.5) {
          drawHexagon(hex.x, hex.y, hexRadius * 0.8)
          ctx.strokeStyle = `rgba(255, 200, 100, ${hex.glowIntensity * 0.3})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      })
      
      // Occasional wave effect
      if (time % 300 === 0 && Math.random() < 0.3) {
        const waveOriginX = Math.random() * canvas.width
        const waveOriginY = Math.random() * canvas.height
        
        hexagons.forEach(hex => {
          const dist = Math.sqrt(
            Math.pow(waveOriginX - hex.x, 2) + 
            Math.pow(waveOriginY - hex.y, 2)
          )
          
          setTimeout(() => {
            hex.targetOpacity = 0.15
          }, dist * 0.5)
        })
      }
      
      time++
      animationId = requestAnimationFrame(animate)
    }
    
    animate()
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-60"
      style={{ 
        mixBlendMode: 'screen',
        filter: 'contrast(1.1) brightness(1.1)'
      }}
    />
  )
} 