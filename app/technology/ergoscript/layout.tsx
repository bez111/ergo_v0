import { Metadata } from "next"
import { SchemaTypes } from "@/lib/schema-ultimate"
import { generateKnowledgeGraph } from "@/lib/entity-knowledge-graph"

export const metadata: Metadata = {
  title: "ErgoScript - Secure Smart Contract Language | Ergo Platform",
  description: "Explore ErgoScript, a powerful smart contract language built for the eUTXO model. Features formal verification, re-entrancy protection, and advanced cryptographic primitives.",
  keywords: [
    "ErgoScript",
    "smart contract language",
    "eUTXO",
    "formal verification",
    "cryptography",
    "DeFi",
    "blockchain development",
    "sigma protocols",
    "blockchain programming",
    "secure contracts",
    "re-entrancy protection",
    "Ergo blockchain",
    "cryptocurrency development"
  ],
  openGraph: {
    title: "ErgoScript - Secure Smart Contract Language",
    description: "Explore ErgoScript, a powerful smart contract language built for the eUTXO model. Features formal verification, re-entrancy protection, and advanced cryptographic primitives.",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "ErgoScript - Secure Smart Contract Language",
    description: "Build secure, verifiable smart contracts. Eliminates re-entrancy attacks and enables formal verification.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://ergoblockchain.org/technology/ergoscript",
  },
}

export default function ErgoScriptLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // SEO схемы для ErgoScript
  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'ErgoScript Programming Course',
    description: 'Learn ErgoScript smart contract language for Ergo blockchain',
    provider: {
      '@type': 'Organization',
      name: 'Ergo Platform'
    }
  }
  
  const faqSchema = SchemaTypes.FAQSchema([
    {
      question: "What is ErgoScript?",
      answer: "ErgoScript is Ergo's smart contract language based on Sigma protocols. It enables powerful, flexible, and secure smart contracts while maintaining the benefits of the UTXO model."
    },
    {
      question: "Is ErgoScript similar to other smart contract languages?",
      answer: "ErgoScript is unique, combining functional programming with cryptographic protocols. It's more secure than Solidity, preventing reentrancy attacks by design."
    },
    {
      question: "How do I learn ErgoScript?",
      answer: "Start with the official tutorials, use the ErgoScript playground for practice, and reference the documentation. Basic Scala knowledge helps but isn't required."
    }
  ])
  
  const knowledgeGraph = generateKnowledgeGraph('technology')
  
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraph) }} />
      {children}
    </>
  )
} 