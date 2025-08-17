import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { normalizeUrl, REDIRECT_MAP, isIndexBloat } from './lib/url-architecture'

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl
  
  // 1. Проверяем redirect map для исправления старых URL
  const redirect = REDIRECT_MAP[pathname]
  if (redirect) {
    if (redirect.code === 410) {
      return new NextResponse('This page has been permanently removed', { status: 410 })
    }
    const url = request.nextUrl.clone()
    url.pathname = redirect.to
    return NextResponse.redirect(url, { status: redirect.code })
  }
  
  // 2. Нормализуем URL (lowercase, дефисы, без trailing slash)
  const normalized = normalizeUrl(pathname)
  if (normalized !== pathname) {
    const url = request.nextUrl.clone()
    url.pathname = normalized
    return NextResponse.redirect(url, { status: 301 })
  }
  
  // 3. Обработка параметров
  const searchParams = new URLSearchParams(search)
  
  // Убираем page=1
  if (searchParams.get('page') === '1') {
    searchParams.delete('page')
    const url = request.nextUrl.clone()
    url.search = searchParams.toString()
    return NextResponse.redirect(url, { status: 301 })
  }
  
  // Убираем шумовые UTM параметры
  const noiseParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'ref', 'fbclid', 'gclid']
  let hasNoise = false
  
  noiseParams.forEach(param => {
    if (searchParams.has(param)) {
      searchParams.delete(param)
      hasNoise = true
    }
  })
  
  if (hasNoise) {
    const url = request.nextUrl.clone()
    url.search = searchParams.toString()
    return NextResponse.redirect(url, { status: 301 })
  }
  
  // Создаем response
  const response = NextResponse.next()
  
  // 4. Security Headers
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
  
  // 5. Блокируем index bloat страницы
  if (isIndexBloat(pathname)) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow')
  }
  
  // 6. Добавляем canonical header
  const canonical = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://ergoblockchain.org'}${normalized}${search}`
  response.headers.set('Link', `<${canonical}>; rel="canonical"`)
  
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