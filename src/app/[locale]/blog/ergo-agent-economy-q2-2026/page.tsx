import type { Metadata } from "next"
import { siteConfig } from "@/config/site-config"
import {
  createBreadcrumbSchema,
  createFAQSchema,
  createTechArticleSchema,
  getAlternates,
  getCanonicalUrl,
  getOgLocale,
} from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"
import { Q22026Client } from "./Q22026Client"

const origin = siteConfig.siteUrl
const PATH = "/blog/ergo-agent-economy-q2-2026"

const SEO = {
  title: "Q2 2026 Update: What Shipped in Ergo's Agent Economy Stack",
  description:
    "Two months after launch — what changed in the Ergo agent economy SDK. Full Note lifecycle, LangChain + OpenAI + CrewAI + AutoGen adapters, 10 working examples, Python package, MCP server. Concrete numbers, working code.",
  image: "/og/blog/ergo-agent-economy-q2-2026.png",
  keywords: [
    "ergo agent economy update",
    "ergo agent economy q2 2026",
    "ergo-agent-pay sdk",
    "ergo agent payment sdk update",
    "agentic blockchain progress 2026",
    "ergo langchain integration",
    "ergo openai agent",
    "ergo crewai integration",
    "ergo autogen integration",
    "ergo mcp server",
    "ergo agent python sdk",
    "fleet sdk agent payments",
    "ergo Note lifecycle",
    "agent economy roadmap",
    "ChainCash prototype 2026",
    "ergo developer ecosystem",
  ],
}

const FAQ_ITEMS = [
  {
    question: "What changed in Ergo's agent economy stack since the March 2026 launch?",
    answer:
      "The ergo-agent-pay SDK shipped v0.2 with the full Note lifecycle (Reserve, Note, Tracker, Acceptance Predicate, batch settlement). Three packages now exist: ergo-agent-pay (TypeScript), ergo-agent-py (Python), and ergo-agent-mcp (Model Context Protocol server). Ten working examples ship with the repo, including LangChain, OpenAI function calling, CrewAI, and AutoGen integrations.",
  },
  {
    question: "Which AI agent frameworks now have native Ergo payment support?",
    answer:
      "LangChain (via asLangChainTool() adapter), OpenAI function calling (via asOpenAIFunction() adapter), CrewAI, and AutoGen all have working examples in the Accord Protocol repo (formerly ergo-agent-economy). There is also a Python SDK (ergo-agent-py) for non-Node agents and an MCP server (ergo-agent-mcp) so any MCP-compatible client (Claude Desktop, Cursor, etc.) can pay for things on Ergo testnet.",
  },
  {
    question: "Is the agent payment stack production-ready?",
    answer:
      "The Ergo protocol primitives (eUTXO, ErgoScript, Babel Fees, Sigma Protocols) are live on mainnet since 2019. The ergo-agent-pay SDK and ChainCash reference implementation are open-source prototypes — no security audits or production releases yet. Treat them as pre-production code, suitable for testnet development and early mainnet experiments with small amounts.",
  },
  {
    question: "Where can I clone and run the examples?",
    answer:
      "The full repo is at https://github.com/bez111/accord-protocol. Examples are in the examples/ directory: 01-basic-payment, 02-note-payment, 03-acceptance-predicate, 04-orchestrator-budget, 05-api-payment-server, 06-python-agent, 07-streaming-pay, 08-treasury-multisig, 09-crewai-agents, 10-autogen-agent. Each has a self-contained README and runs against Ergo testnet — no mainnet ERG required.",
  },
  {
    question: "What is the Basis layer mentioned in the repo?",
    answer:
      "Basis is the off-chain credit and IOU layer built on top of Ergo's on-chain primitives. Off-chain Notes circulate cheaply between trusted parties; on-chain Reserves act as collateral and global settlement when trust isn't enough. This combines low-cost rapid payments with the option to settle on-chain via Reserve redemption. Basis is documented in the repo's docs/basis/ directory.",
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
      publishedTime: "2026-05-06T00:00:00Z",
      authors: ["Developer Relations"],
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
      "ai-content-type": "blog-agent-economy-quarterly-update",
      "ai-topic": "ergo-agent-economy, sdk-update, langchain-integration, agent-payments",
    },
  }
}

export default function Q22026Page() {
  const schemas = [
    createTechArticleSchema(PATH, {
      headline: SEO.title,
      description: SEO.description,
      image: SEO.image,
      datePublished: "2026-05-06",
      dateModified: "2026-05-06",
      keywords: SEO.keywords,
      proficiencyLevel: "Intermediate",
    }),
    createBreadcrumbSchema(
      [
        { name: "Blog", href: "/blog" },
        { name: "Q2 2026: Ergo Agent Economy Update", href: PATH },
      ],
      false
    ),
    createFAQSchema(FAQ_ITEMS),
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      <Q22026Client />
    </>
  )
}
