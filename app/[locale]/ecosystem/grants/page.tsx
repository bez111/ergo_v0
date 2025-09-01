"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SchemaOrg } from "@/components/seo/schema-org"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { 
  DollarSign, 
  Users, 
  Rocket, 
  ExternalLink, 
  ArrowRight, 
  CheckCircle
} from "lucide-react"
import Link from "next/link"
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

export default function GrantsPage() {
  const t = useTranslations("ecosystem.grants")

  const lastUpdated = "2024-01-15"

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
              name: "Ecosystem",
              item: "https://ergoblockchain.org/ecosystem"
            },
            {
              "@type": "ListItem",
              position: 2,
              name: t("title"),
              item: "https://ergoblockchain.org/ecosystem/grants"
            }
          ]
        }}
      />

      <div className="min-h-screen bg-black relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/20 to-black"></div>

        {/* Breadcrumbs */}
        <div className="sr-only">
          <Breadcrumbs
            items={[
              { name: "Ecosystem", href: "/ecosystem" },
              { name: t("title"), href: "/ecosystem/grants" }
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
            <div className="max-w-7xl mx-auto">
              <div className="text-center">
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
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://github.com/ergoplatform/grow-ergo" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl">
                      {t("buttons.applyNow")}
                    </Button>
                  </a>
                  <Link href="/ecosystem">
                    <Button
                      variant="outline"
                      className="border-neutral-700 text-neutral-300 hover:bg-orange-500/10 hover:border-orange-500/50 hover:text-orange-400 px-8 py-3 rounded-xl"
                    >
                      {t("buttons.viewProjects")}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Features Section */}
          <motion.section
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-16 px-4"
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {t("features.title")}
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  {t("features.subtitle")}
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-orange-500/10 rounded-lg">
                        <DollarSign className="w-6 h-6 text-orange-400" />
                      </div>
                      <CardTitle className="text-white">{t("features.funding.title")}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-400 leading-relaxed">
                      {t("features.funding.description")}
                    </p>
                  </CardContent>
                </Card>
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
                <a href="https://github.com/ergoplatform/grow-ergo" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl">
                    {t("cta.buttons.applyGrant")}
                  </Button>
                </a>
                <Link href="/start/community">
                  <Button
                    variant="outline"
                    className="border-neutral-700 text-neutral-300 hover:bg-orange-500/10 hover:border-orange-500/50 hover:text-orange-400 px-8 py-3 rounded-xl"
                  >
                    {t("cta.buttons.joinCommunity")}
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