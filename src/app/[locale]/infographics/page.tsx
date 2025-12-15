import type { Metadata } from "next"
import { InfographicsClient } from "./InfographicsClient"
import { siteConfig } from "@/config/site-config"
import { infographics } from "@/data/infographics"
import {
  createBreadcrumbSchema,
  createCollectionSchema,
} from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

const origin = siteConfig.siteUrl
const url = `${origin}/infographics`

// SEO Configuration
const SEO = {
  title: 'Ergo Blockchain Infographics – Visual Guides to PoW, DeFi, Storage Rent & Privacy',
  description: 'Discover visual explainers of the Ergo blockchain: PoW consensus, eUTXO smart contracts, storage rent, privacy with Sigma protocols, NiPoPoWs and more. Save, share and reuse with attribution.',
  keywords: [
    'Ergo infographics', 'blockchain visual guides', 'Ergo PoW explained', 'eUTXO diagrams',
    'storage rent visualization', 'Sigma protocols infographic', 'NiPoPoWs explained',
    'Ergo vs VC chains', 'Autolykos mining', 'ErgoScript tutorial', 'oracle pools diagram',
    'blockchain education', 'visual learning', 'Ergo ecosystem'
  ],
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: SEO.title,
    description: SEO.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      siteName: "Ergo Platform",
      title: SEO.title,
      description: SEO.description,
      images: [{ url: `${origin}/og/infographics-hub.svg`, width: 1200, height: 630, alt: SEO.title }],
      locale: "en_US"
    },
    twitter: {
      card: 'summary_large_image',
      title: SEO.title,
      description: SEO.description,
      images: [`${origin}/og/infographics-hub.svg`],
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
    },
    robots: { index: true, follow: true },
    keywords: SEO.keywords,
  }
}

export default function InfographicsPage() {
  // Custom ItemList for infographics (complex, kept structured)
  const infographicsItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${url}#itemlist`,
    name: "Ergo Blockchain Infographics Collection",
    description: "Visual guides to Ergo's PoW, eUTXO smart contracts, storage rent, privacy and global settlement.",
    numberOfItems: infographics.length,
    itemListElement: infographics.slice(0, 20).map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "ImageObject",
        "@id": `${origin}/infographics/${item.slug}`,
        name: item.title,
        description: item.shortDescription,
        url: `${origin}/infographics/${item.slug}`,
        contentUrl: `${origin}${item.fullImageUrl}`,
        thumbnailUrl: `${origin}${item.previewImageUrl}`,
        datePublished: item.publishDate,
        author: { "@type": "Organization", name: "Ergo Platform" }
      }
    }))
  }

  const schemas = [
    createCollectionSchema({
      name: "Ergo Blockchain Infographics",
      description: "Visual guides to Ergo's PoW, eUTXO smart contracts, storage rent, privacy and global settlement. Save, share, and reuse them with attribution to ergoblockchain.org.",
      url: "/infographics",
    }),
    createBreadcrumbSchema([{ name: "Infographics", href: "/infographics" }]),
    infographicsItemList,
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      <InfographicsClient />
    </>
  )
}
