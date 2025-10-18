"use client"

import { useEffect, useState } from "react"

interface WebVitalsData {
  lcp: number | null
  fid: number | null
  cls: number | null
  ttfb: number | null
  fcp: number | null
}

interface CoreWebVitalsDashboardProps {
  showInProduction?: boolean
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
}

export function CoreWebVitalsDashboard({ 
  showInProduction = false,
  position = "bottom-right" 
}: CoreWebVitalsDashboardProps) {
  const [vitals, setVitals] = useState<WebVitalsData>({
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    fcp: null,
  })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show in development or if explicitly enabled in production
    if (process.env.NODE_ENV === 'production' && !showInProduction) {
      return
    }

    setIsVisible(true)

    if (!('PerformanceObserver' in window)) {
      console.warn('PerformanceObserver not supported')
      return
    }

    // LCP Observer
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1] as any
      const lcp = lastEntry.renderTime || lastEntry.loadTime
      setVitals(prev => ({ ...prev, lcp }))
    })
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true })

    // FID Observer
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry: any) => {
        const fid = entry.processingStart - entry.startTime
        setVitals(prev => ({ ...prev, fid }))
      })
    })
    fidObserver.observe({ type: 'first-input', buffered: true })

    // CLS Observer
    let clsValue = 0
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const layoutShift = entry as any
        if (!layoutShift.hadRecentInput) {
          clsValue += layoutShift.value
        }
      }
      setVitals(prev => ({ ...prev, cls: clsValue }))
    })
    clsObserver.observe({ type: 'layout-shift', buffered: true })

    // FCP Observer
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry: any) => {
        if (entry.name === 'first-contentful-paint') {
          setVitals(prev => ({ ...prev, fcp: entry.startTime }))
        }
      })
    })
    fcpObserver.observe({ type: 'paint', buffered: true })

    // TTFB from Navigation Timing
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    if (navigation) {
      const ttfb = navigation.responseStart - navigation.requestStart
      setVitals(prev => ({ ...prev, ttfb }))
    }

    return () => {
      lcpObserver.disconnect()
      fidObserver.disconnect()
      clsObserver.disconnect()
      fcpObserver.disconnect()
    }
  }, [showInProduction])

  if (!isVisible) return null

  const getScoreColor = (metric: string, value: number | null) => {
    if (value === null) return 'text-gray-400'
    
    switch (metric) {
      case 'lcp':
        return value <= 2500 ? 'text-green-400' : value <= 4000 ? 'text-yellow-400' : 'text-red-400'
      case 'fid':
        return value <= 100 ? 'text-green-400' : value <= 300 ? 'text-yellow-400' : 'text-red-400'
      case 'cls':
        return value <= 0.1 ? 'text-green-400' : value <= 0.25 ? 'text-yellow-400' : 'text-red-400'
      case 'ttfb':
        return value <= 600 ? 'text-green-400' : value <= 1000 ? 'text-yellow-400' : 'text-red-400'
      case 'fcp':
        return value <= 1800 ? 'text-green-400' : value <= 3000 ? 'text-yellow-400' : 'text-red-400'
      default:
        return 'text-gray-400'
    }
  }

  const formatValue = (metric: string, value: number | null) => {
    if (value === null) return '—'
    
    switch (metric) {
      case 'cls':
        return value.toFixed(3)
      case 'lcp':
      case 'fid':
      case 'ttfb':
      case 'fcp':
        return `${Math.round(value)}ms`
      default:
        return value.toString()
    }
  }

  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4',
  }

  return (
    <div 
      className={`fixed ${positionClasses[position]} z-50 bg-black/90 backdrop-blur-sm rounded-lg p-3 border border-gray-700 font-mono text-xs shadow-lg`}
      style={{ minWidth: '200px' }}
    >
      <div className="flex items-center gap-2 mb-2 pb-2 border-b border-gray-700">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <span className="text-white font-semibold">Core Web Vitals</span>
      </div>
      
      <div className="space-y-1">
        <div className="flex justify-between items-center">
          <span className="text-gray-300">LCP:</span>
          <span className={getScoreColor('lcp', vitals.lcp)}>
            {formatValue('lcp', vitals.lcp)}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300">FID:</span>
          <span className={getScoreColor('fid', vitals.fid)}>
            {formatValue('fid', vitals.fid)}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300">CLS:</span>
          <span className={getScoreColor('cls', vitals.cls)}>
            {formatValue('cls', vitals.cls)}
          </span>
        </div>
        
        <div className="flex justify-between items-center text-gray-500">
          <span>TTFB:</span>
          <span className={getScoreColor('ttfb', vitals.ttfb)}>
            {formatValue('ttfb', vitals.ttfb)}
          </span>
        </div>
        
        <div className="flex justify-between items-center text-gray-500">
          <span>FCP:</span>
          <span className={getScoreColor('fcp', vitals.fcp)}>
            {formatValue('fcp', vitals.fcp)}
          </span>
        </div>
      </div>
      
      <div className="mt-2 pt-2 border-t border-gray-700 text-center">
        <div className="flex gap-1 justify-center">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span className="text-green-400">Good</span>
          <div className="w-2 h-2 bg-yellow-400 rounded-full ml-2"></div>
          <span className="text-yellow-400">Fair</span>
          <div className="w-2 h-2 bg-red-400 rounded-full ml-2"></div>
          <span className="text-red-400">Poor</span>
        </div>
      </div>
    </div>
  )
} 