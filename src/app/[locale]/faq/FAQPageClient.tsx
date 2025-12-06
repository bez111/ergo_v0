"use client"

import { useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { 
  ChevronDown, 
  Search, 
  HelpCircle, 
  Cpu, 
  Zap, 
  Users, 
  BookOpen,
  GraduationCap,
  Code,
  Coins,
  Pickaxe,
  Globe
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { FinalCTASimple } from "@/components/home/final-cta-simple"
import { FAQItem, FAQLevel } from "@/data/faq"

interface Props {
  beginnerFAQ: FAQItem[]
  technicalFAQ: FAQItem[]
  beginnerCategories: string[]
  technicalCategories: string[]
  stats: {
    total: number
    beginner: number
    technical: number
  }
}

const categoryIcons: Record<string, React.ElementType> = {
  // Beginner categories
  "Basics": HelpCircle,
  "Technology": Cpu,
  "Getting Started": Zap,
  "Ecosystem": Globe,
  "Community": Users,
  // Technical categories
  "general": BookOpen,
  "technology": Code,
  "economics": Coins,
  "ecosystem": Globe,
  "wallets": Zap,
  "mining": Pickaxe,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.03 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
}

export default function FAQPageClient({ 
  beginnerFAQ, 
  technicalFAQ, 
  beginnerCategories,
  technicalCategories,
  stats 
}: Props) {
  const searchParams = useSearchParams()
  const initialLevel = searchParams.get('level') as FAQLevel | null
  
  const [activeLevel, setActiveLevel] = useState<FAQLevel>(initialLevel || 'beginner')
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")
  const [expanded, setExpanded] = useState<string | null>(null)

  const currentFAQ = activeLevel === 'beginner' ? beginnerFAQ : technicalFAQ
  const currentCategories = activeLevel === 'beginner' ? beginnerCategories : technicalCategories

  const filteredFaqs = useMemo(() => {
    return currentFAQ.filter(faq => {
      const categoryMatch = activeCategory === "All" || 
        faq.category.toLowerCase() === activeCategory.toLowerCase()
      const searchMatch = !searchTerm || 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      return categoryMatch && searchMatch
    })
  }, [currentFAQ, searchTerm, activeCategory])

  const handleLevelChange = (level: FAQLevel) => {
    setActiveLevel(level)
    setActiveCategory("All")
    setExpanded(null)
  }

  return (
    <BackgroundWrapper>
      <div className="min-h-screen text-white relative overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }} 
            className="mb-10"
          >
            <div className="bg-black/60 border border-white/10 rounded-2xl px-6 py-5 md:px-8 md:py-6 shadow-lg shadow-black/40 backdrop-blur-md">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white">
                    Ergo <span className="text-orange-400">FAQ</span>
                  </h1>
                  <p className="text-sm md:text-base text-neutral-400 mt-1">
                    Find answers to common questions about Ergo
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 text-xs md:text-sm text-neutral-300">
                  <span className="inline-flex items-center gap-1 rounded-full bg-black/70 border border-white/10 px-3 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    {stats.total} questions
                  </span>
                </div>
              </div>

              {/* Level Tabs */}
              <div className="flex gap-2 mb-4">
                <button
                  onClick={() => handleLevelChange('beginner')}
                  className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all ${
                    activeLevel === 'beginner'
                      ? 'bg-orange-500 text-black'
                      : 'bg-black/60 border border-white/10 text-neutral-300 hover:border-orange-500/50'
                  }`}
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Beginner</span>
                  <Badge variant="outline" className={`ml-1 text-xs ${
                    activeLevel === 'beginner' ? 'border-black/30 text-black' : 'border-white/20'
                  }`}>
                    {stats.beginner}
                  </Badge>
                </button>
                <button
                  onClick={() => handleLevelChange('technical')}
                  className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all ${
                    activeLevel === 'technical'
                      ? 'bg-orange-500 text-black'
                      : 'bg-black/60 border border-white/10 text-neutral-300 hover:border-orange-500/50'
                  }`}
                >
                  <Code className="w-4 h-4" />
                  <span>Technical</span>
                  <Badge variant="outline" className={`ml-1 text-xs ${
                    activeLevel === 'technical' ? 'border-black/30 text-black' : 'border-white/20'
                  }`}>
                    {stats.technical}
                  </Badge>
                </button>
              </div>

              {/* Search */}
              <div className="relative mb-4">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 w-5 h-5" />
                <input
                  type="search"
                  placeholder="Search questions..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  aria-label="Search FAQ questions"
                  className="w-full pl-12 pr-4 py-3 bg-black/60 border border-white/10 rounded-xl text-white placeholder:text-neutral-400 focus:outline-none focus:border-orange-500/50 transition-colors"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={activeCategory === "All" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory("All")}
                  className={`min-h-[36px] ${activeCategory === "All" 
                    ? "bg-orange-500 hover:bg-orange-600 text-black" 
                    : "border-white/20 text-neutral-300 hover:border-orange-500/50"
                  }`}
                >
                  All
                </Button>
                {currentCategories.map(category => {
                  const Icon = categoryIcons[category] || HelpCircle
                  return (
                    <Button
                      key={category}
                      variant={activeCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveCategory(category)}
                      className={`min-h-[36px] ${activeCategory === category 
                        ? "bg-orange-500 hover:bg-orange-600 text-black" 
                        : "border-white/20 text-neutral-300 hover:border-orange-500/50"
                      }`}
                    >
                      <Icon className="w-3 h-3 mr-1" />
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </Button>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* FAQ List */}
          <motion.div 
            key={`${activeLevel}-${activeCategory}`}
            variants={containerVariants} 
            initial="hidden" 
            animate="visible" 
            className="space-y-3"
          >
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => {
                const Icon = categoryIcons[faq.category] || HelpCircle
                return (
                  <motion.div key={faq.id} variants={itemVariants}>
                    <Card className="bg-black/80 border-white/10 hover:border-orange-500/30 transition-all duration-300">
                      <button
                        onClick={() => setExpanded(expanded === faq.id ? null : faq.id)}
                        className="w-full p-5 flex justify-between items-start text-left group"
                      >
                        <div className="flex items-start gap-3 flex-1">
                          <div className="w-8 h-8 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center mt-0.5 flex-shrink-0">
                            <Icon className="w-4 h-4 text-orange-400" />
                          </div>
                          <div className="flex-1">
                            <span className="text-base font-medium text-white group-hover:text-orange-400 transition-colors">
                              {faq.question}
                            </span>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs text-neutral-400 uppercase tracking-wider">
                                {faq.category}
                              </span>
                              <Badge 
                                variant="outline" 
                                className={`text-[10px] px-1.5 py-0 ${
                                  faq.level === 'beginner' 
                                    ? 'border-green-500/30 text-green-400' 
                                    : 'border-blue-500/30 text-blue-400'
                                }`}
                              >
                                {faq.level}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <motion.div 
                          animate={{ rotate: expanded === faq.id ? 180 : 0 }}
                          className="ml-4 mt-1"
                        >
                          <ChevronDown className="w-5 h-5 text-neutral-400" />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {expanded === faq.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5">
                              <div className="ml-11 pt-3 border-t border-white/10">
                                <p className="text-neutral-300 leading-relaxed whitespace-pre-line">
                                  {faq.answer}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Card>
                  </motion.div>
                )
              })
            ) : (
              <motion.div variants={itemVariants}>
                <Card className="bg-black/80 border-white/10">
                  <CardContent className="text-center py-12">
                    <Search className="w-12 h-12 text-neutral-600 mx-auto mb-4" />
                    <p className="text-neutral-400 text-lg">No questions found</p>
                    <p className="text-neutral-400 text-sm mt-1">Try a different search or category</p>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </motion.div>

          {/* Related Resources */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Still have questions?</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/questions" className="group">
                <Card className="bg-black/80 border-white/10 hover:border-orange-500/40 transition-all h-full">
                  <CardContent className="p-5">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center mb-3">
                      <HelpCircle className="w-5 h-5 text-orange-400" />
                    </div>
                    <h3 className="font-semibold text-white group-hover:text-orange-400 transition-colors">Q&A Hub</h3>
                    <p className="text-sm text-neutral-400 mt-1">Browse community questions and detailed answers</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/learn/glossary" className="group">
                <Card className="bg-black/80 border-white/10 hover:border-orange-500/40 transition-all h-full">
                  <CardContent className="p-5">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center mb-3">
                      <BookOpen className="w-5 h-5 text-orange-400" />
                    </div>
                    <h3 className="font-semibold text-white group-hover:text-orange-400 transition-colors">Glossary</h3>
                    <p className="text-sm text-neutral-400 mt-1">Learn Ergo terminology and concepts</p>
                  </CardContent>
                </Card>
              </Link>
              <a href="https://discord.gg/ergo-platform-668903786361651200" target="_blank" rel="noopener noreferrer" className="group">
                <Card className="bg-black/80 border-white/10 hover:border-orange-500/40 transition-all h-full">
                  <CardContent className="p-5">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center mb-3">
                      <Users className="w-5 h-5 text-orange-400" />
                    </div>
                    <h3 className="font-semibold text-white group-hover:text-orange-400 transition-colors">Ask Community</h3>
                    <p className="text-sm text-neutral-400 mt-1">Get help from the Ergo community on Discord</p>
                  </CardContent>
                </Card>
              </a>
            </div>
          </motion.section>

          {/* Email Capture */}
          <div className="mt-16">
            <FinalCTASimple
              title="Stay updated"
              description="Get new FAQs, guides, and important network updates delivered to your inbox."
            />
          </div>
        </div>
      </div>
    </BackgroundWrapper>
  )
}

