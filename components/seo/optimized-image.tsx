import Image from "next/image"
import { useState } from "react"

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  sizes?: string
  quality?: number
  placeholder?: "blur" | "empty"
  blurDataURL?: string
  // New props for Core Web Vitals optimization
  eager?: boolean
  fetchPriority?: "high" | "low" | "auto"
  aspectRatio?: string
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  quality = 85,
  placeholder = "empty",
  blurDataURL,
  eager = false,
  fetchPriority = "auto",
  aspectRatio,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Calculate aspect ratio for CLS prevention
  const calculatedAspectRatio = aspectRatio || `${width}/${height}`

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ 
        aspectRatio: calculatedAspectRatio,
        backgroundColor: 'rgb(17, 24, 39)', // neutral-900 fallback
      }}
    >
      {/* Loading skeleton to prevent CLS */}
      {isLoading && !hasError && (
        <div 
          className="absolute inset-0 bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 animate-pulse"
          style={{ aspectRatio: calculatedAspectRatio }}
        />
      )}

      {/* Error state */}
      {hasError && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-neutral-800 border border-neutral-700"
          style={{ aspectRatio: calculatedAspectRatio }}
        >
          <div className="text-center text-neutral-400">
            <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            <span className="text-xs font-mono">IMAGE_ERROR</span>
          </div>
        </div>
      )}

      {/* Optimized Image component */}
      {!hasError && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          fill={false}
          className={`
            w-full h-full object-cover transition-opacity duration-700 ease-in-out
            ${isLoading ? "opacity-0" : "opacity-100"}
          `}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false)
            setHasError(true)
          }}
          priority={priority}
          sizes={sizes}
          quality={quality}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          loading={priority || eager ? "eager" : "lazy"}
          fetchPriority={fetchPriority}
          // Prevent layout shift
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      )}
    </div>
  )
} 