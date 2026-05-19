import { NextResponse } from 'next/server'
import { getAllBlogPostsWithUploaded } from '@/app/[locale]/blog/_lib/uploaded-posts'
import { generateMultilingualBlogSitemap, sitemapHeaders, filterIndexablePages } from '@/lib/sitemap-utils'

export async function GET() {
  const allPosts = await getAllBlogPostsWithUploaded()
  const posts = allPosts.map(post => ({
    url: `/blog/${post.slug}`,
    title: post.title,
    date: post.date,
    lastmod: post.lastUpdated || post.date,
    priority: 0.8
  }))

  const sitemap = generateMultilingualBlogSitemap(filterIndexablePages(posts))

  return new NextResponse(sitemap, { headers: sitemapHeaders })
}
