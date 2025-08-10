import React from "react"
import Link from "next/link"
import { Shield, Twitter } from "lucide-react"
import { SubscribeForm } from "./subscribe-form"

export function SubscribeSection() {
  const socialLinks = [
    { 
      name: "Discord", 
      href: "https://discord.gg/ergo-platform", 
      icon: Shield,
      ariaLabel: "Join our Discord community"
    },
    { 
      name: "Twitter", 
      href: "https://twitter.com/ergo_platform", 
      icon: Twitter,
      ariaLabel: "Follow us on Twitter"
    },
    { 
      name: "Telegram", 
      href: "https://t.me/ergoplatform", 
      icon: Shield,
      ariaLabel: "Join our Telegram channel"
    },
  ]

  return (
    <section className="py-16 relative overflow-hidden bg-black border-t border-neutral-700">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,136,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,136,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }}></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              <span className="text-orange-400">STAY</span> IN THE LOOP
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Subscribe to our newsletter for the latest updates, technical insights, and community news from the Ergo ecosystem
            </p>
          </div>

          {/* Subscribe Form - Client Component */}
          <SubscribeForm />

          {/* Social Links */}
          <div className="pt-8 border-t border-neutral-700 w-full">
            <p className="text-gray-400 mb-4">Or join our community</p>
            <div className="flex justify-center gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-neutral-900/50 border border-neutral-700 rounded-lg hover:border-orange-500/30 hover:bg-neutral-800/50 transition-all duration-200 group"
                  aria-label={link.ariaLabel}
                >
                  <link.icon className="h-5 w-5 text-gray-400 group-hover:text-orange-400 transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
