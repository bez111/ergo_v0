import { devPatterns,type DevPattern } from "./dev-patterns"

export interface PatternTranslation {
  title?: string
  shortDescription?: string
  problem?: string
  solution?: string
  seoTitle?: string
  seoDescription?: string
  keywords?: string[]
  timeToImplement?: string
  howItWorks?: string
  codeExamples?: Array<{
    title?: string
    explanation?: string
  }>
  useCases?: string[]
  securityNotes?: string[]
  feeConsiderations?: string
  implementations?: Array<{
    project?: string
    description?: string
  }>
  resources?: {
    title?: string
  }
}

export type PatternsTranslations = Record<string, PatternTranslation>

export function getLocalizedPatterns(
  translations?: PatternsTranslations
): DevPattern[] {
  if (!translations) return devPatterns

  return devPatterns.map((p): DevPattern => {
    const tr = translations[p.slug]
    if (!tr) return p

    // Only override DevPattern fields that have translations
    // Keep original values for fields that exist on DevPattern
    return {
      ...p,
      title: tr.title ?? p.title,
      shortDescription: tr.shortDescription ?? p.shortDescription,
      problem: tr.problem ?? p.problem,
      solution: tr.solution ?? p.solution,
    }
  })
}


