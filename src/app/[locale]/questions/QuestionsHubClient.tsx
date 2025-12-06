"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  HelpCircle,
  ArrowRight,
  Code,
  Shield,
  Pickaxe,
  Wallet,
  Lightbulb,
  Users,
  ChevronDown,
  Sparkles,
  BookOpen,
  Zap
} from "lucide-react";
import { QuestionEntry } from "@/data/questions";
import { BackgroundWrapper } from "@/components/home/background-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CategoryGroup {
  category: { id: string; label: string };
  questions: QuestionEntry[];
}

interface Props {
  questions: QuestionEntry[];
  questionsByCategory: CategoryGroup[];
  featuredQuestions: QuestionEntry[];
  categories: { id: string; label: string }[];
  personas: { id: string; label: string }[];
}

const categoryIcons: Record<string, React.ElementType> = {
  'DeFi': Wallet,
  'Privacy': Shield,
  'Mining': Pickaxe,
  'Technology': Code,
  'Philosophy': Lightbulb,
  'Getting Started': Users
};

const intentColors: Record<string, string> = {
  'how_to': 'bg-green-500/20 text-green-400 border-green-500/30',
  'what_is': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'compare': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  'problem': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  'philosophy': 'bg-amber-500/20 text-amber-400 border-amber-500/30'
};

const intentLabels: Record<string, string> = {
  'how_to': 'How-to',
  'what_is': 'Explainer',
  'compare': 'Comparison',
  'problem': 'Solution',
  'philosophy': 'Philosophy'
};

export function QuestionsHubClient({ 
  questions, 
  questionsByCategory, 
  featuredQuestions,
  categories,
  personas 
}: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPersona, setSelectedPersona] = useState("all");
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  // Filter questions based on search and filters
  const filteredQuestions = useMemo(() => {
    return questions.filter(q => {
      const matchesSearch = searchQuery === "" || 
        q.query.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.shortAnswer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "all" || q.category === selectedCategory;
      const matchesPersona = selectedPersona === "all" || q.persona === selectedPersona;
      return matchesSearch && matchesCategory && matchesPersona;
    });
  }, [questions, searchQuery, selectedCategory, selectedPersona]);

  // Group filtered questions by category
  const filteredByCategory = useMemo(() => {
    return categories
      .filter(cat => cat.id !== 'all')
      .map(category => ({
        category,
        questions: filteredQuestions.filter(q => q.category === category.id)
      }))
      .filter(group => group.questions.length > 0);
  }, [filteredQuestions, categories]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <BackgroundWrapper>
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-5xl mx-auto">
          
          {/* Hero Section */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Your Questions, <span className="text-orange-400">Answered</span>
            </h1>
            
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto mb-8">
              Find expert answers to common questions about Ergo blockchain. 
              Each answer links to deep-dive resources for further learning.
            </p>

            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" aria-hidden="true" />
              <input
                type="search"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-black/60 border border-white/10 rounded-2xl text-white placeholder:text-neutral-400 focus:outline-none focus:border-orange-500/50 transition-colors"
                aria-label="Search questions"
                role="searchbox"
              />
            </div>
          </motion.header>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
            role="group"
            aria-label="Filter questions by category"
          >
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Category filter">
              {categories.map(cat => (
                <Button
                  key={cat.id}
                  variant={selectedCategory === cat.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={selectedCategory === cat.id 
                    ? "bg-orange-500 hover:bg-orange-600 text-white border-orange-500" 
                    : "border-white/20 text-neutral-300 hover:text-white hover:border-orange-500/50"
                  }
                  role="radio"
                  aria-checked={selectedCategory === cat.id}
                  aria-label={`Filter by ${cat.label}`}
                >
                  {cat.label}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Featured Questions */}
          {searchQuery === "" && selectedCategory === "all" && selectedPersona === "all" && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16"
            >
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-orange-400" />
                <h2 className="text-2xl font-bold text-white">Most Popular Questions</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4" role="list" aria-label="Most popular questions">
                {featuredQuestions.slice(0, 6).map((question, index) => (
                  <Link 
                    key={question.slug} 
                    href={`/questions/${question.slug}`}
                    className="group block"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                    >
                      <Card className="bg-black border border-white/10 rounded-2xl hover:border-orange-400/40 transition-all duration-300 h-full">
                        <CardContent className="p-5">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <Badge className={`mb-3 text-xs ${intentColors[question.intent]}`}>
                                {intentLabels[question.intent]}
                              </Badge>
                              <h3 className="font-semibold text-white group-hover:text-orange-400 transition-colors mb-2">
                                {question.query}
                              </h3>
                              <p className="text-sm text-neutral-400 line-clamp-2">
                                {question.shortAnswer}
                              </p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-orange-400 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.section>
          )}

          {/* Questions by Category */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {searchQuery !== "" || selectedCategory !== "all" || selectedPersona !== "all" ? (
              // Filtered results
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <BookOpen className="w-5 h-5 text-orange-400" />
                  <h2 className="text-2xl font-bold text-white">
                    {filteredQuestions.length} Question{filteredQuestions.length !== 1 ? 's' : ''} Found
                  </h2>
                </div>
                
                <div className="space-y-3" role="list" aria-label="Filtered questions" aria-live="polite">
                  {filteredQuestions.map((question) => (
                    <QuestionCard key={question.slug} question={question} />
                  ))}
                </div>
                
                {filteredQuestions.length === 0 && (
                  <div className="text-center py-12">
                    <HelpCircle className="w-12 h-12 text-neutral-600 mx-auto mb-4" />
                    <p className="text-neutral-400">No questions match your search.</p>
                    <Button 
                      variant="outline" 
                      className="mt-4 border-white/20"
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCategory("all");
                        setSelectedPersona("all");
                      }}
                    >
                      Clear filters
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              // Grouped by category
              <div className="space-y-8">
                {filteredByCategory.map((group) => {
                  const Icon = categoryIcons[group.category.id] || HelpCircle;
                  const isExpanded = expandedCategories.includes(group.category.id);
                  const displayQuestions = isExpanded ? group.questions : group.questions.slice(0, 3);
                  
                  return (
                    <div key={group.category.id} className="border border-white/10 rounded-2xl overflow-hidden">
                      <div className="bg-black/40 px-6 py-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-orange-500/20 rounded-lg">
                            <Icon className="w-5 h-5 text-orange-400" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-white">{group.category.label}</h3>
                            <p className="text-sm text-neutral-400">{group.questions.length} questions</p>
                          </div>
                        </div>
                        {group.questions.length > 3 && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleCategory(group.category.id)}
                            className="text-neutral-400 hover:text-white"
                          >
                            {isExpanded ? 'Show less' : `Show all ${group.questions.length}`}
                            <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                          </Button>
                        )}
                      </div>
                      
                      <div className="divide-y divide-white/5">
                        {displayQuestions.map((question) => (
                          <QuestionCard key={question.slug} question={question} compact />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </motion.section>

          {/* CTA */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <Card className="bg-black border border-orange-500/30 rounded-2xl">
              <CardContent className="p-8">
                <Zap className="w-10 h-10 text-orange-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  Can't find your question?
                </h3>
                <p className="text-neutral-300 mb-6 max-w-md mx-auto">
                  Join our community on Discord or Telegram and ask directly. 
                  Our community is always happy to help.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
                    <Link href="/start/community">
                      Join Community
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    <Link href="/learn/glossary">
                      Browse Glossary
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

// Question Card Component
function QuestionCard({ question, compact = false }: { question: QuestionEntry; compact?: boolean }) {
  return (
    <Link 
      href={`/questions/${question.slug}`}
      className="group block"
    >
      <div
        className={`flex items-start justify-between gap-4 ${
          compact
            ? 'px-6 py-4 bg-black hover:bg-black/80'
            : 'p-5 bg-black border border-white/10 rounded-2xl hover:border-orange-500/30'
        } transition-all`}
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <Badge className={`text-xs ${intentColors[question.intent]}`}>
              {intentLabels[question.intent]}
            </Badge>
            <Badge variant="outline" className="text-xs border-white/20 text-neutral-400">
              {question.category}
            </Badge>
          </div>
          <h4 className="font-medium text-white group-hover:text-orange-400 transition-colors mb-1">
            {question.query}
          </h4>
          {!compact && (
            <p className="text-sm text-neutral-400 line-clamp-2">
              {question.shortAnswer}
            </p>
          )}
        </div>
        <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-orange-400 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
      </div>
    </Link>
  );
}

