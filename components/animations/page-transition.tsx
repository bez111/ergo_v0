"use client"

import { useRef, useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import type React from "react"
import { MotionDiv, AnimatePresence } from "./motion"

interface PageTransitionProps {
  children: React.ReactNode
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 1.02,
  },
}

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.4,
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const isFirstLoad = useRef(true)
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    if (isFirstLoad.current) {
      setShouldAnimate(false)
      isFirstLoad.current = false
    } else {
      setShouldAnimate(true)
    }
  }, [pathname])

  return shouldAnimate ? (
    <AnimatePresence mode="wait" initial={false}>
      <MotionDiv
        key={pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="min-h-screen"
      >
        {children}
      </MotionDiv>
    </AnimatePresence>
  ) : (
    <div className="min-h-screen">{children}</div>
  )
}
