"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Mail, Zap, Users, Target, Lightbulb } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"
import { HexagonalGrid } from "@/components/ui-kit/signature-effects"
import { useTranslations } from "next-intl"

export default function GrantsClient() {
  const t = useTranslations('ecosystem.grants')
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
    }
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* subtle background grid */}
      <HexagonalGrid className="opacity-[0.03]" />
      <div className="relative z-10">
        {/* Hero Section */}
        <FadeIn>
          <section className="pt-32 pb-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-snug pb-2">
                Coming Soon
              </h1>
              <p className="text-xl md:text-2xl text-neutral-300 mb-12 max-w-3xl mx-auto">
                Empowering developers, researchers, and innovators to build the future of decentralized finance on Ergo
              </p>

              {/* Countdown */}
              <div className="flex justify-center items-center gap-4 mb-12">
                <Clock className="w-6 h-6 text-orange-400" />
                <span className="text-lg text-neutral-300">Expected Launch: Q3 2025</span>
              </div>

              {/* Email Subscription */}
              <div className="max-w-md mx-auto">
                {!isSubscribed ? (
                  <form onSubmit={handleSubscribe} className="flex gap-2">
                    <Input
                      type="email"
                      placeholder="Enter your email for updates"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-neutral-900/80 border-neutral-700 text-white placeholder-neutral-500"
                      required
                    />
                    <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl">
                      Notify Me
                    </Button>
                  </form>
                ) : (
                  <div className="text-green-400 text-lg">
                    ✓ Thank you! We'll notify you when the grants program launches.
                  </div>
                )}
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Features */}
        <FadeIn delay={0.2}>
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <SectionHeading
                text={t('whatToExpect')}
                subtitle={t('grantsFeatures')}
                description={t('supportingInnovation')}
              />

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: Zap,
                    title: t('features.developerSupport.title'),
                    description: t('features.developerSupport.description'),
                    color: "",
                  },
                  {
                    icon: Target,
                    title: t('features.researchFunding.title'),
                    description: t('features.researchFunding.description'),
                    color: "",
                  },
                  {
                    icon: Users,
                    title: t('features.communityProjects.title'),
                    description: t('features.communityProjects.description'),
                    color: "",
                  },
                  {
                    icon: Lightbulb,
                    title: t('features.innovationGrants.title'),
                    description: t('features.innovationGrants.description'),
                    color: "",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    className="group"
                  >
                    <Card
                      className={`bg-neutral-900/50 border-neutral-700 backdrop-blur-sm hover:border-orange-500/50 transition-all duration-300 rounded-xl h-full`}
                    >
                      <CardContent className="p-8 text-center">
                        <feature.icon className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                        <p className="text-neutral-400 leading-relaxed">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Call to Action */}
        <FadeIn delay={0.4}>
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-[1.1] pb-1">
                {t('cta.title')}
              </h2>
              <p className="text-xl text-neutral-300 mb-8">
                {t('cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl">
                  {t('cta.joinDiscord')}
                </Button>
                <Button
                  variant="outline"
                  className="border-neutral-700 text-neutral-300 hover:bg-neutral-900/60 px-8 py-3 rounded-xl backdrop-blur-sm"
                >
                  {t('cta.learnAboutErgo')}
                </Button>
              </div>
            </div>
          </section>
        </FadeIn>
      </div>
    </div>
  )
}
