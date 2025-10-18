"use client"

import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

// Lazy load the minimal implementation
const MinimalHexBackground = dynamic(() => import('./minimal-hex-background').then(mod => ({ default: mod.MinimalHexBackground })), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-black" />
})

export function HexagonBackground() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Fade in animation
    setTimeout(() => setIsVisible(true), 100)
  }, [])

  return (
    <div 
      className={`fixed inset-0 transition-opacity duration-1500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ zIndex: 0 }}
    >
      <MinimalHexBackground />
      
      {/* Subtle gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at top, transparent 0%, rgba(0, 0, 0, 0.2) 100%),
            radial-gradient(circle at 10% 80%, rgba(255, 136, 0, 0.02) 0%, transparent 40%)
          `
        }}
      />
    </div>
  )
} 