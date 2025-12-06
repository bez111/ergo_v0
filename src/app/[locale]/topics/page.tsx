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
  return <TopicsHubClient topics={topics} />;
}

