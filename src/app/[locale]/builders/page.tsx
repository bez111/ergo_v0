import type { Metadata } from 'next'
import { BuildersClient } from './BuildersClient'

interface BuildersPageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: BuildersPageProps): Promise<Metadata> {
  const { locale } = await params
  
  return {
    title: "Ergo for Developers - Build DeFi That Doesn't Break",
    description: "Bitcoin-level security meets smart contracts. No reentrancy attacks, no hidden state, predictable costs. eUTXO model for dApps that actually work.",
    keywords: "Ergo blockchain, developers, builders, smart contracts, eUTXO, ErgoScript, dApps, DeFi, Sigma protocols, blockchain development, secure smart contracts",
    alternates: {
      canonical: "https://ergoblockchain.org/builders"
    },
    openGraph: {
      title: "Build DeFi That Doesn't Break - Ergo for Developers",
      description: "Bitcoin-level security meets smart contracts. No reentrancy attacks. No hidden state. Predictable costs.",
      url: "https://ergoblockchain.org/builders",
      siteName: "Ergo Platform",
      images: [{
        url: "https://ergoblockchain.org/og/builders.png",
        width: 1200,
        height: 630,
        alt: "Ergo for Builders - Secure Smart Contract Development"
      }],
      type: "website",
      locale: "en_US"
    },
    twitter: {
      card: "summary_large_image",
      title: "Build DeFi That Doesn't Break - Ergo for Developers",
      description: "Bitcoin-level security meets smart contracts. No reentrancy attacks. No hidden state.",
      images: ["https://ergoblockchain.org/og/builders.png"]
    }
  }
}

export default async function BuildersPage({ params }: BuildersPageProps) {
  const { locale } = await params
  
  return <BuildersClient />
}
