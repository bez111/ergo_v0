"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars, react-hooks/exhaustive-deps */

import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { Search, X, Tag, FileText, ArrowUp, ArrowDown, Command, Eye, Pin, Trash2, ChevronDown, ChevronRight, Clock, TrendingUp, Hash, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { getLocalizedMenuData, type MenuItem } from '@/app/[locale]/docs/menuData';
import { SearchPreview } from './SearchPreview';
import { useSearchHistory } from '@/hooks/use-search-history';
import { useDebounce } from '@/hooks/use-debounce';
import { useTranslations } from 'next-intl';
import type { SearchHit, GroupedSearchResult, SearchResult } from './search-types';
import { buildSearchIndex, searchInIndex, createEnhancedSnippet } from './search-utils';



export function LocalSearch() {
  const t = useTranslations()
  const menuData = getLocalizedMenuData(t)
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<GroupedSearchResult[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set());
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const [selectedContentType, setSelectedContentType] = useState<string>('all');
  const [isSearching, setIsSearching] = useState(false);
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>([]);
  const [pinnedSearches, setPinnedSearches] = useState<string[]>([]);
  const [selectedResultIndex, setSelectedResultIndex] = useState(-1);
  const [showPreview, setShowPreview] = useState(false);
  
  const searchIndex = useRef<SearchHit[]>([]);
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  
  // Debounced search query
  const debouncedQuery = useDebounce(query, 300);

  // Content type filters - упрощенные иконки
  const contentTypes = [
    { id: 'all', label: 'All', icon: '📄', description: 'All content types' },
    { id: 'documentation', label: 'Docs', icon: '📚', description: 'Technical documentation' },
    { id: 'code', label: 'Code', icon: '💻', description: 'Code examples' },
    { id: 'guides', label: 'Guides', icon: '📖', description: 'Tutorials' },
    { id: 'api', label: 'API', icon: '🔧', description: 'API references' }
  ];

  // Code-related terms for enhanced search
  const codeTerms = [
    'ergoscript', 'sigma', 'nipopows', 'autolykos', 'eutxo', 'utxo',
    'consensus', 'proof-of-work', 'pow', 'smart contract', 'script',
    'programming', 'blockchain', 'cryptography', 'hash', 'signature',
    'transaction', 'block', 'mining', 'wallet', 'key', 'address',
    'token', 'nft', 'defi', 'oracle', 'sidechain', 'privacy',
    'confidential', 'stealth', 'mixing', 'zero-knowledge', 'zk',
    'formal verification', 'type system', 'compiler', 'interpreter'
  ];

  // Image-related terms for image search
  const imageTerms = [
    'diagram', 'chart', 'graph', 'visualization', 'illustration',
    'flowchart', 'architecture', 'structure', 'model', 'design',
    'blockchain diagram', 'consensus flow', 'utxo model', 'mining setup',
    'privacy protocol', 'defi protocols', 'smart contract', 'oracle network',
    'sidechain bridge', 'wallet security', 'governance structure',
    'distribution transaction', 'funding transaction', 'storage rent',
    'hardware', 'equipment', 'setup', 'configuration', 'network'
  ];

  // Popular queries and suggestions
  const popularQueries = [
    'mining', 'defi', 'privacy', 'wallets', 'ergoscript',
    'utxo', 'oracles', 'sidechains', 'smart contracts',
    'consensus', 'autolykos', 'sigma', 'nipopows',
    'lending', 'derivatives', 'crowdfunding', 'storage rent',
    'diagram', 'visualization', 'architecture', 'flowchart'
  ];

  // Related topics for smart suggestions
  const relatedTopics: Record<string, string[]> = {
    'mining': ['autolykos', 'consensus', 'proof-of-work', 'hardware'],
    'defi': ['lending', 'derivatives', 'crowdfunding', 'yield farming'],
    'privacy': ['sigma', 'stealth-addresses', 'confidential', 'mixing'],
    'wallets': ['yoroi', 'nautilus', 'keys', 'security'],
    'ergoscript': ['smart contracts', 'programming', 'sigma', 'scripting'],
    'utxo': ['eutxo', 'transaction model', 'state management'],
    'oracles': ['data feeds', 'external data', 'price feeds'],
    'sidechains': ['layer 2', 'scaling', 'off-chain', 'interoperability'],
    'smart contracts': ['ergoscript', 'automation', 'programming'],
    'consensus': ['autolykos', 'proof-of-work', 'mining', 'security'],
    'lending': ['borrowing', 'duckpools', 'credit', 'loans'],
    'derivatives': ['options', 'futures', 'synthetics', 'trading'],
    'crowdfunding': ['ico', 'fundraising', 'tokensale', 'grants'],
    'diagram': ['visualization', 'chart', 'graph', 'illustration'],
    'visualization': ['diagram', 'chart', 'graph', 'architecture'],
    'architecture': ['structure', 'design', 'model', 'diagram'],
    'flowchart': ['flow', 'process', 'diagram', 'visualization']
  };

  // Highlight search terms in text
  const highlightText = (text: string, query: string): string => {
    if (!query || !text) return text;
    
    const queryWords = query.toLowerCase().split(' ').filter(w => w.length > 0);
    let highlightedText = text;
    
    queryWords.forEach(word => {
      const regex = new RegExp(`(${word})`, 'gi');
      highlightedText = highlightedText.replace(regex, '<mark class="bg-orange-500/30 text-orange-400">$1</mark>');
    });
    
    return highlightedText;
  };

  // Initialize search index
  useEffect(() => {
    try {
      searchIndex.current = buildSearchIndex();
      setError(null);
      console.log('Search index initialized with', searchIndex.current.length, 'pages');
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Search index build failed');
      console.error('Search index build error:', e);
    }
  }, []);

  // Load search history from localStorage
  useEffect(() => {
    const savedHistory = localStorage.getItem('searchHistory');
    if (savedHistory) {
      try {
        setSearchHistory(JSON.parse(savedHistory));
      } catch (e) {
        console.error('Failed to load search history:', e);
      }
    }
  }, []);

  // Save search history to localStorage
  const saveSearchHistory = (searchTerm: string) => {
    if (!searchTerm.trim()) return;
    
    const newHistory = [
      searchTerm,
      ...searchHistory.filter(item => item !== searchTerm)
    ].slice(0, 10); // Keep only last 10 searches
    
    setSearchHistory(newHistory);
    localStorage.setItem('searchHistory', JSON.stringify(newHistory));
  };

  // Remove item from search history
  const removeFromHistory = (historyItem: string) => {
    const newHistory = searchHistory.filter(item => item !== historyItem);
    setSearchHistory(newHistory);
    localStorage.setItem('searchHistory', JSON.stringify(newHistory));
  };

  // Clear all search history
  const clearAllHistory = () => {
    if (window.confirm('Are you sure you want to clear all search history?')) {
      setSearchHistory([]);
      localStorage.removeItem('searchHistory');
    }
  };

  // Generate suggestions based on query
  const generateSuggestions = useCallback((query: string) => {
    if (!query.trim() || query.length < 1) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const queryLower = query.toLowerCase();
    const suggestions: string[] = [];

    // Add popular queries that match
    popularQueries.forEach(term => {
      if (term.toLowerCase().includes(queryLower)) {
        suggestions.push(term);
      }
    });

    // Add code terms that match
    codeTerms.forEach(term => {
      if (term.toLowerCase().includes(queryLower)) {
        suggestions.push(term);
      }
    });

    // Add image terms that match
    imageTerms.forEach(term => {
      if (term.toLowerCase().includes(queryLower)) {
        suggestions.push(term);
      }
    });

    // Add related topics
    Object.entries(relatedTopics).forEach(([topic, related]) => {
      if (topic.toLowerCase().includes(queryLower)) {
        suggestions.push(...related);
      }
    });

    // Add from search history
    searchHistory.forEach(historyItem => {
      if (historyItem.toLowerCase().includes(queryLower) && !suggestions.includes(historyItem)) {
        suggestions.push(historyItem);
      }
    });

    // Remove duplicates and limit to 8 suggestions
    const uniqueSuggestions = [...new Set(suggestions)].slice(0, 8);
    setSuggestions(uniqueSuggestions);
    setShowSuggestions(uniqueSuggestions.length > 0);
    setSelectedSuggestionIndex(-1);
  }, [searchHistory]);

  // Fuzzy search function for better matching
  const fuzzyMatch = (str: string, pattern: string): boolean => {
    pattern = pattern.toLowerCase();
    str = str.toLowerCase();
    
    let patternIdx = 0;
    let strIdx = 0;
    let matchCount = 0;
    
    while (strIdx < str.length && patternIdx < pattern.length) {
      if (str[strIdx] === pattern[patternIdx]) {
        matchCount++;
        patternIdx++;
      }
      strIdx++;
    }
    
    // Return true if we matched at least 80% of the pattern
    return matchCount >= pattern.length * 0.8;
  };

  // Load recently viewed pages
  useEffect(() => {
    const viewed = localStorage.getItem('recentlyViewedDocs');
    if (viewed) {
      try {
        setRecentlyViewed(JSON.parse(viewed));
      } catch (e) {
        console.error('Failed to load recently viewed:', e);
      }
    }
    
    const pinned = localStorage.getItem('pinnedSearches');
    if (pinned) {
      try {
        setPinnedSearches(JSON.parse(pinned));
      } catch (e) {
        console.error('Failed to load pinned searches:', e);
      }
    }
  }, []);

  // Save page view to recently viewed
  const saveRecentlyViewed = (url: string) => {
    const newViewed = [url, ...recentlyViewed.filter(v => v !== url)].slice(0, 5);
    setRecentlyViewed(newViewed);
    localStorage.setItem('recentlyViewedDocs', JSON.stringify(newViewed));
  };

  // Pin/unpin search query
  const togglePinSearch = (searchTerm: string) => {
    const newPinned = pinnedSearches.includes(searchTerm)
      ? pinnedSearches.filter(p => p !== searchTerm)
      : [...pinnedSearches, searchTerm].slice(0, 3);
    
    setPinnedSearches(newPinned);
    localStorage.setItem('pinnedSearches', JSON.stringify(newPinned));
  };



  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ctrl+K or Cmd+K to open search
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        setIsOpen(true);
        setTimeout(() => {
          inputRef.current?.focus();
        }, 100);
      }
      
      // Escape to close search
      if (event.key === 'Escape' && isOpen) {
        event.preventDefault();
        handleCloseModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Handle click outside modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        handleCloseModal();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Handle modal close and reset
  const handleCloseModal = () => {
    setIsOpen(false);
    setQuery('');
    setResults([]);
    setSelectedTags([]);
    setExpandedGroups(new Set());
    setSuggestions([]);
    setShowSuggestions(false);
    setSelectedSuggestionIndex(-1);
    setSelectedContentType('all');
  };

  // Search function with minimum query length
  const performSearch = useCallback((searchQuery: string) => {
    if (!searchQuery.trim() || searchQuery.trim().length < 2) {
      setResults([]);
      return;
    }
    if (error) return;
    
    console.log('Searching for:', searchQuery, 'in', searchIndex.current.length, 'pages');
    const searchResults = searchInIndex(searchQuery, searchIndex.current);
    console.log('Found', searchResults.length, 'result groups');
    setResults(searchResults);
    
    // Save to search history
    saveSearchHistory(searchQuery);
  }, [error]);

  // Perform search with debouncing
  useEffect(() => {
    if (debouncedQuery.length >= 2) {
      setIsSearching(true);
      performSearch(debouncedQuery);
      setIsSearching(false);
    } else if (debouncedQuery.length === 0) {
      setResults([]);
    }
  }, [debouncedQuery, performSearch]);

  // Handle search input without immediate search
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    generateSuggestions(value);
  };

  // Handle keyboard navigation in suggestions
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedSuggestionIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedSuggestionIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedSuggestionIndex >= 0 && suggestions[selectedSuggestionIndex]) {
          handleSuggestionClick(suggestions[selectedSuggestionIndex]);
        }
        break;
      case 'Tab':
        if (selectedSuggestionIndex >= 0 && suggestions[selectedSuggestionIndex]) {
          e.preventDefault();
          handleSuggestionClick(suggestions[selectedSuggestionIndex]);
        }
        break;
    }
    
    // Add new shortcuts
    switch (e.key) {
      case 'ArrowDown':
        if (e.altKey) {
          // Alt+Down navigates results
          e.preventDefault();
          handleResultNavigation('down');
        }
        break;
      case 'ArrowUp':
        if (e.altKey) {
          // Alt+Up navigates results
          e.preventDefault();
          handleResultNavigation('up');
        }
        break;
      case 'Enter':
        if (e.metaKey || e.ctrlKey) {
          // Cmd/Ctrl+Enter opens in new tab
          e.preventDefault();
          if (selectedResultIndex >= 0) {
            const allResults = filteredResults.flatMap(group => group.hits);
            const selectedResult = allResults[selectedResultIndex];
            if (selectedResult) {
              window.open(selectedResult.url, '_blank');
            }
          }
        }
        break;
      case 'p':
        if (e.metaKey || e.ctrlKey) {
          // Cmd/Ctrl+P toggles preview
          e.preventDefault();
          setShowPreview(!showPreview);
        }
        break;
      case 's':
        if (e.metaKey || e.ctrlKey) {
          // Cmd/Ctrl+S pins current search
          e.preventDefault();
          if (query) {
            togglePinSearch(query);
          }
        }
        break;
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setShowSuggestions(false);
    setSelectedSuggestionIndex(-1);
    performSearch(suggestion);
  };

  // Handle search history click
  const handleHistoryClick = (historyItem: string) => {
    setQuery(historyItem);
    setShowSuggestions(false);
    performSearch(historyItem);
  };

  // Handle content type filter
  const handleContentTypeFilter = (contentType: string) => {
    setSelectedContentType(contentType);
  };

  // Handle tag selection
  const handleTagClick = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  // Handle group expansion
  const handleExpandGroup = (pageUrl: string) => {
    setExpandedGroups(prev => {
      const newSet = new Set(prev);
      if (newSet.has(pageUrl)) {
        newSet.delete(pageUrl);
      } else {
        newSet.add(pageUrl);
      }
      return newSet;
    });
  };

  // Handle result click - close modal and navigate
  const handleResultClick = () => {
    handleCloseModal();
  };

  // Get all unique tags from results
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    results.forEach(group => {
      group.hits.forEach(hit => {
        hit.tags.forEach(tag => tagSet.add(tag));
      });
    });
    return Array.from(tagSet).sort();
  }, [results]);

  // Filter results by selected tags and content type
  const filteredResults = useMemo(() => {
    let filtered = results;
    
    // Filter by content type
    if (selectedContentType !== 'all') {
      filtered = filtered.filter(group => 
        group.hits.some(hit => {
          const url = hit.url.toLowerCase();
          const title = hit.title.toLowerCase();
          const content = hit.content.toLowerCase();
          
          switch (selectedContentType) {
            case 'code':
              return url.includes('/ergoscript') || 
                     url.includes('/code') || 
                     title.includes('ergoscript') ||
                     title.includes('sigma') ||
                     content.includes('ergoscript') ||
                     content.includes('sigma') ||
                     hit.type === 'code';
            case 'documentation':
              return url.includes('/introduction') || 
                     url.includes('/docs') ||
                     title.includes('documentation') ||
                     title.includes('guide');
            case 'guides':
              return url.includes('/guides') || 
                     url.includes('/tutorial') ||
                     title.includes('guide') ||
                     title.includes('tutorial') ||
                     title.includes('how-to');
            case 'api':
              return url.includes('/api') || 
                     url.includes('/reference') ||
                     title.includes('api') ||
                     title.includes('reference');
            default:
              return true;
          }
        })
      );
    }
    
    // Filter by selected tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter(group => 
        group.hits.some(hit => 
          selectedTags.some(selectedTag => 
            hit.tags.includes(selectedTag)
          )
        )
      );
    }
    
    return filtered;
  }, [results, selectedTags, selectedContentType]);

  // Navigate results with keyboard
  const handleResultNavigation = useCallback((direction: 'up' | 'down') => {
    const allResults = filteredResults.flatMap(group => 
      group.hits.slice(0, expandedGroups.has(group.pageUrl) ? group.totalHits : group.visibleHits)
    );
    
    if (direction === 'down') {
      setSelectedResultIndex(prev => 
        prev < allResults.length - 1 ? prev + 1 : prev
      );
    } else {
      setSelectedResultIndex(prev => prev > 0 ? prev - 1 : -1);
    }
    
    // Scroll to selected result
    if (resultsRef.current && selectedResultIndex >= 0) {
      const resultElements = resultsRef.current.querySelectorAll('[data-result-item]');
      resultElements[selectedResultIndex]?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [filteredResults, expandedGroups, selectedResultIndex]);

  return (
    <>
      {/* Search Bar - enhanced with status indicator */}
      <div className="relative w-full">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search docs..."
            onClick={() => setIsOpen(true)}
            readOnly
            className="w-full pl-10 pr-20 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors duration-200 cursor-pointer text-sm"
          />
          {/* Enhanced keyboard shortcut hint */}
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1 text-xs text-gray-600">
            <kbd className="px-1 py-0.5 bg-neutral-700 rounded text-gray-400 font-mono">⌘</kbd>
            <kbd className="px-1 py-0.5 bg-neutral-700 rounded text-gray-400 font-mono">K</kbd>
          </div>
        </div>
      </div>

      {/* Error message */}
      {error && (
        <div className="mt-2 p-2 bg-red-900/50 text-red-400 rounded-lg border border-red-700/50 text-sm">
          <b>Error:</b> {error}
        </div>
      )}

      {/* Search Modal - enhanced with better UX */}
      {isOpen && !error && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start justify-center pt-20">
          <div ref={modalRef} className="w-full max-w-4xl mx-4 bg-neutral-900 border border-neutral-700 rounded-xl shadow-2xl max-h-[80vh] flex">
            {/* Main search area */}
            <div className="flex-1 flex flex-col">
              {/* Header with search input */}
              <div className="flex items-center justify-between p-4 border-b border-neutral-700">
                <div className="flex items-center gap-3 flex-1 relative">
                  <Search className={`w-5 h-5 transition-colors ${isSearching ? 'text-orange-400 animate-pulse' : 'text-gray-500'}`} />
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={handleSearchChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Type to search... (fuzzy search enabled)"
                    className="w-full bg-transparent text-white placeholder-gray-500 outline-none text-base font-mono"
                    autoFocus
                  />
                  
                  {/* Search status */}
                  {isSearching && (
                    <span className="text-xs text-orange-400 animate-pulse">Searching...</span>
                  )}
                  
                  {/* Autocomplete Suggestions - enhanced */}
                  {showSuggestions && suggestions.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-neutral-800 border border-neutral-700 rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto">
                      {suggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className={`w-full text-left px-4 py-2 hover:bg-neutral-700 transition-colors duration-150 text-sm font-mono flex items-center justify-between ${
                            index === selectedSuggestionIndex 
                              ? 'bg-neutral-700 text-orange-400' 
                              : 'text-gray-300'
                          }`}
                        >
                          <span>{suggestion}</span>
                          {searchHistory.includes(suggestion) && (
                            <Clock className="w-3 h-3 text-gray-600" />
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Action buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowPreview(!showPreview)}
                    className={`p-2 rounded-lg transition-colors duration-200 ${
                      showPreview ? 'bg-orange-500/20 text-orange-400' : 'hover:bg-neutral-800 text-gray-500'
                    }`}
                    title="Toggle preview (⌘P)"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleCloseModal}
                    className="p-2 hover:bg-neutral-800 rounded-lg transition-colors duration-200"
                    title="Close (Esc)"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Quick filters */}
              <div className="px-4 py-2 border-b border-neutral-700 flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {contentTypes.map((contentType) => (
                    <button
                      key={contentType.id}
                      onClick={() => handleContentTypeFilter(contentType.id)}
                      className={`px-3 py-1 rounded-lg transition-colors duration-200 text-xs font-mono ${
                        selectedContentType === contentType.id
                          ? 'bg-orange-500 text-black'
                          : 'bg-neutral-800 text-gray-400 hover:bg-neutral-700'
                      }`}
                      title={contentType.description}
                    >
                      {contentType.label}
                    </button>
                  ))}
                </div>
                
                {/* Search tips */}
                <div className="text-xs text-gray-600 font-mono hidden lg:block">
                  Tips: Use quotes for exact match • Fuzzy search enabled
                </div>
              </div>

              {/* Results area */}
              <div ref={resultsRef} className="flex-1 overflow-y-auto p-4">
                {/* Pinned searches */}
                {(!query || query.length < 2) && pinnedSearches.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-sm font-mono text-gray-400 mb-3 flex items-center gap-2">
                      <Pin className="w-3 h-3" /> Pinned searches
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {pinnedSearches.map((pinned, index) => (
                        <button
                          key={index}
                          onClick={() => handleSuggestionClick(pinned)}
                          className="px-3 py-1 bg-orange-500/10 border border-orange-500/30 rounded-lg hover:bg-orange-500/20 transition-colors duration-200 text-orange-400 text-sm font-mono"
                        >
                          {pinned}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Recently viewed */}
                {(!query || query.length < 2) && recentlyViewed.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-sm font-mono text-gray-400 mb-3 flex items-center gap-2">
                      <Clock className="w-3 h-3" /> Recently viewed
                    </h3>
                    <div className="space-y-1">
                      {recentlyViewed.slice(0, 3).map((viewed, index) => {
                        const title = viewed.split('/').pop()?.replace(/-/g, ' ') || viewed;
                        return (
                          <Link
                            key={index}
                            href={viewed}
                            onClick={handleCloseModal}
                            className="block px-3 py-2 text-sm text-gray-400 hover:text-orange-400 hover:bg-neutral-800 rounded-lg transition-colors duration-150 font-mono"
                          >
                            {title}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Search History */}
                {(!query || query.length < 2) && searchHistory.length > 0 && (
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-sm font-mono text-gray-400 flex items-center gap-2">
                        <Clock className="w-3 h-3" /> Recent searches
                      </h3>
                      <button
                        onClick={clearAllHistory}
                        className="text-xs text-gray-600 hover:text-red-400 transition-colors duration-200"
                      >
                        Clear all
                      </button>
                    </div>
                    <div className="space-y-1">
                      {searchHistory.slice(0, 5).map((historyItem, index) => (
                        <div key={index} className="flex items-center justify-between group">
                          <button
                            onClick={() => {
                              setQuery(historyItem);
                              performSearch(historyItem);
                            }}
                            className="flex-1 text-left px-3 py-2 text-sm text-gray-400 hover:text-orange-400 hover:bg-neutral-800 rounded-lg transition-colors duration-150 font-mono flex items-center justify-between"
                          >
                            <span>{historyItem}</span>
                            <span
                              onClick={(e) => {
                                e.stopPropagation();
                                togglePinSearch(historyItem);
                              }}
                              className={`opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer ${
                                pinnedSearches.includes(historyItem) ? 'text-orange-400' : 'text-gray-600'
                              }`}
                              aria-label={`Pin search: ${historyItem}`}
                            >
                              <Pin className="w-3 h-3" />
                            </span>
                          </button>
                          <button
                            onClick={() => removeFromHistory(historyItem)}
                            className="opacity-0 group-hover:opacity-100 p-1 hover:text-red-400 transition-all duration-200"
                            aria-label={`Remove ${historyItem} from history`}
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Popular/Trending Queries */}
                {(!query || query.length < 2) && (
                  <div className="mb-6">
                    <h3 className="text-sm font-mono text-gray-400 mb-3 flex items-center gap-2">
                      <TrendingUp className="w-3 h-3" /> Trending searches
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {popularQueries.slice(0, 8).map((popularQuery, index) => (
                        <button
                          key={index}
                          onClick={() => handleSuggestionClick(popularQuery)}
                          className="px-3 py-1 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors duration-200 text-gray-300 hover:text-orange-400 text-sm font-mono"
                        >
                          {popularQuery}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Results count with smart insights */}
                {query && query.length >= 2 && filteredResults.length > 0 && (
                  <div className="mb-4 flex items-center justify-between">
                    <div className="text-sm text-gray-500 font-mono">
                      Found {filteredResults.reduce((sum, group) => sum + group.totalHits, 0)} results
                      {selectedContentType !== 'all' && (
                        <span className="ml-2 text-orange-400">
                          • {contentTypes.find(ct => ct.id === selectedContentType)?.label}
                        </span>
                      )}
                    </div>
                    {query && (
                      <button
                        onClick={() => togglePinSearch(query)}
                        className={`text-xs px-2 py-1 rounded transition-colors ${
                          pinnedSearches.includes(query) 
                            ? 'bg-orange-500/20 text-orange-400' 
                            : 'bg-neutral-800 text-gray-500 hover:text-gray-300'
                        }`}
                      >
                        {pinnedSearches.includes(query) ? 'Pinned' : 'Pin search'}
                      </button>
                    )}
                  </div>
                )}

                {/* Enhanced search results */}
                {filteredResults.map((group, groupIndex) => (
                  <div key={group.pageUrl} className="mb-4">
                    <div className={`bg-neutral-800/50 border border-neutral-700 rounded-lg overflow-hidden ${
                      selectedResultIndex >= 0 ? 'ring-2 ring-orange-500/50' : ''
                    }`}>
                      <button
                        onClick={() => handleExpandGroup(group.pageUrl)}
                        className="w-full px-4 py-3 flex items-center justify-between hover:bg-neutral-800/70 transition-colors duration-200"
                      >
                        <div className="flex items-center gap-3">
                          <ChevronRight className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                            expandedGroups.has(group.pageUrl) ? 'rotate-90' : ''
                          }`} />
                          <div className="text-left">
                            <div className="text-sm font-semibold text-white font-mono flex items-center gap-2">
                              {group.pageTitle}
                              {group.relevanceScore > 80 && (
                                <span className="text-xs px-1 py-0.5 bg-green-500/20 text-green-400 rounded">
                                  Best match
                                </span>
                              )}
                            </div>
                            <div className="text-xs text-gray-500 font-mono">{group.pageSection}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-600 font-mono">{group.totalHits} results</span>
                        </div>
                      </button>
                      
                      {(expandedGroups.has(group.pageUrl) || groupIndex === 0) && (
                        <div className="border-t border-neutral-700">
                          {group.hits.slice(0, expandedGroups.has(group.pageUrl) ? group.totalHits : group.visibleHits).map((hit, hitIndex) => {
                            const resultIndex = filteredResults.slice(0, groupIndex).reduce((sum, g) => sum + g.hits.length, 0) + hitIndex;
                            return (
                              <Link
                                key={hit.objectID}
                                href={hit.url}
                                onClick={() => {
                                  saveRecentlyViewed(hit.url);
                                  handleCloseModal();
                                }}
                                data-result-item
                                className={`block px-4 py-3 hover:bg-neutral-800/50 transition-colors duration-200 border-b border-neutral-700/50 last:border-b-0 ${
                                  resultIndex === selectedResultIndex ? 'bg-orange-500/10 border-l-2 border-l-orange-500' : ''
                                }`}
                              >
                                <div className="flex items-start gap-3">
                                  {hit.type === 'code' ? (
                                    <Hash className="w-4 h-4 text-orange-400 mt-0.5" />
                                  ) : hit.type === 'anchor' ? (
                                    <BookOpen className="w-4 h-4 text-cyan-400 mt-0.5" />
                                  ) : (
                                    <FileText className="w-4 h-4 text-gray-600 mt-0.5" />
                                  )}
                                  <div className="flex-1 min-w-0">
                                    <div className="text-sm font-medium text-orange-400 mb-1">
                                      {hit.title}
                                    </div>
                                    <div 
                                      className="text-xs text-gray-400 line-clamp-2"
                                      dangerouslySetInnerHTML={{ 
                                        __html: highlightText(
                                          hit._snippetResult?.content?.value || hit.content.substring(0, 150) + '...',
                                          query
                                        )
                                      }}
                                    />
                                    {hit.tags && hit.tags.length > 0 && (
                                      <div className="flex flex-wrap gap-1 mt-2">
                                        {hit.tags.slice(0, 3).map(tag => (
                                          <span key={tag} className="px-2 py-0.5 text-xs bg-neutral-800 text-gray-500 rounded">
                                            {tag}
                                          </span>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                          
                          {group.totalHits > group.visibleHits && !expandedGroups.has(group.pageUrl) && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleExpandGroup(group.pageUrl);
                              }}
                              className="w-full px-4 py-2 text-xs text-orange-400 hover:bg-neutral-800/50 transition-colors duration-200 font-mono"
                            >
                              Show {group.totalHits - group.visibleHits} more results
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {/* No results with suggestions */}
                {query && query.length >= 2 && filteredResults.length === 0 && (
                  <div className="text-center py-12">
                    <div className="text-gray-500 mb-2">No results found for</div>
                    <div className="text-orange-400 font-mono text-lg mb-4">"{query}"</div>
                    <div className="text-sm text-gray-600 mb-4">Try different keywords or check the spelling</div>
                    
                    {/* Suggest similar searches */}
                    <div className="mt-6">
                      <p className="text-xs text-gray-600 mb-3">Did you mean:</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {popularQueries
                          .filter(pq => fuzzyMatch(pq, query) || fuzzyMatch(query, pq))
                          .slice(0, 3)
                          .map((suggestion, index) => (
                            <button
                              key={index}
                              onClick={() => handleSuggestionClick(suggestion)}
                              className="px-3 py-1 bg-neutral-800 rounded-lg hover:bg-neutral-700 text-gray-300 hover:text-orange-400 text-sm font-mono"
                            >
                              {suggestion}
                            </button>
                          ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Enhanced footer with shortcuts */}
              <div className="px-4 py-2 border-t border-neutral-700 flex items-center justify-between text-xs text-gray-600">
                <div className="flex items-center gap-4">
                  <span className="font-mono">↑↓ Navigate</span>
                  <span className="font-mono">↵ Open</span>
                  <span className="font-mono">⌘↵ New tab</span>
                  <span className="font-mono">⌘P Preview</span>
                  <span className="font-mono">⌘S Pin</span>
                  <span className="font-mono">ESC Close</span>
                </div>
                {query && filteredResults.length > 0 && (
                  <span className="font-mono">{filteredResults.length} results • {(Date.now() - performance.now()).toFixed(0)}ms</span>
                )}
              </div>
            </div>

            {/* Preview panel */}
            {showPreview && selectedResultIndex >= 0 && (
              <div className="w-96 border-l border-neutral-700 bg-neutral-950 p-4 overflow-y-auto">
                <h3 className="text-sm font-mono text-gray-400 mb-3">Preview</h3>
                {(() => {
                  const allResults = filteredResults.flatMap(group => group.hits);
                  const selectedResult = allResults[selectedResultIndex];
                  if (selectedResult) {
                    return (
                      <div>
                        <h4 className="text-white font-semibold mb-2">{selectedResult.title}</h4>
                        <p className="text-sm text-gray-400 mb-4">{selectedResult.url}</p>
                        <div className="text-sm text-gray-300 space-y-2">
                          {selectedResult.content.split('\n').slice(0, 10).map((line, i) => (
                            <p key={i}>{line}</p>
                          ))}
                        </div>
                        <Link
                          href={selectedResult.url}
                          onClick={() => {
                            saveRecentlyViewed(selectedResult.url);
                            handleCloseModal();
                          }}
                          className="inline-block mt-4 px-3 py-1 bg-orange-500 text-black rounded-lg text-sm font-mono hover:bg-orange-600 transition-colors"
                        >
                          Open page →
                        </Link>
                      </div>
                    );
                  }
                  return <p className="text-gray-500">Select a result to preview</p>;
                })()}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
} 