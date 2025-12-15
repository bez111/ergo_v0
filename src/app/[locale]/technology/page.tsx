import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import TechnologyClient from './TechnologyClient'
import { siteConfig } from '@/config/site-config'
import { technologyTopics, categoryLabels } from '@/data/technology-topics'
import { createBreadcrumbSchema, createFAQSchema, createTechArticleSchema } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'technology.seo' })
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords').split(','),
    alternates: { canonical: 'https://ergoblockchain.org/technology' },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: 'https://ergoblockchain.org/technology',
      siteName: 'Ergo Platform',
      images: [{ url: 'https://ergoblockchain.org/og/technology.png', width: 1200, height: 630, alt: t('ogImageAlt') }],
      type: 'website',
      locale: 'en_US'
    },
    twitter: {
      card: 'summary_large_image',
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: ['https://ergoblockchain.org/og/technology.png'],
      creator: siteConfig.twitterHandle,
      site: siteConfig.twitterHandle
    },
    robots: {
      index: true, follow: true,
      googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 }
    }
  }
}

export default async function TechnologyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'technology.schema' })
  
  // FAQ items from translations
  const faqItems = [
    { question: t('faq.0.question'), answer: t('faq.0.answer') },
    { question: t('faq.1.question'), answer: t('faq.1.answer') },
    { question: t('faq.2.question'), answer: t('faq.2.answer') },
    { question: t('faq.3.question'), answer: t('faq.3.answer') },
    { question: t('faq.4.question'), answer: t('faq.4.answer') },
    { question: t('faq.5.question'), answer: t('faq.5.answer') },
    { question: t('faq.6.question'), answer: t('faq.6.answer') },
    { question: t('faq.7.question'), answer: t('faq.7.answer') },
    { question: t('faq.8.question'), answer: t('faq.8.answer') },
  ]

  // Technology ItemList (complex, kept structured)
  const techItemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': 'https://ergoblockchain.org/technology#itemlist',
    name: 'Ergo Blockchain Technology Features',
    description: 'Comprehensive list of Ergo blockchain technology features including eUTXO, ErgoScript, Autolykos PoW, and more.',
    numberOfItems: technologyTopics.length,
    itemListElement: technologyTopics.map((topic, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'TechArticle',
        '@id': `https://ergoblockchain.org/technology/${topic.slug}`,
        name: topic.title,
        description: topic.description,
        url: `https://ergoblockchain.org/technology/${topic.slug}`,
        keywords: topic.keywords.join(', '),
        articleSection: categoryLabels[topic.category],
      },
    })),
  }

  const schemas = [
    createTechArticleSchema("/technology", {
      headline: t('headline'),
      description: t('description'),
      image: "/og/technology.png",
      datePublished: "2024-01-01",
      dateModified: "2024-12-15",
    }),
    createBreadcrumbSchema([{ name: t('breadcrumbs.technology'), href: "/technology" }]),
    createFAQSchema(faqItems),
    techItemListSchema,
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      <TechnologyClient />
    </>
  )
}
