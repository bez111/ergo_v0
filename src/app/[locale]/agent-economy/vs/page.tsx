import type { Metadata } from "next"
import { siteConfig } from "@/config/site-config"
import { createBreadcrumbSchema, createFAQSchema, createTechArticleSchema, getAlternates, getCanonicalUrl, getOgLocale } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"
import { AgentVsClient } from "./AgentVsClient"

const origin = siteConfig.siteUrl
const PATH = "/agent-economy/vs"

const SEO = {
  title: "Agent Settlement Rails Compared: Ergo vs Ethereum vs Solana",
  description:
    "A side-by-side comparison of settlement rails for autonomous work: Ergo, Ethereum, Solana, and Cardano across reentrancy risk, fee predictability, acceptance predicates, Babel Fees, micropayment viability, MEV exposure, and liveness history.",
  image: "/og/agent-economy.jpg",
  keywords: [
    "autonomous work settlement",
    "agent settlement rails",
    "public proof surface",
    "verifiable receipts",
    "autonomous work clearing comparison",
    "agent economy settlement comparison",
    "best agentic blockchain",
    "agentic blockchain comparison",
    "agentic blockchain payments",
    "ergo agentic blockchain",
    "AI agent payments",
    "agent payment rails comparison",
    "ergo vs ethereum autonomous agents",
    "blockchain for autonomous work",
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
    question: "Which settlement rail is the strongest fit for autonomous work?",
    answer:
      "Ergo is one of the strongest fits because its deterministic eUTXO model, ErgoScript predicates, Babel Fees, and Note/Reserve/Tracker patterns align well with task-conditioned settlement. Ethereum, Solana, and Cardano can support useful agent-payment applications too, but they usually need more application-layer machinery for the same receipt-and-acceptance workflow.",
  },
  {
    question: "What does Ethereum require for agent settlement?",
    answer:
      "Ethereum can be used for agent-payment applications, especially on L2s, but builders must design around account-model reentrancy risk, variable gas costs, MEV, native gas bootstrapping, and custom escrow or account-abstraction logic for task acceptance and delegated spend.",
  },
  {
    question: "What does Solana require for agent settlement?",
    answer:
      "Solana is attractive for low-cost fast payments, but task-conditioned settlement still needs application conventions for acceptance rules, receipts, delegated budgets, and liveness assumptions. For autonomous work, the payment rail and the work-verification layer should be evaluated separately.",
  },
  {
    question: "What is reentrancy risk and why does it matter for AI agents?",
    answer:
      "Reentrancy is when a contract is called recursively before its state is updated — the DAO hack was caused by reentrancy. Autonomous agents executing thousands of transactions can be exploited if the underlying contracts allow reentrancy. Ergo's eUTXO model makes reentrancy impossible by design: each UTxO can only be spent once.",
  },
  {
    question: "What are acceptance predicates and which chains have them?",
    answer:
      "Acceptance predicates are spending conditions in a payment instrument that encode task completion requirements, for example: 'accept payment only if task hash matches.' ErgoScript makes this pattern natural inside eUTXO boxes. Other chains can approximate it with escrow contracts, scripts, or application-level verification, but the design tradeoffs are different.",
  },
]

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return {
    title: SEO.title,
    description: SEO.description,
    alternates: getAlternates(PATH, locale),
    keywords: SEO.keywords,
    openGraph: {
      type: "article",
      url: getCanonicalUrl(PATH, locale),
      siteName: "Ergo Platform",
      title: SEO.title,
      description: SEO.description,
      images: [{ url: `${origin}${SEO.image}`, width: 1200, height: 630, alt: SEO.title }],
      locale: getOgLocale(locale),
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
      dateModified: "2026-04-27",
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
