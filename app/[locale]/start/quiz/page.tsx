import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import QuizClient from "./QuizClient"
import { SchemaTypes } from "@/lib/schema-ultimate"
import { generateKnowledgeGraph } from "@/lib/entity-knowledge-graph"

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'start.quiz.seo' });
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: "https://ergoblockchain.org/start/quiz"
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: "https://ergoblockchain.org/start/quiz",
      siteName: "Ergo Platform",
      images: [{
        url: "https://ergoblockchain.org/og/quiz.png",
        width: 1200,
        height: 630,
        alt: t('ogAlt')
      }],
      type: "website",
      locale: "en_US"
    },
    twitter: {
      card: "summary_large_image",
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: ["https://ergoblockchain.org/og/quiz.png"]
    }
  }
}

export default function QuizPage() {
  const quizSchema = {
    "@context": "https://schema.org",
    "@type": "Quiz",
    "@id": "https://ergoblockchain.org/start/quiz",
    name: "Ergo Ecosystem Path Finder Quiz",
    description: "Interactive quiz to help users find their ideal path in the Ergo ecosystem",
    educationalLevel: "Beginner",
    learningResourceType: "Quiz",
    timeRequired: "PT5M",
    isAccessibleForFree: true
  }
  
  const knowledgeGraph = generateKnowledgeGraph('quiz')
  
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraph) }} />
      
      <QuizClient />
    </>
  )
} 