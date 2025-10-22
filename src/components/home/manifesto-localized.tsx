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
              {t('title')}
            </h2>
          </div>
          
          <div className="space-y-6 font-mono text-gray-300 border-l-2 border-neutral-600 pl-6">
            <p className="leading-relaxed">
              {t('content.paragraph1')}
            </p>
            <p className="leading-relaxed">
              {t('content.paragraph2')}
            </p>
            <p className="leading-relaxed">
              {t('content.paragraph3')}
            </p>
            <p className="leading-relaxed">
              {t('content.paragraph4')}
            </p>
            <p className="text-lg font-bold text-orange-500 mt-8">
              {t('content.conclusion')}
            </p>
          </div>
        </div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
    </section>
  )
}
