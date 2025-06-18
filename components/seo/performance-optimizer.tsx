"use client"

import { useEffect } from "react"

interface PerformanceOptimizerProps {
  preloadUrls?: string[]
  prefetchUrls?: string[]
  criticalCSS?: string[]
}

export function PerformanceOptimizer({ 
  preloadUrls = [], 
  prefetchUrls = [],
  criticalCSS = []
}: PerformanceOptimizerProps) {
  useEffect(() => {
    // Preload critical resources
    preloadUrls.forEach(url => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = url
      link.as = url.endsWith('.css') ? 'style' : 
                url.endsWith('.js') ? 'script' : 'fetch'
      document.head.appendChild(link)
    })

    // Prefetch non-critical resources
    prefetchUrls.forEach(url => {
      const link = document.createElement('link')
      link.rel = 'prefetch'
      link.href = url
      document.head.appendChild(link)
    })

    // Preload critical CSS
    criticalCSS.forEach(css => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = css
      link.as = 'style'
      document.head.appendChild(link)
    })

    // Cleanup function
    return () => {
      // Remove preload/prefetch links on unmount
      const links = document.querySelectorAll('link[rel="preload"], link[rel="prefetch"]')
      links.forEach(link => {
        if (preloadUrls.includes(link.getAttribute('href') || '') || 
            prefetchUrls.includes(link.getAttribute('href') || '') ||
            criticalCSS.includes(link.getAttribute('href') || '')) {
          link.remove()
        }
      })
    }
  }, [preloadUrls, prefetchUrls, criticalCSS])

  return null
} 