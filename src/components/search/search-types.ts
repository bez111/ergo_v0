export interface SearchHit {
  objectID: string;
  title: string;
  content: string;
  url: string;
  section: string;
  tags: string[];
  type: 'title' | 'content' | 'code' | 'anchor';
  _snippetResult?: {
    content?: {
      value: string;
      matchLevel: string;
    };
    title?: {
      value: string;
      matchLevel: string;
    };
  };
}

export interface GroupedSearchResult {
  pageUrl: string;
  pageTitle: string;
  pageSection: string;
  hits: SearchHit[];
  totalHits: number;
  visibleHits: number;
  expanded: boolean;
  relevanceScore: number;
}

export interface SearchResult {
  hits: SearchHit[];
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  processingTimeMS: number;
  query: string;
}
