// "use client"

// import { useState } from "react"
// import { BlogSearch } from "./blog-search"
// import { BlogTags } from "./blog-tags"
// import { BlogCategories } from "./blog-categories"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { SlidersHorizontal, X, RotateCcw } from "lucide-react"
// import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
// import type { BlogPost } from "../_lib/blog-data"

// interface BlogFiltersEnhancedProps {
//   posts: BlogPost[]
//   searchQuery: string
//   selectedCategory: string
//   selectedTags: string[]
//   onSearchChange: (query: string) => void
//   onCategoryChange: (category: string) => void
//   onTagsChange: (tags: string[]) => void
//   className?: string
// }

// export function BlogFiltersEnhanced({
//   posts,
//   searchQuery,
//   selectedCategory,
//   selectedTags,
//   onSearchChange,
//   onCategoryChange,
//   onTagsChange,
//   className = ""
// }: BlogFiltersEnhancedProps) {
//   const [isFiltersOpen, setIsFiltersOpen] = useState(false)

//   const hasActiveFilters = searchQuery || selectedCategory !== 'all' || selectedTags.length > 0
//   const activeFiltersCount = 
//     (searchQuery ? 1 : 0) + 
//     (selectedCategory !== 'all' ? 1 : 0) + 
//     selectedTags.length

//   const handleClearAll = () => {
//     onSearchChange("")
//     onCategoryChange("all")
//     onTagsChange([])
//   }

//   return (
//     <div className={`space-y-6 ${className}`}>
//       {/* Search Bar - Always Visible */}
//       <div className="animate-fade-in">
//         <BlogSearch
//           searchQuery={searchQuery}
//           onSearchChange={onSearchChange}
//           placeholder="Search articles, topics, or keywords..."
//         />
//       </div>

//       {/* Quick Filters Toggle */}
//       <div className="flex items-center justify-between animate-fade-in" style={{ animationDelay: '0.1s' }}>
//         <Collapsible open={isFiltersOpen} onOpenChange={setIsFiltersOpen}>
//           <CollapsibleTrigger asChild>
//             <Button
//               variant="outline"
//               className="flex items-center gap-2 bg-neutral-900/60 border-neutral-700 text-white hover:bg-neutral-800/60 hover:border-neutral-600"
//             >
//               <SlidersHorizontal className="w-4 h-4" />
//               <span>Filters</span>
//               {activeFiltersCount > 0 && (
//                 <Badge variant="secondary" className="bg-orange-500/20 text-orange-400 border-orange-500/30">
//                   {activeFiltersCount}
//                 </Badge>
//               )}
//             </Button>
//           </CollapsibleTrigger>

//           <CollapsibleContent className="mt-4 space-y-6 animate-fade-in">
//             {/* Categories */}
//             <BlogCategories
//               posts={posts}
//               selectedCategory={selectedCategory}
//               onCategoryChange={onCategoryChange}
//             />

//             {/* Tags */}
//             <BlogTags
//               posts={posts}
//               selectedTags={selectedTags}
//               onTagsChange={onTagsChange}
//             />
//           </CollapsibleContent>
//         </Collapsible>

//         {/* Clear All Filters */}
//         {hasActiveFilters && (
//           <Button
//             variant="ghost"
//             size="sm"
//             onClick={handleClearAll}
//             className="flex items-center gap-2 text-neutral-400 hover:text-white animate-scale-in"
//           >
//             <RotateCcw className="w-4 h-4" />
//             <span>Clear all</span>
//           </Button>
//         )}
//       </div>

//       {/* Active Filters Summary */}
//       {hasActiveFilters && (
//         <div className="p-4 bg-neutral-900/60 border border-neutral-700 rounded-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
//           <div className="flex items-center justify-between mb-3">
//             <div className="flex items-center gap-2">
//               <SlidersHorizontal className="w-4 h-4 text-orange-400" />
//               <span className="text-sm font-medium text-white">Active Filters</span>
//             </div>
//             <Button
//               variant="ghost"
//               size="sm"
//               onClick={handleClearAll}
//               className="text-xs text-neutral-400 hover:text-white h-6 px-2"
//             >
//               <X className="w-3 h-3" />
//             </Button>
//           </div>

//           <div className="flex flex-wrap gap-2">
//             {searchQuery && (
//               <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
//                 Search: "{searchQuery}"
//                 <button
//                   onClick={() => onSearchChange("")}
//                   className="ml-1 hover:text-blue-300"
//                   aria-label="Clear search"
//                 >
//                   <X className="w-3 h-3" />
//                 </button>
//               </Badge>
//             )}
            
//             {selectedCategory !== 'all' && (
//               <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
//                 Category: {selectedCategory}
//                 <button
//                   onClick={() => onCategoryChange('all')}
//                   className="ml-1 hover:text-purple-300"
//                   aria-label="Clear category filter"
//                 >
//                   <X className="w-3 h-3" />
//                 </button>
//               </Badge>
//             )}
            
//             {selectedTags.map(tag => (
//               <Badge key={tag} className="bg-green-500/20 text-green-400 border-green-500/30">
//                 Tag: {tag}
//                 <button
//                   onClick={() => onTagsChange(selectedTags.filter(t => t !== tag))}
//                   className="ml-1 hover:text-green-300"
//                   aria-label={`Remove ${tag} tag filter`}
//                 >
//                   <X className="w-3 h-3" />
//                 </button>
//               </Badge>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }
