"use client"

import { useState, useEffect, useRef } from "react"
import { Search, X, FileText, MessageCircle, BookOpen, Code } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface SearchResult {
  id: string
  title: string
  excerpt: string
  url: string
  type: 'blog' | 'docs' | 'forum' | 'technology'
  category?: string
  score: number
}

interface UnifiedSearchProps {
  placeholder?: string
  className?: string
}

export function UnifiedSearch({ 
  placeholder = "Search blog, docs, and forum...", 
  className = "" 
}: UnifiedSearchProps) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Mock search function - replace with actual search API
  const searchContent = async (searchQuery: string): Promise<SearchResult[]> => {
    if (!searchQuery.trim()) return []

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300))

    // Mock results - replace with actual search implementation
    const mockResults: SearchResult[] = [
      {
        id: "1",
        title: "Sigma Protocols Explained",
        excerpt: "A plain-English guide to Sigma Protocols and zero-knowledge cryptography",
        url: "/blog/sigma-protocols-explained",
        type: "blog",
        category: "Privacy",
        score: 0.95
      },
      {
        id: "2", 
        title: "eUTXO vs Account Model",
        excerpt: "How Ergo's eUTXO model differs from Ethereum's account model",
        url: "/blog/eutxo-vs-accounts",
        type: "blog",
        category: "Technology",
        score: 0.87
      },
      {
        id: "3",
        title: "ErgoScript Documentation",
        excerpt: "Complete guide to writing smart contracts in ErgoScript",
        url: "/docs/ergoscript",
        type: "docs",
        category: "Developer",
        score: 0.82
      },
      {
        id: "4",
        title: "Privacy Features Overview",
        excerpt: "Technical overview of Ergo's privacy capabilities",
        url: "/technology/privacy-features",
        type: "technology",
        category: "Privacy",
        score: 0.78
      }
    ]

    // Filter results based on query
    return mockResults.filter(result => 
      result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    ).sort((a, b) => b.score - a.score)
  }

  // Handle search
  useEffect(() => {
    const performSearch = async () => {
      if (query.length < 2) {
        setResults([])
        return
      }

      setIsLoading(true)
      try {
        const searchResults = await searchContent(query)
        setResults(searchResults)
      } catch (error) {
        console.error("Search error:", error)
        setResults([])
      } finally {
        setIsLoading(false)
      }
    }

    const debounceTimer = setTimeout(performSearch, 300)
    return () => clearTimeout(debounceTimer)
  }, [query])

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault()
        inputRef.current?.focus()
        setIsOpen(true)
      }
      if (event.key === "Escape") {
        setIsOpen(false)
        inputRef.current?.blur()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  const getIcon = (type: SearchResult['type']) => {
    switch (type) {
      case 'blog': return <BookOpen className="w-4 h-4" />
      case 'docs': return <FileText className="w-4 h-4" />
      case 'forum': return <MessageCircle className="w-4 h-4" />
      case 'technology': return <Code className="w-4 h-4" />
      default: return <FileText className="w-4 h-4" />
    }
  }

  const getTypeColor = (type: SearchResult['type']) => {
    switch (type) {
      case 'blog': return 'bg-blue-500/10 border-blue-500/30 text-blue-400'
      case 'docs': return 'bg-green-500/10 border-green-500/30 text-green-400'
      case 'forum': return 'bg-orange-500/10 border-orange-500/30 text-orange-400'
      case 'technology': return 'bg-purple-500/10 border-purple-500/30 text-purple-400'
      default: return 'bg-gray-500/10 border-gray-500/30 text-gray-400'
    }
  }

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-3 bg-black/80 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-400/40 focus:bg-black transition-colors"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("")
              setResults([])
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
        {!query && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <Badge variant="outline" className="text-xs bg-gray-500/10 border-gray-500/30 text-gray-400">
              ⌘K
            </Badge>
          </div>
        )}
      </div>

      {/* Search Results */}
      {isOpen && (query.length >= 2 || results.length > 0) && (
        <Card className="absolute top-full left-0 right-0 mt-2 bg-black/95 border border-white/10 rounded-xl backdrop-blur-sm z-50 max-h-96 overflow-y-auto">
          <CardContent className="p-4">
            {isLoading ? (
              <div className="text-center py-8">
                <div className="animate-spin w-6 h-6 border-2 border-orange-400 border-t-transparent rounded-full mx-auto mb-2"></div>
                <p className="text-gray-400 text-sm">Searching...</p>
              </div>
            ) : results.length > 0 ? (
              <div className="space-y-2">
                {results.map((result) => (
                  <Link
                    key={result.id}
                    href={result.url}
                    onClick={() => setIsOpen(false)}
                    className="block p-3 rounded-lg hover:bg-white/5 transition-colors group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-orange-400 mt-1">
                        {getIcon(result.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-medium group-hover:text-orange-400 transition-colors truncate">
                          {result.title}
                        </h3>
                        <p className="text-gray-400 text-sm mt-1 line-clamp-2">
                          {result.excerpt}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${getTypeColor(result.type)}`}
                          >
                            {result.type}
                          </Badge>
                          {result.category && (
                            <Badge variant="outline" className="text-xs bg-gray-500/10 border-gray-500/30 text-gray-400">
                              {result.category}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : query.length >= 2 ? (
              <div className="text-center py-8">
                <p className="text-gray-400">No results found for "{query}"</p>
                <p className="text-gray-500 text-sm mt-1">Try different keywords or check spelling</p>
              </div>
            ) : null}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
