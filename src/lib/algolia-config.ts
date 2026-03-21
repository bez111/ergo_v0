
/* eslint-disable */
// Algolia DocSearch Configuration
export const algoliaConfig = {
  appId: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || 'your-app-id',
  searchApiKey: process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY || 'your-search-api-key',
  indexName: process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME || 'ergo-docs',
  
  // Search configuration
  searchParameters: {
    hitsPerPage: 20,
    attributesToRetrieve: [
      'title',
      'content', 
      'url',
      'section',
      'tags',
      'type',
      'objectID'
    ],
    attributesToHighlight: ['title', 'content'],
    attributesToSnippet: ['content:150'],
    highlightPreTag: '<em>',
    highlightPostTag: '</em>',
  },

  // Facets for filtering
  facets: ['tags', 'section', 'type'],
  
  // Searchable attributes (in order of importance)
  searchableAttributes: [
    'unordered(title)',
    'unordered(content)',
    'unordered(tags)',
    'unordered(section)'
  ],

  // Custom ranking
  customRanking: [
    'desc(type)',
    'desc(popularity)',
    'desc(date)'
  ],

  // Query suggestions
  querySuggestions: {
    indexName: `${process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME || 'ergo-docs'}_query_suggestions`,
    hitsPerPage: 5,
  }
};

// DocSearch crawler configuration (JSON for crawler)
export const docsearchConfig = {
  index_name: "ergo-docs",
  start_urls: [
    {
                url: "https://www.ergoblockchain.org/docs/",
      tags: ["docs"]
    }
  ],
  stop_urls: [
    "/api/",
    "/_next/",
    "/404",
    "/500"
  ],
  selectors: {
    lvl0: {
      selector: "nav .active",
      global: true,
      default_value: "Documentation"
    },
    lvl1: "article h1",
    lvl2: "article h2",
    lvl3: "article h3",
    lvl4: "article h4",
    lvl5: "article h5",
    lvl6: "article h6",
    text: "article p, article li, article td, article th"
  },
  selectors_exclude: [
    ".search",
    ".sidebar",
    ".footer",
    "nav",
    "header"
  ],
  custom_settings: {
    searchableAttributes: [
      "unordered(title)",
      "unordered(content)",
      "unordered(tags)",
      "unordered(section)"
    ],
    attributesForFaceting: [
      "tags",
      "section", 
      "type"
    ],
    attributesToHighlight: [
      "title",
      "content"
    ],
    attributesToSnippet: [
      "content:150"
    ]
  },
  strip_chars: " .,;:§¶",
  min_indexed_level: 1,
  keep_tags: true,
  only_content_level: true,
  nb_hits: 10000
};

// Helper function to extract tags from content
export function extractTags(content: string, section: string): string[] {
  const tags: string[] = [];
  
  // Extract tags from section path
  const sectionParts = section.toLowerCase().split(' > ');
  tags.push(...sectionParts);
  
  // Extract common technical terms
  const technicalTerms = [
    'ergo', 'ergoscript', 'utxo', 'eutxo', 'defi', 'smart-contracts',
    'mining', 'consensus', 'privacy', 'oracles', 'sidechains',
    'lending', 'derivatives', 'crowdfunding', 'tokens', 'wallets'
  ];
  
  const contentLower = content.toLowerCase();
  technicalTerms.forEach(term => {
    if (contentLower.includes(term)) {
      tags.push(term);
    }
  });
  
  // Extract programming languages and frameworks
  const languages = ['typescript', 'javascript', 'rust', 'scala', 'python'];
  languages.forEach(lang => {
    if (contentLower.includes(lang)) {
      tags.push(lang);
    }
  });
  
  return [...new Set(tags)]; // Remove duplicates
}

// Helper function to determine content type
export function getContentType(url: string, title: string): 'title' | 'content' | 'code' | 'anchor' {
  if (url.includes('#') || title.startsWith('#')) return 'anchor';
  if (title.toLowerCase().includes('code') || title.toLowerCase().includes('script')) return 'code';
  if (url.split('/').length <= 3) return 'title';
  return 'content';
}

// Helper function to build search index from menu data
interface MenuItem {
  title: string
  href?: string
  description?: string
  popularity?: number
  date?: string
  children?: MenuItem[]
}

interface SearchIndexEntry {
  objectID: string
  title: string
  content: string
  url: string
  section: string
  tags: string[]
  type: 'title' | 'content' | 'code' | 'anchor'
  popularity: number
  date: string
}

export function buildSearchIndex(menuData: MenuItem[]): SearchIndexEntry[] {
  const index: SearchIndexEntry[] = [];

  function processMenuItem(item: MenuItem, parentSection: string = '') {
    const section = parentSection ? `${parentSection} > ${item.title}` : item.title;
    
    if (item.href) {
      index.push({
        objectID: item.href,
        title: item.title,
        content: item.description || '',
        url: item.href,
        section: section,
        tags: extractTags(item.description || '', section),
        type: getContentType(item.href, item.title),
        popularity: item.popularity || 0,
        date: item.date || new Date().toISOString()
      });
    }
    
    if (item.children) {
      item.children.forEach((child) => processMenuItem(child, section));
    }
  }
  
  menuData.forEach(item => processMenuItem(item));
  return index;
} 