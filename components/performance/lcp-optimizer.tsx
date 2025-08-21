import { Suspense } from 'react'
import Image from 'next/image'

// Critical CSS for LCP optimization
const criticalCSS = `
  .hero-container {
    min-height: 100vh;
    background: #000;
    display: flex;
    align-items: center;
    contain: layout;
    will-change: auto;
  }
  .hero-content {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }
  .hero-title {
    font-size: clamp(2rem, 8vw, 4rem);
    font-weight: 700;
    line-height: 1.1;
    margin: 0 0 1rem 0;
  }
`

interface LCPOptimizerProps {
  children: React.ReactNode
  heroImage?: string
  priority?: boolean
}

export function LCPOptimizer({ 
  children, 
  heroImage = "/hero-bg.webp",
  priority = true 
}: LCPOptimizerProps) {
  return (
    <>
      {/* Inject critical CSS immediately */}
      <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
      
      {/* Preload critical resources */}
      <link
        rel="preload"
        href={heroImage}
        as="image"
        type="image/webp"
      />
      <link
        rel="preload"
        href="/fonts/inter-var.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      
      <div className="hero-container">
        <div className="hero-content">
          <Suspense fallback={<HeroSkeleton />}>
            {children}
          </Suspense>
        </div>
        
        {/* Background image with priority loading */}
        {heroImage && (
          <div className="absolute inset-0 -z-10">
            <Image
              src={heroImage}
              alt=""
              fill
              priority={priority}
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              sizes="100vw"
              style={{
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
          </div>
        )}
      </div>
    </>
  )
}

function HeroSkeleton() {
  return (
    <div 
      className="w-full bg-neutral-900 animate-pulse rounded-lg"
      style={{ 
        height: '60vh',
        aspectRatio: '16/9',
        contain: 'layout'
      }}
      aria-hidden="true"
    >
      <div className="p-8 space-y-4">
        <div className="h-8 bg-neutral-800 rounded w-3/4"></div>
        <div className="h-4 bg-neutral-800 rounded w-1/2"></div>
        <div className="h-12 bg-neutral-800 rounded w-1/3"></div>
      </div>
    </div>
  )
} 