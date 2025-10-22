"use client"

import React from "react"
import { Shield, Zap, Database, BookOpen, Lock, Users } from "lucide-react"
import { useTranslations } from "next-intl"

export function WhatMakesDifferent() {
  const t = useTranslations('whatMakesDifferent')
  
  const features = [
    {
      title: t('features.fairLaunch.title'),
      description: t('features.fairLaunch.description'),
      icon: Shield,
    },
    {
      title: t('features.eutxoErgoscript.title'),
      description: t('features.eutxoErgoscript.description'),
      icon: Zap,
    },
    {
      title: t('features.storageRent.title'),
      description: t('features.storageRent.description'),
      icon: Database,
    },
    {
      title: t('features.researchDriven.title'),
      description: t('features.researchDriven.description'),
      icon: BookOpen,
    },
    {
      title: t('features.privacy.title'),
      description: t('features.privacy.description'),
      icon: Lock,
    },
    {
      title: t('features.communityLed.title'),
      description: t('features.communityLed.description'),
      icon: Users,
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden bg-black">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center gap-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">{t('title').split(' ').slice(0, 2).join(' ')}</span> <span className="text-white">{t('title').split(' ').slice(2).join(' ')}</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-4xl mx-auto">
              {t('subtitle')}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="group relative bg-neutral-900/40 border border-neutral-800/50 rounded-xl p-6 hover:border-orange-400/40 hover:bg-neutral-900/60 transition-all duration-300"
                >
                  {/* Icon and Title Row */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-gradient-to-br from-orange-900/40 to-orange-900/20 p-3 rounded-lg border border-orange-800/30 group-hover:border-orange-700/40 transition-colors duration-300 flex-shrink-0">
                      <Icon className="h-5 w-5 text-orange-400" />
                    </div>
                    <h3 className="text-white font-semibold text-sm leading-tight uppercase tracking-wide">
                      {feature.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
} 