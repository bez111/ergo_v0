import type { Metadata } from "next"
import { HoldersClient } from "./HoldersClient"
import {
  createHubMetadata,
  createBreadcrumbSchema,
  createFAQSchema,
} from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

// SEO Configuration
const SEO = {
  path: "/hodlers",
  title: "Hold ERG — Sound Money with No Pre-mine | Ergo",
  description: "Why hold ERG? 97.7M fixed supply, fair launch, no VC control. Bitcoin security + smart contracts + optional privacy. Wallets, tokenomics & more.",
  ogImage: "/og/hubs/hodlers.png",
  keywords: [
    "hold ERG", "Ergo investment", "sound money",
    "cryptocurrency holders", "Bitcoin alternative", "fair launch",
    "no pre-mine", "store of value", "financial sovereignty", "ERG tokenomics"
  ],
}

// FAQ Content
const FAQ_ITEMS = [
  {
    question: "Where to store ERG?",
    answer: "Store ERG in a non-custodial wallet where you control the private keys. Popular options: Nautilus (browser extension), SAFEW (web wallet), Ergo Mobile Wallet (iOS/Android), or Terminus (mobile). For large amounts, use Ledger hardware wallet integration for maximum security."
  },
  {
    question: "What wallets support Ergo?",
    answer: "Ergo is supported by: Nautilus (Chrome/Firefox extension), SAFEW (full-featured web wallet), Ergo Mobile Wallet (official mobile app), Terminus (mobile), Satergo (desktop), and Ledger hardware wallets. Each offers different features - Nautilus is best for DeFi, SAFEW for advanced features."
  },
  {
    question: "Is Ergo deflationary?",
    answer: "Ergo has a fixed maximum supply of 97.7 million ERG with no inflation after emission ends. Additionally, Storage Rent recycles lost/abandoned coins back to miners, effectively reducing circulating supply over time. This makes ERG increasingly scarce."
  },
  {
    question: "What is Ergo's tokenomics?",
    answer: "Ergo launched fairly in 2019 with no pre-mine, no ICO, and no VC allocation. Total supply is capped at 97.7M ERG. Block rewards decrease over time (emission schedule). Storage Rent provides sustainable miner income. Treasury receives 10% of block rewards for ecosystem development."
  },
  {
    question: "Why hold ERG long-term?",
    answer: "ERG combines Bitcoin's proven security (PoW, fixed supply) with smart contract capabilities, optional privacy (Sigma Protocols), and sustainable economics (Storage Rent). Fair launch means no insider dumping. Active development and growing DeFi ecosystem add utility."
  }
]

// Metadata
export async function generateMetadata(): Promise<Metadata> {
  return createHubMetadata(SEO.path, SEO.title, SEO.description, SEO.ogImage, SEO.keywords)
}

// Page Component
export default async function HodlersPage() {
  const schemas = [
    createBreadcrumbSchema([{ name: "Holders", href: "/hodlers" }]),
    createFAQSchema(FAQ_ITEMS),
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      <HoldersClient />
    </>
  )
}
