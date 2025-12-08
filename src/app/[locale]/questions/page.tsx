import { Metadata } from 'next'
import { QuestionsHubClient } from './QuestionsHubClient'
import { questions, questionCategories, questionPersonas } from '@/data/questions'
import { siteConfig } from '@/config/site-config'
import {
  createHubMetadata,
  createBreadcrumbSchema,
  createFAQSchema,
  createCollectionSchema,
} from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

// SEO Configuration
const SEO = {
  path: "/questions",
  title: "Ergo Q&A Hub: Answers to Your Blockchain Questions",
  description: "Find answers to common questions about Ergo blockchain: DeFi, privacy, mining, technology, and getting started. Expert answers with deep-dive resources.",
  ogImage: "/og/hubs/q&a.png",
  keywords: [
    "Ergo FAQ", "Ergo questions", "eUTXO explained",
    "Ergo DeFi", "Ergo mining", "Ergo privacy", "blockchain questions"
  ],
}

// Metadata
export const metadata: Metadata = createHubMetadata(
  SEO.path,
  SEO.title,
  SEO.description,
  SEO.ogImage,
  SEO.keywords
)

export default function QuestionsPage() {
  // Group questions by category
  const questionsByCategory = questionCategories
    .filter(cat => cat.id !== 'all')
    .map(category => ({
      category: category,
      questions: questions.filter(q => q.category === category.id)
    }))
    .filter(group => group.questions.length > 0)

  // Featured questions (priority 1)
  const featuredQuestions = questions.filter(q => q.priority === 1)

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
      numberOfItems: questions.length,
      itemListElement: questions.slice(0, 20).map((q, i) => ({
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
        questions={questions}
        questionsByCategory={questionsByCategory}
        featuredQuestions={featuredQuestions}
        categories={questionCategories}
        personas={questionPersonas}
      />
    </>
  )
}
