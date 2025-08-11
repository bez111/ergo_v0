'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, User } from 'lucide-react'
import { BlogPost } from '../_lib/blog-data'
import { useRouter } from 'next/navigation'

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const router = useRouter()

  const handleCardClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement)?.closest('a, button')) return
    router.push(`/blog/${post.slug}`)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      router.push(`/blog/${post.slug}`)
    }
  }

  return (
    <article
      className={`relative h-full overflow-hidden rounded-xl border border-neutral-700 bg-neutral-900/50 backdrop-blur-sm hover:border-brand-primary-500/30 hover:bg-neutral-900/80 transition-colors ${featured ? 'col-span-full lg:col-span-2' : ''} cursor-pointer`}
      role="link"
      tabIndex={0}
      aria-label={`Read: ${post.title}`}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
    >
      {/* Image */}
      <div className="relative h-48 lg:h-56 overflow-hidden">
        <Link href={`/blog/${post.slug}`} prefetch={false} className="block w-full h-full">
          <Image
            src={post.image || '/placeholder.svg'}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
            priority={featured}
          />
          <span className="sr-only">Read: {post.title}</span>
        </Link>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          {post.category && (
            <Link prefetch={false} href={`/blog/category/${encodeURIComponent(post.category)}`} className="px-3 py-1 text-xs font-semibold bg-brand-primary-500/20 text-brand-primary-400 border border-brand-primary-500/30 rounded-lg backdrop-blur-sm">
              {post.category}
            </Link>
          )}
        </div>

        {featured && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 text-xs font-semibold bg-status-success-500/20 text-status-success-400 border border-status-success-500/30 rounded-lg backdrop-blur-sm">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className={`font-bold mb-3 text-white hover:text-brand-primary-400 transition-colors ${
          featured ? 'text-2xl lg:text-3xl' : 'text-xl'
        }`}>
          <Link href={`/blog/${post.slug}`} prefetch={false} className="inline-block">
            {post.title}
          </Link>
        </h3>

        <p className="text-gray-300 mb-4 line-clamp-2">
          {post.description}
        </p>

        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3 text-gray-500" />
            <time dateTime={post.publishedAt}>
              {post.publishedAt}
            </time>
          </div>

          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-gray-500" />
            <span>{post.readTime} min read</span>
          </div>

          <div className="flex items-center gap-1">
            <User className="w-3 h-3 text-gray-500" />
            <span>{post.author.name}</span>
          </div>
        </div>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.slice(0, 3).map(tag => (
              <Link
                key={tag}
                href={`/blog/tag/${encodeURIComponent(tag)}`}
                prefetch={false}
                className="text-xs text-gray-500 hover:text-brand-primary-400 transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
