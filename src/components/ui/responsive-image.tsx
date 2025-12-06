"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface ResponsiveImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  imgClassName?: string
  priority?: boolean
  loading?: "eager" | "lazy"
  sizes?: string
  aspectRatio?: string
  objectFit?: "cover" | "contain" | "fill" | "none"
  fallbackBg?: string
}

/**
 * ResponsiveImage component with automatic WebP/AVIF format selection
 * Uses <picture> element for progressive enhancement
 * 
 * Features:
 * - Automatic AVIF/WebP/PNG fallback chain
 * - Loading skeleton for CLS prevention
 * - Error state handling
 * - Aspect ratio preservation
 */
export function ResponsiveImage({
  src,
  alt,
  width,
  height,
  className = "",
  imgClassName = "",
  priority = false,
  loading = "lazy",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  aspectRatio,
  objectFit = "cover",
  fallbackBg = "rgb(23, 23, 23)",
}: ResponsiveImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Generate WebP and AVIF paths from original source
  const getOptimizedPath = (originalSrc: string, format: "webp" | "avif"): string => {
    // Handle external URLs - return original
    if (originalSrc.startsWith("http://") || originalSrc.startsWith("https://")) {
      return originalSrc
    }
    
    // Replace extension with new format
    const extensionMatch = originalSrc.match(/\.(png|jpg|jpeg)$/i)
    if (extensionMatch) {
      return originalSrc.replace(extensionMatch[0], `.${format}`)
    }
    
    return originalSrc
  }

  const avifSrc = getOptimizedPath(src, "avif")
  const webpSrc = getOptimizedPath(src, "webp")
  
  // Check if source is external (can't use optimized versions)
  const isExternal = src.startsWith("http://") || src.startsWith("https://")
  
  // Calculate aspect ratio
  const calculatedAspectRatio = aspectRatio || (width && height ? `${width}/${height}` : "16/9")

  const objectFitClass = {
    cover: "object-cover",
    contain: "object-contain",
    fill: "object-fill",
    none: "object-none",
  }[objectFit]

  return (
    <div 
      className={cn("relative overflow-hidden", className)}
      style={{ 
        aspectRatio: calculatedAspectRatio,
        backgroundColor: fallbackBg,
      }}
    >
      {/* Loading skeleton */}
      {isLoading && !hasError && (
        <div 
          className="absolute inset-0 skeleton"
          aria-hidden="true"
        />
      )}

      {/* Error state */}
      {hasError && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-neutral-900 border border-neutral-800"
          role="img"
          aria-label={`Failed to load image: ${alt}`}
        >
          <div className="text-center text-neutral-500">
            <svg 
              className="w-10 h-10 mx-auto mb-2" 
              fill="currentColor" 
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path 
                fillRule="evenodd" 
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" 
                clipRule="evenodd" 
              />
            </svg>
            <span className="text-xs font-mono uppercase tracking-wider">Image unavailable</span>
          </div>
        </div>
      )}

      {/* Picture element with format fallbacks */}
      {!hasError && (
        <picture>
          {/* AVIF - best compression, modern browsers */}
          {!isExternal && (
            <source 
              srcSet={avifSrc} 
              type="image/avif"
              sizes={sizes}
            />
          )}
          
          {/* WebP - good compression, wide support */}
          {!isExternal && (
            <source 
              srcSet={webpSrc} 
              type="image/webp"
              sizes={sizes}
            />
          )}
          
          {/* Original format fallback */}
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? "eager" : loading}
            decoding="async"
            fetchPriority={priority ? "high" : "auto"}
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false)
              setHasError(true)
            }}
            className={cn(
              "w-full h-full transition-opacity duration-500",
              objectFitClass,
              isLoading ? "opacity-0" : "opacity-100",
              imgClassName
            )}
            style={{ 
              color: "transparent", // Hide alt text during load
            }}
          />
        </picture>
      )}
    </div>
  )
}

/**
 * Simple picture element wrapper for static images
 * Use when you don't need loading states
 */
export function PictureImage({
  src,
  alt,
  width,
  height,
  className = "",
  loading = "lazy",
  priority = false,
}: {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  loading?: "eager" | "lazy"
  priority?: boolean
}) {
  // Generate optimized paths
  const avifSrc = src.replace(/\.(png|jpg|jpeg)$/i, ".avif")
  const webpSrc = src.replace(/\.(png|jpg|jpeg)$/i, ".webp")
  const isExternal = src.startsWith("http")

  return (
    <picture>
      {!isExternal && <source srcSet={avifSrc} type="image/avif" />}
      {!isExternal && <source srcSet={webpSrc} type="image/webp" />}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : loading}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className={className}
        style={{ color: "transparent" }}
      />
    </picture>
  )
}

