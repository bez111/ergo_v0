"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Code, Shield, Zap, Layers } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"

export function HeroSectionLocalized() {
  const [typedText, setTypedText] = useState("")
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)
  const [isClient, setIsClient] = useState(false)
  
  const t = useTranslations('hero')
  const locale = useLocale()

  // Локализованные сообщения
  const HERO_MESSAGES = [
    t('message1') || "Decentralized Money for a Free Society",
    t('message2') || "The globally-neutral settlement layer for programmable money.",
    t('message3') || "The open-source home of digital freedom",
    t('message4') || "Join the movement for decentralized, open-source money",
  ]

  // Проверка на клиентскую сторону
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Typing animation
  useEffect(() => {
    if (!isClient) return

    const currentMessage = HERO_MESSAGES[currentTextIndex]
    if (!currentMessage) return
    
    if (isTyping) {
      if (typedText.length < currentMessage.length) {
        const timeout = setTimeout(() => {
          setTypedText(currentMessage.slice(0, typedText.length + 1))
        }, 50)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
        return () => clearTimeout(timeout)
      }
    } else {
      if (typedText.length > 0) {
        const timeout = setTimeout(() => {
          setTypedText(typedText.slice(0, -1))
        }, 30)
        return () => clearTimeout(timeout)
      } else {
        setCurrentTextIndex((prev) => (prev + 1) % HERO_MESSAGES.length)
        setIsTyping(true)
      }
    }
  }, [typedText, isTyping, currentTextIndex, HERO_MESSAGES, isClient])

  // Cursor blinking
  useEffect(() => {
    if (!isClient) return
    
    const interval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    
    return () => clearInterval(interval)
  }, [isClient])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Title */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-6">
            {t('title') || 'Ergo Platform'}
          </h1>
          
          {/* Animated Subtitle */}
          <div className="h-16 flex items-center justify-center">
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-mono">
              {isClient && (
                <>
                  {typedText}
                  <span className={`inline-block w-0.5 h-8 bg-orange-400 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
                </>
              )}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          {t('description') || 'A resilient blockchain platform for contractual money. Ergo builds advanced cryptographic features and radically new DeFi functionality on the rock-solid foundations laid by a decade of blockchain theory and development.'}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link href="/start/introduction">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(251,146,60,0.5)] min-w-[200px]">
              <span className="relative z-10 flex items-center gap-2 font-mono uppercase tracking-wider">
                <Code className="w-5 h-5" />
                {t('getStarted') || 'Get Started'}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </Link>
          
          <Link href="/docs">
            <button className="group relative px-8 py-4 bg-transparent border-2 border-gray-600 text-gray-300 font-bold rounded-lg overflow-hidden transition-all duration-300 hover:border-orange-400 hover:text-orange-400 hover:shadow-[0_0_20px_rgba(251,146,60,0.3)] min-w-[200px]">
              <span className="relative z-10 flex items-center gap-2 font-mono uppercase tracking-wider">
                <Shield className="w-5 h-5" />
                {t('learnMore') || 'Learn More'}
              </span>
            </button>
          </Link>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[
            { icon: Zap, text: t('feature1') || 'Smart Contracts' },
            { icon: Shield, text: t('feature2') || 'Proof of Work' },
            { icon: Layers, text: t('feature3') || 'eUTXO Model' },
            { icon: Code, text: t('feature4') || 'ErgoScript' }
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-gray-300 hover:border-orange-400/50 hover:text-orange-400 transition-all duration-300"
            >
              <feature.icon className="w-4 h-4" />
              <span className="text-sm font-mono">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 