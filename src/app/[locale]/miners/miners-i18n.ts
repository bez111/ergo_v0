/**
 * Miners page i18n adapter
 * Merges translations from messages/*.json with base data from _data.ts
 */

import {
ComparisonRow,
CoreValue,
MinerFAQ,
MiningPool,
MiningSoftware,
MiningStep,
MiningTool,
comparisonRows as baseComparisonRows,
coreValues as baseCoreValues,
minerFaqs as baseMinerFaqs,
miningPools as baseMiningPools,
miningSoftware as baseMiningSoftware,
miningSteps as baseMiningSteps,
miningTools as baseMiningTools,
} from './_data';

// Translation types
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

export interface MiningPoolTranslation {
  features?: string[];
}

export interface MiningSoftwareTranslation {
  recommended?: string;
}

export interface MiningStepTranslation {
  title?: string;
  description?: string;
  details?: string[];
}

export interface MiningToolTranslation {
  name?: string;
  description?: string;
}

export interface MinerFAQTranslation {
  question?: string;
  answer?: string;
}

export interface MinersTranslations {
  coreValues?: Record<string, CoreValueTranslation>;
  comparison?: { rows?: ComparisonRowTranslation[] };
  miningPools?: Record<string, MiningPoolTranslation>;
  software?: { items?: MiningSoftwareTranslation[] };
  miningSteps?: { items?: MiningStepTranslation[] };
  tools?: { items?: MiningToolTranslation[] };
  faq?: { questions?: Record<string, MinerFAQTranslation> };
}

// Localization functions
export function getLocalizedCoreValues(translations?: MinersTranslations): CoreValue[] {
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

export function getLocalizedComparisonRows(translations?: MinersTranslations): ComparisonRow[] {
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

export function getLocalizedMiningPools(translations?: MinersTranslations): MiningPool[] {
  if (!translations?.miningPools) return baseMiningPools;
  
  return baseMiningPools.map(pool => {
    const tr = translations.miningPools?.[pool.id];
    if (!tr) return pool;
    
    return {
      ...pool,
      features: tr.features ?? pool.features,
    };
  });
}

export function getLocalizedMiningSoftware(translations?: MinersTranslations): MiningSoftware[] {
  if (!translations?.software?.items) return baseMiningSoftware;
  
  return baseMiningSoftware.map((software, index) => {
    const tr = translations.software?.items?.[index];
    if (!tr) return software;
    
    return {
      ...software,
      recommended: tr.recommended ?? software.recommended,
    };
  });
}

export function getLocalizedMiningSteps(translations?: MinersTranslations): MiningStep[] {
  if (!translations?.miningSteps?.items) return baseMiningSteps;
  
  return baseMiningSteps.map((step, index) => {
    const tr = translations.miningSteps?.items?.[index];
    if (!tr) return step;
    
    return {
      ...step,
      title: tr.title ?? step.title,
      description: tr.description ?? step.description,
      details: tr.details ?? step.details,
    };
  });
}

export function getLocalizedMiningTools(translations?: MinersTranslations): MiningTool[] {
  if (!translations?.tools?.items) return baseMiningTools;
  
  return baseMiningTools.map((tool, index) => {
    const tr = translations.tools?.items?.[index];
    if (!tr) return tool;
    
    return {
      ...tool,
      name: tr.name ?? tool.name,
      description: tr.description ?? tool.description,
    };
  });
}

export function getLocalizedMinerFaqs(translations?: MinersTranslations): MinerFAQ[] {
  if (!translations?.faq?.questions) return baseMinerFaqs;
  
  return baseMinerFaqs.map(faq => {
    const tr = translations.faq?.questions?.[faq.id];
    if (!tr) return faq;
    
    return {
      ...faq,
      question: tr.question ?? faq.question,
      answer: tr.answer ?? faq.answer,
    };
  });
}

