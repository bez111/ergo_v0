/* eslint-disable  */
import { SkeletonCard, SkeletonHero, SkeletonPagination } from "@/components/ui/skeleton"

// Pre-computed widths to avoid Math.random() during render
const CATEGORY_WIDTHS = [72, 88, 65, 95, 78, 82];
const TAG_WIDTHS = [52, 45, 68, 58, 42, 55, 62, 48];

export function BlogPageSkeleton() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Skip Link */}
      <a href="#main" className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-orange-500 text-white px-4 py-2 rounded-md z-50">
        Skip to main content
      </a>

      <div className="container mx-auto px-4 py-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-6 animate-fade-in">
          <div className="space-y-4">
            <div className="h-16 bg-gradient-to-r from-neutral-800/60 to-neutral-700/60 rounded-lg animate-pulse mx-auto max-w-2xl" />
            <div className="h-6 bg-neutral-800/60 rounded-lg animate-pulse mx-auto max-w-lg" />
          </div>
        </div>

        {/* Search and Filters */}
        <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          {/* Search Bar */}
          <div className="relative">
            <div className="h-12 bg-neutral-900/60 border border-neutral-700 rounded-lg animate-pulse" />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-neutral-600 rounded animate-pulse" />
          </div>

          {/* Filter Toggle */}
          <div className="flex items-center justify-between">
            <div className="h-10 w-24 bg-neutral-800/60 rounded-lg animate-pulse" />
            <div className="h-6 w-16 bg-neutral-800/60 rounded-full animate-pulse" />
          </div>

          {/* Categories Row */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-neutral-600 rounded animate-pulse" />
              <div className="h-4 w-20 bg-neutral-700 rounded animate-pulse" />
            </div>
            <div className="flex gap-2 flex-wrap">
              {CATEGORY_WIDTHS.map((width, i) => (
                <div 
                  key={i} 
                  className="h-8 bg-neutral-800/60 rounded-full animate-pulse"
                  style={{ width: `${width}px` }}
                />
              ))}
            </div>
          </div>

          {/* Tags Row */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-neutral-600 rounded animate-pulse" />
              <div className="h-4 w-16 bg-neutral-700 rounded animate-pulse" />
            </div>
            <div className="flex gap-2 flex-wrap">
              {TAG_WIDTHS.map((width, i) => (
                <div 
                  key={i} 
                  className="h-7 bg-neutral-800/60 rounded-full animate-pulse"
                  style={{ width: `${width}px` }}
                />
              ))}
              <div className="h-7 w-12 bg-neutral-700/60 border border-dashed border-neutral-600 rounded-full animate-pulse" />
            </div>
          </div>
        </div>

        {/* Featured Post */}
        <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <SkeletonHero />
        </div>

        {/* Stats Bar */}
        <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="flex justify-between items-center p-6 rounded-xl border border-neutral-700 bg-neutral-900/50 backdrop-blur-sm">
            <div className="flex gap-8">
              <div className="text-center">
                <div className="h-8 w-16 bg-neutral-800/60 rounded animate-pulse mb-2" />
                <div className="h-4 w-12 bg-neutral-800/60 rounded animate-pulse" />
              </div>
              <div className="text-center">
                <div className="h-8 w-16 bg-neutral-800/60 rounded animate-pulse mb-2" />
                <div className="h-4 w-12 bg-neutral-800/60 rounded animate-pulse" />
              </div>
              <div className="text-center">
                <div className="h-8 w-16 bg-neutral-800/60 rounded animate-pulse mb-2" />
                <div className="h-4 w-12 bg-neutral-800/60 rounded animate-pulse" />
              </div>
            </div>
            <div className="h-10 w-32 bg-neutral-800/60 rounded-lg animate-pulse" />
          </div>
        </div>

        {/* Blog Grid */}
        <section 
          id="main" 
          aria-labelledby="blog-posts" 
          aria-live="polite" 
          aria-busy="true"
          className="animate-fade-in transition-opacity duration-200"
          style={{ animationDelay: '0.4s' }}
        >
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div 
                key={i} 
                className="animate-scale-in"
                style={{ animationDelay: `${0.5 + i * 0.1}s` }}
              >
                <SkeletonCard />
              </div>
            ))}
          </div>
        </section>

        {/* Pagination */}
        <div className="animate-fade-in" style={{ animationDelay: '1.1s' }}>
          <SkeletonPagination />
        </div>

        {/* Newsletter Signup */}
        <div className="animate-scale-in" style={{ animationDelay: '1.2s' }}>
          <div className="rounded-2xl border border-neutral-700 bg-neutral-900/60 backdrop-blur-sm p-8">
            <div className="text-center space-y-6">
              <div className="space-y-3">
                <div className="h-8 bg-neutral-800/60 rounded-lg animate-pulse mx-auto max-w-sm" />
                <div className="h-4 bg-neutral-800/60 rounded-lg animate-pulse mx-auto max-w-md" />
              </div>
              <div className="flex gap-4 max-w-md mx-auto">
                <div className="flex-1 h-12 bg-neutral-800/60 rounded-lg animate-pulse" />
                <div className="h-12 w-32 bg-orange-500/60 rounded-lg animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Related Content */}
        <div className="animate-fade-in" style={{ animationDelay: '1.3s' }}>
          <div className="space-y-6">
            <div className="h-8 bg-neutral-800/60 rounded-lg animate-pulse max-w-xs" />
            <div className="grid gap-6 md:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div 
                  key={i}
                  className="rounded-xl border border-neutral-700 bg-neutral-900/50 backdrop-blur-sm p-6 animate-scale-in"
                  style={{ animationDelay: `${1.4 + i * 0.1}s` }}
                >
                  <div className="space-y-4">
                    <div className="h-6 bg-neutral-800/60 rounded animate-pulse" />
                    <div className="space-y-2">
                      <div className="h-4 bg-neutral-800/60 rounded animate-pulse" />
                      <div className="h-4 bg-neutral-800/60 rounded animate-pulse w-3/4" />
                    </div>
                    <div className="h-10 bg-orange-500/60 rounded-lg animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Compact skeleton for quick loading states
export function BlogCompactSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="h-12 bg-neutral-800/60 rounded-lg animate-pulse mx-auto max-w-md" />
          <div className="h-4 bg-neutral-800/60 rounded-lg animate-pulse mx-auto max-w-sm" />
        </div>

        {/* Quick Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="space-y-4 p-6 rounded-xl border border-neutral-700 bg-neutral-900/50">
              <div className="h-32 bg-neutral-800/60 rounded animate-pulse" />
              <div className="space-y-2">
                <div className="h-4 bg-neutral-800/60 rounded animate-pulse" />
                <div className="h-4 bg-neutral-800/60 rounded animate-pulse w-3/4" />
              </div>
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 bg-neutral-800/60 rounded-full animate-pulse" />
                <div className="h-4 bg-neutral-800/60 rounded animate-pulse w-20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
