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
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
            // @ts-expect-error - fetchPriority is valid but not in React types yet
            fetchPriority="high"
          />
          {/* Preload AVIF/WebP versions if available */}
          {heroImage.format === 'avif' && (
            <link 
              rel="preload" 
              as="image" 
              href={heroImage.src.replace(/\.(png|jpg|jpeg)$/, '.avif')}
              type="image/avif"
              // @ts-expect-error - fetchPriority is valid but not in React types yet
              fetchPriority="high"
            />
          )}
          {heroImage.format === 'webp' && (
            <link 
              rel="preload" 
              as="image" 
              href={heroImage.src.replace(/\.(png|jpg|jpeg)$/, '.webp')}
              type="image/webp"
              // @ts-expect-error - fetchPriority is valid but not in React types yet
              fetchPriority="high"
            />
          )}
        </>
      )}

      {/* Critical CSS inline */}
      {criticalCSS && (
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
      )}

      {/* Font display optimization */}
      <style>{`
        @font-face {
          font-family: 'Inter';
          font-display: swap;
        }
        @font-face {
          font-family: 'JetBrains Mono';
          font-display: swap;
        }
      `}</style>
    </>
  )
}
