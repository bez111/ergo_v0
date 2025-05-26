"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface GlitchTextProps {
  text: string
  className?: string
}

export function GlitchText({ text, className = "" }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setIsGlitching(true)
        setTimeout(() => setIsGlitching(false), 150)
      }
    }, 2000)

    return () => clearInterval(glitchInterval)
  }, [])

  return (
    <motion.span
      className={`relative inline-block ${className}`}
      animate={
        isGlitching
          ? {
              x: [-2, 2, -1, 1, 0],
              textShadow: [
                "2px 0 #ff00ff, -2px 0 #00ffff",
                "-2px 0 #ff00ff, 2px 0 #00ffff",
                "2px 0 #ff00ff, -2px 0 #00ffff",
                "0 0 #ff00ff, 0 0 #00ffff",
              ],
            }
          : {}
      }
      transition={{ duration: 0.15 }}
    >
      {text}
      {isGlitching && (
        <>
          <motion.span
            className="absolute top-0 left-0.5 text-cyan-400 opacity-70"
            animate={{ opacity: [0.7, 0.3, 0.7] }}
            transition={{ duration: 0.1, repeat: 2 }}
          >
            {text}
          </motion.span>
          <motion.span
            className="absolute top-0 -left-0.5 text-red-500 opacity-70"
            animate={{ opacity: [0.7, 0.3, 0.7] }}
            transition={{ duration: 0.1, repeat: 2, delay: 0.05 }}
          >
            {text}
          </motion.span>
        </>
      )}
    </motion.span>
  )
}
