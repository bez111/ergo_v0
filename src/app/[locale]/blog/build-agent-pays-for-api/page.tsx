import type { Metadata } from "next"
import { siteConfig } from "@/config/site-config"
import { createBreadcrumbSchema, createFAQSchema, createTechArticleSchema, getAlternates, getCanonicalUrl } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"
import { BuildAgentPaysClient } from "./BuildAgentPaysClient"

const origin = siteConfig.siteUrl
const PATH = "/blog/build-agent-pays-for-api"

const SEO = {
  title: "How to Build an Agent That Pays for Its Own API Calls on Ergo",
  description: "Step-by-step tutorial: autonomous agent with Ergo wallet, paid Express API that verifies on-chain payment, end-to-end agent payment flow on testnet. Full source code.",
  image: "/og/agent-economy.png",
  keywords: ["agentic blockchain tutorial", "build agentic blockchain app", "ergo agent tutorial", "agent pays api calls", "autonomous agent payment tutorial", "fleet sdk tutorial", "ergo agent wallet", "build agent economy app", "agent micropayments tutorial", "ergo testnet tutorial", "on-chain payment verification", "agent api payment"],
}

const FAQ_ITEMS = [
  { question: "How does an AI agent pay for API calls on Ergo?", answer: "The agent holds an Ergo wallet, builds a payment transaction with the API's address as receiver and a call ID in register R4, submits the transaction, then calls the API with the transaction ID as proof. The API queries the blockchain for a UTxO at its address matching the call ID." },
  { question: "Do agents need ERG to pay transaction fees?", answer: "With Babel Fees, agents can pay fees in any token. For ERG-based payments, a small ERG balance is needed — it can come from the first payment the agent receives." },
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

export default function BuildAgentPaysPage() {
  const schemas = [
    createTechArticleSchema("/blog/build-agent-pays-for-api", { headline: SEO.title, description: SEO.description, image: SEO.image, datePublished: "2026-03-20", keywords: SEO.keywords, proficiencyLevel: "Advanced" }),
    createBreadcrumbSchema([{ name: "Blog", href: "/blog" }, { name: "Build an Agent That Pays for API Calls", href: "/blog/build-agent-pays-for-api" }], false),
    createFAQSchema(FAQ_ITEMS),
  ]
  return <>{renderSchemaScripts(schemas)}<BuildAgentPaysClient /></>
}
