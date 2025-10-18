"use client"

import { useEffect, useRef, useState } from "react"
import { useTranslations } from "next-intl"

export default function FAQClient({ rootId = "faq-root" }: { rootId?: string }) {
  const [query, setQuery] = useState("")
  const rootRef = useRef<HTMLDivElement | null>(null)
  const t = useTranslations("learn.faq")

  useEffect(() => {
    rootRef.current = document.getElementById(rootId) as HTMLDivElement | null
  }, [rootId])

  // Filter SSR items and auto-open matches
  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const items = Array.from(root.querySelectorAll<HTMLElement>("[data-faq-item]"))
    const needle = query.trim().toLowerCase()

    items.forEach((el) => {
      if (!needle) {
        el.classList.remove("hidden")
        const details = el.querySelector("details") as HTMLDetailsElement | null
        if (details) details.open = false
        return
      }
      const hay = `${el.dataset.faqQuestion || ""} ${el.dataset.faqAnswer || ""}`
      const match = hay.includes(needle)
      el.classList.toggle("hidden", !match)
      const details = el.querySelector("details") as HTMLDetailsElement | null
      if (details) details.open = match
    })
  }, [query])

  const onExpandAll = (open: boolean) => {
    const root = rootRef.current
    if (!root) return
    root.querySelectorAll<HTMLDetailsElement>("details").forEach((d) => (d.open = open))
  }

  return (
    <div className="mb-8 flex flex-wrap items-center gap-3">
      <input
        type="search"
        placeholder={t('searchPlaceholder')}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full md:w-96 bg-neutral-900/60 border border-neutral-700 rounded-lg px-3 py-2 text-white placeholder:text-neutral-500"
        aria-label="Search FAQ"
      />
      <button
        onClick={() => onExpandAll(true)}
        className="px-3 py-2 rounded-md border border-neutral-700 hover:bg-neutral-800"
      >
        {t('expandAll')}
      </button>
      <button
        onClick={() => onExpandAll(false)}
        className="px-3 py-2 rounded-md border border-neutral-700 hover:bg-neutral-800"
      >
        {t('collapseAll')}
      </button>
      {query && (
        <button
          onClick={() => setQuery("")}
          className="px-3 py-2 rounded-md border border-neutral-700 hover:bg-neutral-800"
        >
          {t('clear')}
        </button>
      )}
    </div>
  )
} 