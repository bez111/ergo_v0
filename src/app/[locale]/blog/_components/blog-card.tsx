import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock } from 'lucide-react'
import { BlogPost } from '../_lib/blog-data'

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

// ✅ ИСПРАВЛЕНИЕ A11y: Одна большая ссылка вместо nested links
export function BlogCard({ post, featured = false }: BlogCardProps) {
  const cardImage =
    post.slug === "sigma-protocols-privacy"
      ? "/og/sigma-protocols-privacy.png"
      : post.slug === "sigma-protocols-explained"
      ? "/og/sigma-protocols-explained.png"
      : post.slug === "ergo-in-5-minutes"
      ? "/og/ergo-in-five-minutes.png"
      : post.slug === "ergo-manifesto"
      ? "/og/ergo-manifesto.png"
      : post.slug === "nipopows-explained"
      ? "/og/nipopows-explained.png"
      : post.slug === "eutxo-vs-accounts"
      ? "/og/eutxo-vs-accounts.png"
      : post.slug === "oracle-pools-explained"
      ? "/og/oracle-pools-explained.png"
      : post.slug === "storage-rent"
      ? "/og/storage-rent.png"
      : post.slug === "ergoscript-introduction"
      ? "/og/ergoscript-introduction.png"
      : post.slug === "babel-fees"
      ? "/og/babel-fees.png"
      : post.slug === "autolykos-proof-of-work"
      ? "/og/autolykos-proof-of-work.png"
      : post.image

  return (
    <Link 
      href={`/blog/${post.slug}`}
      className="block h-full group focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-xl"
    >
      <article
        className={`relative h-full overflow-hidden rounded-xl border border-white/10 bg-black/80 backdrop-blur-sm group-hover:border-orange-500/30 group-hover:bg-black/90 transition-colors ${featured ? 'col-span-full lg:col-span-2' : ''}`}
        itemScope
        itemType="https://schema.org/BlogPosting"
      >
        {/* ✅ ИЗМЕНЕНИЕ: Изображение с фиксированными размерами для предотвращения CLS */}
        <div className="relative w-full aspect-[16/9] overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900">
          {cardImage ? (
            <Image
              src={cardImage}
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
        
      </div>

      {/* ✅ Контент с улучшенной семантикой */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors">
          {post.title}
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
          </div>
        </div>
      </div>
      </article>
    </Link>
  )
}
