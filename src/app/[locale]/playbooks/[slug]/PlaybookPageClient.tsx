"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  ChevronDown,
  Clock,
  BookOpen,
  ExternalLink,
  FileText,
  Wrench,
  Link as LinkIcon,
  Code,
  Shield,
  Pickaxe,
  Leaf,
  Scale,
  Globe,
  TrendingUp,
  Layers,
  Zap,
  Target,
  CheckCircle,
  AlertCircle,
  Sparkles,
  Trophy,
  Wallet,
  Calendar,
} from "lucide-react";
import { Playbook, playbooks } from "@/data/playbooks";
import { getRelatedInfographics, getRelatedBlogPosts } from "@/lib/related-content";
import { BackgroundWrapper } from "@/components/home/background-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Props {
  playbook: Playbook;
}

const iconMap: Record<string, React.ElementType> = {
  Code,
  Shield,
  Pickaxe,
  Leaf,
  Scale,
  Globe,
  TrendingUp,
  Layers,
  Wallet,
};

const resourceIconMap: Record<string, React.ElementType> = {
  link: LinkIcon,
  tool: Wrench,
  doc: FileText,
  glossary: BookOpen,
  question: Target,
  technology: Zap,
  infographic: Sparkles,
};

const difficultyConfig: Record<string, { bg: string; text: string; border: string; label: string }> = {
  beginner: { bg: "bg-green-500/20", text: "text-green-400", border: "border-green-500/30", label: "Beginner" },
  intermediate: { bg: "bg-yellow-500/20", text: "text-yellow-400", border: "border-yellow-500/30", label: "Intermediate" },
  advanced: { bg: "bg-red-500/20", text: "text-red-400", border: "border-red-500/30", label: "Advanced" },
};

const clusterColors: Record<string, string> = {
  defi: "from-orange-500 to-red-500",
  privacy: "from-purple-500 to-blue-500",
  mining: "from-amber-500 to-orange-500",
  sustainability: "from-emerald-500 to-green-500",
  "vc-alternative": "from-green-500 to-teal-500",
  "global-settlement": "from-indigo-500 to-purple-500",
  developer: "from-cyan-500 to-blue-500",
  investor: "from-blue-500 to-cyan-500",
};

export function PlaybookPageClient({ playbook }: Props) {
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [activeStep, setActiveStep] = useState<number | null>(0);

  const gradient = clusterColors[playbook.cluster] || "from-orange-500 to-red-500";
  const difficulty = difficultyConfig[playbook.difficulty];

  // Get related content
  const relatedInfographics = getRelatedInfographics(playbook.relatedInfographicTags);
  const relatedPosts = getRelatedBlogPosts(playbook.relatedBlogTags);

  // Get other playbooks in same cluster
  const relatedPlaybooks = playbooks
    .filter((p) => p.cluster === playbook.cluster && p.slug !== playbook.slug)
    .slice(0, 2);

  const toggleStep = (index: number) => {
    const newCompleted = new Set(completedSteps);
    if (newCompleted.has(index)) {
      newCompleted.delete(index);
    } else {
      newCompleted.add(index);
      // Auto-advance to next step
      if (index < playbook.steps.length - 1) {
        setActiveStep(index + 1);
      }
    }
    setCompletedSteps(newCompleted);
  };

  const progressPercent = (completedSteps.size / playbook.steps.length) * 100;
  const isCompleted = completedSteps.size === playbook.steps.length;

  // Save progress to localStorage
  useEffect(() => {
    const saved = localStorage.getItem(`playbook-progress-${playbook.slug}`);
    if (saved) {
      setCompletedSteps(new Set(JSON.parse(saved)));
    }
  }, [playbook.slug]);

  useEffect(() => {
    localStorage.setItem(
      `playbook-progress-${playbook.slug}`,
      JSON.stringify([...completedSteps])
    );
  }, [completedSteps, playbook.slug]);

  return (
    <BackgroundWrapper>
      <div className="min-h-screen text-white">
        <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pb-12"
          >
            <div className="max-w-4xl mx-auto">
              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {playbook.title}
              </h1>
              <p className="text-xl text-neutral-300 mb-6">{playbook.subtitle}</p>

              {/* Hero Description */}
              <p className="text-neutral-400 leading-relaxed mb-8">
                {playbook.heroDescription}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href={playbook.primaryCTA.href}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-black font-semibold transition-colors"
                >
                  {playbook.primaryCTA.label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                {playbook.secondaryCTA && (
                  <Link
                    href={playbook.secondaryCTA.href}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold border border-white/10 transition-colors"
                  >
                    {playbook.secondaryCTA.label}
                  </Link>
                )}
              </div>

              {/* Back link moved lower in hero */}
              <div className="mt-6">
                <Link
                  href="/playbooks"
                  className="inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-colors text-sm"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>All Playbooks</span>
                </Link>
              </div>
            </div>
          </motion.section>

          {/* Problem/Solution - Compact */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pb-12"
          >
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-black border border-red-500/20 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    <h3 className="font-semibold text-white">The Problem</h3>
                  </div>
                  <p className="text-neutral-400 text-sm leading-relaxed">{playbook.problemStatement}</p>
                </div>
                <div className="bg-black border border-green-500/20 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <h3 className="font-semibold text-white">The Solution</h3>
                  </div>
                  <p className="text-neutral-400 text-sm leading-relaxed">{playbook.solution}</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Steps - Main Content */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pb-16"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-orange-400" />
                </span>
                Step-by-Step Guide
              </h2>

              <div className="space-y-4">
                {playbook.steps.map((step, index) => {
                  const isStepCompleted = completedSteps.has(index);
                  const isActive = activeStep === index;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Card
                        className={`bg-black border rounded-2xl transition-all duration-300 overflow-hidden ${
                          isStepCompleted
                            ? "border-green-500/30"
                            : isActive
                            ? "border-orange-500/40 shadow-lg shadow-orange-500/5"
                            : "border-white/10 hover:border-white/20"
                        }`}
                      >
                        {/* Step Header - Always visible */}
                        <button
                          className="w-full text-left"
                          onClick={() => setActiveStep(isActive ? -1 : index)}
                        >
                          <CardContent className="p-5 flex items-start gap-4">
                            {/* Step Number / Check */}
                            <div
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleStep(index);
                              }}
                              className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all cursor-pointer ${
                                isStepCompleted
                                  ? "bg-green-500 text-white shadow-lg shadow-green-500/20"
                                  : isActive
                                  ? "bg-orange-500/20 text-orange-400 border border-orange-500/40"
                                  : "bg-white/10 text-neutral-400 hover:bg-orange-500/10 hover:text-orange-400"
                              }`}
                            >
                              {isStepCompleted ? (
                                <Check className="w-5 h-5" />
                              ) : (
                                <span className="font-bold">{index + 1}</span>
                              )}
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-4">
                                <h3
                                  className={`text-lg font-semibold transition-colors ${
                                    isStepCompleted
                                      ? "text-neutral-500"
                                      : "text-white"
                                  }`}
                                >
                                  {step.title}
                                </h3>
                                <div className="flex items-center gap-3 flex-shrink-0">
                                  {step.duration && (
                                    <span className="text-xs text-neutral-500 bg-white/5 px-2 py-1 rounded">
                                      {step.duration}
                                    </span>
                                  )}
                                  <ChevronDown
                                    className={`w-5 h-5 text-neutral-500 transition-transform ${
                                      isActive ? "rotate-180" : ""
                                    }`}
                                  />
                                </div>
                              </div>
                              <p
                                className={`text-sm mt-1 line-clamp-2 ${
                                  isStepCompleted ? "text-neutral-600" : "text-neutral-400"
                                }`}
                              >
                                {step.description}
                              </p>
                            </div>
                          </CardContent>
                        </button>

                        {/* Expanded Content */}
                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div className="px-5 pb-5 pt-0 pl-[4.5rem] border-t border-white/5">
                                {/* Full Description */}
                                <p className="text-neutral-300 text-sm leading-relaxed mb-4 pt-4">
                                  {step.description}
                                </p>

                                {/* Resources */}
                                {step.resources && step.resources.length > 0 && (
                                  <div className="space-y-3">
                                    <span className="text-xs text-neutral-500 uppercase tracking-wide font-medium">
                                      Resources
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                      {step.resources.map((resource, rIndex) => {
                                        const ResourceIcon =
                                          resourceIconMap[resource.type] || LinkIcon;
                                        const isExternal = resource.href.startsWith("http");
                                        return (
                                          <Link
                                            key={rIndex}
                                            href={resource.href}
                                            target={isExternal ? "_blank" : undefined}
                                            rel={isExternal ? "noopener noreferrer" : undefined}
                                            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-orange-400/40 hover:bg-orange-500/5 transition-all text-sm group"
                                          >
                                            <ResourceIcon className="w-4 h-4 text-orange-400" />
                                            <span className="text-neutral-300 group-hover:text-white transition-colors">
                                              {resource.title}
                                            </span>
                                            {isExternal && (
                                              <ExternalLink className="w-3 h-3 text-neutral-500" />
                                            )}
                                          </Link>
                                        );
                                      })}
                                    </div>
                                  </div>
                                )}

                                {/* Mark Complete Button */}
                                <div className="mt-5 pt-4 border-t border-white/5">
                                  <button
                                    onClick={() => toggleStep(index)}
                                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                                      isStepCompleted
                                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                                        : "bg-orange-500 text-black hover:bg-orange-600"
                                    }`}
                                  >
                                    {isStepCompleted ? (
                                      <>
                                        <Check className="w-4 h-4" />
                                        Completed
                                      </>
                                    ) : (
                                      <>
                                        <CheckCircle className="w-4 h-4" />
                                        Mark as Complete
                                      </>
                                    )}
                                  </button>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.section>

          {/* Related Content Grid */}
          {(relatedInfographics.length > 0 || relatedPosts.length > 0) && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pb-16"
            >
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-orange-400" />
                  </span>
                  Related Resources
                </h2>

                <div className="space-y-8">
                  {/* Related Articles – как на /compare/ergo-vs-bitcoin */}
                  {relatedPosts.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-neutral-400 mb-3 uppercase tracking-wide">
                        Articles
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {relatedPosts.slice(0, 2).map((post) => (
                          <Link
                            key={post.slug}
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
                                  {post.date && (
                                    <div className="flex items-center gap-3 mt-2 text-xs text-neutral-500">
                                      <span className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {new Date(post.date).toLocaleDateString("en-US", {
                                          month: "short",
                                          day: "numeric",
                                          year: "numeric",
                                        })}
                                      </span>
                                      {post.readTime && <span>{post.readTime} min read</span>}
                                    </div>
                                  )}
                                </div>
                                <ArrowRight className="w-5 h-5 text-neutral-500 group-hover:text-orange-400 flex-shrink-0" />
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Related Infographics – как на /compare/ergo-vs-bitcoin */}
                  {relatedInfographics.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-neutral-400 mb-3 uppercase tracking-wide">
                        Infographics
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {relatedInfographics.slice(0, 2).map((infographic) => (
                          <Link
                            key={infographic.slug}
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
                                      loading="lazy"
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
                                <ArrowRight className="w-5 h-5 text-neutral-500 group-hover:text-orange-400 flex-shrink-0" />
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Related Playbooks – оставляем компактным блоком */}
                  {relatedPlaybooks.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-neutral-400 mb-3 uppercase tracking-wide">
                        Playbooks
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {relatedPlaybooks.slice(0, 2).map((related) => {
                          const RelatedIcon = iconMap[related.icon] || BookOpen;
                          return (
                            <Link key={related.slug} href={`/playbooks/${related.slug}`} className="block group h-full">
                              <div className="bg-black/60 border border-white/10 rounded-xl p-4 hover:border-orange-400/40 transition-all hover:bg-black/70 h-full flex flex-col">
                                <div className="flex items-start gap-3 mb-2 flex-1">
                                  <div
                                    className={`w-8 h-8 rounded-lg bg-gradient-to-br ${
                                      clusterColors[related.cluster] || "from-orange-500 to-red-500"
                                    } flex items-center justify-center flex-shrink-0`}
                                  >
                                    <RelatedIcon className="w-4 h-4 text-white" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold text-white group-hover:text-orange-400 transition-colors line-clamp-2">
                                      {related.title}
                                    </h3>
                                    <p className="text-xs text-neutral-500 mt-1 line-clamp-2">
                                      {related.subtitle}
                                    </p>
                                  </div>
                                </div>
                                <div className="flex items-center justify-between text-[11px] text-neutral-500">
                                  <span>{related.timeToComplete}</span>
                                  <span>{related.steps.length} steps</span>
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.section>
          )}

          {/* Case Studies */}
          {playbook.caseStudies && playbook.caseStudies.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pb-16"
            >
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
                    <Target className="w-4 h-4 text-orange-400" />
                  </span>
                  Case Studies
                </h2>
                <div className="space-y-4">
                  {playbook.caseStudies.map((caseStudy, index) => {
                    const cardInner = (
                      <Card className="bg-black border border-white/10 rounded-2xl hover:border-orange-400/40 transition-all duration-300">
                        <CardContent className="p-5">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
                                {caseStudy.title}
                              </h3>
                              <p className="text-neutral-400 text-sm mb-3">
                                {caseStudy.description}
                              </p>
                              {caseStudy.outcome && (
                                <div className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-400" />
                                  <span className="text-green-400 text-sm">
                                    {caseStudy.outcome}
                                  </span>
                                </div>
                              )}
                            </div>
                            {caseStudy.link && (
                              <div className="flex-shrink-0 p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                                <ExternalLink className="w-5 h-5 text-neutral-400" />
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    );

                    return caseStudy.link ? (
                      <Link
                        key={index}
                        href={caseStudy.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group"
                      >
                        {cardInner}
                      </Link>
                    ) : (
                      <div key={index}>{cardInner}</div>
                    );
                  })}
                </div>
              </div>
            </motion.section>
          )}

          {/* Final CTA */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="py-12"
          >
            <div className="max-w-4xl mx-auto">
              <Card className="bg-black border border-white/10 rounded-3xl overflow-hidden">
                <CardContent className="p-8 text-center">
                  {isCompleted ? (
                    <>
                      <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                        <Trophy className="w-8 h-8 text-green-400" />
                      </div>
                      <h2 className="text-2xl font-bold text-white mb-2">
                        Congratulations!
                      </h2>
                      <p className="text-neutral-400 mb-6">
                        You've completed this playbook. Ready for the next challenge?
                      </p>
                    </>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-white mb-2">
                        Ready to Get Started?
                      </h2>
                      <p className="text-neutral-400 mb-6">
                        Complete this playbook and join the Ergo community.
                      </p>
                    </>
                  )}
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link
                      href={playbook.primaryCTA.href}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-black font-semibold transition-colors"
                    >
                      {playbook.primaryCTA.label}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/playbooks"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold border border-white/10 transition-colors"
                    >
                      Browse All Playbooks
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.section>
        </div>
      </div>
    </BackgroundWrapper>
  );
}
