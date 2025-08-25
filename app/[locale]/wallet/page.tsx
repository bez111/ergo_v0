import type { Metadata } from 'next'
import WalletClient from './WalletClient'
import { SchemaTypes } from '@/lib/schema-ultimate'
import { generateKnowledgeGraph } from '@/lib/entity-knowledge-graph'

export const metadata: Metadata = {
  title: 'Ergo Wallets - Desktop, Mobile & Hardware Solutions',
  description: 'Choose from trusted Ergo wallets: Nautilus for dApps, Satergo for full nodes, hardware wallets for cold storage. Find the perfect wallet for your needs.',
  keywords: ['ergo wallet', 'nautilus wallet', 'satergo', 'hardware wallet', 'crypto wallet', 'ERG storage', 'ergo mobile wallet', 'browser extension wallet'],
  alternates: {
    canonical: 'https://ergoblockchain.org/wallet'
  },
  openGraph: {
    title: 'Ergo Wallets - Secure Your ERG',
    description: 'Official and community wallets for Ergo blockchain. Desktop, mobile, browser extensions, and hardware solutions.',
    url: 'https://ergoblockchain.org/wallet',
    siteName: 'Ergo Platform',
    images: [{
      url: 'https://ergoblockchain.org/og/wallets.png',
      width: 1200,
      height: 630,
      alt: 'Ergo Wallets Overview'
    }],
    type: 'website',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ergo Wallets - Choose Your Storage',
    description: 'Secure wallets for Ergo: Nautilus, Satergo, Ledger support and more.',
    images: ['https://ergoblockchain.org/og/wallets.png'],
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

export default function WalletPage() {
  const walletsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://ergoblockchain.org/wallet#page',
    name: 'Ergo Wallets Directory',
    description: 'Complete collection of Ergo blockchain wallets',
    url: 'https://ergoblockchain.org/wallet',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'SoftwareApplication',
          position: 1,
          name: 'Nautilus Wallet',
          applicationCategory: 'FinanceApplication',
          operatingSystem: 'Chrome, Firefox, Android, iOS',
          description: 'Feature-rich browser extension and mobile wallet for dApp interaction.',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD'
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '30000'
          }
        },
        {
          '@type': 'SoftwareApplication',
          position: 2,
          name: 'Satergo',
          applicationCategory: 'FinanceApplication',
          operatingSystem: 'Windows, macOS, Linux',
          description: 'Full-node desktop wallet for maximum security and decentralization.',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD'
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            ratingCount: '10000'
          }
        }
      ]
    }
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
        name: 'Wallets',
        item: 'https://ergoblockchain.org/wallet'
      }
    ]
  }
  
  // Добавляем продвинутые SEO схемы
  const knowledgeGraph = generateKnowledgeGraph('wallet')
  
  const faqSchema = SchemaTypes.FAQSchema([
    {
      question: "What is the best Ergo wallet?",
      answer: "The best wallet depends on your needs: Nautilus for dApp interactions and browser extension, Satergo for full node security, Ledger for hardware cold storage, and mobile wallets for on-the-go access."
    },
    {
      question: "Is there a hardware wallet for Ergo?",
      answer: "Yes, Ergo is supported by Ledger hardware wallets through the Nautilus browser extension, providing maximum security for cold storage."
    },
    {
      question: "How do I choose an Ergo wallet?",
      answer: "Choose based on your usage: For DeFi and dApps use Nautilus, for maximum security use Satergo or hardware wallets, for mobile use SAFEW or Ergo Wallet."
    },
    {
      question: "Are Ergo wallets free?",
      answer: "Yes, all Ergo software wallets are free and open-source. Hardware wallets like Ledger require purchasing the device."
    }
  ])
  
  const speakableSchema = SchemaTypes.SpeakableSchema({
    headline: "Ergo Wallets Directory",
    summary: "Complete guide to Ergo wallets: Nautilus for dApps, Satergo for full nodes, hardware wallets for security",
    url: "https://ergoblockchain.org/wallet"
  })

  return (
    <>
      {/* Существующие схемы */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(walletsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      
      {/* Новые продвинутые схемы */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraph) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      
      <WalletClient />
    </>
  )
} 