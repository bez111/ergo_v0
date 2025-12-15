"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import {
  Search,
  Filter,
  GraduationCap,
  ArrowRight,
  BookOpen,
  Cpu,
  Code,
  Eye,
  Zap,
  Coins,
  Pickaxe,
} from "lucide-react";
import { glossaryTerms, glossaryCategories, GlossaryTerm } from "@/data/glossary";
import { BackgroundWrapper } from "@/components/home/background-wrapper";
import { FinalCTASimple } from "@/components/home/final-cta-simple";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { PageTransition } from "@/components/animations/page-transition";
import { BackToTop } from "@/components/ui/back-to-top";

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
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

type CategoryFilter = GlossaryTerm['category'] | 'all';
type DifficultyFilter = GlossaryTerm['difficulty'] | 'all';

interface GlossaryHubClientProps {
  locale: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function GlossaryHubClient({ locale }: GlossaryHubClientProps) {
  const t = useTranslations('glossary');
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("all");
  const [difficultyFilter, setDifficultyFilter] = useState<DifficultyFilter>("all");

  const filteredTerms = useMemo(() => {
    return glossaryTerms.filter((term) => {
      // Search filter
      const matchesSearch = searchQuery === "" ||
        term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.shortDefinition.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));

      // Category filter
      const matchesCategory = categoryFilter === "all" || term.category === categoryFilter;

      // Difficulty filter
      const matchesDifficulty = difficultyFilter === "all" || term.difficulty === difficultyFilter;

      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [searchQuery, categoryFilter, difficultyFilter]);

  // Group terms by first letter for alphabetical navigation
  const groupedTerms = useMemo(() => {
    const groups: Record<string, GlossaryTerm[]> = {};
    filteredTerms.forEach((term) => {
      const firstLetter = term.term.charAt(0).toUpperCase();
      if (!groups[firstLetter]) {
        groups[firstLetter] = [];
      }
      groups[firstLetter].push(term);
    });
    return groups;
  }, [filteredTerms]);

  const sortedLetters = Object.keys(groupedTerms).sort();

  const totalTerms = glossaryTerms.length;
  const totalCategories = Object.keys(glossaryCategories).length;

  return (
    <BackgroundWrapper>
      <div className="container mx-auto px-4 py-16">
        <PageTransition>
          <div className="max-w-5xl mx-auto">
            {/* Breadcrumbs */}
            <Breadcrumbs
              items={[
                { name: t('breadcrumbs.learn'), href: '/learn' },
                { name: t('breadcrumbs.glossary'), href: '/learn/glossary' },
              ]}
              className="mb-8"
            />
            
            {/* Compact Search Header */}
            <motion.section
              className="mb-10"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="bg-black/60 border border-white/10 rounded-2xl px-6 py-5 md:px-8 md:py-6 shadow-lg shadow-black/40 backdrop-blur-md">
                {/* Title + stats */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3"
                >
                  <h1 className="text-3xl md:text-4xl font-bold text-white">
                    {t('title')} <span className="text-orange-400">{t('titleHighlight')}</span>
                  </h1>
                  <div className="flex flex-wrap gap-2 text-xs md:text-sm text-neutral-300">
                    <span className="inline-flex items-center gap-1 rounded-full bg-black/70 border border-white/10 px-3 py-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                      {totalTerms}+ {t('stats.terms')}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-black/70 border border-white/10 px-3 py-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                      {totalCategories} {t('stats.categories')}
                    </span>
                  </div>
                </motion.div>

                {/* Subtitle */}
                <motion.p
                  variants={itemVariants}
                  className="text-sm md:text-base text-neutral-300 mb-4"
                >
                  {t('subtitle')}
                </motion.p>

                {/* Search + category filter */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col md:flex-row gap-3 mb-3"
                  role="group"
                  aria-label="Search and filter"
                >
                  <div className="relative flex-1">
                    <Search
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400"
                      aria-hidden="true"
                    />
                    <input
                      type="search"
                      placeholder={t('search.placeholder')}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-black/60 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-sm md:text-base
                                text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500/50
                                transition-colors"
                      aria-label={t('search.ariaLabel')}
                      role="searchbox"
                    />
                  </div>

                  <div className="flex items-center md:w-64">
                    <Filter className="w-4 h-4 text-neutral-400 mr-2" aria-hidden="true" />
                    <select
                      value={categoryFilter}
                      onChange={(e) => setCategoryFilter(e.target.value as CategoryFilter)}
                      className="w-full bg-black/60 border border-white/10 rounded-xl px-3 py-3 text-sm text-white
                                focus:outline-none focus:border-orange-500/50 cursor-pointer"
                      aria-label="Filter by category"
                    >
                      <option value="all">{t('filters.allCategories')}</option>
                      {Object.entries(glossaryCategories).map(([key, meta]) => (
                        <option key={key} value={key}>
                          {meta.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </motion.div>

                {/* Difficulty – compact pill with 44px touch target on mobile */}
                <motion.div
                  variants={itemVariants}
                  className="flex items-center gap-2 text-xs text-neutral-400 mb-3"
                >
                  <span className="hidden md:inline">{t('filters.level')}</span>
                  <GraduationCap className="w-3 h-3" aria-hidden="true" />
                  <select
                    value={difficultyFilter}
                    onChange={(e) => setDifficultyFilter(e.target.value as DifficultyFilter)}
                    className="bg-black/60 border border-white/10 rounded-full px-4 py-3 md:px-3 md:py-1 min-h-[44px] md:min-h-0 text-sm md:text-xs text-white
                              focus:outline-none focus:border-orange-500/50 cursor-pointer"
                    aria-label="Filter by difficulty level"
                  >
                    <option value="all">{t('filters.allLevels')}</option>
                    <option value="beginner">{t('filters.beginner')}</option>
                    <option value="intermediate">{t('filters.intermediate')}</option>
                    <option value="advanced">{t('filters.advanced')}</option>
                  </select>
                </motion.div>

                {/* Popular chips - min 44px touch target on mobile */}
                <motion.div
                  variants={itemVariants}
                  className="text-xs md:text-sm text-neutral-400 flex flex-wrap gap-2 items-center"
                >
                  <span className="font-medium text-neutral-300">{t('popular')}</span>
                  <Link
                    href="/learn/glossary/eutxo"
                    className="px-3 py-2 md:px-2 md:py-1 min-h-[44px] md:min-h-0 flex items-center rounded-full bg-black/70 border border-white/10 hover:border-orange-400 hover:text-orange-300 transition-colors"
                  >
                    eUTXO
                  </Link>
                  <Link
                    href="/learn/glossary/autolykos"
                    className="px-3 py-2 md:px-2 md:py-1 min-h-[44px] md:min-h-0 flex items-center rounded-full bg-black/70 border border-white/10 hover:border-orange-400 hover:text-orange-300 transition-colors"
                  >
                    Autolykos
                  </Link>
                  <Link
                    href="/learn/glossary/sigma-protocols"
                    className="px-3 py-2 md:px-2 md:py-1 min-h-[44px] md:min-h-0 flex items-center rounded-full bg-black/70 border border-white/10 hover:border-orange-400 hover:text-orange-300 transition-colors"
                  >
                    Sigma Protocols
                  </Link>
                  <Link
                    href="/learn/glossary/babel-fees"
                    className="px-3 py-2 md:px-2 md:py-1 min-h-[44px] md:min-h-0 flex items-center rounded-full bg-black/70 border border-white/10 hover:border-orange-400 hover:text-orange-300 transition-colors"
                  >
                    Babel Fees
                  </Link>
                </motion.div>
              </div>
            </motion.section>

            {/* Alphabetical Navigation - 44px touch targets */}
            {sortedLetters.length > 0 && (
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap justify-center gap-1.5 md:gap-2 mb-12"
              >
                {sortedLetters.map((letter) => (
                  <a
                    key={letter}
                    href={`#letter-${letter}`}
                    className="w-11 h-11 md:w-10 md:h-10 bg-black border border-white/10 rounded-lg flex items-center justify-center
                              text-neutral-400 hover:text-orange-400 hover:border-orange-500/50 active:bg-orange-500/20 transition-colors font-mono text-sm"
                  >
                    {letter}
                  </a>
                ))}
              </motion.div>
            )}

            {/* Terms List */}
            {sortedLetters.length > 0 ? (
              <motion.section
                key={`${categoryFilter}-${difficultyFilter}-${searchQuery}`}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {sortedLetters.map((letter) => (
                  <div key={letter} id={`letter-${letter}`} className="mb-12">
                    <motion.h2
                      variants={itemVariants}
                      className="text-3xl font-bold text-orange-400 mb-6 border-b border-white/10 pb-2"
                    >
                      {letter}
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-4">
                      {groupedTerms[letter].map((term) => {
                        const categoryMeta = glossaryCategories[term.category];
                        const CategoryIcon = categoryIconMap[categoryMeta.icon] || BookOpen;
                        const difficultyStyle = difficultyColors[term.difficulty];

                        return (
                          <motion.div key={term.slug} variants={itemVariants}>
                            <Link
                              href={`/learn/glossary/${term.slug}`}
                              className="block group"
                            >
                              <div
                                className="bg-black border border-white/10 rounded-xl p-5 h-full
                                          hover:border-orange-400/50
                                          transition-all duration-300"
                              >
                                {/* Header */}
                                <div className="flex items-start justify-between mb-3">
                                  <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                                      <CategoryIcon className="w-5 h-5 text-orange-400" />
                                    </div>
                                    <div>
                                      <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                                        {term.term}
                                      </h3>
                                      <div className="flex items-center gap-2 mt-1">
                                        <span className="text-xs text-neutral-400">{categoryMeta.name}</span>
                                        <span className={`text-xs px-2 py-0.5 rounded-full ${difficultyStyle.bg} ${difficultyStyle.text}`}>
                                          {term.difficulty}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-orange-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
                                </div>

                                {/* Short Definition */}
                                <p className="text-neutral-400 text-sm line-clamp-2">
                                  {term.shortDefinition}
                                </p>
                              </div>
                            </Link>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </motion.section>
            ) : (
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="text-center py-16"
              >
                <p className="text-neutral-400 text-lg">
                  {t('noResults.message')}
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setCategoryFilter("all");
                    setDifficultyFilter("all");
                  }}
                  className="mt-4 text-orange-400 hover:text-orange-300 underline"
                >
                  {t('noResults.clearFilters')}
                </button>
              </motion.div>
            )}

            {/* CTA Section */}
            <motion.section
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-16"
            >
              <motion.div
                variants={itemVariants}
                className="bg-black border border-white/10 rounded-2xl p-8 text-center"
              >
                <h2 className="text-2xl font-bold text-white mb-4">
                  {t('cta.title')}
                </h2>
                <p className="text-neutral-300 mb-6 max-w-xl mx-auto">
                  {t('cta.description')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/docs/developers"
                    className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-xl transition-colors"
                  >
                    {t('cta.devDocs')}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/learn"
                    className="inline-flex items-center justify-center gap-2 border border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-xl transition-colors"
                  >
                    {t('cta.learningHub')}
                  </Link>
                </div>
              </motion.div>
            </motion.section>

            {/* Email Capture */}
            <FinalCTASimple
              title={t('emailCapture.title')}
              description={t('emailCapture.description')}
            />
          </div>
        </PageTransition>
      </div>
      
      {/* Back to Top button for long glossary */}
      <BackToTop />
    </BackgroundWrapper>
  );
}

