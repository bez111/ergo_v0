"use client"

import { useState, useEffect } from "react"

interface GlitchTextProps {
  text: string
  className?: string
}

export function GlitchText({ text, className = "" }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    // Random glitch effect
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setIsGlitching(true)
        setTimeout(() => setIsGlitching(false), 150)
      }
    }, 2000)

    return () => clearInterval(glitchInterval)
  }, [])

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      {isGlitching && (
        <>
          <span className="absolute top-0 left-0.5 text-cyan-400 opacity-70 animate-glitch-1">{text}</span>
          <span className="absolute top-0 -left-0.5 text-red-500 opacity-70 animate-glitch-2">{text}</span>
        </>
      )}
    </span>
  )
}
