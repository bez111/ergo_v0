import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { siteConfig } from "@/config/site-config"
import { comparisons, getComparisonBySlug } from "@/data/comparisons"
import { ComparePageClient } from "./ComparePageClient"
import { createBreadcrumbSchema, createFAQSchema, createTechArticleSchema } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

interface Props {
  params: Promise<{ competitor: string; locale: string }>
}

// Generate static params for all comparison pages
export async function generateStaticParams() {
  return comparisons.map((comparison) => ({
    competitor: `ergo-vs-${comparison.slug}`,
  }))
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  const slug = params.competitor.replace("ergo-vs-", "")
  const comparison = getComparisonBySlug(slug)

  if (!comparison) {
    return { title: "Comparison Not Found", description: "The requested comparison could not be found." }
  }

  const origin = siteConfig.siteUrl
  const url = `${origin}/compare/ergo-vs-${comparison.slug}`

  return {
    title: comparison.seoTitle,
    description: comparison.seoDescription,
    keywords: comparison.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: "Ergo Platform",
      title: comparison.seoTitle,
      description: comparison.seoDescription,
      images: [{ url: comparison.ogImage || `${origin}/og/compare-${comparison.slug}.png`, width: 1200, height: 630, alt: `Ergo vs ${comparison.name} Comparison` }],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: comparison.seoTitle,
      description: comparison.seoDescription,
      images: [comparison.ogImage || `${origin}/og/compare-${comparison.slug}.png`],
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
    },
    robots: { index: true, follow: true },
  }
}

export default async function CompareDetailPage(props: Props) {
  const params = await props.params
  const slug = params.competitor.replace("ergo-vs-", "")
  const comparison = getComparisonBySlug(slug)

  if (!comparison) {
    notFound()
  }

  const url = `/compare/ergo-vs-${comparison.slug}`

  // FAQ items from comparison data
  const faqItems = comparison.faq.map(item => ({
    question: item.question,
    answer: item.answer
  }))

  const schemas = [
    createTechArticleSchema(url, {
      headline: comparison.seoTitle,
      description: comparison.seoDescription,
      image: comparison.ogImage || `/og/compare-${comparison.slug}.png`,
      datePublished: comparison.publishDate,
      dateModified: comparison.updatedDate || comparison.publishDate,
      keywords: comparison.keywords,
    }),
    createBreadcrumbSchema([
      { name: "Compare", href: "/compare" },
      { name: `Ergo vs ${comparison.name}`, href: url },
    ]),
    createFAQSchema(faqItems),
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      <ComparePageClient comparison={comparison} />
    </>
  )
}
