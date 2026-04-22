import type { Metadata } from "next"
import { EutxoVsAccountsClient } from "./EutxoVsAccountsClient"
import { siteConfig } from "@/config/site-config"
import { createBreadcrumbSchema, createFAQSchema, createTechArticleSchema, getAlternates, getCanonicalUrl } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

const origin = siteConfig.siteUrl
const PATH = "/blog/eutxo-vs-accounts"

// SEO Configuration
const SEO = {
  title: "Two Blockchain Models: Why Ergo Chose Differently",
  description: "Deterministic execution, explicit state transitions, and auditable privacy patterns — how Ergo's eUTXO model differs from Ethereum's account model for secure, scalable DeFi.",
  image: "/og/eutxo-vs-accounts.png",
  keywords: [
    "ergo blockchain", "eutxo model", "ethereum accounts",
    "smart contracts", "ergoscript", "blockchain comparison",
    "deterministic execution", "sigma protocols", "defi security"
  ],
}

// FAQ Content
const FAQ_ITEMS = [
  { question: "What is the core difference between eUTXO and accounts?", answer: "eUTXO targets specific boxes with immutable code per box and explicit state transitions; accounts update a global mutable state. eUTXO reduces cross-contract interference and enables safe parallelism on disjoint boxes." },
  { question: "Is eUTXO private by default?", answer: "No. Privacy is optional but powerful: Sigma protocols enable confidential yet auditable flows (mixing, ring/threshold proofs, selective disclosure)." },
  { question: "How does composability work without global state?", answer: "Through explicit patterns (singleton/state boxes), off-chain transaction builders, and well-defined invariants. Composition is more explicit, outcomes more predictable." },
  { question: "Why does parallelism improve on eUTXO?", answer: "Independent transactions that spend different boxes do not contend on a shared ledger cell; conflicts localize to specific boxes instead of rippling across a global state." },
  { question: "Where should developers start?", answer: "Begin with the eUTXO intro, ErgoScript examples, and try the eUTXO visualizer to understand explicit state transitions." }
]

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return {
    title: SEO.title,
    description: SEO.description,
    alternates: getAlternates(PATH, locale),
    openGraph: {
      type: "article",
      url: getCanonicalUrl(PATH, locale),
      siteName: "Ergo Blockchain",
      title: SEO.title,
      description: SEO.description,
      images: [{ url: `${origin}${SEO.image}`, width: 1200, height: 630 }],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      images: [`${origin}${SEO.image}`],
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
    },
    robots: { index: true, follow: true },
    keywords: SEO.keywords,
  }
}

export default function EutxoVsAccountsPage() {
  const schemas = [
    createTechArticleSchema("/blog/eutxo-vs-accounts", {
      headline: SEO.title,
      description: SEO.description,
      image: SEO.image,
      datePublished: "2024-11-07",
      keywords: SEO.keywords,
      proficiencyLevel: "Intermediate",
    }),
    createBreadcrumbSchema([
      { name: "Blog", href: "/blog" },
      { name: "eUTXO vs Accounts", href: "/blog/eutxo-vs-accounts" },
    ], false),
    createFAQSchema(FAQ_ITEMS),
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      <EutxoVsAccountsClient />
    </>
  )
}
