import type { Metadata } from 'next'
import { MinersClient } from './MinersClient'

interface MinersPageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: MinersPageProps): Promise<Metadata> {
  const { locale } = await params

  return {
    title: "Ergo Mining - Mine with GPUs, Earn Forever, Stay Profitable",
    description: "GPU-only mining. ASIC-resistant. Storage rent pays miners forever. Fair launch, zero pre-mine. Your gaming rig stays competitive.",
    keywords: "Ergo mining, GPU mining, ASIC resistant, Autolykos, cryptocurrency mining, proof of work, mining profitability, ERG mining, storage rent",
    alternates: {
      canonical: "https://ergoblockchain.org/miners"
    },
    openGraph: {
      title: "Ergo Mining: Mine with GPUs, Earn Forever",
      description: "GPU-only mining. ASIC-resistant. Storage rent pays miners forever. Your gaming rig stays competitive.",
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
      title: "Ergo Mining: Mine with GPUs, Earn Forever",
      description: "GPU-only mining. ASIC-resistant. Storage rent pays miners forever. Fair launch, zero pre-mine.",
      images: ["https://ergoblockchain.org/og/miners.png"]
    }
  }
}

export default async function MinersPage({ params }: MinersPageProps) {
  const { locale } = await params

  return <MinersClient />
}
