"use client"

import React from 'react'

interface PerformanceOptimizationsProps {
  heroImage?: {
    src: string
    srcSet?: string
    width: number
    height: number
    alt: string
    format?: 'avif' | 'webp' | 'png' | 'jpg'
  }
  preconnectDomains?: string[]
  criticalCSS?: string
}

export function PerformanceOptimizations({ 
  heroImage, 
  preconnectDomains = [],
  criticalCSS 
}: PerformanceOptimizationsProps) {
  return (
    <>
      {/* Google Fonts preconnect removed - fonts are self-hosted via next/font */}
      <link rel="dns-prefetch" href="https://ergoblockchain.org" />
      
      {preconnectDomains.map(domain => (
        <link key={domain} rel="preconnect" href={domain} />
      ))}

      {/* Hero image preload for LCP optimization */}
      {heroImage && (
        <>
          <link 
            rel="preload" 
            as="image" 
            href={heroImage.src}
            {...(heroImage.srcSet && { imageSrcSet: heroImage.srcSet })}
            fetchPriority="high"
          />
          {/* Preload AVIF/WebP versions if available */}
          {heroImage.format === 'avif' && (
            <link 
              rel="preload" 
              as="image" 
              href={heroImage.src.replace(/\.(png|jpg|jpeg)$/, '.avif')}
              type="image/avif"
              fetchPriority="high"
            />
          )}
          {heroImage.format === 'webp' && (
            <link 
              rel="preload" 
              as="image" 
              href={heroImage.src.replace(/\.(png|jpg|jpeg)$/, '.webp')}
              type="image/webp"
              fetchPriority="high"
            />
          )}
        </>
      )}

      {/* Critical CSS inline */}
      {criticalCSS && (
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
      )}

      {/* Font display optimization handled by next/font in layout.tsx */}
    </>
  )
}
