import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getMessages } from 'next-intl/server'
import { TopicPageClient } from './TopicPageClient'
import { getTopicBySlug, getAllTopicSlugs, getRelatedTopics, type TopicHub, type TopicResource } from '@/data/topics'
import { type TopicsTranslations } from '@/data/topics-i18n'
// infographics import reserved for future enhanceVisuals function
// import { infographics } from '@/data/infographics'
import { siteConfig } from '@/config/site-config'
import { createBreadcrumbSchema, createTechArticleSchema, getAlternates } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

// Enhanced visual with image data
export interface EnhancedVisual extends TopicResource {
  previewImageUrl?: string
  imageAlt?: string
}

interface Props {
  params: Promise<{ slug: string; locale: string }>
}

// Helper to enhance visuals with image data from infographics (reserved for future use)
/*
function enhanceVisuals(visuals: TopicResource[]): EnhancedVisual[] {
  return visuals.map(visual => {
    const urlSlug = visual.url.split('/').pop()
    const matchingInfographic = infographics.find(inf => inf.slug === urlSlug)
    
    if (matchingInfographic) {
      return {
        ...visual,
        previewImageUrl: matchingInfographic.previewImageUrl,
        imageAlt: matchingInfographic.imageAlt
      }
    }
    return visual
  })
}
*/

// Helper to apply translations to a topic
function applyTranslation(topic: TopicHub, translations?: TopicsTranslations): TopicHub {
  if (!translations) return topic
  const tr = translations[topic.slug]
  if (!tr) return topic
  
  return {
    ...topic,
    title: tr.title ?? topic.title,
    subtitle: tr.subtitle ?? topic.subtitle,
    heroStatement: tr.heroStatement ?? topic.heroStatement,
    introduction: tr.introduction ?? topic.introduction,
    whatMakesUnique: tr.whatMakesUnique ?? topic.whatMakesUnique,
    keyDifferentiators: tr.keyDifferentiators ?? topic.keyDifferentiators,
  }
}

export function generateStaticParams() {
  return getAllTopicSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params
  const baseTopic = getTopicBySlug(slug)

  if (!baseTopic) {
    return { title: 'Topic Not Found', description: 'The requested topic could not be found.' }
  }

  // Get translations for non-English locales
  let topic = baseTopic
  if (locale !== 'en') {
    try {
      const messages = await getMessages({ locale }) as { topicsData?: TopicsTranslations }
      topic = applyTranslation(baseTopic, messages?.topicsData)
    } catch {
      // Fallback to English if translations fail
    }
  }

  const path = `/topics/${slug}`

  return {
    title: topic.seoTitle,
    description: topic.seoDescription,
    keywords: topic.keywords.join(', '),
    openGraph: {
      title: topic.seoTitle,
      description: topic.seoDescription,
      url: `${siteConfig.siteUrl}${locale === 'en' ? '' : `/${locale}`}${path}`,
      siteName: 'Ergo Blockchain',
      type: 'article',
      locale: locale === 'en' ? 'en_US' : locale === 'ru' ? 'ru_RU' : 'zh_CN',
      images: [{ url: `${siteConfig.siteUrl}/og/topics/${slug}.png`, width: 1200, height: 630, alt: topic.title }]
    },
    twitter: {
      card: 'summary_large_image',
      title: topic.seoTitle,
      description: topic.seoDescription,
      images: [`${siteConfig.siteUrl}/og/topics/${slug}.png`]
    },
    alternates: getAlternates(path, locale),
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' } }
  }
}

export default async function TopicPage({ params }: Props) {
  const { slug, locale } = await params
  const baseTopic = getTopicBySlug(slug)

  if (!baseTopic) {
    notFound()
  }

  // Get translations for non-English locales
  let topic = baseTopic
  let translations: TopicsTranslations | undefined
  if (locale !== 'en') {
    try {
      const messages = await getMessages({ locale }) as { topicsData?: TopicsTranslations }
      translations = messages?.topicsData
      topic = applyTranslation(baseTopic, translations)
    } catch {
      // Fallback to English if translations fail
    }
  }

  // Apply translations to related topics too
  const baseRelatedTopics = baseTopic.relatedTopics ? getRelatedTopics(baseTopic.relatedTopics) : []
  const relatedTopicsList = baseRelatedTopics.map(t => applyTranslation(t, translations))
  const baseUrl = siteConfig.siteUrl

  // DefinedTermSet schema (complex, kept structured)
  const definedTermSetSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "name": `${topic.title} Key Terms`,
    "description": `Essential terminology for understanding ${topic.title}`,
    "hasDefinedTerm": topic.keyTerms.map(term => ({
      "@type": "DefinedTerm",
      "name": term.term,
      "description": term.shortDefinition,
      "url": `${baseUrl}/learn/glossary/${term.slug}`
    }))
  }

  // ItemList schema for resources (complex, kept structured)
  const allResources = [
    ...topic.startHere.map(r => ({ ...r, section: 'Start Here' })),
    ...topic.buildWithIt.map(r => ({ ...r, section: 'Build With It' })),
    ...topic.philosophy.map(r => ({ ...r, section: 'Philosophy' })),
    ...topic.visuals.map(r => ({ ...r, section: 'Visuals' }))
  ]

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `${topic.title} Resources`,
    "description": `Comprehensive resources for ${topic.title}`,
    "numberOfItems": allResources.length,
    "itemListElement": allResources.map((resource, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": resource.title,
      "url": resource.url.startsWith('http') ? resource.url : `${baseUrl}${resource.url}`,
      "description": resource.description || ''
    }))
  }

  // Enhanced WebPage schema with mainEntity, about, mentions, hasPart
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${baseUrl}/topics/${slug}#webpage`,
    "url": `${baseUrl}/topics/${slug}`,
    "name": topic.seoTitle,
    "description": topic.seoDescription,
    "isPartOf": {
      "@type": "WebSite",
      "@id": `${baseUrl}#website`
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": `${baseUrl}/og/topics/${slug}.png`
    },
    "datePublished": topic.publishDate,
    "dateModified": topic.updatedDate || topic.publishDate,
    // What this page is about (keyTerms as concepts)
    "about": topic.keyTerms.slice(0, 5).map(term => ({
      "@type": "DefinedTerm",
      "name": term.term,
      "description": term.shortDefinition,
      "url": `${baseUrl}/learn/glossary/${term.slug}`
    })),
    // Entities mentioned on this page
    "mentions": [
      ...topic.keyTerms.map(term => ({
        "@type": "DefinedTerm",
        "name": term.term,
        "url": `${baseUrl}/learn/glossary/${term.slug}`
      })),
      ...relatedTopicsList.map(rt => ({
        "@type": "Thing",
        "name": rt.title,
        "url": `${baseUrl}/topics/${rt.slug}`
      }))
    ],
    // Content sections as parts
    "hasPart": [
      {
        "@type": "WebPageElement",
        "name": "Start Here",
        "description": "Essential resources to understand the fundamentals",
        "position": 1
      },
      {
        "@type": "WebPageElement",
        "name": "Build With It",
        "description": "Developer documentation, patterns, and guides",
        "position": 2
      },
      {
        "@type": "WebPageElement",
        "name": "Philosophy & Narrative",
        "description": "Cypherpunk perspective and guiding principles",
        "position": 3
      },
      {
        "@type": "WebPageElement",
        "name": "Visual Resources",
        "description": "Infographics and visual explanations",
        "position": 4
      }
    ],
    // Related topics as sibling pages
    "relatedLink": relatedTopicsList.map(rt => `${baseUrl}/topics/${rt.slug}`)
  }

  const schemas = [
    webPageSchema,
    createTechArticleSchema(`/topics/${slug}`, {
      headline: topic.title,
      description: topic.seoDescription,
      datePublished: topic.publishDate,
      dateModified: topic.updatedDate || topic.publishDate,
      keywords: topic.keywords,
      about: topic.keyTerms.slice(0, 5).map(t => ({ name: t.term })),
    }),
    createBreadcrumbSchema([
      { name: "Topics", href: "/topics" },
      { name: topic.title, href: `/topics/${slug}` },
    ]),
    definedTermSetSchema,
    itemListSchema,
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      <TopicPageClient topic={topic} relatedTopics={relatedTopicsList} />
    </>
  )
}
