import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import TechnologyClient from './TechnologyClient'
import { SchemaTypes } from '@/lib/schema-ultimate'
import { generateKnowledgeGraph } from '@/lib/entity-knowledge-graph'
import { targetQuestions } from '@/lib/featured-snippets-optimizer'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'technology.seo' })
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords').split(','),
    alternates: {
      canonical: 'https://ergoblockchain.org/technology'
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: 'https://ergoblockchain.org/technology',
      siteName: 'Ergo Platform',
      images: [{
        url: 'https://ergoblockchain.org/og/technology.png',
        width: 1200,
        height: 630,
        alt: t('ogImageAlt')
      }],
      type: 'website',
      locale: 'en_US'
    },
    twitter: {
      card: 'summary_large_image',
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: ['https://ergoblockchain.org/og/technology.png'],
      creator: '@ergoplatform',
      site: '@ergoplatform'
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    }
  }
}

export default async function TechnologyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'technology.schema' })
  
  const techArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    '@id': 'https://ergoblockchain.org/technology#article',
    headline: t('headline'),
    description: t('description'),
    datePublished: '2024-01-01',
    dateModified: '2024-12-15',
    author: {
      '@type': 'Organization',
      name: 'Ergo Platform',
      url: 'https://ergoblockchain.org'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ergo Platform',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ergoblockchain.org/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://ergoblockchain.org/technology'
    },
    about: [
      { '@type': 'Thing', name: t('about.eutxo.name'), description: t('about.eutxo.description') },
      { '@type': 'Thing', name: t('about.ergoscript.name'), description: t('about.ergoscript.description') },
      { '@type': 'Thing', name: t('about.sigma.name'), description: t('about.sigma.description') },
      { '@type': 'Thing', name: t('about.autolykos.name'), description: t('about.autolykos.description') },
      { '@type': 'Thing', name: t('about.storageRent.name'), description: t('about.storageRent.description') },
      { '@type': 'Thing', name: t('about.nipopows.name'), description: t('about.nipopows.description') }
    ]
  }

  const faqSchema = SchemaTypes.FAQSchema([
    {
      question: t('faq.0.question'),
      answer: t('faq.0.answer')
    },
    {
      question: t('faq.1.question'),
      answer: t('faq.1.answer')
    },
    {
      question: t('faq.2.question'),
      answer: t('faq.2.answer')
    },
    {
      question: t('faq.3.question'),
      answer: t('faq.3.answer')
    },
    {
      question: t('faq.4.question'),
      answer: t('faq.4.answer')
    },
    {
      question: t('faq.5.question'),
      answer: t('faq.5.answer')
    },
    {
      question: t('faq.6.question'),
      answer: t('faq.6.answer')
    },
    {
      question: t('faq.7.question'),
      answer: t('faq.7.answer')
    },
    {
      question: t('faq.8.question'),
      answer: t('faq.8.answer')
    }
  ])

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: t('breadcrumbs.home'),
        item: 'https://ergoblockchain.org'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: t('breadcrumbs.technology'),
        item: 'https://ergoblockchain.org/technology'
      }
    ]
  }

  // Добавляем продвинутые SEO схемы
  const knowledgeGraph = generateKnowledgeGraph('technology')
  
  const speakableSchema = SchemaTypes.SpeakableSchema({
    headline: t('speakable.headline'),
    summary: t('speakable.summary'),
    url: 'https://ergoblockchain.org/technology'
  })
  
  const datasetSchema = SchemaTypes.DatasetSchema()

  return (
    <>
      {/* Существующие схемы */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      
      {/* Новые продвинутые схемы */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraph) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }} />
      
      <TechnologyClient />
    </>
  )
} 