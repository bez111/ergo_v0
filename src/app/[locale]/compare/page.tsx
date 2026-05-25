import type { Metadata } from "next"
import { CompareHubClient } from "./CompareHubClient"
import {
  createHubMetadata,
  createBreadcrumbSchema,
  createFAQSchema,
  createCollectionSchema,
} from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

// SEO Configuration
const SEO = {
  path: "/compare",
  title: "Ergo vs Bitcoin, Ethereum, Cardano — Full Comparison | Ergo",
  description: "Compare Ergo to Bitcoin, Ethereum, Cardano, Monero & more. Side-by-side analysis of consensus, smart contracts, privacy & tokenomics.",
  ogImage: "/og/hubs/compare.jpg",
  keywords: [
    "ergo comparison", "ergo vs bitcoin", "ergo vs ethereum",
    "blockchain comparison", "ergo vs cardano", "ergo vs monero",
    "cryptocurrency comparison", "best blockchain 2025"
  ],
}

// FAQ Content
const FAQ_ITEMS = [
  {
    question: "Is Ergo better than Ethereum?",
    answer: "Ergo and Ethereum serve different purposes. Ergo uses the eUTXO model, which gives strong MEV-resistance and predictable fees, while Ethereum has a larger ecosystem and more developers. Ergo is attractive for users who want fairer, more predictable DeFi execution with less exposure to common front-running patterns."
  },
  {
    question: "How is Ergo different from Cardano?",
    answer: "Both use eUTXO model, but Ergo is Proof-of-Work (like Bitcoin) while Cardano is Proof-of-Stake. Ergo had fair launch (no ICO, no pre-mine) vs Cardano's ICO. Ergo has Sigma Protocols for privacy, Storage Rent for sustainability, and is more focused on financial applications and cypherpunk values."
  },
  {
    question: "Is Ergo better than Bitcoin?",
    answer: "Ergo extends Bitcoin's proven PoW security with smart contracts via ErgoScript. Both have fair launch and fixed supply. Ergo adds: programmable money (smart contracts), optional privacy (Sigma Protocols), Storage Rent (sustainability), and NiPoPoWs (light clients). Bitcoin has larger network effect and liquidity."
  },
  {
    question: "What makes Ergo unique compared to other blockchains?",
    answer: "Ergo combines a PoW/eUTXO model, Sigma Protocols for optional privacy, Storage Rent for long-term sustainability, Autolykos mining, fair-launch tokenomics, and strong resistance to common account-model MEV patterns. That combination makes Ergo unusually well-suited to financial contracts, while every comparison still depends on the exact use case."
  },
  {
    question: "Is Ergo more private than Monero?",
    answer: "Ergo offers optional privacy through Sigma Protocols and ErgoMixer, while Monero has mandatory privacy. Ergo can support selective-disclosure workflows, but legal compliance depends on jurisdiction, implementation, and surrounding service providers. Monero is better for maximum anonymity; Ergo is better for programmable privacy with smart contract capabilities."
  }
]

// Metadata
export async function generateMetadata(): Promise<Metadata> {
  return createHubMetadata(SEO.path, SEO.title, SEO.description, SEO.ogImage, SEO.keywords)
}

// Page Component
export default function ComparePage() {
  const schemas = [
    createBreadcrumbSchema([
      { name: "Compare", href: "/compare" },
    ]),
    createCollectionSchema({
      name: "Ergo Blockchain Comparisons",
      description: "Comprehensive comparisons of Ergo with other major blockchain platforms including Bitcoin, Ethereum, Cardano, Monero, and more.",
      url: "/compare",
    }),
    createFAQSchema(FAQ_ITEMS),
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      <CompareHubClient />
    </>
  )
}
