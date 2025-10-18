import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { BlogPost } from '../_lib/blog-data'

interface RelatedPostsProps {
  posts: BlogPost[]
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null
  
  return (
    <section className="mt-16 pt-16 border-t border-orange-500/20">
      <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
        <span className="text-orange-400 mr-2 font-mono">{'<'}</span>
        Related Articles
        <span className="text-orange-400 ml-2 font-mono">{'/>'}</span>
      </h2>
      
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block"
          >
            <article className="h-full border border-gray-800 rounded-lg overflow-hidden bg-black/50 hover:border-orange-500/50 transition-all duration-300">
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={post.image || '/placeholder.svg'}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              </div>
              
              {/* Content */}
              <div className="p-4">
                <span className="text-xs font-mono text-orange-400 uppercase">
                  {post.category}
                </span>
                
                <h3 className="text-lg font-semibold text-white mt-2 mb-2 group-hover:text-orange-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-sm text-gray-400 line-clamp-2 mb-3">
                  {post.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{post.readTime} min read</span>
                  <ArrowRight className="w-4 h-4 text-orange-400 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  )
} 