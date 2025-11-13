import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Calendar } from "lucide-react"
import { SchemaTypes } from '@/lib/schema-ultimate'
import { generateKnowledgeGraph } from '@/lib/entity-knowledge-graph'
import { siteConfig } from '@/config/site-config'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'events.seo' });
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: 'https://ergoblockchain.org/events'
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: 'https://ergoblockchain.org/events',
      siteName: 'Ergo Platform',
      images: [{
        url: 'https://ergoblockchain.org/og/events.png',
        width: 1200,
        height: 630,
        alt: 'Ergo Events'
      }],
      type: 'website',
      locale: 'en_US'
    },
    twitter: {
      card: 'summary_large_image',
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: ['https://ergoblockchain.org/og/events.png'],
      creator: siteConfig.twitterHandle,
      site: siteConfig.twitterHandle
    },
    robots: {
      index: false, // Временно скрываем от индексации пока страница в разработке
      follow: true
    }
  }
}

export default async function EventsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'events' });
  const schemaT = await getTranslations({ locale, namespace: 'events.schema' });
  
  // SEO схемы для будущих событий
  const eventsSchema = {
    '@context': 'https://schema.org',
    '@type': 'EventSeries',
    name: schemaT('name'),
    description: schemaT('description'),
    organizer: {
      '@type': 'Organization',
      name: 'Ergo Platform',
      url: 'https://ergoblockchain.org'
    }
  }
  
  const knowledgeGraph = generateKnowledgeGraph('events')
  
  const faqSchema = SchemaTypes.FAQSchema([
    {
      question: schemaT('faq.question1'),
      answer: schemaT('faq.answer1')
    },
    {
      question: schemaT('faq.question2'),
      answer: schemaT('faq.answer2')
    }
  ])
  
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventsSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraph) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen bg-black text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Calendar className="w-24 h-24 mx-auto text-orange-500" />
          </div>
          <h1 className="text-5xl font-bold mb-4">{t('title')}</h1>
          <p className="text-xl text-gray-400 mb-8">
            {t('subtitle')}
          </p>
          <p className="text-lg text-gray-500">
            {t('description')}
          </p>
        </div>
      </div>
    </>
  )
} 