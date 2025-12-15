import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { createBlogSchema, getAlternates, getCanonicalUrl } from '@/lib/seo'
import { renderSchemaScripts } from '@/components/seo/SEOSchemas'

interface Props {
  params: Promise<{ locale: string }>
  children: React.ReactNode
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'blog.seo' })

  const title = t('title')
  const description = t('description')

  return {
    title: {
      default: title,
      template: '%s | Ergo Blog'
    },
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: getCanonicalUrl('/blog', locale),
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
      title,
      description,
      images: ['/og/blog.svg']
    },
    alternates: {
      ...getAlternates('/blog', locale),
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
