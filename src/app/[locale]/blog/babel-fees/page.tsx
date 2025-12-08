import type { Metadata } from "next"
import BabelFeesArticleClient from "./BabelFeesClient"
import { siteConfig } from "@/config/site-config"
import {
  createBlogMetadata,
  createTechArticleSchema,
  createBreadcrumbSchema,
  createFAQSchema,
} from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

// SEO Configuration
const SEO = {
  slug: "babel-fees",
  title: "Babel Fees: Pay Ergo Transaction Fees in Any Token",
  description: "Learn how Ergo's Babel Fees let users pay transaction fees in any token they hold. Miners still receive ERG through on-chain Babel boxes — true gas abstraction.",
  ogImage: "/og/babel-fees.png",
  publishedTime: "2024-11-18T00:00:00Z",
  keywords: [
    "Babel Fees", "pay gas in any token", "Ergo gas abstraction",
    "eUTXO fees", "on-chain fee market", "blockchain UX",
    "SigmaUSD fees", "transaction fee abstraction", "multi-token fees", "Ergo DeFi"
  ],
}

// FAQ Content
const FAQ_ITEMS = [
  {
    question: "What are Babel Fees on Ergo?",
    answer: "Babel Fees allow users to pay Ergo transaction fees using any token, not just ERG. Miners create 'Babel boxes' that swap user tokens for ERG, enabling true gas abstraction without requiring users to hold the native coin."
  },
  {
    question: "How do Babel Fees work technically?",
    answer: "Users submit transactions with tokens as fee payment. Miners run Babel boxes that atomically swap these tokens for ERG at market rates. The transaction is included, miners get ERG, and users spend their preferred token."
  },
  {
    question: "Which tokens can I use to pay Babel Fees?",
    answer: "Any token with a Babel box liquidity pool can be used. Popular options include SigmaUSD, SigRSV, and other high-liquidity Ergo tokens. Miners choose which tokens to accept based on market demand."
  },
  {
    question: "Do Babel Fees cost more than regular ERG fees?",
    answer: "There's typically a small spread to compensate miners for the swap. However, the convenience of not needing to acquire ERG often outweighs this cost, especially for new users or specific token holders."
  },
  {
    question: "How do Babel Fees compare to other gas abstraction solutions?",
    answer: "Unlike centralized relayer networks or meta-transactions, Babel Fees are fully on-chain and trustless. There's no third party — miners provide the service directly through market-priced Babel boxes."
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
export default function BabelFeesPage() {
  const origin = siteConfig.siteUrl
  
  const schemas = [
    {
      ...createTechArticleSchema(`/blog/${SEO.slug}`, {
        headline: SEO.title,
        description: "Most blockchains force users to keep the native coin just to pay gas. Ergo's Babel Fees turn transaction fees into an on-chain market, so users can pay with almost any token while miners still receive ERG.",
        image: SEO.ogImage,
        datePublished: "2024-11-18",
        proficiencyLevel: "Intermediate",
        technicalAudience: "DeFi Users, Blockchain Developers, UX Designers",
        about: [
          { name: "Gas Abstraction" },
          { name: "eUTXO Model" },
          { name: "Transaction Fees" },
        ],
      }),
      wordCount: 2200,
      timeRequired: "PT9M",
      inLanguage: "en",
      genre: "Educational",
    },
    createBreadcrumbSchema([
      { name: "Blog", href: "/blog" },
      { name: "Babel Fees", href: `/blog/${SEO.slug}` },
    ]),
    createFAQSchema(FAQ_ITEMS),
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      <BabelFeesArticleClient />
    </>
  )
}
