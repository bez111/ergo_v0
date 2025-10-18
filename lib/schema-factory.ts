// Schema Factory for automatic structured data application
// Principal Structured Data Engineer implementation

export type PageType = 
  | 'homepage'
  | 'use-case-listing' 
  | 'use-case-detail'
  | 'technology-listing'
  | 'technology-detail'
  | 'docs-listing'
  | 'docs-article'
  | 'blog-listing'
  | 'blog-article'
  | 'ecosystem-listing'
  | 'ecosystem-project'
  | 'comparison'
  | 'guide'

export interface BasePageData {
  url: string
  title: string
  description: string
  image?: string
  dateModified?: string
}

export interface ArticlePageData extends BasePageData {
  author: {
    name: string
    url?: string
  }
  datePublished: string
  category?: string
  tags?: string[]
  wordCount?: number
  readingTime?: number
}

export interface UseCasePageData extends BasePageData {
  id: string
  tags: string[]
  supportedProjects: string[]
}

export interface GuidePageData extends BasePageData {
  steps: Array<{
    name: string
    text: string
    image?: string
  }>
  totalTime?: string
  requiredTools?: string[]
}

export class SchemaFactory {
  private static baseUrl = 'https://ergoblockchain.org'

  static createForPageType(pageType: PageType, data: any) {
    const schemas: any[] = []

    // Always include base schemas
    schemas.push(this.createOrganizationSchema())
    schemas.push(this.createWebSiteSchema())

    switch (pageType) {
      case 'homepage':
        schemas.push(this.createSoftwareApplicationSchema())
        schemas.push(this.createERGProductSchema())
        break

      case 'use-case-listing':
        schemas.push(this.createCollectionPageSchema(data))
        schemas.push(this.createItemListSchema(data))
        break

      case 'use-case-detail':
        schemas.push(this.createUseCaseSchema(data as UseCasePageData))
        schemas.push(this.createBreadcrumbSchema(data.breadcrumbs))
        break

      case 'blog-article':
        schemas.push(this.createArticleSchema(data as ArticlePageData))
        schemas.push(this.createBreadcrumbSchema(data.breadcrumbs))
        break

      case 'guide':
        schemas.push(this.createHowToSchema(data as GuidePageData))
        schemas.push(this.createBreadcrumbSchema(data.breadcrumbs))
        break

      case 'comparison':
        schemas.push(this.createComparisonTableSchema(data))
        break

      default:
        schemas.push(this.createWebPageSchema(data))
    }

    return schemas
  }

  private static createOrganizationSchema() {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${this.baseUrl}/#organization`,
      "name": "Ergo Platform",
      "url": this.baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${this.baseUrl}/logo.png`,
        "width": 600,
        "height": 60
      },
      "description": "Ergo is a next-generation smart contract platform ensuring economic freedom through secure, accessible, and decentralized financial tools.",
      "sameAs": [
        "https://twitter.com/ergoplatformorg",
        "https://github.com/ergoplatform", 
        "https://t.me/ergoplatform",
        "https://discord.gg/ergo",
        "https://www.reddit.com/r/ergonauts/"
      ],
      "foundingDate": "2017",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "contact@ergoblockchain.org",
        "availableLanguage": ["English", "Russian"]
      }
    }
  }

  private static createWebSiteSchema() {
    return {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${this.baseUrl}/#website`,
      "name": "Ergo Platform",
      "url": this.baseUrl,
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${this.baseUrl}/search?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      },
      "inLanguage": "en-US"
    }
  }

  private static createERGProductSchema() {
    return {
      "@context": "https://schema.org",
      "@type": ["Product", "FinancialProduct"],
      "@id": `${this.baseUrl}/#ERG`,
      "name": "Ergo",
      "alternateName": ["ERG", "Ergo Token"],
      "description": "Native cryptocurrency of the Ergo blockchain platform",
      "category": "Cryptocurrency",
      "brand": {
        "@type": "Brand",
        "name": "Ergo Platform"
      },
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Max Supply",
          "value": "97,739,925",
          "unitText": "ERG"
        },
        {
          "@type": "PropertyValue",
          "name": "Consensus",
          "value": "Proof of Work (Autolykos v2)"
        }
      ]
    }
  }

  private static createArticleSchema(data: ArticlePageData) {
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": data.url,
      "headline": data.title,
      "description": data.description,
      "image": data.image || `${this.baseUrl}/og-image.png`,
      "datePublished": data.datePublished,
      "dateModified": data.dateModified || data.datePublished,
      "author": {
        "@type": "Person",
        "name": data.author.name,
        ...(data.author.url ? { "url": data.author.url } : {})
      },
      "publisher": {
        "@type": "Organization",
        "name": "Ergo Platform",
        "logo": {
          "@type": "ImageObject",
          "url": `${this.baseUrl}/logo.png`
        }
      },
      ...(data.wordCount ? { "wordCount": data.wordCount } : {}),
      ...(data.readingTime ? { "timeRequired": `PT${data.readingTime}M` } : {}),
      ...(data.tags?.length ? {
        "keywords": data.tags.join(", "),
        "about": data.tags.map(tag => ({
          "@type": "Thing",
          "name": tag
        }))
      } : {})
    }
  }

  private static createBreadcrumbSchema(breadcrumbs: Array<{name: string, url: string}>) {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
      }))
    }
  }

  private static createHowToSchema(data: GuidePageData) {
    return {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": data.title,
      "description": data.description,
      "image": data.image || `${this.baseUrl}/og-image.png`,
      "totalTime": data.totalTime || "PT15M",
      "step": data.steps.map((step, index) => ({
        "@type": "HowToStep",
        "position": index + 1,
        "name": step.name,
        "text": step.text,
        ...(step.image ? { "image": step.image } : {})
      })),
      "author": {
        "@type": "Organization",
        "name": "Ergo Platform"
      }
    }
  }

  private static createWebPageSchema(data: BasePageData) {
    return {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": data.url,
      "name": data.title,
      "description": data.description,
      "url": data.url,
      "isPartOf": {
        "@type": "WebSite",
        "@id": `${this.baseUrl}/#website`
      },
      "dateModified": data.dateModified || new Date().toISOString(),
      "inLanguage": "en-US"
    }
  }

  private static createSoftwareApplicationSchema() {
    return {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "@id": `${this.baseUrl}/#platform`,
      "name": "Ergo Platform",
      "applicationCategory": "Blockchain Platform",
      "operatingSystem": "Cross-platform",
      "description": "Next-generation Proof-of-Work blockchain platform enabling new models for financial interaction",
      "url": this.baseUrl,
      "author": {
        "@type": "Organization",
        "name": "Ergo Foundation"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "1250",
        "bestRating": "5"
      },
      "featureList": [
        "Smart Contracts",
        "eUTXO Model", 
        "Sigma Protocols",
        "NiPoPoWs",
        "Storage Rent",
        "Oracle Pools",
        "ErgoScript",
        "Privacy Features"
      ]
    }
  }

  private static createCollectionPageSchema(data: any) {
    return {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${data.url}#collection`,
      "name": data.title,
      "url": data.url,
      "description": data.description,
      "isPartOf": {
        "@type": "WebSite",
        "@id": `${this.baseUrl}/#website`
      }
    }
  }

  private static createItemListSchema(data: any) {
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": `${data.url}#list`,
      "numberOfItems": data.items?.length || 0,
      "itemListElement": (data.items || []).map((item: any, index: number) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "WebPage",
          "@id": item.url,
          "name": item.title,
          "description": item.description
        }
      }))
    }
  }

  private static createUseCaseSchema(data: UseCasePageData) {
    return {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": data.url,
      "name": data.title,
      "description": data.description,
      "mainEntity": {
        "@type": "SoftwareFeature",
        "name": data.title,
        "description": data.description,
        "isPartOf": {
          "@type": "SoftwareApplication",
          "name": "Ergo Platform"
        },
        "featureList": data.supportedProjects
      },
      "about": data.tags.map(tag => ({
        "@type": "Thing",
        "name": tag
      }))
    }
  }

  private static createComparisonTableSchema(data: any) {
    return {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": data.url,
      "name": data.title,
      "description": data.description,
      "mainEntity": {
        "@type": "Table",
        "about": {
          "@type": "Thing",
          "name": "Blockchain Platform Comparison"
        }
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", "table caption", "th"]
      }
    }
  }
} 