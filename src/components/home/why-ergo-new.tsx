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
          <div className="flex flex-col items-center">
          {/* Header */}
          <div className="text-center max-w-4xl overflow-hidden">
            <h2 
              className="font-bold tracking-tight mb-6"
              style={{
                fontSize: 'clamp(32px, 4.5vw, 56px)',
                letterSpacing: '-0.02em',
                lineHeight: 1
              }}
            >
              <span className="text-white">Why</span> <span className="text-orange-400">Ergo</span><span className="text-white">?</span>
            </h2>
            <p 
              className="text-gray-300 font-light mx-auto mb-12"
              style={{
                fontSize: 'clamp(16px, 2vw, 20px)',
                lineHeight: 1.4,
                maxWidth: '60ch',
                opacity: 0.85
              }}
            >
              {t("subtitle")}
            </p>
          </div>

          {/* All Features - Large Cards in 2x3 Grid - Mobile Optimized */}
          <div className="w-full max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 items-stretch">
              {/* 1. FAIR & SECURE */}
              <div className="group relative bg-black/80 border border-white/10 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 hover:bg-black/90 hover:border-orange-400/50 transition-all duration-300 hover:-translate-y-0.5 h-full flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1">{t("mainFeatures.fairAndSecure.title")}</h3>
                    <p className="text-orange-400/80 text-sm font-medium">{t("mainFeatures.fairAndSecure.subtitle")}</p>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed">{t("mainFeatures.fairAndSecure.description")}</p>
              </div>

              {/* 2. PRIVACY FIRST */}
              <div className="group relative bg-black/80 border border-white/10 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 hover:bg-black/90 hover:border-orange-400/50 transition-all duration-300 hover:-translate-y-0.5 h-full flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300 flex items-center justify-center flex-shrink-0">
                    <Lock className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1">{t("additionalFeatures.privacy.title")}</h3>
                    <p className="text-orange-400/80 text-sm font-medium">{t("additionalFeatures.privacy.subtitle")}</p>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed">{t("additionalFeatures.privacy.description")}</p>
              </div>

              {/* 3. POWERFUL & FLEXIBLE */}
              <div className="group relative bg-black/80 border border-white/10 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 hover:bg-black/90 hover:border-orange-400/50 transition-all duration-300 hover:-translate-y-0.5 h-full flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300 flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1">{t("mainFeatures.powerfulAndFlexible.title")}</h3>
                    <p className="text-orange-400/80 text-sm font-medium">{t("mainFeatures.powerfulAndFlexible.subtitle")}</p>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed">{t("mainFeatures.powerfulAndFlexible.description")}</p>
              </div>

              {/* 4. SUSTAINABLE */}
              <div className="group relative bg-black/80 border border-white/10 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 hover:bg-black/90 hover:border-orange-400/50 transition-all duration-300 hover:-translate-y-0.5 h-full flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300 flex items-center justify-center flex-shrink-0">
                    <Database className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1">{t("mainFeatures.sustainable.title")}</h3>
                    <p className="text-orange-400/80 text-sm font-medium">{t("mainFeatures.sustainable.subtitle")}</p>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed">{t("mainFeatures.sustainable.description")}</p>
              </div>

              {/* 5. DEVELOPER FRIENDLY */}
              <div className="group relative bg-black/80 border border-white/10 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 hover:bg-black/90 hover:border-orange-400/50 transition-all duration-300 hover:-translate-y-0.5 h-full flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300 flex items-center justify-center flex-shrink-0">
                    <Cpu className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1">{t("additionalFeatures.developer.title")}</h3>
                    <p className="text-orange-400/80 text-sm font-medium">{t("additionalFeatures.developer.subtitle")}</p>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed">{t("additionalFeatures.developer.description")}</p>
              </div>

              {/* 6. COMMUNITY DRIVEN */}
              <div className="group relative bg-black/80 border border-white/10 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 hover:bg-black/90 hover:border-orange-400/50 transition-all duration-300 hover:-translate-y-0.5 h-full flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300 flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1">{t("additionalFeatures.community.title")}</h3>
                    <p className="text-orange-400/80 text-sm font-medium">{t("additionalFeatures.community.subtitle")}</p>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed">{t("additionalFeatures.community.description")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
