"use client"

/**
 * RelatedPatterns Component
 * 
 * Displays related developer patterns from the centralized data file.
 * Used on technology pages to link to practical code examples.
 */

import { Link } from "@/i18n/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Code, ArrowRight } from "lucide-react"
import { devPatterns } from "@/data/dev-patterns"
import { getTechnologyBySlug } from "@/data/technology-topics"

interface RelatedPatternsProps {
  /** Current technology page slug */
  currentSlug: string
  /** Optional title override */
  title?: string
  /** Maximum number of items to show */
  maxItems?: number
}

export function RelatedPatterns({
  currentSlug,
  title = "Related Dev Patterns",
  maxItems = 3,
}: RelatedPatternsProps) {
  const currentTopic = getTechnologyBySlug(currentSlug)
  if (!currentTopic || !currentTopic.relatedPatterns?.length) return null

  // Get patterns that match the related pattern slugs
  const relatedPatterns = currentTopic.relatedPatterns
    .map(slug => devPatterns.find(p => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => p !== undefined)
    .slice(0, maxItems)

  if (relatedPatterns.length === 0) return null

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <Link 
            href="/patterns" 
            className="text-orange-400 hover:text-orange-300 flex items-center gap-2 text-sm font-medium transition-colors"
          >
            View all patterns
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className={`grid gap-4 ${relatedPatterns.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
          {relatedPatterns.map((pattern, index) => (
            <motion.div
              key={pattern.slug}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link 
                href={`/patterns/${pattern.slug}`}
                className="block h-full group"
              >
                <Card className="bg-neutral-900/60 border border-white/10 rounded-xl hover:bg-neutral-900/80 hover:border-orange-500/30 transition-all duration-300 h-full">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors">
                        <Code className="w-5 h-5 text-orange-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-white group-hover:text-orange-400 transition-colors truncate">
                          {pattern.title}
                        </h4>
                        <p className="text-sm text-neutral-400 line-clamp-2 mt-1">
                          {pattern.seoDescription}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-xs px-2 py-0.5 rounded bg-neutral-800 text-neutral-300">
                            {pattern.difficulty}
                          </span>
                          {pattern.category && (
                            <span className="text-xs text-neutral-500">
                              {pattern.category}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * Compact version for smaller sections
 */
export function RelatedPatternsCompact({
  currentSlug,
  title = "Code Examples",
  maxItems = 3,
}: RelatedPatternsProps) {
  const currentTopic = getTechnologyBySlug(currentSlug)
  if (!currentTopic || !currentTopic.relatedPatterns?.length) return null

  const relatedPatterns = currentTopic.relatedPatterns
    .map(slug => devPatterns.find(p => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => p !== undefined)
    .slice(0, maxItems)

  if (relatedPatterns.length === 0) return null

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider flex items-center gap-2">
        <Code className="w-4 h-4" />
        {title}
      </h4>
      <div className="space-y-2">
        {relatedPatterns.map((pattern) => (
          <Link
            key={pattern.slug}
            href={`/patterns/${pattern.slug}`}
            className="flex items-center gap-3 p-2 rounded-lg bg-neutral-900/60 hover:bg-orange-500/10 transition-colors group"
          >
            <span className="text-sm text-neutral-200 group-hover:text-white transition-colors flex-1 truncate">
              {pattern.title}
            </span>
            <ArrowRight className="w-3 h-3 text-neutral-500 group-hover:text-orange-400" />
          </Link>
        ))}
      </div>
    </div>
  )
}

