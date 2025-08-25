import type { Metadata } from 'next'
import React from 'react';
import { 
  Zap, 
  Shield, 
  Users, 
  Code, 
  Globe, 
  Database, 
  Lock, 
  Cpu, 
  Coins, 
  GitBranch,
  CheckCircle, 
  ExternalLink,
  ChevronRight,
  Brain,
  Rocket,
  Settings,
  FileQuestion,
  BookOpen,
  Eye,
  Key,
  Network,
  Smartphone
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ergo Key Features - eUTXO, Storage Rent, ErgoScript & More',
  description: 'Discover Ergo\'s key features: Extended UTXO model, Storage Rent for sustainability, ErgoScript smart contracts, Sigma Protocols, NIPoPoWs, and Autolykos PoW algorithm.',
  keywords: ['ergo features', 'eutxo model', 'storage rent', 'ergoscript', 'sigma protocols', 'nipopows', 'autolykos', 'blockchain features', 'smart contracts', 'proof of work'],
  alternates: {
    canonical: 'https://ergoblockchain.org/docs/introduction/key-features'
  },
  openGraph: {
    title: 'Ergo Key Features - Revolutionary Blockchain Technology',
    description: 'Explore Ergo\'s revolutionary features: eUTXO model, Storage Rent, ErgoScript, and advanced cryptographic protocols.',
    url: 'https://ergoblockchain.org/docs/introduction/key-features',
    siteName: 'Ergo Platform',
    images: [{
      url: 'https://ergoblockchain.org/og/ergo-features.png',
      width: 1200,
      height: 630,
      alt: 'Ergo Key Features'
    }],
    type: 'article',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ergo Key Features - Next-Gen Blockchain',
    description: 'Revolutionary blockchain features: eUTXO, Storage Rent, ErgoScript, Sigma Protocols, and more.',
    images: ['https://ergoblockchain.org/og/ergo-features.png'],
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

export default function KeyFeaturesPage() {
  // Schema.org structured data
  const featuresSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Ergo Key Features - Revolutionary Blockchain Technology',
    description: 'Comprehensive overview of Ergo\'s key technological features and innovations.',
    author: {
      '@type': 'Organization',
      name: 'Ergo Platform'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ergo Platform',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ergoblockchain.org/logo.png'
      }
    },
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://ergoblockchain.org/docs/introduction/key-features'
    },
    about: [
      {
        '@type': 'Thing',
        name: 'Extended UTXO Model',
        description: 'Advanced blockchain architecture for smart contracts'
      },
      {
        '@type': 'Thing', 
        name: 'Storage Rent',
        description: 'Economic sustainability mechanism for blockchain'
      },
      {
        '@type': 'Thing',
        name: 'ErgoScript',
        description: 'Flexible smart contract language'
      }
    ]
  }

  const breadcrumbSchema = {
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
        name: 'Documentation',
        item: 'https://ergoblockchain.org/docs'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Introduction',
        item: 'https://ergoblockchain.org/docs/introduction'
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Key Features',
        item: 'https://ergoblockchain.org/docs/introduction/key-features'
      }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(featuresSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Key Features
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Ergo is a next-generation smart contract platform that enables anyone to participate in the digital DeFi revolution now.
        </p>
        <p className="text-lg text-gray-300 mb-6">
          Ensuring economic freedom for ordinary people through decentralized, private and secure financial tools.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/why-ergo"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <Rocket className="w-5 h-5 mr-2" /> Why Ergo?
          </Link>
          <Link
            href="/docs/introduction/faq"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <FileQuestion className="w-5 h-5 mr-2" /> FAQ
          </Link>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <blockquote className="text-xl italic text-center text-gray-300">
          "Creating financial contracts on the blockchain isn't just about the functionality; it's about making that functionality safe, accessible, and powerful."
        </blockquote>
      </div>

      {/* Core Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <Link href="/docs/introduction/eutxo" className="group">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:scale-105 transition-transform duration-200 cursor-pointer relative h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                <Database className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-orange-400">eUTXO Model</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Ergo's Extended UTXO model provides superior security, scalability, and composability compared to account-based models. Each UTXO can carry arbitrary data and complex spending conditions.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm mb-4">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Immutable transaction outputs
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Parallel transaction processing
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Enhanced privacy features
              </li>
            </ul>
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-orange-400 text-sm font-medium">
              Learn More →
            </div>
          </div>
        </Link>

        <Link href="/docs/introduction/storage-rent" className="group">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:scale-105 transition-transform duration-200 cursor-pointer relative h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <Coins className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-cyan-400">Storage Rent</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              A revolutionary economic model that ensures blockchain sustainability by charging rent for data storage, preventing state bloat while creating additional miner incentives.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm mb-4">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Prevents blockchain bloat
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Long-term sustainability
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Additional miner rewards
              </li>
            </ul>
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-cyan-400 text-sm font-medium">
              Learn More →
            </div>
          </div>
        </Link>

        <Link href="/developers/ergoscript" className="group">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:scale-105 transition-transform duration-200 cursor-pointer relative h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-purple-400">ErgoScript</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              A flexible and secure smart contract language based on Sigma protocols, enabling complex contracts with built-in privacy features and formal verification capabilities.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm mb-4">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Sigma protocol integration
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Zero-knowledge proofs
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Formal verification
              </li>
            </ul>
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-purple-400 text-sm font-medium">
              Learn More →
            </div>
          </div>
        </Link>

        <Link href="/docs/introduction/nipopows" className="group">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:scale-105 transition-transform duration-200 cursor-pointer relative h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-blue-400">NIPoPoWs</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Non-Interactive Proofs of Proof-of-Work enable ultra-light clients, trustless cross-chain communication, and logarithmic space sidechains for enhanced scalability.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm mb-4">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Ultra-light clients
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Cross-chain bridges
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Scalable sidechains
              </li>
            </ul>
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-blue-400 text-sm font-medium">
              Learn More →
            </div>
          </div>
        </Link>
      </div>

      {/* Additional Features */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-neutral-900/30 border border-neutral-700/50 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-green-400" />
            <h3 className="text-lg font-semibold text-white">Autolykos PoW</h3>
          </div>
          <p className="text-gray-400 text-sm">
            ASIC-resistant proof-of-work algorithm ensuring fair mining and network decentralization.
          </p>
        </div>

        <div className="bg-neutral-900/30 border border-neutral-700/50 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Eye className="w-8 h-8 text-indigo-400" />
            <h3 className="text-lg font-semibold text-white">Sigma Protocols</h3>
          </div>
          <p className="text-gray-400 text-sm">
            Advanced cryptographic protocols enabling zero-knowledge proofs and enhanced privacy.
          </p>
        </div>

        <div className="bg-neutral-900/30 border border-neutral-700/50 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Network className="w-8 h-8 text-yellow-400" />
            <h3 className="text-lg font-semibold text-white">Interoperability</h3>
          </div>
          <p className="text-gray-400 text-sm">
            Seamless integration with other blockchains through trustless bridges and cross-chain protocols.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-orange-500/10 to-cyan-500/10 border border-orange-500/20 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
          Ready to Build on Ergo?
        </h2>
        <p className="text-gray-300 mb-6">
          Start developing with Ergo's powerful features and join the revolution in decentralized finance.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/developers"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-colors"
          >
            <Code className="w-5 h-5 mr-2" />
            Developer Docs
          </Link>
          <Link
            href="/start"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700 border border-neutral-600"
          >
            <Rocket className="w-5 h-5 mr-2" />
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}
