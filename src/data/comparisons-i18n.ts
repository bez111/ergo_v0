/**
 * Comparisons Internationalization Utilities
 * 
 * This module provides functions for localizing blockchain comparison content.
 * 
 * Strategy:
 * 1. Comparison data in comparisons.ts serves as the English (default) source
 * 2. Translations are stored in messages/{locale}.json under "comparisonItems.{slug}"
 * 3. getLocalizedComparison() merges translations with original data
 * 
 * To add a translation for a comparison:
 * 1. Add to messages/ru.json (or other locale):
 *    "comparisonItems": {
 *      "bitcoin": {
 *        "seoTitle": "Ergo vs Bitcoin 2025: Смарт-контракты...",
 *        "seoDescription": "Полное сравнение Ergo и Bitcoin...",
 *        "summary": {
 *          "headline": "Модель безопасности Bitcoin + мощь смарт-контрактов",
 *          "subheadline": "Ergo расширяет проверенную безопасность UTXO...",
 *          "points": [
 *            { "title": "Программируемый eUTXO", "description": "..." }
 *          ]
 *        },
 *        "sections": [...],
 *        "faq": [...]
 *      }
 *    }
 * 
 * 2. Only include fields that should be translated
 *    Technical fields (slug, color, matrixRows) remain from the original
 */

import {
type ComparisonData,
type ComparisonRow,
comparisons,
getComparisonBySlug as getOriginalComparisonBySlug
} from './comparisons'

export interface ComparisonTranslation {
  seoTitle?: string
  seoDescription?: string
  summary?: {
    headline?: string
    subheadline?: string
    points?: Array<{
      title?: string
      description?: string
    }>
  }
  sections?: Array<{
    title?: string
    content?: string
    ergoAdvantage?: string
  }>
  faq?: Array<{
    question: string
    answer: string
  }>
  matrixRows?: ComparisonRow[]
}

export type ComparisonTranslations = Record<string, ComparisonTranslation>

/**
 * Get a localized comparison by merging translation with original
 */
export function getLocalizedComparison(
  comparison: ComparisonData,
  translations?: ComparisonTranslations
): ComparisonData {
  const translation = translations?.[comparison.slug]
  if (!translation) return comparison
  
  // Merge summary points if provided
  const mergedPoints = translation.summary?.points 
    ? comparison.summary.points.map((point, idx) => ({
        ...point,
        title: translation.summary?.points?.[idx]?.title || point.title,
        description: translation.summary?.points?.[idx]?.description || point.description,
      }))
    : comparison.summary.points

  // Merge sections if provided  
  const mergedSections = translation.sections
    ? comparison.sections.map((section, idx) => ({
        ...section,
        title: translation.sections?.[idx]?.title || section.title,
        content: translation.sections?.[idx]?.content || section.content,
        ergoAdvantage: translation.sections?.[idx]?.ergoAdvantage || section.ergoAdvantage,
      }))
    : comparison.sections
  
  return {
    ...comparison,
    seoTitle: translation.seoTitle || comparison.seoTitle,
    seoDescription: translation.seoDescription || comparison.seoDescription,
    summary: {
      headline: translation.summary?.headline || comparison.summary.headline,
      subheadline: translation.summary?.subheadline || comparison.summary.subheadline,
      points: mergedPoints,
    },
    sections: mergedSections,
    faq: translation.faq || comparison.faq,
    matrixRows: translation.matrixRows || comparison.matrixRows,
  }
}

/**
 * Get all comparisons with localization applied
 */
export function getLocalizedComparisons(
  translations?: ComparisonTranslations
): ComparisonData[] {
  return comparisons.map(comparison => getLocalizedComparison(comparison, translations))
}

/**
 * Get a single comparison by slug with localization
 */
export function getLocalizedComparisonBySlug(
  slug: string,
  translations?: ComparisonTranslations
): ComparisonData | undefined {
  const comparison = getOriginalComparisonBySlug(slug)
  if (!comparison) return undefined
  return getLocalizedComparison(comparison, translations)
}

/**
 * Get other comparisons (for navigation) with localization
 */
export function getOtherLocalizedComparisons(
  currentSlug: string,
  translations?: ComparisonTranslations
): ComparisonData[] {
  return getLocalizedComparisons(translations).filter(c => c.slug !== currentSlug)
}

// Re-export for convenience
export { comparisons,getComparisonBySlug,type ComparisonData,type ComparisonRow } from './comparisons'

