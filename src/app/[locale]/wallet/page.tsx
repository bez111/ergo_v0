import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import WalletClient from './WalletClient'
import { SchemaTypes } from '@/lib/schema-ultimate'
import { generateKnowledgeGraph } from '@/lib/entity-knowledge-graph'
import { BackgroundWrapper } from '@/components/home/background-wrapper'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'wallet' });
  
  return {
    title: t('seo.title'),
    description: t('seo.description'),
    keywords: t('seo.keywords'),
    alternates: {
      canonical: 'https://ergoblockchain.org/wallet'
    },
    openGraph: {
      title: t('seo.ogTitle'),
      description: t('seo.ogDescription'),
      url: 'https://ergoblockchain.org/wallet',
      siteName: 'Ergo Platform',
      images: [{
        url: 'https://ergoblockchain.org/og/wallets.png',
        width: 1200,
        height: 630,
        alt: 'Ergo Wallets Overview'
      }],
      type: 'website',
      locale: 'en_US'
    },
    twitter: {
      card: 'summary_large_image',
      title: t('seo.twitterTitle'),
      description: t('seo.twitterDescription'),
      images: ['https://ergoblockchain.org/og/wallets.png'],
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

export default async function WalletPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'wallet.schema' });
  
  const walletsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://ergoblockchain.org/wallet#page',
    name: t('name'),
    description: t('description'),
    url: 'https://ergoblockchain.org/wallet',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'SoftwareApplication',
          position: 1,
          name: t('wallets.nautilus.name'),
          applicationCategory: 'FinanceApplication',
          operatingSystem: 'Chrome, Firefox, Android, iOS',
          description: t('wallets.nautilus.description'),
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD'
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '30000'
          }
        },
        {
          '@type': 'SoftwareApplication',
          position: 2,
          name: t('wallets.satergo.name'),
          applicationCategory: 'FinanceApplication',
          operatingSystem: 'Windows, macOS, Linux',
          description: t('wallets.satergo.description'),
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD'
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            ratingCount: '10000'
          }
        }
      ]
    }
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://ergoblockchain.org'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: t('name'),
        item: 'https://ergoblockchain.org/wallet'
      }
    ]
  }

  const knowledgeGraph = generateKnowledgeGraph('wallet')

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(walletsJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraph) }} />

      <main className="min-h-screen bg-black text-white relative overflow-hidden">
        <BackgroundWrapper>
          <WalletClient />
        </BackgroundWrapper>
      </main>
    </>
  )
} 