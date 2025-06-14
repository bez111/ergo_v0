"use client"

import { useEffect, useRef } from "react"

interface DigitalRainEffectProps {
  color?: string
  density?: number
  speed?: number
}

export function DigitalRainEffect({
  color = "rgba(255, 136, 0, 0.5)",
  density = 25,
  speed = 50,
}: DigitalRainEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Characters to display
    const chars = "01010101010101010101010101010101"
    const columns = Math.floor(canvas.width / 20)
    const drops: number[] = []

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -100)
    }

    // Draw function
    function draw() {
      if (!canvas || !ctx) return;
      // Semi-transparent black background to create trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = color
      ctx.font = "15px monospace"

      // Loop through drops
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = chars.charAt(Math.floor(Math.random() * chars.length))

        // x = column position, y = drop position
        const x = i * 20
        const y = drops[i] * 20

        // Add randomness to opacity for more dynamic effect
        const alpha = Math.random() * 0.5 + 0.3
        ctx.fillStyle = color.replace(/[\d.]+\)$/, `${alpha})`)

        // Draw the character
        ctx.fillText(text, x, y)

        // Reset drop when it reaches bottom or randomly
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        // Move drop down
        drops[i]++
      }
    }

    // Animation loop
    const interval = setInterval(draw, speed)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [color, density, speed])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" />
}
