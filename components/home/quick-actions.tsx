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
    },
    {
      title: "BUY ERG",
      description: "Purchase Ergo tokens",
      iconName: "CreditCard" as const,
      href: "/use/get-erg",
      ariaLabel: "Learn how to buy Ergo tokens",
    },
    {
      title: "TRY A DAPP",
      description: "Explore decentralized apps",
      iconName: "Layers" as const,
      href: "/ecosystem",
      ariaLabel: "Explore Ergo decentralized applications",
    },
    {
      title: "MINE ERG",
      description: "Secure the network",
      iconName: "Cpu" as const,
      href: "/use/mining",
      ariaLabel: "Start mining Ergo and secure the network",
    },
    {
      title: "JOIN COMMUNITY",
      description: "Connect with Ergo users",
      iconName: "Users" as const,
      href: "/start/community",
      ariaLabel: "Join the Ergo community",
    },
  ]

  return (
    <section className="py-12 relative overflow-hidden bg-black" aria-label="Quick Actions">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {actions.map((action, index) => (
            <QuickActionCard key={index} action={action} />
          ))}
        </div>
      </div>
    </section>
  )
}
