/**
 * i18n Utilities for Localized Data
 * 
 * This module provides utilities for handling localized content
 * that comes from data files (blog posts, glossary, infographics, etc.)
 * rather than the messages/*.json translation files.
 */

import { type Locale } from '@/i18n/request';

/**
 * Get localized content with fallback to English
 * 
 * @param content - Object with locale keys containing translated content
 * @param locale - Current locale
 * @param fallback - Fallback value if no translation exists
 */
export function getLocalizedContent<T>(
  content: Partial<Record<Locale, T>> | undefined,
  locale: Locale,
  fallback: T
): T {
  if (!content) return fallback;
  return content[locale] ?? content['en'] ?? fallback;
}

/**
 * Check if content has translation for given locale
 */
export function hasTranslation<T>(
  content: Partial<Record<Locale, T>> | undefined,
  locale: Locale
): boolean {
  if (!content) return false;
  return locale in content;
}

/**
 * Interface for localizable text fields
 * Use this for any text that should be translatable
 */
export interface LocalizedString {
  en: string;
  ru?: string;
  de?: string;
  es?: string;
  fr?: string;
  it?: string;
  ja?: string;
  'ko-kr'?: string;
  'pt-br'?: string;
  tr?: string;
  'zh-cn'?: string;
  'zh-tw'?: string;
  ar?: string;
}

/**
 * Get string from LocalizedString object
 */
export function t(
  localizedString: LocalizedString | string,
  locale: Locale
): string {
  if (typeof localizedString === 'string') {
    return localizedString;
  }
  return localizedString[locale] ?? localizedString.en;
}

/**
 * Create a localized string object from English text
 * Useful for creating new translatable content
 */
export function createLocalizedString(englishText: string): LocalizedString {
  return { en: englishText };
}

/**
 * Helper to build translation keys for messages files
 * Example: buildKey('technology', 'eutxo', 'title') => 'technology.eutxo.title'
 */
export function buildKey(...parts: string[]): string {
  return parts.filter(Boolean).join('.');
}

