
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Metadata } from 'next'
import { SchemaOrg } from './schema-org'

interface PageMetadataProps {
  title: string
  description: string
  keywords?: string[]
  image?: string
  type?: 'article' | 'website'
  schemaType?: 'Article' | 'WebSite' | 'FAQPage' | 'HowTo'
  schemaData?: Record<string, unknown>
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  image = '/og-image.png',
  type = 'website',
}: PageMetadataProps): Metadata {
  const fullTitle = `${title} | Ergo Platform`
  
  return {
    title: fullTitle,
    description,
    keywords: [
      'ergo',
      'blockchain',
      'cryptocurrency',
      'smart contracts',
      'eutxo',
      'proof-of-work',
      'ergoscript',
      'sigma protocols',
      'defi',
      'privacy',
      'decentralized applications',
      'contractual money',
      ...keywords,
    ],
    openGraph: {
      title: fullTitle,
      description,
      type,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
      creator: '@ergoplatform',
    },
  }
}

export function PageMetadata({
  title,
  description,
  keywords,
  image,
  type,
  schemaType,
  schemaData,
}: PageMetadataProps) {
  return (
    <>
      {schemaType && schemaData && <SchemaOrg type={schemaType} data={schemaData} />}
    </>
  )
} 