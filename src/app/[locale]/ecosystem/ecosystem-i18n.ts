import { projects,type EcosystemProject } from "./_data"

export interface EcosystemProjectTranslation {
  name?: string
  description?: string
  longDescription?: string
  features?: string[]
  faq?: Array<{ question: string; answer: string }>
}

export type EcosystemTranslations = Record<string, EcosystemProjectTranslation>

export function getLocalizedProjects(
  translations?: EcosystemTranslations
): EcosystemProject[] {
  if (!translations) return projects

  return projects.map((project) => {
    const tr = translations[project.slug]
    if (!tr) return project

    const nextLongDescription = tr.longDescription ?? project.longDescription
    const nextFeatures = tr.features ?? project.features
    const nextFaq = tr.faq ?? project.faq

    return {
      ...project,
      name: tr.name ?? project.name,
      description: tr.description ?? project.description,
      ...(nextLongDescription !== undefined ? { longDescription: nextLongDescription } : {}),
      ...(nextFeatures !== undefined ? { features: nextFeatures } : {}),
      ...(nextFaq !== undefined ? { faq: nextFaq } : {}),
    }
  })
}

export function getLocalizedProjectBySlug(
  slug: string,
  translations?: EcosystemTranslations
): EcosystemProject | undefined {
  const project = projects.find((p) => p.slug === slug)
  if (!project) return undefined

  if (!translations) return project

  const tr = translations[slug]
  if (!tr) return project

  const nextLongDescription = tr.longDescription ?? project.longDescription
  const nextFeatures = tr.features ?? project.features
  const nextFaq = tr.faq ?? project.faq

  return {
    ...project,
    name: tr.name ?? project.name,
    description: tr.description ?? project.description,
    ...(nextLongDescription !== undefined ? { longDescription: nextLongDescription } : {}),
    ...(nextFeatures !== undefined ? { features: nextFeatures } : {}),
    ...(nextFaq !== undefined ? { faq: nextFaq } : {}),
  }
}

