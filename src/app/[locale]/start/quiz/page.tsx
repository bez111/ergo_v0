import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import QuizClient from "./QuizClient"
import { createBreadcrumbSchema, getAlternates, getCanonicalUrl } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'start.quiz' })

  const title = t('seo.title')
  const description = t('seo.description')

  return {
    title,
    description,
    keywords: ["ergo quiz", "blockchain quiz", "crypto personality test", "find your path", "blockchain career", "ergo ecosystem", "interactive quiz", "crypto quiz"],
    alternates: getAlternates('/start/quiz', locale),
    openGraph: {
      title: t('seo.ogTitle'),
      description: t('seo.ogDescription'),
      url: getCanonicalUrl('/start/quiz', locale),
      siteName: "Ergo Platform",
      images: [{ url: "https://www.ergoblockchain.org/og/quiz.png", width: 1200, height: 630, alt: "Ergo Quiz" }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t('seo.twitterTitle'),
      description: t('seo.twitterDescription'),
      images: ["https://www.ergoblockchain.org/og/quiz.png"]
    }
  }
}

export default async function QuizPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'start.quiz' })

  // Quiz schema (special type, kept structured)
  const quizSchema = {
    "@context": "https://schema.org",
    "@type": "Quiz",
    "@id": "https://www.ergoblockchain.org/start/quiz",
    name: t('schema.quiz.name'),
    description: t('schema.quiz.description'),
    educationalLevel: t('schema.quiz.educationalLevel'),
    learningResourceType: t('schema.quiz.learningResourceType'),
    timeRequired: t('schema.quiz.timeRequired'),
    isAccessibleForFree: true
  }
  
  const schemas = [
    quizSchema,
    createBreadcrumbSchema([
      { name: t('schema.breadcrumbs.start'), href: "/start" },
      { name: t('schema.breadcrumbs.quiz'), href: "/start/quiz" },
    ]),
  ]
  
  return (
    <>
      {renderSchemaScripts(schemas)}
      <QuizClient />
    </>
  )
}
