// International SEO Configuration for Ergo Platform
// Supports: en (default), ru, pt-BR

export const locales = ['en', 'ru', 'pt-BR'] as const
export type Locale = typeof locales[number]

export const defaultLocale: Locale = 'en'

// Locale configuration
export const localeConfig = {
  en: {
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸',
    hreflang: 'en',
    direction: 'ltr',
    currency: 'USD',
    domain: 'ergoblockchain.org'
  },
  ru: {
    name: 'Russian', 
    nativeName: 'Русский',
    flag: '🇷🇺',
    hreflang: 'ru',
    direction: 'ltr',
    currency: 'RUB',
    domain: 'ergoblockchain.org'
  },
  'pt-BR': {
    name: 'Portuguese (Brazil)',
    nativeName: 'Português (Brasil)',
    flag: '🇧🇷',
    hreflang: 'pt-BR',
    direction: 'ltr',
    currency: 'BRL',
    domain: 'ergoblockchain.org'
  }
} as const

// URL structure patterns
export const urlPatterns = {
  // Homepage
  home: {
    en: '/',
    ru: '/ru',
    'pt-BR': '/pt-br'
  },
  // Technology pages
  technology: {
    en: '/technology',
    ru: '/ru/technology',
    'pt-BR': '/pt-br/technology'
  },
  // Documentation
  docs: {
    en: '/docs',
    ru: '/ru/docs', 
    'pt-BR': '/pt-br/docs'
  },
  // Blog
  blog: {
    en: '/blog',
    ru: '/ru/blog',
    'pt-BR': '/pt-br/blog'
  },
  // Ecosystem
  ecosystem: {
    en: '/ecosystem',
    ru: '/ru/ecosystem',
    'pt-BR': '/pt-br/ecosystem'
  }
} as const

// Generate hreflang links for a page
export function generateHreflangLinks(pathname: string, currentLocale: Locale) {
  const hreflangLinks: Array<{ hreflang: string; href: string }> = []
  
  // Add x-default (English)
  hreflangLinks.push({
    hreflang: 'x-default',
    href: `https://ergoblockchain.org${getLocalizedPath(pathname, 'en')}`
  })
  
  // Add all locales
  locales.forEach(locale => {
    const localizedPath = getLocalizedPath(pathname, locale)
    hreflangLinks.push({
      hreflang: localeConfig[locale].hreflang,
      href: `https://ergoblockchain.org${localizedPath}`
    })
  })
  
  return hreflangLinks
}

// Get localized path for a given pathname and locale
export function getLocalizedPath(pathname: string, locale: Locale): string {
  if (locale === defaultLocale) {
    return pathname
  }
  
  const localePrefix = locale === 'pt-BR' ? '/pt-br' : `/${locale}`
  
  // Remove existing locale prefix if present
  const cleanPath = pathname.replace(/^\/(ru|pt-br)/, '')
  
  return `${localePrefix}${cleanPath}`
}

// Extract locale from pathname
export function getLocaleFromPath(pathname: string): Locale {
  if (pathname.startsWith('/ru')) return 'ru'
  if (pathname.startsWith('/pt-br')) return 'pt-BR'
  return defaultLocale
}

// Generate canonical URL
export function getCanonicalUrl(pathname: string, locale: Locale): string {
  const localizedPath = getLocalizedPath(pathname, locale)
  return `https://ergoblockchain.org${localizedPath}`
}

// SEO metadata per locale
export const seoMetadata = {
  en: {
    siteName: 'Ergo Platform',
    siteDescription: 'Ergo is a resilient blockchain platform for contractual money. Build DeFi applications with advanced smart contracts, built-in privacy, and sustainable economics.',
    keywords: [
      'blockchain',
      'cryptocurrency', 
      'DeFi',
      'smart contracts',
      'ErgoScript',
      'eUTXO',
      'privacy',
      'proof of work'
    ]
  },
  ru: {
    siteName: 'Платформа Ergo',
    siteDescription: 'Ergo — это устойчивая блокчейн-платформа для контрактных денег. Создавайте DeFi-приложения с продвинутыми смарт-контрактами, встроенной приватностью и устойчивой экономикой.',
    keywords: [
      'блокчейн',
      'криптовалюта',
      'DeFi',
      'смарт-контракты',
      'ErgoScript',
      'eUTXO',
      'приватность',
      'proof of work'
    ]
  },
  'pt-BR': {
    siteName: 'Plataforma Ergo',
    siteDescription: 'Ergo é uma plataforma blockchain resiliente para dinheiro contratual. Construa aplicações DeFi com contratos inteligentes avançados, privacidade integrada e economia sustentável.',
    keywords: [
      'blockchain',
      'criptomoeda',
      'DeFi', 
      'contratos inteligentes',
      'ErgoScript',
      'eUTXO',
      'privacidade',
      'proof of work'
    ]
  }
} as const

// Generate sitemap entries for all locales
export function generateSitemapEntries(pages: string[]) {
  const entries: Array<{
    url: string
    lastModified: Date
    changeFrequency: 'daily' | 'weekly' | 'monthly'
    priority: number
    alternates?: { [key: string]: string }
  }> = []
  
  pages.forEach(page => {
    locales.forEach(locale => {
      const localizedPath = getLocalizedPath(page, locale)
      const url = `https://ergoblockchain.org${localizedPath}`
      
      // Generate alternates for this page
      const alternates: { [key: string]: string } = {}
      locales.forEach(altLocale => {
        const altPath = getLocalizedPath(page, altLocale)
        alternates[localeConfig[altLocale].hreflang] = `https://ergoblockchain.org${altPath}`
      })
      
      entries.push({
        url,
        lastModified: new Date(),
        changeFrequency: page === '/' ? 'daily' : 'weekly',
        priority: page === '/' ? 1.0 : 0.8,
        alternates
      })
    })
  })
  
  return entries
}

// Validate hreflang implementation
export function validateHreflang(currentUrl: string, hreflangLinks: Array<{ hreflang: string; href: string }>) {
  const issues: string[] = []
  
  // Check for x-default
  if (!hreflangLinks.find(link => link.hreflang === 'x-default')) {
    issues.push('Missing x-default hreflang')
  }
  
  // Check for self-referencing
  const currentHreflang = hreflangLinks.find(link => link.href === currentUrl)
  if (!currentHreflang) {
    issues.push('Page does not reference itself in hreflang')
  }
  
  // Check for duplicate hreflang values
  const hreflangValues = hreflangLinks.map(link => link.hreflang)
  const duplicates = hreflangValues.filter((value, index) => hreflangValues.indexOf(value) !== index)
  if (duplicates.length > 0) {
    issues.push(`Duplicate hreflang values: ${duplicates.join(', ')}`)
  }
  
  return issues
} 