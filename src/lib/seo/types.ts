// SEO Types for centralized SEO management

// =====================
// Metadata Types
// =====================

export interface PageSEOConfig {
  title: string
  description: string
  path: string
  ogImage?: string
  keywords?: string[]
  noIndex?: boolean
  locale?: string
  type?: "website" | "article"
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  section?: string
}

// =====================
// Schema.org Types
// =====================

export interface BreadcrumbItem {
  name: string
  href: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface TechArticleConfig {
  headline: string
  description: string
  image?: string
  datePublished?: string
  dateModified?: string
  keywords?: string[]
  proficiencyLevel?: "Beginner" | "Intermediate" | "Advanced"
  technicalAudience?: string
  about?: Array<{ name: string }>
}

export interface CollectionPageConfig {
  name: string
  description: string
  url: string
  about?: Array<{ name: string }>
}

export interface ItemListConfig {
  name: string
  description: string
  items: Array<{
    name: string
    url: string
    description?: string
    image?: string
    position?: number
  }>
}

export interface HowToStep {
  name: string
  text: string
  url?: string
  image?: string
}

export interface HowToConfig {
  name: string
  description: string
  steps: HowToStep[]
  totalTime?: string
  estimatedCost?: { value: string; currency: string }
}

export interface SoftwareAppConfig {
  name: string
  description: string
  applicationCategory: string
  operatingSystem?: string
  url?: string
}

export interface WebApplicationConfig {
  name: string
  description: string
  applicationCategory: string
  operatingSystem?: string
  url: string
  creator?: string
}

export interface DatasetConfig {
  name: string
  description: string
  creator?: string
  contentUrl?: string
  encodingFormat?: string
  temporalCoverage?: string
  keywords?: string[]
}

export interface FinancialServiceConfig {
  name: string
  description: string
  url: string
  provider?: string
  areaServed?: string
  audienceType?: string
}

export interface EventConfig {
  name: string
  description: string
  startDate: string
  endDate?: string
  location?: string
  eventStatus?: "EventScheduled" | "EventCancelled" | "EventPostponed"
  organizer?: string
}

// =====================
// Combined SEO Config
// =====================

export interface FullPageSEO {
  metadata: PageSEOConfig
  breadcrumbs?: BreadcrumbItem[]
  faq?: FAQItem[]
  techArticle?: TechArticleConfig
  collection?: CollectionPageConfig
  itemList?: ItemListConfig
  howTo?: HowToConfig
  softwareApp?: SoftwareAppConfig
}

