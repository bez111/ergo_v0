"use client"

import { Link } from "@/i18n/navigation"
import { Wallet, Pickaxe, Code, TrendingUp, Bot } from "lucide-react"
import { CyberButton } from "@/components/animations/cyber-button"
import { Card } from "@/components/ui/card"
import { useTranslations } from "next-intl"

export function MadeForMassAdoption() {
  const t = useTranslations('madeForMassAdoption')
  
  const paths = [
    {
      icon: Wallet,
      title: t('paths.freedomSeekers.title'),
      desc: t('paths.freedomSeekers.description'),
      cta: t('paths.freedomSeekers.cta'),
      href: "/hodlers"
    },
    {
      icon: Code,
      title: t('paths.cypherpunks.title'),
      desc: t('paths.cypherpunks.description'),
      cta: t('paths.cypherpunks.cta'),
      href: "/developers"
    },
    {
      icon: Pickaxe,
      title: t('paths.miners.title'),
      desc: t('paths.miners.description'),
      cta: t('paths.miners.cta'),
      href: "/miners"
    },
    {
      icon: Bot,
      title: t('paths.agentBuilders.title'),
      desc: t('paths.agentBuilders.description'),
      cta: t('paths.agentBuilders.cta'),
      href: "/agent-economy"
    },
    {
      icon: TrendingUp,
      title: t('paths.community.title'),
      desc: t('paths.community.description'),
      cta: t('paths.community.cta'),
      href: "/start/community"
    }
  ]

  return (
    <section id="cypherpunks-freedom" className="py-16 md:py-24 bg-neutral-950/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10 md:mb-16">
          <h2 
            className="font-bold tracking-tight mb-6"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 56px)',
              letterSpacing: '-0.02em',
              lineHeight: 1
            }}
          >
            <span className="text-orange-400">{t('titlePrefix')}</span> <span className="text-white">{t('titleMiddle')}</span> <span className="text-orange-400">{t('titleSuffix')}</span><span className="text-white">.</span>
          </h2>
          <p 
            className="text-gray-400 mx-auto"
            style={{
              fontSize: 'clamp(16px, 2vw, 20px)',
              lineHeight: 1.4,
              maxWidth: '60ch',
              opacity: 0.85
            }}
          >
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {paths.map((path, i) => (
            <Link 
              key={i}
              href={path.href}
              className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-2xl md:rounded-2xl min-h-[44px]"
            >
              <Card className="bg-black/80 border border-white/10 hover:bg-black/90 hover:border-orange-500/50 rounded-2xl md:rounded-3xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer">
                <div className="p-4 md:p-5">
                  {/* Icon and Title in same line */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300 flex-shrink-0">
                        <path.icon className="w-6 h-6 text-orange-400 group-hover:text-orange-300 transition-colors" />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-orange-100 transition-colors leading-tight">
                        {path.title}
                      </h3>
                    </div>
                    {/* Small arrow - always visible on mobile, hover on desktop */}
                    <svg
                      className="ml-auto w-4 h-4 text-orange-400 md:opacity-0 md:translate-x-1 md:group-hover:opacity-100 md:group-hover:translate-x-0 transition-all duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors text-sm">
                    {path.desc}
                  </p>
                  
                  {/* Arrow now in header; no extra bottom element */}
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Start Here Button */}
        <div className="mt-12 text-center">
          <CyberButton
            className="gap-2 bg-orange-500 text-black hover:bg-transparent hover:text-orange-500 hover:border-orange-500 font-mono uppercase tracking-wider px-8 py-4 border-2 border-orange-500"
            asChild
          >
            <Link href="/start" className="inline-flex items-center">
              <span>{t('startHereCta')}</span>
            </Link>
          </CyberButton>
        </div>

      </div>
    </section>
  )
}
