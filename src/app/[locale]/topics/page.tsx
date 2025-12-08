import { Metadata } from 'next'
import { TopicsHubClient } from './TopicsHubClient'
import { topics } from '@/data/topics'
import { siteConfig } from '@/config/site-config'
import {
  createHubMetadata,
  createBreadcrumbSchema,
  createFAQSchema,
  createCollectionSchema,
} from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

// SEO Configuration
const SEO = {
  path: "/topics",
  title: "Ergo Topics — DeFi, Privacy, Mining & More | Ergo",
  description: "Explore Ergo by topic. Deep dives into DeFi, privacy, mining, eUTXO, smart contracts. Curated resources, guides & infographics.",
  ogImage: "/og/hubs/topics.png",
  keywords: [
    "Ergo topics", "Ergo DeFi", "Ergo privacy", "Ergo mining",
    "eUTXO guide", "blockchain topics", "cryptocurrency knowledge hub"
  ],
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

// Metadata
export const metadata: Metadata = createHubMetadata(
  SEO.path,
  SEO.title,
  SEO.description,
  SEO.ogImage,
  SEO.keywords
)

export default function TopicsPage() {
  const schemas = [
    // ItemList schema
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": `${siteConfig.siteUrl}/topics#list`,
      name: "Ergo Topic Clusters",
      description: "Comprehensive topic guides for Ergo blockchain",
      numberOfItems: topics.length,
      itemListElement: topics.map((topic, i) => ({
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
      about: topics.map(t => ({ name: t.title })),
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
      <TopicsHubClient topics={topics} />
    </>
  )
}
