import type { Metadata } from 'next'
import * as React from 'react'
import { SchemaTypes } from '@/lib/schema-ultimate'
import { generateKnowledgeGraph } from '@/lib/entity-knowledge-graph'

export const metadata: Metadata = {
  title: 'Native Tokens & NFTs - First-Class Assets | Ergo Blockchain',
  description: 'Create and trade tokens and NFTs directly at the protocol level. No smart contracts needed - just simple, secure, and cost-effective native assets on Ergo blockchain.',
  keywords: ['native tokens', 'NFTs', 'blockchain assets', 'ergo tokens', 'token creation', 'non-fungible tokens', 'protocol-level assets', 'token issuance', 'ergo NFTs', 'digital assets'],
  authors: [{ name: 'Ergo Platform' }],
  creator: 'Ergo Platform',
  publisher: 'Ergo Platform',
  alternates: {
    canonical: 'https://ergoblockchain.org/technology/native-tokens'
  },
  openGraph: {
    title: 'Native Tokens & NFTs on Ergo - Protocol-Level Assets',
    description: 'Issue tokens and NFTs in one transaction. First-class assets with protocol security, no smart contracts required.',
    url: 'https://ergoblockchain.org/technology/native-tokens',
    siteName: 'Ergo Platform',
    images: [{
      url: 'https://ergoblockchain.org/og/native-tokens.png',
      width: 1200,
      height: 630,
      alt: 'Ergo Native Tokens & NFTs'
    }],
    type: 'article',
    locale: 'en_US',
    publishedTime: '2024-01-01T00:00:00.000Z',
    modifiedTime: '2024-12-15T00:00:00.000Z',
    authors: ['Ergo Platform'],
    section: 'Technology',
    tags: ['Native Tokens', 'NFTs', 'Blockchain', 'Ergo']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Native Tokens & NFTs - First-Class Ergo Assets',
    description: 'Create tokens & NFTs at protocol level. One-click creation, ~$0.01 cost, 100% secure.',
    images: ['https://ergoblockchain.org/og/native-tokens.png'],
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
  },
  other: {
    'article:author': 'Ergo Platform',
    'article:published_time': '2024-01-01T00:00:00.000Z',
    'article:modified_time': '2024-12-15T00:00:00.000Z',
    'article:section': 'Technology',
    'article:tag': ['Native Tokens', 'NFTs', 'Blockchain', 'Ergo'],
    'og:updated_time': '2024-12-15T00:00:00.000Z'
  }
}

const NativeTokensLayout = ({ children }: { children: React.ReactNode }) => {
  // Оптимизированная генерация всех схем
  const combinedSchema = React.useMemo(() => {
    const techArticleSchema = {
      '@type': 'TechArticle',
      headline: 'Native Tokens & NFTs: First-Class Assets on Ergo',
      description: 'Comprehensive guide to creating and managing native tokens and NFTs on Ergo blockchain',
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
        '@id': 'https://ergoblockchain.org/technology/native-tokens'
      },
      about: [
        { '@type': 'Thing', name: 'Native Tokens' },
        { '@type': 'Thing', name: 'NFTs' },
        { '@type': 'Thing', name: 'Blockchain Assets' }
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Ergo Blockchain' },
        { '@type': 'Technology', name: 'eUTXO Model' }
      ]
    }

    const faqSchema = SchemaTypes.FAQSchema([
      {
        question: "What are native tokens on Ergo?",
        answer: "Native tokens are first-class assets on Ergo that can be created and traded directly at the protocol level without smart contracts. They have the same security guarantees as ERG itself."
      },
      {
        question: "How much does it cost to create a token on Ergo?",
        answer: "Creating a token on Ergo costs approximately $0.01 in transaction fees. This is significantly cheaper than other blockchains that require smart contract deployment."
      },
      {
        question: "Can I create NFTs on Ergo?",
        answer: "Yes, NFTs are created as native tokens with a supply of 1. They support rich metadata including images, descriptions, and custom properties stored on IPFS."
      },
      {
        question: "Do I need to code to create tokens?",
        answer: "No, you can create tokens using simple UI tools or with just a few lines of code. The process is as simple as sending a transaction with token parameters."
      },
      {
        question: "Are native tokens compatible with DeFi?",
        answer: "Yes, native tokens have full DeFi compatibility and can be used in all Ergo applications and protocols without special integration requirements."
      }
    ])

    const knowledgeGraph = generateKnowledgeGraph('technology')

    const howToSchema = {
      '@type': 'HowTo',
      name: 'How to Create Native Tokens on Ergo',
      description: 'Step-by-step guide to creating tokens on Ergo blockchain',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Define Token Parameters',
          text: 'Set token name, description, amount, and decimals',
          position: 1
        },
        {
          '@type': 'HowToStep',
          name: 'Create Transaction',
          text: 'Build a minting transaction with token parameters',
          position: 2
        },
        {
          '@type': 'HowToStep',
          name: 'Submit to Network',
          text: 'Send the transaction to create your token instantly',
          position: 3
        }
      ],
      totalTime: 'PT5M',
      estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: 'USD',
        value: '0.01'
      }
    }

    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://ergoblockchain.org/technology/native-tokens",
          "url": "https://ergoblockchain.org/technology/native-tokens",
          "name": "Native Tokens & NFTs - First-Class Assets | Ergo Blockchain",
          "description": "Create and trade tokens and NFTs directly at the protocol level",
          "isPartOf": {
            "@type": "WebSite",
            "@id": "https://ergoblockchain.org/#website",
            "name": "Ergo Platform",
            "url": "https://ergoblockchain.org"
          },
          "primaryImageOfPage": {
            "@type": "ImageObject",
            "url": "https://ergoblockchain.org/og/native-tokens.png",
            "width": 1200,
            "height": 630
          },
          "datePublished": "2024-01-01",
          "dateModified": "2024-12-15"
        },
        techArticleSchema,
        faqSchema,
        knowledgeGraph,
        howToSchema
      ]
    }
  }, [])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />
      {children}
    </>
  )
}

// React.memo предотвращает лишние ререндеры
export default React.memo(NativeTokensLayout)
