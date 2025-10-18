import { useState, useEffect } from 'react';

export interface SearchHistoryItem {
  query: string;
  timestamp: number;
  pinned: boolean;
}

export function useSearchHistory() {
  const [searchHistory, setSearchHistory] = useState<SearchHistoryItem[]>([]);

  // Загружаем историю из localStorage при инициализации
  useEffect(() => {
    const saved = localStorage.getItem('searchHistory');
    if (saved) {
      try {
        setSearchHistory(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse search history:', e);
      }
    }
  }, []);

  // Сохраняем историю в localStorage
  const addToHistory = (query: string) => {
    if (!query.trim()) return;
    
    const newItem: SearchHistoryItem = {
      query: query.trim(),
      timestamp: Date.now(),
      pinned: false
    };
    
    const newHistory = [
      newItem,
      ...searchHistory.filter(item => item.query !== query.trim())
    ].slice(0, 20); // Ограничиваем 20 последними запросами
    
    setSearchHistory(newHistory);
    localStorage.setItem('searchHistory', JSON.stringify(newHistory));
  };

  const togglePinned = (query: string) => {
    const newHistory = searchHistory.map(item => 
      item.query === query 
        ? { ...item, pinned: !item.pinned }
        : item
    );
    
    setSearchHistory(newHistory);
    localStorage.setItem('searchHistory', JSON.stringify(newHistory));
  };

  const removeFromHistory = (query: string) => {
    const newHistory = searchHistory.filter(item => item.query !== query);
    setSearchHistory(newHistory);
    localStorage.setItem('searchHistory', JSON.stringify(newHistory));
  };

  const clearHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem('searchHistory');
  };

  const getPinnedSearches = () => {
    return searchHistory.filter(item => item.pinned);
  };

  const getRecentSearches = () => {
    return searchHistory
      .filter(item => !item.pinned)
      .slice(0, 10);
  };

  return {
    searchHistory,
    addToHistory,
    togglePinned,
    removeFromHistory,
    clearHistory,
    getPinnedSearches,
    getRecentSearches
  };
} 