import type { Metadata } from "next"
import ErgoScriptArticleClient from "./ErgoScriptArticleClient"
import {
  createBlogMetadata,
  createTechArticleSchema,
  createBreadcrumbSchema,
  createFAQSchema,
} from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

// SEO Configuration
const SEO = {
  slug: "ergoscript-introduction",
  title: "ErgoScript Tutorial: Smart Contracts on Ergo Blockchain",
  description: "Learn ErgoScript, Ergo's functional smart contract language for the eUTXO model. Build secure, deterministic dApps with this practical developer guide.",
  ogImage: "/og/ergoscript-introduction.png",
  publishedTime: "2024-11-18T00:00:00Z",
  keywords: [
    "ErgoScript introduction", "Ergo smart contracts", "eUTXO scripting language",
    "functional smart contracts", "Ergo developer guide", "ErgoScript tutorial",
    "blockchain programming", "Scala smart contracts", "UTXO smart contracts", "Ergo dApp development"
  ],
}

// FAQ Content
const FAQ_ITEMS = [
  {
    question: "What is ErgoScript?",
    answer: "ErgoScript is Ergo's native smart contract language, a subset of Scala designed for the eUTXO model. It's functional, declarative, and enables secure, predictable contract execution."
  },
  {
    question: "How is ErgoScript different from Solidity?",
    answer: "ErgoScript uses the UTXO model (not accounts), is functional (not imperative), offers deterministic gas costs, and prevents reentrancy attacks by design. Contracts define spending conditions rather than global state changes."
  },
  {
    question: "Do I need to know Scala to learn ErgoScript?",
    answer: "Basic programming knowledge is helpful, but you don't need deep Scala expertise. ErgoScript uses a small subset of Scala syntax focused on predicate logic and cryptographic operations."
  },
  {
    question: "What tools are available for ErgoScript development?",
    answer: "Key tools include Ergo Playground (browser-based IDE), Ergo AppKit (JVM SDK), Fleet SDK (TypeScript), and ergo-lib (Rust). Visual Studio Code has community extensions for syntax highlighting."
  },
  {
    question: "What can I build with ErgoScript?",
    answer: "You can build DEXes, lending protocols, NFT marketplaces, DAOs, stablecoins, oracle systems, and any dApp requiring trustless logic. ErgoScript's Sigma protocols also enable privacy-preserving applications."
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
export default function ErgoScriptIntroductionPage() {
  const schemas = [
    {
      ...createTechArticleSchema(`/blog/${SEO.slug}`, {
        headline: SEO.title,
        description: "ErgoScript is the Ergo blockchain's functional smart contract language designed for the eUTXO model. This article explains its design, differences from Solidity, and practical dApp patterns.",
        image: SEO.ogImage,
        datePublished: "2024-11-18",
        proficiencyLevel: "Intermediate",
        technicalAudience: "Blockchain Developers, Smart Contract Engineers, Solidity Developers",
        about: [
          { name: "ErgoScript" },
          { name: "Smart Contracts" },
          { name: "eUTXO Model" },
        ],
      }),
      wordCount: 2600,
      timeRequired: "PT12M",
      inLanguage: "en",
      genre: "Tutorial",
      dependencies: "Basic programming knowledge, understanding of blockchain concepts",
    },
    createBreadcrumbSchema([
      { name: "Blog", href: "/blog" },
      { name: "ErgoScript Introduction", href: `/blog/${SEO.slug}` },
    ]),
    createFAQSchema(FAQ_ITEMS),
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      <ErgoScriptArticleClient />
    </>
  )
}
