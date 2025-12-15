import { NextResponse } from 'next/server'
import { glossaryTerms } from '@/data/glossary'
import { generateMultilingualSitemap, sitemapHeaders } from '@/lib/sitemap-utils'

export async function GET() {
  const hubPage = {
    url: '/learn/glossary',
    priority: 0.8,
    changefreq: 'weekly' as const
  }
  
  const termPages = glossaryTerms.map(term => ({
    url: `/learn/glossary/${term.slug}`,
    priority: 0.6,
    changefreq: 'monthly' as const,
    lastmod: term.updatedDate || term.publishDate || new Date().toISOString()
  }))

  const allPages = [hubPage, ...termPages]
  const sitemap = generateMultilingualSitemap(allPages)

  return new NextResponse(sitemap, { headers: sitemapHeaders })
}

