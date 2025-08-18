/**
 * Information Architecture v2 - Compatible with existing structure
 * Учитывает текущую структуру с заглавными буквами в Docs
 */

export const URL_ARCHITECTURE = {
  // Текущая структура (как есть сейчас)
  current: {
    docs: '/Docs',           // Оставляем как есть для совместимости
    blog: '/blog',
    ecosystem: '/ecosystem',
    technology: '/technology',
    learn: '/learn',
    use: '/use',
    wallet: '/wallet',
    start: '/start',
  },
  
  // Целевая структура (к чему стремимся)
  target: {
    docs: '/docs',           // Все lowercase
    blog: '/blog',
    ecosystem: '/ecosystem',
    technology: '/technology',
    learn: '/learn',
    use: '/use',
    wallet: '/wallet',
    start: '/start',
  },
  
  // Правила для новых страниц
  rules: {
    // Новые страницы создаем только в lowercase
    newPagesLowercase: true,
    // Используем дефисы вместо подчеркиваний
    separator: '-',
    // Без trailing slash
    trailingSlash: false,
    // Максимальная глубина
    maxDepth: 4,
  }
}

/**
 * Проверка URL на соответствие best practices
 * НЕ изменяет существующие URL, только проверяет
 */
export function validateUrl(url: string): {
  valid: boolean
  issues: string[]
  recommendations: string[]
} {
  const issues: string[] = []
  const recommendations: string[] = []
  
  // Проверка на заглавные буквы (кроме Docs для совместимости)
  if (!url.startsWith('/Docs') && url !== url.toLowerCase()) {
    issues.push('URL contains uppercase letters')
    recommendations.push(`Consider using: ${url.toLowerCase()}`)
  }
  
  // Проверка на подчеркивания
  if (url.includes('_')) {
    issues.push('URL contains underscores')
    recommendations.push(`Consider using hyphens: ${url.replace(/_/g, '-')}`)
  }
  
  // Проверка на trailing slash
  if (url !== '/' && url.endsWith('/')) {
    issues.push('URL has trailing slash')
    recommendations.push(`Remove trailing slash: ${url.slice(0, -1)}`)
  }
  
  // Проверка глубины
  const depth = url.split('/').filter(Boolean).length
  if (depth > URL_ARCHITECTURE.rules.maxDepth) {
    issues.push(`URL depth (${depth}) exceeds maximum (${URL_ARCHITECTURE.rules.maxDepth})`)
    recommendations.push('Consider simplifying URL structure')
  }
  
  // Проверка на дублирование концептов
  const segments = url.split('/').filter(Boolean)
  if (segments.includes('use') && segments.includes('use-cases')) {
    issues.push('URL contains redundant segments (use/use-cases)')
    recommendations.push('Simplify to /use/cases/')
  }
  
  return {
    valid: issues.length === 0,
    issues,
    recommendations
  }
}

/**
 * Безопасная нормализация URL
 * Сохраняет Docs с заглавной буквы для совместимости
 */
export function safeNormalizeUrl(url: string): string {
  let normalized = url
  
  // Сохраняем Docs как есть
  if (!normalized.startsWith('/Docs')) {
    // Для всех остальных - lowercase
    normalized = normalized.toLowerCase()
  }
  
  // Заменяем подчеркивания на дефисы
  normalized = normalized.replace(/_/g, '-')
  
  // Убираем trailing slash (кроме корня)
  if (normalized !== '/' && normalized.endsWith('/')) {
    normalized = normalized.slice(0, -1)
  }
  
  // Убираем двойные слеши
  normalized = normalized.replace(/\/+/g, '/')
  
  return normalized
}

/**
 * Матрица перелинковки с учетом текущей структуры
 */
export const INTERLINKING_MATRIX = {
  hubs: {
    '/Docs': {
      children: [
        '/Docs/introduction',
        '/Docs/ecosystem', 
        '/Docs/developers',
        '/Docs/miners'
      ],
      related: ['/technology', '/learn', '/use']
    },
    '/ecosystem': {
      children: [
        '/ecosystem/map',
        '/ecosystem/grants',
        '/ecosystem/mining'
      ],
      related: ['/use', '/technology']
    },
    '/technology': {
      children: [
        '/technology/ergoscript',
        '/technology/eutxo-model',
        '/technology/nipopows',
        '/technology/storage-rent'
      ],
      related: ['/Docs', '/learn']
    },
    '/learn': {
      children: [
        '/learn/faq',
        '/learn/guides',
        '/learn/research',
        '/learn/ergoscript'
      ],
      related: ['/start', '/Docs']
    },
    '/use': {
      children: [
        '/use/mining',
        '/use/guides',
        '/use/get-erg',
        '/use/babel-fees'
      ],
      related: ['/ecosystem', '/wallet']
    }
  }
}

/**
 * Проверка на orphan страницы с учетом текущей структуры
 */
export function checkOrphanStatus(
  path: string, 
  incomingLinks: string[]
): {
  isOrphan: boolean
  reason?: string
} {
  // Главные страницы не могут быть orphan
  const mainPages = [
    '/',
    '/Docs',  // С заглавной!
    '/blog',
    '/ecosystem',
    '/technology',
    '/learn',
    '/use',
    '/wallet',
    '/start'
  ]
  
  if (mainPages.includes(path)) {
    return { isOrphan: false }
  }
  
  // Проверяем входящие ссылки
  if (incomingLinks.length === 0) {
    return {
      isOrphan: true,
      reason: 'No incoming links found'
    }
  }
  
  return { isOrphan: false }
}

/**
 * План миграции на правильную структуру
 */
export const MIGRATION_PLAN = {
  phase1: {
    description: 'Подготовка без breaking changes',
    tasks: [
      'Добавить алиасы для /docs → /Docs',
      'Обновить внутренние ссылки в новых компонентах',
      'Создать редиректы для внешних ссылок'
    ]
  },
  phase2: {
    description: 'Постепенная миграция',
    tasks: [
      'Переименовать папку Docs → docs',
      'Обновить все импорты',
      'Настроить 301 редиректы',
      'Обновить sitemap'
    ]
  },
  phase3: {
    description: 'Финализация',
    tasks: [
      'Удалить старые редиректы',
      'Обновить документацию',
      'Проверить все ссылки'
    ]
  }
}

/**
 * Генерация отчета по текущему состоянию IA
 */
export function generateIAReport(pages: string[]): string {
  const report = {
    total: pages.length,
    withIssues: 0,
    issues: [] as any[],
    recommendations: [] as string[]
  }
  
  for (const page of pages) {
    const validation = validateUrl(page)
    if (!validation.valid) {
      report.withIssues++
      report.issues.push({
        url: page,
        issues: validation.issues,
        recommendations: validation.recommendations
      })
    }
  }
  
  return `
# IA Report

## Summary
- Total pages: ${report.total}
- Pages with issues: ${report.withIssues}
- Compliance rate: ${((report.total - report.withIssues) / report.total * 100).toFixed(1)}%

## Issues Found
${report.issues.map(item => `
### ${item.url}
Issues:
${item.issues.map(i => `- ${i}`).join('\n')}
Recommendations:
${item.recommendations.map(r => `- ${r}`).join('\n')}
`).join('\n')}

## Next Steps
1. Fix critical issues (uppercase URLs)
2. Simplify deep nesting
3. Remove redundant segments
4. Implement gradual migration plan
  `.trim()
} 