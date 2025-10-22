import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Ergo Blog — latest updates, research, and guides',
    template: '%s | Ergo Blog'
  },
  description: 'News, research deep-dives, and how-tos from the Ergo ecosystem.',
  openGraph: {
    title: 'Ergo Blog',
    description: 'News, research deep-dives, and how-tos from the Ergo ecosystem.',
    type: 'website',
    locale: 'en_US',
    url: 'https://ergoblockchain.org/blog',
    siteName: 'Ergo Platform',
    images: [
      {
        url: '/og/blog.png',
        width: 1200,
        height: 630,
        alt: 'Ergo Blog'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ergo Blog',
    description: 'News, research deep-dives, and how-tos from the Ergo ecosystem.',
    images: ['/og/blog.png']
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
      {/* JSON-LD structured data for blog container */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'Ergo Blog',
            description: 'News, research deep-dives, and how-tos from the Ergo ecosystem.',
            url: 'https://ergoblockchain.org/blog',
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
              '@id': 'https://ergoblockchain.org/blog'
            }
          })
        }}
      />
      {children}
    </>
  )
} 