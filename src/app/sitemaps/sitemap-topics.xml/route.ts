import { NextResponse } from 'next/server'
import { topics } from '@/data/topics'
import { generateMultilingualSitemap, sitemapHeaders } from '@/lib/sitemap-utils'

export async function GET() {
  const hubPage = {
    url: '/topics',
    priority: 0.9,
    changefreq: 'daily' as const,
    lastmod: new Date().toISOString()
  }
  
  const topicPages = topics.map(topic => ({
    url: `/topics/${topic.slug}`,
    priority: 0.9,
    changefreq: 'weekly' as const,
    lastmod: topic.updatedDate || topic.publishDate
  }))

  const allPages = [hubPage, ...topicPages]
  const sitemap = generateMultilingualSitemap(allPages)

  return new NextResponse(sitemap, { headers: sitemapHeaders })
}

