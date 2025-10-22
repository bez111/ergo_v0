'use client'

import { useLocale } from 'next-intl'
import { useCallback } from 'react'

export function useLocalizedPath() {
  const locale = useLocale()
  
  const localizedPath = useCallback((path: string) => {
    // Remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path
    
    // For default locale (English), don't add prefix
    if (locale === 'en') {
      return `/${cleanPath}`
    }
    
    // For other locales, add the locale prefix
    return `/${locale}/${cleanPath}`
  }, [locale])
  
  return localizedPath
}

// Server-side utility function
export function getLocalizedPath(path: string, locale: string) {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  
  // For default locale (English), don't add prefix
  if (locale === 'en') {
    return `/${cleanPath}`
  }
  
  // For other locales, add the locale prefix
  return `/${locale}/${cleanPath}`
} 