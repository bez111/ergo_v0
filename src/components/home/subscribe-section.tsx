import React from "react"
import Link from "next/link"
import { Shield, Twitter } from "lucide-react"
import { SubscribeForm } from "./subscribe-form"
import { useTranslations } from "next-intl"

interface SubscribeSectionProps {
  segments?: string[]
}

export function SubscribeSection({ segments = [] }: SubscribeSectionProps) {
  const t = useTranslations('subscribeSection')
  
  const socialLinks = [
    {
      name: t('socialLinks.discord'), 
      href: "https://discord.gg/ergo-platform", 
      icon: Shield,
      ariaLabel: "Join our Discord community"
    },
    { 
      name: t('socialLinks.twitter'), 
      href: "https://twitter.com/ergo_platform", 
      icon: Twitter,
      ariaLabel: "Follow us on Twitter"
    },
    { 
      name: t('socialLinks.telegram'), 
      href: "https://t.me/ergoplatform", 
      icon: Shield,
      ariaLabel: "Join our Telegram channel"
    }
  ]

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(255,136,0,0.02)_49%,rgba(255,136,0,0.02)_51%,transparent_52%)] bg-[size:30px_30px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">{t('title')}</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-2">
              {t('subtitle')}
            </p>
          </div>

          {/* Subscription Form with Segments */}
          <div className="mb-8">
            <SubscribeForm segments={segments} />
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {socialLinks.map((link) => {
              const IconComponent = link.icon
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors duration-200 text-gray-300 hover:text-orange-400"
                  aria-label={link.ariaLabel}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="text-sm font-medium">{link.name}</span>
                </Link>
              )
            })}
          </div>

          {/* Privacy Notice */}
          <p className="text-xs text-gray-500 max-w-2xl mx-auto">
            {t('privacyNotice')}
          </p>
        </div>
      </div>
    </section>
  )
}
