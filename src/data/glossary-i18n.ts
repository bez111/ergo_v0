/**
 * Glossary Internationalization Utilities
 * 
 * This module provides functions for localizing glossary terms.
 * 
 * Strategy:
 * 1. Glossary terms in glossary.ts serve as the English (default) source
 * 2. Translations are stored in messages/{locale}.json under "glossaryTerms.{slug}"
 * 3. getLocalizedGlossaryTerm() merges translations with original term data
 * 
 * To add a translation for a term:
 * 1. Add to messages/ru.json (or other locale):
 *    "glossaryTerms": {
 *      "eutxo": {
 *        "term": "Модель eUTXO",
 *        "shortDefinition": "Расширенный UTXO - программируемая модель...",
 *        "definition": "Полное определение...",
 *        "keyPoints": ["Пункт 1", "Пункт 2"],
 *        "faq": [
 *          { "question": "Вопрос?", "answer": "Ответ" }
 *        ]
 *      }
 *    }
 * 
 * 2. Only include fields that should be translated
 *    Technical fields (slug, category, difficulty, etc.) remain from the original
 */

import {
type GlossaryFAQ,
type GlossaryTerm,
glossaryTerms
} from './glossary'

export interface GlossaryTermTranslation {
  term?: string
  shortDefinition?: string
  definition?: string
  keyPoints?: string[]
  technicalDetails?: string
  useCases?: string[]
  seoTitle?: string
  seoDescription?: string
  faq?: GlossaryFAQ[]
}

export type GlossaryTermsTranslations = Record<string, GlossaryTermTranslation>

/**
 * Get a localized glossary term by merging translation with original
 */
export function getLocalizedGlossaryTerm(
  term: GlossaryTerm,
  translations?: GlossaryTermsTranslations
): GlossaryTerm {
  const translation = translations?.[term.slug]
  if (!translation) return term
  
  const nextKeyPoints = translation.keyPoints ?? term.keyPoints
  const nextTechnicalDetails = translation.technicalDetails ?? term.technicalDetails
  const nextUseCases = translation.useCases ?? term.useCases
  const nextSeoTitle = translation.seoTitle ?? term.seoTitle
  const nextSeoDescription = translation.seoDescription ?? term.seoDescription

  return {
    ...term,
    term: translation.term ?? term.term,
    shortDefinition: translation.shortDefinition ?? term.shortDefinition,
    definition: translation.definition ?? term.definition,
    ...(nextKeyPoints !== undefined ? { keyPoints: nextKeyPoints } : {}),
    ...(nextTechnicalDetails !== undefined ? { technicalDetails: nextTechnicalDetails } : {}),
    ...(nextUseCases !== undefined ? { useCases: nextUseCases } : {}),
    ...(nextSeoTitle !== undefined ? { seoTitle: nextSeoTitle } : {}),
    ...(nextSeoDescription !== undefined ? { seoDescription: nextSeoDescription } : {}),
    faq: translation.faq ?? term.faq,
  }
}

/**
 * Get all glossary terms with localization applied
 */
export function getLocalizedGlossaryTerms(
  translations?: GlossaryTermsTranslations
): GlossaryTerm[] {
  return glossaryTerms.map(term => getLocalizedGlossaryTerm(term, translations))
}

/**
 * Get a single term by slug with localization
 */
export function getLocalizedGlossaryTermBySlug(
  slug: string,
  translations?: GlossaryTermsTranslations
): GlossaryTerm | undefined {
  const term = glossaryTerms.find(t => t.slug === slug)
  if (!term) return undefined
  return getLocalizedGlossaryTerm(term, translations)
}

/**
 * Get terms by category with localization
 */
export function getLocalizedGlossaryTermsByCategory(
  category: GlossaryTerm['category'],
  translations?: GlossaryTermsTranslations
): GlossaryTerm[] {
  return getLocalizedGlossaryTerms(translations).filter(
    term => term.category === category
  )
}

/**
 * Get terms by difficulty with localization
 */
export function getLocalizedGlossaryTermsByDifficulty(
  difficulty: GlossaryTerm['difficulty'],
  translations?: GlossaryTermsTranslations
): GlossaryTerm[] {
  return getLocalizedGlossaryTerms(translations).filter(
    term => term.difficulty === difficulty
  )
}

/**
 * Search glossary terms with localization
 */
export function searchLocalizedGlossaryTerms(
  query: string,
  translations?: GlossaryTermsTranslations
): GlossaryTerm[] {
  const lowerQuery = query.toLowerCase()
  return getLocalizedGlossaryTerms(translations).filter(term => 
    term.term.toLowerCase().includes(lowerQuery) ||
    term.shortDefinition.toLowerCase().includes(lowerQuery) ||
    term.keywords.some(k => k.toLowerCase().includes(lowerQuery))
  )
}

// Re-export for convenience
export { glossaryTerms,type GlossaryFAQ,type GlossaryTerm } from './glossary'

