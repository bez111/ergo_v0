'use client'

import { useEffect } from 'react'
import { onCLS, onFCP, onFID, onINP, onLCP, onTTFB } from 'web-vitals'

// Thresholds for alerting
const THRESHOLDS = {
  LCP: 2500, // 2.5s
  FID: 100,  // 100ms
  CLS: 0.1,  // 0.1
  INP: 200,  // 200ms
  FCP: 1800, // 1.8s
  TTFB: 800  // 800ms
}

// Send metrics to analytics
function sendToAnalytics(metric: any) {
  const body = {
    name: metric.name,
    value: metric.value,
    rating: metric.rating,
    delta: metric.delta,
    id: metric.id,
    navigationType: metric.navigationType,
    url: window.location.href,
    timestamp: Date.now()
  }

  // Send to Google Analytics if available
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      metric_id: metric.id,
      metric_value: metric.value,
      metric_delta: metric.delta,
      metric_rating: metric.rating
    })
  }

  // Send to custom endpoint for monitoring
  if (process.env.NEXT_PUBLIC_METRICS_ENDPOINT) {
    fetch(process.env.NEXT_PUBLIC_METRICS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }).catch(() => {
      // Fail silently
    })
  }

  // Alert on threshold violations
  checkThresholdViolation(metric)
}

// Check if metric violates threshold
function checkThresholdViolation(metric: any) {
  const threshold = THRESHOLDS[metric.name as keyof typeof THRESHOLDS]
  
  if (threshold && metric.value > threshold) {
    console.warn(`⚠️ ${metric.name} threshold violation:`, {
      value: metric.value,
      threshold,
      rating: metric.rating,
      url: window.location.href
    })

    // Send alert if configured
    if (process.env.NEXT_PUBLIC_ALERT_WEBHOOK) {
      fetch(process.env.NEXT_PUBLIC_ALERT_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          alert: `Web Vitals Threshold Violation`,
          metric: metric.name,
          value: metric.value,
          threshold,
          url: window.location.href,
          timestamp: new Date().toISOString()
        })
      }).catch(() => {
        // Fail silently
      })
    }
  }
}

// Track specific performance marks
function trackPerformanceMarks() {
  if (typeof window === 'undefined' || !window.performance) return

  // Track custom marks
  const marks = [
    'nextjs-hydration',
    'nextjs-route-change-start',
    'nextjs-route-change-complete'
  ]

  marks.forEach(markName => {
    try {
      const entries = performance.getEntriesByName(markName, 'mark')
      entries.forEach(entry => {
        sendToAnalytics({
          name: markName,
          value: entry.startTime,
          rating: 'custom',
          id: `${markName}-${Date.now()}`,
          navigationType: 'navigate'
        })
      })
    } catch (e) {
      // Ignore errors
    }
  })
}

export function WebVitalsTracker() {
  useEffect(() => {
    // Track Core Web Vitals
    onCLS(sendToAnalytics)
    onFCP(sendToAnalytics)
    onFID(sendToAnalytics)
    onINP(sendToAnalytics)
    onLCP(sendToAnalytics)
    onTTFB(sendToAnalytics)

    // Track custom performance marks
    trackPerformanceMarks()

    // Track long tasks
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.duration > 50) {
              sendToAnalytics({
                name: 'long-task',
                value: entry.duration,
                rating: entry.duration > 100 ? 'poor' : 'needs-improvement',
                id: `lt-${Date.now()}`,
                navigationType: 'navigate'
              })
            }
          }
        })
        observer.observe({ entryTypes: ['longtask'] })
        
        return () => observer.disconnect()
      } catch (e) {
        // PerformanceObserver not supported
      }
    }
  }, [])

  return null
}

// Export utility to manually track metrics
export function trackMetric(name: string, value: number) {
  sendToAnalytics({
    name,
    value,
    rating: 'custom',
    id: `${name}-${Date.now()}`,
    navigationType: 'navigate',
    delta: value
  })
}

export default WebVitalsTracker 