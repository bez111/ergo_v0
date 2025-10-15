import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock } from 'lucide-react'
import { BlogPost } from '../_lib/blog-data'

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

// ✅ ИЗМЕНЕНИЕ: Убираем 'use client' - теперь это RSC
export function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <article
      className={`relative h-full overflow-hidden rounded-xl border border-neutral-700 bg-neutral-900/50 backdrop-blur-sm hover:border-orange-500/30 hover:bg-neutral-900/80 transition-colors ${featured ? 'col-span-full lg:col-span-2' : ''}`}
      itemScope
      itemType="https://schema.org/BlogPosting"
    >
      {/* ✅ ИЗМЕНЕНИЕ: Изображение с фиксированными размерами для предотвращения CLS */}
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900">
        <Link 
          href={`/blog/${post.slug}`} 
          className="block w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
        >
          {post.image ? (
            <Image
              src={post.image}
              alt={post.title}  // ✅ Содержательный ALT для контентных изображений
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
              priority={featured}
              fetchPriority={featured ? "high" : "auto"}
              decoding="async"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-neutral-700 mb-2">
                  {post.category?.charAt(0) || 'B'}
                </div>
                <div className="text-xs text-neutral-600 uppercase tracking-wide">
                  {post.category || 'Blog'}
                </div>
              </div>
            </div>
          )}
        </Link>
        
        {/* ✅ КРИТИЧЕСКОЕ ИСПРАВЛЕНИЕ: Категория как отдельная ссылка, НЕ вложенная */}
        <div className="absolute top-4 left-4">
          {post.category && (
            <Link
              href={`/blog/category/${encodeURIComponent(post.category)}`}
              className="px-3 py-1 text-xs font-semibold bg-orange-500/20 text-orange-400 border border-orange-500/30 rounded-xl backdrop-blur-sm hover:bg-orange-500/30 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
            >
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

      {/* ✅ Контент с улучшенной семантикой */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-white">
          <Link 
            href={`/blog/${post.slug}`}
            className="hover:text-orange-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
          >
            {post.title}
          </Link>
        </h3>

        <p className="text-sm text-gray-300 mb-4 line-clamp-2">
          {post.excerpt}
        </p>

        {/* ✅ ИЗМЕНЕНИЕ: Семантическая мета-информация с proper ARIA */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3 text-gray-500" aria-hidden="true" />
            <time dateTime={new Date(post.date).toISOString()}>
              {new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              }).format(new Date(post.date))}
            </time>
          </div>

          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-gray-500" aria-hidden="true" />
            <span aria-label={`Estimated reading time: ${post.readTime} minutes`}>
              {post.readTime} min read
            </span>
          </div>

          <div className="flex items-center gap-1">
            <Link
              href={`/blog/author/${post.author.id}`}
              className="flex items-center gap-1 hover:text-orange-400 transition-colors"
            >
              <div 
                className="w-6 h-6 rounded-full bg-neutral-700 flex items-center justify-center overflow-hidden"
                aria-hidden="true"
              >
                {post.author.avatar ? (
                  <Image 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    width={24}
                    height={24}
                    className="object-cover"
                  />
                ) : (
                  <span className="text-white font-medium text-xs">
                    {post.author.name.charAt(0)}
                  </span>
                )}
              </div>
              <span className="font-medium">{post.author.name}</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
