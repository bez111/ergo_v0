import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Loading skeletons
const LoadingSkeleton = () => (
  <div className="animate-pulse bg-neutral-800 rounded h-32"></div>
)

// Optimized dynamic imports with preload
export const LazyComponents = {
  // Search components
  LocalSearch: dynamic(() => import('@/components/search/LocalSearch').then(mod => ({ default: mod.LocalSearch })),
  {
    loading: () => <LoadingSkeleton />,
    ssr: true
  }),
  
  // Heavy animations
  DigitalRainEffect: dynamic(() => import('@/components/digital-rain-effect').then(mod => ({ default: mod.DigitalRainEffect })),
  {
    loading: () => null,
    ssr: true
  }),
  
  // Analytics (load after interaction)
  WebVitalsTracker: dynamic(() => import('@/components/analytics/web-vitals-tracker').then(mod => ({ default: mod.WebVitalsTracker })),
  {
    loading: () => null,
    ssr: true
  }),
  
  // SEO components
  PerformanceOptimizer: dynamic(
    () => import('@/components/seo/performance-optimizer').then(mod => ({ 
      default: mod.PerformanceOptimizer 
    })),
    { ssr: true }
  ),
  
  // Heavy UI components
  LivePlayground: dynamic(() => import('@/components/ui-kit/live-playground').then(mod => ({ default: mod.LivePlayground })),
  {
    loading: () => <LoadingSkeleton />,
    ssr: true
  })
}

// Preload critical components
export const preloadCriticalComponents = () => {
  // Preload search after 2 seconds
  setTimeout(() => {
    import('@/components/search/LocalSearch')
  }, 2000)
  
  // Preload analytics after 5 seconds
  setTimeout(() => {
    import('@/components/analytics/web-vitals-tracker')
  }, 5000)
}

// Image optimization helper
export const OptimizedImage = dynamic(() => import('next/image'), {
  loading: () => <div className="bg-neutral-800 animate-pulse" />,
  ssr: true
}) 