"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Code, Shield, Zap, Layers } from "lucide-react"
import { useTranslations, useLocaleContext } from "@/components/locale-provider"

export function HeroSectionLocalized() {
  const [typedText, setTypedText] = useState("")
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)
  const [isClient, setIsClient] = useState(false)
  
  const t = useTranslations('hero')
  const { locale } = useLocaleContext()

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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Title */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-6">
            {t('title')}
          </h1>
          
          {/* Animated Subtitle */}
          <div className="h-16 flex items-center justify-center">
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-mono">
              {isClient && (
                <>
                  {typedText}
                  <span className={`inline-block w-0.5 h-8 bg-blue-400 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
                </>
              )}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          {t('description')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link
            href={`/${locale === 'en' ? '' : locale + '/'}docs`}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
          >
            <span className="relative z-10">{t('getStarted')}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
          </Link>
          
          <Link
            href={`/${locale === 'en' ? '' : locale + '/'}ecosystem`}
            className="group px-8 py-4 border-2 border-gray-600 text-white font-semibold rounded-lg hover:border-blue-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-105"
          >
            {t('learnMore')}
          </Link>
        </div>

        {/* Feature Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          {[
            { icon: Shield, label: t('feature1') || 'Secure' },
            { icon: Zap, label: t('feature2') || 'Fast' },
            { icon: Code, label: t('feature3') || 'Programmable' },
            { icon: Layers, label: t('feature4') || 'Scalable' }
          ].map(({ icon: Icon, label }, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="p-4 rounded-full bg-gray-800/50 border border-gray-700 group-hover:border-blue-400 transition-colors duration-300">
                <Icon className="h-6 w-6 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
              </div>
              <span className="mt-2 text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-40" />
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse opacity-50" />
    </section>
  )
} 