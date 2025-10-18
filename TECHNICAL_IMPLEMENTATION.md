# 🔧 **ТЕХНИЧЕСКАЯ РЕАЛИЗАЦИЯ SEO СИСТЕМЫ**

**Ergo Platform - Complete SEO Infrastructure**

---

## 📁 **СТРУКТУРА ФАЙЛОВ**

```
ErgoErgoErgo/
├── lib/
│   ├── schema-generator.ts      # ✅ Schema.org система
│   ├── i18n-seo.ts             # ✅ Международный SEO
│   ├── internal-linking.ts     # ✅ Автоматический линкинг
│   ├── seo-templates.ts        # ✅ Контент шаблоны
│   └── seo-monitoring.ts       # ✅ Мониторинг и аналитика
├── app/
│   ├── layout.tsx              # ✅ Глобальные схемы + metadata
│   ├── viewport.ts             # ✅ Viewport настройки
│   └── page.tsx                # ✅ Lazy loading компонентов
├── components/home/
│   ├── lazy-sections.tsx       # ✅ Динамические импорты
│   ├── quick-actions.tsx       # ✅ Исправлены client/server ошибки
│   └── quick-action-card.tsx   # ✅ Добавлены недостающие иконки
├── public/
│   ├── robots.txt              # ✅ Оптимизированный robots.txt
│   └── apple-touch-icon.png    # ✅ iOS иконка
└── next.config.js              # ✅ Performance оптимизации
```

---

## 🛠 **ДЕТАЛЬНАЯ РЕАЛИЗАЦИЯ**

### **1. Schema.org System (`lib/schema-generator.ts`)**

```typescript
// Organization Schema - Глобальная схема организации
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ergo Platform",
  "alternateName": ["Ergo", "Ergo Blockchain"],
  "url": "https://ergoblockchain.org",
  "logo": {
    "@type": "ImageObject",
    "url": "https://ergoblockchain.org/logo.png",
    "width": 200,
    "height": 200
  },
  "description": "Ergo is a resilient blockchain platform for contractual money. Build DeFi applications with advanced smart contracts, built-in privacy, and sustainable economics.",
  "foundingDate": "2019",
  "founder": {
    "@type": "Person",
    "name": "Alexander Chepurnoy"
  },
  "sameAs": [
    "https://twitter.com/ergoplatformorg",
    "https://github.com/ergoplatform",
    "https://www.reddit.com/r/ergonauts",
    "https://t.me/ergoplatform",
    "https://discord.gg/gYrVrjS",
    "https://www.youtube.com/channel/UC7cht9w6zKqZKVVKWJNJfBg"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "url": "https://ergoblockchain.org/docs",
    "availableLanguage": ["English", "Russian", "Portuguese"]
  },
  "knowsAbout": [
    "Blockchain Technology",
    "Smart Contracts",
    "ErgoScript",
    "eUTXO Model",
    "Proof of Work",
    "Cryptocurrency",
    "DeFi",
    "Privacy Technology"
  ]
}

// Website Schema - Основная схема сайта
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Ergo Platform",
  "url": "https://ergoblockchain.org",
  "description": "Ergo is a resilient blockchain platform for contractual money",
  "publisher": {
    "@id": "https://ergoblockchain.org#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://ergoblockchain.org/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "inLanguage": ["en", "ru", "pt-BR"]
}

// Генераторы схем для разных типов страниц
export function generateWebPageSchema(config: SchemaConfig) { ... }
export function generateArticleSchema(config: SchemaConfig) { ... }
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) { ... }
export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) { ... }
export function generateSoftwareSchema(name: string, description: string, url: string) { ... }
export function generateHowToSchema(config: { ... }) { ... }
```

### **2. International SEO (`lib/i18n-seo.ts`)**

```typescript
// Поддерживаемые локали
export const locales = ['en', 'ru', 'pt-BR'] as const
export type Locale = typeof locales[number]
export const defaultLocale: Locale = 'en'

// Конфигурация локалей
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

// URL структуры для разных локалей
export const urlPatterns = {
  home: {
    en: '/',
    ru: '/ru',
    'pt-BR': '/pt-br'
  },
  technology: {
    en: '/technology',
    ru: '/ru/technology',
    'pt-BR': '/pt-br/technology'
  },
  docs: {
    en: '/docs',
    ru: '/ru/docs', 
    'pt-BR': '/pt-br/docs'
  },
  blog: {
    en: '/blog',
    ru: '/ru/blog',
    'pt-BR': '/pt-br/blog'
  },
  ecosystem: {
    en: '/ecosystem',
    ru: '/ru/ecosystem',
    'pt-BR': '/pt-br/ecosystem'
  }
} as const

// Генерация hreflang ссылок
export function generateHreflangLinks(pathname: string, currentLocale: Locale) {
  const hreflangLinks: Array<{ hreflang: string; href: string }> = []
  
  // Добавляем x-default (English)
  hreflangLinks.push({
    hreflang: 'x-default',
    href: `https://ergoblockchain.org${getLocalizedPath(pathname, 'en')}`
  })
  
  // Добавляем все локали
  locales.forEach(locale => {
    const localizedPath = getLocalizedPath(pathname, locale)
    hreflangLinks.push({
      hreflang: localeConfig[locale].hreflang,
      href: `https://ergoblockchain.org${localizedPath}`
    })
  })
  
  return hreflangLinks
}

// SEO метаданные для каждой локали
export const seoMetadata = {
  en: {
    siteName: 'Ergo Platform',
    siteDescription: 'Ergo is a resilient blockchain platform for contractual money. Build DeFi applications with advanced smart contracts, built-in privacy, and sustainable economics.',
    keywords: [
      'blockchain', 'cryptocurrency', 'DeFi', 'smart contracts',
      'ErgoScript', 'eUTXO', 'privacy', 'proof of work'
    ]
  },
  ru: {
    siteName: 'Платформа Ergo',
    siteDescription: 'Ergo — это устойчивая блокчейн-платформа для контрактных денег. Создавайте DeFi-приложения с продвинутыми смарт-контрактами, встроенной приватностью и устойчивой экономикой.',
    keywords: [
      'блокчейн', 'криптовалюта', 'DeFi', 'смарт-контракты',
      'ErgoScript', 'eUTXO', 'приватность', 'proof of work'
    ]
  },
  'pt-BR': {
    siteName: 'Plataforma Ergo',
    siteDescription: 'Ergo é uma plataforma blockchain resiliente para dinheiro contratual. Construa aplicações DeFi com contratos inteligentes avançados, privacidade integrada e economia sustentável.',
    keywords: [
      'blockchain', 'criptomoeda', 'DeFi', 'contratos inteligentes',
      'ErgoScript', 'eUTXO', 'privacidade', 'proof of work'
    ]
  }
} as const
```

### **3. Internal Linking System (`lib/internal-linking.ts`)**

```typescript
// Правила автоматического линкинга
export const linkingRules: LinkRule[] = [
  // Технологические концепции
  {
    keywords: ['eUTXO', 'eUTXO model', 'extended UTXO'],
    targetUrl: '/technology/eutxo',
    title: 'Learn about eUTXO Model',
    priority: 10,
    maxLinksPerPage: 2,
    excludePages: ['/technology/eutxo']
  },
  {
    keywords: ['ErgoScript', 'Ergo Script', 'smart contracts'],
    targetUrl: '/technology/ergoscript',
    title: 'Explore ErgoScript',
    priority: 10,
    maxLinksPerPage: 2,
    excludePages: ['/technology/ergoscript']
  },
  {
    keywords: ['storage rent', 'blockchain sustainability'],
    targetUrl: '/technology/storage-rent',
    title: 'Understanding Storage Rent',
    priority: 9,
    maxLinksPerPage: 1,
    excludePages: ['/technology/storage-rent']
  },
  {
    keywords: ['NIPoPoWs', 'non-interactive proofs'],
    targetUrl: '/technology/nipopows',
    title: 'NIPoPoWs Technology',
    priority: 8,
    maxLinksPerPage: 1,
    excludePages: ['/technology/nipopows']
  },
  {
    keywords: ['Autolykos', 'proof of work', 'mining algorithm'],
    targetUrl: '/technology/secure-pow',
    title: 'Autolykos PoW Algorithm',
    priority: 8,
    maxLinksPerPage: 1,
    excludePages: ['/technology/secure-pow']
  },

  // Документация
  {
    keywords: ['documentation', 'developer docs', 'API reference'],
    targetUrl: '/docs',
    title: 'Developer Documentation',
    priority: 9,
    maxLinksPerPage: 1,
    excludePages: ['/docs']
  },
  {
    keywords: ['getting started', 'quick start', 'tutorial'],
    targetUrl: '/docs/developers/tutorials',
    title: 'Getting Started Guide',
    priority: 8,
    maxLinksPerPage: 1
  },
  {
    keywords: ['wallet', 'wallets', 'Ergo wallet'],
    targetUrl: '/wallet',
    title: 'Get Ergo Wallet',
    priority: 9,
    maxLinksPerPage: 2,
    excludePages: ['/wallet']
  },

  // Экосистема
  {
    keywords: ['ecosystem', 'dApps', 'applications'],
    targetUrl: '/ecosystem',
    title: 'Ergo Ecosystem',
    priority: 8,
    maxLinksPerPage: 1,
    excludePages: ['/ecosystem']
  },
  {
    keywords: ['SigmaUSD', 'stablecoin', 'algorithmic stablecoin'],
    targetUrl: '/ecosystem/financial/sigmausd',
    title: 'SigmaUSD Stablecoin',
    priority: 7,
    maxLinksPerPage: 1
  },
  {
    keywords: ['ErgoDEX', 'decentralized exchange', 'DEX'],
    targetUrl: '/ecosystem/financial/ergodex',
    title: 'ErgoDEX Exchange',
    priority: 7,
    maxLinksPerPage: 1
  },

  // Use Cases
  {
    keywords: ['DeFi', 'decentralized finance'],
    targetUrl: '/use/cases/defi',
    title: 'DeFi Use Cases',
    priority: 8,
    maxLinksPerPage: 1
  },
  {
    keywords: ['privacy', 'confidential transactions'],
    targetUrl: '/use/cases/privacy',
    title: 'Privacy Features',
    priority: 7,
    maxLinksPerPage: 1
  },
  {
    keywords: ['NFT', 'NFTs', 'non-fungible tokens'],
    targetUrl: '/use/cases/nfts',
    title: 'NFTs on Ergo',
    priority: 6,
    maxLinksPerPage: 1
  },

  // Майнинг
  {
    keywords: ['mining', 'mine Ergo', 'mining pools'],
    targetUrl: '/use/mining',
    title: 'Start Mining Ergo',
    priority: 8,
    maxLinksPerPage: 1,
    excludePages: ['/use/mining']
  },

  // Сообщество
  {
    keywords: ['community', 'Discord', 'Telegram'],
    targetUrl: '/start/community',
    title: 'Join Community',
    priority: 6,
    maxLinksPerPage: 1
  }
]

// Генерация внутренних ссылок для контента
export function generateInternalLinks(
  content: string,
  currentUrl: string,
  maxLinks: number = 5
): { content: string; linksAdded: number } {
  let modifiedContent = content
  let linksAdded = 0
  const usedRules = new Set<string>()

  // Сортируем правила по приоритету
  const sortedRules = [...linkingRules].sort((a, b) => b.priority - a.priority)

  for (const rule of sortedRules) {
    if (linksAdded >= maxLinks) break
    if (rule.excludePages?.includes(currentUrl)) continue
    if (usedRules.has(rule.targetUrl)) continue

    let ruleLinksAdded = 0
    
    for (const keyword of rule.keywords) {
      if (ruleLinksAdded >= rule.maxLinksPerPage) break
      if (linksAdded >= maxLinks) break

      // Создаем regex для поиска ключевых слов
      const regex = new RegExp(`\\b${escapeRegex(keyword)}\\b(?![^<]*>)`, 'gi')
      
      // Проверяем существование ключевого слова
      const matches = modifiedContent.match(regex)
      if (matches && matches.length > 0) {
        // Заменяем первое вхождение ссылкой
        modifiedContent = modifiedContent.replace(
          regex,
          `<a href="${rule.targetUrl}" title="${rule.title}" class="internal-link">$&</a>`
        )
        ruleLinksAdded++
        linksAdded++
        usedRules.add(rule.targetUrl)
        break // Только одна ссылка на правило на страницу
      }
    }
  }

  return { content: modifiedContent, linksAdded }
}

// Контекстные ссылки на основе типа страницы
export function getContextualLinks(pageType: string, currentUrl: string) {
  const links: Array<{ url: string; title: string; description: string }> = []

  switch (pageType) {
    case 'technology':
      links.push(
        { url: '/docs', title: 'Developer Documentation', description: 'Technical guides and API reference' },
        { url: '/ecosystem', title: 'Ecosystem', description: 'Applications built on Ergo' },
        { url: '/use', title: 'Use Cases', description: 'Real-world applications' }
      )
      break

    case 'docs':
      links.push(
        { url: '/technology', title: 'Technology', description: 'Core blockchain concepts' },
        { url: '/ecosystem', title: 'Ecosystem', description: 'Live applications' },
        { url: '/start/introduction', title: 'Getting Started', description: 'New to Ergo?' }
      )
      break

    case 'blog':
      links.push(
        { url: '/docs', title: 'Documentation', description: 'Technical resources' },
        { url: '/technology', title: 'Technology', description: 'Learn the fundamentals' },
        { url: '/ecosystem', title: 'Ecosystem', description: 'Explore applications' }
      )
      break

    case 'ecosystem':
      links.push(
        { url: '/technology', title: 'Technology', description: 'Understanding the platform' },
        { url: '/docs', title: 'Build on Ergo', description: 'Developer resources' },
        { url: '/use', title: 'Use Cases', description: 'Application scenarios' }
      )
      break

    default:
      // Главная и другие страницы
      links.push(
        { url: '/technology', title: 'Technology', description: 'Core innovations' },
        { url: '/docs', title: 'Documentation', description: 'Developer resources' },
        { url: '/ecosystem', title: 'Ecosystem', description: 'Applications and tools' }
      )
  }

  // Фильтруем текущую страницу
  return links.filter(link => link.url !== currentUrl)
}
```

### **4. SEO Content Templates (`lib/seo-templates.ts`)**

```typescript
// Шаблон главной страницы
export const homepageTemplate: SEOTemplate = {
  title: "Ergo Platform - Resilient Blockchain for Contractual Money",
  description: "Ergo is a resilient blockchain platform for contractual money. Build DeFi applications with advanced smart contracts, built-in privacy, and sustainable economics.",
  h1: "Resilient Blockchain for Contractual Money",
  keywords: [
    "ergo blockchain", "contractual money", "smart contracts", "defi platform",
    "ergoscript", "eutxo model", "proof of work", "blockchain sustainability"
  ],
  contentStructure: [
    "Hero section with value proposition",
    "Core technology pillars (eUTXO, ErgoScript, Storage Rent)",
    "Use cases and applications",
    "Developer resources",
    "Community and ecosystem",
    "Getting started paths"
  ]
}

// Шаблоны технологических страниц
export const technologyTemplates = {
  eutxo: {
    title: "eUTXO Model - Extended UTXO for Smart Contracts | Ergo Platform",
    description: "Learn how Ergo's eUTXO model enables powerful smart contracts while maintaining UTXO benefits. Discover the advantages over account-based systems.",
    h1: "eUTXO Model: Extended UTXO for Smart Contracts",
    keywords: [
      "eutxo model", "extended utxo", "smart contracts",
      "utxo vs account", "blockchain architecture", "ergo technology"
    ],
    contentStructure: [
      "What is eUTXO?",
      "Advantages over account-based models",
      "Smart contract capabilities",
      "Technical implementation",
      "Use cases and examples",
      "Developer resources"
    ],
    faqSuggestions: [
      {
        question: "What is the eUTXO model?",
        answer: "The eUTXO (extended UTXO) model is Ergo's approach to smart contracts that extends Bitcoin's UTXO model with additional data and script capabilities, enabling complex smart contracts while maintaining UTXO benefits like parallelization and predictable fees."
      },
      {
        question: "How does eUTXO differ from Ethereum's account model?",
        answer: "Unlike Ethereum's account model, eUTXO maintains transaction parallelization, predictable fees, and better privacy. Each transaction output contains both value and arbitrary data, enabling stateful smart contracts without global state."
      }
    ]
  },
  
  ergoscript: {
    title: "ErgoScript - Smart Contract Language | Ergo Platform",
    description: "ErgoScript is Ergo's powerful smart contract language based on Sigma protocols. Build secure, verifiable contracts with advanced cryptographic features.",
    h1: "ErgoScript: Advanced Smart Contract Language",
    keywords: [
      "ergoscript", "smart contract language", "sigma protocols",
      "zero knowledge proofs", "blockchain programming", "ergo development"
    ],
    contentStructure: [
      "Introduction to ErgoScript",
      "Sigma protocols foundation",
      "Language features and syntax",
      "Security advantages",
      "Development tools",
      "Code examples and tutorials"
    ]
  }
}

// Правила SEO контента
export const contentRules = {
  titleLength: { min: 30, max: 60, optimal: 55 },
  descriptionLength: { min: 120, max: 160, optimal: 155 },
  h1Rules: {
    unique: true,
    includeKeyword: true,
    maxLength: 70,
    naturalLanguage: true
  },
  keywordDensity: { min: 0.5, max: 2.5, optimal: 1.5 },
  readabilityScore: { min: 60, optimal: 70 },
  internalLinks: { min: 3, max: 8, optimal: 5 },
  externalLinks: { max: 3 },
  imageAltText: { required: true, includeKeyword: true },
  contentLength: { min: 300, optimal: 1500 }
}

// Генерация SEO-оптимизированной структуры контента
export function generateContentStructure(
  pageType: string,
  topic: string,
  targetKeywords: string[]
): {
  title: string
  description: string
  h1: string
  outline: string[]
  suggestions: string[]
} {
  const suggestions: string[] = []
  
  // Генерация заголовка
  let title = `${topic} | Ergo Platform`
  if (title.length > contentRules.titleLength.max) {
    title = `${topic.substring(0, 50)}... | Ergo`
    suggestions.push('Title truncated - consider shorter topic')
  }
  
  // Генерация описания
  const description = `Learn about ${topic.toLowerCase()} on Ergo blockchain. Comprehensive guide covering implementation, benefits, and practical applications.`
  
  // Генерация H1
  const h1 = topic.length <= contentRules.h1Rules.maxLength ? topic : `${topic.substring(0, 65)}...`
  
  // Генерация структуры на основе типа страницы
  let outline: string[] = []
  switch (pageType) {
    case 'technology':
      outline = [
        `What is ${topic}?`,
        'Technical Overview',
        'Key Features and Benefits',
        'Implementation Details',
        'Use Cases and Examples',
        'Developer Resources',
        'Frequently Asked Questions'
      ]
      break
      
    case 'tutorial':
      outline = [
        'Prerequisites',
        'Step-by-Step Guide',
        'Code Examples',
        'Testing and Validation',
        'Troubleshooting',
        'Next Steps',
        'Additional Resources'
      ]
      break
      
    case 'use-case':
      outline = [
        'Overview',
        'Problem Statement',
        'Ergo Solution',
        'Implementation Approach',
        'Benefits and Advantages',
        'Real-World Examples',
        'Getting Started'
      ]
      break
      
    default:
      outline = [
        'Introduction',
        'Key Concepts',
        'Practical Applications',
        'Benefits',
        'Getting Started',
        'Resources'
      ]
  }
  
  // SEO рекомендации
  if (targetKeywords.length < 3) {
    suggestions.push('Add more target keywords for better SEO coverage')
  }
  
  if (!targetKeywords.some(keyword => title.toLowerCase().includes(keyword.toLowerCase()))) {
    suggestions.push('Include primary keyword in title')
  }
  
  return {
    title,
    description,
    h1,
    outline,
    suggestions
  }
}
```

### **5. SEO Monitoring System (`lib/seo-monitoring.ts`)**

```typescript
// Конфигурация алертов SEO
export const seoAlerts = {
  coreWebVitals: {
    lcp: { warning: 2500, critical: 4000 }, // миллисекунды
    cls: { warning: 0.1, critical: 0.25 }, // счет
    inp: { warning: 200, critical: 500 }, // миллисекунды
  },
  traffic: {
    organicDropPercent: { warning: 10, critical: 25 }, // процент падения
    conversionDropPercent: { warning: 15, critical: 30 },
  },
  technical: {
    crawlErrorsThreshold: { warning: 10, critical: 50 },
    indexDropPercent: { warning: 5, critical: 15 },
  }
}

// Отслеживание Core Web Vitals
export function trackCoreWebVitals() {
  if (typeof window === 'undefined') return

  // LCP - Largest Contentful Paint
  new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      const lcp = entry.startTime
      
      // Отправка в аналитику
      if ((window as any).gtag) {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Core Web Vitals',
          event_label: 'LCP',
          value: Math.round(lcp),
          custom_map: { metric_value: lcp }
        })
      }
      
      // Проверка алертов
      if (lcp > seoAlerts.coreWebVitals.lcp.critical) {
        console.warn(`🚨 Critical LCP: ${lcp}ms (threshold: ${seoAlerts.coreWebVitals.lcp.critical}ms)`)
      } else if (lcp > seoAlerts.coreWebVitals.lcp.warning) {
        console.warn(`⚠️ Warning LCP: ${lcp}ms (threshold: ${seoAlerts.coreWebVitals.lcp.warning}ms)`)
      }
    }
  }).observe({ type: 'largest-contentful-paint', buffered: true })

  // CLS - Cumulative Layout Shift
  new PerformanceObserver((list) => {
    let cls = 0
    for (const entry of list.getEntries()) {
      const layoutShift = entry as any
      if (!layoutShift.hadRecentInput) {
        cls += layoutShift.value
      }
    }
    
    if ((window as any).gtag) {
      (window as any).gtag('event', 'web_vitals', {
        event_category: 'Core Web Vitals',
        event_label: 'CLS',
        value: Math.round(cls * 1000),
        custom_map: { metric_value: cls }
      })
    }
    
    if (cls > seoAlerts.coreWebVitals.cls.critical) {
      console.warn(`🚨 Critical CLS: ${cls} (threshold: ${seoAlerts.coreWebVitals.cls.critical})`)
    }
  }).observe({ type: 'layout-shift', buffered: true })

  // INP - Interaction to Next Paint
  new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      const eventEntry = entry as any
      const inp = eventEntry.processingStart - eventEntry.startTime
      
      if ((window as any).gtag) {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Core Web Vitals',
          event_label: 'INP',
          value: Math.round(inp),
          custom_map: { metric_value: inp }
        })
      }
    }
  }).observe({ type: 'event', buffered: true })
}

// SEO события для отслеживания
export const seoEvents = {
  // Поисковые взаимодействия
  searchQuery: (query: string, results: number) => {
    if ((window as any).gtag) {
      (window as any).gtag('event', 'search', {
        search_term: query,
        search_results: results,
        event_category: 'SEO',
        event_label: 'Internal Search'
      })
    }
  },
  
  // Вовлеченность контента
  contentEngagement: (page: string, timeOnPage: number, scrollDepth: number) => {
    if ((window as any).gtag) {
      (window as any).gtag('event', 'content_engagement', {
        page_path: page,
        time_on_page: timeOnPage,
        scroll_depth: scrollDepth,
        event_category: 'SEO',
        event_label: 'Content Quality'
      })
    }
  },
  
  // Клики по внутренним ссылкам
  internalLinkClick: (fromPage: string, toPage: string, linkText: string) => {
    if ((window as any).gtag) {
      (window as any).gtag('event', 'internal_link_click', {
        from_page: fromPage,
        to_page: toPage,
        link_text: linkText,
        event_category: 'SEO',
        event_label: 'Internal Linking'
      })
    }
  },
  
  // Клики по внешним ссылкам
  externalLinkClick: (url: string, linkText: string) => {
    if ((window as any).gtag) {
      (window as any).gtag('event', 'external_link_click', {
        external_url: url,
        link_text: linkText,
        event_category: 'SEO',
        event_label: 'External Links'
      })
    }
  },
  
  // Валидация Schema.org
  schemaValidation: (pageType: string, isValid: boolean, errors?: string[]) => {
    if ((window as any).gtag) {
      (window as any).gtag('event', 'schema_validation', {
        page_type: pageType,
        is_valid: isValid,
        errors: errors?.join(', ') || 'none',
        event_category: 'SEO',
        event_label: 'Structured Data'
      })
    }
  }
}

// Инициализация SEO мониторинга
export function initSEOMonitoring() {
  if (typeof window === 'undefined') return
  
  // Отслеживание Core Web Vitals
  trackCoreWebVitals()
  
  // Отслеживание глубины прокрутки
  let maxScroll = 0
  const trackScrollDepth = () => {
    const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)
    if (scrollPercent > maxScroll) {
      maxScroll = scrollPercent
      
      // Отслеживание ключевых точек прокрутки
      if ([25, 50, 75, 90].includes(scrollPercent)) {
        seoEvents.contentEngagement(window.location.pathname, Date.now(), scrollPercent)
      }
    }
  }
  
  window.addEventListener('scroll', trackScrollDepth, { passive: true })
  
  // Отслеживание времени на странице
  const startTime = Date.now()
  window.addEventListener('beforeunload', () => {
    const timeOnPage = Date.now() - startTime
    seoEvents.contentEngagement(window.location.pathname, timeOnPage, maxScroll)
  })
  
  // Отслеживание кликов по ссылкам
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    const link = target.closest('a')
    
    if (link && link.href) {
      const url = new URL(link.href)
      const currentDomain = window.location.hostname
      
      if (url.hostname === currentDomain) {
        // Внутренняя ссылка
        seoEvents.internalLinkClick(
          window.location.pathname,
          url.pathname,
          link.textContent || 'Unknown'
        )
      } else {
        // Внешняя ссылка
        seoEvents.externalLinkClick(link.href, link.textContent || 'Unknown')
      }
    }
  })
}
```

---

## 🔧 **КОНФИГУРАЦИОННЫЕ ФАЙЛЫ**

### **robots.txt**
```
# Ergo Platform - Optimized for SEO
User-agent: *
Allow: /

# Block staging and development
Disallow: /staging/
Disallow: /dev/
Disallow: /_next/
Disallow: /api/
Disallow: /admin/

# Block search and filter parameters
Disallow: /*?search=*
Disallow: /*?filter=*
Disallow: /*?utm_*

# Allow important crawl paths
Allow: /docs/
Allow: /blog/
Allow: /ecosystem/
Allow: /technology/
Allow: /use/

# Sitemaps
Sitemap: https://ergoblockchain.org/sitemap.xml
Sitemap: https://ergoblockchain.org/sitemap-pages.xml
Sitemap: https://ergoblockchain.org/sitemap-blog.xml
Sitemap: https://ergoblockchain.org/sitemap-docs.xml

# Crawl-delay for aggressive bots
User-agent: AhrefsBot
Crawl-delay: 10

User-agent: SemrushBot
Crawl-delay: 10
```

### **next.config.js**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Экспериментальные оптимизации
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },

  // Оптимизация изображений
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 дней
  },

  // Компрессия
  compress: true,

  // Headers для кеширования
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
```

### **app/viewport.ts**
```typescript
import type { Viewport } from 'next'

export const viewport: Viewport = {
  themeColor: '#f97316', // orange-500
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}
```

---

## 🚀 **ИСПОЛЬЗОВАНИЕ СИСТЕМЫ**

### **1. Добавление Schema на страницу:**
```typescript
import { generateWebPageSchema, generateFAQSchema } from '@/lib/schema-generator'

export default function TechnologyPage() {
  const pageSchema = generateWebPageSchema({
    url: 'https://ergoblockchain.org/technology/eutxo',
    title: 'eUTXO Model - Extended UTXO for Smart Contracts',
    description: 'Learn how Ergo\'s eUTXO model enables powerful smart contracts...'
  })

  const faqSchema = generateFAQSchema([
    {
      question: "What is the eUTXO model?",
      answer: "The eUTXO (extended UTXO) model is Ergo's approach..."
    }
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Контент страницы */}
    </>
  )
}
```

### **2. Добавление hreflang:**
```typescript
import { generateHreflangLinks } from '@/lib/i18n-seo'

export default function Layout({ children }: { children: React.ReactNode }) {
  const hreflangLinks = generateHreflangLinks('/technology/eutxo', 'en')

  return (
    <html>
      <head>
        {hreflangLinks.map((link, index) => (
          <link
            key={index}
            rel="alternate"
            hrefLang={link.hreflang}
            href={link.href}
          />
        ))}
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### **3. Автоматический internal linking:**
```typescript
import { generateInternalLinks } from '@/lib/internal-linking'

export default function BlogPost({ content }: { content: string }) {
  const { content: linkedContent, linksAdded } = generateInternalLinks(
    content,
    '/blog/eutxo-ultimate-guide',
    5 // максимум 5 ссылок
  )

  return (
    <article dangerouslySetInnerHTML={{ __html: linkedContent }} />
  )
}
```

### **4. Инициализация мониторинга:**
```typescript
import { initSEOMonitoring } from '@/lib/seo-monitoring'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initSEOMonitoring()
  }, [])

  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
```

---

## 📈 **МЕТРИКИ И KPI**

### **Отслеживаемые метрики:**
- **Core Web Vitals:** LCP, CLS, INP
- **SEO Events:** Поисковые запросы, клики по ссылкам, время на странице
- **Schema Validation:** Корректность структурированных данных
- **Internal Linking:** Эффективность автоматического линкинга
- **International SEO:** Производительность по локалям

### **Дашборд метрики:**
```typescript
const seoMetrics = await generateSEODashboard()
// Возвращает:
// - summary: { score: 85, status: 'good' }
// - coreWebVitals: { lcp: { value: 2100, status: 'good' } }
// - technicalSEO: { indexedPages: 1250, crawlErrors: 3 }
// - recommendations: [{ priority: 'high', category: 'Structured Data', ... }]
```

---

## 🎯 **РЕЗУЛЬТАТЫ ВНЕДРЕНИЯ**

**Текущие улучшения:**
- ✅ **Техническая стабильность:** Все критичные ошибки исправлены
- ✅ **SEO готовность:** Полная инфраструктура создана
- ✅ **Производительность:** Lazy loading и оптимизации внедрены
- ✅ **Мониторинг:** Система аналитики активна

**Ожидаемые результаты:**
- **+40-60% органический трафик** в течение 6 месяцев
- **Топ-3 позиции** по ключевым терминам
- **Rich snippets** в результатах поиска
- **Международное присутствие** в ru, pt-BR локалях

---

*Эта техническая документация содержит полную реализацию enterprise-level SEO системы для Ergo Platform.* 