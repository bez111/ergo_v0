
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from "next"
import DefiUnderConstructionClient from "./DefiUnderConstructionClient"
import { getAlternates, getCanonicalUrl } from "@/lib/seo"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  
  return {
    title: "DeFi on Ergo - Coming Soon",
    description: "Discover decentralized finance opportunities on Ergo Platform. Advanced DeFi protocols, yield farming, and financial primitives - launching soon.",
    keywords: "Ergo DeFi, decentralized finance, yield farming, liquidity pools, smart contracts, blockchain finance",
    alternates: getAlternates('/use/defi', locale),
    openGraph: {
      title: "DeFi on Ergo - Coming Soon",
      description: "Advanced DeFi protocols and financial primitives on Ergo Platform - launching soon.",
      url: getCanonicalUrl('/use/defi', locale),
      siteName: "Ergo Platform",
      images: [{
        url: "https://www.ergoblockchain.org/og/defi.png",
        width: 1200,
        height: 630,
        alt: "Ergo DeFi - Coming Soon"
      }],
      type: "website",
      locale: "en_US"
    },
    twitter: {
      card: "summary_large_image",
      title: "DeFi on Ergo - Coming Soon",
      description: "Advanced DeFi protocols and financial primitives on Ergo Platform - launching soon.",
      images: ["https://www.ergoblockchain.org/og/defi.png"],
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
}

export default function DefiPage() {
  return <DefiUnderConstructionClient />
}
