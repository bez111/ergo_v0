import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { TopicPageClient } from './TopicPageClient'
import { getTopicBySlug, getAllTopicSlugs, getRelatedTopics } from '@/data/topics'
import { siteConfig } from '@/config/site-config'
import { createBreadcrumbSchema, createTechArticleSchema } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllTopicSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const topic = getTopicBySlug(slug)

  if (!topic) {
    return { title: 'Topic Not Found', description: 'The requested topic could not be found.' }
  }

  return {
    title: topic.seoTitle,
    description: topic.seoDescription,
    keywords: topic.keywords.join(', '),
    openGraph: {
      title: topic.seoTitle,
      description: topic.seoDescription,
      url: `${siteConfig.siteUrl}/topics/${slug}`,
      siteName: 'Ergo Blockchain',
      type: 'article',
      images: [{ url: `${siteConfig.siteUrl}/og/topics/${slug}.png`, width: 1200, height: 630, alt: topic.title }]
    },
    twitter: {
      card: 'summary_large_image',
      title: topic.seoTitle,
      description: topic.seoDescription,
      images: [`${siteConfig.siteUrl}/og/topics/${slug}.png`]
    },
    alternates: { canonical: `${siteConfig.siteUrl}/topics/${slug}` },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' } }
  }
}

export default async function TopicPage({ params }: Props) {
  const { slug } = await params
  const topic = getTopicBySlug(slug)

  if (!topic) {
    notFound()
  }

  const relatedTopicsList = topic.relatedTopics ? getRelatedTopics(topic.relatedTopics) : []
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

  const schemas = [
    createTechArticleSchema(`/topics/${slug}`, {
      headline: topic.title,
      description: topic.seoDescription,
      datePublished: topic.publishDate,
      dateModified: topic.updatedDate || topic.publishDate,
      keywords: topic.keywords,
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
