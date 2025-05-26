"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { SectionHeading } from "@/components/section-heading"

export function Manifesto() {
  const [visible, setVisible] = useState(false)
  const [glitchText, setGlitchText] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true)
    }, 500)

    // Random glitch effect on text
    const glitchInterval = setInterval(
      () => {
        setGlitchText(true)
        setTimeout(() => setGlitchText(false), 200)
      },
      Math.random() * 5000 + 3000,
    )

    return () => {
      clearTimeout(timer)
      clearInterval(glitchInterval)
    }
  }, [])

  return (
    <section className="py-16 relative overflow-hidden bg-black border-t border-b border-primary/30">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/distressed-texture.png')] opacity-10 bg-cover bg-center"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className={cn("transition-opacity duration-1000", visible ? "opacity-100" : "opacity-0")}>
            <SectionHeading text="MANIFESTO" />

            <div className="space-y-6 font-mono text-gray-300 border-l-2 border-primary/50 pl-6">
              <p className={cn("transition-all", glitchText && "text-primary")}>
                In a world of increasing surveillance and control, we stand for financial freedom and privacy.
              </p>

              <p>
                Ergo is built on the core principles that drove the original crypto revolution:{" "}
                <span className="text-primary">open, permissionless, secure</span> systems that empower regular people.
              </p>

              <p>
                We reject the centralization of power. We reject the surveillance state. We reject the corporate capture
                of our financial systems.
              </p>

              <p>
                Ergo provides the tools for people to secure their financial interactions through{" "}
                <span className="text-primary">contractual money</span> - programmable, private, and unstoppable.
              </p>

              <p className="text-lg font-bold text-primary">This is not just technology. This is resistance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
