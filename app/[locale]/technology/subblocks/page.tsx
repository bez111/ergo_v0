"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
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

export default function SubblocksPage() {
  const t = useTranslations("technology.subblocks")
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("architecture")

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
      icon: Globe,
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
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/20 to-black" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/10 via-transparent to-red-900/10" aria-hidden />

      {/* SEO Schema */}
      <SchemaOrg
        type="TechArticle"
        data={{
          "@type": "TechArticle",
          headline: t("seo.title"),
          description: t("seo.description"),
          keywords: t("seo.keywords"),
          datePublished: "2023-11-10",
          dateModified: "2025-08-10",
          author: {
            "@type": "Organization",
            name: "Ergo Platform",
            url: "https://ergoplatform.org",
            logo: {
              "@type": "ImageObject",
              url: "https://ergoplatform.org/img/logo-dark.svg",
            },
          },
          image: "https://ergoplatform.org/img/subblocks.png",
          publisher: {
            "@type": "Organization",
            name: "Ergo Platform",
            url: "https://ergoplatform.org",
            logo: {
              "@type": "ImageObject",
              url: "https://ergoplatform.org/img/logo-dark.svg",
            },
          },
        }}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { name: "Technology", href: "/technology" },
          { name: "Subblocks", href: "/technology/subblocks" },
        ]}
        className="mb-8"
      />

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent">
              {t("title")}
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto">
              {t("subtitle")}
            </p>
          </FadeIn>
        </section>

        {/* Features Grid */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, i) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <Card className="bg-gradient-to-br from-orange-500/20 to-orange-500/5 border-gray-700/50 backdrop-blur-xl h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-orange-500/10 rounded-lg">
                      <feature.icon className="w-6 h-6 text-orange-400" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-300">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.section>

        {/* Technical Details */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">{t("technicalDetailsTitle")}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {technicalDetails.map((detail) => (
              <Card key={detail.title} className="bg-neutral-900/50 border-neutral-700">
                <CardHeader>
                  <CardTitle className="text-xl">{detail.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-300">{detail.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">{t("useCasesTitle")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase) => (
              <Card key={useCase.title} className="bg-neutral-900/50 border-neutral-700">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                    <useCase.icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-neutral-300 text-sm">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{t("faqTitle")}</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Collapsible
                  key={index}
                  open={openFAQ === index}
                  onOpenChange={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <Card className="bg-neutral-900/50 border-neutral-700">
                    <CollapsibleTrigger asChild>
                      <CardHeader className="cursor-pointer hover:bg-neutral-800/50">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{faq.question}</CardTitle>
                          <ChevronDown
                            className={`w-5 h-5 text-neutral-400 transition-transform ${
                              openFAQ === index ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                      </CardHeader>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent>
                        <p className="text-neutral-300">{faq.answer}</p>
                      </CardContent>
                    </CollapsibleContent>
                  </Card>
                </Collapsible>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-8">{t("ctaTitle")}</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/docs/subblocks">
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-semibold px-8 py-3 rounded-xl">
                {t("ctaButtons.readGuide")}
                <BookOpen className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="https://github.com/ergoplatform/ergo" target="_blank">
              <Button variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-xl">
                {t("ctaButtons.viewCode")}
                <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
} 