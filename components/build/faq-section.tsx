"use client"

import { SectionHeading } from "@/components/section-heading"
import { faq } from "@/lib/build-page-data"

export function FaqSection() {
  return (
    <section className="max-w-4xl mx-auto mb-24">
      <SectionHeading text="Frequently Asked Questions" />
      <div className="space-y-4">
        {faq.map((item, idx) => (
          <details
            key={idx}
            className="bg-neutral-900/50 p-4 rounded-lg border border-neutral-700/50 group"
          >
            <summary className="cursor-pointer font-semibold text-white group-open:text-orange-400 transition">
              {item.question}
            </summary>
            <p className="text-gray-300 mt-2 pt-2 border-t border-neutral-700/50">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
} 