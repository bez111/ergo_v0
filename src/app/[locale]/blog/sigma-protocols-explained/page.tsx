import type { Metadata } from "next"
import { SigmaProtocolsExplainedClient } from "./SigmaProtocolsExplainedClient"
import { siteConfig } from "@/config/site-config"
import { createBreadcrumbSchema, createFAQSchema, createTechArticleSchema, createHowToSchema, getAlternates, getCanonicalUrl } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

const origin = siteConfig.siteUrl
const PATH = "/blog/sigma-protocols-explained"

// SEO Configuration
const SEO = {
  title: "Sigma Protocols Explained: Zero-Knowledge Privacy Made Simple | Ergo",
  description: "Learn Sigma Protocols through simple analogies and real-world examples. No advanced mathematics required! Discover how Ergo's composable zero-knowledge proofs enable programmable privacy.",
  image: "/og/sigma-protocols-explained.png",
  keywords: [
    "sigma protocols explained", "zero knowledge proofs tutorial",
    "blockchain privacy guide", "ergo cryptography beginner",
    "zkp without phd", "accessible cryptography",
    "programmable privacy", "composable zero knowledge",
    "sigma protocols vs zksnark", "ergo privacy features"
  ],
}

// FAQ Content
const FAQ_ITEMS = [
  { question: "What are Sigma Protocols in simple terms?", answer: "Sigma Protocols are a way to prove you know something (like a password or secret) without actually revealing what that something is. Think of it like proving you can unlock your phone without showing anyone your PIN code." },
  { question: "How do Sigma Protocols work with a simple example?", answer: "Imagine proving a dice roll is greater than 3 without showing the number. You cover faces 4, 5, 6 with stickers, roll the dice. If a sticker shows up, it proves the number is >3 without revealing the exact number." },
  { question: "What makes Sigma Protocols composable?", answer: "Sigma Protocols can be combined like Lego blocks using logical operators (AND, OR). You can prove 'I know secret A OR secret B' or 'I know secret X AND secret Y' without revealing any of the actual secrets." },
  { question: "Do I need a PhD to understand Sigma Protocols?", answer: "No! While the underlying math is complex, the concepts can be understood through simple analogies like combination locks, dice games, and card tricks. You don't need advanced mathematics to grasp how they work." },
  { question: "How are Sigma Protocols different from other privacy technologies?", answer: "Sigma Protocols are lightweight, composable, and don't require trusted setup. Unlike ZCash's heavy zkSNARKs or Monero's always-on privacy, they offer flexible, optional privacy that can be combined in creative ways." },
  { question: "What can you build with Sigma Protocols?", answer: "You can build threshold signatures, confidential voting systems, private DeFi applications, ring signatures, and any application requiring flexible privacy with selective disclosure capabilities." },
  { question: "Are Sigma Protocols secure?", answer: "Yes, Sigma Protocols are cryptographically secure and have been extensively studied in academic literature. They provide strong privacy guarantees while being computationally efficient." }
]

// HowTo Steps
const HOWTO_STEPS = [
  { name: "Learn the basics", text: "Start with simple analogies like bike locks and phone PINs to understand zero-knowledge proofs" },
  { name: "Understand composability", text: "Learn how Sigma Protocols work like Lego blocks that can be combined using AND/OR logic" },
  { name: "Compare technologies", text: "See how Sigma Protocols differ from other privacy technologies like ZCash and Monero" }
]

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return {
    title: SEO.title,
    description: SEO.description,
    keywords: SEO.keywords,
    authors: [{ name: "Privacy Team" }],
    creator: "Privacy Team",
    publisher: "Ergo Platform",
    alternates: getAlternates(PATH, locale),
    openGraph: {
      type: "article",
      url: getCanonicalUrl(PATH, locale),
      siteName: "Ergo Platform",
      title: SEO.title,
      description: SEO.description,
      images: [{ url: `${origin}${SEO.image}`, width: 1200, height: 630, alt: "Sigma Protocols Explained - Zero-Knowledge Privacy Made Simple" }],
      locale: "en_US",
      publishedTime: "2024-11-14T00:00:00Z",
      modifiedTime: new Date().toISOString(),
      authors: ["Privacy Team"],
      tags: ["Sigma Protocols", "Zero Knowledge", "Privacy", "Cryptography", "Beginner Guide"]
    },
    twitter: {
      card: "summary_large_image",
      title: SEO.title,
      description: SEO.description,
      images: [`${origin}${SEO.image}`],
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  }
}

export default function SigmaProtocolsExplainedPage() {
  const schemas = [
    createTechArticleSchema("/blog/sigma-protocols-explained", {
      headline: "Sigma Protocols Explained (Without A PhD)",
      description: SEO.description,
      image: SEO.image,
      datePublished: "2024-11-14",
      keywords: SEO.keywords,
      proficiencyLevel: "Beginner",
    }),
    createBreadcrumbSchema([
      { name: "Blog", href: "/blog" },
      { name: "Sigma Protocols Explained", href: "/blog/sigma-protocols-explained" },
    ], false),
    createFAQSchema(FAQ_ITEMS),
    createHowToSchema({
      name: "How to Understand Sigma Protocols Without Advanced Mathematics",
      description: "Step-by-step guide to learning Sigma Protocols through simple analogies and examples",
      steps: HOWTO_STEPS,
      totalTime: "PT10M",
    }),
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      <SigmaProtocolsExplainedClient />
    </>
  )
}
