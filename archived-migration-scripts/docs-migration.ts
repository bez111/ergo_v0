/**
 * Docs URL Migration Manager
 * Handles the smooth transition from /Docs to /docs URLs
 */

export const DOCS_MIGRATION_CONFIG = {
  // Phase 1: Soft redirects (302) - Testing phase
  // Phase 2: Hard redirects (301) - After validation
  // Phase 3: Final migration - Rename folder (COMPLETED)
  currentPhase: 3, // MIGRATION COMPLETED - Folder renamed
  
  // A/B Testing configuration
  abTestingEnabled: false, // Disabled - migration complete
  abTestingPercentage: 100, // 100% use new URLs
  cookieName: 'docs-url-preference',
  cookieMaxAge: 30 * 24 * 60 * 60, // 30 days
  
  // URL mappings - NO LONGER NEEDED (folder renamed)
  urlMappings: {
    '/Docs': '/docs',
    '/Docs/introduction': '/docs/introduction',
    '/Docs/ecosystem': '/docs/ecosystem',
    '/Docs/developers': '/docs/developers',
    '/Docs/miners': '/docs/miners',
    '/Docs/contribute': '/docs/contribute',
    '/Docs/why-ergo': '/docs/why-ergo',
    '/Docs/resources': '/docs/resources'
  } as Record<string, string>
}

/**
 * Get redirect status code based on migration phase
 */
export function getRedirectStatus(): number {
  return DOCS_MIGRATION_CONFIG.currentPhase === 1 ? 302 : 301
}

/**
 * Check if URL should be redirected
 */
export function shouldRedirect(path: string): boolean {
  return path.startsWith('/Docs')
}

/**
 * Get new URL for old Docs path
 */
export function getNewUrl(oldPath: string): string | null {
  // Direct mapping
  if (DOCS_MIGRATION_CONFIG.urlMappings[oldPath]) {
    return DOCS_MIGRATION_CONFIG.urlMappings[oldPath]
  }
  
  // Pattern-based replacement
  if (oldPath.startsWith('/Docs')) {
    return oldPath.replace('/Docs', '/docs')
  }
  
  return null
}

/**
 * Check if user should get new URLs (A/B testing)
 */
export function shouldUseNewUrls(cookies: any): boolean {
  if (!DOCS_MIGRATION_CONFIG.abTestingEnabled) {
    return true // If A/B testing disabled, everyone gets new URLs
  }
  
  // Check if user has preference cookie
  const preference = cookies[DOCS_MIGRATION_CONFIG.cookieName]
  if (preference) {
    return preference === 'new'
  }
  
  // Random assignment for new users
  return Math.random() * 100 < DOCS_MIGRATION_CONFIG.abTestingPercentage
}

/**
 * Track migration metrics
 */
export function trackMigrationEvent(event: {
  type: 'redirect' | 'visit' | 'error'
  from?: string
  to?: string
  statusCode?: number
  userAgent?: string
}) {
  // In production, this would send to analytics
  if (process.env.NODE_ENV === 'development') {
    console.log('[Docs Migration]', event)
  }
} 