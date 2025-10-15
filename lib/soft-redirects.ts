/**
 * Soft Redirects for gradual URL migration
 * Фаза 2: Мягкие редиректы для упрощения структуры
 */

// Permanent redirects (301) - old URL structure to new
export const SOFT_REDIRECTS: Record<string, { to: string; permanent: boolean }> = {
  // Old use-cases structure → New simplified structure
  '/use/use-cases/algorithmic-stablecoins': { 
    to: '/use/stablecoins', 
    permanent: true 
  },
  '/use/use-cases/privacy-confidentiality': { 
    to: '/use/privacy', 
    permanent: true 
  },
  '/use/use-cases/cross-chain-bridges': { 
    to: '/use/bridges', 
    permanent: true 
  },
  '/use/use-cases/daos-alternative-economies': { 
    to: '/use/daos', 
    permanent: true 
  },
  '/use/use-cases/nfts-digital-assets': { 
    to: '/use/nfts', 
    permanent: true 
  },
  '/use/use-cases/oracles-data-feeds': { 
    to: '/use/oracles', 
    permanent: true 
  },
  '/use/use-cases/identity-reputation': { 
    to: '/use/identity', 
    permanent: true 
  },
  '/use/use-cases/gaming-metaverse': { 
    to: '/use/gaming', 
    permanent: true 
  },
}

/**
 * Проверка и применение мягких редиректов
 */
export function checkSoftRedirect(pathname: string): {
  shouldRedirect: boolean
  destination?: string
  statusCode: number
} {
  const redirect = SOFT_REDIRECTS[pathname]
  
  if (redirect) {
    return {
      shouldRedirect: true,
      destination: redirect.to,
      statusCode: redirect.permanent ? 301 : 302
    }
  }
  
  return {
    shouldRedirect: false,
    statusCode: 200
  }
}

/**
 * URL aliases - New simplified structure
 * These pages are now at /use/{category} instead of /use/use-cases/{category}
 */
export const NEW_PAGE_ALIASES = [
  {
    from: '/use/use-cases/algorithmic-stablecoins',
    to: '/use/stablecoins',
    title: 'Stablecoins'
  },
  {
    from: '/use/use-cases/privacy-confidentiality',
    to: '/use/privacy',
    title: 'Privacy'
  },
  {
    from: '/use/use-cases/cross-chain-bridges',
    to: '/use/bridges',
    title: 'Cross-Chain Bridges'
  },
  {
    from: '/use/use-cases/daos-alternative-economies',
    to: '/use/daos',
    title: 'DAOs'
  },
  {
    from: '/use/use-cases/nfts-digital-assets',
    to: '/use/nfts',
    title: 'NFTs & Digital Assets'
  },
  {
    from: '/use/use-cases/oracles-data-feeds',
    to: '/use/oracles',
    title: 'Oracles & Data Feeds'
  },
  {
    from: '/use/use-cases/identity-reputation',
    to: '/use/identity',
    title: 'Identity & Reputation'
  },
  {
    from: '/use/use-cases/gaming-metaverse',
    to: '/use/gaming',
    title: 'Gaming & Metaverse'
  }
]

/**
 * Генерация отчета о редиректах
 */
export function generateRedirectReport(): string {
  const total = Object.keys(SOFT_REDIRECTS).length
  const permanent = Object.values(SOFT_REDIRECTS).filter(r => r.permanent).length
  const temporary = total - permanent
  
  return `
# Redirect Report

## Summary
- Total redirects: ${total}
- Permanent (301): ${permanent}
- Temporary (302): ${temporary}

## Active Redirects
${Object.entries(SOFT_REDIRECTS).map(([from, config]) => 
  `- ${from} → ${config.to} (${config.permanent ? '301' : '302'})`
).join('\n')}

## Next Steps
1. Monitor redirect usage for 30 days
2. Convert 302 to 301 after validation
3. Update internal links to use new URLs
4. Create actual pages at new locations
  `.trim()
} 