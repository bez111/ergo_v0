import { Metadata } from "next"
import { SchemaTypes } from "@/lib/schema-ultimate"
import { generateKnowledgeGraph } from "@/lib/entity-knowledge-graph"

export const metadata: Metadata = {
  title: "NIPoPoWs Technology | Ultra-Light Clients & Trustless Bridges on Ergo",
  description:
    "Revolutionary blockchain compression technology enabling instant mobile wallet sync and trustless cross-chain bridges. Sync Ergo in seconds with cryptographic security guarantees.",
  alternates: { canonical: "https://ergoblockchain.org/technology/nipopows" },
  openGraph: {
    title: "NIPoPoWs — Light Clients & Cross-Chain | Ergo",
    description: "Verify Ergo on mobile/web with compact PoW proofs.",
    url: "https://ergoblockchain.org/technology/nipopows",
    images: ["/og/nipopows.png"],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "NIPoPoWs — Light Clients & Cross-Chain | Ergo",
    description: "Verify Ergo on mobile/web with compact PoW proofs.",
    images: ["/og/nipopows.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function NIPoPoWsLayout({ children }: { children: React.ReactNode }) {
  // SEO схемы для NIPoPoWs
  const techArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'NIPoPoWs: Non-Interactive Proofs of Proof-of-Work',
    description: 'How NIPoPoWs enable ultra-light clients and trustless bridges',
    author: { '@type': 'Organization', name: 'Ergo Platform' }
  }
  
  const faqSchema = SchemaTypes.FAQSchema([
    {
      question: "What are NIPoPoWs?",
      answer: "NIPoPoWs (Non-Interactive Proofs of Proof-of-Work) are cryptographic proofs that compress blockchain history into tiny proofs, enabling instant sync for mobile wallets and trustless bridges."
    },
    {
      question: "How fast can NIPoPoWs sync a wallet?",
      answer: "NIPoPoWs enable wallet synchronization in seconds instead of hours, using proofs that are kilobytes instead of gigabytes of blockchain data."
    },
    {
      question: "Are NIPoPoWs secure?",
      answer: "Yes, NIPoPoWs provide the same cryptographic security guarantees as full nodes while requiring minimal data, verified through mathematical proofs."
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