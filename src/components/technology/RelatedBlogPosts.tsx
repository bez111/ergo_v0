"use client"

/**
 * RelatedBlogPosts for Technology pages
 *
 * Very lightweight block: 1–2 компактные ссылки на статьи блога без «мяса».
 * Использует keywords технологии + её название как теги для подбора.
 */

import { Link } from "@/i18n/navigation"
import { motion } from "framer-motion"
import { BookOpen, ArrowRight, Calendar } from "lucide-react"
import { getTechnologyBySlug } from "@/data/technology-topics"
import { getRelatedBlogPosts } from "@/lib/related-content"

interface RelatedBlogPostsProps {
  currentSlug: string
  title?: string
  maxItems?: number
}

export function RelatedBlogPostsForTechnology({
  currentSlug,
  title = "Related Articles from the Ergo Blog",
  maxItems = 2,
}: RelatedBlogPostsProps) {
  const topic = getTechnologyBySlug(currentSlug)
  if (!topic) return null

  const searchTags = [
    topic.title,
    topic.shortTitle ?? "",
    topic.slug,
    ...topic.keywords,
  ].filter(Boolean)

  const relatedBlogPosts = getRelatedBlogPosts(searchTags, maxItems)
  if (!relatedBlogPosts.length) return null

  return (
    <section className="py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-white">
          {title}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {relatedBlogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="block group h-full"
              >
                <div className="bg-black/70 border border-white/10 rounded-2xl p-4 hover:border-orange-400/40 hover:bg-black/80 transition-all h-full flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-orange-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white group-hover:text-orange-400 transition-colors text-sm md:text-base line-clamp-2">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-1 text-[11px] text-neutral-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      {post.readTime && (
                        <span>{post.readTime} min read</span>
                      )}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-orange-400 flex-shrink-0" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


