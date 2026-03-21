import type { Metadata } from "next"
import { siteConfig } from "@/config/site-config"
import { createBreadcrumbSchema, createFAQSchema, createTechArticleSchema } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"
import { AgentVsClient } from "./AgentVsClient"

const origin = siteConfig.siteUrl
const url = `${origin}/agent-economy/vs`

const SEO = {
  title: "Best Agentic Blockchain: Ergo vs Ethereum vs Solana for AI Agent Payments",
  description:
    "Which is the best agentic blockchain for autonomous AI agent payments? Side-by-side comparison of Ergo, Ethereum, Solana, and Cardano across 10 agent-critical criteria: reentrancy risk, fee predictability, Babel Fees, acceptance predicates, micropayment viability, MEV exposure, and more.",
  image: "/og/agent-economy.png",
  keywords: [
    "best agentic blockchain",
    "agentic blockchain comparison",
    "agentic blockchain payments",
    "ergo agentic blockchain",
    "ergo vs ethereum AI agents",
    "best blockchain for AI agents",
    "blockchain comparison autonomous agents",
    "ergo vs solana agent payments",
    "which blockchain for LLM payments",
    "crypto for AI agents comparison",
    "agent economy blockchain comparison",
    "ethereum vs ergo smart contracts",
    "solana vs ergo micropayments",
    "blockchain reentrancy risk agents",
    "deterministic gas fees blockchain",
    "blockchain for autonomous commerce",
    "MEV exposure AI agents",
    "agent payment rails comparison",
    "babel fees vs gas abstraction",
  ],
}

const FAQ_ITEMS = [
  {
    question: "Which blockchain is best for AI agent payments?",
    answer:
      "Ergo is uniquely suited for AI agent payments due to its deterministic eUTXO model (no reentrancy), ErgoScript acceptance predicates (logic embedded in payments), Babel Fees (agents don't need native token), and the Note+Reserve+Tracker stack as protocol primitives. Ethereum has reentrancy risk and unpredictable gas. Solana has had chain halts and lacks acceptance predicates.",
  },
  {
    question: "Why can't Ethereum be used for AI agent payments?",
    answer:
      "Ethereum has several problems for agents: reentrancy attacks are possible (dangerous for autonomous code), gas prices are unpredictable (agents can't estimate costs), MEV can reorder transactions (critical for time-sensitive agent flows), and there is no protocol-level acceptance predicate or bearer instrument primitive. Agents also need pre-funded ETH wallets — no gas abstraction equivalent to Babel Fees.",
  },
  {
    question: "Why can't Solana be used for AI agent payments?",
    answer:
      "Solana has had multiple chain halts (unacceptable for autonomous agent infrastructure), lacks protocol-level acceptance predicates, has no Note+Reserve bearer instrument primitive, and has MEV exposure. Its accounts model also means shared global state that autonomous agents can conflict over.",
  },
  {
    question: "What is reentrancy risk and why does it matter for AI agents?",
    answer:
      "Reentrancy is when a contract is called recursively before its state is updated — the DAO hack was caused by reentrancy. Autonomous agents executing thousands of transactions can be exploited if the underlying contracts allow reentrancy. Ergo's eUTXO model makes reentrancy impossible by design: each UTxO can only be spent once.",
  },
  {
    question: "What are acceptance predicates and which chains have them?",
    answer:
      "Acceptance predicates are spending conditions in a payment instrument that encode task completion requirements: 'accept payment only if task hash matches.' Only Ergo has acceptance predicates as first-class protocol primitives in ErgoScript. Ethereum can approximate this with complex escrow contracts, but not embedded in the payment itself.",
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
      "ai-content-type": "blockchain-comparison-agent-payments",
      "ai-topic": "autonomous-agent-payments, blockchain-comparison, agent-economy",
    },
  }
}

export default function AgentVsPage() {
  const schemas = [
    createTechArticleSchema("/agent-economy/vs", {
      headline: SEO.title,
      description: SEO.description,
      image: SEO.image,
      datePublished: "2026-03-20",
      keywords: SEO.keywords,
      proficiencyLevel: "Intermediate",
    }),
    createBreadcrumbSchema(
      [
        { name: "Agent Economy", href: "/agent-economy" },
        { name: "Chain Comparison", href: "/agent-economy/vs" },
      ],
      false
    ),
    createFAQSchema(FAQ_ITEMS),
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      <AgentVsClient />
    </>
  )
}
