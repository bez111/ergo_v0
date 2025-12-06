"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  BookOpen,
  FileText,
  Layers,
  Image as ImageIcon,
  Lightbulb,
  Code,
  HelpCircle,
  ExternalLink,
  Share2,
  Copy,
  Check,
  Wallet,
  Shield,
  Pickaxe,
  Leaf,
  Sparkles,
  GraduationCap,
  Hammer,
  Heart,
  Eye
} from "lucide-react";
import { useState } from "react";
import { TopicHub, TopicResource, TopicTerm, TopicQuestion } from "@/data/topics";
import { BackgroundWrapper } from "@/components/home/background-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BackToTop } from "@/components/ui/back-to-top";
import { ClusterRelatedContent } from "@/components/seo/cluster-related-content";

interface Props {
  topic: TopicHub;
  relatedTopics: TopicHub[];
}

const iconMap: Record<string, React.ElementType> = {
  'Wallet': Wallet,
  'Shield': Shield,
  'Pickaxe': Pickaxe,
  'Code': Code,
  'Lightbulb': Lightbulb,
  'Leaf': Leaf
};

const colorMap: Record<string, { bg: string; border: string; text: string; gradient: string }> = {
  'orange': { bg: 'bg-orange-500/10', border: 'border-orange-500/30', text: 'text-orange-400', gradient: 'from-orange-500/20' },
  'purple': { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400', gradient: 'from-purple-500/20' },
  'amber': { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-400', gradient: 'from-amber-500/20' },
  'blue': { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400', gradient: 'from-blue-500/20' },
  'rose': { bg: 'bg-rose-500/10', border: 'border-rose-500/30', text: 'text-rose-400', gradient: 'from-rose-500/20' },
  'green': { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400', gradient: 'from-green-500/20' }
};

const resourceTypeIcons: Record<string, React.ElementType> = {
  'doc': FileText,
  'blog': BookOpen,
  'playbook': Layers,
  'infographic': ImageIcon,
  'glossary': Lightbulb,
  'compare': Code,
  'technology': Code,
  'question': HelpCircle
};

export function TopicPageClient({ topic, relatedTopics }: Props) {
  const [copied, setCopied] = useState(false);
  const Icon = iconMap[topic.icon] || Code;
  const colors = colorMap[topic.color] || colorMap['orange'];

  const handleCopy = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: topic.title,
          text: topic.seoDescription,
          url: window.location.href
        });
      } catch {
        // User cancelled
      }
    } else {
      // On desktop, open Twitter/X share
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(topic.title)}&url=${encodeURIComponent(window.location.href)}`;
      window.open(twitterUrl, '_blank', 'noopener,noreferrer,width=600,height=400');
    }
  };

  return (
  <BackgroundWrapper>
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-5xl mx-auto">
          
          {/* Hero Section */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className={`p-4 ${colors.bg} rounded-2xl`}>
                <Icon className={`w-8 h-8 ${colors.text}`} />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {topic.title}
                </h1>
                <p className={`text-lg ${colors.text}`}>
                  {topic.subtitle}
                </p>
              </div>
            </div>

            {/* Share + Back buttons */}
            <div className="flex items-center gap-2 flex-wrap">
              <Button
                size="sm"
                onClick={handleShare}
                className="bg-orange-500 hover:bg-orange-600 text-black border-orange-500 hover:border-orange-600"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm" onClick={handleCopy} className="border-white/20 text-neutral-300 hover:text-white">
                {copied ? <><Check className="w-4 h-4 mr-2 text-green-400" />Copied</> : <><Copy className="w-4 h-4 mr-2" />Copy link</>}
              </Button>
              <Button
                variant="ghost"
                className="text-neutral-400 hover:text-white"
                asChild
              >
                <Link href="/topics">
                  Back to Topics
                </Link>
              </Button>
            </div>
          </motion.header>

          {/* Hero Statement */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <Card className={`bg-black/80 border ${colors.border} rounded-2xl`}>
              <CardContent className="p-8">
                <blockquote className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                  "{topic.heroStatement}"
                </blockquote>
                
                <p className="text-lg text-neutral-300 leading-relaxed mb-6">
                  {topic.introduction}
                </p>

                <p className="text-neutral-400 leading-relaxed">
                  {topic.whatMakesUnique}
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Key Differentiators */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Sparkles className={`w-6 h-6 ${colors.text}`} />
              Key Differentiators
            </h2>
            
              <div className="grid md:grid-cols-2 gap-4">
              {topic.keyDifferentiators.map((diff, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 p-4 bg-black/80 border border-white/10 rounded-xl"
                >
                  <CheckCircle className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                  <span className="text-neutral-300">{diff}</span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Start Here - Featured Resources */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <GraduationCap className={`w-6 h-6 ${colors.text}`} />
              Start Here
            </h2>
            <p className="text-neutral-400 mb-6">Essential resources to understand the fundamentals.</p>
            
            <div className="grid md:grid-cols-3 gap-4">
              {topic.startHere.map((resource, index) => (
                <ResourceCard key={index} resource={resource} colors={colors} topicSlug={topic.slug} />
              ))}
            </div>
          </motion.section>

          {/* Build With It - Developer Resources */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Hammer className={`w-6 h-6 ${colors.text}`} />
              Build With It
            </h2>
            <p className="text-neutral-400 mb-6">Developer documentation, patterns, and guides.</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {topic.buildWithIt.map((resource, index) => (
                <ResourceCard key={index} resource={resource} colors={colors} topicSlug={topic.slug} compact />
              ))}
            </div>
          </motion.section>

          {/* Philosophy & Narrative */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Heart className={`w-6 h-6 ${colors.text}`} />
              Philosophy & Narrative
            </h2>
            <p className="text-neutral-400 mb-6">The vision and principles behind the technology.</p>
            
            <div className="grid md:grid-cols-3 gap-4">
              {topic.philosophy.map((resource, index) => (
                <ResourceCard key={index} resource={resource} colors={colors} topicSlug={topic.slug} />
              ))}
            </div>
          </motion.section>

          {/* Visual Resources */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Eye className={`w-6 h-6 ${colors.text}`} />
              Visual Guides
            </h2>
            <p className="text-neutral-400 mb-6">Infographics and visual explanations to share.</p>
            
            <div className="grid md:grid-cols-3 gap-4">
              {topic.visuals.map((resource, index) => (
                <ResourceCard key={index} resource={resource} colors={colors} topicSlug={topic.slug} />
              ))}
            </div>
          </motion.section>

          {/* Key Terms - DefinedTermSet */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-12"
          >
            <Card className="bg-black/80 border border-white/10 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-2">
                  <Lightbulb className={`w-6 h-6 ${colors.text}`} />
                  Key Terms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {topic.keyTerms.map((term, index) => (
                    <TermCard key={index} term={term} colors={colors} topicSlug={topic.slug} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Related Questions */}
            {topic.relatedQuestions.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mb-12"
            >
              <Card className="bg-black/80 border border-white/10 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center gap-2">
                    <HelpCircle className={`w-6 h-6 ${colors.text}`} />
                    Common Questions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {topic.relatedQuestions.map((question, index) => (
                      <QuestionCard key={index} question={question} colors={colors} topicSlug={topic.slug} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.section>
          )}

          {/* Related Topics */}
          {relatedTopics.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Layers className={`w-6 h-6 ${colors.text}`} />
                Related Topics
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {relatedTopics.map((related) => {
                  const RelatedIcon = iconMap[related.icon] || Code;
                  const relatedColors = colorMap[related.color] || colorMap['orange'];
                  
                  return (
                    <Link key={related.slug} href={`/topics/${related.slug}`} className="group block">
                      <Card className={`bg-black/80 border ${relatedColors.border} rounded-2xl hover:border-opacity-60 transition-all`}>
                        <CardContent className="p-5">
                          <div className="flex items-center gap-4">
                            <div className={`p-3 ${relatedColors.bg} rounded-xl`}>
                              <RelatedIcon className={`w-5 h-5 ${relatedColors.text}`} />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-white group-hover:text-orange-400 transition-colors">
                                {related.title}
                              </h3>
                              <p className="text-sm text-neutral-400">{related.subtitle}</p>
                            </div>
                            <ArrowRight className={`w-5 h-5 ${relatedColors.text} group-hover:translate-x-1 transition-transform`} />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </motion.section>
          )}

          {/* CTA */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <Card className={`bg-black/80 border ${colors.border} rounded-2xl`}>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Ready to dive deeper?
                </h3>
                <p className="text-neutral-300 mb-6 max-w-md mx-auto">
                  Join our community to ask questions, share ideas, and connect with other Ergo enthusiasts.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
                    <Link href="/start/community">
                      Join Community
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    <Link href="/topics">
                      Explore All Topics
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.section>

        </div>
      </div>

      {/* Topic Cluster Related Content */}
      <ClusterRelatedContent 
        currentUrl={`/topics/${topic.slug}`}
        title="Related Resources"
        subtitle="Explore more content in this topic cluster"
        maxItems={6}
      />
      
      {/* Back to Top button for long page */}
      <BackToTop />
    </BackgroundWrapper>
  );
}

// Resource Card Component
function ResourceCard({ 
  resource, 
  colors, 
  topicSlug,
  compact = false 
}: { 
  resource: TopicResource; 
  colors: { bg: string; border: string; text: string; gradient: string };
  topicSlug: string;
  compact?: boolean;
}) {
  const Icon = resourceTypeIcons[resource.type] || FileText;
  const isExternal = resource.url.startsWith('http');
  const href = isExternal 
    ? resource.url 
    : `${resource.url}?utm_source=topic&utm_medium=${resource.type}&utm_campaign=${topicSlug}`;

  return (
    <Link href={href} className="group block" target={isExternal ? "_blank" : undefined}>
      <Card className="bg-black/80 border border-white/10 rounded-2xl hover:border-orange-500/30 transition-all h-full">
        <CardContent className={compact ? "p-4" : "p-5"}>
          <div className="flex items-start gap-3">
            <div className={`p-2 ${colors.bg} rounded-lg group-hover:bg-orange-500/20 transition-colors`}>
              <Icon className={`w-4 h-4 ${colors.text}`} />
            </div>
            <div className="flex-1 min-w-0">
              {resource.badge && (
                <Badge variant="outline" className={`text-xs mb-2 ${colors.border} ${colors.text}`}>
                  {resource.badge}
                </Badge>
              )}
              <h3 className={`font-medium text-white group-hover:text-orange-400 transition-colors ${compact ? 'text-sm' : ''}`}>
                {resource.title}
              </h3>
              {resource.description && !compact && (
                <p className="text-sm text-neutral-400 mt-1 line-clamp-2">
                  {resource.description}
                </p>
              )}
            </div>
            {isExternal ? (
              <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-orange-400 flex-shrink-0" />
            ) : (
              <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-orange-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

// Term Card Component
function TermCard({ 
  term, 
  colors,
  topicSlug 
}: { 
  term: TopicTerm; 
  colors: { bg: string; border: string; text: string; gradient: string };
  topicSlug: string;
}) {
  return (
    <Link 
      href={`/learn/glossary/${term.slug}?utm_source=topic&utm_medium=term&utm_campaign=${topicSlug}`} 
      className="group block"
    >
      <div className="p-4 bg-black/80 border border-white/10 rounded-xl hover:border-orange-500/30 transition-all">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h4 className={`font-semibold ${colors.text} group-hover:text-orange-400 transition-colors`}>
              {term.term}
            </h4>
            <p className="text-sm text-neutral-400 mt-1">
              {term.shortDefinition}
            </p>
          </div>
          <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-orange-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
        </div>
      </div>
    </Link>
  );
}

// Question Card Component
function QuestionCard({ 
  question, 
  colors,
  topicSlug 
}: { 
  question: TopicQuestion; 
  colors: { bg: string; border: string; text: string; gradient: string };
  topicSlug: string;
}) {
  return (
    <Link 
      href={`/questions/${question.slug}?utm_source=topic&utm_medium=question&utm_campaign=${topicSlug}`} 
      className="group block"
    >
      <div className="flex items-center justify-between gap-4 p-4 bg-black/80 border border-white/10 rounded-xl hover:border-orange-500/30 transition-all">
        <div className="flex items-center gap-3">
          <HelpCircle className={`w-5 h-5 ${colors.text}`} />
          <span className="text-white group-hover:text-orange-400 transition-colors">
            {question.question}
          </span>
        </div>
        <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
      </div>
    </Link>
  );
}

