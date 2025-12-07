import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Oracle Pools: Decentralized Data Feeds | Ergo",
  description: "Protocol-native decentralized oracles on Ergo. Reliable price feeds for DeFi without centralized operators or single points of failure.",
  keywords: [
    "Oracle Pools",
    "decentralized oracles",
    "price feeds",
    "DeFi oracles",
    "blockchain oracles",
    "Ergo oracles",
    "data feeds",
    "on-chain aggregation",
    "SigmaUSD",
    "permissionless oracles"
  ],
  alternates: {
    canonical: "https://ergoblockchain.org/technology/oracle-pools"
  },
  openGraph: {
    title: "Oracle Pools - Decentralized Data Feeds on Ergo",
    description: "Protocol-native oracles for DeFi. Reliable price feeds without centralized operators.",
    url: "https://ergoblockchain.org/technology/oracle-pools",
    siteName: "Ergo Platform",
    images: [{
      url: "https://ergoblockchain.org/og/oracle-pools-explained.png",
      width: 1200,
      height: 630,
      alt: "Ergo Oracle Pools"
    }],
    type: "article",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Oracle Pools - Decentralized Data Feeds | Ergo",
    description: "Protocol-native oracles for DeFi. No centralized operators, no single points of failure.",
    images: ["https://ergoblockchain.org/og/oracle-pools-explained.png"],
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

export default function OraclePoolsLayout({ children }: { children: React.ReactNode }) {
  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": "https://ergoblockchain.org/technology/oracle-pools",
    headline: "Oracle Pools: Decentralized Data Feeds on Ergo",
    description: "How Ergo's native oracle pools provide reliable, decentralized price feeds for DeFi",
    image: "https://ergoblockchain.org/og/oracle-pools-explained.png",
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
    mainEntityOfPage: "https://ergoblockchain.org/technology/oracle-pools",
    about: [
      { "@type": "Thing", name: "Oracle" },
      { "@type": "Thing", name: "DeFi" },
      { "@type": "Thing", name: "Price feeds" }
    ],
    proficiencyLevel: "Intermediate",
    technicalAudience: "DeFi developers"
  }

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Ergo Oracle Pools",
    applicationCategory: "Blockchain Infrastructure",
    operatingSystem: "Cross-platform",
    description: "Decentralized oracle infrastructure for reliable price feeds",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    }
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      {children}
    </>
  )
}
