// SEO Monitoring System for Ergo Platform
// Track rankings, Core Web Vitals, and SEO performance

interface SEOMetrics {
  rankings: KeywordRanking[]
  coreWebVitals: CoreWebVitals
  indexation: IndexationStatus
  backlinks: BacklinkProfile
  traffic: TrafficMetrics
}

interface KeywordRanking {
  keyword: string
  position: number
  previousPosition: number
  change: number
  url: string
  searchVolume: number
  difficulty: number
  date: string
}

interface CoreWebVitals {
  lcp: number // Largest Contentful Paint
  fid: number // First Input Delay
  cls: number // Cumulative Layout Shift
  fcp: number // First Contentful Paint
  ttfb: number // Time to First Byte
  inp: number // Interaction to Next Paint
}

interface IndexationStatus {
  indexed: number
  notIndexed: number
  errors: number
  warnings: number
  lastCrawl: string
}

interface BacklinkProfile {
  total: number
  dofollow: number
  nofollow: number
  referringDomains: number
  domainAuthority: number
  trustFlow: number
}

interface TrafficMetrics {
  organic: number
  direct: number
  referral: number
  social: number
  total: number
  bounceRate: number
  avgSessionDuration: number
  pagesPerSession: number
}

// Target keywords to monitor
export const monitoringKeywords = [
  // Tier 1 - Primary targets
  { keyword: 'ergo blockchain', targetPosition: 3, priority: 'highest' },
  { keyword: 'ergo crypto', targetPosition: 3, priority: 'highest' },
  { keyword: 'ERG token', targetPosition: 3, priority: 'highest' },
  { keyword: 'ergo mining', targetPosition: 3, priority: 'highest' },
  { keyword: 'ergo wallet', targetPosition: 3, priority: 'highest' },
  
  // Tier 2 - Technology keywords
  { keyword: 'ergoscript', targetPosition: 1, priority: 'high' },
  { keyword: 'eutxo blockchain', targetPosition: 1, priority: 'high' },
  { keyword: 'autolykos algorithm', targetPosition: 1, priority: 'high' },
  { keyword: 'sigma protocols blockchain', targetPosition: 1, priority: 'high' },
  { keyword: 'nipopows', targetPosition: 1, priority: 'high' },
  
  // Tier 3 - Competition keywords
  { keyword: 'layer 1 blockchain', targetPosition: 10, priority: 'high' },
  { keyword: 'proof of work blockchain 2024', targetPosition: 5, priority: 'high' },
  { keyword: 'bitcoin alternative', targetPosition: 10, priority: 'medium' },
  { keyword: 'ethereum alternative', targetPosition: 10, priority: 'medium' },
  { keyword: 'sustainable blockchain', targetPosition: 5, priority: 'high' },
  
  // Tier 4 - Commercial keywords
  { keyword: 'buy ergo', targetPosition: 3, priority: 'highest' },
  { keyword: 'where to buy ergo', targetPosition: 3, priority: 'highest' },
  { keyword: 'ergo price', targetPosition: 5, priority: 'high' },
  { keyword: 'ergo exchanges', targetPosition: 3, priority: 'high' },
  { keyword: 'mine ergo', targetPosition: 3, priority: 'highest' },
]

// Core Web Vitals thresholds
export const webVitalsThresholds = {
  lcp: { good: 2500, needsImprovement: 4000 }, // milliseconds
  fid: { good: 100, needsImprovement: 300 }, // milliseconds
  cls: { good: 0.1, needsImprovement: 0.25 }, // score
  fcp: { good: 1800, needsImprovement: 3000 }, // milliseconds
  ttfb: { good: 800, needsImprovement: 1800 }, // milliseconds
  inp: { good: 200, needsImprovement: 500 }, // milliseconds
}

// Initialize performance monitoring
export function initPerformanceMonitoring() {
  if (typeof window === 'undefined') return

  // Monitor Core Web Vitals
  if ('PerformanceObserver' in window) {
    // LCP
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1] as any
      const lcp = lastEntry.renderTime || lastEntry.loadTime
      trackMetric('LCP', lcp)
    })
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true })

    // FID
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry: any) => {
        const fid = entry.processingStart - entry.startTime
        trackMetric('FID', fid)
      })
    })
    fidObserver.observe({ type: 'first-input', buffered: true })

    // CLS
    let clsValue = 0
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const layoutShift = entry as any
        if (!layoutShift.hadRecentInput) {
          clsValue += layoutShift.value
        }
      }
      trackMetric('CLS', clsValue)
    })
    clsObserver.observe({ type: 'layout-shift', buffered: true })
  }

  // Monitor page load metrics
  window.addEventListener('load', () => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    
    if (navigation) {
      trackMetric('TTFB', navigation.responseStart - navigation.requestStart)
      trackMetric('DOMContentLoaded', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart)
      trackMetric('LoadComplete', navigation.loadEventEnd - navigation.loadEventStart)
    }
  })
}

// Track metrics to analytics
function trackMetric(name: string, value: number) {
  // Send to Google Analytics
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'web_vitals', {
      event_category: 'Web Vitals',
      event_label: name,
      value: Math.round(value),
      non_interaction: true,
    })
  }

  // Send to custom monitoring endpoint
  fetch('/api/metrics', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      metric: name,
      value,
      url: window.location.href,
      timestamp: new Date().toISOString(),
    }),
  }).catch(() => {
    // Fail silently
  })
}

// Check keyword rankings
export async function checkKeywordRankings() {
  const rankings: KeywordRanking[] = []
  
  for (const kw of monitoringKeywords) {
    try {
      // This would integrate with a rank tracking API
      const ranking = await checkSingleKeyword(kw.keyword)
      rankings.push(ranking)
    } catch (error) {
      console.error(`Failed to check ranking for ${kw.keyword}:`, error)
    }
  }
  
  return rankings
}

async function checkSingleKeyword(keyword: string): Promise<KeywordRanking> {
  // Placeholder - integrate with actual rank tracking service
  return {
    keyword,
    position: Math.floor(Math.random() * 100) + 1,
    previousPosition: Math.floor(Math.random() * 100) + 1,
    change: 0,
    url: 'https://ergoblockchain.org',
    searchVolume: 1000,
    difficulty: 50,
    date: new Date().toISOString(),
  }
}

// Generate SEO report
export function generateSEOReport(metrics: SEOMetrics): string {
  const report = `
# SEO Performance Report - Ergo Platform
Generated: ${new Date().toISOString()}

## 📊 Keyword Rankings
${metrics.rankings.map(r => `
- **${r.keyword}**: Position ${r.position} (${r.change > 0 ? '↑' : r.change < 0 ? '↓' : '→'} ${Math.abs(r.change)})
  - Search Volume: ${r.searchVolume}/mo
  - Difficulty: ${r.difficulty}/100
`).join('')}

## ⚡ Core Web Vitals
- LCP: ${metrics.coreWebVitals.lcp}ms ${getVitalStatus('lcp', metrics.coreWebVitals.lcp)}
- FID: ${metrics.coreWebVitals.fid}ms ${getVitalStatus('fid', metrics.coreWebVitals.fid)}
- CLS: ${metrics.coreWebVitals.cls} ${getVitalStatus('cls', metrics.coreWebVitals.cls)}
- FCP: ${metrics.coreWebVitals.fcp}ms ${getVitalStatus('fcp', metrics.coreWebVitals.fcp)}
- TTFB: ${metrics.coreWebVitals.ttfb}ms ${getVitalStatus('ttfb', metrics.coreWebVitals.ttfb)}

## 🔍 Indexation Status
- Indexed Pages: ${metrics.indexation.indexed}
- Not Indexed: ${metrics.indexation.notIndexed}
- Errors: ${metrics.indexation.errors}
- Last Crawl: ${metrics.indexation.lastCrawl}

## 🔗 Backlink Profile
- Total Backlinks: ${metrics.backlinks.total}
- Referring Domains: ${metrics.backlinks.referringDomains}
- Domain Authority: ${metrics.backlinks.domainAuthority}/100
- Trust Flow: ${metrics.backlinks.trustFlow}/100

## 📈 Traffic Metrics
- Total Traffic: ${metrics.traffic.total}
- Organic: ${metrics.traffic.organic} (${(metrics.traffic.organic / metrics.traffic.total * 100).toFixed(1)}%)
- Bounce Rate: ${metrics.traffic.bounceRate}%
- Avg Session Duration: ${metrics.traffic.avgSessionDuration}s
- Pages/Session: ${metrics.traffic.pagesPerSession}
`

  return report
}

function getVitalStatus(metric: string, value: number): string {
  const threshold = webVitalsThresholds[metric as keyof typeof webVitalsThresholds]
  if (!threshold) return ''
  
  if (value <= threshold.good) return '✅ Good'
  if (value <= threshold.needsImprovement) return '⚠️ Needs Improvement'
  return '❌ Poor'
}

// Export monitoring dashboard URL
export const monitoringDashboards = {
  googleSearchConsole: 'https://search.google.com/search-console',
  googleAnalytics: 'https://analytics.google.com',
  pagespeedInsights: 'https://pagespeed.web.dev',
  ahrefs: 'https://ahrefs.com',
  semrush: 'https://semrush.com',
  moz: 'https://moz.com',
} 