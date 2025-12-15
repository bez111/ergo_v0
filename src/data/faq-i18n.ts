import { type FAQItem } from "./faq"

export interface FAQTranslation {
  question?: string
  answer?: string
}

export type FAQTranslations = Record<string, FAQTranslation>

export function getLocalizedFAQ(
  items: FAQItem[],
  translations?: FAQTranslations
): FAQItem[] {
  if (!translations) return items

  return items.map((item) => {
    const tr = translations[item.id]
    if (!tr) return item

    return {
      ...item,
      question: tr.question ?? item.question,
      answer: tr.answer ?? item.answer,
      category: item.category,
    }
  })
}


