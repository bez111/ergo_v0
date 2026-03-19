
/* eslint-disable import/no-anonymous-default-export */
/**
 * Pagination SEO utilities
 */

interface PaginationConfig {
  currentPage: number
  totalPages: number
  baseUrl: string
  itemsPerPage: number
}

/**
 * Generate canonical URL for pagination
 */
export function getPaginationCanonical(config: PaginationConfig): string {
  const { currentPage, baseUrl } = config
  
  // Page 1 should have clean URL without /page/1
  if (currentPage === 1) {
    return baseUrl
  }
  
  return `${baseUrl}/page/${currentPage}`
}

/**
 * Generate rel prev/next links for pagination
 */
export function getPaginationLinks(config: PaginationConfig) {
  const { currentPage, totalPages, baseUrl } = config
  const links: { rel: string; href: string }[] = []
  
  // Previous page
  if (currentPage > 1) {
    const prevPage = currentPage - 1
    const prevUrl = prevPage === 1 ? baseUrl : `${baseUrl}/page/${prevPage}`
    links.push({ rel: 'prev', href: prevUrl })
  }
  
  // Next page
  if (currentPage < totalPages) {
    links.push({ rel: 'next', href: `${baseUrl}/page/${currentPage + 1}` })
  }
  
  return links
}

/**
 * Check if page should be indexed
 */
export function shouldIndexPage(config: PaginationConfig): boolean {
  const { currentPage, totalPages } = config
  
  // Don't index empty pages
  if (currentPage > totalPages) {
    return false
  }
  
  // Index first 3 pages for better discovery
  if (currentPage <= 3) {
    return true
  }
  
  // Index every 5th page for deep content discovery
  if (currentPage % 5 === 0) {
    return true
  }
  
  // Don't index deep pagination pages
  return false
}

/**
 * Generate structured data for pagination
 */
export function getPaginationSchema(config: PaginationConfig, items: unknown[]) {
  const { currentPage, totalPages, baseUrl } = config
  
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": getPaginationCanonical(config),
    "url": getPaginationCanonical(config),
    "name": `Page ${currentPage}`,
    "isPartOf": {
      "@type": "Collection",
      "@id": baseUrl,
      "url": baseUrl,
      "name": "Collection"
    },
    "pageStart": (currentPage - 1) * config.itemsPerPage + 1,
    "pageEnd": Math.min(currentPage * config.itemsPerPage, items.length),
    "previousItem": currentPage > 1 ? {
      "@type": "CollectionPage",
      "@id": currentPage === 2 ? baseUrl : `${baseUrl}/page/${currentPage - 1}`
    } : undefined,
    "nextItem": currentPage < totalPages ? {
      "@type": "CollectionPage",
      "@id": `${baseUrl}/page/${currentPage + 1}`
    } : undefined
  }
}

/**
 * Handle pagination redirects
 */
export function getPaginationRedirect(
  path: string,
  currentPage: number,
  totalPages: number
): string | null {
  // Redirect /page/1 to clean URL
  if (path.endsWith('/page/1')) {
    return path.replace('/page/1', '')
  }
  
  // Redirect pages beyond total to last page
  if (currentPage > totalPages && totalPages > 0) {
    return path.replace(`/page/${currentPage}`, `/page/${totalPages}`)
  }
  
  return null
}

export default {
  getPaginationCanonical,
  getPaginationLinks,
  shouldIndexPage,
  getPaginationSchema,
  getPaginationRedirect
} 