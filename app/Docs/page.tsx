import type { Metadata } from 'next'
import DocsClient from './DocsClient'

export const metadata: Metadata = {
  title: 'Ergo Documentation - Complete Developer & User Guide',
  description: 'Comprehensive Ergo documentation: tutorials, API references, ErgoScript guide, infrastructure setup, ecosystem overview. Everything to build on Ergo.',
  keywords: ['ergo docs', 'ergo documentation', 'developer guide', 'ergoscript tutorial', 'blockchain development', 'ergo api', 'smart contracts', 'mining guide'],
  alternates: {
    canonical: 'https://ergoblockchain.org/Docs'
  },
  openGraph: {
    title: 'Ergo Platform Documentation',
    description: 'Complete guide for developers, miners, and users of Ergo blockchain.',
    url: 'https://ergoblockchain.org/Docs',
    siteName: 'Ergo Platform',
    images: [{
      url: 'https://ergoblockchain.org/og/docs.png',
      width: 1200,
      height: 630,
      alt: 'Ergo Documentation'
    }],
    type: 'website',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ergo Documentation - Build on Ergo',
    description: 'Complete technical documentation for developers, miners, and users.',
    images: ['https://ergoblockchain.org/og/docs.png'],
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

export default function DocsPage() {
  const docsSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    '@id': 'https://ergoblockchain.org/Docs#article',
    headline: 'Ergo Platform Documentation',
    description: 'Complete technical documentation for Ergo blockchain platform',
    datePublished: '2024-01-01',
    dateModified: '2024-12-15',
    author: {
      '@type': 'Organization',
      name: 'Ergo Platform',
      url: 'https://ergoblockchain.org'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ergo Platform',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ergoblockchain.org/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://ergoblockchain.org/Docs'
    },
    keywords: 'ergo, blockchain, documentation, development, mining, smart contracts, ergoscript'
  }

  const documentationSectionsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Ergo Documentation Sections',
    description: 'Main sections of Ergo platform documentation',
    numberOfItems: 5,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'TechArticle',
          name: 'Introduction',
          description: 'Why Ergo exists, key features, roadmap, and fundamental concepts',
          url: 'https://ergoblockchain.org/Docs/why-ergo'
        }
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'TechArticle',
          name: 'Ecosystem',
          description: 'Explore the Ergo ecosystem: DeFi, privacy tools, NFTs, and applications',
          url: 'https://ergoblockchain.org/Docs/ecosystem'
        }
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'TechArticle',
          name: 'Developers',
          description: 'Complete developer documentation: ErgoScript, tooling, APIs, and tutorials',
          url: 'https://ergoblockchain.org/Docs/developers'
        }
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'TechArticle',
          name: 'Miners',
          description: 'Mining guides, pool information, and Autolykos algorithm details',
          url: 'https://ergoblockchain.org/Docs/miners'
        }
      },
      {
        '@type': 'ListItem',
        position: 5,
        item: {
          '@type': 'TechArticle',
          name: 'Resources',
          description: 'Additional resources, research papers, and community links',
          url: 'https://ergoblockchain.org/Docs/resources'
        }
      }
    ]
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
        name: 'Documentation',
        item: 'https://ergoblockchain.org/Docs'
      }
    ]
  }

  const collectionPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Ergo Documentation Hub',
    description: 'Central hub for all Ergo platform documentation',
    url: 'https://ergoblockchain.org/Docs',
    hasPart: [
      {
        '@type': 'WebPage',
        name: 'Why Ergo',
        url: 'https://ergoblockchain.org/Docs/why-ergo'
      },
      {
        '@type': 'WebPage',
        name: 'Developer Guides',
        url: 'https://ergoblockchain.org/Docs/developers'
      },
      {
        '@type': 'WebPage',
        name: 'Mining Documentation',
        url: 'https://ergoblockchain.org/Docs/miners'
      },
      {
        '@type': 'WebPage',
        name: 'Ecosystem Overview',
        url: 'https://ergoblockchain.org/Docs/ecosystem'
      }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(docsSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(documentationSectionsSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }} />
      <DocsClient />
    </>
  )
} 