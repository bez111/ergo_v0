"use client"

import { useEffect, useState } from 'react'

interface SEOMetrics {
  pageTitle: string
  metaDescription: string
  h1Count: number
  h2Count: number
  imageCount: number
  imagesWithoutAlt: number
  internalLinks: number
  externalLinks: number
  wordCount: number
  hasCanonical: boolean
  hasOpenGraph: boolean
  hasTwitterCard: boolean
  hasStructuredData: boolean
  loadTime: number
}

interface SEOMonitorProps {
  enabled?: boolean
  debug?: boolean
}

export function SEOMonitor({ enabled = process.env.NODE_ENV === 'development', debug = false }: SEOMonitorProps) {
  const [metrics, setMetrics] = useState<SEOMetrics | null>(null)
  const [seoScore, setSeoScore] = useState<number | null>(null)

  useEffect(() => {
    if (!enabled) return

    const analyzePageSEO = () => {
      const startTime = performance.now()

      // Basic meta analysis
      const title = document.title
      const metaDescription = document.querySelector('meta[name="description"]')?.getAttribute('content') || ''
      
      // Heading analysis
      const h1Elements = document.querySelectorAll('h1')
      const h2Elements = document.querySelectorAll('h2')
      
      // Image analysis
      const images = document.querySelectorAll('img')
      const imagesWithoutAlt = Array.from(images).filter(img => !img.alt || img.alt.trim() === '').length
      
      // Link analysis
      const links = document.querySelectorAll('a[href]')
      const internalLinks = Array.from(links).filter(link => {
        const href = link.getAttribute('href')
        return href && (href.startsWith('/') || href.includes(window.location.hostname))
      }).length
      const externalLinks = links.length - internalLinks
      
      // Content analysis
      const textContent = document.body.textContent || ''
      const wordCount = textContent.split(/\s+/).filter(word => word.length > 0).length
      
      // Technical SEO checks
      const hasCanonical = !!document.querySelector('link[rel="canonical"]')
      const hasOpenGraph = !!document.querySelector('meta[property^="og:"]')
      const hasTwitterCard = !!document.querySelector('meta[name^="twitter:"]')
      const hasStructuredData = !!document.querySelector('script[type="application/ld+json"]')
      
      const endTime = performance.now()
      const loadTime = endTime - startTime

      const seoMetrics: SEOMetrics = {
        pageTitle: title,
        metaDescription,
        h1Count: h1Elements.length,
        h2Count: h2Elements.length,
        imageCount: images.length,
        imagesWithoutAlt,
        internalLinks,
        externalLinks,
        wordCount,
        hasCanonical,
        hasOpenGraph,
        hasTwitterCard,
        hasStructuredData,
        loadTime
      }

      setMetrics(seoMetrics)

      if (debug) {
        let score = 0
        if (title.length >= 30 && title.length <= 60) score += 10
        if (metaDescription.length >= 120 && metaDescription.length <= 155) score += 10
        if (h1Elements.length === 1) score += 10
        if (imagesWithoutAlt === 0) score += 10
        if (hasCanonical) score += 10
        if (hasOpenGraph) score += 10
        if (hasTwitterCard) score += 10
        if (hasStructuredData) score += 10
        if (internalLinks >= 3) score += 10
        if (wordCount >= 300) score += 10

        setSeoScore(score)
      }

      // Send to analytics in production
      if (process.env.NODE_ENV === 'production') {
        fetch('/api/analytics/seo-metrics', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...seoMetrics,
            url: window.location.href,
            timestamp: Date.now()
          })
        }).catch(console.error)
      }
    }

    // Run analysis after page load
    const timer = setTimeout(analyzePageSEO, 1000)
    return () => clearTimeout(timer)
  }, [enabled, debug])

  // Don't render anything in production
  if (!enabled || process.env.NODE_ENV === 'production') {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/90 border border-orange-400/30 rounded-lg p-4 text-xs text-white z-50 max-w-xs">
      <div className="text-orange-400 font-semibold mb-2">SEO Monitor</div>
      {metrics ? (
        <div className="space-y-1">
          <div>Title: {metrics.pageTitle.length}/60</div>
          <div>Description: {metrics.metaDescription.length}/155</div>
          <div>H1: {metrics.h1Count} {metrics.h1Count === 1 ? '✅' : '⚠️'}</div>
          <div>Images w/o alt: {metrics.imagesWithoutAlt} {metrics.imagesWithoutAlt === 0 ? '✅' : '⚠️'}</div>
          <div>Internal links: {metrics.internalLinks}</div>
          <div>Word count: {metrics.wordCount}</div>
          {debug && seoScore !== null && (
            <div className="text-orange-300 font-semibold">SEO Score: {seoScore}/100</div>
          )}
          <div className="flex gap-1 mt-2">
            <span title="Canonical">{metrics.hasCanonical ? '🔗' : '❌'}</span>
            <span title="Open Graph">{metrics.hasOpenGraph ? '📱' : '❌'}</span>
            <span title="Twitter Card">{metrics.hasTwitterCard ? '🐦' : '❌'}</span>
            <span title="Structured Data">{metrics.hasStructuredData ? '📊' : '❌'}</span>
          </div>
        </div>
      ) : (
        <div>Analyzing...</div>
      )}
    </div>
  )
}
