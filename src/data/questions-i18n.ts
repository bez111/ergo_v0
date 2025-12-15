import { questions,type QuestionEntry } from "./questions"

export interface QuestionTranslation {
  query?: string
  shortAnswer?: string
  keyPoints?: string[]
  seoTitle?: string
  seoDescription?: string
}

export type QuestionsTranslations = Record<string, QuestionTranslation>

export function getLocalizedQuestions(
  translations?: QuestionsTranslations
): QuestionEntry[] {
  if (!translations) return questions

  return questions.map((q) => {
    const tr = translations?.[q.slug]
    if (!tr) return q

    const nextKeyPoints = tr.keyPoints ?? q.keyPoints
    const nextSeoTitle = tr.seoTitle ?? q.seoTitle
    const nextSeoDescription = tr.seoDescription ?? q.seoDescription

    return {
      ...q,
      query: tr.query ?? q.query,
      shortAnswer: tr.shortAnswer ?? q.shortAnswer,
      ...(nextKeyPoints !== undefined ? { keyPoints: nextKeyPoints } : {}),
      ...(nextSeoTitle !== undefined ? { seoTitle: nextSeoTitle } : {}),
      ...(nextSeoDescription !== undefined ? { seoDescription: nextSeoDescription } : {}),
    }
  })
}


