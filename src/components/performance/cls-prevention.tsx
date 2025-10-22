import { useLayoutEffect, useState, useRef } from 'react'

interface CLSPreventionProps {
  children: React.ReactNode
  reserveSpace?: boolean
  minHeight?: number
}

export function CLSPrevention({ 
  children, 
  reserveSpace = true,
  minHeight = 0 
}: CLSPreventionProps) {
  const [dimensions, setDimensions] = useState({ width: 0, height: minHeight })
  const containerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!reserveSpace) return

    const measureContent = () => {
      const element = containerRef.current
      if (element) {
        const rect = element.getBoundingClientRect()
        setDimensions({
          width: rect.width || element.scrollWidth,
          height: Math.max(rect.height || element.scrollHeight, minHeight)
        })
      }
    }

    // Initial measurement
    measureContent()
    
    // Re-measure on resize
    const resizeObserver = new ResizeObserver(measureContent)
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }

    return () => resizeObserver.disconnect()
  }, [reserveSpace, minHeight])

  return (
    <div 
      ref={containerRef}
      className="content-container"
      style={{ 
        minWidth: reserveSpace ? `${dimensions.width}px` : 'auto',
        minHeight: reserveSpace ? `${dimensions.height}px` : `${minHeight}px`,
        contain: 'layout style',
        willChange: 'auto'
      }}
    >
      {children}
    </div>
  )
}

// Specialized skeleton with exact dimensions
interface DimensionalSkeletonProps {
  width: number | string
  height: number | string
  className?: string
  rounded?: boolean
}

export function DimensionalSkeleton({ 
  width, 
  height, 
  className = '',
  rounded = true 
}: DimensionalSkeletonProps) {
  return (
    <div 
      className={`animate-pulse bg-neutral-800 ${rounded ? 'rounded' : ''} ${className}`}
      style={{ 
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        contain: 'layout'
      }}
      aria-hidden="true"
    />
  )
}

// Font loading optimization to prevent CLS
export function FontLoadOptimizer() {
  useLayoutEffect(() => {
    // Preload critical fonts
    const fontPreloads = [
      '/fonts/inter-var.woff2',
      '/fonts/inter-latin-400.woff2',
      '/fonts/inter-latin-700.woff2'
    ]

    fontPreloads.forEach(font => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = font
      link.as = 'font'
      link.type = 'font/woff2'
      link.crossOrigin = 'anonymous'
      document.head.appendChild(link)
    })

    // Optimize font display
    const style = document.createElement('style')
    style.textContent = `
      @font-face {
        font-family: 'Inter';
        font-display: optional;
        src: url('/fonts/inter-var.woff2') format('woff2');
      }
    `
    document.head.appendChild(style)
  }, [])

  return null
}

// Layout shift measurement and prevention
export function LayoutShiftTracker() {
  useLayoutEffect(() => {
    let clsValue = 0
    
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Only count layout shifts without recent user input
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value
          
          // Log if CLS exceeds threshold
          if (clsValue > 0.1) {
            console.warn(`CLS threshold exceeded: ${clsValue}`)
          }
        }
      }
    })

    observer.observe({ entryTypes: ['layout-shift'] })
    
    return () => observer.disconnect()
  }, [])

  return null
} 