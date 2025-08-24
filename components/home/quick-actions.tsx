"use client"

import React from "react"
import { QuickActionCard } from "./quick-action-card"

export function QuickActions() {
  const actions = [
    {
      title: "GET WALLET",
      description: "Set up your Ergo wallet",
      iconName: "Wallet" as const,
      href: "/wallet",
      ariaLabel: "Get started with Ergo wallet setup",
      analytics: "quick-action-wallet"
    },
    {
      title: "BUY ERG",
      description: "Purchase Ergo tokens",
      iconName: "CreditCard" as const,
      href: "/use/get-erg",
      ariaLabel: "Learn how to buy Ergo tokens",
      analytics: "quick-action-buy"
    },
    {
      title: "TRY A DAPP",
      description: "Explore decentralized apps",
      iconName: "Layers" as const,
      href: "/ecosystem",
      ariaLabel: "Explore Ergo decentralized applications",
      analytics: "quick-action-dapp"
    },
    {
      title: "MINE ERG",
      description: "Secure the network",
      iconName: "Cpu" as const,
      href: "/use/mining",
      ariaLabel: "Start mining Ergo and secure the network",
      analytics: "quick-action-mine"
    },
    {
      title: "JOIN COMMUNITY",
      description: "Connect with Ergo users",
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
            <span className="text-orange-400">GET STARTED</span> WITH ERGO
          </h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Choose your path to explore the Ergo ecosystem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {actions.map((action, index) => (
            <QuickActionCard key={index} action={action} />
          ))}
        </div>
      </div>
    </section>
  )
}
