'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Loading skeleton component
const LoadingSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-64 bg-neutral-800 rounded-lg"></div>
  </div>
)

// Lazy load heavy components for better LCP
export const LazyHeroSection = dynamic(
  () => import('@/src/components/home/hero-section'),
  {
    loading: () => <LoadingSkeleton />,
    ssr: true,
  }
)

export const LazyCodeBlock = dynamic(
  () => import('@/src/components/ui/code-block'),
  {
    loading: () => <div className="h-32 bg-neutral-900 rounded-lg animate-pulse" />,
    ssr: false,
  }
)

export const LazyChart = dynamic(
  () => import('@/components/ui/chart'),
  {
    loading: () => <LoadingSkeleton />,
    ssr: false,
  }
)

export const LazyInteractiveDemo = dynamic(
  () => import('@/components/home/interactive-demo'),
  {
    loading: () => <LoadingSkeleton />,
    ssr: false,
  }
)

// Wrapper for lazy loading with Suspense
export function LazyLoad({ 
  children, 
  fallback = <LoadingSkeleton /> 
}: { 
  children: React.ReactNode
  fallback?: React.ReactNode 
}) {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  )
}

// Priority loading for above-the-fold content
export function PriorityContent({ children }: { children: React.ReactNode }) {
  return (
    <div data-priority="high">
      {children}
    </div>
  )
}

// Defer loading for below-the-fold content
export function DeferredContent({ children }: { children: React.ReactNode }) {
  return (
    <div data-priority="low" loading="lazy">
      {children}
    </div>
  )
} 