"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Code,
  Shield,
  TrendingUp,
  Zap,
  Eye,
  BookOpen,
  Cpu,
  Coins,
  Pickaxe,
  ExternalLink,
  Lightbulb,
  Target,
  GraduationCap,
} from "lucide-react";
import { GlossaryTerm, glossaryTerms, glossaryCategories } from "@/data/glossary";
import { infographics } from "@/data/infographics";
import { getRelatedBlogPosts } from "@/lib/related-content";
import { BackgroundWrapper } from "@/components/home/background-wrapper";
import { PageTransition } from "@/components/animations/page-transition";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface Props {
  term: GlossaryTerm;
}

const categoryIconMap: Record<string, React.ElementType> = {
  Cpu,
  Code,
  Eye,
  Zap,
  Coins,
  Pickaxe,
  BookOpen,
};

const difficultyColors = {
  beginner: { bg: "bg-green-500/10", text: "text-green-400", border: "border-green-500/20" },
  intermediate: { bg: "bg-yellow-500/10", text: "text-yellow-400", border: "border-yellow-500/20" },
  advanced: { bg: "bg-red-500/10", text: "text-red-400", border: "border-red-500/20" },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function GlossaryTermClient({ term }: Props) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Get related infographics by matching tags
  const relatedInfographics = infographics
    .filter((infographic) =>
      infographic.tags.some((tag) =>
        term.relatedTags.some(
          (relatedTag) => tag.toLowerCase() === relatedTag.toLowerCase()
        )
      )
    )
    .slice(0, 4);

  // Get related blog posts by matching tags
  const relatedBlogPosts = getRelatedBlogPosts(term.relatedTags, 4);

  // Get other terms for navigation (same category first, then others)
  const otherTerms = glossaryTerms
    .filter((t) => t.slug !== term.slug)
    .sort((a, b) => {
      if (a.category === term.category && b.category !== term.category) return -1;
      if (b.category === term.category && a.category !== term.category) return 1;
      return 0;
    })
    .slice(0, 6);

  const categoryMeta = glossaryCategories[term.category];
  const CategoryIcon = categoryIconMap[categoryMeta.icon] || BookOpen;
  const difficultyStyle = difficultyColors[term.difficulty];

  return (
    <BackgroundWrapper>
      <div className="container mx-auto px-4 py-16">
        <PageTransition>
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8"
            >
              <Link
                href="/learn/glossary"
                className="inline-flex items-center gap-2 text-neutral-400 hover:text-orange-400 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                All Terms
              </Link>
            </motion.div>

            {/* Hero Section */}
            <motion.section
              className="mb-12"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Category & Difficulty Badges */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-6">
                <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 px-3 py-1.5 rounded-full text-sm">
                  <CategoryIcon className="w-4 h-4" />
                  {categoryMeta.name}
                </div>
                <div className={`inline-flex items-center gap-2 ${difficultyStyle.bg} ${difficultyStyle.text} ${difficultyStyle.border} border px-3 py-1.5 rounded-full text-sm`}>
                  <GraduationCap className="w-4 h-4" />
                  {term.difficulty.charAt(0).toUpperCase() + term.difficulty.slice(1)}
                </div>
              </motion.div>

              {/* Title */}
              <motion.div variants={itemVariants}>
                <p className="text-neutral-400 text-lg mb-2">What is</p>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  {term.term}
                  <span className="text-orange-400">?</span>
                </h1>
              </motion.div>

              {/* Short Definition */}
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-r from-orange-500/10 to-transparent border-l-4 border-orange-500 pl-6 py-4 mb-8"
              >
                <p className="text-xl text-neutral-200 leading-relaxed">
                  {term.shortDefinition}
                </p>
              </motion.div>

              {/* Full Definition */}
              <motion.div variants={itemVariants}>
                <p className="text-neutral-300 text-lg leading-relaxed">
                  {term.definition}
                </p>
              </motion.div>
            </motion.section>

            {/* Key Points */}
            {term.keyPoints && term.keyPoints.length > 0 && (
              <motion.section
                className="mb-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.h2
                  variants={itemVariants}
                  className="text-2xl font-bold mb-6 text-white flex items-center gap-3"
                >
                  <Lightbulb className="w-6 h-6 text-orange-400" />
                  Key Points
                </motion.h2>

                <motion.div variants={itemVariants}>
                  <Card className="bg-black/60 border-white/10">
                    <CardContent className="p-6">
                      <ul className="space-y-4">
                        {term.keyPoints.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-neutral-300">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.section>
            )}

            {/* Use Cases */}
            {term.useCases && term.useCases.length > 0 && (
              <motion.section
                className="mb-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.h2
                  variants={itemVariants}
                  className="text-2xl font-bold mb-6 text-white flex items-center gap-3"
                >
                  <Target className="w-6 h-6 text-orange-400" />
                  Use Cases
                </motion.h2>

                <motion.div
                  variants={itemVariants}
                  className="grid md:grid-cols-2 gap-4"
                >
                  {term.useCases.map((useCase, idx) => (
                    <div
                      key={idx}
                      className="bg-black/60 border border-white/10 rounded-xl p-4 hover:border-orange-400/30 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-orange-400 font-bold text-sm">{idx + 1}</span>
                        </div>
                        <p className="text-neutral-300">{useCase}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </motion.section>
            )}

            {/* Technical Details */}
            {term.technicalDetails && (
              <motion.section
                className="mb-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.h2
                  variants={itemVariants}
                  className="text-2xl font-bold mb-6 text-white flex items-center gap-3"
                >
                  <Code className="w-6 h-6 text-orange-400" />
                  Technical Details
                </motion.h2>

                <motion.div variants={itemVariants}>
                  <Card className="bg-black/60 border-white/10">
                    <CardContent className="p-6">
                      <p className="text-neutral-300 leading-relaxed font-mono text-sm">
                        {term.technicalDetails}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.section>
            )}

            {/* Related Infographics */}
            {relatedInfographics.length > 0 && (
              <motion.section
                className="mb-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.h2
                  variants={itemVariants}
                  className="text-2xl font-bold mb-6 text-white"
                >
                  Related <span className="text-orange-400">Infographics</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-4">
                  {relatedInfographics.map((infographic) => (
                    <motion.div key={infographic.slug} variants={itemVariants}>
                      <Link
                        href={`/infographics/${infographic.slug}`}
                        className="block group"
                      >
                        <div className="bg-black/60 border border-white/10 rounded-xl p-4 hover:border-orange-400/40 transition-all hover:bg-black/70">
                          <div className="flex items-start gap-4">
                            <div className="w-16 h-16 bg-neutral-800 rounded-lg flex-shrink-0 overflow-hidden">
                              {infographic.previewImageUrl && (
                                <img
                                  src={infographic.previewImageUrl}
                                  alt={infographic.title}
                                  className="w-full h-full object-cover"
                                />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-white group-hover:text-orange-400 transition-colors line-clamp-2 text-sm">
                                {infographic.title}
                              </h3>
                              <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                                {infographic.shortDescription}
                              </p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-orange-400 flex-shrink-0" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Related Blog Posts */}
            {relatedBlogPosts.length > 0 && (
              <motion.section
                className="mb-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.h2
                  variants={itemVariants}
                  className="text-2xl font-bold mb-6 text-white"
                >
                  Related <span className="text-orange-400">Articles</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-4">
                  {relatedBlogPosts.map((post) => (
                    <motion.div key={post.slug} variants={itemVariants}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="block group"
                      >
                        <div className="bg-black/60 border border-white/10 rounded-xl p-4 hover:border-orange-400/40 transition-all hover:bg-black/70">
                          <div className="flex items-start gap-4">
                            <div className="w-16 h-16 bg-neutral-800 rounded-lg flex-shrink-0 overflow-hidden">
                              {post.image && (
                                <img
                                  src={post.image}
                                  alt={post.title}
                                  className="w-full h-full object-cover"
                                />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-white group-hover:text-orange-400 transition-colors line-clamp-2 text-sm">
                                {post.title}
                              </h3>
                              <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                                {post.excerpt}
                              </p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-orange-400 flex-shrink-0" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* FAQ Section */}
            {term.faq.length > 0 && (
              <motion.section
                className="mb-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.h2
                  variants={itemVariants}
                  className="text-2xl font-bold mb-6 text-white"
                >
                  Frequently Asked <span className="text-orange-400">Questions</span>
                </motion.h2>

                <div className="space-y-4">
                  {term.faq.map((item, idx) => (
                    <motion.div key={idx} variants={itemVariants}>
                      <Card className="bg-black/60 border-white/10 rounded-xl overflow-hidden">
                        <Collapsible
                          open={openFAQ === idx}
                          onOpenChange={(open) => setOpenFAQ(open ? idx : null)}
                        >
                          <CollapsibleTrigger asChild>
                            <button className="w-full">
                              <CardContent className="p-5 flex items-center justify-between hover:bg-black/70 transition-colors">
                                <h3 className="text-lg font-semibold text-left text-white">
                                  {item.question}
                                </h3>
                                <ChevronDown
                                  className={`w-5 h-5 text-neutral-400 transition-transform ${
                                    openFAQ === idx ? "rotate-180" : ""
                                  }`}
                                />
                              </CardContent>
                            </button>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <CardContent className="px-5 pb-5 pt-0">
                              <p className="text-neutral-300 leading-relaxed">
                                {item.answer}
                              </p>
                            </CardContent>
                          </CollapsibleContent>
                        </Collapsible>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Other Terms */}
            <motion.section
              className="mb-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                variants={itemVariants}
                className="text-2xl font-bold mb-6 text-white"
              >
                Explore More <span className="text-orange-400">Terms</span>
              </motion.h2>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-3"
              >
                {otherTerms.map((t) => (
                  <Link
                    key={t.slug}
                    href={`/learn/glossary/${t.slug}`}
                    className="inline-flex items-center gap-2 bg-black/60 border border-white/10 
                              hover:border-orange-400/40 px-4 py-2 rounded-full transition-colors
                              text-neutral-300 hover:text-white text-sm"
                  >
                    {t.term}
                  </Link>
                ))}
              </motion.div>
            </motion.section>

            {/* Final CTA – styled like playbook ending, shown for boxes term */}
            {term.slug === "boxes" && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="py-12"
              >
                <div className="max-w-4xl mx-auto">
                  <Card className="bg-black border border-white/10 rounded-3xl overflow-hidden">
                    <CardContent className="p-8 text-center">
                      <h2 className="text-2xl font-bold text-white mb-2">
                        Ready to Build with Ergo Boxes?
                      </h2>
                      <p className="text-neutral-400 mb-6">
                        Apply what you&apos;ve learned about boxes and start building real DeFi on Ergo.
                      </p>
                      <div className="flex flex-wrap justify-center gap-4">
                        <Link
                          href="/docs/developers"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-black font-semibold transition-colors"
                        >
                          Documentation
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                          href="/learn/glossary"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold border border-white/10 transition-colors"
                        >
                          Glossary
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.section>
            )}
          </div>
        </PageTransition>
      </div>
    </BackgroundWrapper>
  );
}

