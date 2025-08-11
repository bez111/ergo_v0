"use client"

import { HexagonalGrid, FloatingParticles, MathematicalPattern, WatermarkHex } from "@/components/ui-kit/signature-effects"

export default function FAQBackground() {
  return (
    <div className="pointer-events-none" aria-hidden>
      <HexagonalGrid className="opacity-[0.02]" />
      <FloatingParticles count={12} className="opacity-70" />
      <MathematicalPattern className="opacity-[0.03]" />
      <WatermarkHex className="opacity-[0.01]" />
    </div>
  )
} 