import type { Metadata } from 'next'
import { BuildersClient } from './BuildersClient'

interface BuildersPageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: BuildersPageProps): Promise<Metadata> {
  const { locale } = await params
  
  return {
    title: "Ergo for Builders & Developers - Build Secure dApps on eUTXO",
    description: "Build on Ergo: Bitcoin-style security with smart contracts, Sigma protocols, and clean developer experience. eUTXO model for predictable, parallelizable dApps.",
    keywords: "Ergo blockchain, developers, builders, smart contracts, eUTXO, ErgoScript, dApps, DeFi, Sigma protocols, blockchain development",
    alternates: {
      canonical: "https://ergoblockchain.org/builders"
    },
    openGraph: {
      title: "Build secure, expressive dApps on Ergo's eUTXO",
      description: "Bitcoin-style security with smart contracts, Sigma protocols and a clean developer experience.",
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
      title: "Build secure, expressive dApps on Ergo's eUTXO",
      description: "Bitcoin-style security with smart contracts, Sigma protocols and a clean developer experience.",
      images: ["https://ergoblockchain.org/og/builders.png"]
    }
  }
}

export default async function BuildersPage({ params }: BuildersPageProps) {
  const { locale } = await params
  
  return <BuildersClient />
}
