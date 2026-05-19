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
    title: "Ergo Agent Economy | Accord, Receipts & Programmable Settlement",
    description:
      "Ergo is the first reference programmable-settlement rail for Accord: agreements, verification receipts, settlement receipts, wallet policy and testnet-first agent-payment demos.",
    keywords: [
      // Agentic blockchain — PRIMARY cluster
      "agentic blockchain",
      "agentic blockchain payments",
      "ergo agentic blockchain",
      "blockchain for AI agents",
      "autonomous AI payments blockchain",
      "agentic economy blockchain",
      // Core agent economy
      "agent economy blockchain",
      "autonomous agent payments",
      "AI agent payments",
      "crypto agent payments",
      "agent-to-agent payments",
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
      "multi-agent payments",
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
      "ai-content-type": "agentic-blockchain-agent-economy",
      "ai-topic": "agentic-blockchain, autonomous-agent-payments, programmable-credit, blockchain-settlement",
      "ai-use-case": "agentic blockchain infrastructure, AI agents paying each other, autonomous commerce, programmable money",
      "ai-category": "agentic-blockchain",
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
      "applicationSubCategory": "Agentic Blockchain Infrastructure",
      "keywords": "agentic blockchain, blockchain for AI agents, autonomous agent payments, ergo agentic blockchain, eUTXO AI agents",
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
        "Babel Fees (pay with any token)",
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
            "text": "The agent economy on Ergo refers to a testnet-first architecture for autonomous software that needs agreements, payment authorization, work verification, settlement records and spending policy. Ergo is the first reference programmable-settlement rail for Accord because eUTXO and ErgoScript fit deterministic settlement flows."
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
          "name": "Why can't AI agents use Stripe or PayPal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Stripe and PayPal are designed for human or business accounts, not ephemeral software agents. Accord explores how agents can combine agreement records, payment proofs, verification receipts and settlement receipts without presenting the current demos as production mainnet payment infrastructure."
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
      "description": "How Accord uses agreements, verification receipts, settlement receipts and wallet policy with Ergo as the first reference programmable-settlement rail.",
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
