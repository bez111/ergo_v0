import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import CommunityClient from "./CommunityClient"
import { SchemaTypes } from "@/lib/schema-ultimate"
import { generateKnowledgeGraph } from "@/lib/entity-knowledge-graph"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'start.community.seo' });
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: "https://ergoblockchain.org/start/community"
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: "https://ergoblockchain.org/start/community",
      siteName: "Ergo Platform",
      images: [{
        url: "https://ergoblockchain.org/og/community.png",
        width: 1200,
        height: 630,
        alt: t('ogAlt')
      }],
      type: "website",
      locale: "en_US"
    },
    twitter: {
      card: "summary_large_image",
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: ["https://ergoblockchain.org/og/community.png"]
    }
  }
}

export default function CommunityPage() {
  // SEO схемы для сообщества
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://ergoblockchain.org/#community",
    name: "Ergo Community",
    description: "Global community of developers, miners, and enthusiasts building on Ergo",
    url: "https://ergoblockchain.org/start/community",
    logo: "https://ergoblockchain.org/logo.png",
    sameAs: [
      "https://discord.gg/ergo-platform",
      "https://t.me/ergoplatform",
      "https://reddit.com/r/ergonauts",
      "https://twitter.com/ergoplatform",
      "https://github.com/ergoplatform"
    ],
    memberOf: {
      "@type": "Organization",
      name: "Ergo Platform"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "1500"
    }
  }
  
  const faqSchema = SchemaTypes.FAQSchema([
    {
      question: "How do I join the Ergo community?",
      answer: "Join our Discord server for real-time chat, Telegram for quick updates, Reddit for discussions, or GitHub to contribute to development. All platforms are open and welcoming to newcomers."
    },
    {
      question: "What is the main Ergo community platform?",
      answer: "Discord is the most active platform with 15K+ members, featuring dedicated channels for development, mining, trading, and general discussion, plus regular AMA sessions."
    },
    {
      question: "Can I contribute to Ergo without coding?",
      answer: "Yes! You can contribute through content creation, translations, community management, testing, documentation, or participating in governance discussions."
    },
    {
      question: "Are there regional Ergo communities?",
      answer: "Yes, there are active regional communities in multiple languages including Chinese, Russian, Spanish, Turkish, and more, each with dedicated Telegram groups."
    }
  ])
  
  const socialMediaSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Ergo Community Platforms",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Discord",
        url: "https://discord.gg/ergo-platform",
        description: "Main community hub with 15K+ members"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Telegram",
        url: "https://t.me/ergoplatform",
        description: "Quick updates and global chat"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Reddit",
        url: "https://reddit.com/r/ergonauts",
        description: "Discussions and community content"
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "GitHub",
        url: "https://github.com/ergoplatform",
        description: "Open source development"
      }
    ]
  }
  
  const knowledgeGraph = generateKnowledgeGraph('community')
  
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(socialMediaSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraph) }} />
      
      <CommunityClient />
    </>
  )
} 