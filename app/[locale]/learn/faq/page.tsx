"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { SchemaOrg } from "@/components/seo/schema-org"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { 
  HelpCircle, 
  ChevronDown,
  ExternalLink,
  ArrowRight
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import React from "react"

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

export default function FaqPage() {
  const t = useTranslations("learn.faq")
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const lastUpdated = "2024-01-15"

  const faqs = [
    {
      question: t("questions.0.question"),
      answer: t("questions.0.answer")
    },
    {
      question: t("questions.1.question"),
      answer: t("questions.1.answer")
    },
    {
      question: t("questions.2.question"),
      answer: t("questions.2.answer")
    }
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
              name: "Learn",
              item: "https://ergoblockchain.org/learn"
            },
            {
              "@type": "ListItem",
              position: 2,
              name: t("title"),
              item: "https://ergoblockchain.org/learn/faq"
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

      <div className="min-h-screen bg-black relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/20 to-black"></div>

        {/* Breadcrumbs */}
        <div className="sr-only">
          <Breadcrumbs
            items={[
              { name: "Learn", href: "/learn" },
              { name: t("title"), href: "/learn/faq" }
            ]}
            className="mb-8"
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 pb-24"
        >
          {/* Hero Section */}
          <motion.section
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="pt-28 md:pt-32 pb-12 md:pb-16 px-4"
          >
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-2 text-white">
                {t("title")}
              </h1>
              <p className="text-sm text-neutral-500 mb-4">{t("lastUpdated")}: {lastUpdated}</p>
              <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-2xl mx-auto">
                {t("subtitle")}
              </p>
              <p className="text-lg text-neutral-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                {t("description")}
              </p>
            </div>
          </motion.section>

          {/* FAQ Section */}
          <motion.section
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-16 px-4"
          >
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Collapsible
                    key={index}
                    open={openFAQ === index}
                    onOpenChange={() => setOpenFAQ(openFAQ === index ? null : index)}
                  >
                    <Card className="bg-neutral-900/50 border-neutral-700">
                      <CollapsibleTrigger asChild>
                        <CardContent className="p-6 cursor-pointer hover:bg-neutral-800/30 transition-colors">
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-white text-left">{faq.question}</h3>
                            <ChevronDown className={`w-5 h-5 text-neutral-400 transition-transform ${openFAQ === index ? "rotate-180" : ""}`} />
                          </div>
                        </CardContent>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <CardContent className="px-6 pb-6 pt-0">
                          <p className="text-neutral-300 leading-relaxed">{faq.answer}</p>
                        </CardContent>
                      </CollapsibleContent>
                    </Card>
                  </Collapsible>
                ))}
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.section
            variants={itemVariants}
            className="py-16 px-4"
          >
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t("cta.title")}</h2>
              <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
                {t("cta.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/start/community">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl">
                    {t("cta.buttons.askCommunity")}
                  </Button>
                </Link>
                <Link href="/docs">
                  <Button
                    variant="outline"
                    className="border-neutral-700 text-neutral-300 hover:bg-orange-500/10 hover:border-orange-500/50 hover:text-orange-400 px-8 py-3 rounded-xl"
                  >
                    {t("cta.buttons.browseDocs")}
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
