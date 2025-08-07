import { MetadataRoute } from 'next'
import { blogPosts } from './_lib/blog-data'

export default function BlogSitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ergoblockchain.org'
  const currentDate = new Date()
  
  // Main blog page
  const blogPages = [
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.8,
    }
  ]
  
  // Individual blog posts
  const postPages = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))
  
  return [...blogPages, ...postPages]
} 