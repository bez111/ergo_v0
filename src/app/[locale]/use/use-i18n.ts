import { UseCase,useCases } from './_data';

export interface UseCaseTranslation {
  title?: string;
  subtitle?: string;
  description?: string;
  tags?: string[];
}

export interface UseFaqTranslation {
  question?: string;
  answer?: string;
}

export interface UseTranslations {
  useCases?: Record<string, UseCaseTranslation>;
  faq?: Record<string, UseFaqTranslation>;
  tagLabels?: Record<string, string>;
}

export function getLocalizedUseCases(
  translations?: UseTranslations
): UseCase[] {
  // Support both shapes:
  // - translations.useCases.{id}
  // - translations.{id} (legacy / current messages.useCasesData shape)
  const useCaseMap: Record<string, UseCaseTranslation> | undefined = 
    translations?.useCases ?? (translations as unknown as Record<string, UseCaseTranslation> | undefined)
  if (!useCaseMap) return useCases;

  return useCases.map((uc) => {
    const tr = useCaseMap[uc.id]
    if (!tr) return uc;

    return {
      ...uc,
      title: tr.title ?? uc.title,
      subtitle: tr.subtitle ?? uc.subtitle,
      description: tr.description ?? uc.description,
      tags: tr.tags ?? uc.tags,
    };
  });
}

// Base FAQ data structure
export interface UseFaqItem {
  id: string;
  question: string;
  answer: string;
}

export const baseFaqs: Array<Pick<UseFaqItem, "id">> = [
  { id: "defi-on-ergo" },
  { id: "start-using-ergo" },
  { id: "ergo-vs-ethereum" },
  { id: "privacy-features" },
  { id: "mining-profitable" },
  { id: "developer-resources" },
];

export function getLocalizedFaqs(
  translations?: UseTranslations
): UseFaqItem[] {
  if (!translations?.faq) return [];

  return baseFaqs
    .map((faq) => {
      const tr = translations.faq?.[faq.id];
      if (!tr?.question || !tr?.answer) return null;

      return {
        id: faq.id,
        question: tr.question,
        answer: tr.answer,
      };
    })
    .filter((x): x is UseFaqItem => x !== null);
}

