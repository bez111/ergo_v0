"use client"

import { useEffect } from "react"
import { logger } from "@/lib/logger"

// Declare gtag type for Google Analytics
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

interface PerformanceOptimizerProps {
  preloadUrls?: string[]
  prefetchUrls?: string[]
  criticalCSS?: string[]
  enableWebVitalsTracking?: boolean
}

export function PerformanceOptimizer({
  preloadUrls = [],
  prefetchUrls = [],
  criticalCSS = [],
  enableWebVitalsTracking = true
}: PerformanceOptimizerProps) {
  useEffect(() => {
    // Track processed URLs to avoid duplicates
    const processedUrls = new Set<string>()
    const createdElements: HTMLLinkElement[] = []

    // Preload critical resources for LCP optimization
    preloadUrls.forEach((url, index) => {
      if (processedUrls.has(url)) return
      processedUrls.add(url)

      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = url
      link.dataset.perfOptimizerPreload = `${index}`
      
      // Determine resource type for better optimization
      if (url.includes('.woff2') || url.includes('.woff')) {
        link.as = 'font'
        link.type = 'font/woff2'
        link.crossOrigin = 'anonymous'
      } else if (url.includes('.css')) {
        link.as = 'style'
      } else if (url.includes('.js')) {
        link.as = 'script'
      } else if (url.includes('.png') || url.includes('.jpg') || url.includes('.webp')) {
        link.as = 'image'
      } else {
        link.as = 'fetch'
        link.crossOrigin = 'anonymous'
      }
      
      document.head.appendChild(link)
      createdElements.push(link)
    })

    // Prefetch non-critical resources
    prefetchUrls.forEach((url, index) => {
      if (processedUrls.has(url)) return
      processedUrls.add(url)

      const link = document.createElement('link')
      link.rel = 'prefetch'
      link.href = url
      link.dataset.perfOptimizerPrefetch = `${index}`
      document.head.appendChild(link)
      createdElements.push(link)
    })

    // Preload critical CSS for LCP
    criticalCSS.forEach((css, index) => {
      if (processedUrls.has(css)) return
      processedUrls.add(css)

      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = css
      link.as = 'style'
      link.dataset.perfOptimizerCss = `${index}`
      document.head.appendChild(link)
      createdElements.push(link)
    })

    // Enhanced Core Web Vitals tracking
    if (enableWebVitalsTracking && typeof window !== 'undefined') {
      initAdvancedWebVitalsTracking()
    }

    // Optimize for FID - preload interactive resources
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement

          // Preload scripts for interactive elements
          if (target.dataset.preloadScript) {
            const script = document.createElement('link')
            script.rel = 'preload'
            script.href = target.dataset.preloadScript
            script.as = 'script'
            script.dataset.perfOptimizerScript = 'true'
            document.head.appendChild(script)
            createdElements.push(script)
          }
        }
      })
    }, { rootMargin: '50px' })

    // Observe interactive elements
    document.querySelectorAll('[data-preload-script]').forEach((el) => {
      observer.observe(el)
    })

    // Cleanup function
    return () => {
      observer.disconnect()
      // Remove created elements on unmount
      createdElements.forEach(element => {
        if (element.parentNode) {
          element.parentNode.removeChild(element)
        }
      })
    }
  }, [preloadUrls, prefetchUrls, criticalCSS, enableWebVitalsTracking])

  return null
}

// Advanced Web Vitals tracking function
function initAdvancedWebVitalsTracking() {
  // LCP tracking with element identification
  if ('PerformanceObserver' in window) {
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1] as any
      const lcp = lastEntry.renderTime || lastEntry.loadTime

      // Track LCP element for optimization insights
      const lcpElement = lastEntry.element
      // Log LCP element
      logger.perf('LCP', lcp, 2500)
      logger.log('LCP Element:', lcpElement?.tagName, lcpElement?.className)

      // Send to analytics
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'web_vitals', {
          name: 'LCP',
          value: Math.round(lcp),
          event_category: 'performance',
          non_interaction: true,
        })
      }
    })
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true })

    // FID tracking with event type
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry: any) => {
        const fid = entry.processingStart - entry.startTime
        // Log FID
        logger.perf('FID', fid, 100)
        logger.log('FID Event:', entry.name)

        if (typeof window.gtag !== 'undefined') {
          window.gtag('event', 'web_vitals', {
            name: 'FID',
            value: Math.round(fid),
            event_category: 'performance',
            non_interaction: true,
          })
        }
      })
    })
    fidObserver.observe({ type: 'first-input', buffered: true })

    // CLS tracking with shift details
    let clsValue = 0
    const clsEntries: any[] = []

    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const layoutShift = entry as any
        if (!layoutShift.hadRecentInput) {
          clsValue += layoutShift.value
          clsEntries.push(layoutShift)
        }
      }

      // Log CLS
      logger.metric('CLS', { value: clsValue, entries: clsEntries.length })

      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'web_vitals', {
          name: 'CLS',
          value: parseFloat(clsValue.toFixed(4)),
          event_category: 'performance',
          non_interaction: true,
        })
      }
    })
    clsObserver.observe({ type: 'layout-shift', buffered: true })

    // Additional performance metrics
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming

      if (navigation) {
        const ttfb = navigation.responseStart - navigation.requestStart
        const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart
        const loadComplete = navigation.loadEventEnd - navigation.loadEventStart

        // Log performance timing
        logger.metric('Performance Timing', {
          TTFB: ttfb,
          DCL: domContentLoaded,
          Load: loadComplete
        })

        if (typeof window.gtag !== 'undefined') {
          window.gtag('event', 'timing_complete', {
            name: 'page_load',
            value: Math.round(loadComplete),
          })
        }
      }
    })
  }

  // Monitor resource loading for optimization opportunities
  if ('PerformanceObserver' in window) {
    const resourceObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry: any) => {
        // Slow resources warning
        if (entry.duration > 1000) {
          logger.warn('🐌 Slow resource:', entry.name, entry.duration + 'ms')
        }

        // Large resources warning
        if (entry.transferSize > 500000) {
          logger.warn('📦 Large resource:', entry.name, (entry.transferSize / 1024 / 1024).toFixed(2) + 'MB')
        }
      })
    })
    resourceObserver.observe({ type: 'resource', buffered: true })
  }
} 