"use client";

/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  ChevronDown,
  Code,
  Shield,
  TrendingUp,
  Smartphone,
  DollarSign,
  Users,
  Zap,
  Eye,
  Scale,
  Database,
  Key,
  Clock,
  Layers,
  Target,
  BookOpen,
  Calendar,
} from "lucide-react";
import { ComparisonData } from "@/data/comparisons";
import { comparisons } from "@/data/comparisons";
import { getRelatedInfographics, getRelatedBlogPosts } from "@/lib/related-content";
import { BackgroundWrapper } from "@/components/home/background-wrapper";
import { PageTransition } from "@/components/animations/page-transition";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { GlossaryRichText } from "@/components/glossary";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";

interface Props {
  comparison: ComparisonData;
}

const iconMap: Record<string, React.ElementType> = {
  Code,
  Shield,
  TrendingUp,
  Smartphone,
  DollarSign,
  Users,
  Zap,
  Eye,
  Scale,
  Database,
  Key,
  Clock,
  Layers,
  Target,
  BookOpen,
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

export function ComparePageClient({ comparison }: Props) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Get related content by matching tags
  const relatedInfographics = getRelatedInfographics(comparison.relatedTags, 4);
  const relatedBlogPosts = getRelatedBlogPosts(comparison.relatedTags, 4);

  // Get other comparisons for navigation
  const otherComparisons = comparisons.filter((c) => c.slug !== comparison.slug);

  return (
    <BackgroundWrapper>
      <div className="container mx-auto px-4 py-16">
        <PageTransition>
          <div className="max-w-5xl mx-auto">
            {/* Breadcrumbs */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <Breadcrumbs
                type="compare"
                currentTitle={`Ergo vs ${comparison.name}`}
              />
            </motion.div>

            {/* Back Link */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8"
            >
              <Link
                href="/compare"
                className="inline-flex items-center gap-2 text-neutral-400 hover:text-orange-400 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                All Comparisons
              </Link>
            </motion.div>

            {/* Hero Section */}
            <motion.section
              className="mb-16"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="text-center mb-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  {/* Ergo Logo */}
                  <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-orange-400">E</span>
                  </div>
                  <span className="text-3xl text-neutral-400">vs</span>
                  {/* Competitor Logo */}
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${comparison.color}20` }}
                  >
                    <span
                      className="text-2xl font-bold"
                      style={{ color: comparison.color }}
                    >
                      {comparison.name.charAt(0)}
                    </span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                  Ergo vs{" "}
                  <span style={{ color: comparison.color }}>{comparison.name}</span>
                </h1>
                <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                  {comparison.summary.headline}
                </p>
              </motion.div>

              {/* Key Points Grid */}
              <motion.div
                variants={itemVariants}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
              >
                {comparison.summary.points.map((point, idx) => {
                  const IconComponent = iconMap[point.icon] || Shield;
                  return (
                    <div
                      key={idx}
                      className="bg-black/60 border border-white/10 rounded-xl p-5 hover:border-orange-400/40 transition-colors h-full flex flex-col"
                    >
                      <IconComponent className="w-8 h-8 text-orange-400 mb-3" />
                      <h3 className="font-semibold text-white mb-2">{point.title}</h3>
                      <p className="text-sm text-neutral-400">
                        {point.description}
                      </p>
                    </div>
                  );
                })}
              </motion.div>
            </motion.section>

            {/* Comparison Matrix */}
            <motion.section
              className="mb-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                variants={itemVariants}
                className="text-2xl md:text-3xl font-bold text-center mb-8 text-white"
              >
                Feature <span className="text-orange-400">Comparison</span>
              </motion.h2>

              <motion.div variants={itemVariants}>
                <Card className="bg-black/70 border border-white/10 rounded-2xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-white/10">
                            <th className="text-left p-4 font-semibold text-neutral-400 w-1/3">
                              Feature
                            </th>
                            <th className="text-left p-4 font-semibold text-orange-400 w-1/3">
                              Ergo
                            </th>
                            <th
                              className="text-left p-4 font-semibold w-1/3"
                              style={{ color: comparison.color }}
                            >
                              {comparison.name}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {comparison.matrixRows.map((row, idx) => (
                            <tr
                              key={idx}
                              className="border-b border-white/5 hover:bg-white/5 transition-colors"
                            >
                              <td className="p-4 font-medium text-white">
                                {row.feature}
                              </td>
                              <td className="p-4">
                                <div className="flex items-start gap-2">
                                  {row.ergoAdvantage && (
                                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                  )}
                                  <span
                                    className={
                                      row.ergoAdvantage
                                        ? "text-green-400"
                                        : "text-neutral-300"
                                    }
                                  >
                                    {row.ergo}
                                  </span>
                                </div>
                              </td>
                              <td className="p-4">
                                <div className="flex items-start gap-2">
                                  {row.ergoAdvantage === false && (
                                    <Check
                                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                                      style={{ color: comparison.color }}
                                    />
                                  )}
                                  <span className="text-neutral-400">
                                    {row.competitor}
                                  </span>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="p-4 bg-black/30 border-t border-white/5">
                      <p className="text-xs text-neutral-400 text-center">
                        <Check className="w-4 h-4 text-green-400 inline mr-1" />
                        indicates advantage in that category. Last updated:{" "}
                        {comparison.updatedDate || comparison.publishDate}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.section>

            {/* Detailed Sections */}
            <motion.section
              className="mb-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                variants={itemVariants}
                className="text-2xl md:text-3xl font-bold text-center mb-8 text-white"
              >
                Deep <span className="text-orange-400">Dive</span>
              </motion.h2>

              <GlossaryRichText 
                maxLinksPerNode={2} 
                firstOccurrenceOnly={true}
                variant="subtle"
                showTooltip={true}
              >
                <div className="space-y-6">
                  {comparison.sections.map((section, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      className="bg-black/60 border border-white/10 rounded-2xl p-6 hover:border-orange-400/30 transition-colors"
                    >
                      <h3 className="text-xl font-bold text-white mb-4">
                        {section.title}
                      </h3>
                      <p className="text-neutral-400 mb-4 leading-relaxed">
                        {section.content}
                      </p>
                      <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4">
                        <div className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider">
                              Ergo Advantage
                            </span>
                            <p className="text-white mt-1">{section.ergoAdvantage}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </GlossaryRichText>
            </motion.section>

            {/* Related Blog Posts */}
            {relatedBlogPosts.length > 0 && (
              <motion.section
                className="mb-16"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.h2
                  variants={itemVariants}
                  className="text-2xl md:text-3xl font-bold text-center mb-8 text-white"
                >
                  Related <span className="text-orange-400">Articles</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-4">
                  {relatedBlogPosts.map((post) => (
                  <motion.div key={post.id} variants={itemVariants} className="h-full">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="block group h-full"
                      >
                        <div className="bg-black/60 border border-white/10 rounded-xl p-4 hover:border-orange-400/40 transition-all hover:bg-black/70 h-full flex flex-col">
                          <div className="flex items-start gap-4 flex-1">
                            <div className="w-16 h-16 bg-orange-500/10 rounded-lg flex-shrink-0 flex items-center justify-center">
                              <BookOpen className="w-8 h-8 text-orange-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-white group-hover:text-orange-400 transition-colors line-clamp-2">
                                {post.title}
                              </h3>
                              <p className="text-sm text-neutral-400 mt-1 line-clamp-2">
                                {post.excerpt}
                              </p>
                              <div className="flex items-center gap-3 mt-2 text-xs text-neutral-400">
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-3 h-3" />
                                  {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                </span>
                                <span>{post.readTime} min read</span>
                              </div>
                            </div>
                            <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-orange-400 flex-shrink-0" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Related Infographics */}
            {relatedInfographics.length > 0 && (
              <motion.section
                className="mb-16"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.h2
                  variants={itemVariants}
                  className="text-2xl md:text-3xl font-bold text-center mb-8 text-white"
                >
                  Related <span className="text-orange-400">Infographics</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-4">
                  {relatedInfographics.map((infographic) => (
                  <motion.div key={infographic.slug} variants={itemVariants} className="h-full">
                      <Link
                        href={`/infographics/${infographic.slug}`}
                        className="block group h-full"
                      >
                        <div className="bg-black/60 border border-white/10 rounded-xl p-4 hover:border-orange-400/40 transition-all hover:bg-black/70 h-full flex flex-col">
                          <div className="flex items-start gap-4 flex-1">
                            <div className="w-20 h-20 bg-neutral-800 rounded-lg flex-shrink-0 overflow-hidden">
                              {infographic.previewImageUrl && (
                                <img
                                  src={infographic.previewImageUrl}
                                  alt={infographic.title}
                                  className="w-full h-full object-cover"
                                />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-white group-hover:text-orange-400 transition-colors line-clamp-2">
                                {infographic.title}
                              </h3>
                              <p className="text-sm text-neutral-400 mt-1 line-clamp-2">
                                {infographic.shortDescription}
                              </p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-orange-400 flex-shrink-0" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* FAQ Section */}
            <motion.section
              className="mb-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                variants={itemVariants}
                className="text-2xl md:text-3xl font-bold text-center mb-8 text-white"
              >
                Frequently Asked <span className="text-orange-400">Questions</span>
              </motion.h2>

              <div className="space-y-4">
                {comparison.faq.map((item, idx) => (
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

            {/* Other Comparisons */}
            <motion.section
              className="mb-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                variants={itemVariants}
                className="text-2xl font-bold text-center mb-6 text-white"
              >
                More <span className="text-orange-400">Comparisons</span>
              </motion.h2>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap justify-center gap-3"
              >
                {otherComparisons.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/compare/ergo-vs-${c.slug}`}
                    className="inline-flex items-center gap-2 bg-black/60 border border-white/10 
                               hover:border-orange-400/40 px-4 py-2 rounded-full transition-colors
                               text-neutral-300 hover:text-white"
                  >
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ backgroundColor: `${c.color}30`, color: c.color }}
                    >
                      {c.name.charAt(0)}
                    </span>
                    vs {c.name}
                  </Link>
                ))}
              </motion.div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                variants={itemVariants}
                className="bg-black border border-white/10 rounded-2xl p-8 text-center"
              >
                <h2 className="text-2xl font-bold text-white mb-4">
                  Ready to Experience Ergo?
                </h2>
                <p className="text-neutral-300 mb-6 max-w-xl mx-auto">
                  Join thousands of users who chose decentralization, security, and
                  financial freedom.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/wallet"
                    className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-xl transition-colors"
                  >
                    Get a Wallet
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/docs/developers"
                    className="inline-flex items-center justify-center gap-2 border border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-xl transition-colors"
                  >
                    Start Building
                  </Link>
                </div>
              </motion.div>
            </motion.section>
          </div>
        </PageTransition>
      </div>
    </BackgroundWrapper>
  );
}
