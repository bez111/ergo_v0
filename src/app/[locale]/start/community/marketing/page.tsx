
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { MarketingGuideClient } from './MarketingGuideClient'

interface MarketingGuidePageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: MarketingGuidePageProps): Promise<Metadata> {
  const { locale } = await params
  
  return {
    title: "Ergo Content Distribution Playbook - Marketing Guide",
    description: "Complete guide for distributing Ergo content across 10-15 platforms to reach crypto-natives, miners, builders, economists, and privacy advocates. Learn how to spread awareness without spamming.",
    keywords: "ergo marketing, content distribution, crypto marketing, blockchain promotion, community building, content strategy",
    openGraph: {
      title: "Ergo Content Distribution Playbook",
      description: "Master the art of spreading Ergo content across crypto communities, forums, and social platforms.",
      type: "article",
      images: [{
        url: "/og/hubs/marketing.jpg",
        width: 1200,
        height: 630,
        alt: "Ergo Content Distribution Playbook"
      }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Ergo Content Distribution Playbook",
      description: "Complete guide for distributing Ergo content across crypto communities.",
      images: ["/og/hubs/marketing.jpg"]
    }
  }
}

export default async function MarketingGuidePage({ params }: MarketingGuidePageProps) {
  const { locale } = await params
  
  return <MarketingGuideClient />
}
