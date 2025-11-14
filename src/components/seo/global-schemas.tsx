"use client"

import { siteConfig } from "@/config/site-config"

interface GlobalSchemasProps {
  currentUrl?: string
  breadcrumbs?: Array<{
    name: string
    href: string
  }>
}

export function GlobalSchemas({ currentUrl, breadcrumbs }: GlobalSchemasProps) {
  const resolvedUrl = currentUrl ?? siteConfig.siteUrl

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.siteUrl}#organization`,
    "name": "Ergo Blockchain",
    "url": siteConfig.siteUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${siteConfig.siteUrl}/logo-ergo.svg`,
      "width": 512,
      "height": 512
    },
    "description": "Ergo is a resilient blockchain platform for contractual money. Build DeFi applications with advanced smart contracts, built-in privacy, and sustainable economics.",
    "foundingDate": "2019",
    "sameAs": [
      "https://x.com/BuildOnErgo",
      "https://github.com/ergoplatform", 
      "https://youtube.com/@ErgoPlatform",
      "https://t.me/ergoplatform",
      "https://www.reddit.com/r/ergonauts/",
      "https://discord.gg/ergo-platform-668903786361651200"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Community Support",
      "url": `${siteConfig.siteUrl}/docs`,
      "availableLanguage": ["English"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Global"
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.siteUrl}#website`,
    "url": resolvedUrl,
    "name": "Ergo Platform",
    "description": "Resilient blockchain platform for contractual money with advanced smart contracts and built-in privacy",
    "publisher": {
      "@id": `${siteConfig.siteUrl}#organization`
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteConfig.siteUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "en-US",
    "mainEntityOfPage": resolvedUrl
  }

  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 1 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.href.startsWith('http') ? item.href : `${siteConfig.siteUrl}${item.href}`
    }))
  } : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
    </>
  )
}
