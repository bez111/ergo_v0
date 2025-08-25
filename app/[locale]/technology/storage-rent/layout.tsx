import { Metadata } from "next"
import { SchemaTypes } from "@/lib/schema-ultimate"
import { generateKnowledgeGraph } from "@/lib/entity-knowledge-graph"

export const metadata: Metadata = {
  title: "Storage Rent Explained | Sustainable Blockchain Economics on Ergo",
  description:
    "Revolutionary economic model solving blockchain bloat forever. Learn how Storage Rent ensures sustainable blockchain size, perpetual miner rewards, and efficient resource usage.",
  alternates: { canonical: "https://ergoblockchain.org/technology/storage-rent" },
  openGraph: {
    type: "article",
    title: "Storage Rent | The Solution to Blockchain Sustainability",
    description: "How Ergo prevents blockchain bloat while ensuring perpetual network security through Storage Rent.",
    url: "https://ergoblockchain.org/technology/storage-rent",
    images: [{ url: "https://ergoblockchain.org/og/storage-rent.png" }],
  },
  twitter: { 
    card: "summary_large_image",
    title: "Storage Rent | Solving Blockchain Bloat Forever",
    description: "Sustainable economics: automatic cleanup, perpetual miner rewards, efficient blockchain."
  },
}

export default function StorageRentLayout({ children }: { children: React.ReactNode }) {
  // SEO схемы для Storage Rent
  const techArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Storage Rent: Sustainable Blockchain Economics',
    description: 'How Storage Rent solves blockchain bloat and ensures long-term sustainability',
    author: { '@type': 'Organization', name: 'Ergo Platform' }
  }
  
  const faqSchema = SchemaTypes.FAQSchema([
    {
      question: "What is Storage Rent?",
      answer: "Storage Rent is a mechanism where unused coins pay a minimal fee after 4 years of inactivity, preventing blockchain bloat and providing permanent miner rewards beyond emission."
    },
    {
      question: "How much does Storage Rent cost?",
      answer: "Storage Rent costs approximately 0.14 ERG per UTXO every 4 years. Active users never pay rent as any transaction resets the timer."
    },
    {
      question: "Why is Storage Rent important?",
      answer: "Storage Rent ensures blockchain sustainability by preventing unlimited growth, keeping the network lightweight, and providing perpetual security through miner rewards after emission ends."
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