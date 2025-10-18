import { NextRequest, NextResponse } from 'next/server'
import { normalizeUrl, REDIRECT_MAP, isIndexBloat } from './url-architecture'

/**
 * Middleware для нормализации URL и обработки редиректов
 */
export function urlNormalizerMiddleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl
  const fullPath = pathname + search
  
  // 1. Проверяем redirect map
  const redirect = REDIRECT_MAP[pathname]
  if (redirect) {
    if (redirect.code === 410) {
      // 410 Gone
      return new NextResponse('This page has been permanently removed', { status: 410 })
    }
    
    // 301/302 редирект
    const url = request.nextUrl.clone()
    url.pathname = redirect.to
    return NextResponse.redirect(url, { status: redirect.code })
  }
  
  // 2. Нормализуем URL
  const normalized = normalizeUrl(pathname)
  
  // Если URL изменился после нормализации - редирект
  if (normalized !== pathname) {
    const url = request.nextUrl.clone()
    url.pathname = normalized
    return NextResponse.redirect(url, { status: 301 })
  }
  
  // 3. Обработка page=1
  const searchParams = new URLSearchParams(search)
  if (searchParams.get('page') === '1') {
    searchParams.delete('page')
    const url = request.nextUrl.clone()
    url.search = searchParams.toString()
    return NextResponse.redirect(url, { status: 301 })
  }
  
  // 4. Удаляем шумовые параметры (UTM, ref, etc)
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
  
  // 5. Блокируем index bloat страницы
  if (isIndexBloat(pathname)) {
    const response = NextResponse.next()
    response.headers.set('X-Robots-Tag', 'noindex, nofollow')
    return response
  }
  
  // 6. Добавляем canonical header
  const response = NextResponse.next()
  const canonical = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://ergoblockchain.org'}${normalized}${search}`
  response.headers.set('Link', `<${canonical}>; rel="canonical"`)
  
  return response
} 