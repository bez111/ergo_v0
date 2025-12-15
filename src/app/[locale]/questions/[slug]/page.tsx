import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getMessages } from 'next-intl/server'
import { QuestionPageClient } from './QuestionPageClient'
import { getQuestionBySlug, getRelatedQuestions, getAllQuestionSlugs, type QuestionEntry } from '@/data/questions'
import { type QuestionsTranslations } from '@/data/questions-i18n'
import { siteConfig } from '@/config/site-config'
import { createBreadcrumbSchema, createFAQSchema, createHowToSchema, createTechArticleSchema } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

interface Props {
  params: Promise<{ slug: string; locale: string }>
}

// Helper to apply translations to a question
function applyTranslation(question: QuestionEntry, translations?: QuestionsTranslations): QuestionEntry {
  if (!translations) return question
  const tr = translations[question.slug]
  if (!tr) return question
  
  return {
    ...question,
    query: tr.query ?? question.query,
    shortAnswer: tr.shortAnswer ?? question.shortAnswer,
    keyPoints: tr.keyPoints ?? question.keyPoints,
    seoTitle: tr.seoTitle ?? question.seoTitle,
    seoDescription: tr.seoDescription ?? question.seoDescription,
  }
}

export function generateStaticParams() {
  return getAllQuestionSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params
  const baseQuestion = getQuestionBySlug(slug)

  if (!baseQuestion) {
    return { title: 'Question Not Found', description: 'The requested question could not be found.' }
  }

  // Get translations for non-English locales
  let question = baseQuestion
  if (locale !== 'en') {
    try {
      const messages = await getMessages({ locale }) as { questionsData?: QuestionsTranslations }
      question = applyTranslation(baseQuestion, messages?.questionsData)
    } catch {
      // Fallback to English if translations fail
    }
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
  const { slug, locale } = await params
  const baseQuestion = getQuestionBySlug(slug)

  if (!baseQuestion) {
    notFound()
  }

  // Get translations for non-English locales
  let question = baseQuestion
  let translations: QuestionsTranslations | undefined
  if (locale !== 'en') {
    try {
      const messages = await getMessages({ locale }) as { questionsData?: QuestionsTranslations }
      translations = messages?.questionsData
      question = applyTranslation(baseQuestion, translations)
    } catch {
      // Fallback to English if translations fail
    }
  }

  // Apply translations to related questions too
  const baseRelatedQuestions = baseQuestion.relatedQuestions ? getRelatedQuestions(baseQuestion.relatedQuestions) : []
  const relatedQuestions = baseRelatedQuestions.map(q => applyTranslation(q, translations))

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
