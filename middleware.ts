import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { checkSoftRedirect } from './lib/soft-redirects'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  const url = request.nextUrl
  
  // === ФАЗА 2: Мягкие редиректы для новых страниц ===
  const softRedirect = checkSoftRedirect(url.pathname)
  if (softRedirect.shouldRedirect && softRedirect.destination) {
    const redirectUrl = new URL(softRedirect.destination, request.url)
    redirectUrl.search = url.search // Сохраняем параметры
    return NextResponse.redirect(redirectUrl, softRedirect.statusCode)
  }
  
  // === ФАЗА 1: Очистка параметров ===
  const searchParams = new URLSearchParams(url.search)
  let needsRedirect = false
  
  // 1. Удаляем page=1
  if (searchParams.get('page') === '1') {
    searchParams.delete('page')
    needsRedirect = true
  }
  
  // 2. Удаляем UTM и tracking параметры
  const noiseParams = [
    'utm_source', 'utm_medium', 'utm_campaign', 
    'utm_term', 'utm_content', 'utm_id',
    'ref', 'fbclid', 'gclid', 'msclkid',
    'mc_cid', 'mc_eid', '_ga', '_gl'
  ]
  
  for (const param of noiseParams) {
    if (searchParams.has(param)) {
      searchParams.delete(param)
      needsRedirect = true
    }
  }
  
  // Если нужен редирект - делаем его
  if (needsRedirect) {
    const cleanUrl = new URL(url.pathname, request.url)
    cleanUrl.search = searchParams.toString()
    return NextResponse.redirect(cleanUrl, 301)
  }
  
  // Security Headers
  response.headers.set('X-DNS-Prefetch-Control', 'on')
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains')
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
  
  // Handle pagination redirects (legacy support)
  if (url.pathname.endsWith('/page/1')) {
    const cleanUrl = url.pathname.replace('/page/1', '')
    return NextResponse.redirect(new URL(cleanUrl || '/', request.url), 301)
  }
  
  // Remove trailing slashes (except for root)
  if (url.pathname !== '/' && url.pathname.endsWith('/')) {
    const cleanUrl = url.pathname.slice(0, -1)
    return NextResponse.redirect(new URL(cleanUrl, request.url), 301)
  }
  
  // Block crawlers from certain paths
  if (url.pathname.startsWith('/api/') || 
      url.pathname.startsWith('/admin/') ||
      url.pathname.startsWith('/_next/')) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow')
  }
  
  // Add canonical URL header
  const baseUrl = 'https://ergoblockchain.org'
  const canonical = `${baseUrl}${url.pathname}${url.search ? `?${searchParams.toString()}` : ''}`
  response.headers.set('Link', `<${canonical}>; rel="canonical"`)
  
  // Performance hints
  response.headers.set('X-Robots-Tag', 'all')
  
  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
} 