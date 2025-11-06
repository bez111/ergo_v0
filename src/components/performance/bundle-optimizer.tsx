import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { useEffect } from 'react'

// Optimized loading skeletons
const SkeletonCard = () => (
  <div className="animate-pulse bg-neutral-800 rounded-lg h-48 w-full" />
)

const SkeletonTable = () => (
  <div className="animate-pulse space-y-4">
    <div className="h-8 bg-neutral-800 rounded w-full" />
    <div className="h-6 bg-neutral-800 rounded w-3/4" />
    <div className="h-6 bg-neutral-800 rounded w-1/2" />
  </div>
)

// Critical components (load immediately)
export const CriticalComponents = {
  HeroSection: dynamic(() => import('@/src/components/home/hero-section').then(mod => ({ default: mod.HeroSection })), {
    ssr: true // Critical for LCP
  }),
  
  Navigation: dynamic(() => import('@/components/navigation').then(mod => ({ default: mod.Navigation })), {
    ssr: true // Critical for interaction
  })
}

// Above-the-fold components (high priority)
export const AboveFoldComponents = {
  QuickActions: dynamic(() => import('@/src/components/home/quick-actions').then(mod => ({ default: mod.QuickActions })), {
    loading: () => <SkeletonCard />,
    ssr: true
  }),
  
  CorePillars: dynamic(() => import('@/src/components/home/core-pillars').then(mod => ({ default: mod.CorePillars })), {
    loading: () => <SkeletonCard />,
    ssr: true
  })
}

// Below-the-fold components (lazy load)
export const BelowFoldComponents = {
  // Heavy animation components
  Differentiation: dynamic(() => import('@/src/components/home/differentiation').then(mod => ({ default: mod.Differentiation })), {
    loading: () => <SkeletonCard />,
    ssr: true
  }),
  
  EcosystemShowcase: dynamic(() => import('@/src/components/home/ecosystem-showcase').then(mod => ({ default: mod.EcosystemShowcase })), {
    loading: () => <SkeletonCard />,
    ssr: true
  }),
  
  // Interactive components
  BlogSection: dynamic(() => import('@/src/components/home/blog-section').then(mod => ({ default: mod.BlogSection })), {
    loading: () => <SkeletonCard />,
    ssr: true
  })
}

// Heavy UI components (load on interaction)
export const InteractiveComponents = {
  ComparisonTable: dynamic(() => import('@/app/start/comparison/ComparisonClient').then(mod => ({ default: mod.ComparisonTable })), {
    loading: () => <SkeletonTable />,
    ssr: true
  }),
  
  SearchInterface: dynamic(() => import('@/components/search/search-interface').then(mod => ({ default: mod.SearchInterface })), {
    loading: () => <SkeletonCard />,
    ssr: true
  }),
  
  LivePlayground: dynamic(() => import('@/src/components/ui-kit/live-playground').then(mod => ({ default: mod.LivePlayground })), {
    loading: () => <SkeletonCard />,
    ssr: true
  })
}

// Animation components (load after critical path)
export const AnimationComponents = {
  DigitalRain: dynamic(() => import('@/components/effects/digital-rain').then(mod => ({ default: mod.DigitalRain })), {
    loading: () => null,
    ssr: true
  }),
  
  ParticleEffect: dynamic(() => import('@/components/effects/particles').then(mod => ({ default: mod.ParticleEffect })), {
    loading: () => null,
    ssr: true
  }),
  
  MotionWrapper: dynamic(() => 
    import('framer-motion').then(mod => ({ default: mod.motion.div })),
  {
    loading: () => <div />,
    ssr: true
  })
}

// Icon optimization (tree-shaking)
export const OptimizedIcons = {
  // Instead of importing entire lucide-react
  ArrowRight: dynamic(() => import('lucide-react/dist/esm/icons/arrow-right')),
  Shield: dynamic(() => import('lucide-react/dist/esm/icons/shield')),
  Code: dynamic(() => import('lucide-react/dist/esm/icons/code')),
  Users: dynamic(() => import('lucide-react/dist/esm/icons/users')),
  Zap: dynamic(() => import('lucide-react/dist/esm/icons/zap')),
  // Add only used icons
}

// Progressive loading strategy
export function ProgressiveLoader({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      {children}
    </Suspense>
  )
}

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

// Preload strategy for critical routes
export function RoutePreloader() {
  useEffect(() => {
    // Preload likely next pages after initial load
    const preloadRoutes = ['/use', '/technology', '/docs', '/ecosystem']
    
    // Use requestIdleCallback for non-critical preloading
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        preloadRoutes.forEach(route => {
          import(`@/app${route}/page`)
        })
      })
    }
  }, [])

  return null
} 