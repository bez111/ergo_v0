
/* eslint-disable @typescript-eslint/no-unused-vars, jsx-a11y/alt-text, react-hooks/set-state-in-effect */
import React, { useState, useRef, useEffect, useMemo } from "react";
import { X, Search, FileText, Code, ExternalLink, Clock, Filter, Globe, BookOpen, MessageSquare, Calendar, Trash2, Lightbulb, Map, Layers, HelpCircle, Image, Pickaxe, Users } from "lucide-react";
import { buildDocsSearchIndex, DocsSearchIndexItem, searchWithTypos } from "@/lib/docs-search-index";
import { useSearchHistory } from "@/hooks/use-search-history";
import { Link } from "@/i18n/navigation";

function highlight(text: string, query: string) {
  if (!query) return text;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  return text.split(regex).map((part, i) =>
    regex.test(part) ? <mark key={i} className="bg-orange-400/40 text-orange-300 rounded px-0.5">{part}</mark> : part
  );
}

function groupBySection(items: DocsSearchIndexItem[]) {
  const groups: Record<string, DocsSearchIndexItem[]> = {};
  for (const item of items) {
    const section = item.section;
    if (!section) continue;
    if (!groups[section]) groups[section] = [];
    groups[section].push(item);
  }
  return groups;
}

// Иконки для типов контента
const typeIcons: Record<string, React.ReactNode> = {
  docs: <FileText className="w-4 h-4" />,
  blog: <BookOpen className="w-4 h-4" />,
  api: <Code className="w-4 h-4" />,
  community: <MessageSquare className="w-4 h-4" />,
  release: <Calendar className="w-4 h-4" />,
  tutorial: <BookOpen className="w-4 h-4" />,
  // New content types
  glossary: <Lightbulb className="w-4 h-4" />,
  playbook: <Map className="w-4 h-4" />,
  pattern: <Code className="w-4 h-4" />,
  topic: <Layers className="w-4 h-4" />,
  question: <HelpCircle className="w-4 h-4" />,
  infographic: <Image className="w-4 h-4" />,
  page: <Globe className="w-4 h-4" />
};

// Цвета для типов контента
const typeColors: Record<string, string> = {
  docs: "text-blue-400",
  blog: "text-green-400", 
  api: "text-purple-400",
  community: "text-orange-400",
  release: "text-red-400",
  tutorial: "text-cyan-400",
  // New content types
  glossary: "text-yellow-400",
  playbook: "text-emerald-400",
  pattern: "text-violet-400",
  topic: "text-sky-400",
  question: "text-pink-400",
  infographic: "text-amber-400",
  page: "text-slate-400"
};

// Популярные запросы
const popularQueries = [
  "eUTXO",
  "mining",
  "wallet",
  "privacy",
  "ErgoScript",
  "DeFi",
  "Sigma protocols",
  "SigmaUSD",
  "Autolykos",
  "smart contracts"
];

export default function DocsSearchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all");
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const inputRef = useRef<HTMLInputElement>(null);
  const index = useMemo(() => buildDocsSearchIndex(), []);
  const { searchHistory, addToHistory, clearHistory } = useSearchHistory();

  useEffect(() => {
    if (open && inputRef.current) {
      // Небольшая задержка для гарантии, что модальное окно полностью отрендерилось
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
    if (!open) {
      setQuery("");
      setSelected(0);
      setSelectedType(null);
      setShowFilters(false);
    }
  }, [open]);

  // Расширенный поиск с поддержкой fuzzy search
  const filtered = useMemo(() => {
    if (!query.trim()) return [];
    
    let results = searchWithTypos(query.trim(), index);
    
    // Фильтрация по типу контента
    if (selectedType) {
      results = results.filter(item => item.type === selectedType);
    }
    
    // Фильтрация по языку
    if (selectedLanguage !== "all") {
      results = results.filter(item => item.language === selectedLanguage);
    }
    
    return results;
  }, [query, index, selectedType, selectedLanguage]);

  const grouped = useMemo(() => groupBySection(filtered), [filtered]);
  const flatResults = filtered;

  // Собираем все уникальные типы контента
  const allTypes = useMemo(() => {
    const types = new Set<string>();
    filtered.forEach(item => types.add(item.type));
    return Array.from(types);
  }, [filtered]);

  // Обработчик поиска с сохранением в историю
  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    if (searchQuery.trim()) {
      addToHistory(searchQuery.trim());
    }
  };

  // Функция для переключения расширенного просмотра
  const toggleExpanded = (itemHref: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemHref)) {
      newExpanded.delete(itemHref);
    } else {
      newExpanded.add(itemHref);
    }
    setExpandedItems(newExpanded);
  };

  // Клавиатурная навигация
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowDown") {
        setSelected(s => Math.min(s + 1, flatResults.length - 1));
        e.preventDefault();
      }
      if (e.key === "ArrowUp") {
        setSelected(s => Math.max(s - 1, 0));
        e.preventDefault();
      }
      if (e.key === "Enter" && flatResults[selected]) {
        window.location.href = flatResults[selected].href;
        onClose();
      }
      // Горячие клавиши для фильтров
      if (e.key === "f" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setShowFilters(!showFilters);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, flatResults, selected, onClose, showFilters]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center bg-black/70 backdrop-blur-sm">
      <div 
        className="w-full max-w-5xl mt-32 bg-[#101217] rounded-2xl shadow-2xl border border-neutral-800 relative"
      >
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-orange-400 transition-colors"
          onClick={onClose}
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>
        
        {/* Search Input */}
        <div className="flex items-center gap-3 px-6 pt-6 pb-4 border-b border-neutral-700">
          <Search className="w-6 h-6 text-gray-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
              setSelected(0);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && query.trim()) {
                addToHistory(query.trim());
              }
            }}
            placeholder="Search documentation, code, tutorials..."
            className="bg-transparent outline-none border-none w-full text-lg text-gray-200 placeholder-gray-400 font-medium"
            autoFocus
          />
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`p-2 rounded-lg transition-colors ${showFilters ? 'bg-orange-400/20 text-orange-400' : 'text-gray-400 hover:text-orange-400'}`}
            title="Toggle filters (Cmd+F)"
          >
            <Filter className="w-5 h-5" />
          </button>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="px-6 py-4 border-b border-neutral-700 bg-neutral-900/30">
            <div className="flex flex-wrap gap-4">
              {/* Type Filter */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">Type:</span>
                <div className="flex gap-1">
                  <button
                    onClick={() => setSelectedType(null)}
                    className={`px-3 py-1 text-xs rounded-full transition-colors ${
                      !selectedType ? 'bg-orange-400 text-black font-semibold' : 'bg-neutral-800 text-gray-300 hover:bg-neutral-700'
                    }`}
                  >
                    All
                  </button>
                  {allTypes.map(type => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(selectedType === type ? null : type)}
                      className={`px-3 py-1 text-xs rounded-full transition-colors flex items-center gap-1 ${
                        selectedType === type ? 'bg-orange-400 text-black font-semibold' : 'bg-neutral-800 text-gray-300 hover:bg-neutral-700'
                      }`}
                    >
                      {typeIcons[type as keyof typeof typeIcons]}
                      {type}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Language Filter */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">Language:</span>
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="bg-neutral-800 text-gray-300 text-xs px-2 py-1 rounded border border-neutral-700"
                >
                  <option value="all">All Languages</option>
                  <option value="en">English</option>
                  <option value="ru">Русский</option>
                  <option value="zh">中文</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Results Count */}
        {query.trim() && (
          <div className="px-6 py-3 text-sm text-gray-400 border-b border-neutral-700">
            {filtered.length} matching document{filtered.length !== 1 ? 's' : ''}
            {filtered.length > 0 && (
              <span className="text-gray-500 ml-2">
                ({filtered.reduce((sum, item) => sum + item.totalOccurrences, 0)} total occurrences)
              </span>
            )}
          </div>
        )}

        {/* Search Results */}
        <div className="max-h-[60vh] overflow-y-auto">
          {query.trim() && filtered.length === 0 && (
            <div className="text-center text-gray-500 py-8">
              <Search className="w-12 h-12 mx-auto mb-4 text-gray-600" />
              <p className="text-lg font-medium">Nothing found</p>
              <p className="text-sm text-gray-600 mt-1">Try another keyword or check spelling</p>
              
              {/* Suggestions */}
              <div className="mt-6">
                <p className="text-sm text-gray-500 mb-2">Popular searches:</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {popularQueries.map(suggestion => (
                    <button
                      key={suggestion}
                      onClick={() => handleSearch(suggestion)}
                      className="px-3 py-1 text-xs bg-neutral-800 text-gray-300 rounded-full hover:bg-neutral-700 transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {!query.trim() && (
            <div className="p-6">
              {/* Recent Searches */}
              {searchHistory.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                      <Clock className="w-4 h-4" /> Recent Searches
                    </h3>
                    <button
                      onClick={clearHistory}
                      className="text-xs text-gray-500 hover:text-red-400 transition-colors flex items-center gap-1"
                      title="Clear search history"
                    >
                      <Trash2 className="w-3 h-3" />
                      Clear
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {searchHistory.map((term, index) => (
                      <button
                        key={`${term.query}-${index}`}
                        onClick={() => handleSearch(term.query)}
                        className="px-3 py-1 text-xs bg-neutral-800 text-gray-300 rounded-full hover:bg-neutral-700 transition-colors"
                      >
                        {term.query}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Popular Searches */}
              <div>
                <h3 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
                  <Search className="w-4 h-4" /> Popular Searches
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularQueries.map(term => (
                    <button
                      key={term}
                      onClick={() => handleSearch(term)}
                      className="px-3 py-1 text-xs bg-neutral-800 text-gray-300 rounded-full hover:bg-neutral-700 transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {Object.entries(grouped).map(([section, items]) => (
            <div key={section} className="mb-6">
              <div className="px-6 py-3 text-xs font-bold uppercase text-orange-400/80 tracking-wider bg-neutral-900/30">
                {section}
              </div>
              <div className="space-y-1">
                {items.map((item, i) => {
                  const idx = flatResults.indexOf(item);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-start gap-3 px-6 py-4 transition-colors cursor-pointer
                        ${selected === idx ? "bg-orange-400/10 border-l-2 border-orange-400" : "hover:bg-neutral-800/50"}`}
                      onMouseEnter={() => setSelected(idx)}
                      onClick={() => {
                        onClose();
                        if (query.trim()) {
                          addToHistory(query.trim());
                        }
                      }}
                    >
                      <div className={`mt-0.5 flex-shrink-0 ${typeColors[item.type]}`}>
                        {typeIcons[item.type]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="text-base font-semibold text-gray-100">
                            {highlight(item.title, query)}
                          </div>
                          <span className={`px-2 py-0.5 text-xs rounded-full ${typeColors[item.type]} bg-neutral-800`}>
                            {item.type}
                          </span>
                        </div>
                        
                        {/* Breadcrumb */}
                        <div className="text-sm text-gray-400 mb-2">
                          {item.parents.length > 0 && (
                            <span className="text-gray-500">
                              {item.parents.join(" / ")} /
                            </span>
                          )}
                          <span className="text-gray-600">{item.href}</span>
                        </div>
                        
                        {/* Excerpt */}
                        {item.excerpt && (
                          <div className="text-sm text-gray-300 mb-3 line-clamp-2">
                            {highlight(item.excerpt, query)}
                          </div>
                        )}
                        
                        {/* Occurrences Count */}
                        {item.totalOccurrences > 0 && (
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-xs text-gray-500">
                              {item.totalOccurrences} occurrence{item.totalOccurrences !== 1 ? 's' : ''} found
                            </div>
                            {item.totalOccurrences > 1 && (
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  toggleExpanded(item.href);
                                }}
                                className="text-xs text-red-400 hover:text-red-300 cursor-pointer"
                              >
                                {expandedItems.has(item.href) ? 'Hide details' : `${item.totalOccurrences - 1} more on this page`}
                              </button>
                            )}
                          </div>
                        )}
                        
                        {/* Expanded Occurrences */}
                        {expandedItems.has(item.href) && item.occurrences.length > 0 && (
                          <div className="mb-3 p-3 bg-neutral-800/50 rounded-lg border border-neutral-700">
                            <div className="text-xs text-gray-400 mb-2 font-semibold">
                              All occurrences on this page:
                            </div>
                            {item.occurrences.slice(0, 5).map((occurrence, idx) => (
                              <div key={idx} className="mb-2 text-xs">
                                <div className="text-gray-300 mb-1">
                                  <span className="text-orange-400 font-medium">
                                    {occurrence.type.toUpperCase()}
                                  </span>
                                  : {highlight(occurrence.context, query)}
                                </div>
                              </div>
                            ))}
                            {item.occurrences.length > 5 && (
                              <div className="text-xs text-gray-500">
                                ... and {item.occurrences.length - 5} more occurrences
                              </div>
                            )}
                          </div>
                        )}
                        
                        {/* Tags */}
                        {item.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mb-2">
                            {item.tags.map((tag, tagIndex) => (
                              <span
                                key={`${tag}-${tagIndex}`}
                                className={`px-2 py-1 text-xs rounded-full ${
                                  query.toLowerCase().includes(tag.toLowerCase())
                                    ? 'bg-orange-400/20 text-orange-300 border border-orange-400/40'
                                    : 'bg-neutral-800 text-gray-400'
                                }`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                        
                        {/* External Links */}
                        {item.externalLinks && item.externalLinks.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-2">
                            {item.externalLinks.map(link => (
                              <a
                                key={link.url}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-xs text-gray-500 hover:text-orange-400 transition-colors"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <ExternalLink className="w-3 h-3" />
                                {link.title}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 