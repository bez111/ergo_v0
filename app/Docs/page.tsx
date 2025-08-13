import { Metadata } from 'next'
import DocsClient from './DocsClient'
import Script from 'next/script'
import { generateDocsSchema } from './docs-schema'

export const metadata: Metadata = {
  title: 'Documentation | Ergo Platform',
  description: 'Comprehensive documentation for Ergo Platform. Learn about blockchain technology, smart contracts, development tools, and ecosystem applications.',
  keywords: 'Ergo documentation, blockchain docs, smart contracts, ErgoScript, development guide, API reference, mining guide, wallet setup',
  openGraph: {
    title: 'Ergo Documentation Hub',
    description: 'Your complete guide to understanding, using, and building on Ergo Platform',
    type: 'website',
    url: 'https://ergoblockchain.org/Docs',
    images: [{
      url: '/og-docs.png',
      width: 1200,
      height: 630,
      alt: 'Ergo Documentation'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ergo Documentation Hub',
    description: 'Complete guide to Ergo Platform - from basics to advanced development',
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
  alternates: {
    canonical: 'https://ergoblockchain.org/Docs'
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