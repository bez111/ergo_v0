import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

// NOTE: UTM-stripping is handled by next.config.ts redirects() with `has: [{ type: 'query' }]`.
// Middleware can't strip UTM here because Vercel serves prerendered static pages
// (x-vercel-cache: PRERENDER) directly from CDN, bypassing middleware on cache hits.

export default function middleware(request: NextRequest) {
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    '/',
    '/(de|fr|es|ar|zh-cn|zh-tw|tr|ru|pt-br|it|ja|ko-kr)/:path*',
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};
