import { NextResponse } from 'next/server'
import { glossaryTerms } from '@/data/glossary'
import { generateCanonicalSitemap, sitemapHeaders, filterIndexablePages } from '@/lib/sitemap-utils'

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
  const sitemap = generateCanonicalSitemap(filterIndexablePages(allPages))

  return new NextResponse(sitemap, { headers: sitemapHeaders })
}
