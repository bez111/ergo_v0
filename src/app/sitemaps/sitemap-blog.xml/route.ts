import { NextResponse } from 'next/server'
import { blogPosts } from '@/app/[locale]/blog/_lib/blog-data'
import { generateMultilingualBlogSitemap, sitemapHeaders } from '@/lib/sitemap-utils'

export async function GET() {
  const posts = blogPosts.map(post => ({
    url: `/blog/${post.slug}`,
    title: post.title,
    date: post.date,
    lastmod: post.lastUpdated || post.date,
    priority: 0.8
  }))

  const sitemap = generateMultilingualBlogSitemap(posts)

  return new NextResponse(sitemap, { headers: sitemapHeaders })
}
