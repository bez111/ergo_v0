"use client"

/* eslint-disable react/no-unescaped-entities, @next/next/no-html-link-for-pages */

import React, { useState } from "react"
import { motion } from "framer-motion"
import { 
  CheckCircle, 
  Target, 
  Users, 
  MessageSquare, 
  TrendingUp,
  Globe,
  ExternalLink,
  ChevronDown,
  ArrowRight
} from "lucide-react"

import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { FinalCTASimple } from "@/components/home/final-cta-simple"
import { coreChannels, guideSteps, faqsData, additionalPlatforms } from "./marketing-guide.data"

export function MarketingGuideClient() {
  const [openSections, setOpenSections] = useState<string[]>(['why-matters'])
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [expandedCategories, setExpandedCategories] = useState<string[]>([])

  const breadcrumbItems = [
    { name: "Start", href: "/start" },
    { name: "Community", href: "/start/community" },
    { name: "Marketing Guide", href: "/start/community/marketing" }
  ]

  const scrollToId = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }


  const toggleCategory = (categoryTitle: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryTitle) 
        ? prev.filter(title => title !== categoryTitle)
        : [...prev, categoryTitle]
    )
  }

  return (
    <BackgroundWrapper>
      <div className="min-h-screen relative pb-24">
        {/* Hidden Breadcrumbs for SEO */}
        <Breadcrumbs items={[...breadcrumbItems, { name: "Marketing Guide", href: "#" }]} variant="hidden" />
        
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }} 
          className="pt-28 pb-10 px-4"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                  Community Marketing Playbook
                </h1>
                <p className="text-lg md:text-xl text-neutral-300 mb-6 max-w-2xl">
                  Want to help Ergo grow? This guide shows you how to amplify Ergo content across all channels and turn every announcement into a coordinated community effort that drives real engagement.
                </p>
                <p className="text-base text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                  You'll learn about 7 core marketing channels, proven engagement tactics, optimal timing strategies, and success metrics. Everything you need to start contributing to Ergo's marketing today.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-xl border border-orange-500/50">
                    <a 
                      href="https://www.ergoblockchain.org/blog" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Start with Blog Content - Opens in new tab"
                      title="Open ergoblockchain.org blog in new tab"
                    >
                      Start with Blog Content
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-orange-400/50 px-6 py-3 rounded-xl">
                    <a 
                      href="/infographics"
                      aria-label="Open Ergo infographics hub"
                      title="Open Ergo infographics hub"
                    >
                      Explore Infographics
                    </a>
                  </Button>
                </div>
                      </div>
                      <motion.div
                className="relative z-10" 
                whileHover={{ scale: 1.02 }} 
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
              >
                <div className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-6 text-center text-white">Core Channels</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {coreChannels.slice(0, 3).map((channel) => (
                      <a 
                        key={channel.name} 
                        href={channel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300 group block"
                        aria-label={`${channel.actionText} - Opens in new tab`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-11 h-11 flex items-center justify-center rounded-md bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0 group-hover:bg-orange-500/30 group-hover:border-orange-500/50 transition-all duration-300">
                            <channel.icon className="w-6 h-6" aria-hidden="true" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-semibold text-white text-lg group-hover:text-orange-400 transition-colors">{channel.name}</h4>
                              <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-orange-400 transition-colors opacity-0 group-hover:opacity-100" aria-hidden="true" />
                          </div>
                            <p className="text-neutral-400 text-sm">{channel.description}</p>
                            <span className="text-orange-400 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">{channel.actionText} →</span>
                          </div>
                        </div>
                      </a>
                    ))}
                          </div>
                        </div>
              </motion.div>
                      </div>
                    </div>
        </motion.section>

        {/* Quick TL;DR Section */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">
              Get Started in 3 Steps
            </h2>
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={{ 
                hidden: { opacity: 0, y: 24 }, 
                visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.07 } } 
              }} 
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch"
            >
              <motion.div 
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} 
                className="relative h-full"
              >
                <Card className="relative bg-black/80 border border-white/10 rounded-3xl transition-all duration-300 hover:bg-black/90 hover:border-orange-400/40 h-full flex flex-col cursor-pointer group">
                  <CardContent className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-3 rounded-md bg-orange-500/20 border border-orange-500/30">
                        <Target className="w-6 h-6 text-orange-400" aria-hidden="true" />
                      </div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">Step 1</h3>
                    </div>
                    <p className="text-neutral-400 font-medium mb-2">Join Discord + Telegram</p>
                    <p className="text-neutral-300 text-base mb-5 flex-1">Start by joining core communities where you can learn from experienced marketers and coordinate your efforts with others.</p>
                    
                    {/* Hover text that appears in bottom right corner */}
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-orange-400 font-medium text-right">
                        Start Here
                    </div>
                    </div>
                  </CardContent>
                </Card>
          </motion.div>

          <motion.div
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} 
                className="relative h-full"
              >
                <Card className="relative bg-black/80 border border-white/10 rounded-3xl transition-all duration-300 hover:bg-black/90 hover:border-orange-400/40 h-full flex flex-col cursor-pointer group">
                  <CardContent className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-3 rounded-md bg-orange-500/20 border border-orange-500/30">
                        <MessageSquare className="w-6 h-6 text-orange-400" aria-hidden="true" />
                      </div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">Step 2</h3>
                    </div>
                    <p className="text-neutral-400 font-medium mb-2">Pick ONE channel (Twitter / Reddit)</p>
                    <p className="text-neutral-300 text-base mb-5 flex-1">Choose one platform you're comfortable with and master it before expanding. Quality engagement on one channel beats spreading yourself thin.</p>
                    
                    {/* Hover text that appears in bottom right corner */}
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-orange-400 font-medium text-right">
                        Focus First
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div 
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} 
                className="relative h-full"
              >
                <Card className="relative bg-black/80 border border-white/10 rounded-3xl transition-all duration-300 hover:bg-black/90 hover:border-orange-400/40 h-full flex flex-col cursor-pointer group">
                  <CardContent className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-3 rounded-md bg-orange-500/20 border border-orange-500/30">
                        <TrendingUp className="w-6 h-6 text-orange-400" aria-hidden="true" />
                            </div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">Step 3</h3>
                    </div>
                    <p className="text-neutral-400 font-medium mb-2">Follow 5-step workflow below</p>
                    <p className="text-neutral-300 text-base mb-5 flex-1">Use the proven amplification strategy to turn every blog post into a coordinated community-wide conversation that helps Ergo grow.</p>
                    
                    {/* Hover text that appears in bottom right corner */}
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-orange-400 font-medium text-right">
                        Scale Up
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
          </motion.div>
          </div>
        </motion.section>

        {/* On This Page Navigation */}
        <motion.section 
          className="py-8 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="bg-black/60 border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">On this page:</h3>
              <ul className="flex flex-wrap gap-2 text-xs">
                {guideSteps.map((step, index) => (
                  <li key={step.id}>
                    <button
                      onClick={() => scrollToId(step.id)}
                      className="px-3 py-2 rounded-full border border-white/10 hover:border-orange-400/50 hover:text-orange-300 text-neutral-400 transition-all duration-300 flex items-center gap-2"
                      aria-label={`Jump to ${step.title}`}
                    >
                      <span className="w-5 h-5 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 text-xs font-bold">
                        {index + 1}
                      </span>
                      {step.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
                      </div>
        </motion.section>

        {/* Step-by-Step Guide */}
        <div className="py-14 px-4 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Your Step-by-Step Guide</h2>
          <div className="space-y-6">
            {guideSteps.map((step, index) => (
              <Card key={step.id} id={step.id} className="bg-black/80 border-white/10 backdrop-blur-sm rounded-3xl">
                <Collapsible 
                  open={openSections.includes(step.id)} 
                  onOpenChange={(open) => {
                    setOpenSections(prev =>
                      open
                        ? [...prev, step.id]
                        : prev.filter(id => id !== step.id)
                    )
                  }}
                >
                  <CollapsibleTrigger asChild>
                    <button className="w-full" aria-label={`Toggle ${step.title} section`}>
                      <CardHeader className="p-6 hover:bg-black/70 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                              <span className="text-orange-400 font-bold text-lg">{index + 1}</span>
                            </div>
                            <div className="text-left">
                              <CardTitle className="text-xl font-bold text-white mb-1">{step.title}</CardTitle>
                              <p className="text-neutral-400 text-sm">{step.description}</p>
                            </div>
                    </div>
                          <ChevronDown 
                            className={`w-5 h-5 text-neutral-400 transition-transform ${
                              openSections.includes(step.id) ? "rotate-180" : ""
                            }`}
                            aria-hidden="true"
                          />
                      </div>
                  </CardHeader>
                    </button>
              </CollapsibleTrigger>
              <CollapsibleContent>
                    <CardContent className="px-6 pb-6 pt-0">
                      <div className="space-y-6">
                        {/* Introduction */}
                        <div className="text-neutral-300 leading-relaxed">
                          {step.content.intro}
                            </div>

                        {/* Step-specific content */}
                        {step.id === "why-matters" && step.content.points && (
                          <>
                            <div className="space-y-3">
                              <h4 className="text-lg font-semibold text-white">Key Benefits:</h4>
                              <ul className="space-y-2">
                                {step.content.points.map((point, i) => (
                                  <li key={i} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                                    <span className="text-neutral-300">{point}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="bg-black/60 border border-orange-500/20 rounded-2xl p-4">
                              <h4 className="text-lg font-semibold text-orange-400 mb-3">Quick Start Checklist:</h4>
                              <div className="space-y-3">
                                {step.content.actionItems?.map((item, i) => (
                                  <a 
                                    key={i} 
                                    href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                    className="flex items-start gap-3 p-3 rounded-lg bg-black/40 border border-white/10 hover:bg-black/60 hover:border-orange-400/30 transition-all duration-300 group"
                                    aria-label={`${item.text} - Opens in new tab`}
                                  >
                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                                      item.priority === 'high' ? 'bg-red-500/20 border border-red-500/30' :
                                      item.priority === 'medium' ? 'bg-orange-500/20 border border-orange-500/30' :
                                      'bg-blue-500/20 border border-blue-500/30'
                                    }`}>
                                      <span className={`text-xs font-bold ${
                                        item.priority === 'high' ? 'text-red-400' :
                                        item.priority === 'medium' ? 'text-orange-400' :
                                        'text-blue-400'
                                      }`}>
                                        {i + 1}
                                      </span>
                                    </div>
                                    <div className="flex-1">
                                      <span className="text-neutral-300 text-sm group-hover:text-white transition-colors">{item.text}</span>
                                      <div className="flex items-center gap-2 mt-1">
                                        <Badge 
                                          variant="outline" 
                                          className={`text-xs ${
                                            item.priority === 'high' ? 'border-red-500/30 text-red-400' :
                                            item.priority === 'medium' ? 'border-orange-500/30 text-orange-400' :
                                            'border-blue-500/30 text-blue-400'
                                          }`}
                                        >
                                          {item.priority} priority
                                </Badge>
                                        <ExternalLink className="w-3 h-3 text-neutral-400 group-hover:text-orange-400 transition-colors" aria-hidden="true" />
                                      </div>
                                    </div>
                              </a>
                            ))}
                          </div>
                        </div>
                          </>
                        )}

                        {step.id === "core-channels" && step.content.channels && (
                          <>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {step.content.channels.map((channel) => (
                                <a 
                                  key={channel.name} 
                                  href={channel.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300 group block"
                                  aria-label={`${channel.actionText} - Opens in new tab`}
                                >
                                  <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 flex items-center justify-center rounded-md bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0 group-hover:bg-orange-500/30 group-hover:border-orange-500/50 transition-all duration-300">
                                      <channel.icon className="w-5 h-5" aria-hidden="true" />
                                    </div>
                                    <div className="flex-1">
                                      <div className="flex items-center justify-between">
                                        <h5 className="font-semibold text-white group-hover:text-orange-400 transition-colors">{channel.name}</h5>
                                        <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-orange-400 transition-colors" aria-hidden="true" />
                                      </div>
                                      <p className="text-neutral-400 text-sm mb-2">{channel.description}</p>
                                      <span className="text-orange-400 text-xs font-medium">{channel.actionText} →</span>
                                    </div>
                                  </div>
                                </a>
                              ))}
                            </div>
                            <div className="bg-black/60 border border-orange-500/20 rounded-2xl p-4">
                              <h4 className="text-lg font-semibold text-orange-400 mb-3">Pro Strategy:</h4>
                              <p className="text-neutral-300 mb-3">{step.content.strategy}</p>
                              <ul className="space-y-2">
                                {step.content.tips?.map((tip, i) => (
                                  <li key={i} className="flex items-start gap-3">
                                    <ArrowRight className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" aria-hidden="true" />
                                    <span className="text-neutral-300 text-sm">{tip}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </>
                        )}

                        {step.id === "content-strategy" && step.content.workflow && (
                          <>
                            <div className="space-y-4">
                              <h4 className="text-lg font-semibold text-white">5-Step Workflow:</h4>
                              {step.content.workflow.map((workflowStep) => (
                                <div key={workflowStep.step} className="flex gap-4 p-4 rounded-2xl bg-black/60 border border-white/20">
                                  <div className="w-8 h-8 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                                    <span className="text-orange-400 font-bold text-sm">{workflowStep.step}</span>
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex items-center justify-between mb-2">
                                      <h5 className="font-semibold text-white">{workflowStep.title}</h5>
                                      <Badge variant="outline" className="text-xs bg-black/60 border-orange-500/30 text-orange-400">
                                        {workflowStep.time}
                                      </Badge>
                                    </div>
                                    <p className="text-neutral-300 text-sm">{workflowStep.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                            <div className="bg-black/60 border border-orange-500/20 rounded-2xl p-4">
                              <h4 className="text-lg font-semibold text-orange-400 mb-3">Real Examples:</h4>
                              <ul className="space-y-2">
                                {step.content.examples?.map((example, i) => (
                                  <li key={i} className="flex items-start gap-3">
                                    <ArrowRight className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" aria-hidden="true" />
                                    <span className="text-neutral-300 text-sm">{example}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </>
                        )}

                        {step.id === "reddit-mastery" && step.content.categories && (
                          <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                              {step.content.categories.map((category) => (
                                <div key={category.title} className="p-4 rounded-2xl bg-black/60 border border-white/20">
                                  <div className="flex items-center gap-3 mb-3">
                                    <category.icon className="w-5 h-5 text-orange-400" aria-hidden="true" />
                                    <h5 className="font-semibold text-white text-sm">{category.title}</h5>
                                  </div>
                                  <p className="text-neutral-400 text-xs mb-3">{category.description}</p>
                                  <div className="space-y-2">
                                    {(expandedCategories.includes(category.title) ? category.subs : category.subs.slice(0, 3)).map((sub) => (
                                      <a 
                                        key={sub.name}
                                        href={sub.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between p-2 rounded-lg bg-black/40 border border-white/10 hover:bg-black/60 hover:border-orange-400/30 transition-all duration-300 group"
                                        aria-label={`Visit ${sub.name} - ${sub.members} members`}
                                      >
                                        <span className="text-neutral-300 text-xs group-hover:text-white transition-colors">{sub.name}</span>
                        <div className="flex items-center gap-2">
                                          <span className="text-neutral-400 text-xs">{sub.members}</span>
                                          <ExternalLink className="w-3 h-3 text-neutral-400 group-hover:text-orange-400 transition-colors" aria-hidden="true" />
                                        </div>
                                      </a>
                                    ))}
                                    {category.subs.length > 3 && (
                                      <div className="text-center">
                                        <button
                                          onClick={() => toggleCategory(category.title)}
                                          className="text-xs bg-black/60 border border-white/20 text-neutral-300 hover:bg-black/80 hover:border-orange-400/30 hover:text-orange-400 transition-all duration-300 px-3 py-1 rounded-full"
                                          aria-label={expandedCategories.includes(category.title) ? 'Show fewer subreddits' : `Show ${category.subs.length - 3} more subreddits`}
                                        >
                                          {expandedCategories.includes(category.title) 
                                            ? `Show less` 
                                            : `+${category.subs.length - 3} more subreddits`
                                          }
                                        </button>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="bg-black/60 border border-orange-500/20 rounded-2xl p-4">
                                <h4 className="text-lg font-semibold text-orange-400 mb-3">Best Practices:</h4>
                                <ul className="space-y-2">
                                  {step.content.bestPractices?.map((practice, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                      <CheckCircle className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                                      <span className="text-neutral-300 text-sm">{practice}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="bg-black/60 border border-orange-500/20 rounded-2xl p-4">
                                <h4 className="text-lg font-semibold text-orange-400 mb-3">Optimal Timing:</h4>
                                <div className="space-y-2">
                                  {step.content.timing && Object.entries(step.content.timing).map(([category, time]) => (
                                    <div key={category} className="flex justify-between items-start">
                                      <span className="text-white text-sm font-medium">{category}:</span>
                                      <span className="text-neutral-300 text-xs text-right ml-2">{time}</span>
                        </div>
                                  ))}
                        </div>
                      </div>
                    </div>
                          </>
                        )}

                        {step.id === "engagement-tactics" && (
                          <>
                            <div className="space-y-4">
                              {step.content.tactics?.map((tactic, i) => (
                                <div key={i} className="p-4 rounded-2xl bg-black/60 border border-white/20">
                                  <h5 className="font-semibold text-white mb-2">{tactic.name}</h5>
                                  <p className="text-neutral-400 text-sm mb-3">{tactic.description}</p>
                                  <div className="space-y-1">
                                    {tactic.examples.map((example, j) => (
                                      <div key={j} className="flex items-start gap-2">
                                        <span className="text-orange-400 text-xs mt-1">•</span>
                                        <span className="text-neutral-300 text-sm italic">"{example}"</span>
                      </div>
                                    ))}
                          </div>
                        </div>
                      ))}
                            </div>
                            <div className="bg-black/60 border border-orange-500/20 rounded-2xl p-4">
                              <h4 className="text-lg font-semibold text-orange-400 mb-3">Response Strategy:</h4>
                              <ul className="space-y-2">
                                {step.content.responseStrategy?.map((strategy, i) => (
                                  <li key={i} className="flex items-start gap-3">
                                    <ArrowRight className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" aria-hidden="true" />
                                    <span className="text-neutral-300 text-sm">{strategy}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </>
                        )}

                        {step.id === "timing-optimization" && (
                          <>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="bg-black/60 border border-orange-500/20 rounded-2xl p-4">
                                <h4 className="text-lg font-semibold text-orange-400 mb-3">Optimal Schedule:</h4>
                                <div className="space-y-3">
                                  {step.content.schedule && Object.entries(step.content.schedule).map(([platform, timing]) => (
                                    <div key={platform}>
                                      <span className="text-white font-medium text-sm">{platform}:</span>
                                      <p className="text-neutral-300 text-xs mt-1">{timing}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <div className="bg-black/60 border border-orange-500/20 rounded-2xl p-4">
                                <h4 className="text-lg font-semibold text-orange-400 mb-3">Frequency Guidelines:</h4>
                                <ul className="space-y-2">
                                  {step.content.frequency?.map((guideline, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                      <CheckCircle className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                                      <span className="text-neutral-300 text-sm">{guideline}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            <div className="bg-black/60 border border-white/20 rounded-2xl p-4">
                              <h4 className="text-lg font-semibold text-white mb-3">Recommended Tools:</h4>
                              <div className="flex flex-wrap gap-2">
                                {step.content.tools?.map((tool, i) => (
                                  <Badge key={i} variant="outline" className="bg-black/60 border-white/20 text-neutral-300">
                                    {tool}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </>
                        )}

                        {step.id === "measurement-success" && (
                          <>
                            <div className="grid md:grid-cols-2 gap-4">
                              {step.content.keyMetrics?.map((metricGroup, i) => (
                                <div key={i} className="p-4 rounded-2xl bg-black/60 border border-white/20">
                                  <h5 className="font-semibold text-white mb-3">{metricGroup.category}</h5>
                                  <ul className="space-y-2">
                                    {metricGroup.metrics.map((metric, j) => (
                                      <li key={j} className="flex items-start gap-3">
                                        <span className="text-orange-400 text-xs mt-1">•</span>
                                        <span className="text-neutral-300 text-sm">{metric}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="bg-black/60 border border-orange-500/20 rounded-2xl p-4">
                                <h4 className="text-lg font-semibold text-orange-400 mb-3">Analytics Tools:</h4>
                                <ul className="space-y-2">
                                  {step.content.tools?.map((tool, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                      <ArrowRight className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" aria-hidden="true" />
                                      <span className="text-neutral-300 text-sm">{tool}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="bg-black/60 border border-orange-500/20 rounded-2xl p-4">
                                <h4 className="text-lg font-semibold text-orange-400 mb-3">Optimization Process:</h4>
                                <ul className="space-y-2">
                                  {step.content.optimization?.map((process, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                      <CheckCircle className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                                      <span className="text-neutral-300 text-sm">{process}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </>
                        )}
                    </div>
                  </CardContent>
              </CollapsibleContent>
            </Collapsible>
              </Card>
            ))}
          </div>
                      </div>

        {/* Additional Platforms Section */}
        <section className="max-w-6xl mx-auto py-16 px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            More Places to Share
          </h2>
          <p className="text-center text-neutral-300 mb-12 max-w-3xl mx-auto">
            Once you're comfortable with core channels, explore these additional platforms. 
            Each one requires a different approach - customize your content for each platform's audience.
          </p>
          <div className="space-y-12">
            {additionalPlatforms.map((categoryGroup, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-bold text-white mb-6">{categoryGroup.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categoryGroup.platforms.map((platform) => (
                    <a
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300 group block"
                      aria-label={`${platform.actionText} - Opens in new tab`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 flex items-center justify-center rounded-md bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0 group-hover:bg-orange-500/30 group-hover:border-orange-500/50 transition-all duration-300">
                          <platform.icon className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h5 className="font-semibold text-white group-hover:text-orange-400 transition-colors text-sm">{platform.name}</h5>
                            <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-orange-400 transition-colors" aria-hidden="true" />
                          </div>
                          <p className="text-neutral-400 text-xs mb-2 mt-1">{platform.description}</p>
                          <span className="text-orange-400 text-xs font-medium">{platform.actionText} →</span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-black/60 border border-orange-500/20 rounded-2xl p-6">
            <h4 className="text-lg font-semibold text-orange-400 mb-3">Tips for Using Extended Channels:</h4>
            <ul className="space-y-2 text-neutral-300 text-sm">
              <li className="flex items-start gap-3">
                <ArrowRight className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" aria-hidden="true" />
                <span><strong>Customize your angle:</strong> Share history of money articles in economics/philosophy subreddits; privacy content in privacy/cypherpunk communities; eUTXO content on dev platforms and Hacker News</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" aria-hidden="true" />
                <span><strong>Vary your formats:</strong> Try full cross-posts (Reddit, Mirror, Medium), thread summaries with links, or visual content (diagrams, quotes) with source links</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" aria-hidden="true" />
                <span><strong>Take your time:</strong> Don't try to share everything in one day. Build a habit: for each new article, make 5-10 meaningful posts across different places over a few days</span>
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-5xl mx-auto py-16 px-4">
          <h2 className="text-4xl font-bold text-center mb-8 text-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqsData.map((faq, index) => (
              <Card key={faq.id} className="bg-black/80 border-white/10 backdrop-blur-sm rounded-3xl">
                <Collapsible 
                  open={openFAQ === index} 
                  onOpenChange={(open) => setOpenFAQ(open ? index : null)}
                >
                  <CollapsibleTrigger asChild>
                    <button className="w-full" aria-label={`Toggle FAQ: ${faq.q}`}>
                      <CardContent className="p-6 flex items-center justify-between hover:bg-black/70 transition-colors">
                        <h3 className="text-lg font-semibold text-left text-white">{faq.q}</h3>
                        <ChevronDown 
                          className={`w-5 h-5 text-neutral-400 transition-transform ${
                            openFAQ === index ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </CardContent>
                    </button>
              </CollapsibleTrigger>
              <CollapsibleContent>
                    <CardContent className="px-6 pb-6 pt-0">
                      <div className="text-neutral-300 leading-relaxed">
                        <p className="mb-4">{faq.a}</p>
                        {faq.links && (
                          <div className="space-y-2">
                            <h4 className="text-sm font-semibold text-orange-400">Useful Links:</h4>
                            <div className="flex flex-wrap gap-2">
                              {faq.links.map((link, i) => (
                                <a
                                  key={i}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300 underline text-sm"
                                >
                                  {link.text}
                                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                                </a>
                              ))}
                            </div>
                        </div>
                        )}
                    </div>
                  </CardContent>
              </CollapsibleContent>
            </Collapsible>
              </Card>
            ))}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
              Ready to <span className="text-orange-400">Help</span> Ergo Grow?
            </h2>
            <p className="text-xl text-center text-neutral-300 mb-12">
              Start implementing these strategies today and make a real impact on Ergo's growth
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <a 
                href="https://discord.gg/ergo-platform-668903786361651200"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block group"
                aria-label="Join Marketing Discord - Opens in new tab"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <Users className="w-6 h-6 text-orange-400" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">Join Marketing Discord</h3>
                        <p className="text-orange-400 text-sm">15K+ Active Members</p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-neutral-400 group-hover:text-orange-400 transition-colors" aria-hidden="true" />
                    </div>
                  </div>
                </div>
                <p className="text-neutral-300">
                  Connect with experienced community marketers, share strategies, and get feedback on your campaigns in #marketing channel
                </p>
              </a>
              
              <a 
                href="https://www.ergoblockchain.org/blog"
                    target="_blank"
                    rel="noopener noreferrer"
                className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block group"
                aria-label="Get Source Content - Opens blog in new tab"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <Globe className="w-6 h-6 text-orange-400" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">Get Source Content</h3>
                        <p className="text-orange-400 text-sm">Fresh Weekly Posts</p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-neutral-400 group-hover:text-orange-400 transition-colors" aria-hidden="true" />
                    </div>
                  </div>
                </div>
                <p className="text-neutral-300">
                  Start with ergoblockchain.org blog posts and announcements - your primary source for authentic, high-quality content to amplify
                </p>
              </a>
            </div>
        </div>
        </section>

        {/* Email Capture Form */}
        <FinalCTASimple 
          title="Stay Updated on Marketing"
          description="Get notified about new marketing strategies, community growth tactics, and engagement best practices"
        />

      </div>
    </BackgroundWrapper>
  )
}