import type { Metadata } from "next"
import ErgoScriptClient from "./ErgoScriptClient"
import { SchemaTypes } from "@/lib/schema-ultimate"
import { generateKnowledgeGraph } from "@/lib/entity-knowledge-graph"

export const metadata: Metadata = {
  title: "Learn ErgoScript | Smart Contract Programming Tutorial",
  description: "Master ErgoScript programming language. Build secure smart contracts on Ergo blockchain with zero-knowledge proofs, multi-stage protocols, and advanced cryptography.",
  keywords: ["ergoscript tutorial", "smart contract programming", "blockchain development", "ergo coding", "defi development", "sigma protocols", "zero knowledge", "contract language"],
  alternates: {
    canonical: "https://ergoblockchain.org/learn/ergoscript"
  },
  openGraph: {
    title: "ErgoScript Programming Tutorial | Build on Ergo",
    description: "Complete guide to ErgoScript smart contract development. From basics to advanced DeFi.",
    url: "https://ergoblockchain.org/learn/ergoscript",
    siteName: "Ergo Platform",
    images: [{
      url: "https://ergoblockchain.org/og/ergoscript.png",
      width: 1200,
      height: 630,
      alt: "ErgoScript Tutorial"
    }],
    type: "article",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn ErgoScript | Smart Contract Development",
    description: "Build powerful DeFi applications with ErgoScript's advanced features.",
    images: ["https://ergoblockchain.org/og/ergoscript.png"]
  }
}

export default function ErgoScriptPage() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": "https://ergoblockchain.org/learn/ergoscript",
    name: "ErgoScript Programming Course",
    description: "Learn to build smart contracts with ErgoScript",
    provider: {
      "@type": "Organization",
      name: "Ergo Platform"
    },
    educationalLevel: "Intermediate",
    teaches: ["Smart Contracts", "Blockchain Programming", "ErgoScript", "DeFi Development"],
    timeRequired: "PT40H",
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Online",
      courseWorkload: "PT5H"
    }
  }
  
  const faqSchema = SchemaTypes.FAQSchema([
    {
      question: "What is ErgoScript?",
      answer: "ErgoScript is a powerful, protocol-friendly smart contract language based on Sigma protocols, enabling complex DeFi applications with built-in zero-knowledge proofs."
    },
    {
      question: "Is ErgoScript difficult to learn?",
      answer: "ErgoScript has a learning curve but offers powerful features. Developers familiar with functional programming will find it intuitive."
    },
    {
      question: "What can I build with ErgoScript?",
      answer: "DEXs, lending protocols, NFT marketplaces, DAOs, oracle pools, privacy tools, and any complex financial contract."
    }
  ])
  
  const knowledgeGraph = generateKnowledgeGraph('development')
  
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraph) }} />
      
      <ErgoScriptClient />
    </>
  )
} 