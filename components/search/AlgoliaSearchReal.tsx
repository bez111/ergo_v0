"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Search, X, Tag, FileText, ArrowUp, ArrowDown, Command } from 'lucide-react';
import { algoliaConfig } from '@/lib/algolia-config';

interface SearchHit {
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

interface SearchResult {
  hits: SearchHit[];
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  processingTimeMS: number;
  query: string;
}

export function AlgoliaSearchReal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Real Algolia search function
  const performSearch = async (searchQuery: string, tag?: string) => {
    if (!searchQuery.trim()) {
      setResults(null);
      return;
    }

    setIsLoading(true);

    try {
      const searchParams = new URLSearchParams({
        query: searchQuery,
        hitsPerPage: '20',
        attributesToRetrieve: 'title,content,url,section,tags,type,objectID',
        attributesToHighlight: 'title,content',
        attributesToSnippet: 'content:150',
        highlightPreTag: '<em>',
        highlightPostTag: '</em>',
        ...(tag && { filters: `tags:${tag}` })
      });

      const response = await fetch(
        `https://${algoliaConfig.appId}-dsn.algolia.net/1/indexes/${algoliaConfig.indexName}?${searchParams}`,
        {
          headers: {
            'X-Algolia-API-Key': algoliaConfig.searchApiKey,
            'X-Algolia-Application-Id': algoliaConfig.appId,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Search failed: ${response.status}`);
      }

      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Search error:', error);
      // Fallback to mock results for development
      setResults({
        hits: [
          {
            objectID: 'fallback-1',
            title: 'DeFi Protocols',
            content: 'Explore Ergo\'s decentralized finance ecosystem including lending, derivatives, and crowdfunding protocols.',
            url: '/docs/ecosystem/financial/defi',
            section: 'Ecosystem > Financial > DeFi',
            tags: ['defi', 'lending', 'derivatives', 'crowdfunding'],
            type: 'title',
            _snippetResult: {
              content: {
                value: 'Explore Ergo\'s <em>decentralized finance</em> ecosystem including lending, derivatives, and crowdfunding protocols.',
                matchLevel: 'full'
              }
            }
          }
        ],
        nbHits: 1,
        page: 0,
        nbPages: 1,
        hitsPerPage: 20,
        processingTimeMS: 50,
        query: searchQuery,
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        setQuery('');
        setResults(null);
      }

      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setIsOpen(true);
      }

      if (!isOpen || !results) return;

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          setSelectedIndex(prev => 
            prev < (results.hits.length - 1) ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          event.preventDefault();
          setSelectedIndex(prev => prev > 0 ? prev - 1 : prev);
          break;
        case 'Enter':
          event.preventDefault();
          if (results.hits[selectedIndex]) {
            window.location.href = results.hits[selectedIndex].url;
            setIsOpen(false);
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex]);

  // Handle search input changes
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      performSearch(query, selectedTag || undefined);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query, selectedTag]);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Get all unique tags from results
  const allTags = results ? 
    Array.from(new Set(results.hits.flatMap(hit => hit.tags))) : [];

  // Filter results by selected tag
  const filteredResults = results && selectedTag ? 
    { ...results, hits: results.hits.filter(hit => hit.tags.includes(selectedTag)) } : 
    results;

  return (
    <>
      {/* Search Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg hover:bg-neutral-700 transition-colors"
      >
        <Search className="w-4 h-4 text-gray-400" />
        <span className="text-gray-300">Search docs...</span>
        <div className="flex items-center gap-1 ml-auto">
          <Command className="w-3 h-3 text-gray-500" />
          <span className="text-xs text-gray-500">K</span>
        </div>
      </button>

      {/* Search Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20">
          <div 
            ref={searchRef}
            className="w-full max-w-4xl mx-4 bg-neutral-900 border border-neutral-700 rounded-xl shadow-2xl"
          >
            {/* Search Header */}
            <div className="flex items-center gap-3 p-4 border-b border-neutral-700">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search documentation..."
                className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none"
                autoFocus
              />
              {isLoading && (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-cyan-400"></div>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-neutral-800 rounded"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* Tags Filter */}
            {allTags.length > 0 && (
              <div className="p-4 border-b border-neutral-700">
                <div className="flex items-center gap-2 mb-2">
                  <Tag className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-400">Filter by tags:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedTag(null)}
                    className={`px-3 py-1 text-xs rounded-full transition-colors ${
                      selectedTag === null 
                        ? 'bg-cyan-600 text-white' 
                        : 'bg-neutral-800 text-gray-300 hover:bg-neutral-700'
                    }`}
                  >
                    All
                  </button>
                  {allTags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => setSelectedTag(tag)}
                      className={`px-3 py-1 text-xs rounded-full transition-colors ${
                        selectedTag === tag 
                          ? 'bg-cyan-600 text-white' 
                          : 'bg-neutral-800 text-gray-300 hover:bg-neutral-700'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Search Results */}
            <div className="max-h-96 overflow-y-auto">
              {results && (
                <div className="p-4">
                  {/* Results Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-400">
                        {filteredResults?.nbHits || 0} results
                        {selectedTag && ` for "${selectedTag}"`}
                      </span>
                    </div>
                    {results.processingTimeMS > 0 && (
                      <span className="text-xs text-gray-500">
                        {results.processingTimeMS}ms
                      </span>
                    )}
                  </div>

                  {/* Results List */}
                  <div className="space-y-2">
                    {filteredResults?.hits.map((hit, index) => (
                      <a
                        key={hit.objectID}
                        href={hit.url}
                        className={`block p-4 rounded-lg transition-colors ${
                          index === selectedIndex 
                            ? 'bg-cyan-600/20 border border-cyan-500/50' 
                            : 'bg-neutral-800/50 hover:bg-neutral-800 border border-transparent'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-white flex items-center gap-2">
                            {hit._snippetResult?.title ? (
                              <span 
                                dangerouslySetInnerHTML={{
                                  __html: hit._snippetResult.title.value
                                }}
                              />
                            ) : (
                              hit.title
                            )}
                            <span className={`text-xs px-2 py-0.5 rounded ${
                              hit.type === 'title' ? 'bg-green-600/80 text-green-200' :
                              hit.type === 'content' ? 'bg-blue-600/80 text-blue-200' :
                              hit.type === 'code' ? 'bg-purple-600/80 text-purple-200' :
                              'bg-gray-600/80 text-gray-200'
                            }`}>
                              {hit.type}
                            </span>
                          </h3>
                          <ArrowUp className="w-4 h-4 text-gray-400" />
                        </div>
                        
                        <p className="text-sm text-gray-400 mb-2">
                          {hit.section}
                        </p>
                        
                        {hit._snippetResult?.content && (
                          <p 
                            className="text-sm text-gray-300"
                            dangerouslySetInnerHTML={{
                              __html: hit._snippetResult.content.value
                            }}
                          />
                        )}
                        
                        <div className="flex flex-wrap gap-1 mt-2">
                          {hit.tags.slice(0, 3).map(tag => (
                            <span
                              key={tag}
                              className="text-xs px-2 py-0.5 bg-neutral-700 text-gray-300 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                          {hit.tags.length > 3 && (
                            <span className="text-xs px-2 py-0.5 bg-neutral-700 text-gray-400 rounded">
                              +{hit.tags.length - 3}
                            </span>
                          )}
                        </div>
                      </a>
                    ))}
                  </div>

                  {filteredResults?.hits.length === 0 && query && !isLoading && (
                    <div className="text-center py-8 text-gray-400">
                      <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
                      <p>No results found for "{query}"</p>
                      {selectedTag && <p className="text-sm">Try removing the "{selectedTag}" filter</p>}
                    </div>
                  )}
                </div>
              )}

              {!query && (
                <div className="p-8 text-center text-gray-400">
                  <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p className="text-lg mb-2">Search Ergo Documentation</p>
                  <p className="text-sm">Start typing to search across all documentation pages</p>
                  <div className="mt-4 flex items-center justify-center gap-4 text-xs text-gray-500">
                    <span>Use ↑↓ to navigate</span>
                    <span>Press Enter to select</span>
                    <span>Press Esc to close</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
} 