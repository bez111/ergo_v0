import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Native Tokens & NFTs: First-Class Assets | Ergo",
  description: "Create tokens and NFTs in one transaction without smart contracts. Protocol-level security, minimal fees, instant DeFi compatibility.",
  keywords: [
    "native tokens",
    "NFTs",
    "Ergo tokens",
    "EIP-4",
    "token creation",
    "digital assets",
    "NFT minting",
    "first-class tokens",
    "protocol-level tokens",
    "no smart contract tokens"
  ],
  alternates: {
    canonical: "https://ergoblockchain.org/technology/native-tokens"
  },
  openGraph: {
    title: "Native Tokens & NFTs - First-Class Assets on Ergo",
    description: "Create tokens and NFTs in one transaction. No smart contracts needed, instant DeFi compatibility.",
    url: "https://ergoblockchain.org/technology/native-tokens",
    siteName: "Ergo Platform",
    images: [{
      url: "https://ergoblockchain.org/og/technology-1200x630.png",
      width: 1200,
      height: 630,
      alt: "Ergo Native Tokens and NFTs"
    }],
    type: "article",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Native Tokens & NFTs | Ergo",
    description: "First-class tokens without smart contracts. Create in one TX with minimal fees.",
    images: ["https://ergoblockchain.org/og/technology-1200x630.png"],
    creator: "@ergoplatform",
    site: "@ergoplatform"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
}

export default function NativeTokensLayout({ children }: { children: React.ReactNode }) {
  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": "https://ergoblockchain.org/technology/native-tokens",
    headline: "Native Tokens & NFTs on Ergo Blockchain",
    description: "How to create first-class tokens and NFTs without smart contracts on Ergo",
    image: "https://ergoblockchain.org/og/technology-1200x630.png",
    datePublished: "2023-01-15",
    dateModified: new Date().toISOString().split('T')[0],
    author: {
      "@type": "Organization",
      name: "Ergo Platform",
      url: "https://ergoblockchain.org"
    },
    publisher: {
      "@type": "Organization",
      name: "Ergo Platform",
      url: "https://ergoblockchain.org",
      logo: {
        "@type": "ImageObject",
        url: "https://ergoblockchain.org/favicon.ico"
      }
    },
    mainEntityOfPage: "https://ergoblockchain.org/technology/native-tokens",
    about: [
      { "@type": "Thing", name: "Digital tokens" },
      { "@type": "Thing", name: "NFT" },
      { "@type": "Thing", name: "Token creation" }
    ],
    proficiencyLevel: "Beginner",
    technicalAudience: "Token creators and NFT artists"
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }} />
      {children}
    </>
  )
}
