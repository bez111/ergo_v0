import type { Metadata } from "next"
import BabelFeesClient from "./BabelFeesClient"
import { generateKnowledgeGraph } from "@/lib/entity-knowledge-graph"
import { getTranslations } from "next-intl/server"
import { useTranslations } from "next-intl"
import {
  createTechArticleSchema,
  createFAQSchema,
  createHowToSchema,
  getAlternates,
  getCanonicalUrl,
} from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'use.babelFees.seo' })
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: ["babel fees", "ergo transaction fees", "pay fees with tokens", "defi fees", "blockchain fees", "ergo babel", "token fees", "gas fees alternative"],
    alternates: getAlternates('/use/babel-fees', locale),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: getCanonicalUrl('/use/babel-fees', locale),
      siteName: "Ergo Platform",
      images: [{
        url: "https://ergoblockchain.org/og/babel-fees.png",
        width: 1200,
        height: 630,
        alt: "Ergo Babel Fees"
      }],
      type: "article",
      locale: "en_US"
    },
    twitter: {
      card: "summary_large_image",
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: ["https://ergoblockchain.org/og/babel-fees.png"],
      creator: "@ergoplatform",
      site: "@ergoplatform"
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true
      }
    }
  }
}

export default function BabelFeesPage() {
  const t = useTranslations('use.babelFees.schema')

  // Centralized SEO schemas (with i18n)
  const techArticleSchema = createTechArticleSchema("/use/babel-fees", {
    headline: t('techArticle.headline'),
    description: t('techArticle.description'),
    about: [{ name: t('techArticle.about.name') }],
  })

  const faqSchema = createFAQSchema([
    { question: t('faq.whatAre.question'), answer: t('faq.whatAre.answer') },
    { question: t('faq.howWork.question'), answer: t('faq.howWork.answer') },
    { question: t('faq.whichTokens.question'), answer: t('faq.whichTokens.answer') },
    { question: t('faq.expensive.question'), answer: t('faq.expensive.answer') },
  ])

  const howToSchema = createHowToSchema({
    name: t('howTo.name'),
    description: t('howTo.description'),
    steps: [
      { name: t('howTo.steps.chooseDapp.name'), text: t('howTo.steps.chooseDapp.text') },
      { name: t('howTo.steps.selectToken.name'), text: t('howTo.steps.selectToken.text') },
      { name: t('howTo.steps.executeTransaction.name'), text: t('howTo.steps.executeTransaction.text') },
    ],
  })

  const knowledgeGraph = generateKnowledgeGraph("use-cases")

  return (
    <>
      {renderSchemaScripts([techArticleSchema, faqSchema, howToSchema, knowledgeGraph])}
      <BabelFeesClient />
    </>
  )
} 