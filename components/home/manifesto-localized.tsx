import React from "react"
import { useTranslations, useLocale } from "next-intl"

export function Manifesto() {
  const t = useTranslations('manifesto')
  const locale = useLocale()

  return (
    <section className="py-16 relative overflow-hidden bg-black border-t border-b border-neutral-700">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white">
              MANIFESTO
            </h2>
          </div>
          
          <div className="space-y-6 font-mono text-gray-300 border-l-2 border-neutral-600 pl-6">
            <p className="leading-relaxed">
              In a world of increasing surveillance and control, we stand for financial freedom and privacy.
            </p>
            <p className="leading-relaxed">
              Ergo is built on the core principles that drove the original crypto revolution: open, permissionless, secure systems that empower regular people.
            </p>
            <p className="leading-relaxed">
              We reject the centralization of power. We reject the surveillance state. We reject the corporate capture of our financial systems.
            </p>
            <p className="leading-relaxed">
              Ergo provides the tools for people to secure their financial interactions through contractual money - programmable, private, and unstoppable.
            </p>
            <p className="text-lg font-bold text-orange-500 mt-8">
              This is not just technology. This is resistance.
            </p>
          </div>
        </div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
    </section>
  )
}
