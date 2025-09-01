import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import LearnClient from './LearnClient'
import { SchemaTypes } from '@/lib/schema-ultimate'
import { generateKnowledgeGraph } from '@/lib/entity-knowledge-graph'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'learn.seo' });
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: 'https://ergoblockchain.org/learn'
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: 'https://ergoblockchain.org/learn',
      siteName: 'Ergo Platform',
      images: [{
        url: 'https://ergoblockchain.org/og/learn.png',
        width: 1200,
        height: 630,
        alt: 'Learn Ergo - Educational Resources'
      }],
      type: 'website',
      locale: 'en_US'
    },
    twitter: {
      card: 'summary_large_image',
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: ['https://ergoblockchain.org/og/learn.png'],
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

export default async function LearnPage({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'learn.schema' });
  
  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': 'https://ergoblockchain.org/learn#course',
    name: t('course.name'),
    description: t('course.description'),
    provider: {
      '@type': 'Organization',
      name: 'Ergo Platform',
      url: 'https://ergoblockchain.org'
    },
    audience: {
      '@type': 'Audience',
      audienceType: t('course.audience')
    },
    educationalLevel: t('course.educationalLevel'),
    hasCourseInstance: [
      {
        '@type': 'CourseInstance',
        name: t('course.instances.ergoscript.name'),
        description: t('course.instances.ergoscript.description'),
        courseMode: 'online',
        duration: 'PT20H'
      },
      {
        '@type': 'CourseInstance',
        name: t('course.instances.faq.name'),
        description: t('course.instances.faq.description'),
        courseMode: 'online'
      },
      {
        '@type': 'CourseInstance',
        name: t('course.instances.research.name'),
        description: t('course.instances.research.description'),
        courseMode: 'online'
      }
    ]
  }

  const learningResourcesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: t('resources.name'),
    description: t('resources.description'),
    numberOfItems: 3,
    itemListElement: [
      {
        '@type': 'Course',
        position: 1,
        name: t('course.instances.ergoscript.name'),
        description: t('course.instances.ergoscript.description'),
        provider: {
          '@type': 'Organization',
          name: 'Ergo Platform',
          url: 'https://ergoblockchain.org'
        }
      },
      {
        '@type': 'FAQPage',
        position: 2,
        name: t('course.instances.faq.name'),
        description: t('course.instances.faq.description')
      },
      {
        '@type': 'Article',
        position: 3,
        name: t('course.instances.research.name'),
        description: t('course.instances.research.description')
      }
    ]
  }

  const knowledgeGraph = generateKnowledgeGraph('learn')

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(learningResourcesSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraph) }} />
      <LearnClient locale={locale} />
    </>
  )
} 