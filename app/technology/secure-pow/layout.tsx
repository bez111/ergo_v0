import { Metadata } from "next"
import { SchemaTypes } from "@/lib/schema-ultimate"
import { generateKnowledgeGraph } from "@/lib/entity-knowledge-graph"

export const metadata: Metadata = {
  title: "Autolykos v2: ASIC-Resistant, GPU-Friendly PoW | Ergo",
  description:
    "Ergo uses Autolykos v2 — a memory-hard, GPU-friendly Proof-of-Work that keeps mining decentralized and accessible. Learn how to start mining and why it matters.",
  alternates: { canonical: "https://ergoblockchain.org/technology/secure-pow" },
  openGraph: {
    type: "article",
    url: "https://ergoblockchain.org/technology/secure-pow",
    title: "Autolykos v2 — Secure Proof-of-Work",
    description: "Memory-hard PoW, ASIC-resistant (not ASIC-proof), GPU-friendly.",
    images: [
      { url: "https://ergoblockchain.org/og/secure-pow.png", width: 1200, height: 630 },
    ],
  },
  twitter: { card: "summary_large_image" },
}

export default function SecurePowLayout({ children }: { children: React.ReactNode }) {
  // SEO схемы для Autolykos
  const techArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Autolykos v2: ASIC-Resistant Proof-of-Work',
    description: 'Technical overview of Ergo\'s memory-hard PoW algorithm',
    author: { '@type': 'Organization', name: 'Ergo Platform' }
  }
  
  const faqSchema = SchemaTypes.FAQSchema([
    {
      question: "What is Autolykos?",
      answer: "Autolykos v2 is Ergo's memory-hard Proof-of-Work algorithm designed to be ASIC-resistant and GPU-friendly, keeping mining decentralized."
    },
    {
      question: "Why is Autolykos ASIC-resistant?",
      answer: "Autolykos requires significant memory bandwidth making ASIC development economically unviable while remaining efficient on consumer GPUs."
    },
    {
      question: "How energy efficient is Autolykos?",
      answer: "Autolykos is more energy-efficient than Bitcoin's SHA-256, requiring less electricity per hash while maintaining security."
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