import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import IntroductionClient from "./IntroductionClient"
import { createBreadcrumbSchema, createTechArticleSchema, getAlternates, getCanonicalUrl } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'start.introduction.seo' })
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: getAlternates('/start/introduction', locale),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: getCanonicalUrl('/start/introduction', locale),
      siteName: "Ergo Platform",
      images: [{ url: "https://www.ergoblockchain.org/og/introduction.png", width: 1200, height: 630, alt: t('ogAlt') }],
      type: "article",
      locale: "en_US"
    },
    twitter: {
      card: "summary_large_image",
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: ["https://www.ergoblockchain.org/og/introduction.png"]
    }
  }
}

export default function IntroductionPage() {
  // Learning resource schema (special type, kept structured)
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
  
  const schemas = [
    createTechArticleSchema("/start/introduction", {
      headline: "Introduction to Ergo Blockchain",
      description: "Comprehensive guide for beginners to understand Ergo",
      image: "/og/introduction.png",
      datePublished: "2024-01-01",
      proficiencyLevel: "Beginner",
    }),
    learningResourceSchema,
    createBreadcrumbSchema([
      { name: "Start", href: "/start" },
      { name: "Introduction", href: "/start/introduction" },
    ]),
  ]
  
  return (
    <>
      {renderSchemaScripts(schemas)}
      <IntroductionClient />
    </>
  )
}
