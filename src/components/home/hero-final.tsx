"use client"

/* eslint-disable @typescript-eslint/no-unused-vars, react-hooks/exhaustive-deps, react-hooks/set-state-in-effect */

import { useEffect, useState } from "react"
import { Link } from "@/i18n/navigation"
import {
  ArrowRight,
  CheckCircle2,
  LockKeyhole,
  ReceiptText,
  Radio,
} from "lucide-react"
import { useLocale } from "next-intl"
import { GlitchText } from "@/components/animations/glitch-text"

const LATEST_FULL_RECEIPT_ID = "f8752d10a2ece92fbc88065c3b92b94da621ec65943098f43c9e084deb763d81"

export function HeroFinal() {
  const locale = useLocale()
  const ru = locale === "ru"
  const staticHeadline = ru
    ? "Где автономная работа оплачивается, доказывается и закрывается."
    : "Where autonomous work gets paid, proven, and settled."
  const subtitle = ru
    ? "Автономным агентам нужны не только платежи: им нужны программируемый кредит, принятие работы по условиям, проверяемые receipts, политика кошелька и нейтральный расчёт на PoW/eUTXO."
    : "Autonomous agents need more than payments: programmable credit, task-conditioned acceptance, verifiable receipts, wallet policy, and neutral PoW/eUTXO settlement."
  const typedHeadline = useTypewriterLoop(staticHeadline)

  const proofStrip = ru ? [
    {
      icon: Radio,
      label: "Live proof",
      value: "testnet",
      href: "/agent-economy/live",
    },
    {
      icon: ReceiptText,
      label: "Full receipt",
      value: "settled",
      href: `/r/sage/${LATEST_FULL_RECEIPT_ID}`,
    },
    {
      icon: CheckCircle2,
      label: "Gates",
      value: "18 / 19 live",
      href: "/agent-economy/proofs",
    },
    {
      icon: LockKeyhole,
      label: "Mainnet",
      value: "audit-gated",
      href: "/agent-economy/live#mainnet-gate",
    },
  ] : [
    {
      icon: Radio,
      label: "Live proof",
      value: "testnet",
      href: "/agent-economy/live",
    },
    {
      icon: ReceiptText,
      label: "Full receipt",
      value: "settled",
      href: `/r/sage/${LATEST_FULL_RECEIPT_ID}`,
    },
    {
      icon: CheckCircle2,
      label: "Gates",
      value: "18 / 19 live",
      href: "/agent-economy/proofs",
    },
    {
      icon: LockKeyhole,
      label: "Mainnet",
      value: "audit-gated",
      href: "/agent-economy/live#mainnet-gate",
    },
  ]

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{
        paddingTop: "clamp(72px, 11vh, 128px)",
        paddingBottom: "clamp(48px, 8vh, 92px)",
        minHeight: "100svh",
      }}
      role="banner"
      aria-label={staticHeadline}
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>

      <div className="container relative z-20 px-4 md:px-6 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <div className="relative" aria-hidden="true">
            <p
              className="mb-5 font-mono font-bold tracking-tight text-white"
              style={{
                fontSize: "clamp(42px, 6vw, 84px)",
                letterSpacing: "0",
                lineHeight: 0.95,
              }}
            >
              <GlitchText text="ERGO" className="text-primary" />
            </p>
          </div>

          <div className="relative mx-auto max-w-5xl">
            <h1 className="sr-only">{staticHeadline}</h1>
            <div
              aria-hidden="true"
              data-nosnippet
              suppressHydrationWarning
              className="mx-auto text-center font-mono font-extrabold text-white"
              style={{
                fontSize: "clamp(10px, 2.9vw, 42px)",
                letterSpacing: "0",
                lineHeight: 1,
                maxWidth: "min(92vw, 1420px)",
                whiteSpace: "nowrap",
              }}
            >
              <span className="text-orange-500">&gt; </span>
              {typedHeadline}
              <span className="ml-1 text-orange-500 animate-pulse">_</span>
            </div>

            <p
              className="mx-auto mt-6 text-neutral-300"
              style={{
                fontSize: "clamp(15px, 1.45vw, 19px)",
                lineHeight: 1.5,
                opacity: 0.88,
                maxWidth: "64ch",
              }}
            >
              {subtitle}
            </p>
          </div>

          <div className="mx-auto mt-8 flex w-full max-w-3xl flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              href="/agent-economy/live"
              className="inline-flex min-h-[52px] items-center justify-center gap-2 border-2 border-orange-500 bg-orange-500 px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider text-black transition-colors hover:border-orange-400 hover:bg-orange-400 focus-visible:outline-2 focus-visible:outline-orange-300 focus-visible:outline-offset-2"
              style={{ borderRadius: 8 }}
            >
              <Radio className="h-4 w-4" aria-hidden="true" />
              <span>{ru ? "Проверить live proof" : "Inspect live proof"}</span>
            </Link>
            <Link
              href="/agent-economy/launch-kit"
              className="inline-flex min-h-[52px] items-center justify-center gap-2 border-2 border-orange-500/55 bg-black/40 px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider text-orange-300 transition-colors hover:border-orange-400 hover:bg-orange-500/10 hover:text-orange-100 focus-visible:outline-2 focus-visible:outline-orange-300 focus-visible:outline-offset-2"
              style={{ borderRadius: 8 }}
            >
              <ReceiptText className="h-4 w-4" aria-hidden="true" />
              <span>{ru ? "Собрать первый receipt" : "Build first receipt"}</span>
            </Link>
          </div>

          <div
            className="mt-8 grid w-full max-w-4xl grid-cols-2 border-y border-white/10 bg-black/35 text-left backdrop-blur-sm md:grid-cols-4"
            role="list"
            aria-label="Live proof summary"
          >
            {proofStrip.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group flex min-h-[76px] items-center gap-3 border-white/10 px-3 py-3 transition-colors hover:bg-orange-500/10 md:border-r md:last:border-r-0"
                role="listitem"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-orange-500/20 bg-orange-500/10 text-orange-300 group-hover:border-orange-400/55 group-hover:bg-orange-500/20" style={{ borderRadius: 6 }}>
                  <item.icon className="h-4 w-4" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-neutral-500">
                    {item.label}
                  </p>
                  <p className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-white sm:text-sm">
                    {item.value}
                    <ArrowRight className="h-3.5 w-3.5 text-orange-300 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function useTypewriterLoop(text: string) {
  const [displayed, setDisplayed] = useState("")

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduceMotion) {
      setDisplayed(text)
      return
    }

    let timeout: ReturnType<typeof setTimeout>
    let frame = 0
    let direction: "typing" | "holding" | "deleting" | "blank" = "typing"

    const tick = () => {
      if (direction === "typing") {
        frame += 1
        setDisplayed(text.slice(0, frame))
        if (frame >= text.length) {
          direction = "holding"
          timeout = setTimeout(tick, 2800)
          return
        }
        timeout = setTimeout(tick, 82)
        return
      }

      if (direction === "holding") {
        direction = "deleting"
        timeout = setTimeout(tick, 90)
        return
      }

      if (direction === "deleting") {
        frame -= 1
        setDisplayed(text.slice(0, Math.max(frame, 0)))
        if (frame <= 0) {
          direction = "blank"
          timeout = setTimeout(tick, 720)
          return
        }
        timeout = setTimeout(tick, 54)
        return
      }

      direction = "typing"
      timeout = setTimeout(tick, 180)
    }

    setDisplayed("")
    timeout = setTimeout(tick, 240)
    return () => clearTimeout(timeout)
  }, [text])

  return displayed
}
