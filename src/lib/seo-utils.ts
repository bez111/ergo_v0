
/* eslint-disable @typescript-eslint/no-explicit-any, import/no-anonymous-default-export */
import { Metadata } from 'next'

const BASE_URL = 'https://ergoblockchain.org'

interface GenerateMetadataParams {
  title: string
  description: string
  path: string
  image?: string
  keywords?: string[]
  noindex?: boolean
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
}

/**
 * Generate canonical URL with proper parameter handling
 */
export function generateCanonicalUrl(path: string, params?: URLSearchParams): string {
  // Remove trailing slash
  const cleanPath = path.replace(/\/$/, '')
  
  // Whitelist of allowed parameters
  const allowedParams = ['page', 'category', 'tag']
  
  if (params) {
    const filtered = new URLSearchParams()
    
    // Only keep whitelisted parameters
    allowedParams.forEach(param => {
      const value = params.get(param)
      if (value) {
        // Special handling for page=1
        if (param === 'page' && value === '1') {
          return // Skip page=1
        }
        filtered.append(param, value)
      }
    })
    
    const queryString = filtered.toString()
    if (queryString) {
      return `${BASE_URL}${cleanPath}?${queryString}`
    }
  }
  
  return `${BASE_URL}${cleanPath}`
}

/**
 * Generate comprehensive metadata for pages
 */
export function generatePageMetadata({
  title,
  description,
  path,
  image = '/og-image.png',
  keywords = [],
  noindex = false,
  type = 'website',
  publishedTime,
  modifiedTime,
  author
}: GenerateMetadataParams): Metadata {
  const canonicalUrl = generateCanonicalUrl(path)
  const absoluteImage = image.startsWith('http') ? image : `${BASE_URL}${image}`
  
  // Add default keywords
  const allKeywords = [
    ...keywords,
    'Ergo',
    'blockchain',
    'cryptocurrency',
    'smart contracts'
  ].filter((v, i, a) => a.indexOf(v) === i) // Remove duplicates
  
  const metadata: Metadata = {
    title,
    description,
    keywords: allKeywords.join(', '),
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Ergo Platform',
      images: [
        {
          url: absoluteImage,
          width: 1200,
          height: 630,
          alt: title
        }
      ],
      locale: 'en_US',
      type: type as any
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [absoluteImage],
      creator: '@ergoplatform',
      site: '@ergoplatform'
    },
    robots: noindex 
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1
          }
        }
  }
  
  // Add article-specific metadata
  if (type === 'article' && metadata.openGraph) {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: 'article',
      publishedTime,
      modifiedTime: modifiedTime || publishedTime,
      authors: author ? [author] : undefined
    }
  }
  
  return metadata
}

/**
 * Determine if a page should be indexed based on quality signals
 */
export function shouldIndexPage(params: {
  path: string
  pageNumber?: number
  hasContent?: boolean
  contentLength?: number
}): boolean {
  const { path, pageNumber = 1, hasContent = true, contentLength = 0 } = params
  
  // Don't index deep pagination
  if (pageNumber > 5) return false
  
  // Don't index thin content
  if (contentLength > 0 && contentLength < 300) return false
  
  // Don't index empty pages
  if (!hasContent) return false
  
  // Don't index certain paths
  const noindexPaths = [
    '/search',
    '/api',
    '/admin',
    '/private',
    '/_next'
  ]
  
  if (noindexPaths.some(p => path.startsWith(p))) {
    return false
  }
  
  return true
}

/**
 * Generate hreflang tags for international SEO
 */
export function generateHreflangTags(path: string): Record<string, string> {
  const languages = ['en'] // Add more languages as needed
  const hreflangs: Record<string, string> = {}
  
  languages.forEach(lang => {
    hreflangs[lang] = `${BASE_URL}${path}`
  })
  
  hreflangs['x-default'] = `${BASE_URL}${path}`
  
  return hreflangs
}

/**
 * Generate pagination metadata
 */
export function generatePaginationMetadata(
  currentPage: number,
  totalPages: number,
  basePath: string
): {
  prev?: string
  next?: string
  canonical: string
} {
  const result: { prev?: string; next?: string; canonical: string } = {
    canonical: currentPage === 1 
      ? `${BASE_URL}${basePath}`
      : `${BASE_URL}${basePath}?page=${currentPage}`
  }
  
  if (currentPage > 1) {
    result.prev = currentPage === 2
      ? `${BASE_URL}${basePath}`
      : `${BASE_URL}${basePath}?page=${currentPage - 1}`
  }
  
  if (currentPage < totalPages) {
    result.next = `${BASE_URL}${basePath}?page=${currentPage + 1}`
  }
  
  return result
}

export default {
  generateCanonicalUrl,
  generatePageMetadata,
  shouldIndexPage,
  generateHreflangTags,
  generatePaginationMetadata
} 