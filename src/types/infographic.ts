export type InfographicCategory =
  | "consensus-mining"
  | "eutxo-smart-contracts"
  | "storage-rent-economics"
  | "privacy-sigma"
  | "nipopows-light-clients"
  | "dev-tooling"
  | "vc-chains-narratives"
  | "ergo-overview"
  | "scalability-performance"
  | "comparisons-matrices"
  | "scalability-settlement";

export type InfographicLevel = "beginner" | "intermediate" | "advanced";

export interface InfographicMeta {
  slug: string;                   // "ergo-storage-rent"
  title: string;                  // "How Ergo Storage Rent Keeps the Blockchain Lean"
  shortDescription: string;       // 1–2 строки, 140 символов
  category: InfographicCategory;
  level: InfographicLevel;
  tags: string[];                 // ["storage rent", "state size", "fees"]
  previewImageUrl: string;        // /assets/infographics/storage-rent-preview.webp
  fullImageUrl: string;           // /assets/infographics/storage-rent-full.webp
  imageAlt: string;               // alt-текст
  ogImageUrl?: string;            // OG/Twitter (можно = fullImageUrl)
  publishDate: string;            // ISO "2025-11-23"
  updatedDate?: string;
  readingTimeMinutes?: number;    // для будущей детальной страницы
  seoTitle?: string;              // кастомный <title> для детальной
  seoDescription?: string;        // кастомный meta description
}

export interface InfographicFilters {
  category: InfographicCategory | 'all';
  level: InfographicLevel | 'all';
  search: string;
  sort: 'newest' | 'popular' | 'alphabetical';
}

export const CATEGORY_LABELS: Record<InfographicCategory | 'all', string> = {
  'all': 'All topics',
  'consensus-mining': 'Consensus & Mining',
  'eutxo-smart-contracts': 'eUTXO & Smart Contracts',
  'storage-rent-economics': 'Storage Rent & Economics',
  'privacy-sigma': 'Privacy & Sigma',
  'nipopows-light-clients': 'NiPoPoWs & Light Clients',
  'dev-tooling': 'Dev & Tooling',
  'vc-chains-narratives': 'VC-Chains & Narratives',
  'ergo-overview': 'Ergo Overview & Fundamentals',
  'scalability-performance': 'Scalability & Performance',
  'comparisons-matrices': 'Comparisons & Matrices',
  'scalability-settlement': 'Scalability & Settlement',
};

export const LEVEL_LABELS: Record<InfographicLevel | 'all', string> = {
  'all': 'All levels',
  'beginner': 'Beginner',
  'intermediate': 'Intermediate',
  'advanced': 'Advanced'
};
