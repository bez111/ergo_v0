/**
 * Soft Redirects for gradual URL migration
 * Фаза 2: Мягкие редиректы для упрощения структуры
 */

// Карта мягких редиректов (302 - временные)
export const SOFT_REDIRECTS: Record<string, { to: string; permanent: boolean }> = {
  // Упрощаем use-cases структуру
  '/use/use-cases/algorithmic-stablecoins': { 
    to: '/use/cases/stablecoins', 
    permanent: false 
  },
  '/use/use-cases/privacy-confidentiality': { 
    to: '/use/cases/privacy', 
    permanent: false 
  },
  '/use/use-cases/cross-chain-bridges': { 
    to: '/use/cases/bridges', 
    permanent: false 
  },
  '/use/use-cases/daos-alternative-economies': { 
    to: '/use/cases/daos', 
    permanent: false 
  },
  '/use/use-cases/nfts-digital-assets': { 
    to: '/use/cases/nfts', 
    permanent: false 
  },
  '/use/use-cases/oracles-data-feeds': { 
    to: '/use/cases/oracles', 
    permanent: false 
  },
  '/use/use-cases/identity-reputation': { 
    to: '/use/cases/identity', 
    permanent: false 
  },
  '/use/use-cases/gaming-metaverse': { 
    to: '/use/cases/gaming', 
    permanent: false 
  },
  
  // Создаем алиасы для будущей миграции (пока не активны)
  // '/docs': { to: '/docs', permanent: false }, // Для обратной совместимости
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
 * Создание новых страниц-алиасов для упрощенных URL
 * Эти страницы будут созданы как копии существующих
 */
export const NEW_PAGE_ALIASES = [
  {
    from: '/use/use-cases/algorithmic-stablecoins',
    to: '/use/cases/stablecoins',
    title: 'Stablecoins'
  },
  {
    from: '/use/use-cases/privacy-confidentiality',
    to: '/use/cases/privacy',
    title: 'Privacy'
  },
  {
    from: '/use/use-cases/cross-chain-bridges',
    to: '/use/cases/bridges',
    title: 'Cross-Chain Bridges'
  },
  {
    from: '/use/use-cases/daos-alternative-economies',
    to: '/use/cases/daos',
    title: 'DAOs'
  },
  {
    from: '/use/use-cases/nfts-digital-assets',
    to: '/use/cases/nfts',
    title: 'NFTs & Digital Assets'
  },
  {
    from: '/use/use-cases/oracles-data-feeds',
    to: '/use/cases/oracles',
    title: 'Oracles & Data Feeds'
  },
  {
    from: '/use/use-cases/identity-reputation',
    to: '/use/cases/identity',
    title: 'Identity & Reputation'
  },
  {
    from: '/use/use-cases/gaming-metaverse',
    to: '/use/cases/gaming',
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