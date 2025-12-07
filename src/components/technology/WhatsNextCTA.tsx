"use client"

/**
 * WhatsNextCTA Component
 * 
 * Simplified CTA section for technology pages.
 * Shows only email capture - Docs/GitHub/Discord are in site navigation.
 */

import { FinalCTASimple } from "@/components/home/final-cta-simple"

interface WhatsNextCTAProps {
  /** Current technology page slug */
  currentSlug?: string
}

export function WhatsNextCTA({ currentSlug }: WhatsNextCTAProps) {
  return (
    <FinalCTASimple
      title="Stay Updated on Ergo Technology"
      description="Get the latest technical updates, protocol improvements, and ecosystem news delivered to your inbox."
    />
  )
}

