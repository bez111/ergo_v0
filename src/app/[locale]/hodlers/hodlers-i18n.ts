/**
 * Hodlers page i18n adapter
 * Merges translations from messages/*.json with base data from _data.ts
 */

import {
ComparisonRow,
CoreValue,
HeroComparison,
HolderFAQ,
UseCase,
comparisonRows as baseComparisonRows,
coreValues as baseCoreValues,
heroComparisons as baseHeroComparisons,
holderFaqs as baseHolderFaqs,
useCases as baseUseCases,
} from './_data';

// Translation types
export interface HeroComparisonTranslation {
  title?: string;
  ergo?: string;
  others?: string;
}

export interface CoreValueTranslation {
  title?: string;
  description?: string;
  highlight?: string;
}

export interface ComparisonRowTranslation {
  criterion?: string;
  bitcoin?: { text?: string };
  ethereum?: { text?: string };
  monero?: { text?: string };
  ergo?: { text?: string };
}

export interface UseCaseTranslation {
  title?: string;
  description?: string;
  links?: Array<{ text?: string }>;
}

export interface HolderFAQTranslation {
  question?: string;
  answer?: string;
}

export interface HoldersTranslations {
  heroComparisons?: HeroComparisonTranslation[];
  coreValues?: Record<string, CoreValueTranslation>;
  comparison?: { rows?: ComparisonRowTranslation[] };
  useCasesSection?: { items?: UseCaseTranslation[] };
  faq?: { questions?: Record<string, HolderFAQTranslation> };
}

// Localization functions
export function getLocalizedHeroComparisons(translations?: HoldersTranslations): HeroComparison[] {
  if (!translations?.heroComparisons) return baseHeroComparisons;
  
  return baseHeroComparisons.map((comparison, index) => {
    const tr = translations.heroComparisons?.[index];
    if (!tr) return comparison;
    
    return {
      ...comparison,
      title: tr.title ?? comparison.title,
      ergo: tr.ergo ?? comparison.ergo,
      others: tr.others ?? comparison.others,
    };
  });
}

export function getLocalizedCoreValues(translations?: HoldersTranslations): CoreValue[] {
  if (!translations?.coreValues) return baseCoreValues;
  
  return baseCoreValues.map(value => {
    const tr = translations.coreValues?.[value.id];
    if (!tr) return value;
    
    return {
      ...value,
      title: tr.title ?? value.title,
      description: tr.description ?? value.description,
      highlight: tr.highlight ?? value.highlight,
    };
  });
}

export function getLocalizedComparisonRows(translations?: HoldersTranslations): ComparisonRow[] {
  if (!translations?.comparison?.rows) return baseComparisonRows;
  
  return baseComparisonRows.map((row, index) => {
    const tr = translations.comparison?.rows?.[index];
    if (!tr) return row;
    
    return {
      criterion: tr.criterion ?? row.criterion,
      bitcoin: { status: row.bitcoin.status, text: tr.bitcoin?.text ?? row.bitcoin.text },
      ethereum: { status: row.ethereum.status, text: tr.ethereum?.text ?? row.ethereum.text },
      monero: { status: row.monero.status, text: tr.monero?.text ?? row.monero.text },
      ergo: { status: row.ergo.status, text: tr.ergo?.text ?? row.ergo.text },
    };
  });
}

export function getLocalizedUseCases(translations?: HoldersTranslations): UseCase[] {
  if (!translations?.useCasesSection?.items) return baseUseCases;
  
  return baseUseCases.map((useCase, index) => {
    const tr = translations.useCasesSection?.items?.[index];
    if (!tr) return useCase;
    
    return {
      ...useCase,
      title: tr.title ?? useCase.title,
      description: tr.description ?? useCase.description,
      links: useCase.links.map((link, linkIndex) => ({
        ...link,
        text: tr.links?.[linkIndex]?.text ?? link.text,
      })),
    };
  });
}

export function getLocalizedHolderFaqs(translations?: HoldersTranslations): HolderFAQ[] {
  if (!translations?.faq?.questions) return baseHolderFaqs;
  
  return baseHolderFaqs.map(faq => {
    const tr = translations.faq?.questions?.[faq.id];
    if (!tr) return faq;
    
    return {
      ...faq,
      question: tr.question ?? faq.question,
      answer: tr.answer ?? faq.answer,
    };
  });
}

