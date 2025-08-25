"use client"

import React from 'react'

export function GridBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
      {/* Grid pattern */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 136, 0, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 136, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          backgroundPosition: '0 0, 0 0'
        }}
      />
      
      {/* Perspective grid effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(180deg, 
              transparent 0%, 
              rgba(0, 0, 0, 0.2) 50%, 
              rgba(0, 0, 0, 0.8) 100%
            )
          `,
          transform: 'perspective(1000px) rotateX(60deg)',
          transformOrigin: 'center -100%',
          opacity: 0.5
        }}
      />
      
      {/* Glow effect in center */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at center, rgba(255, 136, 0, 0.1) 0%, transparent 70%)',
          filter: 'blur(100px)'
        }}
      />
    </div>
  )
} 