"use client"

/* eslint-disable @typescript-eslint/no-unused-vars, react-hooks/exhaustive-deps */

import React, { useState, useEffect } from "react"
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
        className="absolute inset-0 text-orange-400 opacity-70 mix-blend-screen"
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
      <g className="text-orange-400/20">
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
        <g className="text-orange-400/30">
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
        <g className="text-orange-400/20">
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
          className="absolute text-orange-400/20 font-mono text-xs"
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
      <g className="text-orange-400/25">
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
      <text x="150" y="260" textAnchor="middle" fontSize="12" className="text-orange-400/40" fontFamily="serif">
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
  const [isClient, setIsClient] = React.useState(false)
  
  React.useEffect(() => {
    setIsClient(true)
  }, [])

  const particles = React.useMemo(() => {
    if (!isClient) return []
    
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5
    }))
  }, [count, isClient])

  if (!isClient) {
    return <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} />
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-orange-400/30 rounded-full"
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
    const angle = Math.PI / 3 * i + Math.PI / 6; // шаг 60° + смещение для flat-top
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
      <rect fill="url(#hexPattern)" width="100%" height="100%" className="text-orange-400"/>
    </svg>
  )
}

// Glitch Hex SVG с анимацией
export const GlitchHex: React.FC<{ 
  size?: number; 
  className?: string;
  animated?: boolean;
}> = ({ size = 48, className = "", animated = false }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 48 48" 
      className={`group ${className}`}
    >
      <g>
        {/* Основной шестиугольник */}
        <polygon
          points="38,24 32,39 16,39 10,24 16,9 32,9"
          fill="none"
          stroke="#FF8800"
          strokeWidth="3"
          className="transition-all duration-300 group-hover:stroke-cyan-400"
        />
        
        {/* Глитч-слои */}
        {animated && (
          <>
            <polygon
              points="38,24 32,39 16,39 10,24 16,9 32,9"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="1"
              className="opacity-20 animate-rareGlitch"
              style={{ filter: 'url(#glitchFilter)' }}
            />
            <polygon
              points="38,24 32,39 16,39 10,24 16,9 32,9"
              fill="none"
              stroke="#FF8800"
              strokeWidth="0.5"
              className="opacity-25 animate-rareGlitch"
              style={{ animationDelay: '10s' }}
            />
          </>
        )}
        
        {/* Сигма-символ */}
        <text
          x="24"
          y="31"
          textAnchor="middle"
          fontSize="18"
          fontWeight="bold"
          fill="#FF8800"
          stroke="none"
          className="select-none pointer-events-none"
        >
          Σ
        </text>
        
        {/* Глитч-сигма */}
        {animated && (
          <>
            <text
              x="24"
              y="31"
              textAnchor="middle"
              fontSize="18"
              fontWeight="bold"
              fill="#22d3ee"
              stroke="none"
              opacity="0.4"
              className="select-none pointer-events-none animate-glitch"
              style={{ filter: 'url(#glitchFilter)' }}
            >
              Σ
            </text>
            <text
              x="24"
              y="31"
              textAnchor="middle"
              fontSize="18"
              fontWeight="bold"
              fill="#FF8800"
              stroke="none"
              opacity="0.6"
              className="select-none pointer-events-none animate-glitch-delayed"
              style={{ filter: 'url(#glitchFilter)' }}
            >
              Σ
            </text>
          </>
        )}
      </g>
      
      <defs>
        <filter id="glitchFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" result="turb"/>
          <feDisplacementMap in2="turb" in="SourceGraphic" scale="2"/>
        </filter>
      </defs>
    </svg>
  )
}

// Underground Manifesto Block
export const UndergroundManifesto: React.FC<{ className?: string }> = ({ className = "" }) => {
  const [text, setText] = useState("")
  const [idx, setIdx] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  
  const manifestos = [
    "We write code not for compliance. We write code to break the chains.",
    "Σ | More than a blockchain. A movement.",
    "Underground. Sovereign. Open source forever.",
    "Privacy is not a feature. It's a fundamental right.",
    "Decentralization is not optional. It's inevitable."
  ]

  useEffect(() => {
    let t = 0
    let c = ""
    
    const typeNext = () => {
      if (t < manifestos[idx].length) {
        c += manifestos[idx][t++]
        setText(c)
        // Более реалистичная скорость печати с вариациями
        const baseDelay = 50
        const randomDelay = Math.random() * 30
        const charDelay = baseDelay + randomDelay
        
        // Случайные паузы для имитации человеческой печати
        if (Math.random() < 0.1) {
          setTimeout(typeNext, charDelay + 200)
        } else {
          setTimeout(typeNext, charDelay)
        }
      } else {
        // Пауза перед следующей цитатой
        setTimeout(() => {
          setIdx((idx + 1) % manifestos.length)
          setText("")
        }, 4000)
      }
    }
    
    typeNext()
  }, [idx])

  // Мигающий курсор
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <div className={`bg-neutral-950 text-orange-500 border border-orange-500/30 rounded-xl p-6 text-center font-mono text-lg shadow-lg relative overflow-hidden ${className}`}>
      {/* ASCII Art Border */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 border-t border-orange-500/50"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 border-b border-orange-500/50"></div>
        <div className="absolute top-0 left-0 w-1 h-full border-l border-orange-500/50"></div>
        <div className="absolute top-0 right-0 w-1 h-full border-r border-orange-500/50"></div>
        
        {/* Corner decorations */}
        <div className="absolute top-2 left-2 text-cyan-400 text-xs">{"//"}</div>
        <div className="absolute top-2 right-2 text-cyan-400 text-xs">{"//"}</div>
        <div className="absolute bottom-2 left-2 text-cyan-400 text-xs">{"//"}</div>
        <div className="absolute bottom-2 right-2 text-cyan-400 text-xs">{"//"}</div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10">
        <div className="mb-4 min-h-[2.5rem] flex items-center justify-center">
          <span className="font-bold tracking-wide text-xl">
            {text}
            {showCursor && <span className="text-cyan-400">▌</span>}
          </span>
        </div>
        
        {/* Meta info */}
        <div className="mt-6 flex justify-center items-center space-x-4 text-xs text-gray-500">
          <span>Revised: 2025</span>
          <span className="text-cyan-400">|</span>
          <span>Underground v.1.6</span>
          <span className="text-cyan-400">|</span>
          <span className="text-orange-500 font-bold">Σ</span>
        </div>
      </div>
      
      {/* Animated scan line */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse opacity-50"></div>
    </div>
  )
}

// Glitch Button с искажением
export const GlitchButton: React.FC<{ 
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}> = ({ children, className = "", onClick }) => {
  return (
    <button 
      className={`relative bg-orange-500 text-black px-8 py-3 rounded-xl overflow-hidden group transition-all duration-300 hover:bg-orange-400 active:scale-95 ${className}`}
      onClick={onClick}
    >
      {/* Основной текст */}
      <span className="relative z-10 font-semibold tracking-wide">
        {children}
      </span>
      
      {/* Glitch border overlay */}
      <span className="absolute inset-0 border border-cyan-400 opacity-20 group-hover:animate-glitchBorder pointer-events-none rounded-xl" />
      
      {/* Glitch text overlay */}
      <span className="absolute inset-0 flex items-center justify-center font-semibold tracking-wide text-black opacity-0 group-hover:opacity-10 group-active:opacity-20 transition-opacity duration-200 pointer-events-none">
        {children}
      </span>
      
      {/* Corner decorations */}
      <div className="absolute top-1 left-1 w-2 h-2 border-l border-t border-cyan-400 opacity-50"></div>
      <div className="absolute top-1 right-1 w-2 h-2 border-r border-t border-cyan-400 opacity-50"></div>
      <div className="absolute bottom-1 left-1 w-2 h-2 border-l border-b border-cyan-400 opacity-50"></div>
      <div className="absolute bottom-1 right-1 w-2 h-2 border-r border-b border-cyan-400 opacity-50"></div>
    </button>
  )
}

// Watermark Hex - еле видимый watermark
export const WatermarkHex: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <svg 
        className="w-full h-full opacity-[0.02] text-orange-400 animate-watermarkFloat"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <g>
          <polygon
            points="50,10 80,30 80,70 50,90 20,70 20,30"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <text
            x="50"
            y="60"
            textAnchor="middle"
            fontSize="12"
            fontWeight="bold"
            fill="currentColor"
            stroke="none"
          >
            Σ
          </text>
        </g>
      </svg>
    </div>
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
  HexagonalGrid,
  GlitchHex,
  UndergroundManifesto,
  GlitchButton,
  WatermarkHex
} 