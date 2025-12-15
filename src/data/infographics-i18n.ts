/**
 * Infographics Internationalization Utilities
 * 
 * This module provides functions for localizing infographic content.
 * 
 * Strategy:
 * 1. Infographics in infographics.ts serve as the English (default) source
 * 2. Translations are stored in messages/{locale}.json under "infographicItems.{slug}"
 * 3. getLocalizedInfographic() merges translations with original data
 * 
 * To add a translation for an infographic:
 * 1. Add to messages/ru.json (or other locale):
 *    "infographicItems": {
 *      "ergo-storage-rent": {
 *        "title": "Как работает Storage Rent в Ergo",
 *        "shortDescription": "Визуальное объяснение механизма хранения...",
 *        "aboutContent": ["Параграф 1", "Параграф 2"],
 *        "keyPoints": ["Пункт 1", "Пункт 2"]
 *      }
 *    }
 * 
 * 2. Only include fields that should be translated
 *    Technical fields (slug, category, level, imageUrls) remain from the original
 */

import {
type InfographicComparisonRow,
type InfographicComparisonSystem,
type InfographicMeta,
type InfographicSection
} from '@/types/infographic'
import { infographics } from './infographics'

export interface InfographicTranslation {
  title?: string
  shortDescription?: string
  subtitle?: string
  imageAlt?: string
  seoTitle?: string
  seoDescription?: string
  aboutContent?: string[]
  keyPoints?: string[]
  howToRead?: string[]
  relatedTopics?: string[]
  customSections?: InfographicSection[]
  comparisonSystems?: InfographicComparisonSystem[]
  comparisonRows?: InfographicComparisonRow[]
}

export type InfographicTranslations = Record<string, InfographicTranslation>

/**
 * Get a localized infographic by merging translation with original
 */
export function getLocalizedInfographic(
  infographic: InfographicMeta,
  translations?: InfographicTranslations
): InfographicMeta {
  const translation = translations?.[infographic.slug]
  if (!translation) return infographic
  
  const nextSubtitle = translation.subtitle ?? infographic.subtitle
  const nextSeoTitle = translation.seoTitle ?? infographic.seoTitle
  const nextSeoDescription = translation.seoDescription ?? infographic.seoDescription
  const nextAboutContent = translation.aboutContent ?? infographic.aboutContent
  const nextKeyPoints = translation.keyPoints ?? infographic.keyPoints
  const nextHowToRead = translation.howToRead ?? infographic.howToRead
  const nextRelatedTopics = translation.relatedTopics ?? infographic.relatedTopics
  const nextCustomSections = translation.customSections ?? infographic.customSections
  const nextComparisonSystems = translation.comparisonSystems ?? infographic.comparisonSystems
  const nextComparisonRows = translation.comparisonRows ?? infographic.comparisonRows

  return {
    ...infographic,
    title: translation.title ?? infographic.title,
    shortDescription: translation.shortDescription ?? infographic.shortDescription,
    imageAlt: translation.imageAlt ?? infographic.imageAlt,
    ...(nextSubtitle !== undefined ? { subtitle: nextSubtitle } : {}),
    ...(nextSeoTitle !== undefined ? { seoTitle: nextSeoTitle } : {}),
    ...(nextSeoDescription !== undefined ? { seoDescription: nextSeoDescription } : {}),
    ...(nextAboutContent !== undefined ? { aboutContent: nextAboutContent } : {}),
    ...(nextKeyPoints !== undefined ? { keyPoints: nextKeyPoints } : {}),
    ...(nextHowToRead !== undefined ? { howToRead: nextHowToRead } : {}),
    ...(nextRelatedTopics !== undefined ? { relatedTopics: nextRelatedTopics } : {}),
    ...(nextCustomSections !== undefined ? { customSections: nextCustomSections } : {}),
    ...(nextComparisonSystems !== undefined ? { comparisonSystems: nextComparisonSystems } : {}),
    ...(nextComparisonRows !== undefined ? { comparisonRows: nextComparisonRows } : {}),
  }
}

/**
 * Get all infographics with localization applied
 */
export function getLocalizedInfographics(
  translations?: InfographicTranslations
): InfographicMeta[] {
  return infographics.map(item => getLocalizedInfographic(item, translations))
}

/**
 * Get a single infographic by slug with localization
 */
export function getLocalizedInfographicBySlug(
  slug: string,
  translations?: InfographicTranslations
): InfographicMeta | undefined {
  const item = infographics.find(i => i.slug === slug)
  if (!item) return undefined
  return getLocalizedInfographic(item, translations)
}

/**
 * Get infographics by category with localization
 */
export function getLocalizedInfographicsByCategory(
  category: InfographicMeta['category'],
  translations?: InfographicTranslations
): InfographicMeta[] {
  return getLocalizedInfographics(translations).filter(
    item => item.category === category
  )
}

/**
 * Get infographics by level with localization
 */
export function getLocalizedInfographicsByLevel(
  level: InfographicMeta['level'],
  translations?: InfographicTranslations
): InfographicMeta[] {
  return getLocalizedInfographics(translations).filter(
    item => item.level === level
  )
}

/**
 * Search infographics with localization
 */
export function searchLocalizedInfographics(
  query: string,
  translations?: InfographicTranslations
): InfographicMeta[] {
  const lowerQuery = query.toLowerCase()
  return getLocalizedInfographics(translations).filter(item => 
    item.title.toLowerCase().includes(lowerQuery) ||
    item.shortDescription.toLowerCase().includes(lowerQuery) ||
    item.tags.some(t => t.toLowerCase().includes(lowerQuery))
  )
}

// Re-export for convenience
export { infographics } from './infographics'

