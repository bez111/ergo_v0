/**
 * Centralized URL Management System
 * Единая точка управления всей URL архитектурой
 */

// ============================================
// URL CONFIGURATION
// ============================================

export const URL_CONFIG = {
  // Базовый домен
  domain: 'https://ergoblockchain.org',
  
  // Правила нормализации
  normalization: {
    lowercase: false, // Пока не трогаем регистр (Docs остается)
    removeTrailingSlash: true,
    removeDefaultParams: true,
    cleanQueryParams: true
  },
  
  // Параметры для очистки
  noiseParams: [
    'utm_source', 'utm_medium', 'utm_campaign', 
    'utm_term', 'utm_content', 'utm_id',
    'ref', 'fbclid', 'gclid', 'msclkid',
    'mc_cid', 'mc_eid', '_ga', '_gl',
    'yclid', 'twclid', '_hsenc', '_hsmi'
  ],
  
  // Разрешенные параметры
  allowedParams: ['page', 'filter', 'sort', 'category', 'tag', 'search'],
  
  // Параметры по умолчанию для удаления
  defaultParams: {
    page: '1',
    sort: 'default',
    filter: 'all'
  }
}

// ============================================
// URL REDIRECTS REGISTRY
// ============================================

export const URL_REDIRECTS = {
  // Soft redirects (302) - для тестирования
  soft: {
    '/use/use-cases/algorithmic-stablecoins': '/use/cases/stablecoins',
    '/use/use-cases/privacy-confidentiality': '/use/cases/privacy',
    '/use/use-cases/cross-chain-bridges': '/use/cases/bridges',
    '/use/use-cases/daos-alternative-economies': '/use/cases/daos',
    '/use/use-cases/nfts-digital-assets': '/use/cases/nfts',
    '/use/use-cases/oracles-data-feeds': '/use/cases/oracles',
    '/use/use-cases/identity-reputation': '/use/cases/identity',
    '/use/use-cases/gaming-metaverse': '/use/cases/gaming'
  },
  
  // Permanent redirects (301) - после валидации
  permanent: {
    '/blog/page/1': '/blog',
    '/docs/page/1': '/docs'
  },
  
  // Gone pages (410)
  gone: [
    '/old-api',
    '/deprecated-feature'
  ]
}

// ============================================
// URL PATTERNS
// ============================================

export const URL_PATTERNS = {
  // Паттерны для noindex
  noIndex: [
    /^\/api\//,
    /^\/admin\//,
    /^\/_next\//,
    /^\/static\//,
    /\.json$/,
    /\/print$/,
    /\/preview$/,
    /\/draft$/,
    /\/test$/
  ],
  
  // Паттерны для canonical
  canonical: [
    /^\/blog\//,
    /^\/Docs\//,
    /^\/use\//,
    /^\/technology\//,
    /^\/ecosystem\//
  ],
  
  // Паттерны для sitemap
  sitemap: {
    include: [
      /^\/$/,
      /^\/Docs/,
      /^\/use/,
      /^\/technology/,
      /^\/ecosystem/,
      /^\/blog/,
      /^\/wallet/
    ],
    exclude: [
      /\/api\//,
      /\/admin\//,
      /\/_next\//,
      /\/404/,
      /\/500/
    ]
  }
}

// ============================================
// URL UTILITIES
// ============================================

/**
 * Нормализует URL согласно правилам
 */
export function normalizeUrl(url: string): string {
  let normalized = url
  
  // Удаляем trailing slash (кроме корня)
  if (URL_CONFIG.normalization.removeTrailingSlash && url !== '/' && url.endsWith('/')) {
    normalized = url.slice(0, -1)
  }
  
  // Lowercase (когда будет готово)
  if (URL_CONFIG.normalization.lowercase) {
    normalized = normalized.toLowerCase()
  }
  
  return normalized
}

/**
 * Очищает query параметры
 */
export function cleanQueryParams(params: URLSearchParams): URLSearchParams {
  const cleaned = new URLSearchParams()
  
  for (const [key, value] of params.entries()) {
    // Пропускаем noise параметры
    if (URL_CONFIG.noiseParams.includes(key)) continue
    
    // Пропускаем дефолтные значения
    if (URL_CONFIG.defaultParams[key as keyof typeof URL_CONFIG.defaultParams] === value) continue
    
    // Оставляем только разрешенные
    if (URL_CONFIG.allowedParams.includes(key)) {
      cleaned.append(key, value)
    }
  }
  
  return cleaned
}

/**
 * Проверяет нужен ли noindex
 */
export function shouldNoIndex(pathname: string): boolean {
  return URL_PATTERNS.noIndex.some(pattern => pattern.test(pathname))
}

/**
 * Проверяет нужен ли canonical
 */
export function shouldHaveCanonical(pathname: string): boolean {
  return URL_PATTERNS.canonical.some(pattern => pattern.test(pathname))
}

/**
 * Генерирует canonical URL
 */
export function getCanonicalUrl(pathname: string, params?: URLSearchParams): string {
  const cleanPath = normalizeUrl(pathname)
  const cleanParams = params ? cleanQueryParams(params) : new URLSearchParams()
  
  const paramString = cleanParams.toString()
  return `${URL_CONFIG.domain}${cleanPath}${paramString ? `?${paramString}` : ''}`
}

/**
 * Проверяет редирект
 */
export function checkRedirect(pathname: string): {
  shouldRedirect: boolean
  destination?: string
  statusCode?: number
} {
  // Проверяем soft redirects
  if (URL_REDIRECTS.soft[pathname]) {
    return {
      shouldRedirect: true,
      destination: URL_REDIRECTS.soft[pathname],
      statusCode: 302
    }
  }
  
  // Проверяем permanent redirects
  if (URL_REDIRECTS.permanent[pathname]) {
    return {
      shouldRedirect: true,
      destination: URL_REDIRECTS.permanent[pathname],
      statusCode: 301
    }
  }
  
  // Проверяем gone pages
  if (URL_REDIRECTS.gone.includes(pathname)) {
    return {
      shouldRedirect: true,
      statusCode: 410
    }
  }
  
  return { shouldRedirect: false }
}

// ============================================
// URL VALIDATION
// ============================================

/**
 * Валидация URL структуры
 */
export function validateUrlStructure(pathname: string): {
  valid: boolean
  issues: string[]
} {
  const issues: string[] = []
  
  // Проверка на двойные слеши
  if (pathname.includes('//')) {
    issues.push('Contains double slashes')
  }
  
  // Проверка на спецсимволы
  if (!/^[a-zA-Z0-9\-_\/\.]+$/.test(pathname)) {
    issues.push('Contains invalid characters')
  }
  
  // Проверка длины
  if (pathname.length > 200) {
    issues.push('URL too long (>200 chars)')
  }
  
  // Проверка глубины вложенности
  const depth = pathname.split('/').length - 1
  if (depth > 5) {
    issues.push('Too deeply nested (>5 levels)')
  }
  
  return {
    valid: issues.length === 0,
    issues
  }
}

// ============================================
// URL MONITORING
// ============================================

/**
 * Логирование URL событий
 */
export function logUrlEvent(event: {
  type: 'redirect' | 'normalize' | 'clean' | 'canonical'
  from: string
  to?: string
  statusCode?: number
}) {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[URL Manager] ${event.type}:`, {
      from: event.from,
      to: event.to,
      statusCode: event.statusCode
    })
  }
}

// ============================================
// EXPORT SUMMARY
// ============================================

export default {
  config: URL_CONFIG,
  redirects: URL_REDIRECTS,
  patterns: URL_PATTERNS,
  utils: {
    normalizeUrl,
    cleanQueryParams,
    shouldNoIndex,
    shouldHaveCanonical,
    getCanonicalUrl,
    checkRedirect,
    validateUrlStructure,
    logUrlEvent
  }
} 