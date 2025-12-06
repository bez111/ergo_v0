
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import IntroductionClient from "./IntroductionClient"
import { SchemaTypes } from "@/lib/schema-ultimate"
import { generateKnowledgeGraph } from "@/lib/entity-knowledge-graph"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'start.introduction.seo' });
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: "https://ergoblockchain.org/start/introduction"
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: "https://ergoblockchain.org/start/introduction",
      siteName: "Ergo Platform",
      images: [{
        url: "https://ergoblockchain.org/og/introduction.png",
        width: 1200,
        height: 630,
        alt: t('ogAlt')
      }],
      type: "article",
      locale: "en_US"
    },
    twitter: {
      card: "summary_large_image",
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: ["https://ergoblockchain.org/og/introduction.png"]
    }
  }
}

export default function IntroductionPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://ergoblockchain.org/start/introduction",
    headline: "Introduction to Ergo Blockchain",
    description: "Comprehensive guide for beginners to understand Ergo",
    author: {
      "@type": "Organization",
      name: "Ergo Platform"
    },
    publisher: {
      "@type": "Organization",
      name: "Ergo Platform",
      logo: {
        "@type": "ImageObject",
        url: "https://ergoblockchain.org/logo.png"
      }
    },
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString()
  }
  
  const learningResourceSchema = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: "Ergo Blockchain Introduction",
    description: "Educational resource for learning Ergo blockchain fundamentals",
    learningResourceType: "Presentation",
    educationalLevel: "Beginner",
    teaches: ["Blockchain", "Smart Contracts", "DeFi", "Cryptocurrency"],
    timeRequired: "PT30M"
  }
  
  const knowledgeGraph = generateKnowledgeGraph('education')
  
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(learningResourceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraph) }} />
      
      <IntroductionClient />
    </>
  )
} 