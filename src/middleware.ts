import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales,
  
  // Used when no locale matches
  defaultLocale: 'en',
  
  // Don't use a prefix for the default locale (en)
  localePrefix: 'as-needed',
  
  // Disable automatic locale detection to rely on our cookie
  localeDetection: false
});

// Экспортируем общий обработчик
export default function middleware(request: NextRequest) {

  return intlMiddleware(request);
}

export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/',
    // Поддержка всех локалей для будущего
    '/(de|fr|es|ar|zh-cn|zh-tw|tr|ru|pt-br|it|ja|ko-kr)/:path*',
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
}; 
