/**
 * Centralized noindex configuration for SEO optimization
 * 
 * Purpose: Reduce index bloat from 549 -> ~200-300 pages
 * Strategy: noindex low-value/deep technical pages, keep hubs indexed
 * 
 * This is a "soft" approach - pages remain accessible but not indexed
 */

// Pages/patterns that should NOT be indexed
export const NOINDEX_PATTERNS: RegExp[] = [
  // Internal/Test/Admin
  /^\/ui-kit/,
  /^\/test-/,
  /^\/admin/,
  /^\/_next/,
  /^\/api\//,
  
  // Deep documentation - too technical for general search
  // Keep hub pages (/docs, /docs/developers, etc.) indexed
  /^\/docs\/developers\/cryptographic-primitives\/.+/, // Deep crypto docs
  /^\/docs\/developers\/data-model-apis\/.+/,          // Deep API docs
  /^\/docs\/developers\/ergoscript-languages\/.+/,     // Deep ErgoScript docs
  /^\/docs\/developers\/infrastructure\/node\/.+/,     // Deep node config
  /^\/docs\/developers\/tooling\/.+/,                  // Deep tooling docs
  /^\/docs\/developers\/tutorials\/.+/,                // Tutorial subpages
  
  // Ecosystem deep pages (keep main categories indexed)
  /^\/docs\/ecosystem\/financial\/.+\/.+/,             // 2+ levels deep in financial
  /^\/docs\/ecosystem\/nfts\/.+/,                      // Individual NFT project pages
  /^\/docs\/ecosystem\/tooling\/.+/,                   // Individual tools
  /^\/docs\/ecosystem\/Standards\/.+/,                 // Individual standards
  
  // Miners deep documentation
  /^\/docs\/miners\/Miner-Tooling\/.+/,
  /^\/docs\/miners\/mining-guides\/.+/,
  /^\/docs\/miners\/governance\/.+/,
  
  // Introduction subpages (keep main intro indexed)
  /^\/docs\/introduction\/roadmap\/.+/,                // Roadmap subpages
  
  // Print/Preview/Draft versions
  /\/print$/,
  /\/preview$/,
  /\/draft$/,
  
  // JSON endpoints
  /\.json$/,
]

// Pages that should ALWAYS be indexed (override patterns above)
export const FORCE_INDEX_PATHS: string[] = [
  // Main hubs
  '/',
  '/use',
  '/miners',
  '/hodlers', 
  '/developers',
  '/technology',
  '/ecosystem',
  '/blog',
  '/learn',
  '/wallet',
  '/faq',
  '/compare',
  '/start',
  '/docs',
  '/playbooks',
  '/patterns',
  '/infographics',
  '/questions',
  '/topics',
  
  // Key docs hubs
  '/docs/developers',
  '/docs/ecosystem',
  '/docs/miners',
  '/docs/introduction',
  '/docs/contribute',
  '/docs/why-ergo',
  '/docs/resources',
  
  // Developer category pages (hubs)
  '/docs/developers/cryptographic-primitives',
  '/docs/developers/data-model-apis',
  '/docs/developers/ergoscript-languages',
  '/docs/developers/infrastructure',
  '/docs/developers/tooling',
  '/docs/developers/tutorials',
  '/docs/developers/bounties-grants',
  '/docs/developers/students',
  '/docs/developers/resources',
  
  // Technology pages
  '/technology/privacy-features',
  '/technology/ergoscript',
  '/technology/eutxo-model',
  '/technology/nipopows',
  '/technology/storage-rent',
  '/technology/oracle-pools',
  '/technology/native-tokens',
  '/technology/secure-pow',
  '/technology/babel-fees',
  '/technology/subblocks',
  '/technology/velvet-forks',
  '/technology/adaptive-emission',
  
  // Use case pages
  '/use/stablecoins',
  '/use/privacy',
  '/use/bridges',
  '/use/daos',
  '/use/nfts',
  '/use/oracles',
  '/use/identity',
  '/use/gaming',
  '/use/get-erg',
  '/use/babel-fees',
  '/use/defi',
  
  // Learn pages
  '/learn/glossary',
  '/learn/ergoscript',
  '/learn/research',
]

/**
 * Check if a path should be noindexed
 * @param path - The URL path to check (without locale prefix)
 * @returns true if the page should have noindex meta
 */
export function shouldNoIndex(path: string): boolean {
  // Remove locale prefix if present
  const cleanPath = path.replace(/^\/(en|ru|zh-cn)/, '') || '/'
  
  // Check force index first (these are always indexed)
  if (FORCE_INDEX_PATHS.includes(cleanPath)) {
    return false
  }
  
  // Check against noindex patterns
  return NOINDEX_PATTERNS.some(pattern => pattern.test(cleanPath))
}

/**
 * Get robots meta content for a path
 * @param path - The URL path
 * @returns robots meta content string
 */
export function getRobotsMeta(path: string): string {
  if (shouldNoIndex(path)) {
    return 'noindex, follow'
  }
  return 'index, follow'
}

/**
 * Estimated page counts for monitoring
 */
export const PAGE_ESTIMATES = {
  before: 549,
  targetIndexed: 250,
  noindexed: {
    docsDeep: 200,
    ecosystemDeep: 50,
    minersDeep: 25,
    internal: 10,
  }
}

