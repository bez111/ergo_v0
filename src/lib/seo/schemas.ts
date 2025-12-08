// Centralized JSON-LD Schema Generators
// Single source of truth for all structured data

import { siteConfig } from "@/config/site-config"
import type {
  BreadcrumbItem,
  FAQItem,
  TechArticleConfig,
  CollectionPageConfig,
  ItemListConfig,
  HowToConfig,
  SoftwareAppConfig,
  WebApplicationConfig,
  DatasetConfig,
  FinancialServiceConfig,
  EventConfig,
} from "./types"

const BASE_URL = siteConfig.siteUrl

// =====================
// Publisher/Author (reused across schemas)
// =====================

const publisher = {
  "@type": "Organization",
  name: "Ergo Platform",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/logo.png`,
  },
}

const author = {
  "@type": "Organization",
  name: "Ergo Platform",
  url: BASE_URL,
}

// =====================
// BreadcrumbList Schema
// =====================

export function createBreadcrumbSchema(items: BreadcrumbItem[], includeHome = true) {
  const breadcrumbs = includeHome
    ? [{ name: "Home", href: "/" }, ...items]
    : items

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.href.startsWith("http") ? item.href : `${BASE_URL}${item.href}`,
    })),
  }
}

// =====================
// FAQPage Schema
// =====================

export function createFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

// =====================
// TechArticle Schema
// =====================

export function createTechArticleSchema(path: string, config: TechArticleConfig) {
  const url = `${BASE_URL}${path}`
  
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": url,
    headline: config.headline,
    description: config.description,
    image: config.image ? (config.image.startsWith("http") ? config.image : `${BASE_URL}${config.image}`) : undefined,
    datePublished: config.datePublished || "2024-01-01",
    dateModified: config.dateModified || new Date().toISOString().split("T")[0],
    author,
    publisher,
    mainEntityOfPage: url,
    ...(config.keywords && { keywords: config.keywords.join(", ") }),
    ...(config.proficiencyLevel && { proficiencyLevel: config.proficiencyLevel }),
    ...(config.technicalAudience && { technicalAudience: config.technicalAudience }),
    ...(config.about && {
      about: config.about.map(item => ({
        "@type": "Thing",
        name: item.name,
      })),
    }),
  }
}

// =====================
// CollectionPage Schema
// =====================

export function createCollectionSchema(config: CollectionPageConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${config.url}#collection`,
    name: config.name,
    url: config.url.startsWith("http") ? config.url : `${BASE_URL}${config.url}`,
    description: config.description,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${BASE_URL}#website`,
    },
    ...(config.about && {
      about: config.about.map(item => ({
        "@type": "Thing",
        name: item.name,
      })),
    }),
  }
}

// =====================
// ItemList Schema
// =====================

export function createItemListSchema(config: ItemListConfig, itemType: "Article" | "SoftwareApplication" | "Question" | "Thing" = "Thing") {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: config.name,
    description: config.description,
    numberOfItems: config.items.length,
    itemListElement: config.items.map((item, index) => ({
      "@type": "ListItem",
      position: item.position || index + 1,
      item: {
        "@type": itemType,
        name: item.name,
        url: item.url.startsWith("http") ? item.url : `${BASE_URL}${item.url}`,
        ...(item.description && { description: item.description }),
        ...(item.image && { image: item.image }),
      },
    })),
  }
}

// =====================
// HowTo Schema
// =====================

export function createHowToSchema(config: HowToConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: config.name,
    description: config.description,
    ...(config.totalTime && { totalTime: config.totalTime }),
    ...(config.estimatedCost && {
      estimatedCost: {
        "@type": "MonetaryAmount",
        currency: config.estimatedCost.currency,
        value: config.estimatedCost.value,
      },
    }),
    step: config.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.url && { url: step.url }),
      ...(step.image && { image: step.image }),
    })),
  }
}

// =====================
// SoftwareApplication Schema
// =====================

export function createSoftwareAppSchema(config: SoftwareAppConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: config.name,
    description: config.description,
    applicationCategory: config.applicationCategory,
    operatingSystem: config.operatingSystem || "Cross-platform",
    ...(config.url && { url: config.url }),
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  }
}

// =====================
// WebSite Schema (for homepage)
// =====================

export function createWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}#website`,
    name: "Ergo Platform",
    url: BASE_URL,
    description: "Next-generation Proof-of-Work blockchain for DeFi, privacy, and financial sovereignty",
    publisher,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }
}

// =====================
// Organization Schema
// =====================

export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}#organization`,
    name: "Ergo Platform",
    alternateName: ["Ergo", "ERG", "Ergo Blockchain"],
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    foundingDate: "2017",
    founders: [{
      "@type": "Person",
      name: "Alex Chepurnoy",
      sameAs: "https://twitter.com/chepurnoy",
    }],
    sameAs: [
      "https://github.com/ergoplatform",
      "https://twitter.com/ergoplatformorg",
      "https://t.me/ergoplatform",
      "https://discord.gg/ergo",
      "https://www.reddit.com/r/ergonauts/",
      "https://www.youtube.com/@ErgoPlatform",
    ],
  }
}

// =====================
// Blog Schema
// =====================

export function createBlogSchema(config: { name: string; description: string; url: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: config.name,
    description: config.description,
    url: config.url.startsWith("http") ? config.url : `${BASE_URL}${config.url}`,
    publisher,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": config.url.startsWith("http") ? config.url : `${BASE_URL}${config.url}`,
    },
  }
}

// =====================
// WebApplication Schema
// =====================

export function createWebApplicationSchema(config: WebApplicationConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": config.url,
    name: config.name,
    description: config.description,
    applicationCategory: config.applicationCategory,
    operatingSystem: config.operatingSystem || "Web Browser",
    url: config.url,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    creator: {
      "@type": "Organization",
      name: config.creator || "Ergo Platform",
      url: BASE_URL,
    },
  }
}

// =====================
// Dataset Schema
// =====================

export function createDatasetSchema(config: DatasetConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: config.name,
    description: config.description,
    creator: {
      "@type": "Organization",
      name: config.creator || "Ergo Platform",
    },
    ...(config.contentUrl && {
      distribution: {
        "@type": "DataDownload",
        encodingFormat: config.encodingFormat || "application/json",
        contentUrl: config.contentUrl,
      },
    }),
    ...(config.temporalCoverage && { temporalCoverage: config.temporalCoverage }),
    ...(config.keywords && { keywords: config.keywords }),
  }
}

// =====================
// FinancialService Schema
// =====================

export function createFinancialServiceSchema(config: FinancialServiceConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": config.url,
    name: config.name,
    description: config.description,
    provider: {
      "@type": "Organization",
      name: config.provider || "Ergo Foundation",
      url: BASE_URL,
    },
    areaServed: {
      "@type": "Place",
      name: config.areaServed || "Worldwide",
    },
    ...(config.audienceType && {
      audience: {
        "@type": "Audience",
        audienceType: config.audienceType,
      },
    }),
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: config.url,
      serviceType: "Online Application",
    },
  }
}

// =====================
// Event Schema
// =====================

export function createEventSchema(config: EventConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: config.name,
    description: config.description,
    startDate: config.startDate,
    ...(config.endDate && { endDate: config.endDate }),
    eventStatus: `https://schema.org/${config.eventStatus || "EventScheduled"}`,
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    location: {
      "@type": "VirtualLocation",
      url: config.location || BASE_URL,
    },
    organizer: {
      "@type": "Organization",
      name: config.organizer || "Ergo Foundation",
      url: BASE_URL,
    },
  }
}

export default {
  createBreadcrumbSchema,
  createFAQSchema,
  createTechArticleSchema,
  createCollectionSchema,
  createItemListSchema,
  createHowToSchema,
  createSoftwareAppSchema,
  createWebSiteSchema,
  createOrganizationSchema,
  createWebApplicationSchema,
  createDatasetSchema,
  createFinancialServiceSchema,
  createEventSchema,
}

