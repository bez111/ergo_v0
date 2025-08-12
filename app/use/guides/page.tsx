import type { Metadata } from "next"
import GuidesClient from "./GuidesClient"
import { SchemaTypes } from "@/lib/schema-ultimate"
import { generateKnowledgeGraph } from "@/lib/entity-knowledge-graph"

export const metadata: Metadata = {
  title: "Ergo User Guides | Wallets, DeFi, Mining & Trading Tutorials",
  description: "Complete collection of Ergo user guides. Learn how to use wallets, trade on DEXs, mine ERG, stake tokens, and navigate the ecosystem. Step-by-step tutorials for all levels.",
  keywords: ["ergo guides", "ergo tutorials", "how to use ergo", "ergo wallet guide", "defi tutorial", "mining guide", "trading guide", "blockchain tutorials"],
  alternates: {
    canonical: "https://ergoblockchain.org/use/guides"
  },
  openGraph: {
    title: "Ergo User Guides - Complete Tutorial Collection",
    description: "Master Ergo with our comprehensive guides. Wallets, DeFi, mining, and more.",
    url: "https://ergoblockchain.org/use/guides",
    siteName: "Ergo Platform",
    images: [{
      url: "https://ergoblockchain.org/og/guides.png",
      width: 1200,
      height: 630,
      alt: "Ergo User Guides"
    }],
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ergo Guides | Learn to Use Ergo Ecosystem",
    description: "Step-by-step tutorials for wallets, DeFi, mining, and trading on Ergo.",
    images: ["https://ergoblockchain.org/og/guides.png"],
    creator: "@ergoplatform",
    site: "@ergoplatform"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  }
}

export default function GuidesPage() {
  // SEO схемы для Guides
  const guidesCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://ergoblockchain.org/use/guides",
    name: "Ergo User Guides Collection",
    description: "Comprehensive collection of tutorials for using Ergo blockchain",
    hasPart: [
      {
        "@type": "HowTo",
        name: "Wallet Setup Guide",
        description: "How to set up and use Ergo wallets"
      },
      {
        "@type": "HowTo",
        name: "DeFi Trading Guide",
        description: "How to trade on Ergo DEXs"
      },
      {
        "@type": "HowTo",
        name: "Mining Setup Guide",
        description: "How to start mining ERG"
      },
      {
        "@type": "HowTo",
        name: "NFT Guide",
        description: "How to buy and sell NFTs on Ergo"
      }
    ]
  }
  
  const faqSchema = SchemaTypes.FAQSchema([
    {
      question: "What guides are available for Ergo?",
      answer: "We offer comprehensive guides for wallet setup, DeFi trading, mining, NFT marketplaces, governance participation, and developer tools."
    },
    {
      question: "Are the guides suitable for beginners?",
      answer: "Yes, our guides cater to all levels with clear step-by-step instructions, screenshots, and video tutorials where applicable."
    },
    {
      question: "How often are guides updated?",
      answer: "Guides are regularly updated to reflect the latest features, protocols, and best practices in the Ergo ecosystem."
    },
    {
      question: "Where can I get help if I'm stuck?",
      answer: "Join our Discord or Telegram communities for real-time support, or check the FAQ section in each guide."
    }
  ])
  
  const learningResourceSchema = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: "Ergo User Guide Library",
    description: "Educational resources for using Ergo blockchain applications",
    learningResourceType: "Guide",
    educationalLevel: "Beginner to Advanced",
    teaches: [
      "Cryptocurrency Wallets",
      "DeFi Trading",
      "Blockchain Mining",
      "NFT Trading",
      "Smart Contract Interaction"
    ],
    provider: {
      "@type": "Organization",
      name: "Ergo Platform"
    }
  }
  
  const knowledgeGraph = generateKnowledgeGraph('guides')
  
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(guidesCollectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(learningResourceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraph) }} />
      
      <GuidesClient />
    </>
  )
} 