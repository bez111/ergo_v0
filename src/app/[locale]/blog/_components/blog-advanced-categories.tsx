"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Layers, FileText } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import type { BlogPost } from "../_lib/blog-data"

// Advanced category structure with subcategories
export const advancedCategories = [
  {
    id: 'all',
    name: 'ALL',
    description: 'Browse all content',
    icon: '📚',
    color: 'neutral'
  },
  {
    id: 'defi',
    name: 'DEFI',
    description: 'Decentralized Finance',
    icon: '💰',
    color: 'orange',
    subcategories: [
      { id: 'lending', name: 'Lending & Borrowing' },
      { id: 'dex', name: 'DEX Trading' },
      { id: 'yield', name: 'Yield Strategies' },
      { id: 'stablecoins', name: 'Stablecoins' }
    ]
  },
  {
    id: 'development',
    name: 'DEVELOPER',
    description: 'Technical Resources',
    icon: '💻',
    color: 'green',
    subcategories: [
      { id: 'tutorials', name: 'Tutorials' },
      { id: 'tools', name: 'Dev Tools' },
      { id: 'sdks', name: 'SDKs & APIs' },
      { id: 'ergoscript', name: 'ErgoScript' }
    ]
  },
  {
    id: 'technology',
    name: 'TECHNOLOGY',
    description: 'Core Tech & Research',
    icon: '⚙️',
    color: 'blue',
    subcategories: [
      { id: 'blockchain', name: 'Blockchain Core' },
      { id: 'cryptography', name: 'Cryptography' },
      { id: 'consensus', name: 'Consensus' },
      { id: 'scaling', name: 'Scaling' }
    ]
  },
  {
    id: 'privacy',
    name: 'PRIVACY',
    description: 'Privacy & Zero-Knowledge',
    icon: '🔒',
    color: 'indigo',
    subcategories: [
      { id: 'sigma-protocols', name: 'Sigma Protocols' },
      { id: 'zero-knowledge', name: 'Zero Knowledge' },
      { id: 'mixers', name: 'Mixers' },
      { id: 'confidential', name: 'Confidential Transactions' }
    ]
  },
  {
    id: 'ecosystem',
    name: 'ECOSYSTEM',
    description: 'Community & Growth',
    icon: '🌐',
    color: 'indigo',
    subcategories: [
      { id: 'community', name: 'Community' },
      { id: 'partnerships', name: 'Partnerships' },
      { id: 'grants', name: 'Grants' },
      { id: 'events', name: 'Events' }
    ]
  },
  {
    id: 'research',
    name: 'REPORTS',
    description: 'Analysis & Research',
    icon: '📊',
    color: 'purple',
    subcategories: [
      { id: 'market', name: 'Market Analysis' },
      { id: 'technical', name: 'Technical Reports' },
      { id: 'case-studies', name: 'Case Studies' },
      { id: 'whitepapers', name: 'Whitepapers' }
    ]
  },
  {
    id: 'mining',
    name: 'MINING',
    description: 'Mining Resources',
    icon: '⛏️',
    color: 'yellow',
    subcategories: [
      { id: 'guides', name: 'Mining Guides' },
      { id: 'hardware', name: 'Hardware' },
      { id: 'pools', name: 'Mining Pools' },
      { id: 'profitability', name: 'Profitability' }
    ]
  }
]

// Content types for filtering
export const contentTypes = [
  { id: 'all', name: 'All Types', icon: <FileText className="w-4 h-4" /> },
  { id: 'article', name: 'Articles', icon: '📝' },
  { id: 'tutorial', name: 'Tutorials', icon: '📚' },
  { id: 'report', name: 'Reports', icon: '📊' },
  { id: 'case-study', name: 'Case Studies', icon: '🔍' },
  { id: 'announcement', name: 'News', icon: '📢' },
  { id: 'guide', name: 'Guides', icon: '🗺️' }
]

interface BlogAdvancedCategoriesProps {
  posts: BlogPost[]
  selectedCategory: string
  selectedSubcategory?: string
  selectedType?: string
  onCategoryChange: (category: string, subcategory?: string) => void
  onTypeChange?: (type: string) => void
}

export function BlogAdvancedCategories({
  posts,
  selectedCategory,
  selectedSubcategory,
  selectedType = 'all',
  onCategoryChange,
  onTypeChange
}: BlogAdvancedCategoriesProps) {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  // Count posts per category
  const categoryCounts = React.useMemo(() => {
    const counts: Record<string, number> = { all: posts.length }
    posts.forEach(post => {
      const cat = post.category.toLowerCase()
      counts[cat] = (counts[cat] || 0) + 1
    })
    return counts
  }, [posts])

  return (
    <div className="space-y-4">
      {/* Main Categories - Horizontal Scroll on Mobile */}
      <div className="relative">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {advancedCategories.map((category) => {
            const isActive = selectedCategory === category.id
            const hasSubcategories = category.subcategories && category.subcategories.length > 0
            const postCount = categoryCounts[category.id] || 0

            return (
              <div key={category.id} className="relative">
                {hasSubcategories ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant={isActive ? "default" : "outline"}
                        className={`
                          relative min-w-fit whitespace-nowrap transition-all duration-300
                          ${isActive 
                            ? 'bg-orange-500 text-white border-orange-500 hover:bg-orange-600' 
                            : 'bg-neutral-900/50 text-neutral-300 border-neutral-700 hover:bg-neutral-800/60 hover:text-white'
                          }
                        `}
                        onMouseEnter={() => setHoveredCategory(category.id)}
                        onMouseLeave={() => setHoveredCategory(null)}
                      >
                        <span className="mr-1">{category.icon}</span>
                        <span className="font-medium">{category.name}</span>
                        {postCount > 0 && (
                          <Badge 
                            variant="secondary" 
                            className={`ml-2 ${
                              isActive 
                                ? 'bg-orange-600 text-white border-orange-700' 
                                : 'bg-neutral-800 text-neutral-400 border-neutral-700'
                            }`}
                          >
                            {postCount}
                          </Badge>
                        )}
                        <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${
                          hoveredCategory === category.id ? 'rotate-180' : ''
                        }`} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent 
                      align="start" 
                      className="w-56 bg-neutral-900 border-neutral-800"
                    >
                      <DropdownMenuLabel className="text-neutral-400">
                        {category.description}
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator className="bg-neutral-800" />
                      <DropdownMenuItem
                        onClick={() => onCategoryChange(category.id)}
                        className="cursor-pointer hover:bg-neutral-800 focus:bg-neutral-800"
                      >
                        <Layers className="mr-2 h-4 w-4" />
                        All {category.name}
                      </DropdownMenuItem>
                      {category.subcategories?.map((sub) => (
                        <DropdownMenuItem
                          key={sub.id}
                          onClick={() => onCategoryChange(category.id, sub.id)}
                          className={`
                            cursor-pointer pl-8
                            ${selectedSubcategory === sub.id 
                              ? 'bg-orange-500/20 text-orange-400' 
                              : 'hover:bg-neutral-800 focus:bg-neutral-800'
                            }
                          `}
                        >
                          {sub.name}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Button
                    variant={isActive ? "default" : "outline"}
                    onClick={() => onCategoryChange(category.id)}
                    className={`
                      min-w-fit whitespace-nowrap transition-all duration-300
                      ${isActive 
                        ? 'bg-orange-500 text-white border-orange-500 hover:bg-orange-600' 
                        : 'bg-neutral-900/50 text-neutral-300 border-neutral-700 hover:bg-neutral-800/60 hover:text-white'
                      }
                    `}
                  >
                    <span className="mr-1">{category.icon}</span>
                    <span className="font-medium">{category.name}</span>
                    {postCount > 0 && (
                      <Badge 
                        variant="secondary" 
                        className={`ml-2 ${
                          isActive 
                            ? 'bg-orange-600 text-white border-orange-700' 
                            : 'bg-neutral-800 text-neutral-400 border-neutral-700'
                        }`}
                      >
                        {postCount}
                      </Badge>
                    )}
                  </Button>
                )}
              </div>
            )
          })}
        </div>

      </div>

      {/* Active Subcategory Display */}
      <AnimatePresence>
        {selectedSubcategory && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-2 text-sm"
          >
            <span className="text-neutral-500">Filtering by:</span>
            <Badge 
              variant="outline" 
              className="bg-orange-500/20 text-orange-400 border-orange-500/30"
            >
              {advancedCategories
                .find(c => c.id === selectedCategory)
                ?.subcategories?.find(s => s.id === selectedSubcategory)?.name}
              <button
                onClick={() => onCategoryChange(selectedCategory)}
                className="ml-2 hover:text-orange-300"
              >
                ×
              </button>
            </Badge>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content Type Filter (Optional) */}
      {onTypeChange && (
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm text-neutral-500">Type:</span>
          {contentTypes.map((type) => (
            <Badge
              key={type.id}
              variant={selectedType === type.id ? "default" : "outline"}
              className={`
                cursor-pointer transition-colors
                ${selectedType === type.id
                  ? 'bg-blue-500 text-white hover:bg-blue-600'
                  : 'bg-neutral-800/50 text-neutral-400 hover:bg-neutral-700/60 hover:text-white'
                }
              `}
              onClick={() => onTypeChange(type.id)}
            >
              {typeof type.icon === 'string' ? type.icon : type.icon} {type.name}
            </Badge>
          ))}
        </div>
      )}
    </div>
  )
}

// Add custom scrollbar hide styles
const scrollbarHideStyles = `
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
`

if (typeof window !== 'undefined') {
  const style = document.createElement('style')
  style.textContent = scrollbarHideStyles
  document.head.appendChild(style)
}
