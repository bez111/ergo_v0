import type { Metadata } from "next"
import { ErgoIn5MinutesClient } from "./ErgoIn5MinutesClient"
import { siteConfig } from "@/config/site-config"
import { createBreadcrumbSchema, createFAQSchema, createTechArticleSchema, getAlternates, getCanonicalUrl } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

const origin = siteConfig.siteUrl
const PATH = "/blog/ergo-in-5-minutes"

// SEO Configuration
const SEO = {
  title: "Ergo in 5 Minutes: Why It Matters & How It Works",
  description: "Proof-of-Work blockchain with eUTXO and Sigma protocols: fair launch (no ICO), privacy, Storage Rent, and the Ergo DeFi ecosystem.",
  image: "/og/ergo-in-five-minutes.png",
  keywords: [
    "ergo blockchain", "proof of work", "eutxo model",
    "sigma protocols", "ergoscript", "storage rent",
    "fair launch", "privacy blockchain", "defi ergo"
  ],
}

// FAQ Content
const FAQ_ITEMS = [
  { question: "What is the Ergo blockchain?", answer: "Ergo is a Proof-of-Work blockchain that blends Bitcoin-level security with the eUTXO smart-contract model and Sigma-protocol privacy to power secure, auditable DeFi." },
  { question: "How is Ergo different from Ethereum and Bitcoin (eUTXO vs account)?", answer: "Ergo uses eUTXO, attaching conditions to outputs for deterministic, easily parallelized execution—avoiding many global-state side effects seen in account-based chains, while extending Bitcoin's UTXO with rich programmability." },
  { question: "What are Sigma protocols on Ergo?", answer: "Sigma protocols are native zero-knowledge proofs (AND/OR, threshold, ring) that enable auditable privacy—you keep details confidential yet can prove compliance or selectively disclose when required." },
  { question: "What is storage rent on Ergo?", answer: "Storage rent is a small fee on long-inactive boxes (UTXOs) that recycles lost ERG to fund network security; active users avoid it simply by moving coins periodically." },
  { question: "Was there an ICO or pre-mine (fair launch)?", answer: "No—ERG had a fair launch with Proof-of-Work only, no ICO and no pre-mine, aligning incentives and decentralization from day one." },
  { question: "What is Autolykos and can I mine Ergo with GPUs?", answer: "Autolykos is Ergo's memory-hard PoW algorithm, designed to be GPU-friendly and more resistant to ASIC centralization; yes, you can mine ERG with consumer-grade GPUs." },
  { question: "What can I build or use on Ergo (DeFi & apps)?", answer: "Ergo supports DEX trading (e.g., Spectrum), algorithmic stablecoins (SigmaUSD), DAO tooling (Paideia), NFTs, and privacy-preserving apps—using ErgoScript and the eUTXO model." },
  { question: "Is Ergo a 'privacy coin'? (compliance & audits)", answer: "Privacy on Ergo is optional and policy-driven: Sigma proofs enable selective disclosure and auditability, making privacy features compatible with compliance workflows." }
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
      siteName: "Ergo Platform",
      title: SEO.title,
      description: SEO.description,
      images: [{ url: `${origin}${SEO.image}`, width: 1200, height: 630, alt: SEO.title }],
      locale: "en_US",
      publishedTime: "2024-01-01T00:00:00Z",
      modifiedTime: new Date().toISOString(),
      authors: ["Ergo Team"],
      tags: ["Ergo", "Blockchain", "eUTXO", "Sigma Protocols", "DeFi"]
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
    keywords: SEO.keywords,
  }
}

export default function ErgoIn5MinutesPage() {
  const schemas = [
    createTechArticleSchema("/blog/ergo-in-5-minutes", {
      headline: SEO.title,
      description: SEO.description,
      image: SEO.image,
      datePublished: "2024-01-01",
      keywords: SEO.keywords,
      proficiencyLevel: "Beginner",
    }),
    createBreadcrumbSchema([
      { name: "Blog", href: "/blog" },
      { name: "Ergo in 5 Minutes", href: "/blog/ergo-in-5-minutes" },
    ], false),
    createFAQSchema(FAQ_ITEMS),
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      <ErgoIn5MinutesClient />
    </>
  )
}
