"use client"

import React from "react"
import { QuickActionCard } from "./quick-action-card"
import { useTranslations } from "next-intl"

export function QuickActions() {
  const t = useTranslations('quickActions')
  
  const actions = [
    {
      title: t('actions.getWallet.title'),
      description: t('actions.getWallet.description'),
      iconName: "Wallet" as const,
      href: "/wallet",
      ariaLabel: "Get started with Ergo wallet setup",
      analytics: "quick-action-wallet"
    },
    {
      title: t('actions.buyErg.title'),
      description: t('actions.buyErg.description'),
      iconName: "CreditCard" as const,
      href: "/use/get-erg",
      ariaLabel: "Learn how to buy Ergo tokens",
      analytics: "quick-action-buy"
    },
    {
      title: t('actions.tryDapp.title'),
      description: t('actions.tryDapp.description'),
      iconName: "Layers" as const,
      href: "/ecosystem",
      ariaLabel: "Explore Ergo decentralized applications",
      analytics: "quick-action-dapp"
    },
    {
      title: t('actions.mineErg.title'),
      description: t('actions.mineErg.description'),
      iconName: "Cpu" as const,
      href: "/miners",
      ariaLabel: "Start mining Ergo and secure the network",
      analytics: "quick-action-mine"
    },
    {
      title: t('actions.joinCommunity.title'),
      description: t('actions.joinCommunity.description'),
      iconName: "Users" as const,
      href: "/start/community",
      ariaLabel: "Join the Ergo community",
      analytics: "quick-action-community"
    },
  ]

  return (
    <section className="py-12 relative overflow-hidden bg-black" aria-label="Quick Actions">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            <span className="text-orange-400">{t('title').split(' ')[0]} {t('title').split(' ')[1]}</span> {t('title').split(' ').slice(2).join(' ')}
          </h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {actions.map((action, index) => (
            <QuickActionCard key={action.analytics} action={action} />
          ))}
        </div>
      </div>
    </section>
  )
}
