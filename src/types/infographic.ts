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

// Content section for detailed infographic pages
export interface InfographicSection {
  title: string;
  icon?: string; // lucide icon name
  content: string | string[]; // single paragraph or list of items
}

// Comparison system for "vs" style infographics
export interface InfographicComparisonSystem {
  title: string;
  subtitle: string;
  type: string;
  bullets: string[];
  isHighlighted?: boolean; // highlight Ergo
}

// Comparison row for tables
export interface InfographicComparisonRow {
  system: string;
  power: string;
  position: string;
}

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
  
  // === Extended content for detail pages ===
  
  /** Subtitle shown in hero (optional override of shortDescription) */
  subtitle?: string;
  
  /** About section content - paragraphs explaining the infographic */
  aboutContent?: string[];
  
  /** Key points / takeaways as bullet list */
  keyPoints?: string[];
  
  /** How to read this infographic - ordered steps */
  howToRead?: string[];
  
  /** Related topics for linking */
  relatedTopics?: string[];
  
  /** Optional custom sections (e.g., "The Financial Repression Stack") */
  customSections?: InfographicSection[];
  
  /** For comparison infographics - systems being compared */
  comparisonSystems?: InfographicComparisonSystem[];
  
  /** For comparison infographics - table rows */
  comparisonRows?: InfographicComparisonRow[];
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
