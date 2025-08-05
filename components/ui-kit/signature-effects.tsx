"use client"

import React from "react"
import { motion } from "framer-motion"

// Glitch Effect для текста
export const GlitchText: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <div className={`relative ${className}`}>
      <div className="relative z-10">{children}</div>
      <div 
        className="absolute inset-0 text-brand-primary-400 opacity-70 mix-blend-screen"
        style={{
          animation: 'glitch-1 2s infinite linear alternate-reverse',
          transform: 'translate(-2px, 1px)',
        }}
      >
        {children}
      </div>
      <div 
        className="absolute inset-0 text-brand-secondary-400 opacity-70 mix-blend-screen"
        style={{
          animation: 'glitch-2 3s infinite linear alternate-reverse',
          transform: 'translate(2px, -1px)',
        }}
      >
        {children}
      </div>
      <style jsx>{`
        @keyframes glitch-1 {
          0%, 14%, 15%, 49%, 50%, 99%, 100% { clip-path: inset(0 0 98% 0); }
          1%, 13%, 16%, 48%, 51%, 98% { clip-path: inset(40% 0 43% 0); }
        }
        @keyframes glitch-2 {
          0%, 20%, 21%, 62%, 63%, 99%, 100% { clip-path: inset(98% 0 0 0); }
          21%, 61%, 64%, 98% { clip-path: inset(4% 0 91% 0); }
        }
      `}</style>
    </div>
  )
}

// Математические SVG паттерны
export const MathematicalPattern: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg 
      className={`absolute inset-0 w-full h-full opacity-10 ${className}`}
      viewBox="0 0 400 400"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="mathGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        </pattern>
        <pattern id="sigmaCurve" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M 10 40 Q 40 10 70 40 Q 40 70 10 40" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.5"/>
        </pattern>
      </defs>
      <rect fill="url(#mathGrid)" width="100%" height="100%"/>
      <rect fill="url(#sigmaCurve)" width="100%" height="100%"/>
      
      {/* Sigma symbols */}
      <g className="text-brand-primary-400/20">
        <text x="50" y="100" fontSize="24" fontFamily="serif">Σ</text>
        <text x="350" y="150" fontSize="18" fontFamily="serif">π</text>
        <text x="200" y="300" fontSize="20" fontFamily="serif">∑</text>
        <text x="100" y="350" fontSize="16" fontFamily="serif">∀</text>
        <text x="300" y="50" fontSize="22" fontFamily="serif">∃</text>
      </g>
    </svg>
  )
}

// Криптографические визуализации
export const CryptographicVisualization: React.FC<{ className?: string }> = ({ className = "" }) => {
  const [isAnimating, setIsAnimating] = React.useState(false)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 2000)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <linearGradient id="cryptoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.3"/>
            <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.2"/>
            <stop offset="100%" stopColor="#f97316" stopOpacity="0.1"/>
          </linearGradient>
        </defs>

        {/* Hash chain visualization */}
        <g className="text-brand-primary-400/30">
          {[...Array(6)].map((_, i) => (
            <motion.rect
              key={i}
              x={20 + i * 25}
              y={80}
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              initial={{ opacity: 0.3 }}
              animate={isAnimating ? { 
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.1, 1]
              } : {}}
              transition={{ 
                duration: 0.8, 
                delay: i * 0.2,
                repeat: isAnimating ? 1 : 0
              }}
            />
          ))}
          
          {/* Connection lines */}
          {[...Array(5)].map((_, i) => (
            <motion.line
              key={`line-${i}`}
              x1={40 + i * 25}
              y1={90}
              x2={45 + i * 25}
              y2={90}
              stroke="currentColor"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={isAnimating ? { pathLength: 1 } : { pathLength: 0.5 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
            />
          ))}
        </g>

        {/* Merkle tree structure */}
        <g className="text-brand-secondary-400/25">
          <circle cx="100" cy="40" r="6" fill="currentColor"/>
          <circle cx="70" cy="80" r="4" fill="currentColor"/>
          <circle cx="130" cy="80" r="4" fill="currentColor"/>
          <circle cx="55" cy="120" r="3" fill="currentColor"/>
          <circle cx="85" cy="120" r="3" fill="currentColor"/>
          <circle cx="115" cy="120" r="3" fill="currentColor"/>
          <circle cx="145" cy="120" r="3" fill="currentColor"/>
          
          {/* Tree connections */}
          <line x1="100" y1="46" x2="70" y2="74" stroke="currentColor" strokeWidth="1"/>
          <line x1="100" y1="46" x2="130" y2="74" stroke="currentColor" strokeWidth="1"/>
          <line x1="70" y1="84" x2="55" y2="114" stroke="currentColor" strokeWidth="1"/>
          <line x1="70" y1="84" x2="85" y2="114" stroke="currentColor" strokeWidth="1"/>
          <line x1="130" y1="84" x2="115" y2="114" stroke="currentColor" strokeWidth="1"/>
          <line x1="130" y1="84" x2="145" y2="114" stroke="currentColor" strokeWidth="1"/>
        </g>

        {/* Proof of Work visualization */}
        <g className="text-brand-primary-400/20">
          <text x="100" y="170" textAnchor="middle" fontSize="8" fontFamily="monospace">
            0x4f3c2a1b...
          </text>
          <text x="100" y="185" textAnchor="middle" fontSize="6" fontFamily="monospace" opacity="0.7">
            nonce: 1337
          </text>
        </g>
      </svg>
    </div>
  )
}

// Binary Rain Effect (Matrix-style)
export const BinaryRain: React.FC<{ className?: string }> = ({ className = "" }) => {
  const [drops, setDrops] = React.useState<Array<{ id: number; x: number; chars: string[] }>>([])

  React.useEffect(() => {
    const createDrop = (id: number) => ({
      id,
      x: Math.random() * 100,
      chars: Array.from({ length: 10 }, () => Math.random() > 0.5 ? '1' : '0')
    })

    setDrops(Array.from({ length: 15 }, (_, i) => createDrop(i)))

    const interval = setInterval(() => {
      setDrops(current => 
        current.map(drop => ({
          ...drop,
          chars: drop.chars.map(() => Math.random() > 0.8 ? (Math.random() > 0.5 ? '1' : '0') : drop.chars[Math.floor(Math.random() * drop.chars.length)])
        }))
      )
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {drops.map((drop, i) => (
        <motion.div
          key={drop.id}
          className="absolute text-brand-primary-400/20 font-mono text-xs"
          style={{ left: `${drop.x}%` }}
          initial={{ y: -100 }}
          animate={{ y: '100vh' }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            repeatDelay: Math.random() * 3,
            ease: 'linear'
          }}
        >
          {drop.chars.map((char, j) => (
            <div key={j} className="leading-4">
              {char}
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  )
}

// Geometric Proof Visualization
export const GeometricProof: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg viewBox="0 0 300 300" className={`w-full h-full ${className}`}>
      <defs>
        <linearGradient id="proofGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" stopOpacity="0.2"/>
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.1"/>
        </linearGradient>
      </defs>
      
      {/* Zero-knowledge proof visualization */}
      <g className="text-brand-primary-400/25">
        {/* Main proof circle */}
        <motion.circle
          cx="150"
          cy="150"
          r="80"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Inner elements */}
        <circle cx="150" cy="150" r="40" fill="url(#proofGradient)" opacity="0.3"/>
        <circle cx="150" cy="150" r="20" fill="currentColor" opacity="0.5"/>
        
        {/* Proof points */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const x = 150 + 60 * Math.cos((angle * Math.PI) / 180)
          const y = 150 + 60 * Math.sin((angle * Math.PI) / 180)
          return (
            <motion.circle
              key={i}
              cx={x}
              cy={y}
              r="4"
              fill="currentColor"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 0] }}
              transition={{
                duration: 2,
                delay: i * 0.3,
                repeat: Infinity,
                repeatDelay: 3
              }}
            />
          )
        })}
      </g>
      
      {/* Mathematical notation */}
      <text x="150" y="260" textAnchor="middle" fontSize="12" className="text-brand-primary-400/40" fontFamily="serif">
        ∃ x ∈ ℤ : σ(x) = 1
      </text>
    </svg>
  )
}

// Floating Particles Effect
export const FloatingParticles: React.FC<{ className?: string; count?: number }> = ({ 
  className = "", 
  count = 20 
}) => {
  const particles = React.useMemo(() => 
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5
    })), [count]
  )

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-brand-primary-400/30 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`
          }}
          animate={{
            y: [-20, -40, -20],
            x: [-10, 10, -10],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

// Hexagonal Grid Background
export const HexagonalGrid: React.FC<{ className?: string }> = ({ className = "" }) => {
  // Создаем правильный шестиугольник с flat-top
  const R = 40; // радиус
  const cx = 50, cy = 50; // центр
  const points = [...Array(6)].map((_, i) => {
    const angle = Math.PI / 3 * i; // шаг 60°
    // flat-top: смещение на Math.PI/6
    return [
      cx + R * Math.cos(angle),
      cy + R * Math.sin(angle)
    ].join(',');
  }).join(' ');

  return (
    <svg 
      className={`absolute inset-0 w-full h-full opacity-5 ${className}`}
      viewBox="0 0 400 400"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="hexPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <polygon 
            points={points}
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect fill="url(#hexPattern)" width="100%" height="100%" className="text-brand-primary-400"/>
    </svg>
  )
}

// Export all signature effects
export const signatureEffects = {
  GlitchText,
  MathematicalPattern,
  CryptographicVisualization,
  BinaryRain,
  GeometricProof,
  FloatingParticles,
  HexagonalGrid
} 