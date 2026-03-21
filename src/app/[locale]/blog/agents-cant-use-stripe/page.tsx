import type { Metadata } from "next"
import { siteConfig } from "@/config/site-config"
import { createBreadcrumbSchema, createFAQSchema, createTechArticleSchema } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"
import { AgentStripeClient } from "./AgentStripeClient"

const origin = siteConfig.siteUrl
const url = `${origin}/blog/agents-cant-use-stripe`

const SEO = {
  title: "Why AI Agents Can't Use Stripe — and What They Need Instead",
  description:
    "Stripe, PayPal, and every payment rail built for humans shares a fatal flaw for autonomous agents: they assume persistent identity and centralized trust. This post explains what agents actually need from money — and why Ergo already has it.",
  image: "/og/agent-economy.png",
  keywords: [
    "agentic blockchain",
    "agentic blockchain payments",
    "AI agents payment problem",
    "why agents can't use Stripe",
    "autonomous agent payments",
    "LLM agent payment rails",
    "blockchain for AI agents",
    "agent economy crypto",
    "programmable payments agents",
    "Stripe vs agentic blockchain",
    "crypto AI agent payments",
    "agentic payments",
    "multi-agent payment system",
    "ephemeral agent payments",
    "ergo agent payments",
    "agent micropayments",
    "autonomous commerce blockchain",
  ],
}

const FAQ_ITEMS = [
  {
    question: "Why can't AI agents use Stripe?",
    answer:
      "Stripe requires a persistent merchant account, KYC verification, and static billing identities. AI agents are ephemeral processes — they spin up, complete a task, and disappear. They have no stable identity to register with Stripe, and Stripe offers no way to encode acceptance conditions ('accept payment only if task X is complete') directly in the payment instrument.",
  },
  {
    question: "What payment infrastructure do AI agents actually need?",
    answer:
      "Agents need: (1) no identity requirement — any cryptographic key pair can transact; (2) programmable acceptance — payment can encode task completion conditions; (3) micropayment viability — $0.001 per API call must be economically feasible; (4) credit issuance — orchestrators issue credit to sub-agents without per-call round-trips; (5) no gas wallet bootstrapping — Babel Fees let agents pay tx fees in any token.",
  },
  {
    question: "How does Ergo solve agent payment problems?",
    answer:
      "Ergo provides the Note+Reserve+Tracker stack as protocol-level primitives. Notes are programmable bearer instruments with acceptance predicates. Reserves back the credit. Trackers prevent double-spend. Babel Fees let agents operate without pre-funded ERG wallets. ChainCash is the live mainnet reference implementation.",
  },
  {
    question: "What is a programmable IOU for AI agents?",
    answer:
      "A programmable IOU (Note in Ergo) is a payment instrument with conditions encoded in its spending script: 'this payment is valid only if blake2b256(task_output) == TASK_HASH and block height < DEADLINE.' The agent pays with the Note; the receiver's script enforces task completion automatically — no off-chain oracle or escrow.",
  },
  {
    question: "What is the difference between Lightning Network and Ergo for agent payments?",
    answer:
      "Lightning Network requires persistent channels, which means pre-funded wallets and ongoing channel management — the opposite of ephemeral agent architecture. Ergo's Note payments are stateless bearer instruments: no channel setup, no persistent state, no counterparty online requirement. Each Note payment is self-contained.",
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
      publishedTime: "2026-03-20T00:00:00Z",
      modifiedTime: new Date().toISOString(),
      authors: ["Developer Relations"],
      tags: ["Agent Economy", "AI Payments", "Ergo", "Blockchain", "Developer"],
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
      "ai-content-type": "blog-agent-payments",
      "ai-topic": "autonomous-agent-payments, stripe-vs-crypto, blockchain-for-AI",
    },
  }
}

export default function AgentStripePage() {
  const schemas = [
    createTechArticleSchema("/blog/agents-cant-use-stripe", {
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
        { name: "Why AI Agents Can't Use Stripe", href: "/blog/agents-cant-use-stripe" },
      ],
      false
    ),
    createFAQSchema(FAQ_ITEMS),
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      <AgentStripeClient />
    </>
  )
}
