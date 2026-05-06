import Image from "next/image"

interface BlogHeroImageProps {
  src: string
  alt: string
  /** Optional caption shown below the image */
  caption?: string
  /** Mark as priority for LCP. Set to true on the post hero. */
  priority?: boolean
}

/**
 * Standard hero image for hand-coded blog posts (1200×630, 16:9 / OG ratio).
 * Pairs with the `image` field in blog-data.ts so the same asset shows on:
 *   - /blog hub cards (BlogCard component)
 *   - Article hero (this component)
 *   - Social share previews (og:image)
 */
export function BlogHeroImage({ src, alt, caption, priority = true }: BlogHeroImageProps) {
  return (
    <figure className="my-8 -mx-4 sm:mx-0">
      <div className="relative w-full aspect-[1200/630] overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
          className="object-cover"
          priority={priority}
          fetchPriority={priority ? "high" : "auto"}
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-xs sm:text-sm text-center text-neutral-500 italic px-4">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
