import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

// Tracking parameters that should never appear in canonical URLs.
// Found in Search Console: /infographics/...?utm_campaign=... was indexed as a separate page.
const TRACKING_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'utm_id',
  'gclid',
  'fbclid',
  'msclkid',
  'mc_cid',
  'mc_eid',
  'yclid',
  'dclid',
  '_ga',
  'mkt_tok',
  'igshid',
];

export default function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // Strip tracking params and 308-redirect to clean URL.
  // Cookies set by client-side analytics (gtag) preserve attribution before redirect.
  let stripped = false;
  for (const param of TRACKING_PARAMS) {
    if (url.searchParams.has(param)) {
      url.searchParams.delete(param);
      stripped = true;
    }
  }
  if (stripped) {
    return NextResponse.redirect(url, 308);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    '/',
    '/(de|fr|es|ar|zh-cn|zh-tw|tr|ru|pt-br|it|ja|ko-kr)/:path*',
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};
