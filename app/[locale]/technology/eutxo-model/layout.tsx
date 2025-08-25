import { Metadata } from "next"
import { SchemaTypes } from "@/lib/schema-ultimate"
import { generateKnowledgeGraph } from "@/lib/entity-knowledge-graph"

export const metadata: Metadata = {
  title: "eUTXO Model Explained | Parallel Smart Contracts Without Reentrancy",
  description: "Master the eUTXO model powering Ergo's DeFi ecosystem. Build composable smart contracts with parallel execution, no reentrancy attacks, and Bitcoin-level security. Complete developer guide.",
  keywords: [
    "eUTXO",
    "Extended UTXO",
    "smart contracts",
    "blockchain technology",
    "DeFi",
    "parallel processing",
    "re-entrancy protection",
    "Ergo blockchain",
    "UTXO model",
    "cryptocurrency"
  ],
  openGraph: {
    title: "eUTXO Model - Extended UTXO for Smart Contracts",
    description: "Discover the eUTXO model, a secure and scalable approach to smart contracts. Learn how Ergo's extended UTXO model prevents re-entrancy attacks and enables complex DeFi applications.",
    type: "website",
    images: ["/og-image.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    title: "eUTXO Model - Secure Smart Contracts",
    description: "Parallel, secure smart contracts without re-entrancy attacks. The future of DeFi.",
    images: ["/og-image.jpg"]
  },
  alternates: {
    canonical: "https://ergoblockchain.org/technology/eutxo-model",
  },
}

export default function EUTXOLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // SEO схемы для eUTXO
  const techArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'eUTXO Model: Extended UTXO for Smart Contracts',
    description: 'Technical guide to the eUTXO model and its advantages for DeFi',
    author: { '@type': 'Organization', name: 'Ergo Platform' }
  }
  
  const faqSchema = SchemaTypes.FAQSchema([
    {
      question: "What is the eUTXO model?",
      answer: "The eUTXO (Extended UTXO) model combines Bitcoin's UTXO security with smart contract capabilities, enabling parallel execution and eliminating reentrancy attacks."
    },
    {
      question: "How is eUTXO different from Ethereum's account model?",
      answer: "Unlike Ethereum's global state, eUTXO uses independent transaction outputs that can be processed in parallel, preventing common vulnerabilities and improving scalability."
    },
    {
      question: "Why is eUTXO better for DeFi?",
      answer: "eUTXO enables composable, predictable smart contracts with deterministic fees, no front-running, and parallel transaction processing for better throughput."
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