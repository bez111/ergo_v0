/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { PatternPageClient } from "./PatternPageClient"
import { devPatterns, getPatternBySlug, categoryLabels } from "@/data/dev-patterns"
import { siteConfig } from "@/config/site-config"
import { createBreadcrumbSchema, createTechArticleSchema } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

interface Props {
  params: Promise<{ slug: string; locale: string }>
}

export async function generateStaticParams() {
  return devPatterns.map((pattern) => ({ slug: pattern.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const pattern = getPatternBySlug(slug)
  
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
  const { slug } = await params
  const pattern = getPatternBySlug(slug)
  
  if (!pattern) {
    notFound()
  }

  const relatedPatterns = pattern.relatedPatterns
    .map(slug => getPatternBySlug(slug))
    .filter(Boolean)

  const categoryLabel = categoryLabels[pattern.category]

  const schemas = [
    createTechArticleSchema(`/patterns/${slug}`, {
      headline: pattern.title,
      description: pattern.seoDescription,
      datePublished: pattern.publishDate,
      dateModified: pattern.updatedDate || pattern.publishDate,
      keywords: pattern.keywords,
      proficiencyLevel: pattern.difficulty,
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
