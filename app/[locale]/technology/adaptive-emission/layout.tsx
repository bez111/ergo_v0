import type { Metadata } from 'next'
import { SchemaTypes } from '@/lib/schema-ultimate'
import { generateKnowledgeGraph } from '@/lib/entity-knowledge-graph'

export const metadata: Metadata = {
  title: 'Adaptive Emission & Governance - Sustainable Economics | Ergo',
  description: 'Consensus-driven tuning of economic parameters with miner voting and community input. Learn how Ergo ensures long-term sustainability through adaptive emission and storage rent.',
  keywords: ['adaptive emission', 'blockchain governance', 'miner voting', 'economic parameters', 'sustainable blockchain', 'storage rent', 'ergo governance', 'emission schedule', 'consensus mechanism', 'economic sustainability'],
  alternates: {
    canonical: 'https://ergoblockchain.org/technology/adaptive-emission'
  },
  openGraph: {
    title: 'Adaptive Emission & Governance - Ergo Economics',
    description: 'Sustainable blockchain economics through consensus-driven parameter tuning and community governance.',
    url: 'https://ergoblockchain.org/technology/adaptive-emission',
    siteName: 'Ergo Platform',
    images: [{
      url: 'https://ergoblockchain.org/og/adaptive-emission.png',
      width: 1200,
      height: 630,
      alt: 'Ergo Adaptive Emission & Governance'
    }],
    type: 'article',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adaptive Emission & Governance',
    description: 'Emission ends 2057, 4.43% storage fee, 90% miner consensus. Sustainable blockchain economics.',
    images: ['https://ergoblockchain.org/og/adaptive-emission.png'],
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

export default function AdaptiveEmissionLayout({ children }: { children: React.ReactNode }) {
  const techArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Adaptive Emission & Governance: Sustainable Blockchain Economics',
    description: 'How Ergo implements adaptive emission schedules and governance mechanisms for long-term sustainability',
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
      '@id': 'https://ergoblockchain.org/technology/adaptive-emission'
    }
  }
  
  const faqSchema = SchemaTypes.FAQSchema([
    {
      question: "What is adaptive emission?",
      answer: "Adaptive emission allows economic parameters like block rewards and fees to be adjusted based on network conditions through miner voting, ensuring long-term sustainability without hard forks."
    },
    {
      question: "When does Ergo emission end?",
      answer: "Ergo's emission is scheduled to end around 2057, after which network security will be maintained through storage rent fees and transaction fees."
    },
    {
      question: "How does miner voting work?",
      answer: "Miners vote on parameter changes by including preferences in block headers over 1024 epochs (about 32 days). Changes require 90% consensus to activate."
    },
    {
      question: "What is storage rent?",
      answer: "Storage rent is a fee charged on UTXOs unspent for 4+ years, preventing state bloat and providing sustainable miner revenue after emission ends."
    },
    {
      question: "Can the maximum supply be changed?",
      answer: "No, core consensus rules like the 97.7M ERG maximum supply cap are immutable. Only certain economic parameters can be adjusted through governance."
    }
  ])
  
  const knowledgeGraph = generateKnowledgeGraph('technology')
  
  const governanceSchema = {
    '@context': 'https://schema.org',
    '@type': 'GovernmentService',
    name: 'Ergo Blockchain Governance',
    description: 'Decentralized governance through miner voting and community consensus',
    serviceType: 'Blockchain Governance',
    provider: {
      '@type': 'Organization',
      name: 'Ergo Network Miners'
    },
    areaServed: {
      '@type': 'Place',
      name: 'Global'
    }
  }
  
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraph) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(governanceSchema) }} />
      {children}
    </>
  )
} 