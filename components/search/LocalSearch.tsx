"use client";

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Search, X, Tag, FileText, ArrowUp, ArrowDown, Command } from 'lucide-react';
import { menuData } from '@/app/Docs/menuData';

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

// Build search index from menu data
function buildSearchIndex() {
  const index: SearchHit[] = [];
  
  // Additional content descriptions for better search
  const contentDescriptions: Record<string, string> = {
    '/Docs/why-ergo': 'Learn why Ergo is a unique blockchain platform with advanced features like eUTXO, ErgoScript, and privacy.',
    '/Docs/introduction/key-features': 'Explore Ergo\'s key features including eUTXO model, ErgoScript, NIPoPoWs, and privacy features.',
    '/Docs/introduction/roadmap': 'Ergo development roadmap and future plans for scaling, privacy, and ecosystem growth.',
    '/Docs/introduction/research-whitepapers': 'Research papers and whitepapers about Ergo blockchain technology and protocols.',
    '/Docs/introduction/entities': 'Organizations and entities in the Ergo ecosystem including Ergo Foundation and community groups.',
    '/Docs/introduction/wallets': 'Wallets for storing and managing ERG tokens and interacting with Ergo blockchain.',
    '/Docs/introduction/resources': 'Resources for learning about Ergo including documentation, tools, and community links.',
    '/Docs/contribute': 'How to contribute to Ergo development, documentation, and community.',
    '/Docs/introduction/events': 'Ergo community events, meetups, and conferences.',
    '/Docs/introduction/glossary': 'Glossary of Ergo blockchain terms and technical concepts.',
    '/Docs/introduction/faq': 'Frequently asked questions about Ergo blockchain and ecosystem.',
    '/Docs/ecosystem/infrastructure': 'Infrastructure projects and tools in the Ergo ecosystem.',
    '/Docs/ecosystem/financial': 'Financial applications and DeFi protocols built on Ergo.',
    '/Docs/ecosystem/privacy': 'Privacy features and applications on Ergo blockchain.',
    '/Docs/ecosystem/nfts': 'NFT projects and gaming applications on Ergo.',
    '/Docs/ecosystem/ai': 'Artificial Intelligence applications and integrations with Ergo.',
    '/Docs/ecosystem/daos': 'Decentralized Autonomous Organizations on Ergo.',
    '/Docs/ecosystem/applications': 'Applications and dApps built on Ergo blockchain.',
    '/Docs/ecosystem/tooling': 'Developer tools and utilities for Ergo development.',
    '/Docs/ecosystem/Standards': 'Standards and protocols in the Ergo ecosystem.',
    '/Docs/introduction/autolykos': 'Autolykos v2 proof-of-work algorithm used by Ergo for mining.',
    '/Docs/miners/resources': 'Resources for Ergo miners including guides and tools.',
  };
  
  function processMenuSection(section: any, parentSection: string = '') {
    const sectionPath = parentSection ? `${parentSection} > ${section.title}` : section.title;
    
    // Check for href (direct link) or items (subsections)
    if (section.href) {
      const description = contentDescriptions[section.href] || section.description || section.title;
      index.push({
        objectID: section.href,
        title: section.title,
        content: description,
        url: section.href,
        section: sectionPath,
        tags: extractTags(section.title + ' ' + description, sectionPath),
        type: getContentType(section.href, section.title),
      });
    }
    
    // Process sub-items
    if (section.items) {
      section.items.forEach((item: any) => processMenuSection(item, sectionPath));
    }
  }
  
  menuData.forEach(section => processMenuSection(section));
  
  return index;
}

// Extract tags from content
function extractTags(content: string, section: string): string[] {
  const tags: string[] = [];
  
  // Extract tags from section path
  const sectionParts = section.toLowerCase().split(' > ');
  tags.push(...sectionParts);
  
  // Extract common technical terms
  const technicalTerms = [
    'ergo', 'ergoscript', 'utxo', 'eutxo', 'defi', 'smart-contracts',
    'mining', 'consensus', 'privacy', 'oracles', 'sidechains',
    'lending', 'derivatives', 'crowdfunding', 'tokens', 'wallets',
    'financial', 'ecosystem', 'introduction', 'developers', 'miners'
  ];
  
  const contentLower = content.toLowerCase();
  technicalTerms.forEach(term => {
    if (contentLower.includes(term)) {
      tags.push(term);
    }
  });
  
  return [...new Set(tags)]; // Remove duplicates
}

// Determine content type
function getContentType(url: string, title: string): 'title' | 'content' | 'code' | 'anchor' {
  if (url.includes('#') || title.startsWith('#')) return 'anchor';
  if (title.toLowerCase().includes('code') || title.toLowerCase().includes('script')) return 'code';
  if (url.split('/').length <= 3) return 'title';
  return 'content';
}

// Simple search function with improved relevance
function searchInIndex(query: string, index: SearchHit[]): SearchHit[] {
  if (!query.trim()) return [];
  
  const queryLower = query.toLowerCase();
  const queryWords = queryLower.split(' ').filter(word => word.length > 0);
  const results: Array<SearchHit & { score: number }> = [];
  
  index.forEach(hit => {
    let score = 0;
    let titleMatch = false;
    let contentMatch = false;
    let tagsMatch = false;
    let sectionMatch = false;
    
    // Check each query word
    queryWords.forEach(word => {
      // Title matches (highest weight)
      if (hit.title.toLowerCase().includes(word)) {
        score += 10;
        titleMatch = true;
      }
      
      // Content matches (medium weight)
      if (hit.content.toLowerCase().includes(word)) {
        score += 5;
        contentMatch = true;
      }
      
      // Tags matches (high weight)
      if (hit.tags.some(tag => tag.toLowerCase().includes(word))) {
        score += 8;
        tagsMatch = true;
      }
      
      // Section matches (low weight)
      if (hit.section.toLowerCase().includes(word)) {
        score += 3;
        sectionMatch = true;
      }
    });
    
    // Bonus for exact matches
    if (hit.title.toLowerCase() === queryLower) score += 20;
    if (hit.content.toLowerCase().includes(queryLower)) score += 15;
    
    // Bonus for type relevance
    if (hit.type === 'title') score += 2;
    
    if (score > 0) {
      // Create snippet with highlighting
      let snippet = hit.content;
      if (contentMatch) {
        // Find the best matching word for highlighting
        let bestMatch = '';
        let bestIndex = -1;
        
        queryWords.forEach(word => {
          const index = snippet.toLowerCase().indexOf(word);
          if (index !== -1 && (bestIndex === -1 || index < bestIndex)) {
            bestIndex = index;
            bestMatch = word;
          }
        });
        
        if (bestIndex !== -1) {
          const before = snippet.substring(0, bestIndex);
          const match = snippet.substring(bestIndex, bestIndex + bestMatch.length);
          const after = snippet.substring(bestIndex + bestMatch.length);
          snippet = `${before}<em>${match}</em>${after}`;
        }
      }
      
      results.push({
        ...hit,
        score,
        _snippetResult: {
          content: {
            value: snippet,
            matchLevel: contentMatch ? 'full' : 'none'
          }
        }
      });
    }
  });
  
  // Sort by relevance score
  return results
    .sort((a, b) => b.score - a.score)
    .map(({ score, ...hit }) => hit);
}

export function LocalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchIndex, setSearchIndex] = useState<SearchHit[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Popular search terms
  const popularSearches = [
    'DeFi', 'mining', 'ErgoScript', 'UTXO', 'privacy', 
    'wallets', 'smart contracts', 'oracles', 'sidechains'
  ];

  // Initialize search index
  useEffect(() => {
    const index = buildSearchIndex();
    setSearchIndex(index);
    
    // Generate suggestions from index
    const allTerms = new Set<string>();
    index.forEach(hit => {
      // Extract words from titles and content
      const words = [...hit.title.split(' '), ...hit.content.split(' ')]
        .map(word => word.toLowerCase().replace(/[^a-z]/g, ''))
        .filter(word => word.length > 2);
      
      words.forEach(word => allTerms.add(word));
    });
    
    setSuggestions(Array.from(allTerms).slice(0, 20));
  }, []);

  // Perform search
  const performSearch = useCallback(async (searchQuery: string, tag?: string) => {
    if (!searchQuery.trim()) {
      setResults(null);
      return;
    }

    setIsLoading(true);
    const startTime = Date.now();
    
    // Search in index
    let searchResults = searchInIndex(searchQuery, searchIndex);
    
    // Filter by tag if selected
    if (tag) {
      searchResults = searchResults.filter(hit => hit.tags.includes(tag));
    }
    
    const processingTime = Date.now() - startTime;
    
    setResults({
      hits: searchResults,
      nbHits: searchResults.length,
      page: 0,
      nbPages: 1,
      hitsPerPage: 20,
      processingTimeMS: processingTime,
      query: searchQuery,
    });
    setIsLoading(false);
  }, [searchIndex]); // Added searchIndex to dependency array

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
  }, [query, selectedTag, searchIndex, performSearch]);

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
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20 animate-in fade-in duration-200">
          <div 
            ref={searchRef}
            className="w-full max-w-4xl mx-4 bg-neutral-900 border border-neutral-700 rounded-xl shadow-2xl animate-in slide-in-from-top-4 duration-200"
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
                className="p-1 hover:bg-neutral-800 rounded transition-colors"
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
                        {results && results.nbHits > 0 && (
                          <span className="text-xs text-gray-500 ml-2">
                            (showing best matches)
                          </span>
                        )}
                      </span>
                    </div>
                    {results.processingTimeMS > 0 && (
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>{results.processingTimeMS}ms</span>
                        {results.processingTimeMS < 50 && (
                          <span className="text-green-400">⚡ Fast</span>
                        )}
                      </div>
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
                            {hit.title}
                            <span className={`text-xs px-2 py-0.5 rounded ${
                              hit.type === 'title' ? 'bg-green-600/80 text-green-200' :
                              hit.type === 'content' ? 'bg-blue-600/80 text-blue-200' :
                              hit.type === 'code' ? 'bg-purple-600/80 text-purple-200' :
                              'bg-gray-600/80 text-gray-200'
                            }`}>
                              {hit.type}
                            </span>
                            {/* Relevance indicator */}
                            {results && results.hits.indexOf(hit) < 3 && (
                              <span className="text-xs px-2 py-0.5 rounded bg-yellow-600/80 text-yellow-200">
                                Top result
                              </span>
                            )}
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
                      <p className="mb-2">No results found for "{query}"</p>
                      <div className="text-sm text-gray-500 space-y-1">
                        {selectedTag && <p>Try removing the "{selectedTag}" filter</p>}
                        <p>Suggestions:</p>
                        <ul className="list-disc list-inside text-xs space-y-1">
                          <li>Check your spelling</li>
                          <li>Try different keywords</li>
                          <li>Use broader terms</li>
                          <li>Remove filters to see more results</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {!query && (
                <div className="p-8 text-center text-gray-400">
                  <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p className="text-lg mb-2">Search Ergo Documentation</p>
                  <p className="text-sm mb-6">Start typing to search across all documentation pages</p>
                  
                  {/* Popular Searches */}
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-3">Popular searches:</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {popularSearches.map(term => (
                        <button
                          key={term}
                          onClick={() => setQuery(term)}
                          className="px-3 py-1 text-xs bg-neutral-800 text-gray-300 rounded-full hover:bg-neutral-700 transition-colors"
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Quick Suggestions */}
                  {suggestions.length > 0 && (
                    <div className="mb-6">
                      <p className="text-sm text-gray-500 mb-3">Try searching for:</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {suggestions.slice(0, 8).map(term => (
                          <button
                            key={term}
                            onClick={() => setQuery(term)}
                            className="px-3 py-1 text-xs bg-neutral-800 text-gray-300 rounded-full hover:bg-neutral-700 transition-colors"
                          >
                            {term}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
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