"use client"

import Link from "next/link"
import { Wallet, Layers, Users, CreditCard, Cpu } from "lucide-react"

export function QuickActions() {
  const actions = [
    {
      title: "GET WALLET",
      description: "Set up your Ergo wallet",
      icon: Wallet,
      href: "/wallet",
    },
    {
      title: "BUY ERG",
      description: "Purchase Ergo tokens",
      icon: CreditCard,
      href: "/use/get-erg",
    },
    {
      title: "TRY A DAPP",
      description: "Explore decentralized apps",
      icon: Layers,
      href: "/ecosystem",
    },
    {
      title: "MINE ERG",
      description: "Secure the network",
      icon: Cpu,
      href: "/use/mining",
    },
    {
      title: "JOIN COMMUNITY",
      description: "Connect with Ergo users",
      icon: Users,
      href: "/start/community",
    },
  ]

  return (
    <section className="py-12 relative overflow-hidden bg-black">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {actions.map((action, index) => (
            <Link
              key={index}
              href={action.href}
              className="group flex flex-col items-center text-center gap-3 p-4 rounded-lg border border-primary/30 bg-black hover:border-primary hover:bg-primary/5 transition-colors duration-300"
            >
              <div className="rounded-full bg-primary/10 p-3 border border-primary/30">
                <action.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-mono font-bold tracking-wider text-sm">{action.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{action.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
