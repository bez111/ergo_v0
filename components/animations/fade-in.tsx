"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right"
}

export function FadeIn({ children, delay = 0, direction = "up" }: FadeInProps) {
  const directions = {
    up: { initial: { y: 20 }, animate: { y: 0 } },
    down: { initial: { y: -20 }, animate: { y: 0 } },
    left: { initial: { x: 20 }, animate: { x: 0 } },
    right: { initial: { x: -20 }, animate: { x: 0 } },
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction].initial }}
      animate={{ opacity: 1, ...directions[direction].animate }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  )
}
