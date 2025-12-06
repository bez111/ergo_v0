'use client'

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any */

import { useEffect } from 'react'

interface WebVitalsMetric {
  name: string
  value: number
  rating: 'good' | 'needs-improvement' | 'poor'
  delta: number
}

export function CoreWebVitalsTracker() {
  useEffect(() => {
    // Dynamic import to avoid SSR issues
    import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
      
      // Largest Contentful Paint (LCP)
      onLCP((metric) => {
        const rating = metric.value <= 2500 ? 'good' : 
                      metric.value <= 4000 ? 'needs-improvement' : 'poor'
        
        console.log('LCP:', {
          value: metric.value,
          rating,
          element: metric.entries[metric.entries.length - 1]?.element
        })
        
        // Send to analytics
        sendToAnalytics('LCP', metric.value, rating)
      })

      // First Input Delay (FID) / Interaction to Next Paint (INP)
      onFID((metric) => {
        const rating = metric.value <= 100 ? 'good' : 
                      metric.value <= 300 ? 'needs-improvement' : 'poor'
        
        console.log('FID:', {
          value: metric.value,
          rating
        })
        
        sendToAnalytics('FID', metric.value, rating)
      })

      // Cumulative Layout Shift (CLS)
      onCLS((metric) => {
        const rating = metric.value <= 0.1 ? 'good' : 
                      metric.value <= 0.25 ? 'needs-improvement' : 'poor'
        
        console.log('CLS:', {
          value: metric.value,
          rating,
          sources: metric.entries.map(entry => ({
            element: entry.sources?.[0]?.node,
            value: entry.value
          }))
        })
        
        sendToAnalytics('CLS', metric.value, rating)
      })

      // First Contentful Paint (FCP)
      onFCP((metric) => {
        const rating = metric.value <= 1800 ? 'good' : 
                      metric.value <= 3000 ? 'needs-improvement' : 'poor'
        
        console.log('FCP:', {
          value: metric.value,
          rating
        })
        
        sendToAnalytics('FCP', metric.value, rating)
      })

      // Time to First Byte (TTFB)
      onTTFB((metric) => {
        const rating = metric.value <= 800 ? 'good' : 
                      metric.value <= 1800 ? 'needs-improvement' : 'poor'
        
        console.log('TTFB:', {
          value: metric.value,
          rating
        })
        
        sendToAnalytics('TTFB', metric.value, rating)
      })
    })
  }, [])

  return null
}

// Analytics integration
function sendToAnalytics(metric: string, value: number, rating: string) {
  // Send to Google Analytics 4
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as any).gtag('event', metric, {
      custom_parameter_1: value,
      custom_parameter_2: rating,
      page_location: window.location.href
    })
  }

  // Send to custom analytics endpoint
  if (process.env.NODE_ENV === 'production') {
    fetch('/api/analytics/web-vitals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        metric,
        value,
        rating,
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: Date.now()
      })
    }).catch(console.error)
  }
}

// Performance budget alerts
export function PerformanceBudgetMonitor() {
  useEffect(() => {
    const budgets = {
      LCP: 2500,
      FID: 100,
      CLS: 0.1,
      FCP: 1800,
      TTFB: 800
    }

    // Monitor performance entries
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming
          
          // Check TTFB budget
          if (navEntry.responseStart - navEntry.requestStart > budgets.TTFB) {
            console.warn(`TTFB budget exceeded: ${navEntry.responseStart - navEntry.requestStart}ms`)
          }
        }
      })
    })

    observer.observe({ entryTypes: ['navigation'] })
    
    return () => observer.disconnect()
  }, [])

  return null
} 