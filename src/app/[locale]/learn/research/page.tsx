import type { Metadata } from "next"
import ResearchClient from "./ResearchClient"
import { createBreadcrumbSchema, createFAQSchema } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

export const metadata: Metadata = {
  title: "Ergo Research Papers | Blockchain Academic Publications",
  description: "Academic research papers on Ergo blockchain. Peer-reviewed publications on consensus algorithms, cryptography, smart contracts, and distributed systems.",
  keywords: ["blockchain research", "ergo papers", "academic publications", "cryptography research", "consensus algorithms", "distributed systems", "peer reviewed", "scientific papers"],
  alternates: { canonical: "https://ergoblockchain.org/learn/research" },
  openGraph: {
    title: "Ergo Research | Academic Blockchain Papers",
    description: "Peer-reviewed research publications on Ergo's innovative blockchain technology.",
    url: "https://ergoblockchain.org/learn/research",
    siteName: "Ergo Platform",
    images: [{ url: "https://ergoblockchain.org/og/research.png", width: 1200, height: 630, alt: "Ergo Research" }],
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ergo Research Papers | Academic Publications",
    description: "Scientific research on blockchain consensus, cryptography, and smart contracts.",
    images: ["https://ergoblockchain.org/og/research.png"]
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
    name: "Ergo Platform Research Collection",
    description: "Collection of academic research papers on Ergo blockchain technology",
    author: { "@type": "Organization", name: "Ergo Research Team" },
    publisher: { "@type": "Organization", name: "Ergo Platform" },
    about: ["Blockchain", "Cryptography", "Consensus Algorithms", "Smart Contracts"]
  }
  
  const schemas = [
    scholarlyArticleSchema,
    createBreadcrumbSchema([
      { name: "Learn", href: "/learn" },
      { name: "Research", href: "/learn/research" },
    ]),
    createFAQSchema(FAQ_ITEMS),
  ]
  
  return (
    <>
      {renderSchemaScripts(schemas)}
      <ResearchClient />
    </>
  )
}
