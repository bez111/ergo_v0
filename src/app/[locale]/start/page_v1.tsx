import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import StartClient from './StartClient'
import { SchemaTypes } from '@/lib/schema-ultimate'
import { generateKnowledgeGraph } from '@/lib/entity-knowledge-graph'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'start.seo' });
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: 'https://ergoblockchain.org/start'
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: 'https://ergoblockchain.org/start',
      siteName: 'Ergo Platform',
      images: [{
        url: 'https://ergoblockchain.org/og/start.png',
        width: 1200,
        height: 630,
        alt: 'Start with Ergo - Learning Paths'
      }],
      type: 'website',
      locale: 'en_US'
    },
    twitter: {
      card: 'summary_large_image',
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: ['https://ergoblockchain.org/og/start.png'],
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

export default async function StartPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'start.schema' });
  
    const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': 'https://ergoblockchain.org/start#howto',
    name: t('howTo.name'),
    description: t('howTo.description'),
    image: 'https://ergoblockchain.org/og/start.png',
    totalTime: 'PT30M',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '0'
    },
    supply: [
      { '@type': 'HowToSupply', name: 'Computer or smartphone' },
      { '@type': 'HowToSupply', name: 'Internet connection' }
    ],
    tool: [
      { '@type': 'HowToTool', name: 'Ergo wallet (Nautilus or Satergo)' },
      { '@type': 'HowToTool', name: 'Web browser' }
    ],
    step: [
      {
        '@type': 'HowToStep',
        name: t('howTo.steps.choosePath.name'),
        text: t('howTo.steps.choosePath.text'),
        url: 'https://ergoblockchain.org/start',
        image: 'https://ergoblockchain.org/images/start-paths.png'
      },
      {
        '@type': 'HowToStep',
        name: t('howTo.steps.understandWhy.name'),
        text: t('howTo.steps.understandWhy.text'),
        url: 'https://ergoblockchain.org/start/introduction'
      },
      {
        '@type': 'HowToStep',
        name: t('howTo.steps.getWallet.name'),
        text: t('howTo.steps.getWallet.text'),
        url: 'https://ergoblockchain.org/wallet'
      },
      {
        '@type': 'HowToStep',
        name: t('howTo.steps.tryTestnet.name'),
        text: t('howTo.steps.tryTestnet.text'),
        url: 'https://ergoblockchain.org/wallet/testnet-faucet'
      }
    ]
  }

  const knowledgeGraph = generateKnowledgeGraph('start')


  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraph) }} />
      <StartClient />
    </>
  )
} 