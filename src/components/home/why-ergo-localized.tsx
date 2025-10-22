"use client"

import React from "react"
import { useTranslations, useLocale } from "next-intl"
import { Shield, Zap, Database, Lock, Users, Cpu } from "lucide-react"

export function WhyErgo() {
  const t = useTranslations('whyErgo')
  const locale = useLocale()

  const mainFeatures = [
    {
      title: t('mainFeatures.fairAndSecure.title'),
      subtitle: t('mainFeatures.fairAndSecure.subtitle'),
      description: t('mainFeatures.fairAndSecure.description'),
      icon: Shield,
    },
    {
      title: t('mainFeatures.powerfulAndFlexible.title'),
      subtitle: t('mainFeatures.powerfulAndFlexible.subtitle'),
      description: t('mainFeatures.powerfulAndFlexible.description'),
      icon: Zap,
    },
    {
      title: t('mainFeatures.sustainable.title'),
      subtitle: t('mainFeatures.sustainable.subtitle'),
      description: t('mainFeatures.sustainable.description'),
      icon: Database,
    },
  ]

  const additionalFeatures = [
    {
      title: t('additionalFeatures.privacy.title'),
      description: t('additionalFeatures.privacy.description'),
      icon: Lock,
    },
    {
      title: t('additionalFeatures.community.title'),
      description: t('additionalFeatures.community.description'),
      icon: Users,
    },
    {
      title: t('additionalFeatures.developer.title'),
      description: t('additionalFeatures.developer.description'),
      icon: Cpu,
    },
  ]

  return (
    <section className="py-16 md:py-24 relative overflow-hidden" id="why-ergo">
      {/* Semi-transparent overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center gap-16">
          {/* Header */}
          <div className="text-center space-y-6 max-w-4xl">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="text-white">{t('title').split(' ')[0]}</span> <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">{t('title').split(' ')[1]}?</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-[65ch] mx-auto">
              {t('subtitle')}
            </p>
          </div>

          {/* Main Features - Larger Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl">
            {mainFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-b from-neutral-900/60 to-neutral-900/40 border border-neutral-800/50 rounded-2xl p-10 hover:border-orange-400/50 hover:from-neutral-900/80 hover:to-neutral-900/60 transition-all duration-500"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-orange-400/0 to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="inline-flex bg-gradient-to-br from-orange-500/20 to-orange-900/20 p-4 rounded-xl border border-orange-500/20 group-hover:border-orange-400/40 transition-colors duration-300">
                        <Icon className="h-8 w-8 text-orange-400" />
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="mb-4">
                      <h3 className="text-white font-bold text-xl mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-orange-400/80 text-sm font-medium">
                        {feature.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Additional Features - Compact Grid */}
          <div className="w-full max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {additionalFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="group flex items-start gap-4 p-6 bg-gradient-to-b from-neutral-900/60 to-neutral-900/40 border border-neutral-800/30 rounded-xl hover:from-neutral-900/80 hover:to-neutral-900/60 hover:border-orange-400/30 transition-all duration-300"
                  >
                                            <div className="bg-gradient-to-br from-orange-900/30 to-orange-900/10 p-3 rounded-lg border border-orange-800/20 group-hover:border-orange-700/30 transition-colors duration-300 flex-shrink-0">
                      <Icon className="h-5 w-5 text-orange-400/90" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-2 uppercase tracking-wide">
                        {feature.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 