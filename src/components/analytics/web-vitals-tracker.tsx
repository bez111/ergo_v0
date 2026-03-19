'use client'

/* eslint-disable @typescript-eslint/no-unused-vars */

import { useEffect } from 'react'
import { onCLS, onFCP, onINP, onLCP, onTTFB } from 'web-vitals'

// Note: Window.gtag type is declared in newsletter-analytics.ts

// Internal metric type that extends web-vitals Metric to also handle custom metrics
interface AnalyticsMetric {
  name: string
  value: number
  rating: string
  delta?: number
  id: string
  navigationType: string
}

// Thresholds for alerting (FID deprecated, use INP instead)
const THRESHOLDS = {
  LCP: 2500, // 2.5s
  CLS: 0.1,  // 0.1
  INP: 200,  // 200ms
  FCP: 1800, // 1.8s
  TTFB: 800  // 800ms
}

// Send metrics to analytics
function sendToAnalytics(metric: AnalyticsMetric) {
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
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
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
function checkThresholdViolation(metric: AnalyticsMetric) {
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
    // Track Core Web Vitals (FID deprecated in web-vitals v4, use INP)
    onCLS(sendToAnalytics)
    onFCP(sendToAnalytics)
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
      } catch {
        // PerformanceObserver not supported
      }
    }
    return undefined
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