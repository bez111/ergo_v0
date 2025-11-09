import type { Metadata } from "next"
import GuidesUnderConstructionClient from "./GuidesUnderConstructionClient"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  
  return {
    title: "Ergo Guides - Coming Soon",
    description: "Comprehensive guides to master the Ergo ecosystem. From beginner tutorials to advanced development patterns - launching soon.",
    keywords: "Ergo guides, tutorials, blockchain education, ErgoScript, DeFi guides, wallet setup, smart contracts",
    alternates: {
      canonical: "https://ergoblockchain.org/learn/guides"
    },
    openGraph: {
      title: "Ergo Guides - Coming Soon",
      description: "Comprehensive guides to master the Ergo ecosystem - launching soon.",
      url: "https://ergoblockchain.org/learn/guides",
      siteName: "Ergo Platform",
      images: [{
        url: "https://ergoblockchain.org/og/guides.png",
        width: 1200,
        height: 630,
        alt: "Ergo Guides - Coming Soon"
      }],
      type: "website",
      locale: "en_US"
    },
    twitter: {
      card: "summary_large_image",
      title: "Ergo Guides - Coming Soon",
      description: "Comprehensive guides to master the Ergo ecosystem - launching soon.",
      images: ["https://ergoblockchain.org/og/guides.png"],
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

export default function GuidesPage() {
  return <GuidesUnderConstructionClient />
} 