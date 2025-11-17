import type { Metadata } from "next"
import { HoldersClient } from "./HoldersClient"

interface HodlersPageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: HodlersPageProps): Promise<Metadata> {
  const { locale } = await params

  return {
    title: "Ergo for Hodlers & Newcomers - Sound Money with Programmable Privacy",
    description:
      "Discover Ergo: Proof-of-Work blockchain with Bitcoin's security, Ethereum's smart contracts, and programmable privacy. Fair launch, no premine, built for freedom seekers.",
    keywords:
      "Ergo blockchain, cryptocurrency hodlers, Bitcoin alternative, privacy coins, DeFi, proof of work, sound money, programmable money",
    alternates: {
      canonical: "https://ergoblockchain.org/hodlers",
    },
    openGraph: {
      title: "Ergo: sound money with programmable privacy",
      description: "Built on Proof-of-Work like Bitcoin, with smart contracts and privacy built in for real-world use.",
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
      title: "Ergo: sound money with programmable privacy",
      description: "Built on Proof-of-Work like Bitcoin, with smart contracts and privacy built in for real-world use.",
      images: ["https://ergoblockchain.org/og/holders.png"],
    },
  }
}

export default async function HodlersPage({ params }: HodlersPageProps) {
  const { locale } = await params

  return <HoldersClient />
}

