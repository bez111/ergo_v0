"use client"

import React from "react"
import { Shield, Zap, Database, Lock, Users, Cpu } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { Evidence } from "@/components/seo/Evidence"

export function WhyErgo() {
  const locale = useLocale()
  const t = useTranslations('whyErgo')
  const tc = useTranslations('common')
  const ru = locale === "ru"
  const evidenceLabel = tc('evidence')
  const caveatLabel = tc('caveat')

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
              <span className="text-white">{t("titleStart")}</span> <span className="text-orange-400">{t("titleHighlight")}</span><span className="text-white">{t("titleEnd")}</span>
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

          <div className="mb-8 w-full max-w-6xl border border-white/10 bg-black/70 p-4 shadow-[0_18px_80px_rgba(0,0,0,0.32)] backdrop-blur-sm sm:p-5 md:mb-10" style={{ borderRadius: 8 }}>
            <div className="grid gap-4 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:items-center">
              <p className="text-sm leading-relaxed text-neutral-300 sm:text-base">
                {ru
                  ? "Это не смена темы. Те же свойства, которые сделали Ergo PoW/eUTXO сетью для DeFi, приватности и sound money, становятся базой для автономной работы: предсказуемые расходы, условия в скрипте, нативные токены и нейтральный расчёт."
                  : "This is the same thesis extended. The properties that make Ergo a PoW/eUTXO chain for DeFi, privacy, and sound money also make it a credible base for autonomous work: predictable costs, script-level conditions, native tokens, and neutral settlement."}
              </p>
              <div className="grid grid-cols-3 gap-px overflow-hidden border border-white/10 bg-white/10" style={{ borderRadius: 6 }}>
                {[
                  ru ? "DeFi" : "DeFi",
                  ru ? "Privacy" : "Privacy",
                  ru ? "Sound money" : "Sound money",
                ].map((label) => (
                  <div key={label} className="bg-neutral-950/95 px-3 py-3 text-center font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-orange-300 sm:text-xs">
                    {label}
                  </div>
                ))}
              </div>
            </div>
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
                <Evidence
                  evidenceLabel={evidenceLabel}
                  caveatLabel={caveatLabel}
                  claim="Deterministic eUTXO costs"
                  sources={[
                    { label: "eUTXO docs", href: "/technology/eutxo-model" },
                    { label: "Ergo whitepaper", href: "https://docs.ergoplatform.com/whitepaper.pdf" },
                  ]}
                />
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
                <Evidence
                  evidenceLabel={evidenceLabel}
                  caveatLabel={caveatLabel}
                  claim="Programmable credit primitives"
                  sources={[
                    { label: "Architecture", href: "/build/agent-payments" },
                    { label: "Accord Protocol repo", href: "https://github.com/accord-protocol/accord-protocol" },
                  ]}
                  caveat="Reference implementations (ChainCash, Accord SDKs) are open-source prototypes — not yet audited."
                />
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
                <Evidence
                  evidenceLabel={evidenceLabel}
                  caveatLabel={caveatLabel}
                  claim="Babel Fees — supported token fee paths"
                  sources={[
                    { label: "Babel Fees doc", href: "/technology/babel-fees" },
                    { label: "Pattern reference", href: "/patterns/ergo-babel-fees-box-pattern" },
                  ]}
                />
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
                <Evidence
                  evidenceLabel={evidenceLabel}
                  caveatLabel={caveatLabel}
                  claim="No governance kill switch on Ergo PoW"
                  sources={[
                    { label: "Ergo node source", href: "https://github.com/ergoplatform/ergo" },
                    { label: "Audit & disclosures", href: "/legal/security" },
                  ]}
                  caveat="Third-party dApps, bridges and wallets may have their own controls — verify per-project."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
