
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import WalletClient from './WalletClient'
import { SchemaTypes } from '@/lib/schema-ultimate'
import { generateKnowledgeGraph } from '@/lib/entity-knowledge-graph'
import { FAQSchema } from '@/components/seo/faq-schema'
import { BackgroundWrapper } from '@/components/home/background-wrapper'

const walletUrl = "https://ergoblockchain.org/wallet"

// FAQ data for wallet page
const walletFAQ = [
  {
    question: "What is the best Ergo wallet?",
    answer: "The best Ergo wallet depends on your needs: Nautilus (browser extension) is best for DeFi and dApp interactions with web3 support. Ergo Mobile Wallet is great for everyday use on phone. SAFEW offers advanced features for power users. For maximum security, use Ledger hardware wallet with Nautilus."
  },
  {
    question: "Is Nautilus wallet safe?",
    answer: "Yes, Nautilus is a secure non-custodial wallet. Your private keys are stored locally and encrypted. It's open-source so anyone can audit the code. However, always backup your 15-word seed phrase securely - if you lose it, you lose access to your funds."
  },
  {
    question: "Can I use Ledger with Ergo?",
    answer: "Yes! Ergo is supported on Ledger hardware wallets. Connect your Ledger to Nautilus browser extension for the best security. Your private keys never leave the Ledger device, making it the safest option for storing large amounts of ERG."
  },
  {
    question: "How do I backup my Ergo wallet?",
    answer: "When creating a wallet, you'll receive a 15-word seed phrase. Write it down on paper (never digitally) and store in multiple secure locations. This phrase can recover your wallet on any device. Never share it - anyone with the phrase controls your funds."
  },
  {
    question: "Which wallet supports Ergo NFTs?",
    answer: "Nautilus is the best wallet for Ergo NFTs as it integrates with NFT marketplaces like SkyHarbor. You can view, send, and receive NFTs directly in the wallet. SAFEW also supports NFTs with an advanced token viewer."
  }
]

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

  const speakableSchema = SchemaTypes.SpeakableSchema({
    headline: "Ergo Wallets",
    summary: "Choose the best Ergo wallet for your needs. Browser extensions, mobile apps, desktop clients, and hardware wallet support.",
    url: walletUrl
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(walletsJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraph) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <FAQSchema faqs={walletFAQ} pageUrl={walletUrl} />

      <main className="min-h-screen bg-black text-white relative overflow-hidden">
        <BackgroundWrapper>
          <WalletClient />
        </BackgroundWrapper>
      </main>
    </>
  )
} 