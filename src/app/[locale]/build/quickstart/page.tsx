import type { Metadata } from "next"
import { siteConfig } from "@/config/site-config"
import { createBreadcrumbSchema, createFAQSchema, createTechArticleSchema } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"
import { QuickstartClient } from "./QuickstartClient"

const origin = siteConfig.siteUrl
const url = `${origin}/build/quickstart`

const SEO = {
  title: "Agent Payment Quickstart — First Ergo TX in Under 10 Minutes",
  description:
    "npm install @fleet-sdk/core, copy 30 lines, run the script, see your transaction on testnet. The fastest path from zero to agent payment on Ergo blockchain.",
  image: "/og/agent-economy.png",
  keywords: [
    "ergo quickstart",
    "fleet sdk tutorial",
    "ergo agent payment tutorial",
    "blockchain quickstart developer",
    "fleet sdk npm",
    "@fleet-sdk/core example",
    "ergo testnet transaction",
    "ergo developer onboarding",
    "autonomous agent payment code",
    "ergo javascript example",
    "ergo typescript sdk",
    "agent payment 10 minutes",
    "ergo get started developer",
    "eUtxo payment example",
    "ergo first transaction",
  ],
}

const FAQ_ITEMS = [
  {
    question: "What is Fleet SDK?",
    answer:
      "Fleet SDK is the official TypeScript/JavaScript SDK for building transactions on Ergo. It is published on npm as @fleet-sdk/core and provides a fluent builder API for constructing, signing, and submitting Ergo transactions.",
  },
  {
    question: "Do I need ERG to run the quickstart?",
    answer:
      "No. The quickstart runs on Ergo testnet. You can get free testnet ERG from the Ergo testnet faucet. No real funds required.",
  },
  {
    question: "How does agent payment work on Ergo?",
    answer:
      "An agent builds a transaction that creates a Note UTxO — a bearer instrument with a value and optional acceptance predicate. The recipient validates the Note and redeems it against a Reserve box. Fleet SDK handles all transaction construction.",
  },
  {
    question: "What is a Reserve box?",
    answer:
      "A Reserve is a UTxO that holds ERG as collateral. Notes issued against a Reserve are valid only while the Reserve is funded. It is the backing store for the agent credit system.",
  },
]

export function generateMetadata(): Metadata {
  return {
    title: SEO.title,
    description: SEO.description,
    alternates: { canonical: url },
    keywords: SEO.keywords,
    openGraph: {
      type: "article",
      url,
      siteName: "Ergo Platform",
      title: SEO.title,
      description: SEO.description,
      images: [{ url: `${origin}${SEO.image}`, width: 1200, height: 630, alt: SEO.title }],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: SEO.title,
      description: SEO.description,
      images: [`${origin}${SEO.image}`],
      site: siteConfig.twitterHandle,
    },
    robots: { index: true, follow: true },
    other: {
      "ai-content-type": "developer-quickstart-agent-payments",
      "ai-topic": "fleet-sdk, ergo-agent-payments, blockchain-developer-tutorial",
    },
  }
}

export default function QuickstartPage() {
  const schemas = [
    createTechArticleSchema("/build/quickstart", {
      headline: SEO.title,
      description: SEO.description,
      image: SEO.image,
      datePublished: "2026-03-20",
      keywords: SEO.keywords,
      proficiencyLevel: "Beginner",
    }),
    createBreadcrumbSchema(
      [
        { name: "Build", href: "/build/agent-payments" },
        { name: "Quickstart", href: "/build/quickstart" },
      ],
      false
    ),
    createFAQSchema(FAQ_ITEMS),
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      <QuickstartClient />
    </>
  )
}
