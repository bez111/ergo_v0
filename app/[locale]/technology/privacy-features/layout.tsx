import { Metadata } from "next"
import { SchemaTypes } from "@/lib/schema-ultimate"
import { generateKnowledgeGraph } from "@/lib/entity-knowledge-graph"

export const metadata: Metadata = {
  title: "Ergo Privacy Features | Zero-Knowledge Proofs & Confidential Transactions",
  description: "Built-in privacy technology: Sigma protocols for zero-knowledge proofs, ErgoMixer for anonymous transactions, ring signatures, and confidential DeFi. No trusted setup required.",
  alternates: { canonical: "https://ergoblockchain.org/technology/privacy-features" },
  openGraph: {
    type: "article",
    title: "Ergo Privacy Technology | Optional Confidentiality for DeFi",
    description: "Native zero-knowledge proofs, mixer protocols, and confidential assets built into Ergo blockchain.",
    url: "https://ergoblockchain.org/technology/privacy-features",
    images: [{ url: "https://ergoblockchain.org/og/privacy.png" }],
  },
  twitter: { 
    card: "summary_large_image",
    title: "Ergo Privacy Features | ZK Proofs Without Trusted Setup",
    description: "Optional privacy for all transactions using Sigma protocols and ErgoMixer."
  },
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  // SEO схемы для Privacy Features
  const techArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Ergo Privacy Features: Sigma Protocols and Zero-Knowledge Proofs',
    description: 'Complete guide to privacy features on Ergo blockchain',
    author: { '@type': 'Organization', name: 'Ergo Platform' }
  }
  
  const faqSchema = SchemaTypes.FAQSchema([
    {
      question: "How does Ergo implement privacy?",
      answer: "Ergo uses Sigma protocols for zero-knowledge proofs, enabling optional privacy features like ErgoMixer, ring signatures, and confidential transactions without trusted setup."
    },
    {
      question: "Is Ergo a privacy coin?",
      answer: "Ergo offers optional privacy. Users can choose transparent or confidential transactions. Privacy is a feature, not mandatory, maintaining regulatory compliance."
    },
    {
      question: "What is ErgoMixer?",
      answer: "ErgoMixer is a non-custodial, trustless mixing protocol that breaks transaction links using Sigma protocols, providing strong privacy without centralized operators."
    }
  ])
  
  const knowledgeGraph = generateKnowledgeGraph('technology')
  
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraph) }} />
      {children}
    </>
  )
} 