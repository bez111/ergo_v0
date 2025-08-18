// Real User Monitoring (RUM) для Core Web Vitals
import { onLCP, onINP, onCLS, onFCP, onTTFB, Metric } from 'web-vitals'

type VitalsPayload = {
  name: 'LCP' | 'INP' | 'CLS' | 'FCP' | 'TTFB'
  id: string
  value: number
  rating: 'good' | 'needs-improvement' | 'poor'
  page: string
  path: string
  device: 'mobile' | 'desktop'
  connection?: string | undefined
  label?: string
  navigationType: 'navigate' | 'reload' | 'back-forward' | 'prerender' | 'back-forward-cache' | 'restore'
}

function getDeviceType(): 'mobile' | 'desktop' {
  // Simple mobile detection
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) ? 'mobile' : 'desktop'
}

function getConnectionType(): string | undefined {
  const nav = navigator as any
  const connection = nav.connection || nav.mozConnection || nav.webkitConnection
  return connection?.effectiveType
}

function sendToAnalytics(metric: Metric) {
  // Don't send in development
  if (process.env.NODE_ENV === 'development') {
    console.log('[RUM]', metric.name, metric.value, metric.rating)
    return
  }

  const body: VitalsPayload = {
    name: metric.name as VitalsPayload['name'],
    id: metric.id,
    value: Math.round(metric.value),
    rating: metric.rating,
    page: document.title,
    path: location.pathname + location.search,
    device: getDeviceType(),
    ...(getConnectionType() && { connection: getConnectionType() }),
    navigationType: metric.navigationType || 'navigate'
  }

  // Use sendBeacon for reliability, fallback to fetch
  const url = '/api/rum'
  const blob = new Blob([JSON.stringify(body)], { type: 'application/json' })
  
  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, blob)
  } else {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
      keepalive: true
    }).catch(() => {
      // Silently fail - don't impact user experience
    })
  }
}

export function initRUM() {
  // Core Web Vitals
  onLCP(sendToAnalytics)
  onINP(sendToAnalytics)
  onCLS(sendToAnalytics)
  
  // Additional metrics
  onFCP(sendToAnalytics)
  onTTFB(sendToAnalytics)
  
  // Log page view
  if (process.env.NODE_ENV === 'development') {
    console.log('[RUM] Initialized for', location.pathname)
  }
}

// Performance marks for custom metrics
export function markPerformance(name: string) {
  if (typeof window !== 'undefined' && window.performance) {
    performance.mark(name)
  }
}

export function measurePerformance(name: string, startMark: string, endMark: string) {
  if (typeof window !== 'undefined' && window.performance) {
    try {
      performance.measure(name, startMark, endMark)
      const measure = performance.getEntriesByName(name)[0]
      if (measure && process.env.NODE_ENV === 'development') {
        console.log(`[Performance] ${name}: ${Math.round(measure.duration)}ms`)
      }
    } catch (e) {
      // Silently fail
    }
  }
} 