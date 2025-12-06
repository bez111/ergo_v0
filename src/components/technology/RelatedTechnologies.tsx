"use client"

/**
 * RelatedTechnologies Component
 * 
 * Displays related technology topics from the centralized data file.
 * Used on individual technology pages for automatic internal linking.
 */

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { 
  getTechnologyBySlug, 
  getRelatedTechnologies,
  categoryLabels,
  categoryColors,
  type TechnologyTopic 
} from "@/data/technology-topics"

interface RelatedTechnologiesProps {
  /** Current page slug - used to get related topics */
  currentSlug: string
  /** Optional title override */
  title?: string
  /** Optional subtitle */
  subtitle?: string
  /** Maximum number of items to show */
  maxItems?: number
  /** Show category badges */
  showCategory?: boolean
}

export function RelatedTechnologies({
  currentSlug,
  title = "Related Technologies",
  subtitle,
  maxItems = 3,
  showCategory = true,
}: RelatedTechnologiesProps) {
  const currentTopic = getTechnologyBySlug(currentSlug)
  if (!currentTopic) return null

  const relatedTopics = getRelatedTechnologies(currentSlug).slice(0, maxItems)
  if (relatedTopics.length === 0) return null

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xl text-center text-neutral-300 mb-12">
            {subtitle}
          </p>
        )}
        <div className={`grid gap-6 ${relatedTopics.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
          {relatedTopics.map((topic, index) => (
            <motion.div
              key={topic.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                href={`/technology/${topic.slug}`} 
                className="block h-full group focus:outline-none focus:ring-2 focus:ring-orange-500/60 rounded-3xl"
              >
                <Card className="bg-black/80 border border-white/10 rounded-3xl backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 h-full cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/30 transition-colors">
                        <topic.icon className="w-6 h-6 text-orange-400 group-hover:text-orange-300" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                          {topic.shortTitle || topic.title}
                        </h3>
                        {showCategory && (
                          <span className={`text-xs px-2 py-0.5 rounded-full border ${categoryColors[topic.category]}`}>
                            {categoryLabels[topic.category]}
                          </span>
                        )}
                      </div>
                      <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-neutral-300 group-hover:text-neutral-200 transition-colors">
                      {topic.shortDescription || topic.description}
                    </p>
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
 * Alternative compact version for sidebars or smaller sections
 */
export function RelatedTechnologiesCompact({
  currentSlug,
  title = "Related",
  maxItems = 4,
}: Pick<RelatedTechnologiesProps, 'currentSlug' | 'title' | 'maxItems'>) {
  const relatedTopics = getRelatedTechnologies(currentSlug).slice(0, maxItems)
  if (relatedTopics.length === 0) return null

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">
        {title}
      </h4>
      <div className="space-y-2">
        {relatedTopics.map((topic) => (
          <Link
            key={topic.slug}
            href={`/technology/${topic.slug}`}
            className="flex items-center gap-3 p-2 rounded-lg bg-neutral-900/60 hover:bg-orange-500/10 transition-colors group"
          >
            <topic.icon className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-neutral-200 group-hover:text-white transition-colors">
              {topic.shortTitle || topic.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}

