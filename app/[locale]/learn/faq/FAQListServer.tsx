import React from "react"
import type { FAQItem } from "./faqData"

const slug = (s: string) => s.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "")

export default function FAQListServer({ data, rootId = "faq-root" }: { data: FAQItem[]; rootId?: string }) {
  const byCategory = data.reduce<Record<string, FAQItem[]>>((acc, q) => {
    ;(acc[q.category] ||= []).push(q)
    return acc
  }, {})
  const categories = Object.keys(byCategory)

  return (
    <>
      <nav aria-label="FAQ sections" className="mb-8 text-sm text-neutral-400">
        <ul className="flex flex-wrap gap-3">
          {categories.map((c) => (
            <li key={c}>
              <a className="underline hover:text-white" href={`#sec-${slug(c)}`}>
                {c}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div id={rootId} data-faq-root>
        {categories.map((cat) => (
          <section id={`sec-${slug(cat)}`} key={cat} className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-white">{cat}</h2>
            <div className="space-y-3">
              {byCategory[cat].map((q) => {
                const id = slug(q.question)
                return (
                  <article
                    key={q.id}
                    id={id}
                    data-faq-item
                    data-faq-question={q.question.toLowerCase()}
                    data-faq-answer={q.answer.toLowerCase()}
                    className="border border-neutral-700 rounded-lg bg-neutral-900/50"
                  >
                    <details>
                      <summary className="cursor-pointer p-4 font-semibold hover:bg-neutral-800/40">
                        <h3 className="text-white text-base md:text-lg">{q.question}</h3>
                      </summary>
                      <div className="p-4 pt-0 text-neutral-300 whitespace-pre-line">
                        {q.answer}
                      </div>
                    </details>
                  </article>
                )
              })}
            </div>
          </section>
        ))}
      </div>
    </>
  )
} 