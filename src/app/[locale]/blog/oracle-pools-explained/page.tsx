import type { Metadata } from "next"
import { OraclePoolsExplainedClient } from "./OraclePoolsExplainedClient"
import { siteConfig } from "@/config/site-config"

const origin = siteConfig.siteUrl
const url = `${origin}/blog/oracle-pools-explained`

export function generateMetadata(): Metadata {
  const title = "Ergo Oracle Pools: A Trust-Minimised Oracle Model Explained"
  const description = "Learn how Ergo's decentralized oracle pools minimize trust assumptions through on-chain aggregation, permissionless participation, and transparent data storage in eUTXOs."
  
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: "Ergo Platform",
      title,
      description,
      images: [{ 
        url: `${origin}/og/blog-default.svg`, 
        width: 1200, 
        height: 630,
        alt: "Ergo Oracle Pools: A Trust-Minimised Oracle Model Explained"
      }],
      locale: "en_US",
      publishedTime: "2024-01-20T00:00:00Z",
      modifiedTime: new Date().toISOString(),
      authors: ["Ergo Team"],
      tags: ["Oracle Pools", "Blockchain", "DeFi", "Decentralization", "eUTXO", "Smart Contracts"]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${origin}/og/blog-default.svg`],
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
    },
    robots: { index: true, follow: true },
    keywords: [
      "ergo oracle pools",
      "decentralized oracles",
      "trust-minimized oracles", 
      "on-chain aggregation",
      "permissionless oracles",
      "eUTXO oracles",
      "blockchain oracles",
      "oracle security",
      "DeFi oracles",
      "oracle manipulation",
      "oracle attacks",
      "chainlink alternative",
      "oracle decentralization",
      "smart contract oracles"
    ],
  }
}

export default function OraclePoolsExplainedPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${url}#article`,
    headline: "Ergo Oracle Pools: A Trust-Minimised Oracle Model Explained",
    description: "Learn how Ergo's decentralized oracle pools minimize trust assumptions through on-chain aggregation, permissionless participation, and transparent data storage in eUTXOs.",
    image: `${origin}/og/blog-default.svg`,
    datePublished: "2024-01-20T00:00:00Z",
    dateModified: new Date().toISOString(),
    author: {
      "@type": "Organization",
      name: "Ergo Platform",
      url: origin
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
    wordCount: 2800,
    timeRequired: "PT12M",
    inLanguage: "en",
    about: [
      {
        "@type": "Thing",
        name: "Oracle Pools",
        sameAs: "https://en.wikipedia.org/wiki/Blockchain_oracle"
      },
      {
        "@type": "Thing", 
        name: "Decentralized Finance",
        sameAs: "https://en.wikipedia.org/wiki/Decentralized_finance"
      },
      {
        "@type": "Thing",
        name: "Smart Contracts",
        sameAs: "https://en.wikipedia.org/wiki/Smart_contract"
      }
    ]
  }

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumbs`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Blog", item: `${origin}/blog` },
      { "@type": "ListItem", position: 2, name: "Oracle Pools Explained", item: url },
    ],
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "What are Ergo Oracle Pools?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ergo Oracle Pools are open, permissionless protocols where independent data providers report on-chain data feeds. A smart contract deterministically aggregates submissions using median or weighted values, with providers only paid for correct and timely submissions."
        }
      },
      {
        "@type": "Question",
        name: "How do Ergo Oracle Pools reduce trust assumptions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ergo's oracle pools eliminate single points of failure by using on-chain aggregation, transparent immutable data storage in eUTXOs, permissionless participation, aligned incentives through pool tokens, and no dependency on trusted aggregators or off-chain signing groups."
        }
      },
      {
        "@type": "Question",
        name: "How do Ergo Oracle Pools differ from Chainlink?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unlike Chainlink's off-chain aggregation and trusted node operators, Ergo Oracle Pools use on-chain aggregation, permissionless participation, and store all data points directly in eUTXOs, eliminating the need for trusted aggregators."
        }
      }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      
      <OraclePoolsExplainedClient />
    </>
  )
}