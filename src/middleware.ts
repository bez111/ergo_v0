import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

// NOTE: UTM-stripping is handled by next.config.ts redirects() with `has: [{ type: 'query' }]`.
// Middleware can't strip UTM here because Vercel serves prerendered static pages
// (x-vercel-cache: PRERENDER) directly from CDN, bypassing middleware on cache hits.

// Locales we accept as a URL prefix. Mirrors src/i18n/request.ts.
const LOCALES = new Set([
  'en', 'ru', 'zh-cn', 'zh-tw',
  'tr', 'ko-kr', 'es', 'pt-br',
  'ja', 'de', 'fr', 'it',
]);

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request);
  // Expose the active locale + pathname to server components so the root
  // layout can render <html lang="..."> correctly. Vercel doesn't surface
  // the request URL in headers we can read from the layout otherwise.
  const seg = (request.nextUrl.pathname.split('/')[1] || '').toLowerCase();
  const locale = LOCALES.has(seg) ? seg : 'en';
  response.headers.set('x-locale', locale);
  response.headers.set('x-pathname', request.nextUrl.pathname);
  return response;
}

export const config = {
  matcher: [
    '/',
    '/(de|fr|es|ar|zh-cn|zh-tw|tr|ru|pt-br|it|ja|ko-kr)/:path*',
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};
