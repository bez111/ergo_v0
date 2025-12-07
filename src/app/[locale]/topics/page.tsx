import { Metadata } from 'next';
import { TopicsHubClient } from './TopicsHubClient';
import { topics } from '@/data/topics';
import { siteConfig } from '@/config/site-config';

export const metadata: Metadata = {
  title: 'Ergo Topics — DeFi, Privacy, Mining & More | Ergo',
  description: 'Explore Ergo by topic. Deep dives into DeFi, privacy, mining, eUTXO, smart contracts. Curated resources, guides & infographics.',
  keywords: 'Ergo topics, Ergo DeFi, Ergo privacy, Ergo mining, eUTXO guide, blockchain topics, cryptocurrency knowledge hub',
  openGraph: {
    title: 'Ergo Topics — DeFi, Privacy, Mining & More',
    description: 'Explore Ergo by topic. Deep dives into DeFi, privacy, mining, eUTXO. Curated resources & guides.',
    url: `${siteConfig.siteUrl}/topics`,
    siteName: 'Ergo Blockchain',
    type: 'website',
    images: [{
      url: `${siteConfig.siteUrl}/og/topics-hub.png`,
      width: 1200,
      height: 630,
      alt: 'Ergo Topics Hub'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ergo Topics — DeFi, Privacy, Mining & More',
    description: 'Explore Ergo by topic. DeFi, privacy, mining, eUTXO — curated resources & guides.',
    images: [`${siteConfig.siteUrl}/og/topics-hub.png`]
  },
  alternates: {
    canonical: `${siteConfig.siteUrl}/topics`
  }
};

export default function TopicsPage() {
  // ItemList schema for topics directory
  const itemListSchema = {
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
  }

  // CollectionPage schema
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteConfig.siteUrl}/topics#collection`,
    name: "Ergo Topics Hub",
    url: `${siteConfig.siteUrl}/topics`,
    description: "Explore Ergo blockchain by topic - DeFi, Privacy, Mining, Smart Contracts and more",
    isPartOf: { "@type": "WebSite", "@id": `${siteConfig.siteUrl}#website` },
    about: topics.map(t => ({ "@type": "Thing", name: t.title }))
  }

  // BreadcrumbList schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
      { "@type": "ListItem", position: 2, name: "Topics", item: `${siteConfig.siteUrl}/topics` }
    ]
  }

  // FAQPage schema with common topic questions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What topics can I learn about Ergo?",
        acceptedAnswer: { "@type": "Answer", text: "Ergo topics include DeFi, Privacy & Sigma Protocols, Mining & Autolykos, Smart Contracts & ErgoScript, Governance & DAOs, and Cross-Chain Bridges." }
      },
      {
        "@type": "Question",
        name: "Where should I start learning about Ergo?",
        acceptedAnswer: { "@type": "Answer", text: "Start with the eUTXO Model topic to understand Ergo's foundation, then explore DeFi or Privacy depending on your interests." }
      },
      {
        "@type": "Question",
        name: "How is Ergo different from Ethereum?",
        acceptedAnswer: { "@type": "Answer", text: "Ergo uses eUTXO (not accounts), Proof-of-Work (not PoS), native tokens (not ERC-20), and Sigma Protocols for privacy. Explore the Technology topics for deep dives." }
      }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <TopicsHubClient topics={topics} />
    </>
  );
}

