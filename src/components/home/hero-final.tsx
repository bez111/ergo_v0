"use client"

/* eslint-disable @typescript-eslint/no-unused-vars, react-hooks/exhaustive-deps, react-hooks/set-state-in-effect */

import { useState, useEffect, useMemo } from "react"
import { Link } from "@/i18n/navigation"
import { Code, Shield, Zap, Layers } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"
import { CyberButton } from "@/components/animations/cyber-button"
import { GlitchText } from "@/components/animations/glitch-text"

export function HeroFinal() {
  const t = useTranslations("hero")
  const locale = useLocale()

  const HERO_MESSAGES = useMemo(() => [
    t("message1"),
    t("message2"),
    t("message3") || "Digital Freedom Platform",
    t("message4") || "Decentralized By Design",
  ], [t])

  const [typedText, setTypedText] = useState("")
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    setTypedText("")
    setIsTyping(true)
    setCurrentTextIndex(0)
  }, [locale])

  useEffect(() => {
    if (!isClient) return

    const currentMessage = HERO_MESSAGES[currentTextIndex]
    if (!currentMessage) return

    let timeout: NodeJS.Timeout

    if (isTyping && typedText.length < currentMessage.length) {
      timeout = setTimeout(() => {
        setTypedText(currentMessage.slice(0, typedText.length + 1))
      }, 100)
    } else if (isTyping && typedText.length === currentMessage.length) {
      timeout = setTimeout(() => {
        setIsTyping(false)
      }, 2000)
    } else if (!isTyping && typedText.length > 0) {
      timeout = setTimeout(() => {
        setTypedText(typedText.slice(0, -1))
      }, 50)
    } else if (!isTyping && typedText.length === 0) {
      timeout = setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % HERO_MESSAGES.length)
        setIsTyping(true)
      }, 100)
    }

    return () => clearTimeout(timeout)
  }, [typedText, isTyping, currentTextIndex, isClient, HERO_MESSAGES])

  useEffect(() => {
    if (!isClient) return

    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [isClient])

  const features = [
    { icon: Shield, label: t("features.securePow") || "Secure PoW" },
    { icon: Zap, label: t("features.smartContracts") || "Smart Contracts" },
    { icon: Code, label: t("features.privacy") || "Privacy" },
    { icon: Layers, label: t("features.eutxoModel") || "eUTXO Model" },
  ]

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{
        paddingTop: "clamp(64px, 12vh, 140px)",
        paddingBottom: "clamp(40px, 8vh, 100px)",
        minHeight: "100svh",
      }}
      role="banner"
      aria-label="Ergo Blockchain - Money Without Masters"
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>

      <div className="container relative z-20 px-4 md:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          <div className="relative" aria-hidden="true">
            <p
              className="mb-4 font-mono font-bold tracking-tight text-white"
              style={{
                fontSize: "clamp(40px, 6vw, 88px)",
                letterSpacing: "-0.02em",
                lineHeight: 0.95,
              }}
            >
              <GlitchText text="ERGO" className="text-primary" />
            </p>
          </div>

          <div className="relative mx-auto max-w-5xl">
            <div className="mb-4 flex items-start justify-center px-2 sm:mb-6 sm:px-0">
              <span
                className="mr-1 hidden flex-shrink-0 font-mono font-extrabold text-orange-500 sm:mr-2 sm:inline"
                style={{
                  fontSize: "clamp(24px, 4.5vw, 56px)",
                  lineHeight: 1.1,
                }}
              >
                &gt;
              </span>
              <h1
                className="text-center font-mono font-extrabold leading-tight text-white"
                style={{
                  fontSize: "clamp(24px, 4.5vw, 56px)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  maxWidth: "100%",
                  wordBreak: "break-word",
                }}
                aria-label={HERO_MESSAGES[currentTextIndex] || HERO_MESSAGES[0]}
              >
                <span className="relative" suppressHydrationWarning aria-hidden="true">
                  {isClient ? typedText : ""}
                  <span
                    className={`text-orange-500 ${isClient && showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}
                    suppressHydrationWarning
                  >
                    _
                  </span>
                </span>
              </h1>
            </div>

            <p
              className="mx-auto mb-8 font-mono text-neutral-300"
              style={{
                fontSize: "clamp(16px, 2vw, 20px)",
                lineHeight: 1.4,
                opacity: 0.8,
                maxWidth: "60ch",
              }}
            >
              {t("subtitle") || "Join a movement for open, programmable, and censorship-resistant finance."}
            </p>
          </div>

          <div className="mx-auto mt-8 flex w-full max-w-lg flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <CyberButton
              className="inline-flex w-full items-center justify-center gap-3 border-2 border-orange-500 bg-orange-500 font-mono uppercase tracking-wider text-black hover:border-orange-600 hover:bg-orange-600 sm:flex-1"
              style={{
                height: "clamp(50px, 8vw, 58px)",
                fontSize: "clamp(15px, 2.5vw, 17px)",
                fontWeight: 600,
                padding: "16px 28px",
                borderRadius: "16px",
              }}
              asChild
            >
              <Link href="/start">
                <span>&gt;</span>
                <span>{t("startHere") || "Start Here"}</span>
                <span className="animate-pulse">_</span>
              </Link>
            </CyberButton>

            <CyberButton
              className="inline-flex w-full items-center justify-center gap-3 border-2 border-primary bg-transparent font-mono uppercase tracking-wider text-primary hover:bg-primary hover:text-black sm:flex-1"
              style={{
                height: "clamp(50px, 8vw, 58px)",
                fontSize: "clamp(15px, 2.5vw, 17px)",
                fontWeight: 600,
                padding: "16px 28px",
                borderRadius: "16px",
              }}
              asChild
            >
              <Link href="/start/introduction">
                {t("exploreErgo") || "Explore Ergo"}
              </Link>
            </CyberButton>
          </div>

          <div
            className="mt-8 grid w-full max-w-5xl grid-cols-2 gap-4 sm:mt-12 sm:gap-6 md:grid-cols-4 md:gap-8"
            role="list"
            aria-label="Key features of Ergo blockchain"
          >
            {features.map((feature) => (
              <div
                key={feature.label}
                className="group flex cursor-pointer flex-col items-center gap-3 text-center"
                role="listitem"
              >
                <div
                  className="flex items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500/20"
                  style={{
                    width: "clamp(40px, 6vw, 48px)",
                    height: "clamp(40px, 6vw, 48px)",
                  }}
                  aria-hidden="true"
                >
                  <feature.icon
                    className="text-orange-500"
                    style={{
                      width: "clamp(20px, 4vw, 26px)",
                      height: "clamp(20px, 4vw, 26px)",
                    }}
                    aria-hidden="true"
                  />
                </div>
                <p
                  className="font-mono font-semibold uppercase text-gray-400 opacity-80 transition-colors group-hover:text-gray-300"
                  style={{
                    fontSize: "clamp(10px, 1.5vw, 12px)",
                    letterSpacing: "0.14em",
                    lineHeight: 1.2,
                  }}
                >
                  {feature.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
