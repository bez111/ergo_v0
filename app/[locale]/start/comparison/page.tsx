import type { Metadata } from "next"
import ComparisonClient from "./ComparisonClient"
import { SchemaTypes } from "@/lib/schema-ultimate"
import { generateKnowledgeGraph } from "@/lib/entity-knowledge-graph"

export const metadata: Metadata = {
  title: "Ergo vs Bitcoin, Ethereum & Cardano | Blockchain Comparison",
  description: "Compare Ergo with Bitcoin, Ethereum, and Cardano. Technical specs, consensus mechanisms, smart contracts, scalability, and unique features side-by-side comparison.",
  keywords: ["ergo vs bitcoin", "ergo vs ethereum", "blockchain comparison", "ergo vs cardano", "cryptocurrency comparison", "smart contract platforms", "blockchain features", "defi platforms"],
  alternates: {
    canonical: "https://ergoblockchain.org/start/comparison"
  },
  openGraph: {
    title: "Compare Ergo with Leading Blockchains",
    description: "Technical comparison of Ergo vs Bitcoin, Ethereum, Cardano. See why Ergo stands out.",
    url: "https://ergoblockchain.org/start/comparison",
    siteName: "Ergo Platform",
    images: [{
      url: "https://ergoblockchain.org/og/comparison.png",
      width: 1200,
      height: 630,
      alt: "Blockchain Comparison"
    }],
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ergo vs Bitcoin, Ethereum, Cardano",
    description: "Complete technical comparison of leading blockchain platforms.",
    images: ["https://ergoblockchain.org/og/comparison.png"],
    creator: "@ergoplatform",
    site: "@ergoplatform"
  }
}

export default function ComparisonPage() {
  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://ergoblockchain.org/start/comparison",
    name: "Blockchain Platform Comparison",
    description: "Technical comparison of Ergo with other blockchain platforms"
  }
  
  const faqSchema = SchemaTypes.FAQSchema([
    {
      question: "How is Ergo different from Bitcoin?",
      answer: "While sharing Bitcoin's UTXO model and PoW consensus, Ergo adds smart contracts, storage rent, and NIPoPoWs for advanced functionality."
    },
    {
      question: "What advantages does Ergo have over Ethereum?",
      answer: "Ergo offers predictable fees, no reentrancy attacks, parallel transaction processing, and energy-efficient PoW mining."
    },
    {
      question: "How does Ergo compare to Cardano?",
      answer: "Both use eUTXO, but Ergo has PoW consensus, storage rent, and no VC funding, making it more decentralized and sustainable."
    }
  ])
  
  const knowledgeGraph = generateKnowledgeGraph('comparison')
  
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraph) }} />
      
      <ComparisonClient />
    </>
  )
} 