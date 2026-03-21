import { MetadataRoute } from 'next'
import { blogPosts } from './_lib/blog-data'

const PAGE_SIZE = 12

export default function BlogSitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.ergoblockchain.org'
  const currentDate = new Date()

  // Main blog page
  const blogPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ]

  // Pagination
  const nonFeatured = blogPosts.filter((p) => !p.featured)
  const totalPages = Math.max(1, Math.ceil(nonFeatured.length / PAGE_SIZE))
  const paginationEntries: MetadataRoute.Sitemap = Array.from({ length: totalPages }, (_, i) => {
    const page = i + 1
    const url = page === 1 ? `${baseUrl}/blog` : `${baseUrl}/blog?page=${page}`
    return {
      url,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: page === 1 ? 0.8 : 0.6,
    }
  })

  // Individual blog posts
  const postPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  return [...blogPages, ...paginationEntries, ...postPages]
} 