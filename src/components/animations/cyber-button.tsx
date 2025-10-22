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
  asChild = false,
}: CyberButtonProps) {
  return (
    <motion.div
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
        className={`text-black ${className}`} 
        asChild={asChild}
      >
        {children}
      </Button>
    </motion.div>
  )
}
