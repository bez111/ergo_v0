import {defineRouting} from 'next-intl/routing';

// Локали инлайнятся здесь чтобы не тянуть next-intl/server в Edge middleware
const locales = [
  'en', 'ru', 'zh-cn', 'zh-tw',
  'tr', 'ko-kr', 'es', 'pt-br',
  'ja', 'de', 'fr', 'it'
] as const;

export const routing = defineRouting({
  // A list of all locales that are supported
  locales,
  
  // Used when no locale matches
  defaultLocale: 'en',
  
  // Don't use a prefix for the default locale (en)
  localePrefix: 'as-needed',
  
  // Disable automatic locale detection to rely on our cookie
  localeDetection: false
});


