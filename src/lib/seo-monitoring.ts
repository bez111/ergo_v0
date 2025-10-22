// SEO Monitoring and Analytics for Ergo Platform
// Track Core Web Vitals, Search Console metrics, and SEO KPIs

export interface SEOMetrics {
  // Core Web Vitals
  lcp: number // Largest Contentful Paint
  cls: number // Cumulative Layout Shift  
  inp: number // Interaction to Next Paint
  fcp: number // First Contentful Paint
  ttfb: number // Time to First Byte
  
  // SEO Metrics
  organicTraffic: number
  organicConversions: number
  averagePosition: number
  clickThroughRate: number
  impressions: number
  clicks: number
  
  // Technical SEO
  indexedPages: number
  crawlErrors: number
  sitemapStatus: 'healthy' | 'warning' | 'error'
  robotsStatus: 'healthy' | 'warning' | 'error'
  
  // Page-specific
  pageLoadTime: number
  bounceRate: number
  timeOnPage: number
  internalLinks: number
  externalLinks: number
}

// SEO Alerts Configuration
export const seoAlerts = {
  coreWebVitals: {
    lcp: { warning: 2500, critical: 4000 }, // milliseconds
    cls: { warning: 0.1, critical: 0.25 }, // score
    inp: { warning: 200, critical: 500 }, // milliseconds
  },
  traffic: {
    organicDropPercent: { warning: 10, critical: 25 }, // percentage drop
    conversionDropPercent: { warning: 15, critical: 30 },
  },
  technical: {
    crawlErrorsThreshold: { warning: 10, critical: 50 },
    indexDropPercent: { warning: 5, critical: 15 },
  }
}

// Track Core Web Vitals
export function trackCoreWebVitals() {
  if (typeof window === 'undefined') return

  // LCP - Largest Contentful Paint
  new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      const lcp = entry.startTime
      
      // Send to analytics
      if ((window as any).gtag) {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Core Web Vitals',
          event_label: 'LCP',
          value: Math.round(lcp),
          custom_map: { metric_value: lcp }
        })
      }
      
      // Check alerts
      if (lcp > seoAlerts.coreWebVitals.lcp.critical) {
        console.warn(`🚨 Critical LCP: ${lcp}ms (threshold: ${seoAlerts.coreWebVitals.lcp.critical}ms)`)
      } else if (lcp > seoAlerts.coreWebVitals.lcp.warning) {
        console.warn(`⚠️ Warning LCP: ${lcp}ms (threshold: ${seoAlerts.coreWebVitals.lcp.warning}ms)`)
      }
    }
  }).observe({ type: 'largest-contentful-paint', buffered: true })

  // CLS - Cumulative Layout Shift
  new PerformanceObserver((list) => {
    let cls = 0
    for (const entry of list.getEntries()) {
      const layoutShift = entry as any
      if (!layoutShift.hadRecentInput) {
        cls += layoutShift.value
      }
    }
    
    if ((window as any).gtag) {
      (window as any).gtag('event', 'web_vitals', {
        event_category: 'Core Web Vitals',
        event_label: 'CLS',
        value: Math.round(cls * 1000),
        custom_map: { metric_value: cls }
      })
    }
    
    if (cls > seoAlerts.coreWebVitals.cls.critical) {
      console.warn(`🚨 Critical CLS: ${cls} (threshold: ${seoAlerts.coreWebVitals.cls.critical})`)
    }
  }).observe({ type: 'layout-shift', buffered: true })

  // INP - Interaction to Next Paint
  new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      const eventEntry = entry as any
      const inp = eventEntry.processingStart - eventEntry.startTime
      
      if ((window as any).gtag) {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Core Web Vitals',
          event_label: 'INP',
          value: Math.round(inp),
          custom_map: { metric_value: inp }
        })
      }
    }
  }).observe({ type: 'event', buffered: true })
}

// SEO Event Tracking
export const seoEvents = {
  // Search interactions
  searchQuery: (query: string, results: number) => {
    if ((window as any).gtag) {
      (window as any).gtag('event', 'search', {
        search_term: query,
        search_results: results,
        event_category: 'SEO',
        event_label: 'Internal Search'
      })
    }
  },
  
  // Content engagement
  contentEngagement: (page: string, timeOnPage: number, scrollDepth: number) => {
    if ((window as any).gtag) {
      (window as any).gtag('event', 'content_engagement', {
        page_path: page,
        time_on_page: timeOnPage,
        scroll_depth: scrollDepth,
        event_category: 'SEO',
        event_label: 'Content Quality'
      })
    }
  },
  
  // Internal link clicks
  internalLinkClick: (fromPage: string, toPage: string, linkText: string) => {
    if ((window as any).gtag) {
      (window as any).gtag('event', 'internal_link_click', {
        from_page: fromPage,
        to_page: toPage,
        link_text: linkText,
        event_category: 'SEO',
        event_label: 'Internal Linking'
      })
    }
  },
  
  // External link clicks
  externalLinkClick: (url: string, linkText: string) => {
    if ((window as any).gtag) {
      (window as any).gtag('event', 'external_link_click', {
        external_url: url,
        link_text: linkText,
        event_category: 'SEO',
        event_label: 'External Links'
      })
    }
  },
  
  // Schema.org validation
  schemaValidation: (pageType: string, isValid: boolean, errors?: string[]) => {
    if ((window as any).gtag) {
      (window as any).gtag('event', 'schema_validation', {
        page_type: pageType,
        is_valid: isValid,
        errors: errors?.join(', ') || 'none',
        event_category: 'SEO',
        event_label: 'Structured Data'
      })
    }
  }
}

// Generate SEO Dashboard Data
export async function generateSEODashboard(): Promise<{
  summary: {
    score: number
    status: 'excellent' | 'good' | 'needs_improvement' | 'poor'
    lastUpdated: string
  }
  coreWebVitals: {
    lcp: { value: number; status: 'good' | 'needs_improvement' | 'poor' }
    cls: { value: number; status: 'good' | 'needs_improvement' | 'poor' }
    inp: { value: number; status: 'good' | 'needs_improvement' | 'poor' }
  }
  technicalSEO: {
    indexedPages: number
    crawlErrors: number
    sitemapStatus: string
    robotsStatus: string
  }
  recommendations: Array<{
    priority: 'high' | 'medium' | 'low'
    category: string
    issue: string
    solution: string
    impact: string
  }>
}> {
  // This would integrate with actual APIs in production
  // For now, returning mock data structure
  
  return {
    summary: {
      score: 85,
      status: 'good',
      lastUpdated: new Date().toISOString()
    },
    coreWebVitals: {
      lcp: { value: 2100, status: 'good' },
      cls: { value: 0.08, status: 'good' },
      inp: { value: 150, status: 'good' }
    },
    technicalSEO: {
      indexedPages: 1250,
      crawlErrors: 3,
      sitemapStatus: 'healthy',
      robotsStatus: 'healthy'
    },
    recommendations: [
      {
        priority: 'high',
        category: 'Structured Data',
        issue: 'Missing FAQ schema on documentation pages',
        solution: 'Add FAQ schema to all docs pages with Q&A sections',
        impact: 'Rich snippets in search results, +15% CTR'
      },
      {
        priority: 'medium',
        category: 'International SEO',
        issue: 'No hreflang implementation',
        solution: 'Implement hreflang tags for multi-language support',
        impact: 'Better international search visibility'
      },
      {
        priority: 'low',
        category: 'Content',
        issue: 'Some pages have thin content',
        solution: 'Expand content on pages with <300 words',
        impact: 'Better search rankings for long-tail keywords'
      }
    ]
  }
}

// SEO Health Check
export function performSEOHealthCheck(url: string): Promise<{
  score: number
  issues: Array<{
    type: 'error' | 'warning' | 'info'
    category: string
    message: string
    fix: string
  }>
}> {
  return new Promise((resolve) => {
    const issues: Array<{
      type: 'error' | 'warning' | 'info'
      category: string
      message: string
      fix: string
    }> = []
    
    // Check meta tags
    const title = document.querySelector('title')?.textContent
    const description = document.querySelector('meta[name="description"]')?.getAttribute('content')
    
    if (!title || title.length < 30) {
      issues.push({
        type: 'error',
        category: 'Meta Tags',
        message: 'Title tag missing or too short',
        fix: 'Add descriptive title tag (30-60 characters)'
      })
    }
    
    if (!description || description.length < 120) {
      issues.push({
        type: 'error',
        category: 'Meta Tags',
        message: 'Meta description missing or too short',
        fix: 'Add compelling meta description (120-160 characters)'
      })
    }
    
    // Check headings structure
    const h1s = document.querySelectorAll('h1')
    if (h1s.length === 0) {
      issues.push({
        type: 'error',
        category: 'Content Structure',
        message: 'No H1 tag found',
        fix: 'Add exactly one H1 tag per page'
      })
    } else if (h1s.length > 1) {
      issues.push({
        type: 'warning',
        category: 'Content Structure',
        message: 'Multiple H1 tags found',
        fix: 'Use only one H1 tag per page'
      })
    }
    
    // Check images alt text
    const images = document.querySelectorAll('img')
    let imagesWithoutAlt = 0
    images.forEach(img => {
      if (!img.getAttribute('alt')) {
        imagesWithoutAlt++
      }
    })
    
    if (imagesWithoutAlt > 0) {
      issues.push({
        type: 'warning',
        category: 'Accessibility',
        message: `${imagesWithoutAlt} images missing alt text`,
        fix: 'Add descriptive alt text to all images'
      })
    }
    
    // Check internal links
    const internalLinks = document.querySelectorAll('a[href^="/"], a[href^="https://ergoblockchain.org"]')
    if (internalLinks.length < 3) {
      issues.push({
        type: 'info',
        category: 'Internal Linking',
        message: 'Few internal links found',
        fix: 'Add more contextual internal links (3-8 per page)'
      })
    }
    
    // Calculate score
    const errorCount = issues.filter(i => i.type === 'error').length
    const warningCount = issues.filter(i => i.type === 'warning').length
    const score = Math.max(0, 100 - (errorCount * 15) - (warningCount * 5))
    
    resolve({ score, issues })
  })
}

// Initialize SEO monitoring
export function initSEOMonitoring() {
  if (typeof window === 'undefined') return
  
  // Track Core Web Vitals
  trackCoreWebVitals()
  
  // Track scroll depth
  let maxScroll = 0
  const trackScrollDepth = () => {
    const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)
    if (scrollPercent > maxScroll) {
      maxScroll = scrollPercent
      
      // Track milestone scrolls
      if ([25, 50, 75, 90].includes(scrollPercent)) {
        seoEvents.contentEngagement(window.location.pathname, Date.now(), scrollPercent)
      }
    }
  }
  
  window.addEventListener('scroll', trackScrollDepth, { passive: true })
  
  // Track time on page
  const startTime = Date.now()
  window.addEventListener('beforeunload', () => {
    const timeOnPage = Date.now() - startTime
    seoEvents.contentEngagement(window.location.pathname, timeOnPage, maxScroll)
  })
  
  // Track internal link clicks
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    const link = target.closest('a')
    
    if (link && link.href) {
      const url = new URL(link.href)
      const currentDomain = window.location.hostname
      
      if (url.hostname === currentDomain) {
        // Internal link
        seoEvents.internalLinkClick(
          window.location.pathname,
          url.pathname,
          link.textContent || 'Unknown'
        )
      } else {
        // External link
        seoEvents.externalLinkClick(link.href, link.textContent || 'Unknown')
      }
    }
  })
} 