import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import GrantsClient from "./GrantsClient"
import { generateKnowledgeGraph } from "@/lib/entity-knowledge-graph"
import {
  createFinancialServiceSchema,
  createFAQSchema,
  getAlternates,
  getCanonicalUrl,
} from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'ecosystem.grantsPage' })

  const title = t('seo.title')
  const description = t('seo.description')

  return {
    title,
    description,
    keywords: ["ergo grants", "blockchain funding", "developer grants", "crypto grants", "defi funding", "ergo foundation", "project funding", "open source grants"],
    alternates: getAlternates('/ecosystem/grants', locale),
    openGraph: {
      title,
      description,
      url: getCanonicalUrl('/ecosystem/grants', locale),
      siteName: "Ergo Platform",
      images: [{
        url: "https://ergoblockchain.org/og/grants.png",
        width: 1200,
        height: 630,
        alt: "Ergo Grants Program"
      }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://ergoblockchain.org/og/grants.png"],
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

export default async function GrantsPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'ecosystem.grantsPage' })

  // Centralized SEO schemas
  const grantsSchema = createFinancialServiceSchema({
    name: "Ergo Grants Program",
    description: "Funding program for projects building on Ergo blockchain",
    url: "https://ergoblockchain.org/ecosystem/grants",
    audienceType: "Developers, Researchers, Community Builders",
  })

  const faqSchema = createFAQSchema([
    {
      question: t('schema.faq.items.0.question'),
      answer: t('schema.faq.items.0.answer'),
    },
    {
      question: t('schema.faq.items.1.question'),
      answer: t('schema.faq.items.1.answer'),
    },
    {
      question: t('schema.faq.items.2.question'),
      answer: t('schema.faq.items.2.answer'),
    },
  ])

  const knowledgeGraph = generateKnowledgeGraph("ecosystem")

  return (
    <>
      {renderSchemaScripts([grantsSchema, faqSchema, knowledgeGraph])}
      <GrantsClient />
    </>
  )
}
