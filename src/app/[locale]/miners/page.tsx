import type { Metadata } from 'next'
import { MinersClient } from './MinersClient'
import { siteConfig } from '@/config/site-config'
import {
  createHubMetadata,
  createBreadcrumbSchema,
  createFAQSchema,
  createHowToSchema,
} from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

interface MinersPageProps {
  params: Promise<{ locale: string }>
}

// SEO Configuration
const SEO = {
  path: "/miners",
  title: "Mine Ergo (ERG) — GPU-Friendly, ASIC-Resistant | Ergo",
  description: "Start mining Ergo with any GPU. ASIC-resistant Autolykos algorithm, fair rewards, active pools. Calculator, guides & software included.",
  ogImage: "/og/hubs/miners.png",
  keywords: [
    "mine Ergo", "ERG mining", "GPU mining", "ASIC resistant",
    "Autolykos", "cryptocurrency mining", "proof of work",
    "mining profitability", "storage rent", "mining calculator"
  ],
}

// HowTo Steps
const MINING_STEPS = [
  { name: "Get a GPU", text: "You need a graphics card with at least 4GB VRAM. NVIDIA RTX 3060/3070/3080 or AMD RX 6600/6700/6800 are popular choices." },
  { name: "Download Mining Software", text: "Download a compatible miner: lolMiner (AMD/NVIDIA), T-Rex (NVIDIA), or Nanominer (AMD/NVIDIA)." },
  { name: "Create an Ergo Wallet", text: "Download Nautilus wallet or Ergo Mobile Wallet. Create a new wallet and securely backup your 15-word seed phrase." },
  { name: "Choose a Mining Pool", text: "Select a mining pool: Herominers, 2miners, Woolypooly, or Nanopool. Consider pool fees (0.9-1%) and server location." },
  { name: "Configure Your Miner", text: "Edit the miner's batch file. Set the pool address, your wallet address, and worker name." },
  { name: "Start Mining", text: "Run the miner executable. Monitor hashrate, temperature, and power consumption." }
]

// FAQ Content
const FAQ_ITEMS = [
  {
    question: "How to mine Ergo?",
    answer: "To mine Ergo: 1) Get a GPU (AMD or NVIDIA, 4GB+ VRAM). 2) Download mining software (lolMiner, T-Rex, or Nanominer). 3) Join a mining pool. 4) Configure your miner with pool address and wallet. 5) Start mining and earn ERG rewards."
  },
  {
    question: "What GPU is best for Ergo mining?",
    answer: "Any modern GPU with 4GB+ VRAM works. Popular choices include NVIDIA RTX 3060/3070/3080, AMD RX 6600/6700/6800. Ergo's Autolykos algorithm is memory-hard and ASIC-resistant, keeping GPU mining competitive."
  },
  {
    question: "Is Ergo mining profitable?",
    answer: "Ergo mining profitability depends on your electricity cost, GPU efficiency, and ERG price. Use our mining calculator to estimate earnings. Storage Rent provides additional income to miners beyond block rewards."
  },
  {
    question: "What is Autolykos?",
    answer: "Autolykos is Ergo's ASIC-resistant Proof-of-Work algorithm. It's memory-hard, requiring significant GPU memory (4GB+), which prevents specialized ASIC hardware from dominating."
  },
  {
    question: "What mining pools support Ergo?",
    answer: "Popular Ergo mining pools include Herominers, 2miners, Woolypooly, Nanopool, and Enigma Pool. Choose based on fees, server location, payout threshold, and pool hashrate."
  }
]

// Metadata
export async function generateMetadata(): Promise<Metadata> {
  return createHubMetadata(SEO.path, SEO.title, SEO.description, SEO.ogImage, SEO.keywords)
}

// Page Component
export default async function MinersPage({ params }: MinersPageProps) {
  const schemas = [
    createBreadcrumbSchema([{ name: "Miners", href: "/miners" }]),
    createHowToSchema({
      name: "How to Mine Ergo (ERG)",
      description: "Complete guide to mining Ergo cryptocurrency with your GPU.",
      steps: MINING_STEPS,
      totalTime: "PT30M",
    }),
    createFAQSchema(FAQ_ITEMS),
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      <MinersClient />
    </>
  )
}
