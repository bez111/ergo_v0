import type { Metadata } from 'next'
import { MinersClient } from './MinersClient'

interface MinersPageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: MinersPageProps): Promise<Metadata> {
  const { locale } = await params

  return {
    title: "Ergo for Miners - GPU-Friendly ASIC-Resistant Mining",
    description: "Mine Ergo with your GPUs. ASIC-resistant Autolykos algorithm, fair launch, sustainable economics with storage rent. Start mining ERG today.",
    keywords: "Ergo mining, GPU mining, ASIC resistant, Autolykos, cryptocurrency mining, proof of work, mining profitability, ERG mining",
    alternates: {
      canonical: "https://ergoblockchain.org/miners"
    },
    openGraph: {
      title: "Ergo for Miners: GPU-Friendly ASIC-Resistant Mining",
      description: "Mine Ergo with your GPUs. ASIC-resistant algorithm, fair launch, and sustainable long-term economics.",
      url: "https://ergoblockchain.org/miners",
      siteName: "Ergo Platform",
      images: [{
        url: "https://ergoblockchain.org/og/miners.png", // Placeholder, needs actual image
        width: 1200,
        height: 630,
        alt: "Ergo for Miners - GPU Mining"
      }],
      type: "website",
      locale: "en_US"
    },
    twitter: {
      card: "summary_large_image",
      title: "Ergo for Miners: GPU-Friendly ASIC-Resistant Mining",
      description: "Mine Ergo with your GPUs. ASIC-resistant algorithm, fair launch, and sustainable long-term economics.",
      images: ["https://ergoblockchain.org/og/miners.png"] // Placeholder, needs actual image
    }
  }
}

export default async function MinersPage({ params }: MinersPageProps) {
  const { locale } = await params

  return <MinersClient />
}
