import type { Metadata } from "next"
import IntroductionClient from "./IntroductionClient"
import { SchemaTypes } from "@/lib/schema-ultimate"
import { generateKnowledgeGraph } from "@/lib/entity-knowledge-graph"

export const metadata: Metadata = {
  title: "Introduction to Ergo | Beginner's Guide to Blockchain",
  description: "Complete introduction to Ergo blockchain. Learn the basics of smart contracts, DeFi, mining, and why Ergo is the future of programmable money. Perfect for beginners.",
  keywords: ["ergo introduction", "blockchain basics", "ergo tutorial", "crypto beginner", "learn blockchain", "ergo guide", "defi introduction", "smart contracts basics"],
  alternates: {
    canonical: "https://ergoblockchain.org/start/introduction"
  },
  openGraph: {
    title: "Introduction to Ergo - Start Your Blockchain Journey",
    description: "Beginner-friendly guide to understanding Ergo blockchain, its technology, and ecosystem.",
    url: "https://ergoblockchain.org/start/introduction",
    siteName: "Ergo Platform",
    images: [{
      url: "https://ergoblockchain.org/og/introduction.png",
      width: 1200,
      height: 630,
      alt: "Ergo Introduction"
    }],
    type: "article",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Introduction to Ergo Blockchain",
    description: "Learn the fundamentals of Ergo - the future of programmable money.",
    images: ["https://ergoblockchain.org/og/introduction.png"]
  }
}

export default function IntroductionPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://ergoblockchain.org/start/introduction",
    headline: "Introduction to Ergo Blockchain",
    description: "Comprehensive guide for beginners to understand Ergo",
    author: {
      "@type": "Organization",
      name: "Ergo Platform"
    },
    publisher: {
      "@type": "Organization",
      name: "Ergo Platform",
      logo: {
        "@type": "ImageObject",
        url: "https://ergoblockchain.org/logo.png"
      }
    },
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString()
  }
  
  const learningResourceSchema = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: "Ergo Blockchain Introduction",
    description: "Educational resource for learning Ergo blockchain fundamentals",
    learningResourceType: "Presentation",
    educationalLevel: "Beginner",
    teaches: ["Blockchain", "Smart Contracts", "DeFi", "Cryptocurrency"],
    timeRequired: "PT30M"
  }
  
  const knowledgeGraph = generateKnowledgeGraph('education')
  
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(learningResourceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraph) }} />
      
      <IntroductionClient />
    </>
  )
} 