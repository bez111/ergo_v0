import { useState, useEffect } from 'react';

export function useSearchHistory() {
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

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
    
    const newHistory = [
      query.trim(),
      ...searchHistory.filter(item => item !== query.trim())
    ].slice(0, 10); // Ограничиваем 10 последними запросами
    
    setSearchHistory(newHistory);
    localStorage.setItem('searchHistory', JSON.stringify(newHistory));
  };

  const clearHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem('searchHistory');
  };

  return {
    searchHistory,
    addToHistory,
    clearHistory
  };
} 