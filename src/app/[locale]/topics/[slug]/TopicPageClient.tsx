"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
  Eye,
  ChevronDown,
  ChevronUp,
  Target,
  Zap
} from "lucide-react";
import { useState, useEffect } from "react";
import { TopicHub, TopicResource, TopicTerm, TopicQuestion } from "@/data/topics";
import { getBlogPost, type BlogPost } from "@/app/[locale]/blog/_lib/blog-data";
import { BackgroundWrapper } from "@/components/home/background-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BackToTop } from "@/components/ui/back-to-top";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { cn } from "@/lib/utils";

interface Props {
  topic: TopicHub;
  relatedTopics: TopicHub[];
  nextTopic?: TopicHub | null;
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

// Extract blog posts from topic resources
const getTopicBlogPosts = (topic: TopicHub): BlogPost[] => {
  const allResources = [
    ...topic.startHere,
    ...topic.buildWithIt,
    ...topic.philosophy,
  ];
  
  const blogSlugs = allResources
    .filter(r => r.type === 'blog' && r.url.startsWith('/blog/'))
    .map(r => r.url.replace('/blog/', ''))
    .slice(0, 3); // Max 3 articles
  
  return blogSlugs
    .map(slug => getBlogPost(slug))
    .filter((post): post is BlogPost => post !== undefined);
};

// TOC Items for the topic page
const getTocItems = (topic: TopicHub, hasBlogPosts: boolean) => [
  { label: "Overview", href: "#overview" },
  { label: "Why Ergo Is Different", href: "#why-different" },
  { label: "Key Differentiators", href: "#differentiators" },
  { label: "Start Here", href: "#start-here" },
  { label: "Build With It", href: "#build-with-it" },
  { label: "Philosophy", href: "#philosophy" },
  ...(hasBlogPosts ? [{ label: "Recommended Reading", href: "#articles" }] : []),
  { label: "Visual Guides", href: "#visuals" },
  { label: "Key Terms", href: "#key-terms" },
  ...(topic.relatedQuestions.length > 0 ? [{ label: "Questions", href: "#questions" }] : []),
  { label: "Related Topics", href: "#related" },
];

// Sticky TOC Component (like in blog)
function TopicStickyTOC({ items, title = "On This Page" }: { items: { label: string; href: string }[]; title?: string }) {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
      
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      setProgress(Math.min((scrolled / documentHeight) * 100, 100));

      const sections = items.map(item => item.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-32 z-40 hidden 2xl:block"
          style={{ 
            maxHeight: "calc(100vh - 200px)",
            left: "calc(50% + 520px)"
          }}
        >
          <div className="bg-black/90 backdrop-blur-sm border border-white/10 rounded-2xl p-4 w-56 shadow-2xl">
            {/* Progress bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/5 rounded-l-2xl overflow-hidden">
              <motion.div 
                className="w-full bg-gradient-to-b from-orange-500 to-orange-600"
                style={{ height: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between mb-4 pl-2">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-orange-400" />
                <span className="text-sm font-medium text-white">{title}</span>
              </div>
              <span className="text-xs text-neutral-500">{Math.round(progress)}%</span>
            </div>

            {/* Navigation */}
            <nav className="space-y-1 pl-2">
              {items.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      "w-full text-left text-sm py-1.5 px-2 rounded-lg transition-all duration-200 flex items-center gap-2",
                      isActive 
                        ? "bg-orange-500/20 text-orange-400 font-medium" 
                        : "text-neutral-400 hover:text-white hover:bg-white/5"
                    )}
                  >
                    <span className={cn(
                      "w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors",
                      isActive ? "bg-orange-400" : "bg-neutral-600"
                    )} />
                    <span className="truncate">{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Back to top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="mt-4 w-full flex items-center justify-center gap-2 text-xs text-neutral-500 hover:text-orange-400 transition-colors py-2 border-t border-white/5"
            >
              <ChevronUp className="w-3 h-3" />
              Back to top
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

// Learning Path Progress Component
function LearningPath({ topic, colors }: { topic: TopicHub; colors: { bg: string; text: string } }) {
  const steps = [
    { label: "Learn Basics", section: "#start-here", icon: GraduationCap },
    { label: "Explore Docs", section: "#build-with-it", icon: Hammer },
    { label: "Understand Why", section: "#philosophy", icon: Heart },
  ];

  return (
    <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
      {steps.map((step, index) => (
        <button
          key={step.label}
          onClick={() => {
            const el = document.getElementById(step.section.replace('#', ''));
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          className="group flex items-center gap-2 px-4 py-2 bg-black/60 border border-white/10 rounded-full hover:border-orange-500/30 transition-all"
        >
          <span className={`flex items-center justify-center w-6 h-6 rounded-full ${colors.bg} text-xs font-bold ${colors.text}`}>
            {index + 1}
          </span>
          <step.icon className="w-4 h-4 text-neutral-400 group-hover:text-orange-400 transition-colors" />
          <span className="text-sm text-neutral-300 group-hover:text-white transition-colors">{step.label}</span>
          {index < steps.length - 1 && (
            <ArrowRight className="w-3 h-3 text-neutral-600 ml-1" />
          )}
        </button>
      ))}
    </div>
  );
}

// Accordion Term Component
function AccordionTerm({ 
  term, 
  colors, 
  topicSlug,
  isOpen,
  onToggle
}: { 
  term: TopicTerm; 
  colors: { bg: string; border: string; text: string };
  topicSlug: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden hover:border-orange-500/30 transition-all">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-4 text-left bg-black/80 hover:bg-black/90 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Lightbulb className={`w-5 h-5 ${colors.text} flex-shrink-0`} />
          <span className={`font-semibold ${colors.text}`}>{term.term}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-neutral-400" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-4 pb-4 pt-2 bg-black/60">
              <p className="text-neutral-300 mb-3">{term.shortDefinition}</p>
              <Link
                href={`/learn/glossary/${term.slug}?utm_source=topic&utm_medium=term&utm_campaign=${topicSlug}`}
                className="inline-flex items-center gap-2 text-sm text-orange-400 hover:text-orange-300 transition-colors"
              >
                Learn more
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function TopicPageClient({ topic, relatedTopics, nextTopic }: Props) {
  const [copied, setCopied] = useState(false);
  const [openTermIndex, setOpenTermIndex] = useState<number | null>(null);
  const Icon = iconMap[topic.icon] || Code;
  const colors = colorMap[topic.color] || colorMap['orange'];
  const blogPosts = getTopicBlogPosts(topic);
  const tocItems = getTocItems(topic, blogPosts.length > 0);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    const shareUrl = window.location.href;
    const shareTagline = '@BuildOnErgo $ERG';
    const twitterText = `${topic.title}\n${shareUrl} ${shareTagline}`;
    
    // Check if mobile (use navigator.share) or desktop (use Twitter URL directly)
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile && navigator.share) {
      try {
        await navigator.share({
          title: topic.title,
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

  // Get next topic from related topics if not provided
  const actualNextTopic = nextTopic || (relatedTopics.length > 0 ? relatedTopics[0] : null);

  return (
    <BackgroundWrapper>
      {/* Sticky TOC for wide screens */}
      <TopicStickyTOC items={tocItems} />

      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Breadcrumbs */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <Breadcrumbs
              items={[
                { name: 'Topics', href: '/topics' },
                { name: topic.title, href: `/topics/${topic.slug}` }
              ]}
            />
          </motion.div>

          {/* Hero Section */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
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

            {/* Share buttons */}
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
            </div>
          </motion.header>

          {/* Learning Path Progress */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <LearningPath topic={topic} colors={colors} />
          </motion.div>

          {/* SECTION 1: Overview (Hero Statement) */}
          <motion.section
            id="overview"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 scroll-mt-24"
          >
            <Card className={`bg-black/80 border ${colors.border} rounded-2xl`}>
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Target className={`w-5 h-5 ${colors.text}`} />
                  <span className="text-sm font-medium text-neutral-400 uppercase tracking-wide">Core Idea</span>
                </div>
                <blockquote className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                  "{topic.heroStatement}"
                </blockquote>
                <p className="text-lg text-neutral-300 leading-relaxed">
                  {topic.introduction}
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* SECTION 2: Why Ergo Is Different */}
          <motion.section
            id="why-different"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mb-10 scroll-mt-24"
          >
            <Card className="bg-black/60 border border-white/10 rounded-2xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className={`w-5 h-5 ${colors.text}`} />
                  <span className="text-sm font-medium text-neutral-400 uppercase tracking-wide">Why Ergo Is Different</span>
                </div>
                <p className="text-neutral-300 leading-relaxed">
                  {topic.whatMakesUnique}
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* SECTION 3: Key Differentiators */}
          <motion.section
            id="differentiators"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-10 scroll-mt-24"
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

          {/* SECTION 4: Start Here */}
          <motion.section
            id="start-here"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mb-10 scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
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

          {/* SECTION 5: Build With It */}
          <motion.section
            id="build-with-it"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-10 scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
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

          {/* SECTION 6: Philosophy */}
          <motion.section
            id="philosophy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mb-10 scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
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

          {/* SECTION 7: Recommended Reading - Featured Articles */}
          {blogPosts.length > 0 && (
            <motion.section
              id="articles"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-10 scroll-mt-24"
            >
              <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <BookOpen className={`w-6 h-6 ${colors.text}`} />
                Recommended Reading
              </h2>
              <p className="text-neutral-400 mb-6">Deep-dive articles to master this topic.</p>
              
              <div className="grid gap-4">
                {blogPosts.map((post, index) => (
                  <FeaturedArticleCard key={post.slug} post={post} colors={colors} index={index} />
                ))}
              </div>
            </motion.section>
          )}

          {/* SECTION 8: Visual Guides - with image previews */}
          <motion.section
            id="visuals"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mb-10 scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <Eye className={`w-6 h-6 ${colors.text}`} />
              Visual Guides
            </h2>
            <p className="text-neutral-400 mb-6">Infographics and visual explanations to share.</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {topic.visuals.map((resource, index) => (
                <VisualCard key={index} resource={resource} colors={colors} topicSlug={topic.slug} />
              ))}
            </div>
          </motion.section>

          {/* SECTION 9: Key Terms (Accordion) */}
          <motion.section
            id="key-terms"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-10 scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <Lightbulb className={`w-6 h-6 ${colors.text}`} />
              Key Terms
            </h2>
            <p className="text-neutral-400 mb-6">Essential vocabulary for understanding this topic.</p>
            
            <div className="space-y-3">
              {topic.keyTerms.map((term, index) => (
                <AccordionTerm
                  key={index}
                  term={term}
                  colors={colors}
                  topicSlug={topic.slug}
                  isOpen={openTermIndex === index}
                  onToggle={() => setOpenTermIndex(openTermIndex === index ? null : index)}
                />
              ))}
            </div>
          </motion.section>

          {/* SECTION 10: Common Questions */}
          {topic.relatedQuestions.length > 0 && (
            <motion.section
              id="questions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-10 scroll-mt-24"
            >
              <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className={`w-6 h-6 ${colors.text}`} />
                Common Questions
              </h2>
              <p className="text-neutral-400 mb-6">Frequently asked questions about this topic.</p>
              
              <div className="space-y-3">
                {topic.relatedQuestions.map((question, index) => (
                  <QuestionCard key={index} question={question} colors={colors} topicSlug={topic.slug} />
                ))}
              </div>
            </motion.section>
          )}

          {/* SECTION 11: Related Topics */}
          {relatedTopics.length > 0 && (
            <motion.section
              id="related"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mb-10 scroll-mt-24"
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

          {/* Consolidated CTA + Next Topic */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12"
          >
            <Card className={`bg-gradient-to-br from-black/90 to-black/70 border ${colors.border} rounded-2xl overflow-hidden`}>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Left: CTA */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Ready to dive deeper?
                    </h3>
                    <p className="text-neutral-300 mb-6">
                      Join our community to ask questions, share ideas, and connect with other Ergo enthusiasts.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
                        <Link href="/start/community">
                          Join Community
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10">
                        <Link href="/topics">
                          All Topics
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Right: Next Topic */}
                  {actualNextTopic && (
                    <div className="border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
                      <p className="text-sm text-neutral-400 mb-3 uppercase tracking-wide">Next Topic</p>
                      <Link href={`/topics/${actualNextTopic.slug}`} className="group block">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 ${colorMap[actualNextTopic.color]?.bg || colors.bg} rounded-xl`}>
                            {(() => {
                              const NextIcon = iconMap[actualNextTopic.icon] || Code;
                              return <NextIcon className={`w-6 h-6 ${colorMap[actualNextTopic.color]?.text || colors.text}`} />;
                            })()}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-white group-hover:text-orange-400 transition-colors">
                              {actualNextTopic.title}
                            </h4>
                            <p className="text-sm text-neutral-400">{actualNextTopic.subtitle}</p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-orange-400 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.section>

        </div>
      </div>
      
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

// Featured Article Card Component - prominent with image
function FeaturedArticleCard({ 
  post, 
  colors,
  index
}: { 
  post: BlogPost; 
  colors: { bg: string; border: string; text: string; gradient: string };
  index: number;
}) {
  // Get OG image or fallback
  const imageUrl = post.image || `/og/${post.slug}.png`;
  
  return (
    <Link 
      href={`/blog/${post.slug}?utm_source=topic&utm_medium=article`}
      className="group block"
    >
      <div className="flex flex-col md:flex-row gap-4 p-4 rounded-2xl border border-white/10 hover:border-orange-500/30 transition-all bg-black/60 hover:bg-black/80">
        {/* Image Preview */}
        <div className="relative w-full md:w-48 h-32 flex-shrink-0 overflow-hidden rounded-xl bg-neutral-900">
          <Image
            src={imageUrl}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 192px"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Category badge */}
          <div className="absolute top-2 left-2">
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${colors.bg} ${colors.text}`}>
              {post.category}
            </span>
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 flex flex-col justify-center">
          <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors mb-2 line-clamp-2">
            {post.title}
          </h3>
          <p className="text-sm text-neutral-400 line-clamp-2 mb-3">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-4 text-xs text-neutral-500">
            <span className="flex items-center gap-1">
              <div className="w-5 h-5 rounded-full bg-neutral-700 overflow-hidden">
                {post.author.avatar ? (
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={20}
                    height={20}
                    className="object-cover"
                  />
                ) : (
                  <span className="flex items-center justify-center h-full text-white text-xs">
                    {post.author.name.charAt(0)}
                  </span>
                )}
              </div>
              {post.author.name}
            </span>
            <span>{post.readTime} min read</span>
            {post.difficulty && (
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                post.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                post.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                'bg-red-500/20 text-red-400'
              }`}>
                {post.difficulty}
              </span>
            )}
          </div>
        </div>
        
        {/* Arrow */}
        <div className="hidden md:flex items-center">
          <ArrowRight className="w-5 h-5 text-neutral-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </Link>
  );
}

// Visual Card Component - horizontal with image preview
function VisualCard({ 
  resource, 
  colors, 
  topicSlug 
}: { 
  resource: TopicResource; 
  colors: { bg: string; border: string; text: string; gradient: string };
  topicSlug: string;
}) {
  // Extract slug from URL like /infographics/some-slug -> some-slug
  const urlParts = resource.url.split('/');
  const slug = urlParts[urlParts.length - 1];
  const imageUrl = `/infographics/${slug}.png`;
  
  const href = `${resource.url}?utm_source=topic&utm_medium=visual&utm_campaign=${topicSlug}`;

  return (
    <Link href={href} className="group block">
      <div className="flex items-center gap-4 p-4 rounded-xl border border-white/10 hover:border-orange-500/30 transition-all bg-black/60 hover:bg-black/80">
        {/* Square Image Preview */}
        <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg bg-neutral-900">
          <Image
            src={imageUrl}
            alt={resource.title}
            fill
            sizes="80px"
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        
        {/* Text Content */}
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-white group-hover:text-orange-400 transition-colors line-clamp-1 mb-1">
            {resource.title}
          </h4>
          {resource.description && (
            <p className="text-sm text-neutral-400 line-clamp-2">
              {resource.description}
            </p>
          )}
        </div>
        
        {/* Arrow */}
        <ArrowRight className="w-5 h-5 text-neutral-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
      </div>
    </Link>
  );
}
