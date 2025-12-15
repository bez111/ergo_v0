"use client"

import { useEffect,useState } from "react"

/**
 * Breakpoint values matching Tailwind defaults
 */
const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const

type Breakpoint = keyof typeof BREAKPOINTS

/**
 * useMobile - Hook to detect mobile devices and responsive breakpoints
 * 
 * Features:
 * - SSR-safe (returns undefined during SSR)
 * - Debounced resize handling
 * - Touch device detection
 * - Breakpoint utilities
 * 
 * Usage:
 * const { isMobile, isTablet, isTouch, breakpoint } = useMobile()
 */
export function useMobile() {
  const [state, setState] = useState<{
    isMobile: boolean
    isTablet: boolean
    isDesktop: boolean
    isTouch: boolean
    breakpoint: Breakpoint | "xs"
    width: number
  } | null>(null)

  useEffect(() => {
    const updateState = () => {
      const width = window.innerWidth
      const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0
      
      let breakpoint: Breakpoint | "xs" = "xs"
      if (width >= BREAKPOINTS["2xl"]) breakpoint = "2xl"
      else if (width >= BREAKPOINTS.xl) breakpoint = "xl"
      else if (width >= BREAKPOINTS.lg) breakpoint = "lg"
      else if (width >= BREAKPOINTS.md) breakpoint = "md"
      else if (width >= BREAKPOINTS.sm) breakpoint = "sm"

      setState({
        isMobile: width < BREAKPOINTS.md,
        isTablet: width >= BREAKPOINTS.md && width < BREAKPOINTS.lg,
        isDesktop: width >= BREAKPOINTS.lg,
        isTouch,
        breakpoint,
        width,
      })
    }

    // Initial update
    updateState()

    // Debounced resize handler
    let timeoutId: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(updateState, 150)
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
      clearTimeout(timeoutId)
    }
  }, [])

  // Return safe defaults for SSR
  if (!state) {
    return {
      isMobile: false,
      isTablet: false,
      isDesktop: true,
      isTouch: false,
      breakpoint: "lg" as const,
      width: 1024,
      isLoaded: false,
    }
  }

  return {
    ...state,
    isLoaded: true,
  }
}

/**
 * useBreakpoint - Check if current viewport matches a breakpoint
 * 
 * Usage:
 * const isAboveMd = useBreakpoint('md') // true if >= 768px
 * const isBelowLg = useBreakpoint('lg', 'below') // true if < 1024px
 */
export function useBreakpoint(
  breakpoint: Breakpoint,
  direction: "above" | "below" = "above"
): boolean {
  const { width, isLoaded } = useMobile()
  
  if (!isLoaded) {
    // SSR: assume desktop
    return direction === "above"
  }
  
  const breakpointWidth = BREAKPOINTS[breakpoint]
  return direction === "above" ? width >= breakpointWidth : width < breakpointWidth
}

/**
 * useIsTouch - Simple touch device detection
 */
export function useIsTouch(): boolean {
  const { isTouch } = useMobile()
  return isTouch
}

/**
 * useIsMobile - Simple mobile detection (< md breakpoint)
 */
export function useIsMobile(): boolean {
  const { isMobile } = useMobile()
  return isMobile
}

export default useMobile


