"use client"

import Link from "next/link"
import { Code2, Twitter } from "lucide-react"
import { Card } from "@/components/ui/card"
import { CyberButton } from "@/components/animations/cyber-button"
import { siteConfig } from "@/config/site-config"
import { FaDiscord, FaTelegram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";

export function JoinCommunity() {
  const channels = [
    {
      icon: FaDiscord,
      title: "Discord",
      desc: "Join our community",
      members: "Active daily",
      href: `${siteConfig.discordLink}`
    },
    {
      icon: Code2,
      title: "GitHub",
      desc: "Contribute to the code",
      members: "Open source",
      href: "https://github.com/ergoplatform"
    },
    {
      icon: FaTelegram,
      title: "Telegram",
      desc: "Chat with the community",
      members: "Global reach",
      href: `${siteConfig.telegramLink}`
    },
    {
      icon: FaXTwitter,
      title: "Twitter/X",
      desc: "Follow latest updates",
      members: "Daily updates",
      href: `${siteConfig.twitterLink}`
    }
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 
            className="font-bold tracking-tight mb-6 flex items-center justify-center gap-4"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 56px)',
              letterSpacing: '-0.02em',
              lineHeight: 1
            }}
          >
            <span className="text-white">Join a community of</span> <span className="text-orange-400">cypherpunks</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Active community building the future of money
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {channels.map((channel, i) => (
            <Link 
              key={i}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-2xl"
            >
              <Card className="bg-black/80 border border-white/10 hover:bg-black/90 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-0.5 p-8 rounded-3xl cursor-pointer h-full">
                <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300 flex-shrink-0">
                    <channel.icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors pt-3">
                    {channel.title}
                  </h3>
                </div>
                
                <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">{channel.desc}</p>
                
                <p className="text-sm text-neutral-500 font-mono group-hover:text-neutral-400 transition-colors">{channel.members}</p>
              </Card>
            </Link>
          ))}
        </div>

        {/* Join community button */}
        <div className="text-center">
          <CyberButton
            className="gap-2 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-black font-mono uppercase tracking-wider px-8 py-3"
            asChild
          >
            <Link href="/start/community" className="inline-flex items-center">
              <span>Join community</span>
            </Link>
          </CyberButton>
        </div>


      </div>
    </section>
  )
}
