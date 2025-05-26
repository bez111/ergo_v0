"use client"

import { useState } from "react"
import Link from "next/link"
import { Wallet, Layers, Users, CreditCard, Cpu } from "lucide-react"
import { cn } from "@/lib/utils"

export function QuickActions() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const actions = [
    {
      title: "GET WALLET",
      description: "Set up your Ergo wallet",
      icon: Wallet,
      href: "/wallet",
    },
    {
      title: "TRY A DAPP",
      description: "Explore decentralized apps",
      icon: Layers,
      href: "/use/dapps",
    },
    {
      title: "JOIN COMMUNITY",
      description: "Connect with Ergo users",
      icon: Users,
      href: "/community",
    },
    {
      title: "BUY ERG",
      description: "Purchase Ergo tokens",
      icon: CreditCard,
      href: "/use/buy",
    },
    {
      title: "MINE ERG",
      description: "Secure the network",
      icon: Cpu,
      href: "/use/mining",
    },
  ]

  return (
    <section className="py-12 relative overflow-hidden bg-black">
      {/* Scanline effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.2)_50%,transparent_100%)] bg-size-[100%_4px] animate-scanline pointer-events-none"></div>

      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {actions.map((action, index) => (
            <Link
              key={index}
              href={action.href}
              className="group relative flex flex-col items-center text-center gap-3 p-4 rounded-lg border border-primary/30 bg-black hover:border-primary hover:bg-primary/5 transition-all duration-300"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={cn(
                  "rounded-full bg-primary/10 p-3 border border-primary/30 transition-all duration-300",
                  hoveredIndex === index ? "bg-primary/20 scale-110" : "",
                )}
              >
                <action.icon
                  className={cn(
                    "h-6 w-6 text-primary transition-all duration-300",
                    hoveredIndex === index ? "scale-110" : "",
                  )}
                />
              </div>
              <div>
                <h3 className="font-mono font-bold tracking-wider text-sm">{action.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{action.description}</p>
              </div>

              {/* Hover effect */}
              {hoveredIndex === index && (
                <div className="absolute inset-0 border border-primary/50 rounded-lg pointer-events-none">
                  <div className="absolute top-0 left-0 w-1 h-1 bg-primary"></div>
                  <div className="absolute top-0 right-0 w-1 h-1 bg-primary"></div>
                  <div className="absolute bottom-0 left-0 w-1 h-1 bg-primary"></div>
                  <div className="absolute bottom-0 right-0 w-1 h-1 bg-primary"></div>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
