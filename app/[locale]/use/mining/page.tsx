import type { Metadata } from "next"
import MiningClient from "./MiningClient"
import { SchemaTypes } from "@/lib/schema-ultimate"
import { generateKnowledgeGraph } from "@/lib/entity-knowledge-graph"

export const metadata: Metadata = {
  title: "Ergo Mining Guide | Start Mining ERG with GPU - Complete Tutorial",
  description: "Complete guide to mining Ergo (ERG) with GPU. Autolykos v2 algorithm setup, profitability calculator, best mining pools, hardware requirements, and optimization tips.",
  keywords: ["ergo mining", "erg mining", "autolykos v2", "gpu mining", "mining calculator", "mining profitability", "ergo pools", "mining guide"],
  alternates: {
    canonical: "https://ergoblockchain.org/use/mining"
  },
  openGraph: {
    title: "Mine Ergo (ERG) - Complete GPU Mining Guide",
    description: "Start mining ERG today. Complete setup guide, profitability calculator, and pool recommendations.",
    url: "https://ergoblockchain.org/use/mining",
    siteName: "Ergo Platform",
    images: [{
      url: "https://ergoblockchain.org/og/mining.png",
      width: 1200,
      height: 630,
      alt: "Ergo Mining Guide"
    }],
    type: "article",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Mine ERG with GPU | Complete Mining Guide",
    description: "Setup, profitability, pools - everything you need to start mining Ergo.",
    images: ["https://ergoblockchain.org/og/mining.png"],
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

export default function MiningPage() {
  // SEO схемы для Mining
  const miningGuideSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": "https://ergoblockchain.org/use/mining",
    name: "How to Mine Ergo (ERG)",
    description: "Complete guide to GPU mining Ergo cryptocurrency",
    image: "https://ergoblockchain.org/og/mining.png",
    totalTime: "PT1H",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      minValue: "500",
      maxValue: "5000"
    },
    supply: [
      { "@type": "HowToSupply", name: "GPU with 4GB+ VRAM" },
      { "@type": "HowToSupply", name: "Mining software" },
      { "@type": "HowToSupply", name: "Ergo wallet" }
    ],
    tool: [
      { "@type": "HowToTool", name: "NBMiner or T-Rex miner" },
      { "@type": "HowToTool", name: "Mining pool account" }
    ],
    step: [
      {
        "@type": "HowToStep",
        name: "Check GPU compatibility",
        text: "Ensure your GPU has at least 4GB VRAM and supports Autolykos v2"
      },
      {
        "@type": "HowToStep",
        name: "Download mining software",
        text: "Download NBMiner for mixed rigs or T-Rex for NVIDIA GPUs"
      },
      {
        "@type": "HowToStep",
        name: "Choose mining pool",
        text: "Select a pool like 2Miners, HeroMiners, or WoolyPooly"
      },
      {
        "@type": "HowToStep",
        name: "Configure miner",
        text: "Set up your wallet address and pool settings"
      },
      {
        "@type": "HowToStep",
        name: "Start mining",
        text: "Run the miner and monitor your hashrate"
      }
    ]
  }
  
  const faqSchema = SchemaTypes.FAQSchema([
    {
      question: "Is Ergo mining profitable?",
      answer: "Ergo mining profitability depends on your electricity cost, GPU efficiency, and ERG price. Use our calculator to estimate your earnings based on current network difficulty and your hashrate."
    },
    {
      question: "What GPU is best for mining Ergo?",
      answer: "NVIDIA RTX 3060 Ti and AMD RX 6600 XT offer excellent efficiency for Ergo mining. Any GPU with 4GB+ VRAM can mine ERG using the Autolykos v2 algorithm."
    },
    {
      question: "Which mining pool should I use?",
      answer: "Popular pools include 2Miners, HeroMiners, and WoolyPooly. Choose based on fees (0.9-1%), minimum payout, and server location for best latency."
    },
    {
      question: "How much can I earn mining Ergo?",
      answer: "Earnings vary based on hashrate and costs. A typical RTX 3060 Ti (130 MH/s) can mine approximately 1-2 ERG per day, depending on network difficulty."
    }
  ])
  
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Ergo Mining Calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    },
    description: "Calculate Ergo mining profitability based on hashrate and electricity costs"
  }
  
  const knowledgeGraph = generateKnowledgeGraph('mining')
  
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(miningGuideSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraph) }} />
      
      <MiningClient />
    </>
  )
} 