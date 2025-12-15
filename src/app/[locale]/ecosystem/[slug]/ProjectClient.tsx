"use client"

import { Link } from "@/i18n/navigation"
import Image from "next/image"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import {
  ExternalLink,
  Github,
  FileText,
  MessageCircle,
  CheckCircle,
  Clock,
  Beaker,
  Zap,
  Shield,
  Cpu,
  Layers,
  Lock,
  Coins,
  Twitter,
  ChevronDown,
  ChevronUp,
  BookOpen,
  ArrowRight,
} from "lucide-react"
import { useState } from "react"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { FinalCTASimple } from "@/components/home/final-cta-simple"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { type EcosystemProject, getRelatedProjects, techToBlogTagMapping } from "../_data"
import { blogPosts, type BlogPost } from "../../blog/_lib/blog-data"

// Technology icons mapping
const technologyIcons: Record<string, React.ReactNode> = {
  "eUTXO": <Layers className="w-4 h-4" />,
  "ErgoScript": <Cpu className="w-4 h-4" />,
  "Sigma Protocols": <Shield className="w-4 h-4" />,
  "Oracle Pools": <Zap className="w-4 h-4" />,
  "Privacy Features": <Lock className="w-4 h-4" />,
  "Native Tokens": <Coins className="w-4 h-4" />,
  "NiPoPoWs": <Layers className="w-4 h-4" />,
  "Babel Fees": <Coins className="w-4 h-4" />,
  "Autolykos": <Cpu className="w-4 h-4" />,
}

// Technology to page mapping
const technologyLinks: Record<string, string> = {
  "eUTXO": "/technology/eutxo-model",
  "ErgoScript": "/technology/ergoscript",
  "Sigma Protocols": "/technology/privacy-features",
  "Oracle Pools": "/technology/oracle-pools",
  "Privacy Features": "/technology/privacy-features",
  "Native Tokens": "/technology/native-tokens",
  "NiPoPoWs": "/technology/nipopows",
  "Babel Fees": "/blog/babel-fees",
  "Autolykos": "/technology/secure-pow",
}

// Function to get related blog posts based on project technologies and tags
function getRelatedBlogPostsForProject(project: EcosystemProject, limit = 3): BlogPost[] {
  const projectTags = new Set<string>()
  
  // Add tags from project's relatedTags
  if (project.relatedTags) {
    project.relatedTags.forEach(tag => projectTags.add(tag.toLowerCase()))
  }
  
  // Add tags from project's technologies
  if (project.technologies) {
    project.technologies.forEach(tech => {
      const blogTags = techToBlogTagMapping[tech] || []
      blogTags.forEach(tag => projectTags.add(tag.toLowerCase()))
    })
  }
  
  // Score each blog post
  const scoredPosts = blogPosts.map(post => {
    let score = 0
    const postTags = post.tags?.map(t => t.toLowerCase()) || []
    
    projectTags.forEach(tag => {
      if (postTags.includes(tag)) {
        score += 2
      }
    })
    
    // Bonus for category match
    if (project.category === "DEFI" && post.category === "Technology") score += 1
    if (project.category === "PRIVACY" && post.category === "Privacy") score += 2
    if (project.category === "ORACLES" && postTags.includes("oracle pools")) score += 3
    
    return { post, score }
  })
  
  return scoredPosts
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post)
}

// Image mapping for blog posts
const blogImageMapping: Record<string, string> = {
  'oracle-pools-explained': '/og/oracle-pools-explained.png',
  'sigma-protocols-privacy': '/og/sigma-protocols-privacy.png',
  'ergo-in-5-minutes': '/og/ergo-in-five-minutes.png',
  'ergo-manifesto': '/og/ergo-manifesto.png',
  'nipopows-explained': '/og/nipopows-explained.png',
  'storage-rent': '/og/storage-rent.png',
  'sigma-protocols-explained': '/og/sigma-protocols-explained.png',
  'eutxo-vs-accounts': '/og/eutxo-vs-accounts.png',
  'babel-fees': '/og/babel-fees.png',
  'ergoscript-introduction': '/og/ergoscript-introduction.png',
  'autolykos-proof-of-work': '/og/autolykos-proof-of-work.png',
}

interface ProjectClientProps {
  project: EcosystemProject
  categoryLabel: string
}

export default function ProjectClient({ project, categoryLabel }: ProjectClientProps) {
  const t = useTranslations('ecosystem.projectPage')
  const relatedProjects = getRelatedProjects(project, 4)
  const relatedBlogPosts = getRelatedBlogPostsForProject(project, 3)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const statusConfig = {
    OPERATIONAL: { 
      label: t('status.operational'), 
      color: "bg-green-500/20 text-green-400 border-green-500/30",
      icon: <CheckCircle className="w-4 h-4" />
    },
    TESTING: { 
      label: t('status.testing'), 
      color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      icon: <Clock className="w-4 h-4" />
    },
    PROTOTYPE: { 
      label: t('status.prototype'), 
      color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      icon: <Beaker className="w-4 h-4" />
    },
    NOT_OPERATING: {
      label: t('status.notOperating'),
      color: "bg-red-500/20 text-red-400 border-red-500/30",
      icon: <Beaker className="w-4 h-4" />
    },
  }

  const breadcrumbs = [
    { name: t('breadcrumbs.ecosystem'), href: "/ecosystem" },
    { name: project.name, href: "#" },
  ]

  return (
    <BackgroundWrapper>
      <div className="min-h-screen pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <Breadcrumbs items={breadcrumbs} className="mb-6" />

          {/* Hero Section */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex flex-wrap items-start gap-4 mb-6">
              {/* Title and Badges (icon removed for cleaner headings) */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                    {project.name}
                  </h1>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {(() => {
                    const status = statusConfig[project.status]
                    return (
                      <Badge
                        variant="outline"
                        className={`${status?.color ?? "bg-neutral-800 text-neutral-300 border-neutral-700"} flex items-center gap-1.5`}
                      >
                        {status?.icon ?? <CheckCircle className="w-4 h-4" />}
                        {status?.label ?? project.status}
                      </Badge>
                    )
                  })()}
                  <Badge 
                    variant="outline" 
                    className="bg-orange-500/20 text-orange-400 border-orange-500/30"
                  >
                    {categoryLabel}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              {project.url && project.url !== "#" && (
                <Button
                  asChild
                  size="sm"
                  className="bg-orange-500 hover:bg-orange-600 text-black border-orange-500 hover:border-orange-600"
                >
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t('buttons.visitProject')}
                  </a>
                </Button>
              )}
              {project.github && (
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-white/20 text-neutral-300 hover:text-white"
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    {t('buttons.github')}
                  </a>
                </Button>
              )}
              {project.twitter && (
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-white/20 text-neutral-300 hover:text-white"
                >
                  <a href={project.twitter} target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-4 h-4 mr-2" />
                    {t('buttons.twitter')}
                  </a>
                </Button>
              )}
              {project.docs && (
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-white/20 text-neutral-300 hover:text-white"
                >
                  <a href={project.docs} target="_blank" rel="noopener noreferrer">
                    <FileText className="w-4 h-4 mr-2" />
                    {t('buttons.docs')}
                  </a>
                </Button>
              )}
              {project.discord && (
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-white/20 text-neutral-300 hover:text-white"
                >
                  <a href={project.discord} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {t('buttons.community')}
                  </a>
                </Button>
              )}
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="text-neutral-400 hover:text-white sm:hidden"
              >
                <Link href="/ecosystem">
                  {t('buttons.backToEcosystem')}
                </Link>
              </Button>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </motion.header>

          {/* Extended Description for SEO */}
          {project.longDescription && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mb-12"
            >
              <div className="prose prose-invert prose-lg max-w-none">
                {project.longDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-300 leading-relaxed mb-4">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </motion.section>
          )}

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-white mb-6">{t('sections.keyFeatures')}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-4 bg-black rounded-2xl border border-white/10"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Technologies Used */}
          {project.technologies && project.technologies.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-white mb-6">{t('sections.builtWith')}</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => {
                  const link = technologyLinks[tech]
                  const icon = technologyIcons[tech] || <Cpu className="w-4 h-4" />
                  
                  if (link) {
                    return (
                      <Link
                        key={tech}
                        href={link}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 hover:bg-orange-500/20 text-orange-400 rounded-xl border border-orange-500/20 transition-colors"
                      >
                        {icon}
                        {tech}
                      </Link>
                    )
                  }
                  
                  return (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 text-gray-300 rounded-xl border border-white/10"
                    >
                      {icon}
                      {tech}
                    </span>
                  )
                })}
              </div>
            </motion.section>
          )}

          {/* Related Blog Posts */}
          {relatedBlogPosts.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mb-12"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-orange-400" />
                  {t('sections.relatedArticles')}
                </h2>
                <Link 
                  href="/blog" 
                  className="text-orange-400 hover:text-orange-300 text-sm flex items-center gap-1"
                >
                  {t('sections.viewAll')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedBlogPosts.map((post) => {
                  const imageUrl = blogImageMapping[post.slug] || post.image || '/og/blog-default.svg'
                  return (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group"
                    >
                      <Card className="h-full bg-black border border-white/10 hover:border-orange-500/30 transition-all overflow-hidden">
                        <div className="relative aspect-[16/9] overflow-hidden">
                          <Image
                            src={imageUrl}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardContent className="p-4">
                          <h3 className="text-white font-semibold line-clamp-2 group-hover:text-orange-400 transition-colors mb-2">
                            {post.title}
                          </h3>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span>{post.readTime} min read</span>
                            <span>·</span>
                            <span>{post.category}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  )
                })}
              </div>
            </motion.section>
          )}

          {/* FAQ Section */}
          {project.faq && project.faq.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-white mb-6">{t('sections.faq')}</h2>
              <div className="space-y-3">
                {project.faq.map((item, index) => (
                  <div 
                    key={index}
                    className="bg-black rounded-2xl border border-white/10 overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
                    >
                      <span className="text-white font-medium pr-4">{item.question}</span>
                      {openFaqIndex === index ? (
                        <ChevronUp className="w-5 h-5 text-orange-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
                    </button>
                    {openFaqIndex === index && (
                      <div className="px-4 pb-4">
                        <p className="text-gray-300">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                {t('sections.relatedProjects', { category: categoryLabel })}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedProjects.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/ecosystem/${related.slug}`}
                    className="group"
                  >
                    <Card className="h-full bg-black border border-white/10 hover:bg-black/95 hover:border-orange-500/30 transition-all">
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-3 text-white group-hover:text-orange-400 transition-colors">
                          {related.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-400 text-sm line-clamp-2">
                          {related.description}
                        </p>
                        <div className="mt-3">
                          {(() => {
                            const status = statusConfig[related.status]
                            return (
                              <Badge
                                variant="outline"
                                className={status?.color ?? "bg-neutral-800 text-neutral-300 border-neutral-700"}
                              >
                                {status?.label ?? related.status}
                              </Badge>
                            )
                          })()}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </motion.section>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <FinalCTASimple 
              title={t('cta.title')}
              description={t('cta.description')}
            />
          </motion.div>
        </div>
      </div>
    </BackgroundWrapper>
  )
}

