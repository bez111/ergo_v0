/**
 * Analytics and A/B Testing for /Docs to /docs migration
 */

export interface MigrationMetrics {
  pageViews: {
    oldUrls: number    // /Docs/*
    newUrls: number    // /docs/*
  }
  redirects: {
    count: number
    from302: number    // Soft redirects
    from301: number    // Hard redirects
  }
  errors: {
    notFound: number
    serverError: number
  }
  performance: {
    avgLoadTime: {
      oldUrls: number
      newUrls: number
    }
    bounceRate: {
      oldUrls: number
      newUrls: number
    }
  }
  userPreference: {
    preferOld: number
    preferNew: number
    noPreference: number
  }
}

// In-memory storage for development
let metrics: MigrationMetrics = {
  pageViews: { oldUrls: 0, newUrls: 0 },
  redirects: { count: 0, from302: 0, from301: 0 },
  errors: { notFound: 0, serverError: 0 },
  performance: {
    avgLoadTime: { oldUrls: 0, newUrls: 0 },
    bounceRate: { oldUrls: 0, newUrls: 0 }
  },
  userPreference: { preferOld: 0, preferNew: 0, noPreference: 0 }
}

/**
 * Track page view
 */
export function trackPageView(path: string, loadTime?: number) {
  const isOldUrl = path.startsWith('/Docs')
  const isNewUrl = path.startsWith('/docs')
  
  if (isOldUrl) {
    metrics.pageViews.oldUrls++
    if (loadTime) {
      updateAvgLoadTime('old', loadTime)
    }
  } else if (isNewUrl) {
    metrics.pageViews.newUrls++
    if (loadTime) {
      updateAvgLoadTime('new', loadTime)
    }
  }
}

/**
 * Track redirect
 */
export function trackRedirect(from: string, to: string, statusCode: number) {
  metrics.redirects.count++
  
  if (statusCode === 302) {
    metrics.redirects.from302++
  } else if (statusCode === 301) {
    metrics.redirects.from301++
  }
}

/**
 * Track error
 */
export function trackError(type: 'notFound' | 'serverError', path: string) {
  if (type === 'notFound') {
    metrics.errors.notFound++
  } else {
    metrics.errors.serverError++
  }
  
  console.error(`[Migration Analytics] ${type} error on ${path}`)
}

/**
 * Update average load time
 */
function updateAvgLoadTime(type: 'old' | 'new', loadTime: number) {
  const key = type === 'old' ? 'oldUrls' : 'newUrls'
  const current = metrics.performance.avgLoadTime[key]
  const count = type === 'old' ? metrics.pageViews.oldUrls : metrics.pageViews.newUrls
  
  // Calculate running average
  metrics.performance.avgLoadTime[key] = 
    (current * (count - 1) + loadTime) / count
}

/**
 * Get current metrics
 */
export function getMetrics(): MigrationMetrics {
  return { ...metrics }
}

/**
 * Generate A/B test report
 */
export function generateABReport() {
  const total = metrics.pageViews.oldUrls + metrics.pageViews.newUrls
  
  return {
    summary: {
      totalPageViews: total,
      oldUrlPercentage: total > 0 ? (metrics.pageViews.oldUrls / total * 100).toFixed(2) : 0,
      newUrlPercentage: total > 0 ? (metrics.pageViews.newUrls / total * 100).toFixed(2) : 0,
      redirectCount: metrics.redirects.count,
      errorRate: total > 0 ? ((metrics.errors.notFound + metrics.errors.serverError) / total * 100).toFixed(2) : 0
    },
    performance: {
      loadTimeImprovement: metrics.performance.avgLoadTime.oldUrls > 0 
        ? ((metrics.performance.avgLoadTime.oldUrls - metrics.performance.avgLoadTime.newUrls) / metrics.performance.avgLoadTime.oldUrls * 100).toFixed(2)
        : 0,
      oldUrlAvgLoadTime: metrics.performance.avgLoadTime.oldUrls.toFixed(2),
      newUrlAvgLoadTime: metrics.performance.avgLoadTime.newUrls.toFixed(2)
    },
    recommendation: getRecommendation()
  }
}

/**
 * Get migration recommendation based on metrics
 */
function getRecommendation(): string {
  const errorRate = (metrics.errors.notFound + metrics.errors.serverError) / 
    (metrics.pageViews.oldUrls + metrics.pageViews.newUrls)
  
  if (errorRate > 0.05) {
    return '🔴 High error rate detected. Review configuration before proceeding.'
  }
  
  if (metrics.performance.avgLoadTime.newUrls > metrics.performance.avgLoadTime.oldUrls * 1.2) {
    return '⚠️ New URLs showing slower performance. Investigate before full migration.'
  }
  
  if (metrics.redirects.count > metrics.pageViews.newUrls * 2) {
    return '⚠️ Too many redirects. Consider updating internal links.'
  }
  
  return '✅ Migration metrics look good. Ready to proceed to next phase.'
}

/**
 * Reset metrics (for testing)
 */
export function resetMetrics() {
  metrics = {
    pageViews: { oldUrls: 0, newUrls: 0 },
    redirects: { count: 0, from302: 0, from301: 0 },
    errors: { notFound: 0, serverError: 0 },
    performance: {
      avgLoadTime: { oldUrls: 0, newUrls: 0 },
      bounceRate: { oldUrls: 0, newUrls: 0 }
    },
    userPreference: { preferOld: 0, preferNew: 0, noPreference: 0 }
  }
} 