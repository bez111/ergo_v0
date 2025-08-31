import { Metadata } from "next"
import { SchemaOrg } from "@/components/seo/schema-org"

export const metadata: Metadata = {
  title: "Algorithmic Stablecoins on Ergo | Decentralized Stable Value",
  description: "Build and use algorithmic stablecoins on Ergo. Over-collateralized stability with AgeUSD protocol, decentralized governance, and transparent reserves.",
  keywords: "algorithmic stablecoins, SigmaUSD, AgeUSD, Ergo stablecoin, decentralized finance, DeFi, stable value, crypto stablecoin",
  openGraph: {
    title: "Algorithmic Stablecoins on Ergo",
    description: "Stable value storage without centralized control. Over-collateralized stablecoins with innovative AgeUSD protocol.",
    images: ["/og-stablecoins.png"],
    type: "website",
    url: "https://ergoblockchain.org/use/stablecoins",
  },
  twitter: {
    card: "summary_large_image",
    title: "Algorithmic Stablecoins on Ergo",
    description: "Build decentralized stablecoins with Ergo's AgeUSD protocol",
    images: ["/og-stablecoins.png"],
  },
  alternates: {
    canonical: "https://ergoblockchain.org/use/stablecoins",
  },
}

export default function AlgorithmicStablecoinsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SchemaOrg
        type="TechArticle"
        data={{
          "@type": "TechArticle",
          headline: "Algorithmic Stablecoins on Ergo",
          description: "Comprehensive guide to building and using algorithmic stablecoins on Ergo blockchain",
          author: {
            "@type": "Organization",
            name: "Ergo Platform",
            url: "https://ergoplatform.org",
          },
          publisher: {
            "@type": "Organization",
            name: "Ergo Platform",
            url: "https://ergoplatform.org",
            logo: {
              "@type": "ImageObject",
              url: "https://ergoblockchain.org/logo.png",
            },
          },
          image: "https://ergoblockchain.org/og-stablecoins.png",
          datePublished: "2024-01-01",
          dateModified: new Date().toISOString(),
          keywords: "algorithmic stablecoins, SigmaUSD, AgeUSD, DeFi, Ergo",
        }}
      />
      
      <SchemaOrg
        type="HowTo"
        data={{
          "@type": "HowTo",
          name: "How to Use Algorithmic Stablecoins on Ergo",
          description: "Step-by-step guide to using and building stablecoins on Ergo",
          step: [
            {
              "@type": "HowToStep",
              position: 1,
              name: "Set up Ergo wallet",
              text: "Install an Ergo wallet like Nautilus or SAFEW",
            },
            {
              "@type": "HowToStep",
              position: 2,
              name: "Get ERG tokens",
              text: "Acquire ERG from exchanges or DEXs",
            },
            {
              "@type": "HowToStep",
              position: 3,
              name: "Access SigmaUSD",
              text: "Visit sigmausd.io to mint or redeem stablecoins",
            },
            {
              "@type": "HowToStep",
              position: 4,
              name: "Manage positions",
              text: "Monitor reserve ratios and manage your stable assets",
            },
          ],
        }}
      />
      
      {children}
    </>
  )
} 