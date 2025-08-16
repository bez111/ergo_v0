import type { Metadata } from 'next'
import { SchemaTypes } from '@/lib/schema-ultimate'
import { generateKnowledgeGraph } from '@/lib/entity-knowledge-graph'

export const metadata: Metadata = {
  title: 'Oracle Pools - Decentralized Price Feeds | Ergo Blockchain',
  description: 'Decentralized price feeds and data oracles built into Ergo protocol. No single point of failure, no centralized operators - just reliable, composable data for DeFi applications.',
  keywords: ['oracle pools', 'price feeds', 'decentralized oracles', 'DeFi infrastructure', 'blockchain oracles', 'price data', 'consensus mechanism', 'ergo oracles', 'data providers', 'oracle network'],
  alternates: {
    canonical: 'https://ergoblockchain.org/technology/oracle-pools'
  },
  openGraph: {
    title: 'Oracle Pools - Decentralized Data for DeFi',
    description: 'Reliable price feeds with consensus-based aggregation. No central authority, fully decentralized oracle network.',
    url: 'https://ergoblockchain.org/technology/oracle-pools',
    siteName: 'Ergo Platform',
    images: [{
      url: 'https://ergoblockchain.org/og/oracle-pools.png',
      width: 1200,
      height: 630,
      alt: 'Ergo Oracle Pools'
    }],
    type: 'article',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oracle Pools - Decentralized Price Feeds',
    description: '99.9% uptime, 14+ data providers, 5-min updates. Reliable oracle data for DeFi.',
    images: ['https://ergoblockchain.org/og/oracle-pools.png'],
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

export default function OraclePoolsLayout({ children }: { children: React.ReactNode }) {
  const techArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Oracle Pools: Decentralized Price Feeds for DeFi',
    description: 'Technical architecture and implementation of Ergo\'s decentralized oracle pool system',
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
      '@id': 'https://ergoblockchain.org/technology/oracle-pools'
    }
  }
  
  const faqSchema = SchemaTypes.FAQSchema([
    {
      question: "What are Oracle Pools?",
      answer: "Oracle Pools are decentralized networks of data providers that aggregate external data (like price feeds) for use in smart contracts, using consensus mechanisms to ensure accuracy and reliability."
    },
    {
      question: "How reliable are Ergo Oracle Pools?",
      answer: "Ergo Oracle Pools maintain 99.9% uptime with 14+ independent data providers. The consensus mechanism filters outliers and ensures manipulation-resistant data."
    },
    {
      question: "How often do oracles update?",
      answer: "Oracle pools update every 5 minutes for major pairs like ERG/USD, or when price deviation exceeds 0.5%, ensuring data freshness for DeFi applications."
    },
    {
      question: "Can anyone become an oracle provider?",
      answer: "Yes, anyone can run an oracle node and contribute data to the pools. Providers stake ERG as collateral and earn rewards for honest participation."
    },
    {
      question: "How do smart contracts access oracle data?",
      answer: "Smart contracts can read oracle data as simple data inputs without complex integration. The data is automatically validated and available on-chain."
    }
  ])
  
  const knowledgeGraph = generateKnowledgeGraph('technology')
  
  const dataFeedSchema = {
    '@context': 'https://schema.org',
    '@type': 'DataFeed',
    name: 'Ergo Oracle Price Feeds',
    description: 'Real-time cryptocurrency price data from decentralized oracle network',
    provider: {
      '@type': 'Organization',
      name: 'Ergo Oracle Pools'
    },
    dataFeedElement: [
      {
        '@type': 'DataFeedItem',
        name: 'ERG/USD',
        description: 'Ergo to USD price feed'
      },
      {
        '@type': 'DataFeedItem',
        name: 'ADA/USD',
        description: 'Cardano to USD price feed'
      },
      {
        '@type': 'DataFeedItem',
        name: 'BTC/USD',
        description: 'Bitcoin to USD price feed'
      }
    ]
  }
  
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraph) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dataFeedSchema) }} />
      {children}
    </>
  )
} 