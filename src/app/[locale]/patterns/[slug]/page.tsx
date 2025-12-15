/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getMessages } from 'next-intl/server'
import { PatternPageClient } from "./PatternPageClient"
import { devPatterns, getPatternBySlug, categoryLabels, type DevPattern } from "@/data/dev-patterns"
import { getLocalizedPatterns, type PatternsTranslations } from "@/data/patterns-i18n"
import { siteConfig } from "@/config/site-config"
import { createBreadcrumbSchema, createTechArticleSchema } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

interface Props {
  params: Promise<{ slug: string; locale: string }>
}

// Helper to get localized pattern by slug
function getLocalizedPatternBySlug(slug: string, translations?: PatternsTranslations): DevPattern | undefined {
  const patterns = getLocalizedPatterns(translations)
  return patterns.find(p => p.slug === slug)
}

export async function generateStaticParams() {
  return devPatterns.map((pattern) => ({ slug: pattern.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params
  
  // Get translations for non-English locales
  let pattern: DevPattern | undefined
  if (locale !== 'en') {
    try {
      const messages = await getMessages({ locale }) as { patternsData?: PatternsTranslations }
      pattern = getLocalizedPatternBySlug(slug, messages?.patternsData)
    } catch {
      pattern = getPatternBySlug(slug)
    }
  } else {
    pattern = getPatternBySlug(slug)
  }
  
  if (!pattern) {
    return { title: "Pattern Not Found" }
  }

  return {
    title: pattern.seoTitle,
    description: pattern.seoDescription,
    keywords: pattern.keywords,
    openGraph: {
      title: pattern.seoTitle,
      description: pattern.seoDescription,
      url: `${siteConfig.siteUrl}/patterns/${slug}`,
      type: "article",
      images: [{ url: `${siteConfig.siteUrl}/og/patterns/${slug}.png`, width: 1200, height: 630 }]
    },
    twitter: {
      card: "summary_large_image",
      title: pattern.seoTitle,
      description: pattern.seoDescription
    },
    alternates: { canonical: `${siteConfig.siteUrl}/patterns/${slug}` }
  }
}

export default async function PatternPage({ params }: Props) {
  const { slug, locale } = await params
  
  // Get translations for non-English locales
  let pattern: DevPattern | undefined
  let translations: PatternsTranslations | undefined
  if (locale !== 'en') {
    try {
      const messages = await getMessages({ locale }) as { patternsData?: PatternsTranslations }
      translations = messages?.patternsData
      pattern = getLocalizedPatternBySlug(slug, translations)
    } catch {
      pattern = getPatternBySlug(slug)
    }
  } else {
    pattern = getPatternBySlug(slug)
  }
  
  if (!pattern) {
    notFound()
  }

  const relatedPatterns = pattern.relatedPatterns
    .map(s => translations ? getLocalizedPatternBySlug(s, translations) : getPatternBySlug(s))
    .filter(Boolean)

  const categoryLabel = categoryLabels[pattern.category]

  // Map pattern difficulty to schema proficiency level
  const difficultyMap: Record<string, "Beginner" | "Intermediate" | "Advanced"> = {
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced"
  }
  
  const schemas = [
    createTechArticleSchema(`/patterns/${slug}`, {
      headline: pattern.title,
      description: pattern.seoDescription,
      datePublished: pattern.publishDate,
      dateModified: pattern.updatedDate || pattern.publishDate,
      keywords: pattern.keywords,
      proficiencyLevel: difficultyMap[pattern.difficulty],
    }),
    createBreadcrumbSchema([
      { name: "Patterns", href: "/patterns" },
      { name: pattern.title, href: `/patterns/${slug}` },
    ]),
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      <PatternPageClient 
        pattern={pattern} 
        relatedPatterns={relatedPatterns as any[]}
        categoryLabel={categoryLabel}
      />
    </>
  )
}
