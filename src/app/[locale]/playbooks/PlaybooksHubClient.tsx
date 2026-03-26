"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */

import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import {
  Code,
  Shield,
  Pickaxe,
  Leaf,
  Scale,
  Globe,
  TrendingUp,
  Layers,
  ArrowRight,
  Clock,
  BookOpen,
  Zap,
  Bot,
} from "lucide-react";
import { Playbook } from "@/data/playbooks";
import { BackgroundWrapper } from "@/components/home/background-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Props {
  playbooks: Playbook[];
  clusters: readonly { id: string; name: string; icon: string; description: string }[];
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
};

const difficultyColors: Record<string, string> = {
  beginner: "bg-green-500/20 text-green-400 border-green-500/30",
  intermediate: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  advanced: "bg-red-500/20 text-red-400 border-red-500/30",
};

// Logical order from simple onboarding to advanced building
const playbookOrder: Record<string, number> = {
  "first-transaction-10-minutes": 1,
  "escape-financial-repression": 2,
  "fair-launch-alternative": 3,
  "add-ergo-to-portfolio": 4,
  "private-transaction-ergomixer": 5,
  "start-mining-ergo": 6,
  "provide-liquidity-spectrum": 7,
  "launch-token-on-ergo": 8,
  "sustainable-blockchain-economics": 9,
  "ergo-global-settlement": 10,
  "build-defi-on-ergo": 11,
  "build-agent-economy-apps": 12,
};

const difficultyRank: Record<string, number> = {
  beginner: 1,
  intermediate: 2,
  advanced: 3,
};

export function PlaybooksHubClient({ playbooks, clusters }: Props) {
  const t = useTranslations('playbooksPage');
  const [selectedCluster, setSelectedCluster] = useState<string>("all");

  const filteredPlaybooks = useMemo(() => {
    const base =
      selectedCluster === "all"
        ? playbooks
        : playbooks.filter((p) => p.cluster === selectedCluster);

    return [...base].sort((a, b) => {
      const orderA = playbookOrder[a.slug] ?? 999;
      const orderB = playbookOrder[b.slug] ?? 999;
      if (orderA !== orderB) return orderA - orderB;

      const diffA = difficultyRank[a.difficulty] ?? 99;
      const diffB = difficultyRank[b.difficulty] ?? 99;
      if (diffA !== diffB) return diffA - diffB;

      return a.title.localeCompare(b.title);
    });
  }, [playbooks, selectedCluster]);

  return (
    <BackgroundWrapper>
      <div className="min-h-screen text-white">
        <div className="container mx-auto px-4 py-16 relative z-10">
          {/* Hero Section - Standard two-column layout (like /use) */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-28 pb-14 px-4"
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left column: text + stats */}
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white">
                    {t('hero.title')}
                  </h1>
                  <p className="text-lg md:text-xl text-neutral-300 mb-4 max-w-2xl">
                    {t('hero.subtitle')}
                  </p>
                  <p className="text-base text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                    {t('hero.description')}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <Button
                      asChild
                      className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-xl border border-orange-500/50"
                    >
                      <Link href="/playbooks/first-transaction-10-minutes">
                        {t('hero.startButton')}
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10 hover:border-orange-400/50 px-6 py-3 rounded-xl"
                    >
                      <Link href="/questions">
                        {t('hero.browseQA')}
                      </Link>
                    </Button>
                  </div>

                </div>

                {/* Right column: compact featured playbooks card */}
                <motion.div
                  className="relative z-10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 260, damping: 24 }}
                >
                  <div className="bg-black/80 border border-white/10 rounded-3xl p-6 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                    <h3 className="text-2xl font-bold mb-4 text-center text-white">
                      {t('hero.featuredTitle')}
                    </h3>
                            <div className="space-y-3">
                      {[
                        "first-transaction-10-minutes",
                        "start-mining-ergo",
                        "build-defi-on-ergo",
                      ]
                        .map((slug) => playbooks.find((p) => p.slug === slug))
                        .filter(Boolean)
                        .map((playbook) => {
                          const Icon = iconMap[playbook!.icon] || BookOpen;
                          return (
                            <Link
                              key={playbook!.slug}
                              href={`/playbooks/${playbook!.slug}`}
                                      className="block group"
                            >
                                      <div className="flex items-center gap-3 p-3 rounded-2xl bg-black/60 border border-white/10 hover:border-orange-400/50 hover:bg-black/80 transition-all duration-300">
                                        <div className="w-11 h-11 rounded-md bg-orange-500/20 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                                          <Icon className="w-5 h-5 text-orange-400" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <div className="text-sm font-semibold text-white group-hover:text-orange-400 transition-colors truncate">
                                            {playbook!.title}
                                          </div>
                                          <div className="text-[11px] text-neutral-400 truncate">
                                            {playbook!.subtitle}
                                          </div>
                                        </div>
                                        <ArrowRight
                                          className="w-3 h-3 text-neutral-400 opacity-100 md:opacity-0 md:translate-x-1 md:group-hover:opacity-100 md:group-hover:translate-x-0 transition-all duration-200"
                                          aria-hidden="true"
                                        />
                                      </div>
                            </Link>
                          );
                        })}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Filter Buttons - min 44px touch targets on mobile */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="pb-8"
          >
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap justify-center gap-2" role="radiogroup" aria-label={t('filters.ariaLabel')}>
                <Button
                  variant={selectedCluster === "all" ? "default" : "outline"}
                  onClick={() => setSelectedCluster("all")}
                  className={`min-h-[44px] px-4 py-2 text-sm ${selectedCluster === "all"
                    ? "bg-orange-500 hover:bg-orange-600 text-white border-orange-500"
                    : "border-white/20 text-neutral-300 hover:text-white hover:border-orange-500/50 active:bg-orange-500/20"
                  }`}
                  role="radio"
                  aria-checked={selectedCluster === "all"}
                  aria-label={t('filters.showAll')}
                >
                  {t('filters.all')}
                </Button>
                {clusters.map((cluster) => {
                  const Icon = iconMap[cluster.icon] || BookOpen;
                  return (
                    <Button
                      key={cluster.id}
                      variant={selectedCluster === cluster.id ? "default" : "outline"}
                      onClick={() => setSelectedCluster(cluster.id)}
                      className={`min-h-[44px] px-4 py-2 text-sm ${selectedCluster === cluster.id 
                        ? "bg-orange-500 hover:bg-orange-600 text-white border-orange-500" 
                        : "border-white/20 text-neutral-300 hover:text-white hover:border-orange-500/50 active:bg-orange-500/20"
                      }`}
                      role="radio"
                      aria-checked={selectedCluster === cluster.id}
                      aria-label={`Filter by ${cluster.name}`}
                    >
                      <Icon className="w-4 h-4 mr-1.5" aria-hidden="true" />
                      {cluster.name}
                    </Button>
                  );
                })}
              </div>
            </div>
          </motion.section>

          {/* All Playbooks in One Grid */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pb-16"
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" role="list" aria-label="Available playbooks" aria-live="polite">
                {filteredPlaybooks.map((playbook, index) => {
                  const PlaybookIcon = iconMap[playbook.icon] || BookOpen;
                  return (
                    <motion.div
                      key={playbook.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link href={`/playbooks/${playbook.slug}`}>
                        <Card className="bg-black border border-white/10 rounded-2xl hover:border-orange-400/40 transition-all duration-300 h-full group cursor-pointer">
                          <CardContent className="p-5">
                            {/* Header - Compact */}
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-11 h-11 rounded-md bg-orange-500/20 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                                <PlaybookIcon className="w-5 h-5 text-orange-400" />
                              </div>
                                <div className="flex-1 min-w-0">
                                <h3
                                  className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors line-clamp-2"
                                >
                                  {playbook.title}
                                </h3>
                                <div className="flex items-center gap-2 text-[10px] text-neutral-400">
                                  <span>{playbook.timeToComplete}</span>
                                  <span>·</span>
                                  <span>{playbook.steps.length} {t('card.steps')}</span>
                                </div>
                              </div>
                            </div>

                            {/* Description - Compact */}
                            <p className="text-neutral-400 text-xs mb-3 line-clamp-2">
                              {playbook.subtitle}
                            </p>

                            {/* Footer */}
                            <div className="flex items-center justify-between">
                              <div className="flex gap-1">
                                <Badge
                                  variant="outline"
                                  className="text-[9px] px-1.5 py-0 border-white/15 text-neutral-400"
                                >
                                  {t(`clusters.${playbook.cluster}` as 'clusters.defi')}
                                </Badge>
                                <Badge
                                  className={`text-[9px] px-1.5 py-0 ${difficultyColors[playbook.difficulty]}`}
                                >
                                  {t(`difficulty.${playbook.difficulty}` as 'difficulty.beginner')}
                                </Badge>
                              </div>
                              <ArrowRight
                                className="w-3 h-3 text-neutral-400 opacity-100 md:opacity-0 md:translate-x-1 md:group-hover:opacity-100 md:group-hover:translate-x-0 transition-all duration-200"
                                aria-hidden="true"
                              />
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
              
              {filteredPlaybooks.length === 0 && (
                <div className="text-center py-12">
                  <BookOpen className="w-12 h-12 text-neutral-600 mx-auto mb-4" />
                  <p className="text-neutral-400">{t('empty')}</p>
                </div>
              )}
            </div>
          </motion.section>

          {/* Agent Economy Banner */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pb-8"
          >
            <div className="max-w-7xl mx-auto">
              <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/5 border border-orange-500/30 rounded-3xl p-6 flex flex-col md:flex-row items-center gap-6 justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-1">{t('agentBanner.badge')}</p>
                    <h3 className="font-bold text-white text-base">{t('agentBanner.title')}</h3>
                    <p className="text-neutral-400 text-sm mt-1 max-w-xl">
                      {t('agentBanner.description')}
                    </p>
                  </div>
                </div>
                <Link
                  href="/playbooks/build-agent-economy-apps"
                  className="flex-shrink-0 inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm"
                >
                  {t('agentBanner.cta')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="py-16"
          >
            <div className="max-w-4xl mx-auto">
              <div className="text-center bg-black border border-white/10 rounded-3xl px-6 py-10 sm:px-10 shadow-xl shadow-black/40">
                <h2 className="text-3xl font-bold text-white mb-4">
                  {t('cta.title')}
                </h2>
                <p className="text-neutral-400 mb-8">
                  {t('cta.description')}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/docs"
                    className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-black font-semibold transition-colors"
                  >
                    {t('cta.browseDocs')}
                  </Link>
                  <Link
                    href="/start/community"
                    className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/20 transition-colors"
                  >
                    {t('cta.joinCommunity')}
                  </Link>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </BackgroundWrapper>
  );
}

