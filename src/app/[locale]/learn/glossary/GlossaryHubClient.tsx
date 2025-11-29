"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  Code,
  Shield,
  Zap,
  Eye,
  BookOpen,
  Cpu,
  Coins,
  Pickaxe,
  GraduationCap,
  Filter,
} from "lucide-react";
import { glossaryTerms, glossaryCategories, GlossaryTerm } from "@/data/glossary";
import { BackgroundWrapper } from "@/components/home/background-wrapper";
import { PageTransition } from "@/components/animations/page-transition";

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

export function GlossaryHubClient() {
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

  return (
    <BackgroundWrapper>
      <div className="container mx-auto px-4 py-16">
        <PageTransition>
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <motion.section
              className="text-center mb-12"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                  Ergo <span className="text-orange-400">Glossary</span>
                </h1>
                <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-8">
                  Master the terminology of Ergo blockchain. From eUTXO to Sigma Protocols,
                  understand the concepts that power decentralized finance.
                </p>
              </motion.div>

              {/* Search Bar */}
              <motion.div variants={itemVariants} className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                  <input
                    type="text"
                    placeholder="Search terms..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-black/60 border border-white/10 rounded-xl pl-12 pr-4 py-4 
                              text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500/50
                              transition-colors"
                  />
                </div>
              </motion.div>

              {/* Filters */}
              <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-8">
                {/* Category Filter */}
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-neutral-500" />
                  <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value as CategoryFilter)}
                    className="bg-black/60 border border-white/10 rounded-lg px-3 py-2 text-sm text-white
                              focus:outline-none focus:border-orange-500/50 cursor-pointer"
                  >
                    <option value="all">All Categories</option>
                    {Object.entries(glossaryCategories).map(([key, meta]) => (
                      <option key={key} value={key}>{meta.name}</option>
                    ))}
                  </select>
                </div>

                {/* Difficulty Filter */}
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-neutral-500" />
                  <select
                    value={difficultyFilter}
                    onChange={(e) => setDifficultyFilter(e.target.value as DifficultyFilter)}
                    className="bg-black/60 border border-white/10 rounded-lg px-3 py-2 text-sm text-white
                              focus:outline-none focus:border-orange-500/50 cursor-pointer"
                  >
                    <option value="all">All Levels</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
              >
                <div className="bg-black border border-white/10 rounded-xl p-4">
                  <div className="text-2xl font-bold text-orange-400">{glossaryTerms.length}</div>
                  <div className="text-sm text-neutral-400">Total Terms</div>
                </div>
                <div className="bg-black border border-white/10 rounded-xl p-4">
                  <div className="text-2xl font-bold text-green-400">
                    {glossaryTerms.filter(t => t.difficulty === 'beginner').length}
                  </div>
                  <div className="text-sm text-neutral-400">Beginner</div>
                </div>
                <div className="bg-black border border-white/10 rounded-xl p-4">
                  <div className="text-2xl font-bold text-yellow-400">
                    {glossaryTerms.filter(t => t.difficulty === 'intermediate').length}
                  </div>
                  <div className="text-sm text-neutral-400">Intermediate</div>
                </div>
                <div className="bg-black border border-white/10 rounded-xl p-4">
                  <div className="text-2xl font-bold text-red-400">
                    {glossaryTerms.filter(t => t.difficulty === 'advanced').length}
                  </div>
                  <div className="text-sm text-neutral-400">Advanced</div>
                </div>
              </motion.div>
            </motion.section>

            {/* Alphabetical Navigation */}
            {sortedLetters.length > 0 && (
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap justify-center gap-2 mb-12"
              >
                {sortedLetters.map((letter) => (
                  <a
                    key={letter}
                    href={`#letter-${letter}`}
                    className="w-10 h-10 bg-black border border-white/10 rounded-lg flex items-center justify-center
                              text-neutral-400 hover:text-orange-400 hover:border-orange-500/50 transition-colors font-mono"
                  >
                    {letter}
                  </a>
                ))}
              </motion.div>
            )}

            {/* Terms List */}
            {sortedLetters.length > 0 ? (
              <motion.section
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
                                        <span className="text-xs text-neutral-500">{categoryMeta.name}</span>
                                        <span className={`text-xs px-2 py-0.5 rounded-full ${difficultyStyle.bg} ${difficultyStyle.text}`}>
                                          {term.difficulty}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <ArrowRight className="w-5 h-5 text-neutral-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
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
                  No terms found matching your criteria.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setCategoryFilter("all");
                    setDifficultyFilter("all");
                  }}
                  className="mt-4 text-orange-400 hover:text-orange-300 underline"
                >
                  Clear filters
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
                  Ready to Build on Ergo?
                </h2>
                <p className="text-neutral-300 mb-6 max-w-xl mx-auto">
                  Now that you understand the terminology, dive into the documentation
                  and start building decentralized applications.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/docs/developers"
                    className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-xl transition-colors"
                  >
                    Developer Docs
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/learn"
                    className="inline-flex items-center justify-center gap-2 border border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-xl transition-colors"
                  >
                    Learning Hub
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

