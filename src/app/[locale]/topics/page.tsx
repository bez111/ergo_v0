import { Metadata } from 'next';
import { TopicsHubClient } from './TopicsHubClient';
import { topics } from '@/data/topics';
import { siteConfig } from '@/config/site-config';

export const metadata: Metadata = {
  title: 'Ergo Topics: Complete Knowledge Hub',
  description: 'Explore Ergo blockchain by topic. Deep dives into DeFi, privacy, mining, technology, sustainability, and philosophy. Comprehensive guides with resources.',
  keywords: 'Ergo topics, Ergo DeFi, Ergo privacy, Ergo mining, blockchain topics, cryptocurrency guide',
  openGraph: {
    title: 'Ergo Topics: Complete Knowledge Hub',
    description: 'Explore Ergo blockchain by topic. DeFi, privacy, mining, technology - comprehensive guides with all resources.',
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
    title: 'Ergo Topics Hub',
    description: 'Explore Ergo by topic: DeFi, privacy, mining, technology, and more.',
    images: [`${siteConfig.siteUrl}/og/topics-hub.png`]
  },
  alternates: {
    canonical: `${siteConfig.siteUrl}/topics`
  }
};

export default function TopicsPage() {
  return <TopicsHubClient topics={topics} />;
}

