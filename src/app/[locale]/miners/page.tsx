
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from 'next'
import { MinersClient } from './MinersClient'
import { FAQSchema } from '@/components/seo/faq-schema'
import { HowToSchema } from '@/components/seo/howto-schema'
import { siteConfig } from '@/config/site-config'

interface MinersPageProps {
  params: Promise<{ locale: string }>
}

// HowTo steps for mining Ergo
const miningHowToSteps = [
  {
    name: "Get a GPU",
    text: "You need a graphics card with at least 4GB VRAM. NVIDIA RTX 3060/3070/3080 or AMD RX 6600/6700/6800 are popular choices. Older cards like GTX 1660 Super also work well."
  },
  {
    name: "Download Mining Software",
    text: "Download a compatible miner: lolMiner (AMD/NVIDIA), T-Rex (NVIDIA), or Nanominer (AMD/NVIDIA). Extract the files to a folder on your computer."
  },
  {
    name: "Create an Ergo Wallet",
    text: "Download Nautilus wallet (browser extension) or Ergo Mobile Wallet. Create a new wallet and securely backup your 15-word seed phrase. Copy your wallet address."
  },
  {
    name: "Choose a Mining Pool",
    text: "Select a mining pool: Herominers, 2miners, Woolypooly, or Nanopool. Consider pool fees (0.9-1%), server location, and minimum payout threshold."
  },
  {
    name: "Configure Your Miner",
    text: "Edit the miner's batch file (.bat on Windows, .sh on Linux). Set the pool address (e.g., stratum+tcp://ergo.herominers.com:1180), your wallet address, and worker name."
  },
  {
    name: "Start Mining",
    text: "Run the miner executable. Monitor hashrate, temperature, and power consumption. Check the pool dashboard for your stats and pending rewards."
  }
]

// FAQ data for miners page
const minersFAQ = [
  {
    question: "How to mine Ergo?",
    answer: "To mine Ergo: 1) Get a GPU (AMD or NVIDIA, 4GB+ VRAM recommended). 2) Download mining software (lolMiner, T-Rex, or Nanominer). 3) Join a mining pool (Herominers, 2miners, or Woolypooly). 4) Configure your miner with pool address and your Ergo wallet. 5) Start mining and earn ERG rewards."
  },
  {
    question: "What GPU is best for Ergo mining?",
    answer: "Any modern GPU with 4GB+ VRAM works for Ergo mining. Popular choices include NVIDIA RTX 3060/3070/3080, AMD RX 6600/6700/6800, and older cards like GTX 1660 Super. Ergo's Autolykos algorithm is memory-hard and ASIC-resistant, keeping GPU mining competitive."
  },
  {
    question: "Is Ergo mining profitable?",
    answer: "Ergo mining profitability depends on your electricity cost, GPU efficiency, and ERG price. Use our mining calculator to estimate earnings. Ergo has Storage Rent which provides additional income to miners beyond block rewards, ensuring long-term sustainability."
  },
  {
    question: "What is Autolykos?",
    answer: "Autolykos is Ergo's ASIC-resistant Proof-of-Work algorithm. It's memory-hard, requiring significant GPU memory (currently 4GB+), which prevents specialized ASIC hardware from dominating. This keeps mining accessible to regular GPU owners and maintains decentralization."
  },
  {
    question: "What mining pools support Ergo?",
    answer: "Popular Ergo mining pools include Herominers, 2miners, Woolypooly, Nanopool, and Enigma Pool. Choose based on fees (typically 0.9-1%), server location, payout threshold, and pool hashrate. Larger pools offer more consistent payouts, smaller pools help decentralization."
  }
]

export async function generateMetadata({ params }: MinersPageProps): Promise<Metadata> {
  const { locale } = await params

  return {
    title: "Mine Ergo (ERG) — GPU-Friendly, ASIC-Resistant | Ergo",
    description: "Start mining Ergo with any GPU. ASIC-resistant Autolykos algorithm, fair rewards, active pools. Calculator, guides & software included.",
    keywords: "mine Ergo, ERG mining, GPU mining, ASIC resistant, Autolykos, cryptocurrency mining, proof of work, mining profitability, storage rent, mining calculator",
    alternates: {
      canonical: "https://ergoblockchain.org/miners"
    },
    openGraph: {
      title: "Mine Ergo (ERG) — GPU-Friendly, ASIC-Resistant",
      description: "Start mining Ergo with any GPU. ASIC-resistant Autolykos algorithm, fair rewards, active pools. Calculator & guides included.",
      url: "https://ergoblockchain.org/miners",
      siteName: "Ergo Platform",
      images: [{
        url: "https://ergoblockchain.org/og/miners.png",
        width: 1200,
        height: 630,
        alt: "Mine Ergo - GPU-Friendly ASIC-Resistant Mining"
      }],
      type: "website",
      locale: "en_US"
    },
    twitter: {
      card: "summary_large_image",
      title: "Mine Ergo (ERG) — GPU-Friendly, ASIC-Resistant",
      description: "Start mining Ergo with any GPU. ASIC-resistant Autolykos, fair rewards, active pools. Calculator & guides included.",
      images: ["https://ergoblockchain.org/og/miners.png"]
    }
  }
}

export default async function MinersPage({ params }: MinersPageProps) {
  const { locale } = await params

  return (
    <>
      <HowToSchema
        name="How to Mine Ergo (ERG)"
        description="Complete guide to mining Ergo cryptocurrency with your GPU. Learn how to set up mining software, choose a pool, and start earning ERG rewards."
        totalTime="PT30M"
        steps={miningHowToSteps}
        supply={["GPU with 4GB+ VRAM", "Computer with internet connection", "Electricity"]}
        tool={["Mining software (lolMiner, T-Rex, or Nanominer)", "Ergo Wallet (Nautilus or Ergo Mobile)"]}
      />
      <FAQSchema 
        faqs={minersFAQ}
        pageUrl={`${siteConfig.siteUrl}/miners`}
      />
      <MinersClient />
    </>
  )
}
