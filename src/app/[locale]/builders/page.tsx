
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from 'next'
import { BuildersClient } from './BuildersClient'

interface BuildersPageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: BuildersPageProps): Promise<Metadata> {
  const { locale } = await params
  
  return {
    title: "Build on Ergo — ErgoScript, SDKs & Patterns | Ergo",
    description: "Build secure dApps with ErgoScript. eUTXO model, no reentrancy attacks, predictable costs. SDKs, patterns, grants & active dev community.",
    keywords: "build on Ergo, ErgoScript, Ergo developers, eUTXO, smart contracts, dApps, DeFi development, Sigma protocols, blockchain SDK, Ergo grants",
    alternates: {
      canonical: "https://ergoblockchain.org/builders"
    },
    openGraph: {
      title: "Build on Ergo — ErgoScript, SDKs & Patterns",
      description: "Build secure dApps with ErgoScript. eUTXO model, no reentrancy attacks, predictable costs. SDKs, patterns & grants.",
      url: "https://ergoblockchain.org/builders",
      siteName: "Ergo Platform",
      images: [{
        url: "https://ergoblockchain.org/og/builders.png",
        width: 1200,
        height: 630,
        alt: "Build on Ergo - ErgoScript Smart Contract Development"
      }],
      type: "website",
      locale: "en_US"
    },
    twitter: {
      card: "summary_large_image",
      title: "Build on Ergo — ErgoScript, SDKs & Patterns",
      description: "Build secure dApps with ErgoScript. eUTXO model, no reentrancy attacks, predictable costs. SDKs & grants.",
      images: ["https://ergoblockchain.org/og/builders.png"]
    }
  }
}

export default async function BuildersPage({ params }: BuildersPageProps) {
  const { locale } = await params
  
  return <BuildersClient />
}
