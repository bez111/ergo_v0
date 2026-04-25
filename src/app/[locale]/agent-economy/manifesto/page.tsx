import type { Metadata } from "next"
import { siteConfig } from "@/config/site-config"
import { createBreadcrumbSchema, createFAQSchema, createTechArticleSchema, getAlternates, getCanonicalUrl } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"
import { ManifestoClient } from "./ManifestoClient"

const origin = siteConfig.siteUrl
const PATH = "/agent-economy/manifesto"

const SEO = {
  title: "The Agentic Blockchain Manifesto — Ergo as Base Layer for Autonomous AI Commerce",
  description:
    "Every AI system will need to pay and be paid. This manifesto explains why the agentic blockchain era demands a new money layer — and why Ergo's eUTXO, ErgoScript, and Babel Fees make it a leading agentic blockchain.",
  image: "/og/agent-economy.png",
  keywords: [
    "agentic blockchain",
    "agentic blockchain manifesto",
    "ergo agentic blockchain",
    "agentic blockchain payments",
    "agent economy manifesto",
    "blockchain for AI agents",
    "autonomous agent payments",
    "AI agent money layer",
    "programmable IOU blockchain",
    "crypto for LLM agents",
    "multi-agent payments",
    "agentic economy",
    "ergo agent economy",
    "AI agent infrastructure",
    "autonomous commerce blockchain",
    "agent payment rails",
    "why agents need crypto",
    "AI payments without KYC",
    "agent micropayments blockchain",
  ],
}

const FAQ_ITEMS = [
  {
    question: "Why do AI agents need their own payment layer?",
    answer:
      "AI agents are ephemeral, identityless processes. They can't hold Stripe accounts, pass KYC, or pre-fund centralized payment rails. They need to pay and be paid atomically, trustlessly, and at machine speed — which only a programmable blockchain can provide.",
  },
  {
    question: "Why not Ethereum or Solana for agent payments?",
    answer:
      "Ethereum has reentrancy risk, unpredictable gas costs, and MEV exposure — all dangerous for autonomous agents. Solana lacks programmable acceptance predicates and has chain halt history. Ergo's eUTXO gives agents deterministic costs, no reentrancy, and ErgoScript acceptance predicates as first-class primitives.",
  },
  {
    question: "What are acceptance predicates and why do agents need them?",
    answer:
      "An acceptance predicate is an ErgoScript condition embedded in a payment. It says: 'Accept this payment only if condition X is met at redemption time.' For agents, this means payments can encode task completion requirements, deadlines, and credentials — without any off-chain oracle.",
  },
  {
    question: "What is Babel Fees and why does it matter for agents?",
    answer:
      "Babel Fees allow paying Ergo transaction fees in any token — not just ERG. This means an agent doesn't need a pre-funded ERG wallet to operate. It can receive any token and pay fees from it, critical for ephemeral agent instances spun up on demand.",
  },
  {
    question: "What is the ChainCash protocol?",
    answer:
      "ChainCash is an open-source prototype of the Note+Reserve+Tracker payment stack on Ergo, developed by BetterMoneyLabs. It demonstrates community currencies, bearer instruments, and agent credit systems. The repository is active R&D — there are no production releases or security audits yet.",
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
      "ai-content-type": "manifesto-agent-economy",
      "ai-topic": "autonomous-agent-payments, programmable-credit, blockchain-settlement",
      "ai-use-case": "AI agents paying each other, autonomous commerce, programmable money",
    },
  }
}

export default function ManifestoPage() {
  const schemas = [
    createTechArticleSchema("/agent-economy/manifesto", {
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
        { name: "Manifesto", href: "/agent-economy/manifesto" },
      ],
      false
    ),
    createFAQSchema(FAQ_ITEMS),
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      <ManifestoClient />
    </>
  )
}
