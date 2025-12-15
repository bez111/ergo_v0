"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */

import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import {
  ArrowRight,
  HelpCircle,
  CheckCircle,
  BookOpen,
  FileText,
  Layers,
  Image as ImageIcon,
  Lightbulb,
  Code,
  ExternalLink,
  Share2,
  Copy,
  Check,
  Clock
} from "lucide-react";
import { useState } from "react";
import { QuestionEntry, QuestionResource } from "@/data/questions";
import { BackgroundWrapper } from "@/components/home/background-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { GlossaryRichText } from "@/components/glossary";

interface Props {
  question: QuestionEntry;
  relatedQuestions: QuestionEntry[];
}

const resourceTypeIcons: Record<string, React.ElementType> = {
  'doc': FileText,
  'blog': BookOpen,
  'playbook': Layers,
  'infographic': ImageIcon,
  'glossary': Lightbulb,
  'compare': Code,
  'technology': Code
};

const resourceTypeLabels: Record<string, string> = {
  'doc': 'Documentation',
  'blog': 'Blog Article',
  'playbook': 'Playbook',
  'infographic': 'Infographic',
  'glossary': 'Glossary',
  'compare': 'Comparison',
  'technology': 'Technology'
};

const intentColors: Record<string, string> = {
  'how_to': 'bg-green-500/20 text-green-400 border-green-500/30',
  'what_is': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'compare': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  'problem': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  'philosophy': 'bg-amber-500/20 text-amber-400 border-amber-500/30'
};

const intentLabels: Record<string, string> = {
  'how_to': 'How-to Guide',
  'what_is': 'Explainer',
  'compare': 'Comparison',
  'problem': 'Solution',
  'philosophy': 'Philosophy'
};

// Category to Topic mapping for internal linking
const categoryToTopic: Record<string, { slug: string; title: string }> = {
  'DeFi': { slug: 'ergo-defi', title: 'DeFi on Ergo' },
  'Privacy': { slug: 'ergo-privacy', title: 'Privacy on Ergo' },
  'Technology': { slug: 'ergo-technology', title: 'Ergo Technology' },
  'Mining': { slug: 'ergo-mining', title: 'Mining on Ergo' },
  'Sustainability': { slug: 'ergo-sustainability', title: 'Sustainability on Ergo' },
  'Philosophy': { slug: 'ergo-philosophy', title: 'Ergo Philosophy' },
};

export function QuestionPageClient({ question, relatedQuestions }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    const shareUrl = window.location.href;
    const shareTagline = '@BuildOnErgo $ERG';
    const twitterText = `${question.query}\n${shareUrl} ${shareTagline}`;
    
    // Check if mobile (use navigator.share) or desktop (use Twitter URL directly)
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile && navigator.share) {
      try {
        await navigator.share({
          title: question.query,
          text: twitterText,
        });
      } catch {
        // User cancelled - fallback to Twitter
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(twitterText)}`;
        window.open(twitterUrl, '_blank', 'noopener,noreferrer');
      }
    } else {
      // Desktop: always use Twitter URL directly for consistent formatting
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(twitterText)}`;
      window.open(twitterUrl, '_blank', 'noopener,noreferrer,width=600,height=400');
    }
  };

  // Group resources by type for organized display
  const resourcesByType = question.bestResources.reduce((acc, resource) => {
    const type = resource.type;
    if (!acc[type]) acc[type] = [];
    acc[type].push(resource);
    return acc;
  }, {} as Record<string, QuestionResource[]>);

  return (
    <BackgroundWrapper>
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <Breadcrumbs
              type="questions"
              currentTitle={question.query}
              category={question.category}
            />
          </motion.div>

          {/* Question Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-10"
          >
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge className={intentColors[question.intent]}>
                {intentLabels[question.intent]}
              </Badge>
              <Badge variant="outline" className="border-white/20 text-neutral-300">
                {question.category}
              </Badge>
              <Badge variant="outline" className="border-white/20 text-neutral-400 text-xs">
                <Clock className="w-3 h-3 mr-1" />
                Updated {new Date(question.updatedDate || question.publishDate).toLocaleDateString()}
              </Badge>
            </div>
            
            {/* H1 = The Question - optimized for featured snippets */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {question.query}
            </h1>

            {/* Share + Copy buttons */}
            <div className="flex items-center gap-2 flex-wrap">
              <Button
                variant="default"
                size="sm"
                onClick={handleShare}
                className="bg-orange-500 hover:bg-orange-600 text-black font-semibold"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopy}
                className="border-white/20 text-neutral-300 hover:text-white"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-2 text-green-400" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy link
                  </>
                )}
              </Button>
            </div>
          </motion.header>

          {/* Featured Snippet Answer - THE KEY SEO ELEMENT */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10"
          >
            <Card className="bg-black border border-white/10 rounded-2xl">
              <CardContent className="p-6 md:p-8">
                <GlossaryRichText 
                  maxLinksPerNode={3} 
                  firstOccurrenceOnly={true}
                  variant="subtle"
                  showTooltip={true}
                >
                  {/* Short answer - optimized for featured snippets */}
                  <p className="text-lg md:text-xl text-white leading-relaxed mb-6">
                    {question.shortAnswer}
                  </p>

                  {/* Key points as bullet list */}
                  {question.keyPoints && question.keyPoints.length > 0 && (
                    <ul className="space-y-3">
                      {question.keyPoints.map((point, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-300">{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </GlossaryRichText>
              </CardContent>
            </Card>
          </motion.section>

          {/* Deep Dive Resources */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-orange-400" />
              Deep Dive Resources
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {question.bestResources.map((resource, index) => {
                const Icon = resourceTypeIcons[resource.type] || FileText;
                
                return (
                  <Link
                    key={index}
                    href={`${resource.url}?utm_source=qa&utm_medium=resource&utm_campaign=${question.slug}`}
                    className="group block"
                  >
                    <Card className="bg-black border border-white/10 rounded-2xl hover:border-orange-500/30 transition-all duration-300 h-full">
                      <CardContent className="p-5">
                        <div className="flex items-start gap-4">
                          <div className="p-2 bg-orange-500/10 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                            <Icon className="w-5 h-5 text-orange-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs text-neutral-400">
                                {resourceTypeLabels[resource.type]}
                              </span>
                              {resource.badge && (
                                <Badge variant="outline" className="text-xs border-orange-500/30 text-orange-400">
                                  {resource.badge}
                                </Badge>
                              )}
                            </div>
                            <h3 className="font-medium text-white group-hover:text-orange-400 transition-colors">
                              {resource.title}
                            </h3>
                          </div>
                          <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-orange-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </motion.section>

          {/* Related Topic */}
          {categoryToTopic[question.category] && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mb-12"
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-orange-400" />
                Explore This Topic
              </h2>
              <Link
                href={`/topics/${categoryToTopic[question.category].slug}?utm_source=qa&utm_medium=topic&utm_campaign=${question.slug}`}
                className="group block"
              >
                <Card className="bg-black border border-white/10 rounded-xl hover:border-orange-500/30 transition-all">
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-orange-500/10 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                          <Layers className="w-5 h-5 text-orange-400" />
                        </div>
                        <div>
                          <span className="text-white font-medium group-hover:text-orange-400 transition-colors">
                            {categoryToTopic[question.category].title}
                          </span>
                          <p className="text-sm text-neutral-400">
                            Deep dive into all {question.category} resources
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.section>
          )}

          {/* Related Questions */}
          {relatedQuestions.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-orange-400" />
                Related Questions
              </h2>

              <div className="space-y-3">
                {relatedQuestions.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/questions/${related.slug}`}
                    className="group block"
                  >
                    <div className="flex items-center justify-between gap-4 p-4 bg-black border border-white/10 rounded-xl hover:border-orange-500/30 transition-all">
                      <div className="flex items-center gap-3">
                        <HelpCircle className="w-5 h-5 text-neutral-400 group-hover:text-orange-400 transition-colors" />
                        <span className="text-white group-hover:text-orange-400 transition-colors">
                          {related.query}
                        </span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                ))}
              </div>
            </motion.section>
          )}

          {/* CTA */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card className="bg-black border border-white/10 rounded-2xl">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-white mb-2">
                  Still have questions?
                </h3>
                <p className="text-neutral-400 mb-6">
                  Join our community and get answers from Ergo experts.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
                    <Link href="/start/community">
                      Join Community
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    <Link href="/questions">
                      Browse All Questions
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.section>

        </div>
      </div>
    </BackgroundWrapper>
  );
}

