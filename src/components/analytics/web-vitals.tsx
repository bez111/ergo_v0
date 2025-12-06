"use client"

/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect } from 'react'
import { onCLS, onFCP, onLCP, onTTFB, onINP } from 'web-vitals'

interface WebVitalsProps {
  debug?: boolean
}

export function WebVitals({ debug = false }: WebVitalsProps) {
  useEffect(() => {
    const reportWebVitals = (metric: any) => {
      if (debug) {
        console.log(`[Web Vitals] ${metric.name}:`, metric.value)
      }

      // Send to Google Analytics 4
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
          custom_map: {
            metric_id: 'dimension1',
            metric_value: 'metric1',
            metric_delta: 'metric2'
          }
        })
      }

      // Send to custom analytics endpoint (optional)
      if (process.env.NODE_ENV === 'production') {
        fetch('/api/analytics/web-vitals', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: metric.name,
            value: metric.value,
            id: metric.id,
            delta: metric.delta,
            rating: metric.rating,
            navigationType: metric.navigationType,
            url: window.location.href,
            timestamp: Date.now()
          })
        }).catch(console.error)
      }
    }

    // Measure Core Web Vitals (FID was deprecated in favor of INP)
    onCLS(reportWebVitals)
    onFCP(reportWebVitals)
    onLCP(reportWebVitals)
    onTTFB(reportWebVitals)
    onINP(reportWebVitals)

    // Log thresholds for debugging
    if (debug) {
      console.log('[Web Vitals] Thresholds:')
      console.log('LCP: Good ≤ 2.5s, Needs Improvement ≤ 4.0s, Poor > 4.0s')
      console.log('INP: Good ≤ 200ms, Needs Improvement ≤ 500ms, Poor > 500ms')
      console.log('CLS: Good ≤ 0.1, Needs Improvement ≤ 0.25, Poor > 0.25')
    }
  }, [debug])

  return null
}

// Type declaration for gtag
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void
  }
}
