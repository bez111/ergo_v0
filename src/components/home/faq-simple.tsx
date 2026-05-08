"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Link } from "@/i18n/navigation"
import { useTranslations } from "next-intl"

export function FAQSimple() {
  const t = useTranslations('faqSimpleHome')
  // locale available via useLocale() when needed for language-specific features
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      q: t('items.0.q'),
      a: t('items.0.a'),
      link: "/docs/why-ergo"
    },
    {
      q: t('items.1.q'),
      a: t('items.1.a'),
      link: "/start"
    },
    {
      q: t('items.2.q'),
      a: t('items.2.a'),
      link: "/docs/introduction/faq"
    },
    {
      q: t('items.3.q'),
      a: t('items.3.a'),
      link: "/technology/eutxo-model"
    },
    {
      q: t('items.4.q'),
      a: t('items.4.a'),
      link: "/technology/secure-pow"
    },
    {
      q: t('items.5.q'),
      a: t('items.5.a'),
      link: "/docs/introduction/faq"
    }
  ]

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 
            className="font-bold tracking-tight mb-6"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 56px)',
              letterSpacing: '-0.02em',
              lineHeight: 1
            }}
          >
            <span className="text-orange-400">{t('titleHighlight')}</span> <span className="text-white">{t('titleSuffix')}</span>
          </h2>
          <p className="text-gray-400 text-lg">
            {t('subtitle')}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <Card 
              key={i}
              className="bg-black border-neutral-800 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-neutral-900/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.q}
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-neutral-500 flex-shrink-0 transition-transform ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === i && (
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {faq.a}
                  </p>
                  {faq.link && (
                    <div className="flex justify-end">
                      <Link
                        href={faq.link}
                        className="text-orange-400 hover:text-orange-300 transition-colors font-medium text-sm"
                      >
                        {t('learnMore') || 'Learn more'}
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}
