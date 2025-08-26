import type { Metadata } from 'next'
import StartClient from './StartClient'
import { SchemaTypes } from '@/lib/schema-ultimate'
import { generateKnowledgeGraph } from '@/lib/entity-knowledge-graph'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'start' })
  
  return {
    title: `${t('title')} - ${t('subtitle')}`,
    description: t('description'),
  keywords: ['ergo tutorial', 'blockchain beginner', 'start with ergo', 'crypto guide', 'ergo wallet setup', 'learn blockchain', 'ergo mining', 'ergo development'],
  alternates: {
    canonical: 'https://ergoblockchain.org/start'
  },
  openGraph: {
    title: 'Start Your Journey with Ergo Blockchain',
    description: 'Personalized learning paths for beginners, developers, miners, and investors. Find your way into Ergo.',
    url: 'https://ergoblockchain.org/start',
    siteName: 'Ergo Platform',
    images: [{
      url: 'https://ergoblockchain.org/og/start.png',
      width: 1200,
      height: 630,
      alt: 'Start with Ergo - Learning Paths'
    }],
    type: 'website',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Start Your Ergo Journey - Choose Your Path',
    description: 'Beginner? Developer? Miner? Investor? Find your personalized path into Ergo.',
    images: ['https://ergoblockchain.org/og/start.png'],
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
}

export default function StartPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': 'https://ergoblockchain.org/start#howto',
    name: 'How to Get Started with Ergo Blockchain',
    description: 'Complete guide to begin your journey with Ergo, from understanding basics to advanced development',
    image: 'https://ergoblockchain.org/og/start.png',
    totalTime: 'PT30M',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '0'
    },
    supply: [
      { '@type': 'HowToSupply', name: 'Computer or smartphone' },
      { '@type': 'HowToSupply', name: 'Internet connection' }
    ],
    tool: [
      { '@type': 'HowToTool', name: 'Ergo wallet (Nautilus or Satergo)' },
      { '@type': 'HowToTool', name: 'Web browser' }
    ],
    step: [
      {
        '@type': 'HowToStep',
        name: 'Choose Your Path',
        text: 'Select whether you are new to crypto, want to learn, develop, mine, or invest',
        url: 'https://ergoblockchain.org/start',
        image: 'https://ergoblockchain.org/images/start-paths.png'
      },
      {
        '@type': 'HowToStep',
        name: 'Understand Why Ergo',
        text: 'Learn about the problems Ergo solves and its unique features',
        url: 'https://ergoblockchain.org/start/introduction'
      },
      {
        '@type': 'HowToStep',
        name: 'Get a Wallet',
        text: 'Download and set up a secure Ergo wallet like Nautilus or Satergo',
        url: 'https://ergoblockchain.org/wallet'
      },
      {
        '@type': 'HowToStep',
        name: 'Try Test Coins',
        text: 'Get free testnet ERG to practice transactions safely',
        url: 'https://ergoblockchain.org/wallet/testnet-faucet'
      },
      {
        '@type': 'HowToStep',
        name: 'Send First Transaction',
        text: 'Learn by doing - send your first ERG transaction',
        url: 'https://ergoblockchain.org/wallet/send'
      },
      {
        '@type': 'HowToStep',
        name: 'Learn Security Best Practices',
        text: 'Understand essential security practices to protect your assets',
        url: 'https://ergoblockchain.org/start/security-tips'
      }
    ]
  }

  const learningPathsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Ergo Learning Paths',
    description: 'Different paths to get started with Ergo based on your background',
    numberOfItems: 5,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Course',
          name: 'Beginner Path',
          description: 'For those new to cryptocurrency and blockchain',
          provider: { '@type': 'Organization', name: 'Ergo Platform' }
        }
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Course',
          name: 'Developer Path',
          description: 'For programmers wanting to build on Ergo',
          provider: { '@type': 'Organization', name: 'Ergo Platform' }
        }
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Course',
          name: 'Miner Path',
          description: 'For those interested in mining ERG',
          provider: { '@type': 'Organization', name: 'Ergo Platform' }
        }
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'Course',
          name: 'Investor Path',
          description: 'For understanding Ergo as an investment',
          provider: { '@type': 'Organization', name: 'Ergo Platform' }
        }
      },
      {
        '@type': 'ListItem',
        position: 5,
        item: {
          '@type': 'Course',
          name: 'Learning Path',
          description: 'Deep dive into Ergo technology and ecosystem',
          provider: { '@type': 'Organization', name: 'Ergo Platform' }
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
        name: 'Start',
        item: 'https://ergoblockchain.org/start'
      }
    ]
  }
  
  // Добавляем продвинутые SEO схемы
  const knowledgeGraph = generateKnowledgeGraph('start')
  
  const faqSchema = SchemaTypes.FAQSchema([
    {
      question: "How do I start with Ergo blockchain?",
      answer: "Start by choosing your path: beginner, developer, miner, or investor. Then get a wallet like Nautilus, learn the basics, and try test transactions before using real ERG."
    },
    {
      question: "Is Ergo good for beginners?",
      answer: "Yes, Ergo provides clear learning paths, user-friendly wallets, comprehensive documentation, and a supportive community making it accessible for blockchain beginners."
    },
    {
      question: "What do I need to use Ergo?",
      answer: "You need a computer or smartphone, internet connection, and an Ergo wallet. No technical knowledge required for basic use, but developers benefit from programming experience."
    },
    {
      question: "How long does it take to learn Ergo?",
      answer: "Basic usage takes 30 minutes to learn. Understanding the technology takes a few hours. Development skills require days to weeks depending on your programming background."
    }
  ])
  
  const speakableSchema = SchemaTypes.SpeakableSchema({
    headline: "Start Your Ergo Journey",
    summary: "Choose your personalized path into Ergo blockchain: beginner, developer, miner, or investor",
    url: "https://ergoblockchain.org/start"
  })

  return (
    <>
      {/* Существующие схемы */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(learningPathsSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      
      {/* Новые продвинутые схемы */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraph) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      
      <StartClient />
    </>
  )
} 