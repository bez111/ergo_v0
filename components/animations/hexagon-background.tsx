"use client"

import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

// Lazy load both implementations
const HexagonGrid = dynamic(() => import('./hexagon-grid').then(mod => ({ default: mod.HexagonGrid })), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
})

const HexagonPattern = dynamic(() => import('./hexagon-pattern').then(mod => ({ default: mod.HexagonPattern })), {
  ssr: false
})

export function HexagonBackground() {
  const [useCanvas, setUseCanvas] = useState(true)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check device capabilities
    const checkPerformance = () => {
      // Check if device is mobile
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
      
      // Check if device has low memory (if API available)
      const hasLowMemory = 'deviceMemory' in navigator && (navigator as any).deviceMemory < 4
      
      // Check connection speed (if API available)
      const hasSlowConnection = 'connection' in navigator && 
        (navigator as any).connection?.effectiveType && 
        ['slow-2g', '2g', '3g'].includes((navigator as any).connection.effectiveType)
      
      // Use CSS pattern for mobile or low-performance devices
      if (isMobile || hasLowMemory || hasSlowConnection) {
        setUseCanvas(false)
      }
      
      // Check user preference for reduced motion
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (prefersReducedMotion) {
        setUseCanvas(false)
      }
    }

    checkPerformance()
    
    // Fade in animation
    setTimeout(() => setIsVisible(true), 100)
  }, [])

  return (
    <div 
      className={`fixed inset-0 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ zIndex: 0 }}
    >
      {useCanvas ? <HexagonGrid /> : <HexagonPattern />}
      
      {/* Additional overlay for depth */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(255, 136, 0, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 136, 0, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(255, 136, 0, 0.04) 0%, transparent 40%)
          `
        }}
      />
    </div>
  )
} 