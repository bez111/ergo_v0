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

  const lastUpdated = new Date().toISOString().slice(0, 10)

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
      
      <div className="min-h-screen bg-black relative overflow-hidden motion-reduce:animate-none">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/20 to-black"></div>

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

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 motion-reduce:animate-none pb-24">
        {/* Hero Section */}
          <motion.section 
            variants={itemVariants} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="pt-28 md:pt-32 pb-12 md:pb-16 px-4 motion-reduce:transform-none"
          >
            <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-2 text-white">
                  {t("title")}
                </h1>
                  <p className="text-sm text-neutral-500 mb-4">{t("lastUpdated")}: {lastUpdated}</p>
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
                  <nav aria-label="On this page" className="mt-6 text-sm text-neutral-400">
                    <ul className="flex flex-wrap gap-4">
                      <li><a href="#features" className="hover:text-orange-400">{t("navigation.keyFeatures")}</a></li>
                      <li><a href="#technical" className="hover:text-orange-400">{t("navigation.technicalDetails")}</a></li>
                      <li><a href="#use-cases" className="hover:text-orange-400">{t("navigation.useCases")}</a></li>
                      <li><a href="#faq" className="hover:text-orange-400">{t("navigation.faq")}</a></li>
                    </ul>
                  </nav>
              </div>
              <div className="relative">
                  <div className="relative z-10">
                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl p-8">
                    <CardContent className="p-0">
                        <h3 className="text-2xl font-bold mb-6 text-center text-white">
                          {t("keyMetrics.title")}
                      </h3>
                        <div className="space-y-4">
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
                            <div key={item.name} className="p-4 rounded-lg bg-neutral-900/60 border border-neutral-700">
                              <div className="flex items-center justify-between">
                                <div>
                                  <h4 className="font-semibold text-white">{item.name}</h4>
                                  <p className="text-sm text-neutral-400">{item.description}</p>
                                </div>
                                <div className="text-right">
                                  <div className="text-2xl font-bold text-orange-400">{item.value}</div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                    </CardContent>
                    </Card>
                  </div>
              </div>
            </div>
            </div>
          </motion.section>

          {/* Features Section */}
          <motion.section 
            id="features"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-16 px-4"
          >
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
                  <motion.div
                    key={feature.title}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm h-full">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-orange-500/10 rounded-lg">
                            <feature.icon className="w-6 h-6 text-orange-400" />
                          </div>
                          <CardTitle className="text-white">{feature.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-neutral-400 leading-relaxed">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

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
                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm h-full flex flex-col">
                      <CardHeader>
                        <CardTitle className="text-white">{detail.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <p className="text-neutral-400 leading-relaxed">
                          {detail.content}
                        </p>
                      </CardContent>
                    </Card>
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
                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm h-full">
                      <CardHeader>
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="p-2 bg-orange-500/10 rounded-lg">
                            <useCase.icon className="w-6 h-6 text-orange-400" />
                          </div>
                          <CardTitle className="text-white text-lg">{useCase.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-neutral-400 leading-relaxed">
                          {useCase.description}
                        </p>
                      </CardContent>
                    </Card>
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
                      <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                        <CollapsibleTrigger asChild>
                          <CardHeader className="cursor-pointer hover:bg-neutral-800/50 transition-colors">
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-white text-left">{faq.question}</CardTitle>
                              <ChevronDown 
                                className={`w-5 h-5 text-neutral-400 transition-transform ${
                                  openFAQ === index ? 'rotate-180' : ''
                                }`} 
                              />
                            </div>
                          </CardHeader>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <CardContent>
                            <p className="text-neutral-400 leading-relaxed">
                              {faq.answer}
                            </p>
                          </CardContent>
                        </CollapsibleContent>
                      </Card>
                    </Collapsible>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-16 px-4"
          >
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {t("cta.title")}
              </h2>
              <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
                {t("cta.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/docs/introduction/roadmap/sub-blocks">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl">
                    {t("cta.buttons.readTechnicalDetails")}
                  </Button>
                </Link>
                <Link href="/technology">
                  <Button
                    variant="outline"
                    className="border-neutral-700 text-neutral-300 hover:bg-orange-500/10 hover:border-orange-500/50 hover:text-orange-400 px-8 py-3 rounded-xl"
                  >
                    {t("cta.buttons.exploreOtherTechnologies")}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </>
  )
} 