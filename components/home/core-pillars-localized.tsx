"use client"

import React from "react"
import { useTranslations, useLocale } from "next-intl"
import { Shield, Code, RefreshCw, Lock, Database, Cpu } from "lucide-react"

export function CorePillars() {
  const t = useTranslations('corePillars')
  const locale = useLocale()

  const pillars = [
    {
      title: t('pillars.security.title'),
      description: t('pillars.security.description'),
      icon: Shield,
    },
    {
      title: t('pillars.programmability.title'),
      description: t('pillars.programmability.description'),
      icon: Code,
    },
    {
      title: t('pillars.sustainability.title'),
      description: t('pillars.sustainability.description'),
      icon: RefreshCw,
    },
    {
      title: t('pillars.privacy.title'),
      description: t('pillars.privacy.description'),
      icon: Lock,
    },
    {
      title: t('pillars.oraclePools.title'),
      description: t('pillars.oraclePools.description'),
      icon: Database,
    },
    {
      title: t('pillars.devFriendly.title'),
      description: t('pillars.devFriendly.description'),
      icon: Cpu,
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden bg-black">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center gap-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="text-orange-400">{t('title').split(' ')[0]}</span> <span className="text-white">{t('title').split(' ')[1]}</span>
            </h2>
            <div className="w-20 h-1 bg-orange-400 mx-auto"></div>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">&gt;</span> {t('subtitle')}
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <div
                  key={index}
                  className="group relative bg-neutral-900/40 border border-neutral-800/50 rounded-xl p-8 hover:border-orange-400/40 hover:bg-neutral-900/60 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="bg-gradient-to-br from-orange-900/40 to-orange-900/20 p-4 rounded-xl border border-orange-800/30 group-hover:border-orange-700/40 transition-colors duration-300">
                      <Icon className="h-7 w-7 text-orange-400" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-white text-center font-semibold text-base mb-4 tracking-wide uppercase">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-center text-sm leading-relaxed">
                    {pillar.description}
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
