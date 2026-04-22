import { Metadata } from 'next'
import DocsClient from './DocsClient'
import Script from 'next/script'
import { generateDocsSchema } from './docs-schema'
import { getTranslations } from 'next-intl/server'
import { getAlternates, getCanonicalUrl } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'docs' })

  return {
    title: t('title'),
    description: t('subtitle'),
    keywords: 'Ergo documentation, blockchain docs, smart contracts, ErgoScript, development guide, API reference, mining guide, wallet setup',
    openGraph: {
      title: t('title'),
      description: t('subtitle'),
      type: 'website',
      url: getCanonicalUrl('/docs', locale),
      images: [{
        url: '/og-docs.png',
        width: 1200,
        height: 630,
        alt: 'Ergo Documentation'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('subtitle'),
      images: ['/og-docs.png']
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: getAlternates('/docs', locale),
  }
}

export default function DocsPage() {
  const schemas = generateDocsSchema()
  
  return (
    <>
      {schemas.map((schema, index) => (
        <Script
          key={index}
          id={`docs-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <DocsClient />
    </>
  )
} 