import type { Metadata } from "next"
import BabelFeesClient from "./BabelFeesClient"
import { SchemaTypes } from "@/lib/schema-ultimate"
import { generateKnowledgeGraph } from "@/lib/entity-knowledge-graph"
import { getTranslations } from "next-intl/server"
import { useTranslations } from "next-intl"

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'use.babelFees.seo' })
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: ["babel fees", "ergo transaction fees", "pay fees with tokens", "defi fees", "blockchain fees", "ergo babel", "token fees", "gas fees alternative"],
    alternates: {
      canonical: "https://ergoblockchain.org/use/babel-fees"
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: "https://ergoblockchain.org/use/babel-fees",
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

  // SEO схемы для Babel Fees
  const babelFeesSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": "https://ergoblockchain.org/use/babel-fees",
    headline: t('techArticle.headline'),
    description: t('techArticle.description'),
    author: {
      "@type": "Organization",
      name: "Ergo Platform"
    },
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString(),
    about: {
      "@type": "Thing",
      name: t('techArticle.about.name'),
      description: t('techArticle.about.description')
    }
  }
  
  const faqSchema = SchemaTypes.FAQSchema([
    {
      question: t('faq.whatAre.question'),
      answer: t('faq.whatAre.answer')
    },
    {
      question: t('faq.howWork.question'),
      answer: t('faq.howWork.answer')
    },
    {
      question: t('faq.whichTokens.question'),
      answer: t('faq.whichTokens.answer')
    },
    {
      question: t('faq.expensive.question'),
      answer: t('faq.expensive.answer')
    }
  ])
  
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: t('howTo.name'),
    description: t('howTo.description'),
    step: [
      {
        "@type": "HowToStep",
        name: t('howTo.steps.chooseDapp.name'),
        text: t('howTo.steps.chooseDapp.text')
      },
      {
        "@type": "HowToStep",
        name: t('howTo.steps.selectToken.name'),
        text: t('howTo.steps.selectToken.text')
      },
      {
        "@type": "HowToStep",
        name: t('howTo.steps.executeTransaction.name'),
        text: t('howTo.steps.executeTransaction.text')
      }
    ]
  }
  
  const knowledgeGraph = generateKnowledgeGraph('use-cases')
  
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(babelFeesSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraph) }} />
      
      <BabelFeesClient />
    </>
  )
} 