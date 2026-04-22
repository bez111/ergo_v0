import type { Metadata } from "next"
import { SigmaProtocolsClient } from "./SigmaProtocolsClient"
import { siteConfig } from "@/config/site-config"
import { createBreadcrumbSchema, createFAQSchema, createTechArticleSchema, getAlternates, getCanonicalUrl } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

const origin = siteConfig.siteUrl
const PATH = "/blog/sigma-protocols-privacy"

// SEO Configuration
const SEO = {
  title: "Ergo And Sigma Protocols: The Next Step In Blockchain Privacy",
  description: "As first-gen privacy coins see a resurgence of activity, Ergo's composable zero-knowledge signatures offer new options for compliant confidentiality.",
  image: "/og/sigma-protocols-privacy.png",
  keywords: [
    "sigma protocols", "blockchain privacy", "zero knowledge proofs",
    "ergo privacy", "privacy coins", "confidential transactions",
    "zkp", "monero zcash comparison", "compliant privacy"
  ],
}

// FAQ Content
const FAQ_ITEMS = [
  { question: "What are Sigma Protocols?", answer: "Sigma Protocols are a class of composable zero-knowledge proofs that allow users to prove mathematical statements without revealing underlying information. They enable flexible, programmable privacy on Ergo." },
  { question: "How do Sigma Protocols differ from ZCash's zkSNARKs?", answer: "Unlike zkSNARKs, Sigma Protocols don't require trusted setup, are more computationally efficient, and offer greater composability for complex privacy applications and DeFi use cases." },
  { question: "Is privacy always-on like Monero?", answer: "No, Ergo's privacy is optional and programmable. Users can choose when to use privacy features, enabling compliance and auditability when needed while maintaining confidentiality when desired." },
  { question: "Can Sigma Protocols be used for DeFi applications?", answer: "Yes, Sigma Protocols can be applied to any transaction type, making them ideal for confidential DeFi, private voting, and other complex dApps beyond simple transfers." },
  { question: "What makes Ergo's privacy model compliant?", answer: "Ergo's optional privacy allows users to selectively reveal information for compliance purposes. Users can prove ownership and transaction history when required while maintaining privacy in other contexts." },
  { question: "How do Sigma Protocols compare to ring signatures?", answer: "Sigma Protocols can implement ring signatures and much more. They're more flexible and composable, allowing for complex privacy conditions like threshold signatures and programmable disclosure rules." }
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

export default function SigmaProtocolsPage() {
  const schemas = [
    createTechArticleSchema("/blog/sigma-protocols-privacy", {
      headline: SEO.title,
      description: SEO.description,
      image: SEO.image,
      datePublished: "2024-11-14",
      keywords: SEO.keywords,
      proficiencyLevel: "Intermediate",
    }),
    createBreadcrumbSchema([
      { name: "Blog", href: "/blog" },
      { name: "Sigma Protocols Privacy", href: "/blog/sigma-protocols-privacy" },
    ], false),
    createFAQSchema(FAQ_ITEMS),
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      <SigmaProtocolsClient />
    </>
  )
}
