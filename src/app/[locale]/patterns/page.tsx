import type { Metadata } from "next"
import { PatternsHubClient } from "./PatternsHubClient"
import { devPatterns, categoryLabels, categoryDescriptions, getAllCategories } from "@/data/dev-patterns"
import { siteConfig } from "@/config/site-config"
import { createBreadcrumbSchema, createCollectionSchema } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"
import { getScopedMessages, getTranslations } from "@/lib/messages"
import type { Locale } from "@/i18n/request"

interface Props {
  params: Promise<{ locale: string }>
}

const origin = siteConfig.siteUrl
const url = `${origin}/patterns`

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const messages = await getScopedMessages(locale as Locale, ['content-hubs', 'patterns'])
  const t = getTranslations(messages, 'patternsPage.seo')

  const title = t('title')
  const description = t('description')

  return {
    title,
    description,
    keywords: ["ErgoScript patterns", "Ergo smart contracts", "ErgoScript examples", "eUTXO patterns", "Ergo developer", "blockchain patterns", "DeFi patterns", "copy paste smart contracts"],
    openGraph: {
      title,
      description,
      url: `${siteConfig.siteUrl}/patterns`,
      type: "website",
      images: [{ url: `${siteConfig.siteUrl}/og/hubs/pattern.png`, width: 1200, height: 630 }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    },
    alternates: { canonical: `${siteConfig.siteUrl}/patterns` }
  }
}

export default function PatternsPage() {
  const categories = getAllCategories().map(cat => ({
    id: cat,
    label: categoryLabels[cat],
    description: categoryDescriptions[cat],
    count: devPatterns.filter(p => p.category === cat).length
  }))

  // ItemList schema for patterns (complex, kept structured)
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${url}#itemlist`,
    name: "ErgoScript Smart Contract Patterns",
    description: "Collection of educational ErgoScript patterns for building and reviewing smart contracts on Ergo blockchain.",
    numberOfItems: devPatterns.length,
    itemListElement: devPatterns.map((pattern, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareSourceCode",
        "@id": `${origin}/patterns/${pattern.slug}`,
        name: pattern.title,
        description: pattern.shortDescription,
        url: `${origin}/patterns/${pattern.slug}`,
        programmingLanguage: { "@type": "ComputerLanguage", name: "ErgoScript" },
      }
    }))
  }

  const schemas = [
    itemListSchema,
    createCollectionSchema({
      name: "ErgoScript Developer Patterns",
      description: "18 educational ErgoScript patterns for time-locks, multi-sig, AMM, oracles and more. Study, adapt, test, and review.",
      url: "/patterns",
    }),
    createBreadcrumbSchema([{ name: "Patterns", href: "/patterns" }]),
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      <PatternsHubClient patterns={devPatterns} categories={categories} />
    </>
  )
}
