import { Metadata } from 'next'
import { getMessages, getTranslations } from 'next-intl/server'
import { TopicsHubClient } from './TopicsHubClient'
import { topics, type TopicHub } from '@/data/topics'
import { type TopicsTranslations } from '@/data/topics-i18n'
import { siteConfig } from '@/config/site-config'
import {
  createBreadcrumbSchema,
  createFAQSchema,
  createCollectionSchema,
  getAlternates,
} from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

interface Props {
  params: Promise<{ locale: string }>
}

// Helper to apply translations to topics
function applyTranslations(ts: TopicHub[], translations?: TopicsTranslations): TopicHub[] {
  if (!translations) return ts
  return ts.map(topic => {
    const tr = translations[topic.slug]
    if (!tr) return topic
    return {
      ...topic,
      title: tr.title ?? topic.title,
      subtitle: tr.subtitle ?? topic.subtitle,
      heroStatement: tr.heroStatement ?? topic.heroStatement,
      introduction: tr.introduction ?? topic.introduction,
      whatMakesUnique: tr.whatMakesUnique ?? topic.whatMakesUnique,
      keyDifferentiators: tr.keyDifferentiators ?? topic.keyDifferentiators,
    }
  })
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'topicsPage.seo' })

  const title = t('title')
  const description = t('description')
  const path = '/topics'

  return {
    title,
    description,
    keywords: ["Ergo topics", "Ergo DeFi", "Ergo privacy", "Ergo mining", "eUTXO guide", "blockchain topics", "cryptocurrency knowledge hub"],
    openGraph: {
      title,
      description,
      url: `${siteConfig.siteUrl}${locale === 'en' ? '' : `/${locale}`}${path}`,
      type: "website",
      locale: locale === 'en' ? 'en_US' : locale === 'ru' ? 'ru_RU' : 'zh_CN',
      images: [{ url: `${siteConfig.siteUrl}/og/hubs/topics.png`, width: 1200, height: 630 }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    },
    alternates: getAlternates(path, locale)
  }
}

// FAQ Content
const FAQ_ITEMS = [
  {
    question: "What topics can I learn about Ergo?",
    answer: "Ergo topics include DeFi, Privacy & Sigma Protocols, Mining & Autolykos, Smart Contracts & ErgoScript, Governance & DAOs, and Cross-Chain Bridges."
  },
  {
    question: "Where should I start learning about Ergo?",
    answer: "Start with the eUTXO Model topic to understand Ergo's foundation, then explore DeFi or Privacy depending on your interests."
  },
  {
    question: "How is Ergo different from Ethereum?",
    answer: "Ergo uses eUTXO (not accounts), Proof-of-Work (not PoS), native tokens (not ERC-20), and Sigma Protocols for privacy. Explore the Technology topics for deep dives."
  }
]

export default async function TopicsPage({ params }: Props) {
  const { locale } = await params
  
  // Get translations for non-English locales
  let localizedTopics = topics
  if (locale !== 'en') {
    try {
      const messages = await getMessages({ locale }) as { topicsData?: TopicsTranslations }
      localizedTopics = applyTranslations(topics, messages?.topicsData)
    } catch {
      // Fallback to English if translations fail
    }
  }

  const schemas = [
    // ItemList schema
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": `${siteConfig.siteUrl}/topics#list`,
      name: "Ergo Topic Clusters",
      description: "Comprehensive topic guides for Ergo blockchain",
      numberOfItems: localizedTopics.length,
      itemListElement: localizedTopics.map((topic, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Article",
          name: topic.title,
          url: `${siteConfig.siteUrl}/topics/${topic.slug}`,
          description: topic.seoDescription
        }
      }))
    },
    // CollectionPage
    createCollectionSchema({
      name: "Ergo Topics Hub",
      description: "Explore Ergo blockchain by topic - DeFi, Privacy, Mining, Smart Contracts and more",
      url: "/topics",
      about: localizedTopics.map(t => ({ name: t.title })),
    }),
    // Breadcrumbs
    createBreadcrumbSchema([
      { name: "Topics", href: "/topics" },
    ]),
    // FAQ
    createFAQSchema(FAQ_ITEMS),
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      <TopicsHubClient topics={localizedTopics} />
    </>
  )
}
