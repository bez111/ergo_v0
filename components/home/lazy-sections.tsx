"use client"

import dynamic from "next/dynamic"

// Lazy load некритичные компоненты
export const LazyEcosystemShowcase = dynamic(() => import("@/components/home/ecosystem-showcase").then(mod => ({ default: mod.EcosystemShowcase })), {
  loading: () => <div className="h-96 bg-neutral-900/50 animate-pulse rounded-lg mx-4" />,
  ssr: true
})

export const LazyAudiencePaths = dynamic(() => import("@/components/home/audience-paths").then(mod => ({ default: mod.AudiencePaths })), {
  loading: () => <div className="h-96 bg-neutral-900/50 animate-pulse rounded-lg mx-4" />,
  ssr: true
})

export const LazyBlogSection = dynamic(() => import("@/components/home/blog-section").then(mod => ({ default: mod.BlogSection })), {
  loading: () => <div className="h-64 bg-neutral-900/50 animate-pulse rounded-lg mx-4" />,
  ssr: true
})

export const LazySubscribeSection = dynamic(() => import("@/components/home/subscribe-section").then(mod => ({ default: mod.SubscribeSection })), {
  loading: () => <div className="h-32 bg-neutral-900/50 animate-pulse rounded-lg mx-4" />,
  ssr: true
}) 