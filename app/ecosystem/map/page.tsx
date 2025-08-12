import type { Metadata } from "next"
import MapClient from "./MapClient"
import { SchemaTypes } from "@/lib/schema-ultimate"
import { generateKnowledgeGraph } from "@/lib/entity-knowledge-graph"

export const metadata: Metadata = {
  title: "Ergo Ecosystem Map | Interactive DeFi & dApp Directory",
  description: "Explore the complete Ergo ecosystem visually. Interactive map of DeFi protocols, NFT platforms, wallets, infrastructure, and developer tools. Discover 50+ active projects.",
  keywords: ["ergo ecosystem", "defi map", "dapp directory", "blockchain ecosystem", "ergo projects", "interactive map", "defi protocols", "crypto ecosystem"],
  alternates: {
    canonical: "https://ergoblockchain.org/ecosystem/map"
  },
  openGraph: {
    title: "Interactive Ergo Ecosystem Map | 50+ Projects",
    description: "Visual exploration of all Ergo projects. DeFi, NFTs, wallets, infrastructure mapped.",
    url: "https://ergoblockchain.org/ecosystem/map",
    siteName: "Ergo Platform",
    images: [{
      url: "https://ergoblockchain.org/og/ecosystem-map.png",
      width: 1200,
      height: 630,
      alt: "Ergo Ecosystem Interactive Map"
    }],
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ergo Ecosystem Map | Visual Project Explorer",
    description: "Interactive visualization of 50+ Ergo projects. Explore DeFi, NFTs, infrastructure.",
    images: ["https://ergoblockchain.org/og/ecosystem-map.png"],
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

export default function EcosystemMapPage() {
  // SEO схемы для карты экосистемы
  const mapSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": "https://ergoblockchain.org/ecosystem/map",
    name: "Ergo Ecosystem Interactive Map",
    description: "Visual explorer for Ergo blockchain projects and applications",
    applicationCategory: "VisualizationApplication",
    operatingSystem: "Web Browser",
    url: "https://ergoblockchain.org/ecosystem/map",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    },
    creator: {
      "@type": "Organization",
      name: "Ergo Platform",
      url: "https://ergoblockchain.org"
    }
  }
  
  const faqSchema = SchemaTypes.FAQSchema([
    {
      question: "What is the Ergo Ecosystem Map?",
      answer: "An interactive visualization showing all active projects, protocols, and applications built on Ergo blockchain, organized by category."
    },
    {
      question: "How many projects are in the Ergo ecosystem?",
      answer: "The Ergo ecosystem includes over 50 active projects spanning DeFi, NFTs, wallets, infrastructure, developer tools, and community initiatives."
    },
    {
      question: "How do I add my project to the map?",
      answer: "Submit your project through the ecosystem submission form or contact the Ergo Foundation to be included in the ecosystem map."
    },
    {
      question: "Is the ecosystem map updated regularly?",
      answer: "Yes, the ecosystem map is regularly updated to include new projects and remove inactive ones, providing an accurate view of the active ecosystem."
    }
  ])
  
  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Ergo Ecosystem Projects Dataset",
    description: "Complete dataset of projects building on Ergo blockchain",
    creator: {
      "@type": "Organization",
      name: "Ergo Platform"
    },
    distribution: {
      "@type": "DataDownload",
      encodingFormat: "application/json",
      contentUrl: "https://ergoblockchain.org/api/ecosystem"
    },
    temporalCoverage: "2019/..",
    spatialCoverage: {
      "@type": "Place",
      name: "Global"
    },
    keywords: ["blockchain", "defi", "ecosystem", "ergo", "projects"]
  }
  
  const knowledgeGraph = generateKnowledgeGraph('ecosystem')
  
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(mapSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraph) }} />
      
      <MapClient />
    </>
  )
} 