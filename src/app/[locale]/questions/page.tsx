import { Metadata } from 'next'
import { getMessages, getTranslations } from 'next-intl/server'
import { QuestionsHubClient } from './QuestionsHubClient'
import { questions, questionCategories, questionPersonas, type QuestionEntry } from '@/data/questions'
import { type QuestionsTranslations } from '@/data/questions-i18n'
import { siteConfig } from '@/config/site-config'
import {
  createBreadcrumbSchema,
  createFAQSchema,
  createCollectionSchema,
} from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

interface Props {
  params: Promise<{ locale: string }>
}

// Helper to apply translations to questions
function applyTranslations(qs: QuestionEntry[], translations?: QuestionsTranslations): QuestionEntry[] {
  if (!translations) return qs
  return qs.map(q => {
    const tr = translations[q.slug]
    if (!tr) return q
    return {
      ...q,
      query: tr.query ?? q.query,
      shortAnswer: tr.shortAnswer ?? q.shortAnswer,
      keyPoints: tr.keyPoints ?? q.keyPoints,
      seoTitle: tr.seoTitle ?? q.seoTitle,
      seoDescription: tr.seoDescription ?? q.seoDescription,
    }
  })
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'questionsPage.seo' })

  const title = t('title')
  const description = t('description')

  return {
    title,
    description,
    keywords: ["Ergo FAQ", "Ergo questions", "eUTXO explained", "Ergo DeFi", "Ergo mining", "Ergo privacy", "blockchain questions"],
    openGraph: {
      title,
      description,
      url: `${siteConfig.siteUrl}/questions`,
      type: "website",
      images: [{ url: `${siteConfig.siteUrl}/og/hubs/q&a.png`, width: 1200, height: 630 }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    },
    alternates: { canonical: `${siteConfig.siteUrl}/questions` }
  }
}

export default async function QuestionsPage({ params }: Props) {
  const { locale } = await params
  
  // Get translations for non-English locales
  let localizedQuestions = questions
  if (locale !== 'en') {
    try {
      const messages = await getMessages({ locale }) as { questionsData?: QuestionsTranslations }
      localizedQuestions = applyTranslations(questions, messages?.questionsData)
    } catch {
      // Fallback to English if translations fail
    }
  }

  // Group questions by category
  const questionsByCategory = questionCategories
    .filter(cat => cat.id !== 'all')
    .map(category => ({
      category: category,
      questions: localizedQuestions.filter(q => q.category === category.id)
    }))
    .filter(group => group.questions.length > 0)

  // Featured questions (priority 1)
  const featuredQuestions = localizedQuestions.filter(q => q.priority === 1)

  // Build FAQ from featured questions
  const faqItems = featuredQuestions.slice(0, 10).map(q => ({
    question: q.query,
    answer: q.shortAnswer
  }))

  const schemas = [
    // ItemList schema
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": `${siteConfig.siteUrl}/questions#list`,
      name: "Ergo Q&A Directory",
      description: "Comprehensive answers to common Ergo blockchain questions",
      numberOfItems: localizedQuestions.length,
      itemListElement: localizedQuestions.slice(0, 20).map((q, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Question",
          name: q.query,
          url: `${siteConfig.siteUrl}/questions/${q.slug}`,
          acceptedAnswer: { "@type": "Answer", text: q.shortAnswer }
        }
      }))
    },
    // CollectionPage
    createCollectionSchema({
      name: "Ergo Q&A Hub",
      description: "Expert answers to questions about Ergo blockchain",
      url: "/questions",
    }),
    // Breadcrumbs
    createBreadcrumbSchema([
      { name: "Q&A Hub", href: "/questions" },
    ]),
    // FAQ
    createFAQSchema(faqItems),
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      <QuestionsHubClient 
        questions={localizedQuestions}
        questionsByCategory={questionsByCategory}
        featuredQuestions={featuredQuestions}
        categories={questionCategories}
        personas={questionPersonas}
      />
    </>
  )
}
