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
  style?: React.CSSProperties
  asChild?: boolean
}

export function CyberButton({
  children,
  onClick,
  variant = "default",
  size = "default",
  className,
  style,
  asChild = false,
}: CyberButtonProps) {
  return (
    <motion.div
      style={style}
      whileHover={{
        scale: 1.02,
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
      <Button 
        variant={variant} 
        size={size} 
        onClick={onClick} 
        className={className} 
        asChild={asChild}
      >
        {children}
      </Button>
    </motion.div>
  )
}
