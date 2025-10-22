import dynamic from 'next/dynamic'
import { ComponentType, ReactNode } from 'react'

interface LazyLoaderProps {
  fallback?: ReactNode
}

// Скелетон для загрузки
export const LoadingSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-4 bg-neutral-800 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-neutral-800 rounded w-1/2"></div>
  </div>
)

// Lazy load тяжелых компонентов
export const LazyLocalSearch = dynamic(
  () => import('@/src/components/search/LocalSearch').then(mod => ({ default: mod.LocalSearch })),
  { 
    loading: () => <LoadingSkeleton />,
    ssr: true 
  }
)

export const LazyAlgoliaSearch = dynamic(
  () => import('@/src/components/search/AlgoliaSearchReal').then(mod => ({ default: mod.AlgoliaSearchReal })),
  { 
    loading: () => <LoadingSkeleton />,
    ssr: true 
  }
)

export const LazyLivePlayground = dynamic(
  () => import('@/src/components/ui-kit/live-playground').then(mod => ({ default: mod.LivePlayground })),
  { 
    loading: () => <LoadingSkeleton />,
    ssr: true 
  }
)

export const LazyDigitalRainEffect = dynamic(
  () => import('@/src/components/digital-rain-effect').then(mod => ({ default: mod.DigitalRainEffect })),
  { 
    loading: () => null,
    ssr: true 
  }
)

export const LazyPerformanceOptimizer = dynamic(
  () => import('@/src/components/seo/performance-optimizer').then(mod => ({ default: mod.PerformanceOptimizer })),
  { 
    loading: () => null,
    ssr: true 
  }
)

export const LazyWebVitalsTracker = dynamic(
  () => import('@/src/components/analytics/web-vitals-tracker').then(mod => ({ default: mod.WebVitalsTracker })),
  { 
    loading: () => null,
    ssr: true 
  }
)

// Универсальная функция для создания lazy компонентов
export function createLazyComponent<P = Record<string, unknown>>(
  importFn: () => Promise<{ default: ComponentType<P> }>,
  options?: {
    fallback?: ReactNode
    ssr?: boolean
  }
) {
  return dynamic(importFn, {
    loading: () => (options?.fallback as ReactNode) || <LoadingSkeleton />,
    ssr: options?.ssr ?? true
  })
} 