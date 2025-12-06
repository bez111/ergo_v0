
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * ICU MessageFormat Helpers
 * Principal Localization Architect Implementation
 */

import { useTranslations } from 'next-intl'

// ICU Plural Rules for different languages
export const PLURAL_RULES = {
  en: ['zero', 'one', 'two', 'few', 'many', 'other'],
  ru: ['zero', 'one', 'few', 'many', 'other'],
  de: ['zero', 'one', 'other'],
  fr: ['zero', 'one', 'other'],
  es: ['zero', 'one', 'other'],
  it: ['zero', 'one', 'other'],
  pt: ['zero', 'one', 'other'],
  ja: ['other'],
  ko: ['other'],
  zh: ['other'],
  ar: ['zero', 'one', 'two', 'few', 'many', 'other'],
  tr: ['zero', 'one', 'other'],
} as const

// Common ICU message patterns
export interface ICUMessageParams extends Record<string, string | number | Date> {
  count?: number
  name?: string
  value?: string | number
  min?: number
  max?: number
  current?: number
  field?: string
}

// Helper for creating ICU plural messages
export function createPluralMessage(
  locale: string,
  messages: Record<string, string>,
  count: number
): string {
  const rules = PLURAL_RULES[locale as keyof typeof PLURAL_RULES] || ['other']
  
  // Determine plural rule based on count and locale
  let rule = 'other'
  
  if (locale === 'ru') {
    if (count === 0) rule = 'zero'
    else if (count === 1) rule = 'one'
    else if (count >= 2 && count <= 4) rule = 'few'
    else if (count >= 5) rule = 'many'
  } else if (locale === 'en') {
    if (count === 0) rule = 'zero'
    else if (count === 1) rule = 'one'
    else rule = 'other'
  } else if (['de', 'fr', 'es', 'it', 'pt', 'tr'].includes(locale)) {
    if (count === 0) rule = 'zero'
    else if (count === 1) rule = 'one'
    else rule = 'other'
  } else if (locale === 'ar') {
    if (count === 0) rule = 'zero'
    else if (count === 1) rule = 'one'
    else if (count === 2) rule = 'two'
    else if (count >= 3 && count <= 10) rule = 'few'
    else if (count >= 11 && count <= 99) rule = 'many'
    else rule = 'other'
  }
  
  return messages[rule] || messages['other'] || ''
}

// Hook for ICU messages with parameters
export function useICUMessage() {
  const t = useTranslations()
  
  return {
    // Format message with parameters
    format: (key: string, params: ICUMessageParams = {}) => {
      try {
        const message = t(key, params)
        return message
      } catch (error) {
        console.warn(`ICU message formatting failed for key: ${key}`, error)
        return t(key) // Fallback to simple translation
      }
    },
    
    // Format plural message
    plural: (key: string, count: number, params: ICUMessageParams = {}) => {
      try {
        return t(key, { count, ...params })
      } catch (error) {
        console.warn(`ICU plural formatting failed for key: ${key}`, error)
        return t(key, { count, ...params })
      }
    },
    
    // Format select message
    select: (key: string, value: string, params: ICUMessageParams = {}) => {
      try {
        return t(key, { value, ...params })
      } catch (error) {
        console.warn(`ICU select formatting failed for key: ${key}`, error)
        return t(key, { value, ...params })
      }
    }
  }
}

// Common ICU message templates
export const ICU_TEMPLATES = {
  // Plural forms
  items: {
    en: '{count, plural, =0 {no items} one {# item} other {# items}}',
    ru: '{count, plural, =0 {нет элементов} one {# элемент} few {# элемента} many {# элементов} other {# элементов}}',
    de: '{count, plural, =0 {keine Elemente} one {# Element} other {# Elemente}}',
    fr: '{count, plural, =0 {aucun élément} one {# élément} other {# éléments}}',
  },
  
  // Time-based plurals
  minutes: {
    en: '{count, plural, =0 {no minutes} one {# minute} other {# minutes}}',
    ru: '{count, plural, =0 {нет минут} one {# минута} few {# минуты} many {# минут} other {# минут}}',
    de: '{count, plural, =0 {keine Minuten} one {# Minute} other {# Minuten}}',
    fr: '{count, plural, =0 {aucune minute} one {# minute} other {# minutes}}',
  },
  
  // File size plurals
  bytes: {
    en: '{count, plural, =0 {no bytes} one {# byte} other {# bytes}}',
    ru: '{count, plural, =0 {нет байт} one {# байт} few {# байта} many {# байт} other {# байт}}',
    de: '{count, plural, =0 {keine Bytes} one {# Byte} other {# Bytes}}',
    fr: '{count, plural, =0 {aucun octet} one {# octet} other {# octets}}',
  },
  
  // Select forms
  gender: {
    en: '{gender, select, male {he} female {she} other {they}}',
    ru: '{gender, select, male {он} female {она} other {они}}',
    de: '{gender, select, male {er} female {sie} other {sie}}',
    fr: '{gender, select, male {il} female {elle} other {ils}}',
  }
} as const

// Validation for ICU message syntax
export function validateICUMessage(message: string): boolean {
  try {
    // Basic validation for ICU syntax
    const hasValidBraces = message.split('{').length === message.split('}').length
    const hasValidPlural = !message.includes('plural') || /\{[^}]+,\s*plural,/.test(message)
    const hasValidSelect = !message.includes('select') || /\{[^}]+,\s*select,/.test(message)
    
    return hasValidBraces && hasValidPlural && hasValidSelect
  } catch {
    return false
  }
}

// Extract parameters from ICU message
export function extractICUParams(message: string): string[] {
  const paramRegex = /\{([^,}]+)(?:,\s*(?:plural|select|number|date|time))?/g
  const params: string[] = []
  let match
  
  while ((match = paramRegex.exec(message)) !== null) {
    if (match[1] && !params.includes(match[1])) {
      params.push(match[1])
    }
  }
  
  return params
} 