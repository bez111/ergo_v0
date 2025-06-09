"use client"

import dynamic from 'next/dynamic'
import type React from "react"

interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}

// Dynamically import motion components
const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), {
  ssr: false
})

export function StaggerContainer({ children, className, staggerDelay = 0.1 }: StaggerContainerProps) {
  return (
    <MotionDiv
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={`flex flex-wrap justify-center items-center gap-4 ${className || ""}`}
    >
      {children}
    </MotionDiv>
  )
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <MotionDiv
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.25, 0.25, 0.25, 0.75],
          },
        },
      }}
      className={className}
    >
      {children}
    </MotionDiv>
  )
}
