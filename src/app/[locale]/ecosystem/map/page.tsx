import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import MapClient from "./MapClient"
import { generateKnowledgeGraph } from "@/lib/entity-knowledge-graph"
import {
  createWebApplicationSchema,
  createFAQSchema,
  createDatasetSchema,
  getAlternates,
  getCanonicalUrl,
} from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'ecosystem.map.seo' })

  const title = t('title')
  const description = t('description')

  return {
    title,
    description,
    keywords: ["ergo ecosystem", "defi map", "dapp directory", "blockchain ecosystem", "ergo projects", "interactive map", "defi protocols", "crypto ecosystem"],
    alternates: getAlternates('/ecosystem/map', locale),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: getCanonicalUrl('/ecosystem/map', locale),
      siteName: "Ergo Platform",
      images: [{
        url: "https://ergoblockchain.org/og/ecosystem-map.png",
        width: 1200,
        height: 630,
        alt: "Ergo Ecosystem Interactive Map"
      }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t('twitterTitle'),
      description: t('twitterDescription'),
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
}

export default function EcosystemMapPage() {
  // Centralized SEO schemas
  const mapSchema = createWebApplicationSchema({
    name: "Ergo Ecosystem Interactive Map",
    description: "Visual explorer for Ergo blockchain projects and applications",
    applicationCategory: "VisualizationApplication",
    url: "https://ergoblockchain.org/ecosystem/map",
  })

  const faqSchema = createFAQSchema([
    {
      question: "What is the Ergo Ecosystem Map?",
      answer: "An interactive visualization showing all active projects, protocols, and applications built on Ergo blockchain, organized by category.",
    },
    {
      question: "How many projects are in the Ergo ecosystem?",
      answer: "The Ergo ecosystem includes over 50 active projects spanning DeFi, NFTs, wallets, infrastructure, developer tools, and community initiatives.",
    },
    {
      question: "How do I add my project to the map?",
      answer: "Submit your project through the ecosystem submission form or contact the Ergo Foundation to be included in the ecosystem map.",
    },
    {
      question: "Is the ecosystem map updated regularly?",
      answer: "Yes, the ecosystem map is regularly updated to include new projects and remove inactive ones, providing an accurate view of the active ecosystem.",
    },
  ])

  const datasetSchema = createDatasetSchema({
    name: "Ergo Ecosystem Projects Dataset",
    description: "Complete dataset of projects building on Ergo blockchain",
    contentUrl: "https://ergoblockchain.org/api/ecosystem",
    temporalCoverage: "2019/..",
    keywords: ["blockchain", "defi", "ecosystem", "ergo", "projects"],
  })

  const knowledgeGraph = generateKnowledgeGraph("ecosystem")

  return (
    <>
      {renderSchemaScripts([mapSchema, faqSchema, datasetSchema, knowledgeGraph])}
      <MapClient />
    </>
  )
}
