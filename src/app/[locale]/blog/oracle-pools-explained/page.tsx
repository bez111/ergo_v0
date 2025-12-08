import type { Metadata } from "next"
import { OraclePoolsExplainedClient } from "./OraclePoolsExplainedClient"
import {
  createBlogMetadata,
  createTechArticleSchema,
  createBreadcrumbSchema,
  createFAQSchema,
} from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

// SEO Configuration
const SEO = {
  slug: "oracle-pools-explained",
  title: "Ergo Oracle Pools: A Trust-Minimised Oracle Model Explained",
  description: "Learn how Ergo's decentralized oracle pools minimize trust assumptions through on-chain aggregation, permissionless participation, and transparent data storage in eUTXOs.",
  ogImage: "/og/oracle-pools-explained.png",
  publishedTime: "2024-01-20T00:00:00Z",
  keywords: [
    "ergo oracle pools", "decentralized oracles", "trust-minimized oracles",
    "on-chain aggregation", "permissionless oracles", "eUTXO oracles",
    "blockchain oracles", "oracle security", "DeFi oracles",
    "oracle manipulation", "oracle attacks", "chainlink alternative",
    "oracle decentralization", "smart contract oracles"
  ],
}

// FAQ Content
const FAQ_ITEMS = [
  {
    question: "What are Ergo Oracle Pools?",
    answer: "Ergo Oracle Pools are open, permissionless protocols where independent data providers report on-chain data feeds. A smart contract deterministically aggregates submissions using median or weighted values, with providers only paid for correct and timely submissions."
  },
  {
    question: "How do Ergo Oracle Pools reduce trust assumptions?",
    answer: "Ergo's oracle pools eliminate single points of failure by using on-chain aggregation, transparent immutable data storage in eUTXOs, permissionless participation, aligned incentives through pool tokens, and no dependency on trusted aggregators or off-chain signing groups."
  },
  {
    question: "How do Ergo Oracle Pools differ from Chainlink?",
    answer: "Unlike Chainlink's off-chain aggregation and trusted node operators, Ergo Oracle Pools use on-chain aggregation, permissionless participation, and store all data points directly in eUTXOs, eliminating the need for trusted aggregators."
  },
  {
    question: "How can I become an oracle data provider on Ergo?",
    answer: "Oracle pools are permissionless — anyone can run a data provider node. You need to stake pool tokens, run reliable infrastructure, and submit accurate data. Providers earn rewards proportional to their stake and data accuracy."
  },
  {
    question: "What data feeds are available on Ergo Oracle Pools?",
    answer: "Current feeds include ERG/USD price (used by SigmaUSD), ADA/USD, and other crypto pairs. The infrastructure supports any external data — weather, sports, stocks — limited only by community interest and provider participation."
  },
  {
    question: "How often are oracle pool data points updated?",
    answer: "Update frequency depends on pool configuration. The ERG/USD pool typically updates every epoch (around 30 minutes), balancing freshness with cost efficiency. High-frequency feeds can be configured for time-sensitive applications."
  }
]

// Metadata
export function generateMetadata(): Metadata {
  return createBlogMetadata(
    SEO.slug,
    SEO.title,
    SEO.description,
    SEO.ogImage,
    SEO.publishedTime,
    SEO.keywords
  )
}

// Page Component
export default function OraclePoolsExplainedPage() {
  const schemas = [
    {
      ...createTechArticleSchema(`/blog/${SEO.slug}`, {
        headline: SEO.title,
        description: SEO.description,
        image: SEO.ogImage,
        datePublished: "2024-01-20",
        about: [
          { name: "Oracle Pools" },
          { name: "Decentralized Finance" },
          { name: "Smart Contracts" },
        ],
      }),
      wordCount: 2800,
      timeRequired: "PT12M",
      inLanguage: "en",
    },
    createBreadcrumbSchema([
      { name: "Blog", href: "/blog" },
      { name: "Oracle Pools Explained", href: `/blog/${SEO.slug}` },
    ]),
    createFAQSchema(FAQ_ITEMS),
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      <OraclePoolsExplainedClient />
    </>
  )
}
