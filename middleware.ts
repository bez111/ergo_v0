import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import urlManager from './lib/url-manager'

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl
  const searchParams = new URLSearchParams(search)
  
  // ============================================
  // CHECK REDIRECTS FROM URL MANAGER
  // ============================================
  const redirect = urlManager.utils.checkRedirect(pathname)
  if (redirect.shouldRedirect) {
    if (redirect.statusCode === 410) {
      return new NextResponse('This page has been permanently removed', { status: 410 })
    }
    if (redirect.destination) {
      const url = request.nextUrl.clone()
      url.pathname = redirect.destination
      if (redirect.statusCode) {
        urlManager.utils.logUrlEvent({
          type: 'redirect',
          from: pathname,
          to: redirect.destination,
          statusCode: redirect.statusCode
        })
      }
      return NextResponse.redirect(url, redirect.statusCode || 302)
    }
  }
  
  // ============================================
  // 2. NORMALIZE URL
  // ============================================
  const normalizedPath = urlManager.utils.normalizeUrl(pathname)
  if (normalizedPath !== pathname) {
    const url = request.nextUrl.clone()
    url.pathname = normalizedPath
    urlManager.utils.logUrlEvent({
      type: 'normalize',
      from: pathname,
      to: normalizedPath
    })
    return NextResponse.redirect(url, 301)
  }
  
  // ============================================
  // 3. CLEAN QUERY PARAMETERS
  // ============================================
  const cleanedParams = urlManager.utils.cleanQueryParams(searchParams)
  const originalParamsString = searchParams.toString()
  const cleanedParamsString = cleanedParams.toString()
  
  if (originalParamsString !== cleanedParamsString) {
    const url = request.nextUrl.clone()
    url.search = cleanedParamsString
    urlManager.utils.logUrlEvent({
      type: 'clean',
      from: `${pathname}?${originalParamsString}`,
      to: `${pathname}${cleanedParamsString ? `?${cleanedParamsString}` : ''}`
    })
    return NextResponse.redirect(url, 301)
  }
  
  // ============================================
  // 4. CREATE RESPONSE WITH HEADERS
  // ============================================
  const response = NextResponse.next()
  
  // Security Headers
  response.headers.set('X-DNS-Prefetch-Control', 'on')
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload')
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
  
  // Content Security Policy
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https: blob:",
    "font-src 'self' data:",
    "connect-src 'self' https://www.google-analytics.com https://vitals.vercel-insights.com",
    "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com",
    "media-src 'self' https:",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'self'",
    "upgrade-insecure-requests"
  ].join('; ')
  
  response.headers.set('Content-Security-Policy', csp)
  
  // SEO Headers
  if (urlManager.utils.shouldNoIndex(pathname)) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow')
  } else {
    response.headers.set('X-Robots-Tag', 'index, follow')
  }
  
  // Canonical URL
  if (urlManager.utils.shouldHaveCanonical(pathname)) {
    const canonical = urlManager.utils.getCanonicalUrl(pathname, cleanedParams)
    response.headers.set('Link', `<${canonical}>; rel="canonical"`)
    urlManager.utils.logUrlEvent({
      type: 'canonical',
      from: pathname,
      to: canonical
    })
  }
  
  // Performance hints
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Powered-By', 'Ergo Platform')
  
  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico, robots.txt, sitemap.xml
     * - images, fonts
     */
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:jpg|jpeg|gif|png|svg|ico|webp|woff|woff2|ttf|otf|eot)).*)',
  ],
} 