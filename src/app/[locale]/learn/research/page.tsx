import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import ResearchClient from "./ResearchClient"
import { createBreadcrumbSchema, createFAQSchema, getAlternates, getCanonicalUrl } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'learnResearch' })

  const title = `${t('title')} | Ergo`
  const description = t('description')

  return {
    title,
    description,
    keywords: ["blockchain research", "ergo papers", "academic publications", "cryptography research", "consensus algorithms", "distributed systems", "peer reviewed", "scientific papers"],
    alternates: getAlternates('/learn/research', locale),
    openGraph: {
      title,
      description,
      url: getCanonicalUrl('/learn/research', locale),
      siteName: "Ergo Platform",
      images: [{ url: "https://ergoblockchain.org/og/research.png", width: 1200, height: 630, alt: "Ergo Research Papers" }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://ergoblockchain.org/og/research.png"]
    }
  }
}

// FAQ Content
const FAQ_ITEMS = [
  { question: "What research topics does Ergo cover?", answer: "Ergo research covers consensus algorithms (Autolykos), cryptography (Sigma protocols), smart contracts (ErgoScript), storage rent economics, and NIPoPoWs." },
  { question: "Are Ergo papers peer-reviewed?", answer: "Yes, core Ergo research papers are peer-reviewed and published in academic conferences and journals." },
  { question: "Can I contribute to Ergo research?", answer: "Yes, Ergo welcomes academic collaboration. Contact the team if you're interested in blockchain research." }
]

export default function ResearchPage() {
  // ScholarlyArticle schema (special type, kept structured)
  const scholarlyArticleSchema = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "@id": "https://ergoblockchain.org/learn/research",
    name: "Ergo Research Collection",
    description: "Academic research collection on Ergo blockchain technology",
    author: { "@type": "Organization", name: "Ergo Research Team" },
    about: [
      { "@type": "Thing", name: "Blockchain" },
      { "@type": "Thing", name: "Cryptography" },
      { "@type": "Thing", name: "Consensus Algorithms" },
      { "@type": "Thing", name: "Smart Contracts" }
    ]
  }

  const schemas = [
    scholarlyArticleSchema,
    createBreadcrumbSchema([
      { name: "Learn", href: "/learn" },
      { name: "Research", href: "/learn/research" }
    ]),
    createFAQSchema(FAQ_ITEMS)
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      <ResearchClient />
    </>
  )
}
