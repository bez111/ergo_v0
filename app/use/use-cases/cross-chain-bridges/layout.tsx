import { Metadata } from "next"
import { SchemaOrg } from "@/components/seo/schema-org"

export const metadata: Metadata = {
  title: "Cross-Chain Bridges on Ergo | Interoperability Solutions",
  description: "Build and use cross-chain bridges on Ergo. Trustless transfers, multi-signature security, and decentralized validators for secure blockchain interoperability.",
  keywords: "cross-chain bridges, Rosen Bridge, blockchain interoperability, wrapped assets, atomic swaps, multi-chain, trustless transfers",
  openGraph: {
    title: "Cross-Chain Bridges on Ergo",
    description: "Secure, trustless value transfer between blockchains with Rosen Bridge.",
    images: ["/og-bridges.png"],
    type: "website",
    url: "https://ergoblockchain.org/use/cross-chain-bridges",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cross-Chain Bridges on Ergo",
    description: "Connect Ergo to the multi-chain ecosystem",
    images: ["/og-bridges.png"],
  },
  alternates: {
    canonical: "https://ergoblockchain.org/use/cross-chain-bridges",
  },
}

export default function CrossChainBridgesLayout({
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
          headline: "Cross-Chain Bridges on Ergo",
          description: "Comprehensive guide to cross-chain bridges and interoperability on Ergo blockchain",
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
          image: "https://ergoblockchain.org/og-bridges.png",
          datePublished: "2024-01-01",
          dateModified: new Date().toISOString(),
          keywords: "cross-chain bridges, Rosen Bridge, interoperability, wrapped assets",
        }}
      />
      
      {children}
    </>
  )
} 