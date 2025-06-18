"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DiscIcon, Send, Shield, Twitter } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

export function SubscribeSection() {
  const [email, setEmail] = useState("")
  const [glitchActive, setGlitchActive] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle subscription logic here
    console.log("Subscribing email:", email)
    // Reset form
    setEmail("")
    // Show success message or toast
  }

  useEffect(() => {
    // Random glitch effect
    const glitchInterval = setInterval(
      () => {
        setGlitchActive(true)
        setTimeout(() => setGlitchActive(false), 200)
      },
      Math.random() * 5000 + 3000,
    )

    return () => clearInterval(glitchInterval)
  }, [])

  return (
    <section className="py-16 relative overflow-hidden bg-black border-t border-primary/30">
      {/* Animated grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,136,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,136,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      {/* Glowing elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] animate-pulse"></div>
      <div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-8">
          <SectionHeading text="JOIN THE RESISTANCE" />

          <p className="text-gray-400 md:text-lg mt-2 font-mono">
            <span className="text-primary">&gt;</span> Stay updated with the latest from the Ergo ecosystem
          </p>

          <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-2 relative">
            <Input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow bg-black border-2 border-primary/50 text-white font-mono placeholder:text-gray-500 focus:border-primary"
            />
            <Button
              type="submit"
              className="gap-2 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-black font-mono uppercase tracking-wider"
            >
              SUBSCRIBE
              <Send className="h-4 w-4" />
            </Button>

            {/* Scanline effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.2)_50%,transparent_100%)] bg-size-[100%_4px] animate-scanline pointer-events-none"></div>
          </form>

          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-4">
              <Button
                asChild
                variant="outline"
                size="icon"
                className="bg-transparent border border-primary/50 text-primary hover:bg-primary/10 hover:text-primary"
              >
                <Link href="https://discord.gg/ergo" target="_blank" rel="noopener noreferrer">
                  <DiscIcon className="h-5 w-5" />
                  <span className="sr-only">Discord</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="icon"
                className="bg-transparent border border-primary/50 text-primary hover:bg-primary/10 hover:text-primary"
              >
                <Link href="https://t.me/ergoplatform" target="_blank" rel="noopener noreferrer">
                  <Send className="h-5 w-5" />
                  <span className="sr-only">Telegram</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="icon"
                className="bg-transparent border border-primary/50 text-primary hover:bg-primary/10 hover:text-primary"
              >
                <Link href="https://twitter.com/ergoplatform" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 font-mono">
              <Shield className="h-4 w-4 text-primary" />
              <span>YOUR DATA IS PRIVATE AND WILL NEVER BE SHARED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
