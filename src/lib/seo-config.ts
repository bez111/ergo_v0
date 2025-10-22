// SEO Configuration for noindex patterns and optimization
export const SEO_CONFIG = {
  // Pages that should not be indexed (too technical or internal)
  noindexPatterns: [
    '/docs/developers/cryptographic-primitives/',
    '/docs/developers/tooling/debugging/',
    '/docs/developers/data-model-apis/resources/ergotool/',
    '/ui-kit',
    '/ui-kit-cypherpunk',
    '/admin/',
    '/api/',
    '/search',
    '/_next/',
    '/static/'
  ],
  
  // Pages that should have follow but not index
  noindexButFollow: [
    '/docs/developers/cryptographic-primitives/',
    '/docs/developers/tooling/debugging/',
    '/docs/developers/ergoscript-languages/encoding/'
  ],
  
  // Priority pages for sitemap
  highPriorityPages: [
    '/',
    '/use',
    '/technology',
    '/ecosystem',
    '/docs',
    '/start',
    '/wallet'
  ],
  
  // Medium priority pages
  mediumPriorityPages: [
    '/use/stablecoins',
    '/use/privacy',
    '/use/bridges',
    '/use/daos',
    '/technology/eutxo-model',
    '/technology/storage-rent',
    '/docs/miners',
    '/ecosystem/grants'
  ]
}

// Helper function to check if page should be noindexed
export function shouldNoindex(pathname: string): boolean {
  return SEO_CONFIG.noindexPatterns.some(pattern => 
    pathname.startsWith(pattern)
  )
}

// Helper function to get robots meta content
export function getRobotsContent(pathname: string): string {
  if (shouldNoindex(pathname)) {
    if (SEO_CONFIG.noindexButFollow.some(pattern => pathname.startsWith(pattern))) {
      return "noindex, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
    }
    return "noindex, nofollow"
  }
  return "index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
} 