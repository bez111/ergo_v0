import { Metadata } from 'next'
import { createBlogSchema } from '@/lib/seo'
import { renderSchemaScripts } from '@/components/seo/SEOSchemas'

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
        url: '/og/blog.svg',
        width: 1200,
        height: 630,
        alt: 'Ergo Blog - Latest Updates, Research & Guides'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ergo Blog',
    description: 'News, research deep-dives, and how-tos from the Ergo ecosystem.',
    images: ['/og/blog.svg']
  },
  alternates: {
    canonical: 'https://ergoblockchain.org/blog',
    types: {
      'application/rss+xml': 'https://ergoblockchain.org/blog/rss.xml',
      'application/feed+json': 'https://ergoblockchain.org/blog/feed.json'
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

// Centralized Blog schema
const blogSchema = createBlogSchema({
  name: 'Ergo Blog',
  description: 'News, research deep-dives, and how-tos from the Ergo ecosystem.',
  url: '/blog',
})

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {renderSchemaScripts([blogSchema])}
      {children}
    </>
  )
} 