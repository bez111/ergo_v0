import type { Metadata } from "next"
import { ErgoManifestoClient } from "./ErgoManifestoClient"
import { siteConfig } from "@/config/site-config"

export const revalidate = 86400 // 24 часа

const origin = siteConfig.siteUrl
const url = `${origin}/blog/ergo-manifesto`

export function generateMetadata(): Metadata {
  const title = "The Ergo Manifesto: Building Ergonomic Money for Regular People"
  const description = "The foundational vision of Ergo Platform - creating decentralized financial tools that empower ordinary people, not corporations. A manifesto for true peer-to-peer economic freedom."
  
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: "Ergo Blockchain",
      title,
      description,
      images: [{ url: `${origin}/og/ergo-manifesto.png`, width: 1200, height: 630 }],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      images: [`${origin}/og/ergo-manifesto.png`],
      site: "@BuildOnErgo",
      creator: "@BuildOnErgo",
    },
    robots: { index: true, follow: true },
    keywords: [
      "ergo manifesto",
      "ergonomic money",
      "decentralized finance",
      "financial freedom",
      "cryptocurrency philosophy",
      "peer to peer",
      "blockchain manifesto",
      "kushti",
      "alexander chepurnoy"
    ],
  }
}

export default function ErgoManifestoPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: "The Ergo Manifesto: Building Ergonomic Money for Regular People",
    description: "The foundational vision of Ergo Platform - creating decentralized financial tools that empower ordinary people, not corporations.",
    image: `${origin}/og/ergo-manifesto.png`,
    datePublished: "2021-04-26T00:00:00Z",
    dateModified: new Date().toISOString(),
    author: {
      "@type": "Person",
      name: "Alexander Chepurnoy (Kushti)",
      url: `${origin}/about/kushti`
    },
    publisher: {
      "@type": "Organization", 
      name: "Ergo Platform",
      logo: {
        "@type": "ImageObject",
        url: `${origin}/logo-ergo.svg`
      }
    },
    mainEntityOfPage: url,
    wordCount: 2500,
    timeRequired: "PT10M",
    inLanguage: "en",
    about: [
      {
        "@type": "Thing",
        name: "Cryptocurrency Philosophy",
        sameAs: "https://en.wikipedia.org/wiki/Cryptocurrency"
      },
      {
        "@type": "Thing", 
        name: "Decentralized Finance",
        sameAs: "https://en.wikipedia.org/wiki/Decentralized_finance"
      },
      {
        "@type": "Thing",
        name: "Financial Privacy",
        sameAs: "https://en.wikipedia.org/wiki/Financial_privacy"
      }
    ]
  }

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumbs`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Blog", item: `${origin}/blog` },
      { "@type": "ListItem", position: 2, name: "The Ergo Manifesto", item: url },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }} />
      
      <ErgoManifestoClient />
    </>
  )
}
