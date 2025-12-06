"use client"

/**
 * WhatsNextCTA Component
 * 
 * Unified CTA section for technology pages.
 * Shows actionable links: Documentation, GitHub, Community
 * Does NOT show related technologies (that's handled by RelatedTechnologies)
 */

import Link from "next/link"
import { motion } from "framer-motion"
import { BookOpen, Github, MessageCircle, ExternalLink } from "lucide-react"
import { getTechnologyBySlug } from "@/data/technology-topics"

interface WhatsNextCTAProps {
  /** Current technology page slug - used to get docs URL */
  currentSlug?: string
  /** Custom title */
  title?: string
  /** Custom subtitle */
  subtitle?: string
}

const defaultCTAs = [
  {
    title: "Documentation",
    subtitle: "Read the Docs",
    description: "Deep dive into technical details, guides and API references",
    href: "/docs",
    icon: BookOpen,
    external: false,
  },
  {
    title: "Source Code",
    subtitle: "GitHub Repository",
    description: "Explore the implementation and contribute to development",
    href: "https://github.com/ergoplatform/ergo",
    icon: Github,
    external: true,
  },
  {
    title: "Community",
    subtitle: "Join Discord",
    description: "Get help from experienced developers and community members",
    href: "https://discord.gg/ergo-platform-668903786361651200",
    icon: MessageCircle,
    external: true,
  },
]

export function WhatsNextCTA({
  currentSlug,
  title = "What's Next?",
  subtitle = "Continue your journey",
}: WhatsNextCTAProps) {
  // Get topic-specific docs URL if available
  const topic = currentSlug ? getTechnologyBySlug(currentSlug) : null
  
  const ctas = defaultCTAs.map(cta => {
    // Override docs URL with topic-specific one if available
    if (cta.title === "Documentation" && topic?.docsUrl) {
      return { ...cta, href: topic.docsUrl }
    }
    // Override GitHub URL with topic-specific one if available
    if (cta.title === "Source Code" && topic?.githubUrl) {
      return { ...cta, href: topic.githubUrl }
    }
    return cta
  })

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title.includes("Next") ? (
              <>
                What's <span className="text-orange-400">Next</span>?
              </>
            ) : (
              title
            )}
          </h2>
          <p className="text-xl text-neutral-300">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {ctas.map((cta, index) => {
            const Wrapper = cta.external ? 'a' : Link
            const wrapperProps = cta.external 
              ? { href: cta.href, target: "_blank", rel: "noopener noreferrer" }
              : { href: cta.href }

            return (
              <motion.div
                key={cta.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Wrapper
                  {...wrapperProps}
                  className="block h-full group"
                >
                  <div className="bg-black/80 border border-white/10 rounded-3xl p-6 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/30 transition-colors">
                        <cta.icon className="w-6 h-6 text-orange-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                          {cta.title}
                        </h3>
                        <p className="text-orange-400 text-sm font-medium">
                          {cta.subtitle}
                        </p>
                      </div>
                      {cta.external && (
                        <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-orange-400 transition-colors" />
                      )}
                    </div>
                    <p className="text-neutral-300 group-hover:text-neutral-200 transition-colors">
                      {cta.description}
                    </p>
                  </div>
                </Wrapper>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

