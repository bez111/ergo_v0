import type { Metadata } from 'next'
import { SchemaTypes } from '@/lib/schema-ultimate'
import { generateKnowledgeGraph } from '@/lib/entity-knowledge-graph'

export const metadata: Metadata = {
  title: 'Subblocks - Revolutionary Layer 1 Scaling | Ergo Blockchain',
  description: 'Revolutionary Layer 1 scaling solution providing sub-second transaction confirmations without sacrificing decentralization. Learn how subblocks enable 10x throughput increase with full backward compatibility.',
  keywords: ['subblocks', 'layer 1 scaling', 'blockchain scalability', 'instant finality', 'ergo technology', 'sub-second confirmations', 'parallel processing', 'blockchain throughput', 'decentralized scaling', 'ergo subblocks'],
  alternates: {
    canonical: 'https://ergoblockchain.org/technology/subblocks'
  },
  openGraph: {
    title: 'Subblocks - Sub-Second Confirmations on Layer 1',
    description: 'Revolutionary scaling without compromising security. Near-instant finality with full blockchain guarantees.',
    url: 'https://ergoblockchain.org/technology/subblocks',
    siteName: 'Ergo Platform',
    images: [{
      url: 'https://ergoblockchain.org/og/subblocks.png',
      width: 1200,
      height: 630,
      alt: 'Ergo Subblocks Technology'
    }],
    type: 'article',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Subblocks - Revolutionary Layer 1 Scaling',
    description: 'Sub-second confirmations without sacrificing decentralization. 10x throughput on Layer 1.',
    images: ['https://ergoblockchain.org/og/subblocks.png'],
    creator: '@ergoplatform',
    site: '@ergoplatform'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

export default function SubblocksLayout({ children }: { children: React.ReactNode }) {
  // SEO схемы для Subblocks
  const techArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Subblocks: Revolutionary Layer 1 Scaling Solution',
    description: 'Technical deep dive into Ergo\'s subblocks technology enabling sub-second confirmations',
    datePublished: '2024-01-01',
    dateModified: '2024-12-15',
    author: { '@type': 'Organization', name: 'Ergo Platform' },
    publisher: {
      '@type': 'Organization',
      name: 'Ergo Platform',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ergoblockchain.org/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://ergoblockchain.org/technology/subblocks'
    }
  }
  
  const faqSchema = SchemaTypes.FAQSchema([
    {
      question: "What are subblocks?",
      answer: "Subblocks are intermediate blocks between main blocks that provide faster confirmations while maintaining the same security model. They enable sub-second transaction finality without sacrificing decentralization."
    },
    {
      question: "How fast are subblock confirmations?",
      answer: "Subblocks provide confirmations in approximately 1 second, compared to the 2-minute main block time, enabling near-instant transaction finality for improved user experience."
    },
    {
      question: "Do subblocks require a hard fork?",
      answer: "No, subblocks are designed to be backward compatible. Existing infrastructure continues to work while new features are gradually adopted."
    },
    {
      question: "How do subblocks improve scalability?",
      answer: "Subblocks enable 10x throughput increase through parallel processing and more frequent block production while maintaining Layer 1 security guarantees."
    },
    {
      question: "Are subblocks secure?",
      answer: "Yes, subblocks maintain the same security model as main blocks with adjusted difficulty targets. They contribute to overall chain weight and are protected by the same PoW consensus."
    }
  ])
  
  const knowledgeGraph = generateKnowledgeGraph('technology')
  
  const speakableSchema = SchemaTypes.SpeakableSchema({
    headline: 'Subblocks Technology',
    summary: 'Subblocks enable sub-second transaction confirmations on Layer 1 without sacrificing security or decentralization',
    url: 'https://ergoblockchain.org/technology/subblocks'
  })
  
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraph) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      {children}
    </>
  )
} 