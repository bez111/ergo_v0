"use client"

/* eslint-disable react/no-unescaped-entities */

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Users, Target, Lightbulb } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { SectionHeading } from "@/components/section-heading"
import { HexagonalGrid } from "@/components/ui-kit/signature-effects"

function GrantsClient() {
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

  const features = [
    {
      icon: Zap,
      title: t('features.items.0.title'),
      description: t('features.items.0.description'),
    },
    {
      icon: Target,
      title: t('features.items.1.title'),
      description: t('features.items.1.description'),
    },
    {
      icon: Users,
      title: t('features.items.2.title'),
      description: t('features.items.2.description'),
    },
    {
      icon: Lightbulb,
      title: t('features.items.3.title'),
      description: t('features.items.3.description'),
    },
  ]

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
                {t('hero.title')}
              </h1>
              <p className="text-xl md:text-2xl text-neutral-300 mb-12 max-w-3xl mx-auto">
                {t('hero.description')}
              </p>

              {/* Email Subscription */}
              <div className="max-w-md mx-auto">
                {!isSubscribed ? (
                  <form onSubmit={handleSubscribe} className="flex gap-2">
                    <Input
                      type="email"
                      placeholder={t('subscribe.placeholder')}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-neutral-900/80 border-neutral-700 text-white placeholder-neutral-500"
                      required
                    />
                    <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl">
                      {t('subscribe.button')}
                    </Button>
                  </form>
                ) : (
                  <div className="text-green-400 text-lg">
                    {t('subscribe.success')}
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
                text={t('features.title')}
                subtitle={t('features.subtitle')}
                description={t('features.description')}
              />

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
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
                  {t('cta.buttons.discord')}
                </Button>
                <Button
                  variant="outline"
                  className="border-neutral-700 text-neutral-300 hover:bg-neutral-900/60 px-8 py-3 rounded-xl backdrop-blur-sm"
                >
                  {t('cta.buttons.learn')}
                </Button>
              </div>
            </div>
          </section>
        </FadeIn>
      </div>
    </div>
  )
}

export default GrantsClient
