"use client"

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars, react-hooks/set-state-in-effect */

import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Smartphone,
  HardDrive,
  Monitor,
  Chrome,
  Apple,
  Zap,
  Lock,
  Check,
  Wallet,
  ShieldCheck} from "lucide-react"
import { LucideIcon } from "lucide-react"
import { EnhancedButton } from "@/components/ui/enhanced-button"
import { FinalCTASimple } from "@/components/home/final-cta-simple"


// Wallet data sourced from src/data/wallets.ts (single registry).
// Icon names mapped to lucide components here so the registry stays pure data.
import { wallets as walletRegistry, type WalletEntry, type WalletIconName } from "@/data/wallets"

const ICON_BY_NAME: Record<WalletIconName, LucideIcon> = {
  Chrome,
  Monitor,
  Smartphone,
  Apple,
  Zap,
  HardDrive,
  Lock,
}

type Wallet = WalletEntry & { icon: LucideIcon }

const allWallets: Wallet[] = walletRegistry.map((w) => ({
  ...w,
  icon: ICON_BY_NAME[w.iconName],
}))



export default function WalletClient() {
  const t = useTranslations("walletClient")
  const tw = useTranslations("walletClient.wallets")

  const getSecurityColor = (level: string) => {
    switch (level) {
      case "Maximum": return "text-green-400 border-green-400/30 bg-green-400/10"
      case "Very High": return "text-blue-400 border-blue-400/30 bg-blue-400/10"
      case "High": return "text-orange-400 border-orange-400/30 bg-orange-400/10"
      default: return "text-gray-400 border-gray-400/30 bg-gray-400/10"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Cold": return "text-cyan-400 border-cyan-400/30 bg-cyan-400/10"
      case "Hot": return "text-orange-400 border-orange-400/30 bg-orange-400/10"
      case "Hybrid": return "text-purple-400 border-purple-400/30 bg-purple-400/10"
      default: return "text-gray-400 border-gray-400/30 bg-gray-400/10"
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="pt-28 pb-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                {t("hero.title")} <span className="text-orange-400">{t("hero.titleHighlight")}</span>
              </h1>
              <p className="text-lg md:text-xl text-neutral-300 mb-6 max-w-2xl">
                {t("hero.subtitle")}
              </p>
              <p className="text-base text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                {t("hero.description")}
              </p>
            </div>
            <div className="relative z-10">
              <div className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-center text-white">
                  {t("quickStart.title")}
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  <a
                    href="https://chromewebstore.google.com/detail/nautilus-wallet/gjlmehlldlphhljhpnlddaodbjjcchai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-11 h-11 flex items-center justify-center rounded-md bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0">
                        <Chrome className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-lg">{t("quickStart.nautilus.name")}</h4>
                        <p className="text-gray-400 text-sm">{t("quickStart.nautilus.subtitle")}</p>
                      </div>
                    </div>
                  </a>
                  
                  <a
                    href="https://github.com/Satergo/Satergo/releases"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-11 h-11 flex items-center justify-center rounded-md bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0">
                        <Monitor className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-lg">{t("quickStart.satergo.name")}</h4>
                        <p className="text-gray-400 text-sm">{t("quickStart.satergo.subtitle")}</p>
                      </div>
                    </div>
                  </a>
                  
                  <a
                    href="https://www.ledger.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-11 h-11 flex items-center justify-center rounded-md bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0">
                        <HardDrive className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-lg">{t("quickStart.ledger.name")}</h4>
                        <p className="text-gray-400 text-sm">{t("quickStart.ledger.subtitle")}</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Notice */}
      <section className="pt-8 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="group relative bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/50 transition-all duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300 flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-orange-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-1">{t("security.title")}</h3>
                <p className="text-orange-400/80 text-sm font-medium">{t("security.subtitle")}</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              {t("security.description")}
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400 leading-relaxed">{t("security.tips.verifyChecksums")}</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400 leading-relaxed">{t("security.tips.officialSources")}</span>
              </li>
              <li className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400 leading-relaxed">{t("security.tips.backupSeedPhrase")}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Wallets Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-6 mb-12">
            <div className="w-12 h-12 rounded-lg bg-orange-500 flex items-center justify-center text-xl font-bold text-black">
              <Wallet className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {t("allWallets.title")}
              </h2>
              <p className="text-lg text-gray-400">
                {allWallets.length} {t("allWallets.subtitle")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wallets Grid */}
      <div className="max-w-6xl mx-auto pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {allWallets.map((wallet, index) => {
              const IconComponent = wallet.icon
              return (
                <div
                  key={wallet.id}
                  className={`group relative bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/50 transition-all duration-300 hover:-translate-y-0.5 flex flex-col w-full max-w-md ${
                    wallet.isRecommended ? 'ring-2 ring-orange-500/20' : ''
                  }`}
                >
                  {wallet.isRecommended && (
                    <div className="absolute -top-3 left-6 bg-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                      {t("labels.recommended")}
                    </div>
                  )}

                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-xl mb-1">{tw(`${wallet.id}.name`)}</h3>
                      <p className="text-orange-400/80 text-sm font-medium">{wallet.category} · {wallet.platforms.join(", ")}</p>
                    </div>
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-4 flex-grow min-h-[60px]">{tw(`${wallet.id}.description`)}</p>

                  <div className="flex items-center gap-2 mb-3 min-h-[28px] flex-wrap">
                    <Badge className={`text-xs border ${getSecurityColor(wallet.securityLevel)}`}>
                      {wallet.securityLevel}
                    </Badge>
                    <Badge className={`text-xs border ${getTypeColor(wallet.type)}`}>
                      {wallet.type}
                    </Badge>
                    <Badge className="text-xs border border-white/10 bg-white/5 text-neutral-400 font-mono font-normal">
                      {t("labels.verified")} {wallet.lastVerified}
                    </Badge>
                  </div>

                  {wallet.warning && (
                    <p className="text-[11px] text-yellow-300/80 mb-3 leading-snug">
                      <span className="text-yellow-400">⚠</span> {wallet.warning}
                    </p>
                  )}
                  
                  <div className="mt-auto">
                    <EnhancedButton
                      href={wallet.downloadUrl || wallet.websiteUrl}
                      external={true}
                      variant="primary"
                      size="lg"
                      className="w-full"
                      icon={<IconComponent className="h-5 w-5" />}
                      ariaLabel={`${t("labels.download")} ${wallet.name}`}
                    >
                      {wallet.downloadUrl ? `${t("labels.download")} ${wallet.name.split(" ")[0]}` : `${t("labels.visit")} ${wallet.name.split(" ")[0]}`}
                    </EnhancedButton>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      {/* Next Steps Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t("whatsNext.title")} <span className="text-orange-400">{t("whatsNext.titleHighlight")}</span>?
          </h2>
          <p className="text-lg text-gray-400 mb-12">
            {t("whatsNext.subtitle")}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link 
              href="/use/get-erg"
              className="group relative bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/50 transition-all duration-300 hover:-translate-y-0.5 text-left"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-1">{t("whatsNext.getErg.title")}</h3>
                  <p className="text-orange-400/80 text-sm font-medium">{t("whatsNext.getErg.subtitle")}</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">{t("whatsNext.getErg.description")}</p>
            </Link>
            
            <Link
              href="/docs"
              className="group relative bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/50 transition-all duration-300 hover:-translate-y-0.5 text-left"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-1">{t("whatsNext.learnMore.title")}</h3>
                  <p className="text-orange-400/80 text-sm font-medium">{t("whatsNext.learnMore.subtitle")}</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">{t("whatsNext.learnMore.description")}</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Email Capture Form */}
      <FinalCTASimple
        title={t("emailCapture.title")}
        description={t("emailCapture.description")}
      />

    </div>
  )
}