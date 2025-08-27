import type { Metadata } from 'next'
import TechnologyClient from './TechnologyClient'
import { SchemaTypes } from '@/lib/schema-ultimate'
import { generateKnowledgeGraph } from '@/lib/entity-knowledge-graph'
import { targetQuestions } from '@/lib/featured-snippets-optimizer'

export const metadata: Metadata = {
  title: 'Ergo Blockchain Technology | eUTXO Smart Contracts & Sigma Protocols',
  description: 'Discover Ergo\'s advanced blockchain technology: eUTXO model for parallel smart contracts, ErgoScript programming language, Sigma protocols for zero-knowledge proofs, and ASIC-resistant Autolykos mining.',
  keywords: ['eUTXO blockchain', 'ErgoScript smart contracts', 'Sigma protocols', 'Autolykos mining', 'blockchain technology', 'smart contract programming', 'NIPoPoWs', 'storage rent', 'proof of work', 'DeFi infrastructure'],
  alternates: {
    canonical: 'https://ergoblockchain.org/technology'
  },
  openGraph: {
    title: 'Ergo Technology Stack - Building the Future',
    description: 'Advanced blockchain technology: eUTXO, ErgoScript, privacy features, and sustainable PoW.',
    url: 'https://ergoblockchain.org/technology',
    siteName: 'Ergo Platform',
    images: [{
      url: 'https://ergoblockchain.org/og/technology.png',
      width: 1200,
      height: 630,
      alt: 'Ergo Technology Overview'
    }],
    type: 'website',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ergo Technology - Next Generation Blockchain',
    description: 'eUTXO model, ErgoScript, Sigma protocols, NIPoPoWs - cutting-edge blockchain tech.',
    images: ['https://ergoblockchain.org/og/technology.png'],
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

export default function TechnologyPage() {
  const techArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    '@id': 'https://ergoblockchain.org/technology#article',
    headline: 'Ergo Blockchain Technology Stack',
    description: 'Comprehensive overview of Ergo\'s technological innovations including eUTXO, ErgoScript, and Sigma protocols',
    datePublished: '2024-01-01',
    dateModified: '2024-12-15',
    author: {
      '@type': 'Organization',
      name: 'Ergo Platform',
      url: 'https://ergoblockchain.org'
    },
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
      '@id': 'https://ergoblockchain.org/technology'
    },
    about: [
      { '@type': 'Thing', name: 'eUTXO Model', description: 'Extended UTXO model enabling parallel execution' },
      { '@type': 'Thing', name: 'ErgoScript', description: 'Secure, declarative language for programmable money' },
      { '@type': 'Thing', name: 'Sigma Protocols', description: 'Native zero-knowledge proofs and privacy features' },
      { '@type': 'Thing', name: 'Autolykos', description: 'Memory-hard Proof of Work algorithm' },
      { '@type': 'Thing', name: 'Storage Rent', description: 'Sustainable blockchain state management' },
      { '@type': 'Thing', name: 'NIPoPoWs', description: 'Non-Interactive Proofs of Proof-of-Work' }
    ]
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How is eUTXO on Ergo different from the account model?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'eUTXO splits the blockchain state into independent boxes (outputs), enabling parallel smart contracts without a global state and reducing reentrancy risks. DApps become composable: complex logic can be built from simple outputs.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is ErgoScript and why is it secure?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ErgoScript is Ergo\'s contract language for programmable money with formally verifiable code, strict typing, and built-in cryptographic primitives. Contracts are auditable and predictable—design avoids global mutable state and typical reentrancy patterns.'
        }
      },
      {
        '@type': 'Question',
        name: 'Why is Autolykos considered decentralized and energy-efficient?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Autolykos is memory-hard and ASIC-resistant, making it fair for ordinary miners. It rewards solo mining and reduces pool dependence, keeping the network secure with moderate energy use.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is Storage Rent and why does it matter?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Storage Rent is a state recycling mechanism where unspent coins after ~4 years start paying rent. This prevents unlimited blockchain growth and ensures miners earn revenue even after emissions end.'
        }
      },
      {
        '@type': 'Question',
        name: 'What privacy and multisig features are built in?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sigma protocols provide native zero-knowledge proofs, ring signatures, multisig/threshold schemes, and private payments without external hacks. This simplifies building confidential dApps.'
        }
      },
      {
        '@type': 'Question',
        name: 'What do NIPoPoWs enable?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'NIPoPoWs create tiny blockchain proofs that allow light clients, instant mobile sync, and trustless cross-chain bridges without full nodes.'
        }
      },
      {
        '@type': 'Question',
        name: 'How are Oracle Pools different from traditional oracles?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oracle Pools are protocol-native, composable data feeds without a central operator—no single point of bribery or failure. They can be plugged into any contract.'
        }
      },
      {
        '@type': 'Question',
        name: 'What are Subblocks and why use them?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Subblocks split blocks into fast sub-blocks to speed up payment and dApp confirmation without trusted sequencers. This provides Layer-1 scaling with faster perceived confirmations.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I issue tokens and NFTs without a smart contract?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes—issuance is native at the protocol layer, in a single transaction. True native assets are instantly composable with dApps.'
        }
      }
    ]
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://ergoblockchain.org'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Technology',
        item: 'https://ergoblockchain.org/technology'
      }
    ]
  }

  // Добавляем продвинутые SEO схемы
  const knowledgeGraph = generateKnowledgeGraph('technology')
  
  const speakableSchema = SchemaTypes.SpeakableSchema({
    headline: 'Ergo Technology Stack',
    summary: 'Ergo uses eUTXO model for parallel execution, ErgoScript for secure contracts, and Sigma protocols for privacy',
    url: 'https://ergoblockchain.org/technology'
  })
  
  const datasetSchema = SchemaTypes.DatasetSchema()

  return (
    <>
      {/* Существующие схемы */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      
      {/* Новые продвинутые схемы */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraph) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }} />
      
      <TechnologyClient />
    </>
  )
} 