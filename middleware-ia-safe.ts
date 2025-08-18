import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Безопасный middleware для IA оптимизации
 * Работает с существующей структурой, не ломает /docs
 */
export function iaMiddleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl
  const searchParams = new URLSearchParams(search)
  
  // 1. Удаляем page=1 из пагинации
  if (searchParams.get('page') === '1') {
    searchParams.delete('page')
    const url = request.nextUrl.clone()
    url.search = searchParams.toString()
    return NextResponse.redirect(url, { status: 301 })
  }
  
  // 2. Удаляем UTM и tracking параметры
  const noiseParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'ref', 'fbclid', 'gclid']
  let hasNoise = false
  
  for (const param of noiseParams) {
    if (searchParams.has(param)) {
      searchParams.delete(param)
      hasNoise = true
    }
  }
  
  if (hasNoise) {
    const url = request.nextUrl.clone()
    url.search = searchParams.toString()
    return NextResponse.redirect(url, { status: 301 })
  }
  
  // 3. Упрощаем /use/use-cases → /use/cases (мягкий редирект)
  if (pathname.startsWith('/use/use-cases')) {
    const newPath = pathname.replace('/use/use-cases', '/use/cases')
    const url = request.nextUrl.clone()
    url.pathname = newPath
    // Используем 302 для тестирования, потом можно изменить на 301
    return NextResponse.redirect(url, { status: 302 })
  }
  
  // 4. Убираем trailing slash (кроме корня)
  if (pathname !== '/' && pathname.endsWith('/')) {
    const url = request.nextUrl.clone()
    url.pathname = pathname.slice(0, -1)
    return NextResponse.redirect(url, { status: 301 })
  }
  
  // Продолжаем с обычной обработкой
  return NextResponse.next()
}

/**
 * Проверка, нужно ли блокировать индексацию
 */
export function shouldNoIndex(pathname: string): boolean {
  const noIndexPatterns = [
    /^\/api\//,
    /^\/admin\//,
    /^\/_next\//,
    /^\/static\//,
    /\.json$/,
    /\/print$/,
    /\/preview$/,
    /\/draft$/,
  ]
  
  return noIndexPatterns.some(pattern => pattern.test(pathname))
}

/**
 * Добавление canonical URL
 */
export function getCanonicalUrl(pathname: string, search: string): string {
  const baseUrl = process.env['NEXT_PUBLIC_SITE_URL'] || 'https://ergoblockchain.org'
  
  // Очищаем параметры для canonical
  const searchParams = new URLSearchParams(search)
  const allowedParams = ['page', 'filter', 'sort']
  
  const cleanParams = new URLSearchParams()
  for (const [key, value] of searchParams.entries()) {
    if (allowedParams.includes(key) && key !== 'page' || value !== '1') {
      cleanParams.append(key, value)
    }
  }
  
  const cleanSearch = cleanParams.toString()
  const canonical = `${baseUrl}${pathname}${cleanSearch ? `?${cleanSearch}` : ''}`
  
  return canonical
} 