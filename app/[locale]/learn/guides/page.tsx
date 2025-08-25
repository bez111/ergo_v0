import type { Metadata } from "next"
import GuidesClient from "./GuidesClient"
import { SchemaTypes } from "@/lib/schema-ultimate"
import { generateKnowledgeGraph } from "@/lib/entity-knowledge-graph"

export const metadata: Metadata = {
  title: "Ergo Technical Guides | DeFi, Mining & Development Tutorials",
  description: "In-depth technical guides for Ergo blockchain. Learn eUTXO model, consensus mechanisms, privacy features, oracle pools, and storage rent. Expert tutorials for developers.",
  keywords: ["ergo guides", "blockchain tutorials", "technical documentation", "defi guides", "mining tutorial", "developer guides", "ergo documentation", "crypto tutorials"],
  alternates: {
    canonical: "https://ergoblockchain.org/learn/guides"
  },
  openGraph: {
    title: "Ergo Technical Guides | Expert Blockchain Tutorials",
    description: "Deep dive into Ergo's technology with comprehensive guides and tutorials.",
    url: "https://ergoblockchain.org/learn/guides",
    siteName: "Ergo Platform",
    images: [{
      url: "https://ergoblockchain.org/og/guides.png",
      width: 1200,
      height: 630,
      alt: "Ergo Guides"
    }],
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ergo Technical Guides | Learn Blockchain",
    description: "Expert tutorials on eUTXO, consensus, privacy, and more.",
    images: ["https://ergoblockchain.org/og/guides.png"]
  }
}

export default function GuidesPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://ergoblockchain.org/learn/guides",
    name: "Ergo Technical Guides Collection",
    description: "Collection of technical guides and tutorials for Ergo blockchain",
    hasPart: [
      {
        "@type": "TechArticle",
        name: "eUTXO Model Guide",
        url: "https://ergoblockchain.org/learn/guides/eutxo"
      },
      {
        "@type": "TechArticle",
        name: "Consensus Protocol Guide",
        url: "https://ergoblockchain.org/learn/guides/consensus"
      },
      {
        "@type": "TechArticle",
        name: "Privacy Features Guide",
        url: "https://ergoblockchain.org/learn/guides/privacy-features"
      }
    ]
  }
  
  const faqSchema = SchemaTypes.FAQSchema([
    {
      question: "What technical guides are available?",
      answer: "We offer guides on eUTXO model, consensus mechanisms, privacy features, oracle pools, storage rent, ErgoScript, and more technical topics."
    },
    {
      question: "Are the guides suitable for beginners?",
      answer: "Guides range from beginner to advanced. Each guide indicates its difficulty level and prerequisites."
    },
    {
      question: "How often are guides updated?",
      answer: "Guides are regularly updated to reflect the latest Ergo developments and community feedback."
    }
  ])
  
  const knowledgeGraph = generateKnowledgeGraph('education')
  
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraph) }} />
      
      <GuidesClient />
    </>
  )
} 