"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SchemaOrg } from "@/components/seo/schema-org"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { FadeIn } from "@/components/animations/fade-in"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Rocket, Shield, Zap, ExternalLink, ArrowRight, ChevronDown, Lock, CheckCircle, Layers, Clock, Network, GitBranch, Activity, Cpu, Database, Server, Users, Globe, Terminal, BookOpen } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export default function SubblocksPage() {
  const t = useTranslations("technology.subblocks")
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("features")

  const features = [
    {
      title: t("features.0.title"),
      description: t("features.0.description"),
      icon: Clock,
    },
    {
      title: t("features.1.title"),
      description: t("features.1.description"),
      icon: Shield,
    },
    {
      title: t("features.2.title"),
      description: t("features.2.description"),
      icon: Network,
    },
    {
      title: t("features.3.title"),
      description: t("features.3.description"),
      icon: Layers,
    },
    {
      title: t("features.4.title"),
      description: t("features.4.description"),
      icon: Activity,
    },
    {
      title: t("features.5.title"),
      description: t("features.5.description"),
      icon: Cpu,
    },
  ]

  const technicalDetails = [
    {
      title: t("technicalDetails.0.title"),
      content: t("technicalDetails.0.content"),
    },
    {
      title: t("technicalDetails.1.title"),
      content: t("technicalDetails.1.content"),
    },
    {
      title: t("technicalDetails.2.title"),
      content: t("technicalDetails.2.content"),
    },
    {
      title: t("technicalDetails.3.title"),
      content: t("technicalDetails.3.content"),
    },
  ]

  const useCases = [
    {
      title: t("useCases.0.title"),
      description: t("useCases.0.description"),
      icon: GitBranch,
    },
    {
      title: t("useCases.1.title"),
      description: t("useCases.1.description"),
      icon: Database,
    },
    {
      title: t("useCases.2.title"),
      description: t("useCases.2.description"),
      icon: Server,
    },
    {
      title: t("useCases.3.title"),
      description: t("useCases.3.description"),
      icon: Users,
    },
  ]

  const faqs = [
    {
      question: t("faq.0.question"),
      answer: t("faq.0.answer"),
    },
    {
      question: t("faq.1.question"),
      answer: t("faq.1.answer"),
    },
    {
      question: t("faq.2.question"),
      answer: t("faq.2.answer"),
    },
    {
      question: t("faq.3.question"),
      answer: t("faq.3.answer"),
    },
    {
      question: t("faq.4.question"),
      answer: t("faq.4.answer"),
    },
  ]

  return (
    <>
      {/* BreadcrumbList Schema */}
      <SchemaOrg
        type="BreadcrumbList"
        data={{
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Technology",
              item: "https://ergoblockchain.org/technology"
            },
            {
              "@type": "ListItem", 
              position: 2,
              name: "Subblocks",
              item: "https://ergoblockchain.org/technology/subblocks"
            }
          ]
        }}
      />

      {/* FAQPage Schema */}
      <SchemaOrg
        type="FAQPage"
        data={{
          "@type": "FAQPage",
          mainEntity: faqs.map(faq => ({
              "@type": "Question",
            name: faq.question,
              acceptedAnswer: {
                "@type": "Answer", 
              text: faq.answer
              }
          }))
        }}
      />
      
      <BackgroundWrapper>
        {/* Breadcrumbs */}
        <div className="sr-only">
          <Breadcrumbs
            items={[
              { name: "Technology", href: "/technology" },
              { name: "Subblocks", href: "/technology/subblocks" }
            ]}
            className="mb-8"
          />
        </div>

        <FadeIn>
          {/* Hero Section */}
          <section className="pt-28 md:pt-32 pb-12 md:pb-16 px-4">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                  {t("title")}
                </h1>
                <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-2xl">
                  {t("subtitle")}
                </p>
                <p className="text-lg text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                  {t("description")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/docs">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl">
                      {t("buttons.learnMore")}
                    </Button>
                  </Link>
                  <Link href="/docs/introduction/roadmap/sub-blocks">
                    <Button
                      variant="outline"
                      className="border-neutral-700 text-neutral-300 hover:bg-orange-500/10 hover:border-orange-500/50 hover:text-orange-400 px-8 py-3 rounded-xl"
                    >
                      {t("buttons.technicalDetails")}
                    </Button>
                  </Link>
                </div>
              </div>
              <motion.div className="relative z-10" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 24 }}>
                <div className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-6 text-center text-white">
                    {t("keyMetrics.title")}
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      {
                        name: t("keyMetrics.confirmationTime.name"),
                        value: t("keyMetrics.confirmationTime.value"),
                        description: t("keyMetrics.confirmationTime.description")
                      },
                      {
                        name: t("keyMetrics.throughputIncrease.name"),
                        value: t("keyMetrics.throughputIncrease.value"),
                        description: t("keyMetrics.throughputIncrease.description")
                      },
                      {
                        name: t("keyMetrics.securityModel.name"),
                        value: t("keyMetrics.securityModel.value"),
                        description: t("keyMetrics.securityModel.description")
                      },
                      {
                        name: t("keyMetrics.compatibility.name"),
                        value: t("keyMetrics.compatibility.value"),
                        description: t("keyMetrics.compatibility.description")
                      },
                    ].map((item) => (
                      <div key={item.name} className="p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-white text-lg">{item.name}</h4>
                            <p className="text-sm text-neutral-400">{item.description}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-orange-400">{item.value}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.2}>
          {/* Features Section */}
          <section id="features" className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {t("featuresSection.title")}
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  {t("featuresSection.description")}
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={feature.title} className="bg-black/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-orange-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-neutral-300 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

          {/* Technical Details Section */}
          <motion.section 
            id="technical"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-16 px-4 bg-neutral-900/20"
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {t("technicalSection.title")}
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  {t("technicalSection.description")}
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {technicalDetails.map((detail, index) => (
                  <motion.div
                    key={detail.title}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="h-full"
                  >
                    <div className="bg-black/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm h-full flex flex-col hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                      <h3 className="text-white text-xl font-semibold mb-4">{detail.title}</h3>
                      <p className="text-neutral-300 leading-relaxed flex-1">
                        {detail.content}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Use Cases Section */}
          <motion.section 
            id="use-cases"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-16 px-4"
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {t("useCasesSection.title")}
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  {t("useCasesSection.description")}
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {useCases.map((useCase, index) => (
                  <motion.div
                    key={useCase.title}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <div className="bg-black/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm h-full hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                          <useCase.icon className="w-6 h-6 text-orange-400" />
                        </div>
                        <h3 className="text-white text-xl font-semibold">{useCase.title}</h3>
                      </div>
                      <p className="text-neutral-300 leading-relaxed">
                        {useCase.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* FAQ Section */}
          <motion.section 
            id="faq"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-16 px-4 bg-neutral-900/20"
          >
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {t("faqSection.title")}
                </h2>
                <p className="text-xl text-neutral-400">
                  {t("faqSection.description")}
                </p>
              </div>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <Collapsible
                      open={openFAQ === index}
                      onOpenChange={() => setOpenFAQ(openFAQ === index ? null : index)}
                    >
                      <div className="bg-black/80 border border-white/10 rounded-3xl backdrop-blur-sm">
                        <CollapsibleTrigger asChild>
                          <div className="cursor-pointer hover:bg-neutral-800/30 transition-colors p-8">
                            <div className="flex items-center justify-between">
                              <h3 className="text-white text-left font-semibold">{faq.question}</h3>
                              <ChevronDown 
                                className={`w-5 h-5 text-neutral-400 transition-transform ${
                                  openFAQ === index ? 'rotate-180' : ''
                                }`} 
                              />
                            </div>
                          </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <div className="px-8 pb-8">
                            <p className="text-neutral-300 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </CollapsibleContent>
                      </div>
                    </Collapsible>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

        <FadeIn delay={1.4}>
          {/* What's Next Section */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Experience Sub-Second Confirmations?
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  Join the future of blockchain technology with subblocks - where speed meets security
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Link href="/docs/introduction/roadmap/sub-blocks" className="group block">
                  <div className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 h-full cursor-pointer">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Terminal className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">Read Technical Details</h3>
                        <p className="text-orange-400 font-medium">Implementation Guide</p>
                      </div>
                    </div>
                    <p className="text-neutral-300 leading-relaxed">
                      Dive deep into the technical architecture and implementation of subblocks
                    </p>
                  </div>
                </Link>
                
                <Link href="/technology" className="group block">
                  <div className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 h-full cursor-pointer">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">Explore Other Technologies</h3>
                        <p className="text-orange-400 font-medium">Learn More</p>
                      </div>
                    </div>
                    <p className="text-neutral-300 leading-relaxed">
                      Discover more innovative technologies powering the Ergo blockchain
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </FadeIn>
      </BackgroundWrapper>
    </>
  )
} 