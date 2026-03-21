import type { Metadata } from "next"
import { getCanonicalUrl, getAlternates } from "@/lib/seo"
import { AgentEconomyClient } from "./AgentEconomyClient"

const BASE_URL = "https://www.ergoblockchain.org"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    title: "Ergo — The Agentic Blockchain | Agent Economy: Notes, Credit & Programmable Trust",
    description:
      "Ergo is the agentic blockchain: the base layer for autonomous AI agents that need to pay, receive, and settle without human intermediaries. eUTXO + ErgoScript + Babel Fees = the only viable stack.",
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
      title: "Ergo — The Agentic Blockchain | Agent Economy",
      description:
        "Ergo is the agentic blockchain: eUTXO + ErgoScript acceptance predicates + Babel Fees — the only settlement layer where autonomous AI agents can pay, receive, and settle without human intermediaries.",
      url: getCanonicalUrl("/agent-economy", locale),
      siteName: "Ergo Blockchain",
      images: [
        {
          url: `${BASE_URL}/og/agent-economy.png`,
          width: 1200,
          height: 630,
          alt: "Ergo Agent Economy — Base layer for autonomous economic agents",
        },
      ],
      type: "website",
      locale: locale === "ru" ? "ru_RU" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "Agent Economy on Ergo",
      description:
        "Notes · Credit · Trust Rules · Settlement — the open stack for autonomous agent commerce.",
      images: [`${BASE_URL}/og/agent-economy.png`],
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
      "name": "Ergo Agent Economy Stack",
      "description": "Open-source protocol stack for autonomous AI agent payments on Ergo — the agentic blockchain. Includes programmable notes (IOUs), reserve contracts, trackers, and ErgoScript acceptance predicates.",
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
        "Programmable Notes (bearer IOUs)",
        "Reserve Contracts (verifiable backing)",
        "Acceptance Predicates (ErgoScript conditions)",
        "Anti-double-spend Trackers",
        "Babel Fees (pay with any token)",
        "Composable multi-agent flows"
      ],
      "programmingLanguage": ["ErgoScript", "TypeScript", "Scala"],
      "operatingSystem": "Ergo Blockchain",
      "releaseNotes": "Production-ready on Ergo mainnet via ChainCash",
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
            "text": "The agent economy on Ergo refers to the infrastructure enabling autonomous AI agents and software to make, receive, and settle payments without human intermediaries. Ergo provides four on-chain primitives: Reserve (backing collateral), Note (programmable IOU), Tracker (anti-double-spend), and Acceptance Predicate (ErgoScript condition for accepting payment)."
          }
        },
        {
          "@type": "Question",
          "name": "How do AI agents pay each other on blockchain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "On Ergo, AI agents use Notes (bearer instruments) backed by Reserves. An agent issues a Note to pay for a service; the service provider redeems it against the Reserve. Acceptance Predicates in ErgoScript allow agents to specify conditions: 'accept payment only if task hash matches and deadline hasn't passed.' No bank account or identity required."
          }
        },
        {
          "@type": "Question",
          "name": "Why can't AI agents use Stripe or PayPal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Stripe and PayPal require identity verification, credit history, and legal entities. Autonomous agents have none of these. They also charge percentage fees incompatible with microtransactions, and lack programmable acceptance conditions. Ergo's agent stack requires no identity, supports $0.001 micropayments via Babel Fees, and allows fully programmable acceptance logic."
          }
        },
        {
          "@type": "Question",
          "name": "What is ChainCash?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ChainCash is the reference implementation of Ergo's agent payment stack built by BetterMoneyLabs. It implements Notes and Reserves on Ergo mainnet, enabling programmable bearer instruments backed by ERG or other tokens. Open source and production-ready."
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
      "headline": "Agent Economy on Ergo — The Complete Stack",
      "description": "How Ergo's eUTXO model, ErgoScript, and Babel Fees combine to form the world's most complete autonomous agent payment infrastructure.",
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
