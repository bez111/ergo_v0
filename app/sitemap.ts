import { MetadataRoute } from 'next'
import { blogPosts } from './blog/_lib/blog-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ergoblockchain.org'
  const currentDate = new Date()
  
  // Main pages with highest priority
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/technology`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ecosystem`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/start`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]

  // Technology pages
  const technologyPages = [
    'eutxo-model',
    'ergoscript',
    'secure-pow',
    'storage-rent',
    'privacy-features',
    'nipopows',
    'sigma-protocols',
    'autolykos',
  ].map(page => ({
    url: `${baseUrl}/technology/${page}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Documentation pages
  const docsPages = [
    'introduction/glossary',
    'introduction/eutxo',
    'introduction/nipopows',
    'introduction/storage-rent',
    'developers',
    'developers/tooling',
    'developers/frameworks',
    'ecosystem/infrastructure',
    'ecosystem/wallets',
    'ecosystem/defi',
  ].map(page => ({
    url: `${baseUrl}/Docs/${page}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Use case pages
  const useCasePages = [
    'defi',
    'nft',
    'dao',
    'privacy',
    'mining',
    'get-erg',
  ].map(page => ({
    url: `${baseUrl}/use/${page}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Build pages
  const buildPages = [
    'docs',
    'tools',
    'grants',
    'hackathons',
  ].map(page => ({
    url: `${baseUrl}/build/${page}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Additional important pages
  const additionalPages = [
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/wallet`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/learn`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/events`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
  ]

  // Blog posts
  const blogPages = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [
    ...mainPages,
    ...technologyPages,
    ...docsPages,
    ...useCasePages,
    ...buildPages,
    ...additionalPages,
    ...blogPages,
  ]
}
