
/* eslint-disable @typescript-eslint/no-explicit-any */
import Script from 'next/script'

interface StructuredDataProps {
  data: Record<string, any>
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  )
}

// Predefined schemas for common use cases
export const schemas = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://ergoblockchain.org/#organization",
    "name": "Ergo Platform",
    "url": "https://ergoblockchain.org",
    "logo": {
      "@type": "ImageObject",
      "url": "https://ergoblockchain.org/logo.png",
      "width": 600,
      "height": 60,
      "caption": "Ergo Platform Logo"
    },
    "description": "Ergo is a next-generation smart contract platform that ensures economic freedom through secure, accessible, and decentralized financial tools.",
    "sameAs": [
      "https://twitter.com/ergoplatformorg",
      "https://github.com/ergoplatform",
      "https://t.me/ergoplatform",
      "https://discord.gg/ergo",
      "https://www.reddit.com/r/ergonauts/"
    ],
    "foundingDate": "2017",
    "founders": [
      {
        "@type": "Person",
        "name": "Alex Chepurnoy",
        "url": "https://twitter.com/chepurnoy"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "team@ergoblockchain.org",
      "availableLanguage": ["English", "Russian", "Chinese", "Spanish"]
    }
  },

  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Ergo Platform",
    "url": "https://ergoblockchain.org",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ergoblockchain.org/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  },

  softwareApplication: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Ergo Blockchain",
    "applicationCategory": "Blockchain Platform",
    "operatingSystem": "Cross-platform",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250"
    }
  },

  faqPage: (faqs: Array<{question: string, answer: string}>) => ({
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
  }),

  article: (article: {
    title: string,
    description: string,
    author: string,
    datePublished: string,
    dateModified?: string,
    image?: string
  }) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "datePublished": article.datePublished,
    "dateModified": article.dateModified || article.datePublished,
    "image": article.image || "https://ergoblockchain.org/og-image.png",
    "publisher": {
      "@type": "Organization",
      "name": "Ergo Platform",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ergoblockchain.org/logo.png"
      }
    }
  }),

  breadcrumbs: (items: Array<{name: string, url: string}>) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  })
} 