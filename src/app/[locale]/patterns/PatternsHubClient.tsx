"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import {
  Search,
  Code,
  Coins,
  Clock,
  Users,
  Database,
  ArrowRight,
  Terminal,
  BookOpen,
  Zap,
  Lock,
  Sparkles,
  Shield,
  Bot
} from "lucide-react";
import { DevPattern, PatternCategory, PatternDifficulty } from "@/data/dev-patterns";
import { BackgroundWrapper } from "@/components/home/background-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CategoryInfo {
  id: PatternCategory;
  label: string;
  description: string;
  count: number;
}

interface Props {
  patterns: DevPattern[];
  categories: CategoryInfo[];
}

const categoryIcons: Record<PatternCategory, React.ElementType> = {
  'token-mechanics': Coins,
  'time-locks-access': Lock,
  'multisig-governance': Users,
  'defi-primitives': Zap,
  'oracle-integration': Database,
  'ergo-native': Sparkles,
  'privacy-sigma': Shield
};

const difficultyColors: Record<PatternDifficulty, string> = {
  beginner: "bg-green-500/20 text-green-400 border-green-500/30",
  intermediate: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  advanced: "bg-orange-500/20 text-orange-400 border-orange-500/30"
};

export function PatternsHubClient({ patterns, categories }: Props) {
  const t = useTranslations('patternsPage');

  const difficultyLabels: Record<PatternDifficulty, string> = {
    beginner: t('difficulty.beginner'),
    intermediate: t('difficulty.intermediate'),
    advanced: t('difficulty.advanced')
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<PatternCategory | "all">("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<PatternDifficulty | "all">("all");

  const filteredPatterns = useMemo(() => {
    return patterns.filter(pattern => {
      const matchesSearch = searchQuery === "" ||
        pattern.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pattern.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pattern.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === "all" || pattern.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === "all" || pattern.difficulty === selectedDifficulty;
      
      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [patterns, searchQuery, selectedCategory, selectedDifficulty]);

  return (
    <BackgroundWrapper>
      <div className="min-h-screen text-white">
        <div className="container mx-auto px-4 py-16 relative z-10">
          
          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-24 pb-12 text-center"
          >
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                {t('hero.titlePart1')} <span className="text-orange-400">{t('hero.titlePart2')}</span>
              </h1>

              <p className="text-xl text-neutral-300 max-w-2xl mx-auto mb-8">
                {t('hero.subtitle')}
              </p>

              {/* Search */}
              <div className="relative max-w-xl mx-auto mb-8">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" aria-hidden="true" />
                <input
                  type="search"
                  placeholder={t('search.placeholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-black/60 border border-white/10 rounded-2xl text-white placeholder:text-neutral-400 focus:outline-none focus:border-orange-500/50 transition-colors"
                  aria-label={t('search.ariaLabel')}
                />
              </div>
            </div>
          </motion.section>

          {/* Filters - min 44px touch targets on mobile */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="pb-8"
          >
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap justify-center gap-4" role="group" aria-label={t('filters.ariaLabel')}>
                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2" role="radiogroup" aria-label={t('filters.categoryAriaLabel')}>
                  <Button
                    variant={selectedCategory === "all" ? "default" : "outline"}
                    onClick={() => setSelectedCategory("all")}
                    className={`min-h-[44px] px-4 py-2 text-sm ${selectedCategory === "all"
                      ? "bg-orange-500 hover:bg-orange-600 text-white border-orange-500"
                      : "border-white/20 text-neutral-300 hover:text-white hover:border-orange-500/50 active:bg-orange-500/20"
                    }`}
                    role="radio"
                    aria-checked={selectedCategory === "all"}
                  >
                    {t('filters.allCategories')}
                  </Button>
                  {categories.map(cat => {
                    const Icon = categoryIcons[cat.id];
                    return (
                      <Button
                        key={cat.id}
                        variant={selectedCategory === cat.id ? "default" : "outline"}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`min-h-[44px] px-4 py-2 text-sm ${selectedCategory === cat.id 
                          ? "bg-orange-500 hover:bg-orange-600 text-white border-orange-500" 
                          : "border-white/20 text-neutral-300 hover:text-white hover:border-orange-500/50 active:bg-orange-500/20"
                        }`}
                        role="radio"
                        aria-checked={selectedCategory === cat.id}
                      >
                        <Icon className="w-4 h-4 mr-1.5" aria-hidden="true" />
                        {cat.label}
                        <span className="ml-1.5 text-xs opacity-60">({cat.count})</span>
                      </Button>
                    );
                  })}
                </div>

              </div>
            </div>
          </motion.section>

          {/* Patterns Grid */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pb-16"
          >
            <div className="max-w-7xl mx-auto">
              {filteredPatterns.length === 0 ? (
                <div className="text-center py-16">
                  <Code className="w-16 h-16 text-neutral-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{t('empty.heading')}</h3>
                  <p className="text-neutral-400">{t('empty.body')}</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" role="list" aria-label="Developer patterns" aria-live="polite">
                  {filteredPatterns.map((pattern, index) => {
                    const CategoryIcon = categoryIcons[pattern.category];
                    return (
                      <motion.div
                        key={pattern.slug}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        role="listitem"
                      >
                        <Link href={`/patterns/${pattern.slug}`}>
                          <Card className="bg-black border border-white/10 rounded-2xl hover:border-orange-400/40 transition-all duration-300 h-full group cursor-pointer hover:shadow-lg hover:-translate-y-1">
                            <CardContent className="p-6">
                              {/* Header */}
                              <div className="flex items-start justify-between gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                                  <CategoryIcon className="w-5 h-5 text-orange-400" />
                                </div>
                                <Badge className={`text-xs ${difficultyColors[pattern.difficulty]}`}>
                                  {difficultyLabels[pattern.difficulty]}
                                </Badge>
                              </div>

                              {/* Title */}
                              <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors mb-2">
                                {pattern.title}
                              </h3>

                              {/* Description */}
                              <p className="text-sm text-neutral-400 mb-4 line-clamp-2">
                                {pattern.shortDescription}
                              </p>

                              {/* Meta */}
                              <div className="flex items-center justify-between text-xs text-neutral-400">
                                <span className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {pattern.timeToImplement}
                                </span>
                                <span className="flex items-center gap-1 text-orange-400 group-hover:translate-x-1 transition-transform">
                                  {t('card.viewPattern')} <ArrowRight className="w-3 h-3" />
                                </span>
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pb-16"
          >
            <div className="max-w-4xl mx-auto">
              <div className="bg-black border border-white/10 rounded-3xl p-8 md:p-12 text-center">
                <div className="w-16 h-16 rounded-2xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-8 h-8 text-orange-400" />
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {t('cta.heading')}
                </h2>

                <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
                  {t('cta.body')}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-xl"
                  >
                    <Link href="/docs/developers">
                      <Terminal className="w-4 h-4 mr-2" />
                      {t('cta.developerDocs')}
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-xl"
                  >
                    <Link href="/playbooks/build-defi-on-ergo">
                      <Zap className="w-4 h-4 mr-2" />
                      {t('cta.buildDeFiPlaybook')}
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-orange-500/40 text-orange-400 hover:bg-orange-500/10 px-6 py-3 rounded-xl"
                  >
                    <Link href="/build/agent-payments">
                      <Bot className="w-4 h-4 mr-2" />
                      {t('cta.agentPayments')}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.section>

        </div>
      </div>
    </BackgroundWrapper>
  );
}

