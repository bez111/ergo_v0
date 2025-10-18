import type { Metadata } from 'next'
import { SchemaTypes } from '@/lib/schema-ultimate'
import { generateKnowledgeGraph } from '@/lib/entity-knowledge-graph'

export const metadata: Metadata = {
  title: 'Velvet Forks - Evolution Without Revolution | Ergo Blockchain',
  description: 'Optional, backward-compatible protocol extensions. New features can coexist with non-upgraded nodes. Learn how velvet forks enable gradual blockchain evolution without forced upgrades.',
  keywords: ['velvet forks', 'soft forks', 'blockchain upgrades', 'backward compatibility', 'protocol evolution', 'optional upgrades', 'blockchain governance', 'ergo velvet forks', 'gradual adoption', 'consensus changes'],
  alternates: {
    canonical: 'https://ergoblockchain.org/technology/velvet-forks'
  },
  openGraph: {
    title: 'Velvet Forks - Blockchain Evolution Without Drama',
    description: 'Optional protocol extensions with zero forced upgrades. New features without breaking existing infrastructure.',
    url: 'https://ergoblockchain.org/technology/velvet-forks',
    siteName: 'Ergo Platform',
    images: [{
      url: 'https://ergoblockchain.org/og/velvet-forks.png',
      width: 1200,
      height: 630,
      alt: 'Ergo Velvet Forks Technology'
    }],
    type: 'article',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Velvet Forks - Evolution Without Revolution',
    description: '100% backward compatible, 0 forced upgrades, infinite extension possibilities.',
    images: ['https://ergoblockchain.org/og/velvet-forks.png'],
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

export default function VelvetForksLayout({ children }: { children: React.ReactNode }) {
  const techArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Velvet Forks: Optional Blockchain Protocol Extensions',
    description: 'Academic research and implementation of velvet forks for gradual blockchain evolution',
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
      '@id': 'https://ergoblockchain.org/technology/velvet-forks'
    }
  }
  
  const faqSchema = SchemaTypes.FAQSchema([
    {
      question: "What is a velvet fork?",
      answer: "A velvet fork is a protocol upgrade mechanism that allows new features to be added without requiring all nodes to upgrade. It combines the best aspects of soft and hard forks while maintaining full backward compatibility."
    },
    {
      question: "How are velvet forks different from hard forks?",
      answer: "Unlike hard forks that require all nodes to upgrade and risk chain splits, velvet forks allow optional adoption. Old nodes continue to validate blocks while new features are gradually adopted."
    },
    {
      question: "Do velvet forks require majority consensus?",
      answer: "No, velvet forks don't require majority adoption to activate. Features can be used by those who want them while the network continues functioning normally for all participants."
    },
    {
      question: "What can be implemented with velvet forks?",
      answer: "Velvet forks can implement NIPoPoWs, privacy enhancements, new opcodes, consensus improvements, and other protocol extensions without disrupting existing infrastructure."
    },
    {
      question: "Are velvet forks secure?",
      answer: "Yes, velvet forks are based on rigorous academic research ensuring security and viability. They use extension blocks and commitment schemes to maintain compatibility while adding features."
    }
  ])
  
  const knowledgeGraph = generateKnowledgeGraph('technology')
  
  const researchSchema = {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    headline: 'Velvet Forks: Inclusive Blockchain Protocol Changes',
    author: [
      { '@type': 'Person', name: 'Aggelos Kiayias' },
      { '@type': 'Person', name: 'Dionysis Zindros' }
    ],
    publisher: {
      '@type': 'Organization',
      name: 'IACR ePrint Archive'
    },
    url: 'https://eprint.iacr.org/2018/087.pdf',
    description: 'Academic paper introducing velvet forks for blockchain protocol upgrades'
  }
  
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraph) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(researchSchema) }} />
      {children}
    </>
  )
} 