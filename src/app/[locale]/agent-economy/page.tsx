import type { Metadata } from "next"
import { getCanonicalUrl, getAlternates, getOgLocale } from "@/lib/seo"
import { AgentEconomyClient } from "./AgentEconomyClient"

const BASE_URL = "https://www.ergoblockchain.org"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    title: "Ergo Agent Economy | Receipts, Policy & Programmable Settlement",
    description:
      "Ergo is becoming a public proof and clearing surface for autonomous work: agreements, verification receipts, settlement receipts, wallet policy and testnet-first agent-payment demos.",
    keywords: [
      // New positioning cluster
      "autonomous work settlement",
      "public proof surface",
      "verifiable receipt bundles",
      "wallet policy API",
      "audit-gated settlement",
      // Search-discovery bridge terms
      "agentic blockchain",
      "agentic blockchain payments",
      "ergo agentic blockchain",
      "blockchain for AI agents",
      "autonomous AI payments blockchain",
      "AI agent payments",
      "agent payments",
      // Core agent economy
      "autonomous work clearing",
      "agent economy blockchain",
      "autonomous agent settlement",
      "AI agent settlement",
      "crypto agent settlement",
      "agent-to-agent settlement",
      "agentic economy",
      "agent-native blockchain",
      // AI/LLM specific
      "LLM payments blockchain",
      "AI micropayments",
      "on-chain AI economy",
      "Web3 AI agents",
      "crypto AI agents",
      "autonomous economic agent",
      "AI agent wallet",
      "AI agent spending limits",
      "multi-agent settlement",
      "agent treasury blockchain",
      "AI agent API payments",
      "autonomous AI commerce",
      // Ergo specific
      "Ergo agent economy",
      "eUTXO agents",
      "ErgoScript acceptance predicates",
      "programmable credit blockchain",
      "programmable IOUs blockchain",
      "bearer instruments blockchain",
      "ChainCash Ergo",
      "BetterMoneyLabs",
      // Technical
      "agent credit",
      "on-chain notes",
      "reserve contract blockchain",
      "programmable money",
      "trustless agent settlement",
      "autonomous payment rails",
      "agent payment infrastructure",
    ],
    alternates: getAlternates("/agent-economy", locale),
    openGraph: {
      title: "Ergo Agent Economy | Accord, Receipts & Programmable Settlement",
      description:
        "Accord verifies completion. Ergo settles programmable value. Explore the testnet-first agent-economy architecture, demos and safety posture.",
      url: getCanonicalUrl("/agent-economy", locale),
      siteName: "Ergo Blockchain",
      images: [
        {
          url: `${BASE_URL}/og/agent-economy.jpg`,
          width: 1200,
          height: 630,
          alt: "Ergo Agent Economy — Base layer for autonomous economic agents",
        },
      ],
      type: "website",
      locale: getOgLocale(locale),
    },
    twitter: {
      card: "summary_large_image",
      title: "Agent Economy on Ergo",
      description:
        "Agreements · Verification Receipts · Settlement Receipts · Wallet Policy — testnet-first agent commerce on Ergo.",
      images: [`${BASE_URL}/og/agent-economy.jpg`],
      creator: "@ergoplatform",
      site: "@ergoplatform",
    },
    other: {
      // LLM / AI crawler hints
      "ai-content-type": "autonomous-work-settlement-proof-surface",
      "ai-topic": "autonomous-work-settlement, receipt-bundles, wallet-policy, programmable-credit, blockchain-settlement",
      "ai-use-case": "agreements, verification receipts, settlement receipts, policy checks, testnet-first agent commerce",
      "ai-category": "public-proof-surface",
    },
  }
}

// JSON-LD structured data for LLMs and search engines
const agentEconomySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": `${BASE_URL}/agent-economy#software`,
      "name": "Ergo Agent Economy",
      "description": "Testnet-first agent-economy architecture for Accord on Ergo. It covers work agreements, verification receipts, settlement receipts, wallet policy and prototype Note/Reserve/Tracker patterns.",
      "applicationCategory": "BlockchainApplication",
      "applicationSubCategory": "Autonomous Work Settlement Infrastructure",
      "keywords": "autonomous work settlement, autonomous work clearing, public proof surface, verifiable receipts, wallet policy, programmable credit, AI agent payments, agentic blockchain, blockchain for AI agents, autonomous agent payments, eUTXO autonomous agents",
      "url": `${BASE_URL}/agent-economy`,
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Open source, free to use"
      },
      "featureList": [
        "Accord Agreements",
        "Verification Receipts",
        "Settlement Receipts",
        "Agent Wallet Policy",
        "Prototype Note/Reserve/Tracker patterns",
        "Babel Fees (supported token fee paths)",
        "Composable multi-agent flows"
      ],
      "programmingLanguage": ["ErgoScript", "TypeScript", "Scala"],
      "operatingSystem": "Ergo Blockchain",
      "releaseNotes": "Open-source prototype available via ChainCash",
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/agent-economy#faq`,
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the agent economy on Ergo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The agent economy on Ergo refers to a testnet-first architecture for autonomous software that needs agreements, payment authorization, work verification, settlement records and spending policy. Ergo is a natural programmable-settlement rail for Accord-style flows because eUTXO and ErgoScript fit deterministic settlement."
          }
        },
        {
          "@type": "Question",
          "name": "How do AI agents pay each other on blockchain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Current demos model an agent agreement, a payment proof or authorization, a work result, a verification receipt and a settlement receipt. Note/Reserve/Tracker flows are reference patterns and prototypes unless a specific implementation is audited and explicitly marked production-ready."
          }
        },
        {
          "@type": "Question",
          "name": "Where do checkout rails end and autonomous work settlement begin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Checkout rails are strong for buyer-authorized commerce. Autonomous work settlement is a different layer: agents need machine-readable agreements, task-conditioned acceptance, verification receipts, settlement receipts and bounded wallet policy. The current Ergo/Accord surfaces are testnet proof, not production mainnet payment infrastructure."
          }
        },
        {
          "@type": "Question",
          "name": "What is ChainCash?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ChainCash is an open-source prototype and research implementation of Note/Reserve-style patterns built by BetterMoneyLabs. It should be treated as testnet-first and not production-ready unless a specific deployment is audited and explicitly marked production-ready."
          }
        },
        {
          "@type": "Question",
          "name": "What is an acceptance predicate in ErgoScript?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An acceptance predicate is an ErgoScript condition that a payment receiver embeds in their spending logic. Example: 'accept this note only if the attached data hash matches the requested computation AND the current block height is below deadline.' This enables trustless conditional payments between autonomous agents."
          }
        }
      ]
    },
    {
      "@type": "TechArticle",
      "@id": `${BASE_URL}/agent-economy#article`,
      "headline": "Agent Economy on Ergo — Accord and Programmable Settlement",
      "description": "How Accord-style agreements, verification receipts, settlement receipts and wallet policy can use Ergo as a testnet-first programmable-settlement rail.",
      "about": [
        { "@type": "Thing", "name": "Autonomous Agent Payments" },
        { "@type": "Thing", "name": "AI Agent Economy" },
        { "@type": "Thing", "name": "Programmable Money" },
        { "@type": "Thing", "name": "ErgoScript" },
        { "@type": "Thing", "name": "ChainCash" },
        { "@type": "Thing", "name": "eUTXO Model" },
      ],
      "url": `${BASE_URL}/agent-economy`,
      "publisher": {
        "@type": "Organization",
        "name": "Ergo Platform",
        "url": BASE_URL,
      }
    }
  ]
}

export default function AgentEconomyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agentEconomySchema) }}
      />
      <AgentEconomyClient />
    </>
  )
}
