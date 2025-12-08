import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { QuestionPageClient } from './QuestionPageClient'
import { getQuestionBySlug, getRelatedQuestions, getAllQuestionSlugs } from '@/data/questions'
import { siteConfig } from '@/config/site-config'
import { createBreadcrumbSchema, createFAQSchema, createHowToSchema, createTechArticleSchema } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllQuestionSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const question = getQuestionBySlug(slug)

  if (!question) {
    return { title: 'Question Not Found', description: 'The requested question could not be found.' }
  }

  const title = question.seoTitle || question.query
  const description = question.seoDescription || question.shortAnswer

  return {
    title: `${title} | Ergo Q&A`,
    description,
    keywords: [question.category, question.persona, ...question.keyPoints?.slice(0, 3) || []].join(', '),
    openGraph: {
      title,
      description,
      url: `${siteConfig.siteUrl}/questions/${slug}`,
      siteName: 'Ergo Blockchain',
      type: 'article',
      images: [{ url: `${siteConfig.siteUrl}/og/blog-default.svg`, width: 1200, height: 630, alt: question.query }]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${siteConfig.siteUrl}/og/blog-default.svg`]
    },
    alternates: { canonical: `${siteConfig.siteUrl}/questions/${slug}` },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' } }
  }
}

export default async function QuestionPage({ params }: Props) {
  const { slug } = await params
  const question = getQuestionBySlug(slug)

  if (!question) {
    notFound()
  }

  const relatedQuestions = question.relatedQuestions ? getRelatedQuestions(question.relatedQuestions) : []
  const baseUrl = siteConfig.siteUrl

  // Build schemas based on question type
  const schemas: object[] = [
    createBreadcrumbSchema([
      { name: "Q&A", href: "/questions" },
      { name: question.query, href: `/questions/${slug}` },
    ]),
  ]

  // Add type-specific schema
  if (question.jsonLdType === 'FAQPage' || question.jsonLdType === 'QAPage') {
    schemas.push(createFAQSchema([{
      question: question.query,
      answer: question.shortAnswer + (question.keyPoints ? ' ' + question.keyPoints.join(' ') : '')
    }]))
  } else if (question.jsonLdType === 'HowTo') {
    schemas.push(createHowToSchema({
      name: question.query,
      description: question.shortAnswer,
      steps: question.keyPoints?.map(point => ({ name: point, text: point })) || [],
    }))
  } else if (question.jsonLdType === 'TechArticle') {
    schemas.push(createTechArticleSchema(`/questions/${slug}`, {
      headline: question.query,
      description: question.shortAnswer,
      datePublished: question.publishDate,
      dateModified: question.updatedDate || question.publishDate,
    }))
  }

  return (
    <>
      {renderSchemaScripts(schemas)}
      <QuestionPageClient question={question} relatedQuestions={relatedQuestions} />
    </>
  )
}
