// CDN Configuration for static assets
const CDN_BASE_URL = process.env.NEXT_PUBLIC_CDN_URL || 'https://cdn.ergoblockchain.org'
const USE_CDN = process.env.NEXT_PUBLIC_USE_CDN === 'true'

/**
 * Get CDN URL for static assets
 */
export function getCDNUrl(path: string): string {
  // Don't use CDN in development
  if (process.env.NODE_ENV === 'development') {
    return path
  }
  
  // Return original path if CDN is disabled
  if (!USE_CDN) {
    return path
  }
  
  // Handle absolute URLs
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }
  
  // Ensure path starts with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  
  // Return CDN URL
  return `${CDN_BASE_URL}${cleanPath}`
}

/**
 * Optimize image URL with CDN and transformations
 */
export function getOptimizedImageUrl(
  src: string,
  options?: {
    width?: number
    height?: number
    quality?: number
    format?: 'webp' | 'avif' | 'auto'
  }
): string {
  const cdnUrl = getCDNUrl(src)
  
  // If using Cloudflare or similar CDN with image optimization
  if (USE_CDN && options) {
    const params = new URLSearchParams()
    
    if (options.width) params.append('w', options.width.toString())
    if (options.height) params.append('h', options.height.toString())
    if (options.quality) params.append('q', options.quality.toString())
    if (options.format) params.append('f', options.format)
    
    const queryString = params.toString()
    return queryString ? `${cdnUrl}?${queryString}` : cdnUrl
  }
  
  return cdnUrl
}

/**
 * Preload critical assets through CDN
 */
export function preloadCDNAssets(): string[] {
  const criticalAssets = [
    '/logo.png',
    '/og-image.png',
    '/fonts/inter-var.woff2',
    '/fonts/jetbrains-mono.woff2',
  ]
  
  return criticalAssets.map(asset => getCDNUrl(asset))
}

/**
 * Get resource hints for CDN
 */
export function getCDNResourceHints() {
  if (!USE_CDN) return []
  
  const cdnDomain = new URL(CDN_BASE_URL).hostname
  
  return [
    { rel: 'preconnect', href: CDN_BASE_URL },
    { rel: 'dns-prefetch', href: CDN_BASE_URL },
    { rel: 'preconnect', href: `https://${cdnDomain}`, crossOrigin: 'anonymous' },
  ]
}

/**
 * Configure security headers for CDN
 */
export const CDN_SECURITY_HEADERS = {
  'Content-Security-Policy': `
    default-src 'self' ${CDN_BASE_URL};
    img-src 'self' ${CDN_BASE_URL} data: https:;
    font-src 'self' ${CDN_BASE_URL};
    style-src 'self' ${CDN_BASE_URL} 'unsafe-inline';
    script-src 'self' ${CDN_BASE_URL} 'unsafe-inline' 'unsafe-eval';
  `.replace(/\s+/g, ' ').trim(),
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'SAMEORIGIN',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
}

export default {
  getCDNUrl,
  getOptimizedImageUrl,
  preloadCDNAssets,
  getCDNResourceHints,
  CDN_SECURITY_HEADERS,
} 