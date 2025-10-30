import type { Metadata } from "next"
import EcosystemClient from "./EcosystemClient"
import { projects as allProjects, sortProjectsForListing } from "./_data"
import { SchemaTypes } from "@/lib/schema-ultimate"
import { generateKnowledgeGraph } from "@/lib/entity-knowledge-graph"
import { getTranslations } from "next-intl/server"

export const revalidate = 600

export async function generateMetadata({ searchParams, params }: { 
  searchParams: Promise<Record<string, string | string[]>>, 
  params: Promise<{ locale: string }> 
}): Promise<Metadata> {
  const sp = await searchParams
  const { locale } = await params
  const hasQueries = !!sp && Object.keys(sp).length > 0
  const canonical = "https://ergoblockchain.org/ecosystem"
  const t = await getTranslations({ locale, namespace: 'ecosystem.seo' })
  
  return {
    title: t('title'),
    description: t('description'),
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: [{ url: "/og/ecosystem.png", width: 1200, height: 630 }],
      siteName: "Ergo",
      locale: "en_US",
    },
    twitter: { card: "summary_large_image", site: "@ergoplatform", creator: "@ergoplatform" },
    robots: hasQueries ? { index: false, follow: true } : { index: true, follow: true },
  }
}

const sortedAllProjects = sortProjectsForListing(allProjects);

export default function EcosystemPage() {
  const sorted = sortedAllProjects

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://ergoblockchain.org/ecosystem#list",
    itemListOrder: "Ascending",
    numberOfItems: sorted.length,
    itemListElement: sorted.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "WebSite",
        name: p.name,
        url: p.url,
      },
    })),
  }

  const collectionPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://ergoblockchain.org/ecosystem#collection",
    name: "Ergo Ecosystem",
    url: "https://ergoblockchain.org/ecosystem",
    isPartOf: { "@type": "WebSite", "@id": "https://ergoblockchain.org#website" },
    inLanguage: "en",
  }

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://ergoblockchain.org/ecosystem#breadcrumbs",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://ergoblockchain.org/" },
      { "@type": "ListItem", position: 2, name: "Ecosystem", item: "https://ergoblockchain.org/ecosystem" },
    ],
  }
  
  // Добавляем продвинутые SEO схемы
  const knowledgeGraph = generateKnowledgeGraph('ecosystem')
  
  const faqSchema = SchemaTypes.FAQSchema([
    {
      question: "What is the Ergo ecosystem?",
      answer: "The Ergo ecosystem consists of DeFi protocols, NFT marketplaces, developer tools, wallets, and community projects built on the Ergo blockchain."
    },
    {
      question: "What DeFi projects are on Ergo?",
      answer: "Key DeFi projects include SigmaUSD (algorithmic stablecoin), ErgoDEX (DEX), lending protocols, and oracle pools."
    },
    {
      question: "Which wallets support Ergo?",
      answer: "Popular Ergo wallets include Nautilus (browser extension), Satergo (desktop), SAFEW (mobile), and Ergo Wallet (mobile)."
    },
    {
      question: "Are there NFT marketplaces on Ergo?",
      answer: "Yes, Ergo has NFT marketplaces like SkyHarbor for minting and trading NFTs with low fees."
    }
  ])
  
  const speakableSchema = SchemaTypes.SpeakableSchema({
    headline: "Ergo Ecosystem Directory",
    summary: "Complete directory of dApps, wallets, and tools built on Ergo blockchain",
    url: "https://ergoblockchain.org/ecosystem"
  })

  return (
    <>
      {/* Существующие схемы */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }} />
      
      {/* Новые продвинутые схемы */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraph) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      
      <EcosystemClient />
    </>
  )
}