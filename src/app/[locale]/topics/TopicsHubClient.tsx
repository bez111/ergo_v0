"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */

import Link from "next/link";
import { motion } from "framer-motion";
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
  Sparkles
} from "lucide-react";
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

          {/* Topics Grid */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topics.map((topic, index) => {
                const Icon = iconMap[topic.icon] || Code;
                const colors = colorMap[topic.color] || colorMap["orange"];
                const resourceCount = topic.startHere.length + topic.buildWithIt.length + topic.philosophy.length;

                return (
                  <motion.div
                    key={topic.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
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
            </div>
          </motion.section>

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

