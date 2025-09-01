"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { SectionHeading } from "@/components/section-heading"
import { FadeIn } from "@/components/animations/fade-in"
import { CyberCard } from "@/components/animations/cyber-card"
import { DigitalCounter } from "@/components/digital-counter"
import {
  Cpu,
  HardDrive,
  Zap,
  DollarSign,
  Users,
  Shield,
  Download,
  Settings,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  Monitor,
  Thermometer,
  Activity,
  Clock,
  Calculator,
  BookOpen,
  Wrench,
  Globe,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function MiningClient() {
  const t = useTranslations("use.mining")
  const [activeTab, setActiveTab] = useState("pools")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const miningPools = [
    {
      name: t("pools.0.name"),
      url: t("pools.0.url"),
      fee: t("pools.0.fee"),
      minPayout: t("pools.0.minPayout"),
      features: [
        t("pools.0.features.0"),
        t("pools.0.features.1"),
        t("pools.0.features.2"),
      ],
      status: "active",
    },
    {
      name: t("pools.1.name"),
      url: t("pools.1.url"),
      fee: t("pools.1.fee"),
      minPayout: t("pools.1.minPayout"),
      features: [
        t("pools.1.features.0"),
        t("pools.1.features.1"),
        t("pools.1.features.2"),
      ],
      status: "active",
    },
    {
      name: t("pools.2.name"),
      url: t("pools.2.url"),
      fee: t("pools.2.fee"),
      minPayout: t("pools.2.minPayout"),
      features: [
        t("pools.2.features.0"),
        t("pools.2.features.1"),
        t("pools.2.features.2"),
      ],
      status: "active",
    },
    {
      name: t("pools.3.name"),
      url: t("pools.3.url"),
      fee: t("pools.3.fee"),
      minPayout: t("pools.3.minPayout"),
      features: [
        t("pools.3.features.0"),
        t("pools.3.features.1"),
        t("pools.3.features.2"),
      ],
      status: "active",
    },
  ]

  const hardwareRequirements = [
    {
      category: t("hardware.gpu.category"),
      icon: <Monitor className="w-6 h-6" />,
      requirements: [
        t("hardware.gpu.requirements.0"),
        t("hardware.gpu.requirements.1"),
        t("hardware.gpu.requirements.2"),
        t("hardware.gpu.requirements.3"),
      ],
      performance: t("hardware.gpu.performance"),
      difficulty: t("hardware.gpu.difficulty"),
    },
    {
      category: t("hardware.cpu.category"),
      icon: <Cpu className="w-6 h-6" />,
      requirements: [
        t("hardware.cpu.requirements.0"),
        t("hardware.cpu.requirements.1"),
        t("hardware.cpu.requirements.2"),
      ],
      performance: t("hardware.cpu.performance"),
      difficulty: t("hardware.cpu.difficulty"),
    },
    {
      category: t("hardware.memory.category"),
      icon: <HardDrive className="w-6 h-6" />,
      requirements: [
        t("hardware.memory.requirements.0"),
        t("hardware.memory.requirements.1"),
        t("hardware.memory.requirements.2"),
      ],
      performance: t("hardware.memory.performance"),
      difficulty: t("hardware.memory.difficulty"),
    },
  ]

  const minerSoftware = [
    {
      name: t("software.0.name"),
      type: t("software.0.type"),
      features: [
        t("software.0.features.0"),
        t("software.0.features.1"),
        t("software.0.features.2"),
      ],
      link: t("software.0.link"),
      status: "recommended",
    },
    {
      name: t("software.1.name"),
      type: t("software.1.type"),
      features: [
        t("software.1.features.0"),
        t("software.1.features.1"),
        t("software.1.features.2"),
      ],
      link: t("software.1.link"),
      status: "active",
    },
    {
      name: t("software.2.name"),
      type: t("software.2.type"),
      features: [
        t("software.2.features.0"),
        t("software.2.features.1"),
        t("software.2.features.2"),
      ],
      link: t("software.2.link"),
      status: "active",
    },
  ]

  const optimizationTips = [
    {
      category: t("optimization.0.category"),
      icon: <Settings className="w-6 h-6" />,
      tips: [
        t("optimization.0.tips.0"),
        t("optimization.0.tips.1"),
        t("optimization.0.tips.2"),
      ],
    },
    {
      category: t("optimization.1.category"),
      icon: <Thermometer className="w-6 h-6" />,
      tips: [
        t("optimization.1.tips.0"),
        t("optimization.1.tips.1"),
        t("optimization.1.tips.2"),
      ],
    },
    {
      category: t("optimization.2.category"),
      icon: <Activity className="w-6 h-6" />,
      tips: [
        t("optimization.2.tips.0"),
        t("optimization.2.tips.1"),
        t("optimization.2.tips.2"),
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/20 to-black" />
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/10 via-transparent to-red-900/10" />

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

        {/* Mining Pools */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">{t("poolsTitle")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {miningPools.map((pool) => (
              <Card key={pool.name} className="bg-neutral-900/50 border-neutral-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">{pool.name}</h3>
                    <Badge variant={pool.status === "active" ? "default" : "secondary"}>
                      {pool.status === "active" ? t("active") : t("inactive")}
                    </Badge>
                  </div>
                  <div className="space-y-2 text-sm text-neutral-400 mb-4">
                    <p>{t("poolUrl")}: {pool.url}</p>
                    <p>{t("poolFee")}: {pool.fee}</p>
                    <p>{t("minPayout")}: {pool.minPayout}</p>
                  </div>
                  <div className="space-y-1">
                    {pool.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Hardware Requirements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">{t("hardwareTitle")}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {hardwareRequirements.map((hw) => (
              <Card key={hw.category} className="bg-neutral-900/50 border-neutral-700">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {hw.icon}
                    <h3 className="text-lg font-semibold">{hw.category}</h3>
                  </div>
                  <div className="space-y-2 mb-4">
                    {hw.requirements.map((req, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                        <span className="text-neutral-300">{req}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <p className="text-neutral-400">{t("performance")}: {hw.performance}</p>
                    <p className="text-neutral-400">{t("difficulty")}: {hw.difficulty}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Mining Software */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">{t("softwareTitle")}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {minerSoftware.map((software) => (
              <Card key={software.name} className="bg-neutral-900/50 border-neutral-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">{software.name}</h3>
                    <Badge variant={software.status === "recommended" ? "default" : "secondary"}>
                      {software.status === "recommended" ? t("recommended") : t("alternative")}
                    </Badge>
                  </div>
                  <p className="text-sm text-neutral-400 mb-4">{software.type}</p>
                  <div className="space-y-2 mb-4">
                    {software.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        <span className="text-neutral-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={software.link} target="_blank" rel="noopener noreferrer">
                      {t("download")}
                      <Download className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Optimization Tips */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">{t("optimizationTitle")}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {optimizationTips.map((category) => (
              <Card key={category.category} className="bg-neutral-900/50 border-neutral-700">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {category.icon}
                    <h3 className="text-lg font-semibold">{category.category}</h3>
                  </div>
                  <div className="space-y-2">
                    {category.tips.map((tip, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                        <span className="text-neutral-300">{tip}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
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
                <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
