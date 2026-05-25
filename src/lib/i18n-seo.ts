// International SEO helpers for Ergo Platform.
// Keep this list aligned with src/i18n/request.ts and src/i18n/routing.ts.

export const locales = [
  'en', 'ru', 'zh-cn', 'zh-tw',
  'tr', 'ko-kr', 'es', 'pt-br',
  'ja', 'de', 'fr', 'it'
] as const

export type Locale = typeof locales[number]

export const defaultLocale: Locale = 'en'

interface LocaleConfig {
  name: string
  nativeName: string
  flag: string
  hreflang: string
  direction: 'ltr' | 'rtl'
  currency: string
  domain: string
}

export const localeConfig: Record<Locale, LocaleConfig> = {
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
  'zh-cn': {
    name: 'Chinese Simplified',
    nativeName: '简体中文',
    flag: '🇨🇳',
    hreflang: 'zh-CN',
    direction: 'ltr',
    currency: 'CNY',
    domain: 'ergoblockchain.org'
  },
  'zh-tw': {
    name: 'Chinese Traditional',
    nativeName: '繁體中文',
    flag: '🇹🇼',
    hreflang: 'zh-TW',
    direction: 'ltr',
    currency: 'TWD',
    domain: 'ergoblockchain.org'
  },
  tr: {
    name: 'Turkish',
    nativeName: 'Türkçe',
    flag: '🇹🇷',
    hreflang: 'tr',
    direction: 'ltr',
    currency: 'TRY',
    domain: 'ergoblockchain.org'
  },
  'ko-kr': {
    name: 'Korean',
    nativeName: '한국어',
    flag: '🇰🇷',
    hreflang: 'ko-KR',
    direction: 'ltr',
    currency: 'KRW',
    domain: 'ergoblockchain.org'
  },
  es: {
    name: 'Spanish',
    nativeName: 'Español',
    flag: '🇪🇸',
    hreflang: 'es',
    direction: 'ltr',
    currency: 'EUR',
    domain: 'ergoblockchain.org'
  },
  'pt-br': {
    name: 'Portuguese (Brazil)',
    nativeName: 'Português (Brasil)',
    flag: '🇧🇷',
    hreflang: 'pt-BR',
    direction: 'ltr',
    currency: 'BRL',
    domain: 'ergoblockchain.org'
  },
  ja: {
    name: 'Japanese',
    nativeName: '日本語',
    flag: '🇯🇵',
    hreflang: 'ja',
    direction: 'ltr',
    currency: 'JPY',
    domain: 'ergoblockchain.org'
  },
  de: {
    name: 'German',
    nativeName: 'Deutsch',
    flag: '🇩🇪',
    hreflang: 'de',
    direction: 'ltr',
    currency: 'EUR',
    domain: 'ergoblockchain.org'
  },
  fr: {
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷',
    hreflang: 'fr',
    direction: 'ltr',
    currency: 'EUR',
    domain: 'ergoblockchain.org'
  },
  it: {
    name: 'Italian',
    nativeName: 'Italiano',
    flag: '🇮🇹',
    hreflang: 'it',
    direction: 'ltr',
    currency: 'EUR',
    domain: 'ergoblockchain.org'
  }
}

const localePrefixPattern = new RegExp(`^/(${locales.filter((locale) => locale !== defaultLocale).join('|')})(?=/|$)`, 'i')

const corePaths = ['/', '/technology', '/docs', '/blog', '/ecosystem'] as const

export const urlPatterns = Object.fromEntries(
  corePaths.map((pathname) => [
    pathname === '/' ? 'home' : pathname.slice(1),
    Object.fromEntries(locales.map((locale) => [locale, getLocalizedPath(pathname, locale)]))
  ])
) as Record<string, Record<Locale, string>>

export function generateHreflangLinks(pathname: string, currentLocale: Locale = defaultLocale) {
  void currentLocale
  const cleanPath = stripLocalePrefix(pathname)
  const hreflangLinks: Array<{ hreflang: string; href: string }> = [
    {
      hreflang: 'x-default',
      href: `https://www.ergoblockchain.org${getLocalizedPath(cleanPath, defaultLocale)}`
    }
  ]

  for (const locale of locales) {
    hreflangLinks.push({
      hreflang: localeConfig[locale].hreflang,
      href: `https://www.ergoblockchain.org${getLocalizedPath(cleanPath, locale)}`
    })
  }

  return hreflangLinks
}

export function getLocalizedPath(pathname: string, locale: Locale): string {
  const cleanPath = stripLocalePrefix(pathname)
  if (locale === defaultLocale) {
    return cleanPath
  }
  return `/${locale}${cleanPath === '/' ? '' : cleanPath}`
}

export function getLocaleFromPath(pathname: string): Locale {
  const match = pathname.match(localePrefixPattern)
  const candidate = match?.[1]?.toLowerCase()
  return locales.includes(candidate as Locale) ? candidate as Locale : defaultLocale
}

export function getCanonicalUrl(pathname: string, locale: Locale): string {
  return `https://www.ergoblockchain.org${getLocalizedPath(pathname, locale)}`
}

export const seoMetadata: Record<Locale, {
  siteName: string
  siteDescription: string
  keywords: string[]
}> = Object.fromEntries(locales.map((locale) => [
  locale,
  {
    siteName: locale === 'ru' ? 'Платформа Ergo' : 'Ergo Platform',
    siteDescription: locale === 'ru'
      ? 'Ergo — PoW/eUTXO слой клиринга и публичная поверхность доказательств для автономной работы, DeFi, приватности и audit-gated расчётов.'
      : 'Ergo is a PoW/eUTXO clearing layer and public proof surface for autonomous work, DeFi, privacy, and audit-gated settlement.',
    keywords: ['Ergo', 'blockchain', 'DeFi', 'smart contracts', 'ErgoScript', 'eUTXO', 'privacy', 'proof of work']
  }
])) as Record<Locale, {
  siteName: string
  siteDescription: string
  keywords: string[]
}>

export function generateSitemapEntries(pages: string[]) {
  const entries: Array<{
    url: string
    lastModified: Date
    changeFrequency: 'daily' | 'weekly' | 'monthly'
    priority: number
    alternates?: { [key: string]: string }
  }> = []

  for (const page of pages) {
    const cleanPage = stripLocalePrefix(page)
    for (const locale of locales) {
      const localizedPath = getLocalizedPath(cleanPage, locale)
      const alternates: { [key: string]: string } = {}

      for (const altLocale of locales) {
        const altPath = getLocalizedPath(cleanPage, altLocale)
        alternates[localeConfig[altLocale].hreflang] = `https://www.ergoblockchain.org${altPath}`
      }
      alternates['x-default'] = `https://www.ergoblockchain.org${getLocalizedPath(cleanPage, defaultLocale)}`

      entries.push({
        url: `https://www.ergoblockchain.org${localizedPath}`,
        lastModified: new Date(),
        changeFrequency: cleanPage === '/' ? 'daily' : 'weekly',
        priority: cleanPage === '/' ? 1.0 : 0.8,
        alternates
      })
    }
  }

  return entries
}

export function validateHreflang(currentUrl: string, hreflangLinks: Array<{ hreflang: string; href: string }>) {
  const issues: string[] = []

  if (!hreflangLinks.find((link) => link.hreflang === 'x-default')) {
    issues.push('Missing x-default hreflang')
  }

  if (!hreflangLinks.find((link) => link.href === currentUrl)) {
    issues.push('Page does not reference itself in hreflang')
  }

  const hreflangValues = hreflangLinks.map((link) => link.hreflang)
  const duplicates = hreflangValues.filter((value, index) => hreflangValues.indexOf(value) !== index)
  if (duplicates.length > 0) {
    issues.push(`Duplicate hreflang values: ${duplicates.join(', ')}`)
  }

  return issues
}

function stripLocalePrefix(pathname: string): string {
  const normalized = pathname.startsWith('/') ? pathname : `/${pathname}`
  const stripped = normalized.replace(localePrefixPattern, '')
  return stripped === '' ? '/' : stripped
}
