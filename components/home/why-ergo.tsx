"use client"

import React from "react"
import { Shield, Zap, Database, Lock, Users, Cpu } from "lucide-react"
import { useTranslations } from "next-intl"

export function WhyErgo() {
  const t = useTranslations('whyErgo')
  
  return (
    <section className="py-16 md:py-24 relative overflow-hidden" id="why-ergo">
      {/* Semi-transparent overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center gap-16">
          {/* Header */}
          <div className="text-center space-y-6 max-w-4xl">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="text-white">{t("title")}</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-[65ch] mx-auto">
              {t("subtitle")}
            </p>
          </div>

          {/* Main Features - Larger Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl">
            {/* FAIR & SECURE */}
            <div className="group relative bg-gradient-to-b from-neutral-900/60 to-neutral-900/40 border border-neutral-800/50 rounded-2xl p-10 hover:border-orange-400/50 hover:from-neutral-900/80 hover:to-neutral-900/60 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-b from-orange-400/0 to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="inline-flex bg-gradient-to-br from-orange-500/20 to-orange-900/20 p-4 rounded-xl border border-orange-500/20 group-hover:border-orange-400/40 transition-colors duration-300">
                    <Shield className="h-8 w-8 text-orange-400" />
                  </div>
                </div>
                <div className="mb-4">
                  <h3 className="text-white font-bold text-xl mb-1">{t("mainFeatures.fairAndSecure.title")}</h3>
                  <p className="text-orange-400/80 text-sm font-medium">{t("mainFeatures.fairAndSecure.subtitle")}</p>
                </div>
                <p className="text-gray-400 leading-relaxed">{t("mainFeatures.fairAndSecure.description")}</p>
              </div>
            </div>

            {/* POWERFUL & FLEXIBLE */}
            <div className="group relative bg-gradient-to-b from-neutral-900/60 to-neutral-900/40 border border-neutral-800/50 rounded-2xl p-10 hover:border-orange-400/50 hover:from-neutral-900/80 hover:to-neutral-900/60 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-b from-orange-400/0 to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="inline-flex bg-gradient-to-br from-orange-500/20 to-orange-900/20 p-4 rounded-xl border border-orange-500/20 group-hover:border-orange-400/40 transition-colors duration-300">
                    <Zap className="h-8 w-8 text-orange-400" />
                  </div>
                </div>
                <div className="mb-4">
                  <h3 className="text-white font-bold text-xl mb-1">{t("mainFeatures.powerfulAndFlexible.title")}</h3>
                  <p className="text-orange-400/80 text-sm font-medium">{t("mainFeatures.powerfulAndFlexible.subtitle")}</p>
                </div>
                <p className="text-gray-400 leading-relaxed">{t("mainFeatures.powerfulAndFlexible.description")}</p>
              </div>
            </div>

            {/* SUSTAINABLE */}
            <div className="group relative bg-gradient-to-b from-neutral-900/60 to-neutral-900/40 border border-neutral-800/50 rounded-2xl p-10 hover:border-orange-400/50 hover:from-neutral-900/80 hover:to-neutral-900/60 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-b from-orange-400/0 to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="inline-flex bg-gradient-to-br from-orange-500/20 to-orange-900/20 p-4 rounded-xl border border-orange-500/20 group-hover:border-orange-400/40 transition-colors duration-300">
                    <Database className="h-8 w-8 text-orange-400" />
                  </div>
                </div>
                <div className="mb-4">
                  <h3 className="text-white font-bold text-xl mb-1">{t("mainFeatures.sustainable.title")}</h3>
                  <p className="text-orange-400/80 text-sm font-medium">{t("mainFeatures.sustainable.subtitle")}</p>
                </div>
                <p className="text-gray-400 leading-relaxed">{t("mainFeatures.sustainable.description")}</p>
              </div>
            </div>
          </div>

          {/* Additional Features - Smaller Cards */}
          <div className="w-full max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* PRIVACY FIRST */}
              <div className="group flex items-start gap-4 p-6 bg-gradient-to-b from-neutral-900/60 to-neutral-900/40 border border-neutral-800/30 rounded-xl hover:from-neutral-900/80 hover:to-neutral-900/60 hover:border-orange-400/30 transition-all duration-300">
                <div className="bg-gradient-to-br from-orange-900/30 to-orange-900/10 p-3 rounded-lg border border-orange-800/20 group-hover:border-orange-700/30 transition-colors duration-300 flex-shrink-0">
                  <Lock className="h-5 w-5 text-orange-400/90" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-2 uppercase tracking-wide">{t("additionalFeatures.privacy.title")}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{t("additionalFeatures.privacy.description")}</p>
                </div>
              </div>

              {/* COMMUNITY DRIVEN */}
              <div className="group flex items-start gap-4 p-6 bg-gradient-to-b from-neutral-900/60 to-neutral-900/40 border border-neutral-800/30 rounded-xl hover:from-neutral-900/80 hover:to-neutral-900/60 hover:border-orange-400/30 transition-all duration-300">
                <div className="bg-gradient-to-br from-orange-900/30 to-orange-900/10 p-3 rounded-lg border border-orange-800/20 group-hover:border-orange-700/30 transition-colors duration-300 flex-shrink-0">
                  <Users className="h-5 w-5 text-orange-400/90" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-2 uppercase tracking-wide">{t("additionalFeatures.community.title")}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{t("additionalFeatures.community.description")}</p>
                </div>
              </div>

              {/* DEVELOPER FRIENDLY */}
              <div className="group flex items-start gap-4 p-6 bg-gradient-to-b from-neutral-900/60 to-neutral-900/40 border border-neutral-800/30 rounded-xl hover:from-neutral-900/80 hover:to-neutral-900/60 hover:border-orange-400/30 transition-all duration-300">
                <div className="bg-gradient-to-br from-orange-900/30 to-orange-900/10 p-3 rounded-lg border border-orange-800/20 group-hover:border-orange-700/30 transition-colors duration-300 flex-shrink-0">
                  <Cpu className="h-5 w-5 text-orange-400/90" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-2 uppercase tracking-wide">{t("additionalFeatures.developer.title")}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{t("additionalFeatures.developer.description")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
