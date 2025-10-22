import type { Metadata } from "next"
import UseClient from "./UseClient"
import { useCases } from "./_data"
import { SchemaTypes } from "@/lib/schema-ultimate"
import { generateKnowledgeGraph } from "@/lib/entity-knowledge-graph"
import { getTranslations } from "next-intl/server"

export const revalidate = 600

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'use' })
  const title = t('title') + " — DeFi, NFTs, Privacy, Bridges"
  const description = t('description')
  const url = "https://ergoblockchain.org/use"
  const twitterHandle = process.env['NEXT_PUBLIC_TWITTER_HANDLE']
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        "x-default": url,
        en: url,
      },
    },
    openGraph: {
      type: "website",
      url,
      siteName: "ergoblockchain.org",
      title,
      description,
      images: [{ url: "https://ergoblockchain.org/og/use-cases.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      images: ["https://ergoblockchain.org/og/use-cases.png"],
      ...(twitterHandle ? { site: twitterHandle, creator: twitterHandle } : {}),
    },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  }
}

export default async function UsePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'use' })
  const base = "https://ergoblockchain.org/use"

  const listJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${base}#list`,
    itemListOrder: "Ascending",
    numberOfItems: useCases.length,
    itemListElement: useCases.map((u, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "WebPage",
        "@id": `${base}/${u.id}`,
        name: u.title,
        url: `${base}/${u.id}`,
        description: u.description,
        inLanguage: "en",
        keywords: (u.tags || []).join(", "),
        about: (u.tags || []).map((t) => ({ "@type": "Thing", name: t })),
      },
    })),
  }

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${base}#collection`,
    name: t('title'),
    url: base,
    isPartOf: { "@type": "WebSite", "@id": "https://ergoblockchain.org#website" },
    inLanguage: "en",
    mainEntity: { "@id": `${base}#list` },
  }

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${base}#breadcrumbs`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://ergoblockchain.org/" },
      { "@type": "ListItem", position: 2, name: t('title'), item: base },
    ],
  }
  
  // Добавляем продвинутые SEO схемы
  const knowledgeGraph = generateKnowledgeGraph('use')
  
  const faqSchema = SchemaTypes.FAQSchema([
    {
      question: t('faq.whatCanDo.question'),
      answer: t('faq.whatCanDo.answer')
    },
    {
      question: t('faq.defiProtocols.question'),
      answer: t('faq.defiProtocols.answer')
    },
    {
      question: t('faq.createNfts.question'),
      answer: t('faq.createNfts.answer')
    },
    {
      question: t('faq.privacyWork.question'),
      answer: t('faq.privacyWork.answer')
    }
  ])
  
  const speakableSchema = SchemaTypes.SpeakableSchema({
    headline: t('title'),
    summary: t('description'),
    url: base
  })

  return (
    <>
      {/* Существующие схемы */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }} />
      
      {/* Новые продвинутые схемы */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraph) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      
      <UseClient />
    </>
  )
} 
