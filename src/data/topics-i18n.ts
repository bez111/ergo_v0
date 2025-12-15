import { topics,type TopicHub } from "./topics"

export interface TopicTranslation {
  title?: string
  subtitle?: string
  heroStatement?: string
  introduction?: string
  whatMakesUnique?: string
  keyDifferentiators?: string[]
}

export type TopicsTranslations = Record<string, TopicTranslation>

export function getLocalizedTopics(
  translations?: TopicsTranslations
): TopicHub[] {
  if (!translations) return topics

  return topics.map((topic) => {
    const tr = translations[topic.slug]
    if (!tr) return topic

    return {
      ...topic,
      title: tr.title ?? topic.title,
      subtitle: tr.subtitle ?? topic.subtitle,
      heroStatement: tr.heroStatement ?? topic.heroStatement,
      introduction: tr.introduction ?? topic.introduction,
      whatMakesUnique: tr.whatMakesUnique ?? topic.whatMakesUnique,
      keyDifferentiators: tr.keyDifferentiators ?? topic.keyDifferentiators,
    }
  })
}


