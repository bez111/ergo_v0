"use client"

/* eslint-disable react-hooks/set-state-in-effect */

import { useRef, useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import type React from "react"
import { MotionDiv } from "./motion"

interface PageTransitionProps {
  children: React.ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const isFirstLoad = useRef(true)
  const [show, setShow] = useState(true)

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false
      setShow(true)
    } else {
      setShow(false)
      setTimeout(() => setShow(true), 10)
    }
  }, [pathname])

  return show ? (
    <MotionDiv
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen"
    >
      {children}
    </MotionDiv>
  ) : null
}
