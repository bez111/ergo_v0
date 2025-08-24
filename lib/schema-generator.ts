// SEO Schema Generator for Ergo Platform
// Compliant with crypto/Web3 guidelines

interface SchemaConfig {
  url: string
  title: string
  description: string
  image?: string
  datePublished?: string
  dateModified?: string
  author?: string
  breadcrumbs?: Array<{ name: string; url: string }>
  faqs?: Array<{ question: string; answer: string }>
}

// Organization Schema (Global)
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

// Website Schema
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

// WebPage Schema Generator
export function generateWebPageSchema(config: SchemaConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": config.title,
    "description": config.description,
    "url": config.url,
    "isPartOf": {
      "@id": "https://ergoblockchain.org#website"
    },
    "about": {
      "@id": "https://ergoblockchain.org#organization"
    },
    "primaryImageOfPage": config.image ? {
      "@type": "ImageObject",
      "url": config.image
    } : undefined,
    "datePublished": config.datePublished,
    "dateModified": config.dateModified || new Date().toISOString(),
    "inLanguage": "en"
  }
}

// Article Schema for Blog Posts
export function generateArticleSchema(config: SchemaConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": config.title,
    "description": config.description,
    "url": config.url,
    "datePublished": config.datePublished,
    "dateModified": config.dateModified || config.datePublished,
    "author": {
      "@type": "Organization",
      "@id": "https://ergoblockchain.org#organization"
    },
    "publisher": {
      "@id": "https://ergoblockchain.org#organization"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": config.url
    },
    "image": config.image ? {
      "@type": "ImageObject",
      "url": config.image,
      "width": 1200,
      "height": 630
    } : undefined,
    "articleSection": "Blockchain Technology",
    "keywords": [
      "Ergo",
      "Blockchain",
      "Smart Contracts",
      "DeFi",
      "Cryptocurrency"
    ],
    "about": [
      {
        "@type": "Thing",
        "name": "Blockchain Technology"
      },
      {
        "@type": "Thing", 
        "name": "Smart Contracts"
      }
    ]
  }
}

// FAQ Schema Generator
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}

// Breadcrumb Schema Generator
export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  }
}

// SiteNavigationElement Schema
export const siteNavigationSchema = {
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  "name": "Main Navigation",
  "url": "https://ergoblockchain.org",
  "hasPart": [
    {
      "@type": "WebPage",
      "name": "Technology",
      "url": "https://ergoblockchain.org/technology"
    },
    {
      "@type": "WebPage", 
      "name": "Ecosystem",
      "url": "https://ergoblockchain.org/ecosystem"
    },
    {
      "@type": "WebPage",
      "name": "Documentation",
      "url": "https://ergoblockchain.org/docs"
    },
    {
      "@type": "WebPage",
      "name": "Use Cases",
      "url": "https://ergoblockchain.org/use"
    }
  ]
}

// Software Application Schema (for Wallets)
export function generateSoftwareSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "description": description,
    "url": url,
    "applicationCategory": "FinanceApplication",
    "operatingSystem": ["Windows", "macOS", "Linux", "Android", "iOS"],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "publisher": {
      "@id": "https://ergoblockchain.org#organization"
    }
  }
}

// How-to Schema for Tutorials
export function generateHowToSchema(config: {
  name: string
  description: string
  steps: Array<{ name: string; text: string }>
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": config.name,
    "description": config.description,
    "step": config.steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text
    }))
  }
} 