export interface ContactPoint {
  '@type': 'ContactPoint'
  contactType: string
  email?: string
  url?: string
  availableLanguage?: string[]
}

export interface Organization {
  '@type': 'Organization'
  name: string
  url: string
  logo: string
  description: string
  sameAs: string[]
  contactPoint: ContactPoint
}

export interface WebSite {
  '@type': 'WebSite'
  name: string
  url: string
  potentialAction: {
    '@type': 'SearchAction'
    target: string
    'query-input': string
  }
}

export interface BreadcrumbList {
  '@type': 'BreadcrumbList'
  itemListElement: {
    '@type': 'ListItem'
    position: number
    name: string
    item: string
  }[]
}

export interface Article {
  '@type': 'Article'
  headline: string
  description: string
  image: string
  datePublished: string
  dateModified: string
  author: {
    '@type': 'Organization'
    name: string
    url: string
  }
  publisher: {
    '@type': 'Organization'
    name: string
    logo: {
      '@type': 'ImageObject'
      url: string
    }
  }
}

export interface FAQPage {
  '@type': 'FAQPage'
  mainEntity: {
    '@type': 'Question'
    name: string
    acceptedAnswer: {
      '@type': 'Answer'
      text: string
    }
  }[]
}

export interface HowTo {
  '@type': 'HowTo'
  name: string
  description: string
  step: {
    '@type': 'HowToStep'
    position: number
    name: string
    text: string
    image?: string
  }[]
  tool?: { '@type': 'HowToTool'; name: string }[]
  supply?: { '@type': 'HowToSupply'; name: string }[]
  totalTime?: string
  estimatedCost?: { '@type': 'MonetaryAmount'; currency: string; value: string }
  image?: string
}

export interface SoftwareApplication {
  '@type': 'SoftwareApplication'
  name: string
  description: string
  applicationCategory: string
  operatingSystem: string
  offers: {
    '@type': 'Offer'
    price: string
    priceCurrency: string
  }
  downloadUrl: string
  version: string
  author: {
    '@type': 'Organization'
    name: string
    url: string
  }
}

export interface Product {
  '@type': 'Product'
  name: string
  description: string
  image: string
  brand: {
    '@type': 'Brand'
    name: string
  }
  offers: {
    '@type': 'Offer'
    price: string
    priceCurrency: string
    availability: string
  }
}

export interface Event {
  '@type': 'Event'
  name: string
  description: string
  startDate: string
  endDate: string
  location: {
    '@type': 'Place'
    name: string
    address: {
      '@type': 'PostalAddress'
      addressLocality: string
      addressCountry: string
    }
  }
  organizer: {
    '@type': 'Organization'
    name: string
    url: string
  }
}

export interface Person {
  '@type': 'Person'
  name: string
  jobTitle: string
  description: string
  image: string
  url: string
  sameAs: string[]
  worksFor: {
    '@type': 'Organization'
    name: string
    url: string
  }
}

export interface TechArticle {
  '@type': 'TechArticle'
  headline: string
  description: string
  image: string
  datePublished: string
  dateModified: string
  author: {
    '@type': 'Organization'
    name: string
    url: string
  }
  publisher: {
    '@type': 'Organization'
    name: string
    url: string
    logo: {
      '@type': 'ImageObject'
      url: string
    }
  }
  mainEntityOfPage?: string
  // extended optional fields for richer JSON-LD
  '@id'?: string
  keywords?: string
  about?: Array<{ '@type': string; name: string }>
  isPartOf?: { '@type': string; url?: string; '@id'?: string }
}

export interface Course {
  '@type': 'Course'
  name: string
  description: string
  provider: {
    '@type': 'Organization'
    name: string
    url: string
  }
  courseCode: string
  educationalLevel: string
  hasCourseInstance: {
    '@type': 'CourseInstance'
    courseMode: string
    startDate: string
    endDate: string
  }[]
}

export interface DefinedTerm {
  '@type': 'DefinedTerm'
  name: string
  description: string
  inDefinedTermSet: string
  category: string
  relatedTerms?: string[]
  examples?: string[]
}

export interface DefinedTermSet {
  '@type': 'DefinedTermSet'
  name: string
  description: string
  hasDefinedTerm: DefinedTerm[]
} 