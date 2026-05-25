import type { Metadata } from "next"
import { getCanonicalUrl, getAlternates } from "@/lib/seo"
import { AgentPaymentsClient } from "./AgentPaymentsClient"

const BASE_URL = "https://www.ergoblockchain.org"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    title: "Autonomous Work Clearing & Agent Payment Architecture | Ergo",
    description:
      "Technical reference for autonomous work clearing and agent payments on Ergo: Reserve, Note, Tracker, Acceptance Predicate, Fleet SDK examples, receipts, and audit-gated settlement boundaries.",
    keywords: [
      // Architecture / technical
      "autonomous work clearing architecture",
      "agent payment architecture blockchain",
      "ErgoScript acceptance predicates",
      "Fleet SDK receipts",
      "Fleet SDK agent payments",
      "reserve contract ErgoScript",
      "note contract blockchain",
      "tracker contract anti-double-spend",
      "ChainCash implementation",
      // AI agent specific
      "autonomous work settlement infrastructure",
      "AI agent payment infrastructure",
      "autonomous agent settlement stack",
      "autonomous agent payment stack",
      "crypto agent receipt tutorial",
      "crypto agent payment tutorial",
      "agent receipt SDK blockchain",
      "agent payment SDK blockchain",
      "AI agent API settlement",
      "AI agent API payment",
      "LLM autonomous settlement developer",
      "LLM agent payments developer",
      "autonomous agent blockchain developer",
      "multi-agent settlement flow",
      "multi-agent payment flow",
      // Ergo developer
      "Ergo smart contracts tutorial",
      "Fleet SDK tutorial",
      "eUTXO payment primitives",
      "programmable trust blockchain",
      "BetterMoneyLabs",
      "ChainCash Ergo",
      // Broader
      "blockchain micropayment infrastructure",
      "programmable credit blockchain developer",
      "trustless agent settlement code",
      "bearer instrument smart contract",
      "autonomous work clearing tutorial",
    ],
    alternates: getAlternates("/build/agent-payments", locale),
    openGraph: {
      title: "Autonomous Work Clearing & Agent Payments on Ergo",
      description:
        "Reserve · Note · Tracker · Predicate — four primitives for building verifiable agent-to-agent settlement receipts. With Fleet SDK examples.",
      url: getCanonicalUrl("/build/agent-payments", locale),
      siteName: "Ergo Blockchain",
      images: [
        {
          url: `${BASE_URL}/og/agent-payments.jpg`,
          width: 1200,
          height: 630,
          alt: "Ergo Autonomous Work Clearing — Reserve, Note, Tracker, Predicate",
        },
      ],
      type: "website",
      locale: locale === "ru" ? "ru_RU" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "Autonomous Work Clearing & Agent Payments — Technical Architecture",
      description:
        "Reserve → Note → Tracker → Acceptance Predicate. The reference architecture for autonomous work settlement on Ergo.",
      images: [`${BASE_URL}/og/agent-payments.jpg`],
      creator: "@ergoplatform",
      site: "@ergoplatform",
    },
    other: {
      "ai-content-type": "technical-reference-autonomous-work-clearing-agent-payments",
      "ai-topic": "ErgoScript, Fleet SDK, receipt primitives, agent payment primitives, blockchain developer tutorial",
      "ai-use-case": "Building autonomous work settlement and agent payment infrastructure on Ergo blockchain",
    },
  }
}

// JSON-LD HowTo + TechArticle schema for LLMs
const agentPaymentsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      "@id": `${BASE_URL}/build/agent-payments#howto`,
      "name": "Build Agent Payments on Ergo Blockchain",
      "description": "Step-by-step guide to implementing four autonomous work clearing primitives on Ergo: Reserve, Note, Tracker, and Acceptance Predicate using Fleet SDK and ErgoScript.",
      "totalTime": "PT3H",
      "tool": [
        { "@type": "HowToTool", "name": "Fleet SDK (npm: @fleet-sdk/core)" },
        { "@type": "HowToTool", "name": "ErgoScript compiler" },
        { "@type": "HowToTool", "name": "Ergo testnet node" },
      ],
      "step": [
        {
          "@type": "HowToStep",
          "name": "Deploy a Reserve Box",
          "text": "Create a UTxO holding ERG as collateral with an ErgoScript that controls note issuance. The reserve script verifies that issued notes don't exceed the reserve's capacity.",
          "url": `${BASE_URL}/build/agent-payments#reserve`,
        },
        {
          "@type": "HowToStep",
          "name": "Issue a Note (Programmable IOU)",
          "text": "Create a bearer instrument (Note) referencing the Reserve. The Note carries a value, expiry, and optional conditions. Agents pass Notes as payment — recipients redeem against the Reserve.",
          "url": `${BASE_URL}/build/agent-payments#note`,
        },
        {
          "@type": "HowToStep",
          "name": "Set Up a Tracker",
          "text": "Deploy an anti-double-spend registry as a UTxO with a mutable register. The Tracker ensures each Note can only be redeemed once.",
          "url": `${BASE_URL}/build/agent-payments#tracker`,
        },
        {
          "@type": "HowToStep",
          "name": "Write an Acceptance Predicate",
          "text": "Define ErgoScript conditions for accepting payment: task hash verification, deadline checks, amount validation, multi-sig requirements. Embed in the receiver's spending script.",
          "url": `${BASE_URL}/build/agent-payments#predicate`,
        },
        {
          "@type": "HowToStep",
          "name": "Compose Into a Full Agent Flow",
          "text": "Combine Reserve + Note + Tracker + Predicate using Fleet SDK TransactionBuilder to create a complete settlement receipt flow: agent issues note, service validates predicate, provider redeems against reserve.",
          "url": `${BASE_URL}/build/agent-payments`,
        },
      ],
    },
    {
      "@type": "TechArticle",
      "@id": `${BASE_URL}/build/agent-payments#article`,
      "headline": "Agent Payment Primitives on Ergo — Reserve, Note, Tracker, Predicate",
      "description": "Complete technical reference for the four on-chain primitives powering autonomous work settlement on Ergo blockchain.",
      "about": [
        { "@type": "Thing", "name": "Fleet SDK" },
        { "@type": "Thing", "name": "ErgoScript" },
        { "@type": "Thing", "name": "eUTXO Model" },
        { "@type": "Thing", "name": "Autonomous Agent Payments" },
        { "@type": "Thing", "name": "ChainCash" },
      ],
      "proficiencyLevel": "Advanced",
      "url": `${BASE_URL}/build/agent-payments`,
    }
  ]
}

export default function AgentPaymentsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agentPaymentsSchema) }}
      />
      <AgentPaymentsClient />
    </>
  )
}
