"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import type React from "react"

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
        boxShadow: "0 20px 40px rgba(255, 136, 0, 0.3)",
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
      <Card className={className}>
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
