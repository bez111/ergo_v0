import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Blog | Ergo Platform',
    template: '%s | Ergo Blog'
  },
  description: 'Latest news, updates, and insights from Ergo Platform - exploring blockchain technology, DeFi innovations, and smart contract development.',
  keywords: [
    'ergo blog',
    'blockchain news',
    'cryptocurrency updates',
    'defi insights',
    'ergoscript tutorials',
    'smart contracts',
    'proof-of-work',
    'blockchain technology'
  ],
  openGraph: {
    title: 'Ergo Platform Blog',
    description: 'Stay updated with the latest developments in the Ergo ecosystem',
    type: 'website',
    locale: 'en_US',
    url: 'https://ergoblockchain.org/blog',
    siteName: 'Ergo Platform',
    images: [
      {
        url: '/og-blog.png',
        width: 1200,
        height: 630,
        alt: 'Ergo Platform Blog'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ergo Platform Blog',
    description: 'Latest news and insights from Ergo Platform',
    site: '@ergoplatform',
    creator: '@ergoplatform',
    images: ['/og-blog.png']
  },
  alternates: {
    canonical: 'https://ergoblockchain.org/blog',
    types: {
      'application/rss+xml': 'https://ergoblockchain.org/api/rss'
    }
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
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* JSON-LD structured data for blog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'Ergo Platform Blog',
            description: 'Latest news and insights from Ergo Platform',
            url: 'https://ergoblockchain.org/blog',
            publisher: {
              '@type': 'Organization',
              name: 'Ergo Platform',
              logo: {
                '@type': 'ImageObject',
                url: 'https://ergoblockchain.org/logo.png'
              }
            },
            blogPost: [],
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://ergoblockchain.org/blog'
            }
          })
        }}
      />
      {children}
    </>
  )
} 