import type { Metadata } from "next"
import { siteConfig } from "@/config/site-config"
import { createBreadcrumbSchema, createFAQSchema, createTechArticleSchema, getAlternates, getCanonicalUrl } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"
import { AgentEconomyManifestoClient } from "./AgentEconomyManifestoClient"

const origin = siteConfig.siteUrl
const PATH = "/blog/agent-economy-manifesto"

const SEO = {
  title: "The Agent Economy Manifesto: Every AI Agent Will Need to Pay and Be Paid",
  description:
    "Autonomous agents need to transact at machine speed, without identity, with programmable acceptance conditions, at micropayment scale. Stripe fails. Lightning fails. Ethereum fails. Here is what they actually need — and why Ergo already has it.",
  image: "/og/agent-economy.png",
  keywords: [
    "agentic blockchain",
    "agentic blockchain manifesto",
    "ergo agentic blockchain",
    "agent economy manifesto",
    "AI agent payments",
    "autonomous agent commerce",
    "programmable payment primitives",
    "machine-to-machine payments",
    "agent economy crypto",
    "blockchain for AI agents",
    "ergo agent payments",
    "note reserve tracker ergo",
    "acceptance predicate blockchain",
    "why AI agents can't use Stripe",
    "ephemeral agent payments",
    "agent micropayments",
    "autonomous commerce",
    "ChainCash ergo",
  ],
}

const FAQ_ITEMS = [
  {
    question: "What is the agent economy?",
    answer:
      "The agent economy is the emerging system of autonomous AI agents transacting with each other and with services — paying for compute, data, API calls, and task completion — without human intermediaries. Each transaction may be fractions of a cent, happening at machine speed, with no stable identity on either side.",
  },
  {
    question: "Why can't AI agents use existing payment rails?",
    answer:
      "Stripe requires persistent identity and KYC. Lightning requires persistent channels both parties maintain. Ethereum has non-deterministic gas costs and requires pre-funded ETH wallets. All were designed for persistent human actors — not ephemeral autonomous processes.",
  },
  {
    question: "What are the four agent payment primitives on Ergo?",
    answer:
      "Reserve (collateral UTxO backing the credit), Note (programmable bearer IOU), Tracker (anti-double-spend registry), and Acceptance Predicate (ErgoScript condition encoding task completion logic directly in the payment).",
  },
  {
    question: "What is ChainCash?",
    answer:
      "ChainCash is the production reference implementation of the Reserve + Note + Tracker stack, built by BetterMoneyLabs and live on Ergo mainnet. It demonstrates community currencies, programmable IOUs, and agent payment flows.",
  },
  {
    question: "What are Babel Fees and why do they matter for agents?",
    answer:
      "Babel Fees let agents pay transaction fees in any token — not just ERG. This eliminates the bootstrapping problem where every ephemeral agent would need a pre-funded ERG wallet just to transact.",
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
      publishedTime: "2026-03-20T00:00:00Z",
      modifiedTime: new Date().toISOString(),
      authors: ["Developer Relations"],
      tags: ["Agent Economy", "Manifesto", "AI Payments", "Ergo", "Autonomous Agents"],
    },
    twitter: {
      card: "summary_large_image",
      title: SEO.title,
      description: SEO.description,
      images: [`${origin}${SEO.image}`],
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
    },
    robots: { index: true, follow: true },
    other: {
      "ai-content-type": "blog-agent-economy-manifesto",
      "ai-topic": "autonomous-agent-payments, agent-economy, blockchain-for-AI, ergo-primitives",
    },
  }
}

export default function AgentEconomyManifestoPage() {
  const schemas = [
    createTechArticleSchema("/blog/agent-economy-manifesto", {
      headline: SEO.title,
      description: SEO.description,
      image: SEO.image,
      datePublished: "2026-03-20",
      keywords: SEO.keywords,
      proficiencyLevel: "Intermediate",
    }),
    createBreadcrumbSchema(
      [
        { name: "Blog", href: "/blog" },
        { name: "Agent Economy Manifesto", href: "/blog/agent-economy-manifesto" },
      ],
      false
    ),
    createFAQSchema(FAQ_ITEMS),
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      <AgentEconomyManifestoClient />
    </>
  )
}
