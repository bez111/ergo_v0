"use client"

import React from 'react'

export function GridBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
      {/* Additional grid overlay for depth */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 136, 0, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 136, 0, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          backgroundPosition: '0 0, 0 0'
        }}
      />
      
      {/* Subtle vignette effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at center, 
              transparent 0%, 
              rgba(0, 0, 0, 0.4) 100%
            )
          `
        }}
      />
      
      {/* Top and bottom gradients for depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to bottom, 
              rgba(0, 0, 0, 0.5) 0%, 
              transparent 20%, 
              transparent 80%, 
              rgba(0, 0, 0, 0.7) 100%
            )
          `
        }}
      />
    </div>
  )
} 