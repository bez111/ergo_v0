import { playbooks,type Playbook } from "./playbooks"

export interface PlaybookStepTranslation {
  title?: string
  description?: string
  duration?: string
}

export interface PlaybookTranslation {
  title?: string
  subtitle?: string
  heroDescription?: string
  problemStatement?: string
  solution?: string
  seoTitle?: string
  seoDescription?: string
  timeToComplete?: string
  keywords?: string[]
  steps?: PlaybookStepTranslation[]
  primaryCTA?: { label?: string }
  secondaryCTA?: { label?: string }
}

export type PlaybooksTranslations = Record<string, PlaybookTranslation>

function applyPlaybookTranslation(base: Playbook, tr?: PlaybookTranslation): Playbook {
  if (!tr) return base

  const translatedSteps =
    Array.isArray(tr.steps) && tr.steps.length
      ? base.steps.map((s, i) => {
          const stepTr = tr.steps?.[i]
          if (!stepTr) return s
          const nextDuration = stepTr.duration ?? s.duration
          return {
            ...s,
            title: stepTr.title ?? s.title,
            description: stepTr.description ?? s.description,
            ...(nextDuration !== undefined ? { duration: nextDuration } : {}),
          }
        })
      : base.steps

  const timeToComplete = tr.timeToComplete ?? base.timeToComplete
  const heroDescription = tr.heroDescription ?? base.heroDescription
  
  return {
    ...base,
    title: tr.title ?? base.title,
    subtitle: tr.subtitle ?? base.subtitle,
    ...(heroDescription ? { heroDescription } : {}),
    problemStatement: tr.problemStatement ?? base.problemStatement,
    solution: tr.solution ?? base.solution,
    seoTitle: tr.seoTitle ?? base.seoTitle,
    seoDescription: tr.seoDescription ?? base.seoDescription,
    ...(timeToComplete ? { timeToComplete } : {}),
    keywords: tr.keywords ?? base.keywords,
    steps: translatedSteps,
    primaryCTA: {
      ...base.primaryCTA,
      label: tr.primaryCTA?.label ?? base.primaryCTA.label,
    },
    ...(base.secondaryCTA
      ? {
          secondaryCTA: {
            ...base.secondaryCTA,
            label: tr.secondaryCTA?.label ?? base.secondaryCTA.label,
          },
        }
      : {}),
  }
}

export function getLocalizedPlaybooks(
  translations?: PlaybooksTranslations
): Playbook[] {
  if (!translations) return playbooks

  return playbooks.map((p) => {
    return applyPlaybookTranslation(p, translations?.[p.slug])
  })
}

export function getLocalizedPlaybookBySlug(
  slug: string,
  translations?: PlaybooksTranslations
): Playbook | undefined {
  const base = playbooks.find((p) => p.slug === slug)
  if (!base) return undefined
  if (!translations) return base
  return applyPlaybookTranslation(base, translations?.[slug])
}


