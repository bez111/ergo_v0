"use client"

/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link } from "@/i18n/navigation"
import { Card } from "@/components/ui/card"
import { CyberButton } from "@/components/animations/cyber-button"
import { Badge } from "@/components/ui/badge"
import { Link2, Coins, Droplet, DollarSign, Ticket, ArrowRightLeft } from "lucide-react"
import { featuredProjects } from "@/app/[locale]/ecosystem/_data"
import { useTranslations } from "next-intl"

export function PoweredByErgo() {
  const t = useTranslations('poweredByErgoHome')
  // Icon mapping for projects
  const iconMap: Record<string, any> = {
    "Rosen Bridge": Link2,
    "Mew Finance": Coins,
    "DuckPools": Droplet,
    "SigmaUSD": DollarSign,
    "ErgoRaffle": Ticket,
    "ErgoDex": ArrowRightLeft
  }

  // Use actual featured projects from ecosystem
  const apps = featuredProjects.map(project => ({
    name: project.name,
    category: project.category,
    desc: project.description,
    status: project.status,
    url: project.url,
    IconComponent: iconMap[project.name] || Coins
  }))

  return (
    <section className="py-16 md:py-32 relative overflow-hidden" aria-labelledby="powered-by-ergo-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10 md:mb-16">
          <h2
            id="powered-by-ergo-heading"
            className="font-bold tracking-tight mb-6"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 56px)',
              letterSpacing: '-0.02em',
              lineHeight: 1
            }}
          >
            <span className="text-white">{t('titlePrefix')}</span> <span className="text-orange-400">{t('titleHighlight1')}</span><span className="text-white">. {t('titleMiddle')}</span> <span className="text-orange-400">{t('titleHighlight2')}</span><span className="text-white">.</span>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6" role="list" aria-label="Featured Ergo ecosystem projects">
          {apps.map((app, i) => (
            <Link 
              key={i}
              href={app.url}
              target={app.url.startsWith('http') ? '_blank' : '_self'}
              rel={app.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-xl"
            >
              <Card className="bg-black/80 border border-white/10 hover:bg-black/90 hover:border-orange-500/50 rounded-2xl md:rounded-3xl transition-all duration-300 hover:-translate-y-0.5 h-full flex flex-col cursor-pointer">
                <div className="p-4 md:p-6 flex-1 flex flex-col">
                  {/* Header with icon, name, category, status */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300 flex items-center justify-center">
                        <app.IconComponent className="w-6 h-6 text-orange-400 group-hover:text-orange-300 transition-colors" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-white group-hover:text-orange-100 transition-colors">{app.name}</h2>
                        <Badge 
                          variant="secondary" 
                          className="mt-1 bg-neutral-800 text-neutral-300 border-neutral-700 group-hover:bg-neutral-700 group-hover:text-neutral-200 transition-all duration-300"
                        >
                          {app.category}
                        </Badge>
                      </div>
                    </div>
                    <div className={`flex items-center gap-2 ${
                      app.status === 'OPERATIONAL' 
                        ? 'text-green-400' 
                        : 'text-yellow-400'
                    }`}>
                      {app.status === 'OPERATIONAL' ? (
                        <div className="w-2 h-2 bg-green-400 rounded-full group-hover:shadow-sm group-hover:shadow-green-400/50 transition-all duration-300" />
                      ) : (
                        <div className="w-2 h-2 bg-yellow-400 rounded-full group-hover:shadow-sm group-hover:shadow-yellow-400/50 transition-all duration-300" />
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-400 mb-6 flex-1 group-hover:text-neutral-300 transition-colors">{app.desc}</p>

                  {/* Visit Project indicator - appears on hover, aligned right */}
                  <div className="flex items-center justify-end gap-2 text-orange-400 group-hover:text-orange-300 transition-all duration-300 font-semibold mt-auto opacity-100 md:opacity-0 md:group-hover:opacity-100 transform md:translate-y-2 md:group-hover:translate-y-0">
                    <span>{t('visitProject')}</span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* View all button */}
        <div className="mt-12 text-center">
          <CyberButton
            className="gap-2 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-black font-mono uppercase tracking-wider px-6 py-3"
            asChild
          >
            <Link href="/ecosystem" className="inline-flex items-center">
              <span>{t('viewAllCta')}</span>
            </Link>
          </CyberButton>
        </div>

      </div>
    </section>
  )
}
