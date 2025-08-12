import { HeroSection } from "@/components/home/hero-section"
import { QuickActions } from "@/components/home/quick-actions"
import { CorePillars } from "@/components/home/core-pillars"
import { EcosystemShowcase } from "@/components/home/ecosystem-showcase"
import { Differentiation } from "@/components/home/differentiation"
import { AudiencePaths } from "@/components/home/audience-paths"
import { BlogSection } from "@/components/home/blog-section"
import { SubscribeSection } from "@/components/home/subscribe-section"
import { Manifesto } from "@/components/home/manifesto"
import { Metadata } from 'next'
import { blogPosts } from "@/app/blog/_lib/blog-data"
import { SchemaTypes } from "@/lib/schema-ultimate"
import { generateKnowledgeGraph } from "@/lib/entity-knowledge-graph"
import { InternalLinking } from "@/lib/ai-internal-linking"

export const metadata: Metadata = {
  title: 'Ergo Platform - Resilient DeFi Blockchain for the People',
  description: 'Ergo: PoW blockchain with eUTXO smart contracts, built-in privacy via Sigma protocols, and sustainable tokenomics. Build resilient DeFi without compromises.',
  keywords: ['Ergo', 'blockchain', 'cryptocurrency', 'DeFi', 'smart contracts', 'eUTXO', 'ErgoScript', 'Sigma protocols', 'proof of work', 'decentralized finance'],
  openGraph: {
    title: 'Ergo Platform - Resilient DeFi Blockchain for the People',
    description: 'Ergo: PoW blockchain with eUTXO smart contracts, built-in privacy via Sigma protocols, and sustainable tokenomics. Build resilient DeFi without compromises.',
    url: 'https://ergoblockchain.org/',
    siteName: 'Ergo Platform',
    images: [
      {
        url: 'https://ergoblockchain.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ergo Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ergo Platform - Resilient DeFi Blockchain',
    description: 'PoW blockchain with eUTXO smart contracts and built-in privacy. Build resilient DeFi without compromises.',
    images: ['https://ergoblockchain.org/og-image.png'],
    creator: '@ergoplatform',
    site: '@ergoplatform',
  },
  alternates: {
    canonical: 'https://ergoblockchain.org/',
    languages: {
      'en': 'https://ergoblockchain.org/',
      'x-default': 'https://ergoblockchain.org/'
    }
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || undefined,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || undefined,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function Home() {
  // Существующие схемы
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://ergoblockchain.org/#organization',
    name: 'Ergo Platform',
    url: 'https://ergoblockchain.org',
    logo: 'https://ergoblockchain.org/logo.png',
    description: 'Ergo is a resilient blockchain platform for contractual money and DeFi applications',
    sameAs: [
      'https://twitter.com/ergoplatform',
      'https://github.com/ergoplatform',
      'https://t.me/ergoplatform',
      'https://discord.gg/ergo-platform',
      'https://reddit.com/r/ergonauts'
    ],
    foundingDate: '2017',
    founders: [{
      '@type': 'Person',
      name: 'Alexander Chepurnoy'
    }]
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://ergoblockchain.org/#website',
    url: 'https://ergoblockchain.org',
    name: 'Ergo Platform',
    description: 'Official website of Ergo blockchain platform',
    publisher: {
      '@id': 'https://ergoblockchain.org/#organization'
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://ergoblockchain.org/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    },
    inLanguage: 'en-US'
  }

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: blogPosts.slice(0, 3).map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://ergoblockchain.org/blog/${post.slug}`,
      name: post.title,
    })),
  }

  // НОВЫЕ ПРОДВИНУТЫЕ SEO СХЕМЫ
  const blockchainPlatformSchema = SchemaTypes.BlockchainPlatform()
  const cryptocurrencySchema = SchemaTypes.Cryptocurrency({
    name: "Ergo",
    ticker: "ERG",
    website: "https://ergoblockchain.org",
    whitepaper: "https://ergoplatform.org/en/whitepaper.pdf",
    blockchain: "Ergo"
  })
  
  const faqSchema = SchemaTypes.FAQSchema([
    {
      question: "What is Ergo blockchain?",
      answer: "Ergo is a next-generation Proof-of-Work blockchain platform that implements modern scientific ideas in the blockchain space. It uses the eUTXO model, supports advanced smart contracts through ErgoScript, and features built-in privacy options via Sigma protocols."
    },
    {
      question: "How to mine Ergo?",
      answer: "To mine Ergo: 1) Get an Ergo wallet (Nautilus or Satergo), 2) Choose a mining pool, 3) Download mining software, 4) Configure miner with pool and wallet address, 5) Start mining and monitor hashrate."
    },
    {
      question: "What is ErgoScript?",
      answer: "ErgoScript is Ergo's smart contract language based on Sigma protocols. It enables powerful, flexible, and secure smart contracts while maintaining the benefits of the UTXO model."
    },
    {
      question: "Where to buy Ergo?",
      answer: "You can buy Ergo (ERG) on major exchanges including KuCoin, Gate.io, CoinEx, and others. Create an account, deposit funds, find ERG trading pairs, and place your order."
    }
  ])
  
  // Knowledge Graph для entities
  const knowledgeGraph = generateKnowledgeGraph('home')
  
  // Получаем связанные страницы
  const relatedContent = InternalLinking.getRelatedContent('/', 5)

  return (
    <>
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-orange-500 focus:text-white focus:rounded"
      >
        Skip to main content
      </a>
      
      <main id="main-content" className="flex flex-col bg-black text-white relative">
        <header role="banner">
          <HeroSection />
        </header>
        
        <section id="quick-actions" aria-labelledby="quick-actions-heading">
          <h2 id="quick-actions-heading" className="sr-only">Quick Actions</h2>
          <QuickActions />
        </section>
        
        <section id="manifesto" aria-labelledby="manifesto-heading">
          <h2 id="manifesto-heading" className="sr-only">Ergo Manifesto</h2>
          <Manifesto />
        </section>
        
        <section id="core-pillars" aria-labelledby="core-pillars-heading">
          <h2 id="core-pillars-heading" className="sr-only">Core Pillars</h2>
          <CorePillars />
        </section>
        
        <section id="differentiation" aria-labelledby="differentiation-heading">
          <h2 id="differentiation-heading" className="sr-only">What Makes Ergo Different</h2>
          <Differentiation />
        </section>
        
        <section id="ecosystem" aria-labelledby="ecosystem-heading">
          <h2 id="ecosystem-heading" className="sr-only">Ecosystem Showcase</h2>
          <EcosystemShowcase />
        </section>
        
        <section id="audience-paths" aria-labelledby="audience-paths-heading">
          <h2 id="audience-paths-heading" className="sr-only">Get Started</h2>
          <AudiencePaths />
        </section>
        
        <section id="blog" aria-labelledby="blog-heading">
          <h2 id="blog-heading" className="sr-only">Latest from Blog</h2>
          <BlogSection />
        </section>
        
        <section id="subscribe" aria-labelledby="subscribe-heading">
          <h2 id="subscribe-heading" className="sr-only">Subscribe to Updates</h2>
          <SubscribeSection />
        </section>
      </main>
      
      {/* Существующие схемы */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      
      {/* НОВЫЕ ПРОДВИНУТЫЕ SEO СХЕМЫ */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blockchainPlatformSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cryptocurrencySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraph) }} />
    </>
  )
}
