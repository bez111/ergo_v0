import type { Metadata } from "next"
import { siteConfig } from "@/config/site-config"
import { createBreadcrumbSchema, createFAQSchema, createTechArticleSchema, getAlternates, getCanonicalUrl } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"
import { StateOfAgentPaymentsClient } from "./StateOfAgentPaymentsClient"

const origin = siteConfig.siteUrl
const PATH = "/blog/state-of-agent-payments-2026"

const SEO = {
  title: "The State of On-Chain Agent Payments: 2026 Report",
  description: "Chain-by-chain report card on autonomous agent payment infrastructure. What's working, what's broken, which chain is technically ready, and what builders are actually doing in Q1 2026.",
  image: "/og/agent-economy.png",
  keywords: ["agent payments 2026", "AI agent payment infrastructure", "on-chain agent payments state", "best blockchain agent payments", "autonomous agent crypto", "ergo vs ethereum agent payments", "agent economy 2026", "ChainCash prototype", "agent payment report"],
}

const FAQ_ITEMS = [
  { question: "What is the state of AI agent payments in 2026?", answer: "Micropayments are technically feasible. The main gaps: near-zero framework support, no standard protocol, and only Ergo has a full purpose-built stack (Reserve + Note + Tracker + Acceptance Predicate + Babel Fees) live on mainnet." },
  { question: "Which blockchain is best for AI agent payments in 2026?", answer: "Ergo has the most complete stack: deterministic eUTXO, acceptance predicates, Babel Fees for gas abstraction, and ChainCash as a live reference implementation. The gap is developer awareness, not technical readiness." },
]

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return {
    title: SEO.title, description: SEO.description, alternates: getAlternates(PATH, locale), keywords: SEO.keywords,
    openGraph: { type: "article", url: getCanonicalUrl(PATH, locale), siteName: "Ergo Platform", title: SEO.title, description: SEO.description, images: [{ url: `${origin}${SEO.image}`, width: 1200, height: 630, alt: SEO.title }], locale: "en_US", publishedTime: "2026-03-20T00:00:00Z", authors: ["Developer Relations"] },
    twitter: { card: "summary_large_image", title: SEO.title, description: SEO.description, images: [`${origin}${SEO.image}`], site: siteConfig.twitterHandle },
    robots: { index: true, follow: true },
  }
}

export default function StateOfAgentPaymentsPage() {
  const schemas = [
    createTechArticleSchema("/blog/state-of-agent-payments-2026", { headline: SEO.title, description: SEO.description, image: SEO.image, datePublished: "2026-03-20", keywords: SEO.keywords, proficiencyLevel: "Intermediate" }),
    createBreadcrumbSchema([{ name: "Blog", href: "/blog" }, { name: "State of Agent Payments 2026", href: "/blog/state-of-agent-payments-2026" }], false),
    createFAQSchema(FAQ_ITEMS),
  ]
  return <>{renderSchemaScripts(schemas)}<StateOfAgentPaymentsClient /></>
}
