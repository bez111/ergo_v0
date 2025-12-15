"use client"

/* eslint-disable @typescript-eslint/no-unused-vars, react-hooks/exhaustive-deps, react-hooks/set-state-in-effect */

import { useState, useEffect } from "react"
import { Link } from "@/i18n/navigation"
import { Code, Shield, Zap, Layers } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"
import { CyberButton } from "@/components/animations/cyber-button"
import { GlitchText } from "@/components/animations/glitch-text"

export function HeroFinal() {
  const t = useTranslations('hero')
  const locale = useLocale()
  
  // Localized hero messages
  const HERO_MESSAGES = [
    t('message1'),
    t('message2'),
    t('message3') || "Digital Freedom Platform", 
    t('message4') || "Decentralized By Design",
  ]
  const [typedText, setTypedText] = useState("")
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)
  const [isClient, setIsClient] = useState(false)

  // Проверка на клиентскую сторону
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Typing animation
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
      setCurrentTextIndex((prev) => (prev + 1) % HERO_MESSAGES.length)
        setIsTyping(true)
    }
    
    return () => clearTimeout(timeout)
  }, [typedText, isTyping, currentTextIndex, isClient, HERO_MESSAGES])

  // Cursor blinking
  useEffect(() => {
    if (!isClient) return
    
    const interval = setInterval(() => {
      setShowCursor(prev => !prev)
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ 
        paddingTop: 'clamp(80px, 15vh, 140px)', 
        paddingBottom: 'clamp(60px, 12vh, 100px)',
        // Prevent CLS by reserving space
        minHeight: '100svh'
      }}
      role="banner"
      aria-label="Ergo Blockchain - Money Without Masters"
    >
      {/* Semi-transparent overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 z-0"></div>

      <div className="container relative z-20 px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-6xl mx-auto">
          {/* ERGO Title - decorative, not semantic heading */}
          <div className="relative" aria-hidden="true">
            <p 
              className="font-bold tracking-tight text-white font-mono mb-4"
              style={{
                fontSize: 'clamp(40px, 6vw, 88px)',
                letterSpacing: '-0.02em',
                lineHeight: 0.95
              }}
            >
              <GlitchText text="ERGO" className="text-primary" />
            </p>
          </div>

          {/* Dynamic typing text */}
          <div className="relative max-w-5xl mx-auto">
            <div className="flex items-start justify-center mb-6">
              <span 
                className="text-orange-500 font-mono flex-shrink-0 mr-2"
                style={{ 
                  fontSize: 'clamp(32px, 4.5vw, 56px)', 
                  fontWeight: 800,
                  lineHeight: 1
                }}
              >
                &gt;
              </span>
              <h1 
                className="text-white font-mono leading-tight text-center"
                style={{ 
                  fontSize: 'clamp(32px, 4.5vw, 56px)', 
                  fontWeight: 800, 
                  letterSpacing: '-0.02em', 
                  lineHeight: 1,
                  maxWidth: '25ch',
                  whiteSpace: 'nowrap'
                }}
              >
                <span className="relative" suppressHydrationWarning>
                  {isClient ? typedText : HERO_MESSAGES[0]}
                  <span
                    className={`text-orange-500 ${isClient && showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}
                    suppressHydrationWarning
                      >
                        _
                  </span>
                </span>
              </h1>
            </div>
            
            <p 
              className="text-neutral-300 font-mono mx-auto mb-8"
              style={{ 
                fontSize: 'clamp(16px, 2vw, 20px)', 
                lineHeight: 1.4, 
                opacity: 0.8,
                maxWidth: '60ch'
              }}
            >
              {t('subtitle') || "Join a movement for open, programmable, and censorship-resistant finance."}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 w-full max-w-lg mx-auto mt-8">
            <CyberButton
              className="inline-flex items-center justify-center gap-3 bg-orange-500 text-black hover:bg-orange-600 font-mono uppercase tracking-wider border-2 border-orange-500 hover:border-orange-600 w-full sm:flex-1"
              style={{ 
                height: 'clamp(50px, 8vw, 58px)',
                fontSize: 'clamp(15px, 2.5vw, 17px)',
                fontWeight: 600,
                padding: '16px 28px',
                borderRadius: '16px'
              }}
              asChild
            >
              <Link href="/start">
                <span>&gt;</span>
                <span>{t('startHere') || "Start Here"}</span>
                <span className="animate-pulse">_</span>
              </Link>
            </CyberButton>

            <CyberButton
              className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-black font-mono uppercase tracking-wider w-full sm:flex-1"
              style={{ 
                height: 'clamp(50px, 8vw, 58px)',
                fontSize: 'clamp(15px, 2.5vw, 17px)',
                fontWeight: 600,
                padding: '16px 28px',
                borderRadius: '16px'
              }}
              asChild
            >
              <Link href="/start/introduction">
                {t('exploreErgo') || "Explore Ergo"}
              </Link>
            </CyberButton>
          </div>

          {/* Feature icons */}
          <div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 w-full max-w-5xl mt-12"
            role="list"
            aria-label="Key features of Ergo blockchain"
          >
            {features.map((feature, index) => (
              <div 
                key={feature.label} 
                className="flex flex-col items-center gap-3 text-center group cursor-pointer"
                role="listitem"
              >
                <div 
                  className="rounded-full bg-orange-500/10 border border-orange-500/30 group-hover:bg-orange-500/20 transition-all duration-300 group-hover:scale-110 flex items-center justify-center"
                  style={{
                    width: 'clamp(40px, 6vw, 48px)',
                    height: 'clamp(40px, 6vw, 48px)'
                  }}
                  aria-hidden="true"
                >
                  <feature.icon 
                    className="text-orange-500" 
                    style={{
                      width: 'clamp(20px, 4vw, 26px)',
                      height: 'clamp(20px, 4vw, 26px)'
                    }}
                    aria-hidden="true"
                  />
                </div>
                <p 
                  className="text-gray-400 font-mono uppercase group-hover:text-gray-300 transition-colors font-semibold opacity-80"
                  style={{
                    fontSize: 'clamp(10px, 1.5vw, 12px)',
                    letterSpacing: '0.14em',
                    lineHeight: 1.2
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