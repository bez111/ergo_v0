"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { SectionHeading } from "@/components/section-heading"
import { FadeIn } from "@/components/animations/fade-in"
import { Shield, Cpu, Zap, Users, ExternalLink, CheckCircle, TrendingUp, ChevronDown, Link as LinkIcon, BookOpen, Copy } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { SchemaOrg } from "@/components/seo/schema-org"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"

export default function SecurePowPage() {
  const t = useTranslations("technology.securePow")
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [copied, setCopied] = useState(false)
  const exampleCmd = t("exampleCommand")

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08, when: "beforeChildren" } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.25 } },
  }

  const features = [
    {
      icon: Shield,
      title: t("features.0.title"),
      description: t("features.0.description"),
      color: "from-orange-500/20 to-orange-500/5",
    },
    {
      icon: Zap,
      title: t("features.1.title"),
      description: t("features.1.description"),
      color: "from-cyan-500/20 to-cyan-500/5",
    },
    {
      icon: Users,
      title: t("features.2.title"),
      description: t("features.2.description"),
      color: "from-purple-500/20 to-purple-500/5",
    },
  ]

  const networkStats = [
    { label: t("networkStats.0.label"), value: t("networkStats.0.value"), change: t("networkStats.0.change") },
    { label: t("networkStats.1.label"), value: t("networkStats.1.value"), change: t("networkStats.1.change") },
    { label: t("networkStats.2.label"), value: t("networkStats.2.value"), change: t("networkStats.2.change") },
    { label: t("networkStats.3.label"), value: t("networkStats.3.value"), change: t("networkStats.3.change") },
  ]

  const benefits = [
    t("benefits.0"),
    t("benefits.1"),
    t("benefits.2"),
    t("benefits.3"),
    t("benefits.4"),
    t("benefits.5"),
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
    {
      question: t("faq.5.question"),
      answer: t("faq.5.answer"),
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
          },
        }}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { name: "Technology", href: "/technology" },
          { name: "Secure PoW", href: "/technology/secure-pow" },
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
          animate="show"
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, i) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <Card className={`bg-gradient-to-br ${feature.color} border-gray-700/50 backdrop-blur-xl h-full`}>
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

        {/* Network Stats */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {networkStats.map((stat) => (
              <Card key={stat.label} className="bg-neutral-900/50 border-neutral-700">
                <CardContent className="p-6">
                  <p className="text-sm text-neutral-400 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                  <p className={`text-sm ${stat.change.startsWith("+") ? "text-green-400" : "text-neutral-400"}`}>
                    {stat.change}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits List */}
        <section className="mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{t("benefitsTitle")}</h2>
            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3 bg-neutral-900/30 p-4 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-neutral-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mining Command */}
        <section className="mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{t("miningCommandTitle")}</h2>
            <div className="bg-neutral-900 rounded-lg p-4 flex items-center justify-between">
              <code className="text-orange-400">{exampleCmd}</code>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(exampleCmd)
                  setCopied(true)
                  setTimeout(() => setCopied(false), 2000)
                }}
                className="text-neutral-400 hover:text-white"
              >
                {copied ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
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
            <Link href="/docs/mining">
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-semibold px-8 py-3 rounded-xl">
                {t("ctaButtons.readGuide")}
                <BookOpen className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="https://github.com/ergoplatform/ergo" target="_blank">
              <Button variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-xl">
                {t("ctaButtons.viewCode")}
                <LinkIcon className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
