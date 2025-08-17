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
  () => import('@/components/search/LocalSearch'),
  { 
    loading: () => <LoadingSkeleton />,
    ssr: false 
  }
)

export const LazyAlgoliaSearch = dynamic(
  () => import('@/components/search/AlgoliaSearchReal'),
  { 
    loading: () => <LoadingSkeleton />,
    ssr: false 
  }
)

export const LazyLivePlayground = dynamic(
  () => import('@/components/ui-kit/live-playground'),
  { 
    loading: () => <LoadingSkeleton />,
    ssr: false 
  }
)

export const LazyDigitalRainEffect = dynamic(
  () => import('@/components/digital-rain-effect'),
  { 
    loading: () => null,
    ssr: false 
  }
)

export const LazyPerformanceOptimizer = dynamic(
  () => import('@/components/seo/performance-optimizer').then(mod => ({ default: mod.PerformanceOptimizer })),
  { 
    loading: () => null,
    ssr: false 
  }
)

export const LazyWebVitalsTracker = dynamic(
  () => import('@/components/analytics/web-vitals-tracker'),
  { 
    loading: () => null,
    ssr: false 
  }
)

// Универсальная функция для создания lazy компонентов
export function createLazyComponent<P = {}>(
  importFn: () => Promise<{ default: ComponentType<P> }>,
  options?: {
    fallback?: ReactNode
    ssr?: boolean
  }
) {
  return dynamic(importFn, {
    loading: () => (options?.fallback as any) || <LoadingSkeleton />,
    ssr: options?.ssr ?? false
  })
} 