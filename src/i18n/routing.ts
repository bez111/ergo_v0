import {defineRouting} from 'next-intl/routing';
import { locales } from './request';
 
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


