"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type React from "react"

interface CyberButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
  asChild?: boolean
}

export function CyberButton({
  children,
  onClick,
  variant = "default",
  size = "default",
  className,
  asChild,
}: CyberButtonProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 20px rgba(255, 136, 0, 0.5)",
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
    >
      <Button variant={variant} size={size} onClick={onClick} className={className} asChild={asChild}>
        <motion.div
          initial={false}
          whileHover={{
            textShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
          }}
        >
          {children}
        </motion.div>
      </Button>
    </motion.div>
  )
}
