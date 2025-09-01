import type { Metadata } from "next"
import GuidesClient from "./GuidesClient"
import { SchemaTypes } from "@/lib/schema-ultimate"
import { generateKnowledgeGraph } from "@/lib/entity-knowledge-graph"
import { getTranslations } from "next-intl/server"
import { useTranslations } from "next-intl"

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'use.guides.seo' })
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: "https://ergoblockchain.org/use/guides"
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: "https://ergoblockchain.org/use/guides",
      siteName: "Ergo Platform",
      images: [{
        url: "https://ergoblockchain.org/og/guides.png",
        width: 1200,
        height: 630,
        alt: "Ergo User Guides"
      }],
      type: "website",
      locale: "en_US"
    },
    twitter: {
      card: "summary_large_image",
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: ["https://ergoblockchain.org/og/guides.png"],
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

export default function GuidesPage() {
  const t = useTranslations('use.guides.schema')

  // SEO схемы для Guides
  const guidesCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://ergoblockchain.org/use/guides",
    name: t('collection.name'),
    description: t('collection.description'),
    hasPart: [
      {
        "@type": "HowTo",
        name: t('collection.guides.wallet.name'),
        description: t('collection.guides.wallet.description')
      },
      {
        "@type": "HowTo",
        name: t('collection.guides.defi.name'),
        description: t('collection.guides.defi.description')
      },
      {
        "@type": "HowTo",
        name: t('collection.guides.mining.name'),
        description: t('collection.guides.mining.description')
      },
      {
        "@type": "HowTo",
        name: t('collection.guides.nft.name'),
        description: t('collection.guides.nft.description')
      }
    ]
  }
  
  const faqSchema = SchemaTypes.FAQSchema([
    {
      question: t('faq.available.question'),
      answer: t('faq.available.answer')
    },
    {
      question: t('faq.beginners.question'),
      answer: t('faq.beginners.answer')
    },
    {
      question: t('faq.updates.question'),
      answer: t('faq.updates.answer')
    },
    {
      question: t('faq.help.question'),
      answer: t('faq.help.answer')
    }
  ])
  
  const learningResourceSchema = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: t('learningResource.name'),
    description: t('learningResource.description'),
    learningResourceType: "Guide",
    educationalLevel: t('learningResource.level'),
    teaches: t('learningResource.teaches'),
    provider: {
      "@type": "Organization",
      name: "Ergo Platform"
    }
  }
  
  const knowledgeGraph = generateKnowledgeGraph('guides')
  
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(guidesCollectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(learningResourceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraph) }} />
      
      <GuidesClient />
    </>
  )
} 