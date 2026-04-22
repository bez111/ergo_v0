import type { Metadata } from "next"
import { siteConfig } from "@/config/site-config"
import { createBreadcrumbSchema, createFAQSchema, createTechArticleSchema, getAlternates, getCanonicalUrl } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"
import { NotesVsTokensClient } from "./NotesVsTokensClient"

const origin = siteConfig.siteUrl
const PATH = "/blog/notes-vs-tokens"

const SEO = {
  title: "Notes vs Tokens: Why Bearer Instruments Matter for AI Agent Payments",
  description: "Ergo has native tokens and Notes (programmable bearer instruments). For simple transfers, tokens work. For agent payment pipelines — conditional, expiring, Reserve-backed — Notes are the right primitive. Here is why.",
  image: "/og/agent-economy.png",
  keywords: ["ergo notes vs tokens", "bearer instrument blockchain", "programmable IOU ergo", "agent payment primitive", "ergo native tokens", "ChainCash notes", "eUTXO bearer instrument", "conditional payment ergo", "agent economy ergo", "notes reserve tracker"],
}

const FAQ_ITEMS = [
  { question: "What is an Ergo Note?", answer: "A Note is a programmable bearer instrument — a UTxO with a spending script encoding acceptance conditions, an expiry, and a reference to a Reserve box. It's the primary payment instrument for agent-to-agent transactions in the Ergo agent economy stack." },
  { question: "How are Notes different from Ergo native tokens?", answer: "Native tokens are unconditional fungible assets. Notes have acceptance predicates (conditions that must be satisfied to redeem), expiry heights, and Reserve backing. For task-conditional agent payments, Notes are the correct primitive." },
  { question: "Can tokens and Notes be used together?", answer: "Yes. They compose in the same transaction. A typical agent economy app uses Notes for the payment layer (conditional, expiring credit) and tokens for the ownership layer (governance, NFTs, LP positions)." },
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

export default function NotesVsTokensPage() {
  const schemas = [
    createTechArticleSchema("/blog/notes-vs-tokens", { headline: SEO.title, description: SEO.description, image: SEO.image, datePublished: "2026-03-20", keywords: SEO.keywords, proficiencyLevel: "Intermediate" }),
    createBreadcrumbSchema([{ name: "Blog", href: "/blog" }, { name: "Notes vs Tokens", href: "/blog/notes-vs-tokens" }], false),
    createFAQSchema(FAQ_ITEMS),
  ]
  return <>{renderSchemaScripts(schemas)}<NotesVsTokensClient /></>
}
