import { Metadata } from "next"
import { SchemaTypes } from "@/lib/schema-ultimate"

export const metadata: Metadata = {
  title: "eUTXO Model: Parallel Smart Contracts | Ergo",
  description: "Learn how Ergo's Extended UTXO model enables parallel execution, MEV resistance, and composable DeFi. No re-entrancy attacks by design.",
  keywords: [
    "eUTXO",
    "Extended UTXO",
    "UTXO model",
    "parallel execution",
    "smart contracts",
    "MEV resistance",
    "composability",
    "Ergo blockchain",
    "DeFi security",
    "box model",
    "no reentrancy",
    "ethereum comparison"
  ],
  alternates: {
    canonical: "https://ergoblockchain.org/technology/eutxo-model"
  },
  openGraph: {
    title: "eUTXO Model - Parallel Smart Contracts on Ergo",
    description: "Extended UTXO enables parallel execution, MEV resistance, and composable DeFi. Compare eUTXO vs account model.",
    url: "https://ergoblockchain.org/technology/eutxo-model",
    siteName: "Ergo Platform",
    images: [{
      url: "https://ergoblockchain.org/og/eutxo-vs-accounts.png",
      width: 1200,
      height: 630,
      alt: "Ergo eUTXO Model"
    }],
    type: "article",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "eUTXO Model - Parallel Smart Contracts | Ergo",
    description: "Learn how Extended UTXO enables parallel execution and eliminates re-entrancy attacks.",
    images: ["https://ergoblockchain.org/og/eutxo-vs-accounts.png"],
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

export default function EUTXOModelLayout({ children }: { children: React.ReactNode }) {
  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": "https://ergoblockchain.org/technology/eutxo-model",
    headline: "Extended UTXO Model on Ergo Blockchain",
    description: "Comprehensive guide to Ergo's eUTXO model for parallel smart contract execution",
    image: "https://ergoblockchain.org/og/eutxo-vs-accounts.png",
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
    mainEntityOfPage: "https://ergoblockchain.org/technology/eutxo-model",
    about: [
      { "@type": "Thing", name: "UTXO" },
      { "@type": "Thing", name: "Smart contracts" },
      { "@type": "Thing", name: "Blockchain scalability" }
    ],
    proficiencyLevel: "Intermediate",
    technicalAudience: "Developers and blockchain researchers"
  }

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Ergo eUTXO Smart Contracts",
    applicationCategory: "Blockchain Platform",
    operatingSystem: "Cross-platform",
    description: "Extended UTXO model for parallel, composable smart contracts",
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

