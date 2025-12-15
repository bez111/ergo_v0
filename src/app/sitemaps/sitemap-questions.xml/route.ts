import { NextResponse } from 'next/server'
import { questions } from '@/data/questions'
import { generateMultilingualSitemap, sitemapHeaders } from '@/lib/sitemap-utils'

export async function GET() {
  const hubPage = {
    url: '/questions',
    priority: 0.9,
    changefreq: 'daily' as const
  }
  
  const questionPages = questions
    .sort((a, b) => a.priority - b.priority)
    .map(question => ({
      url: `/questions/${question.slug}`,
      priority: question.priority === 1 ? 0.8 : question.priority === 2 ? 0.7 : 0.6,
      changefreq: 'weekly' as const,
      lastmod: question.updatedDate || question.publishDate
    }))

  const allPages = [hubPage, ...questionPages]
  const sitemap = generateMultilingualSitemap(allPages)

  return new NextResponse(sitemap, { headers: sitemapHeaders })
}

