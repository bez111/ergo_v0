"use client"

import { Card } from "@/components/ui/card"
import type React from "react"
import { motion } from "framer-motion"

interface CyberCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function CyberCard({ children, className, delay = 0 }: CyberCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
        rotateX: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotateX: 0,
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      }}
      whileHover={{
        y: -10,
        rotateX: 5,
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
    >
      <Card className={`bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 backdrop-blur-xl rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl ${className || ""}`}>
        <motion.div
          whileHover={{
            scale: 1.02,
          }}
          transition={{
            duration: 0.2,
            ease: "easeOut",
          }}
        >
          {children}
        </motion.div>
      </Card>
    </motion.div>
  )
}
