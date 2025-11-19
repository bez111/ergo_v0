import type { Metadata } from "next"
import { HoldersClient } from "./HoldersClient"

interface HodlersPageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: HodlersPageProps): Promise<Metadata> {
  const { locale } = await params

  return {
    title: "Ergo - Store Wealth, Keep Privacy, Stay Sovereign",
    description:
      "97.7M fixed supply. Bitcoin's proven security + Smart contracts + Optional privacy. Zero pre-mine, zero VC control. Built for long-term holders.",
    keywords:
      "Ergo blockchain, cryptocurrency holders, Bitcoin alternative, privacy coins, DeFi, proof of work, sound money, store of value, financial sovereignty",
    alternates: {
      canonical: "https://ergoblockchain.org/hodlers",
    },
    openGraph: {
      title: "Ergo: Store Wealth, Keep Privacy, Stay Sovereign",
      description: "97.7M fixed supply. Bitcoin's security + Smart contracts + Privacy. Zero pre-mine, zero VC control.",
      url: "https://ergoblockchain.org/hodlers",
      siteName: "Ergo Platform",
      images: [
        {
          url: "https://ergoblockchain.org/og/holders.png",
          width: 1200,
          height: 630,
          alt: "Ergo for Hodlers - Sound Money with Smart Contracts",
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "Ergo: Store Wealth, Keep Privacy, Stay Sovereign",
      description: "97.7M fixed supply. Bitcoin's security + Smart contracts + Privacy. Built for long-term holders.",
      images: ["https://ergoblockchain.org/og/holders.png"],
    },
  }
}

export default async function HodlersPage({ params }: HodlersPageProps) {
  const { locale } = await params

  return <HoldersClient />
}

