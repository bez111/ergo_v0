"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */

import { Link } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wallet,
  Shield,
  Pickaxe,
  Code,
  Lightbulb,
  Leaf,
  ArrowRight,
  Layers,
  BookOpen,
  Sparkles,
  Search,
  X,
  Filter
} from "lucide-react";
import { useState, useMemo } from "react";
import { TopicHub } from "@/data/topics";
import { BackgroundWrapper } from "@/components/home/background-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Props {
  topics: TopicHub[];
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
  'orange': { 
    bg: 'bg-orange-500/10', 
    border: 'border-orange-500/30', 
    text: 'text-orange-400',
    gradient: 'from-orange-500/20 to-transparent'
  },
  'purple': { 
    bg: 'bg-purple-500/10', 
    border: 'border-purple-500/30', 
    text: 'text-purple-400',
    gradient: 'from-purple-500/20 to-transparent'
  },
  'amber': { 
    bg: 'bg-amber-500/10', 
    border: 'border-amber-500/30', 
    text: 'text-amber-400',
    gradient: 'from-amber-500/20 to-transparent'
  },
  'blue': { 
    bg: 'bg-blue-500/10', 
    border: 'border-blue-500/30', 
    text: 'text-blue-400',
    gradient: 'from-blue-500/20 to-transparent'
  },
  'rose': { 
    bg: 'bg-rose-500/10', 
    border: 'border-rose-500/30', 
    text: 'text-rose-400',
    gradient: 'from-rose-500/20 to-transparent'
  },
  'green': { 
    bg: 'bg-green-500/10', 
    border: 'border-green-500/30', 
    text: 'text-green-400',
    gradient: 'from-green-500/20 to-transparent'
  }
};

export function TopicsHubClient({ topics }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  // Filter categories derived from topic colors/types
  const filterCategories = [
    { key: "orange", label: "DeFi", icon: Wallet },
    { key: "purple", label: "Privacy", icon: Shield },
    { key: "amber", label: "Mining", icon: Pickaxe },
    { key: "blue", label: "Technology", icon: Code },
    { key: "rose", label: "Philosophy", icon: Lightbulb },
    { key: "green", label: "Sustainability", icon: Leaf },
  ];

  // Filtered topics based on search and filter
  const filteredTopics = useMemo(() => {
    let result = topics;

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(topic => 
        topic.title.toLowerCase().includes(query) ||
        topic.subtitle.toLowerCase().includes(query) ||
        topic.keywords.some(kw => kw.toLowerCase().includes(query)) ||
        topic.keyDifferentiators.some(diff => diff.toLowerCase().includes(query))
      );
    }

    // Apply category filter
    if (activeFilter) {
      result = result.filter(topic => topic.color === activeFilter);
    }

    return result;
  }, [topics, searchQuery, activeFilter]);

  return (
    <BackgroundWrapper>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Hero Section */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Explore Ergo by <span className="text-orange-400">Topic</span>
            </h1>
            
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-6">
              Deep dives into every major part of Ergo. Each topic hub brings together guides, docs,
              infographics, glossary terms, and practical playbooks.
            </p>

            <div className="flex flex-wrap gap-3 justify-center mt-4">
              <Badge variant="outline" className="border-white/20 text-neutral-300">
                <BookOpen className="w-3 h-3 mr-1" />
                {topics.length} Topic Hubs
              </Badge>
              <Badge variant="outline" className="border-white/20 text-neutral-300">
                <Sparkles className="w-3 h-3 mr-1" />
                Comprehensive Coverage
              </Badge>
            </div>
          </motion.header>

          {/* Search and Filters */}
          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-8"
          >
            {/* Search Input */}
            <div className="relative max-w-xl mx-auto mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
              <input
                type="text"
                placeholder="Search topics by name, keyword, or concept..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-10 py-3 bg-black/60 border border-white/20 rounded-xl text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all"
                aria-label="Search topics"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-neutral-500 hover:text-white transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setActiveFilter(null)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === null
                    ? "bg-orange-500 text-black"
                    : "bg-white/10 text-neutral-300 hover:bg-white/20"
                }`}
              >
                <Filter className="w-3.5 h-3.5" />
                All
              </button>
              {filterCategories.map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setActiveFilter(activeFilter === key ? null : key)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFilter === key
                      ? "bg-orange-500 text-black"
                      : "bg-white/10 text-neutral-300 hover:bg-white/20"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {label}
                </button>
              ))}
            </div>

            {/* Results count */}
            {(searchQuery || activeFilter) && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-sm text-neutral-500 mt-4"
              >
                Showing {filteredTopics.length} of {topics.length} topics
                {searchQuery && ` for "${searchQuery}"`}
              </motion.p>
            )}
          </motion.section>

          {/* Topics Grid */}
          <section aria-live="polite" aria-atomic="false">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredTopics.map((topic, index) => {
                  const Icon = iconMap[topic.icon] || Code;
                  const colors = colorMap[topic.color] || colorMap["orange"];
                  const resourceCount = topic.startHere.length + topic.buildWithIt.length + topic.philosophy.length;

                  return (
                    <motion.div
                      key={topic.slug}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.25, delay: 0.03 * index }}
                    >
                      <Link href={`/topics/${topic.slug}`} className="group block h-full">
                        <Card className={`bg-gradient-to-br ${colors.gradient} border ${colors.border} rounded-2xl hover:border-opacity-60 transition-all duration-300 h-full`}>
                          <CardContent className="p-6">
                            {/* Icon */}
                            <div className={`inline-flex p-3 ${colors.bg} rounded-xl mb-4`}>
                              <Icon className={`w-6 h-6 ${colors.text}`} />
                            </div>
                            
                            {/* Title & Subtitle */}
                            <h2 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors mb-2">
                              {topic.title}
                            </h2>
                            <p className={`text-sm ${colors.text} mb-4`}>
                              {topic.subtitle}
                            </p>

                            {/* Ergo-angle differentiators (what makes this topic unique on Ergo) */}
                            <div className="space-y-2 mb-6">
                              {topic.keyDifferentiators.slice(0, 3).map((diff, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <div className={`w-1.5 h-1.5 rounded-full ${colors.text.replace('text-', 'bg-')} mt-2`} />
                                  <span className="text-xs text-neutral-400 line-clamp-1">{diff}</span>
                                </div>
                              ))}
                            </div>
                            
                            {/* Stats */}
                            <div className="flex items-center justify-between pt-4 border-t border-white/10">
                              <div className="flex flex-wrap gap-3 text-xs text-neutral-500">
                                <span>{topic.keyTerms.length} key terms</span>
                                <span>{resourceCount} guides &amp; docs</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs text-neutral-400">
                                <span className="group-hover:text-neutral-200 transition-colors">
                                  Open hub
                                </span>
                                <ArrowRight className={`w-5 h-5 ${colors.text} group-hover:translate-x-1 transition-transform`} />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Empty state */}
            {filteredTopics.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-white mb-2">No topics found</h3>
                <p className="text-neutral-400 mb-6">
                  Try adjusting your search or filter criteria
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveFilter(null);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-black rounded-xl transition-colors"
                >
                  Clear filters
                </button>
              </motion.div>
            )}
          </section>

          {/* Bottom CTA */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <Card className="bg-black/60 border border-white/10 rounded-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Looking for something specific?
                </h3>
                <p className="text-neutral-400 mb-6 max-w-md mx-auto">
                  Try our Q&A hub for quick answers or browse the glossary for term definitions.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Link 
                    href="/questions" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl transition-colors"
                  >
                    Browse Q&A
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link 
                    href="/learn/glossary" 
                    className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white hover:bg-white/10 rounded-xl transition-colors"
                  >
                    View Glossary
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.section>

        </div>
      </div>
    </BackgroundWrapper>
  );
}

