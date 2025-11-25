/**
 * Information Architecture URL Management
 * Централизованное управление URL структурой и канонизацией
 */

import { siteConfig } from "@/config/site-config"

export const URL_PATTERNS = {
  // Основные разделы - всегда lowercase
  main: {
    home: '/',
    docs: '/docs',
    blog: '/blog',
    ecosystem: '/ecosystem',
    technology: '/technology',
    learn: '/learn',
    use: '/use',
    wallet: '/wallet',
    start: '/start',
    events: '/events',
  },
  
  // Паттерны для разных типов страниц
  patterns: {
    // Списки и категории
    list: '/{section}',
    category: '/{section}/category/{slug}',
    
    // Детальные страницы
    detail: '/{section}/{slug}',
    nested: '/{section}/{category}/{slug}',
    
    // Пагинация - без page=1
    paginated: '/{section}?page={n}', // n > 1
    
    // Фильтры и поиск
    filtered: '/{section}?filter={value}',
    search: '/search?q={query}',
  },
  
  // Правила трансформации
  rules: {
    // Всегда lowercase
    lowercase: true,
    // Использовать дефисы вместо подчеркиваний
    separator: '-',
    // Без trailing slash
    trailingSlash: false,
    // Максимальная глубина вложенности
    maxDepth: 4,
  }
}

/**
 * Нормализация URL согласно правилам IA
 */
export function normalizeUrl(url: string): string {
  let normalized = url
  
  // Lowercase
  normalized = normalized.toLowerCase()
  
  // Заменяем подчеркивания на дефисы
  normalized = normalized.replace(/_/g, '-')
  
  // Убираем trailing slash (кроме корня)
  if (normalized !== '/' && normalized.endsWith('/')) {
    normalized = normalized.slice(0, -1)
  }
  
  // Убираем двойные слеши
  normalized = normalized.replace(/\/+/g, '/')
  
  // Убираем page=1 из пагинации
  normalized = normalized.replace(/[?&]page=1(&|$)/, '')
  
  // Убираем пустые параметры
  normalized = normalized.replace(/[?&]$/, '')
  
  return normalized
}

/**
 * Получить канонический URL для страницы
 */
export function getCanonicalUrl(path: string, params?: URLSearchParams): string {
  const baseUrl = siteConfig.siteUrl
  let canonical = normalizeUrl(path)
  
  // Обработка параметров
  if (params) {
    const cleanParams = new URLSearchParams()
    
    // Сохраняем только значимые параметры
    const allowedParams = ['page', 'filter', 'sort', 'q']
    
    for (const [key, value] of params.entries()) {
      if (allowedParams.includes(key)) {
        // Пропускаем page=1
        if (key === 'page' && value === '1') continue
        cleanParams.append(key, value)
      }
    }
    
    const paramString = cleanParams.toString()
    if (paramString) {
      canonical += `?${paramString}`
    }
  }
  
  return `${baseUrl}${canonical}`
}

/**
 * Проверка на orphan страницы
 */
export function isOrphanPage(path: string, incomingLinks: string[]): boolean {
  // Страница считается orphan если:
  // 1. Нет входящих ссылок
  // 2. Не является главной страницей раздела
  // 3. Не в навигации
  
  const mainPages = Object.values(URL_PATTERNS.main)
  
  if (mainPages.includes(path)) {
    return false // Главные страницы не могут быть orphan
  }
  
  return incomingLinks.length === 0
}

/**
 * Определение типа страницы для правильной канонизации
 */
export function getPageType(path: string): 'list' | 'detail' | 'category' | 'search' | 'other' {
  const segments = path.split('/').filter(Boolean)
  
  // Главная и основные разделы - это списки
  if (segments.length <= 1) {
    return 'list'
  }
  
  // Категории
  if (segments.includes('category')) {
    return 'category'
  }
  
  // Поиск
  if (path.includes('/search')) {
    return 'search'
  }
  
  // Детальные страницы обычно имеют slug в конце
  if (segments.length >= 2) {
    return 'detail'
  }
  
  return 'other'
}

/**
 * Политика индексации для разных типов страниц
 */
export function getIndexPolicy(path: string, params?: URLSearchParams): {
  index: boolean
  follow: boolean
  canonical: string
} {
  const pageType = getPageType(path)
  const canonical = getCanonicalUrl(path, params)
  
  // Поиск и фильтры - noindex, follow
  if (pageType === 'search' || params?.has('filter')) {
    return {
      index: false,
      follow: true,
      canonical: getCanonicalUrl(path) // Без параметров
    }
  }
  
  // Пагинация - каждая страница канонична сама себе
  if (params?.has('page')) {
    const page = parseInt(params.get('page') || '1')
    if (page > 1) {
      return {
        index: true,
        follow: true,
        canonical
      }
    }
  }
  
  // Остальные страницы индексируются
  return {
    index: true,
    follow: true,
    canonical
  }
}

/**
 * Матрица внутренней перелинковки
 */
export const INTERLINKING_MATRIX = {
  // Хабы (главные страницы разделов)
  hubs: {
    '/docs': {
      children: ['/docs/introduction', '/docs/ecosystem', '/docs/developers', '/docs/miners'],
      related: ['/technology', '/learn', '/use']
    },
    '/ecosystem': {
      children: ['/ecosystem/map', '/ecosystem/grants', '/ecosystem/mining'],
      related: ['/use', '/technology']
    },
    '/technology': {
      children: [
        '/technology/ergoscript',
        '/technology/eutxo-model',
        '/technology/nipopows',
        '/technology/storage-rent'
      ],
      related: ['/docs', '/learn']
    },
    '/learn': {
      children: ['/learn/faq', '/learn/guides', '/learn/research', '/learn/ergoscript'],
      related: ['/start', '/docs']
    },
    '/use': {
      children: ['/use/mining', '/use/guides', '/use/get-erg', '/use/babel-fees'],
      related: ['/ecosystem', '/wallet']
    }
  },
  
  // Обязательные элементы перелинковки на каждой странице
  required: {
    navigation: true,      // Главная навигация
    breadcrumbs: true,    // Хлебные крошки
    related: true,        // Похожие страницы
    trending: false,      // Трендовые (опционально)
    footer: true          // Футер с ссылками
  }
}

/**
 * Генерация redirect map для устаревших URL
 */
export const REDIRECT_MAP: Record<string, { to: string; code: 301 | 302 | 410 }> = {
  // Исправляем капитализацию
  '/docs': { to: '/docs', code: 301 },
  '/docs/introduction': { to: '/docs/introduction', code: 301 },
  '/docs/ecosystem': { to: '/docs/ecosystem', code: 301 },
  '/docs/developers': { to: '/docs/developers', code: 301 },
  '/docs/miners': { to: '/docs/miners', code: 301 },
  '/docs/contribute': { to: '/docs/contribute', code: 301 },
  '/docs/why-ergo': { to: '/docs/why-ergo', code: 301 },
  
  // Исправляем Standards -> standards
  '/docs/ecosystem/Standards': { to: '/docs/ecosystem/standards', code: 301 },
  
  // Упрощаем use-cases
  '/use/use-cases': { to: '/use/cases', code: 301 },
  '/use/use-cases/algorithmic-stablecoins': { to: '/use/cases/stablecoins', code: 301 },
  '/use/use-cases/privacy-confidentiality': { to: '/use/cases/privacy', code: 301 },
  '/use/use-cases/cross-chain-bridges': { to: '/use/cases/bridges', code: 301 },
  '/use/use-cases/daos-alternative-economies': { to: '/use/cases/daos', code: 301 },
  '/use/use-cases/nfts-digital-assets': { to: '/use/cases/nfts', code: 301 },
  '/use/use-cases/oracles-data-feeds': { to: '/use/cases/oracles', code: 301 },
  '/use/use-cases/identity-reputation': { to: '/use/cases/identity', code: 301 },
  '/use/use-cases/gaming-metaverse': { to: '/use/cases/gaming', code: 301 },
  
  // Удаленные страницы
  '/old-page': { to: '', code: 410 },
}

/**
 * Проверка на index bloat
 */
export function isIndexBloat(path: string): boolean {
  const bloatPatterns = [
    /\/api\//,           // API endpoints
    /\/admin\//,         // Admin pages
    /\/_next\//,         // Next.js internal
    /\/static\//,        // Static assets
    /\.json$/,           // JSON files
    /\/print$/,          // Print versions
    /\/amp$/,            // AMP versions (if not needed)
    /\/feed$/,           // RSS feeds (handled separately)
    /\?preview=/,        // Preview URLs
    /\?draft=/,          // Draft URLs
  ]
  
  return bloatPatterns.some(pattern => pattern.test(path))
}

/**
 * Генерация URL спецификации для документации
 */
export function generateUrlSpec(): string {
  return `
# URL Architecture Specification
Generated: ${new Date().toISOString()}

## URL Patterns

### Main Sections
${Object.entries(URL_PATTERNS.main).map(([key, url]) => `- ${key}: ${url}`).join('\n')}

### URL Rules
- Always lowercase
- Use hyphens as separators
- No trailing slashes (except root)
- Maximum depth: ${URL_PATTERNS.rules.maxDepth} levels

### Pagination
- First page: /section (no page parameter)
- Other pages: /section?page=N (N > 1)

### Canonicalization Policy
- Lists: canonical to self
- Pagination: each page canonical to self
- Filters/Search: noindex, canonical to base URL
- Categories: canonical to self

### Redirect Map
${Object.entries(REDIRECT_MAP).slice(0, 10).map(([from, { to, code }]) => 
  `- ${from} → ${to} (${code})`
).join('\n')}
... and ${Object.keys(REDIRECT_MAP).length - 10} more redirects

### Internal Linking Matrix
${Object.entries(INTERLINKING_MATRIX.hubs).map(([hub, data]) => 
  `${hub}:\n  Children: ${data.children.join(', ')}\n  Related: ${data.related.join(', ')}`
).join('\n\n')}
  `.trim()
} 