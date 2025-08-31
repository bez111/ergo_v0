"use client"

import { BookOpen, Info, Code2, Scale, History, Sparkles } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useTranslations } from "next-intl"

// guides moved to component

export default function GuidesClient() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const t = useTranslations('learn.guides')
  
  const guides = [
    {
      title: t('items.0.title'),
      description: t('items.0.description'),
      icon: <Scale className="w-10 h-10 text-blue-500" />,
      href: "/learn/guides/eutxo",
    },
    {
      title: t('items.1.title'),
      description: t('items.1.description'),
      icon: <Code2 className="w-10 h-10 text-green-500" />,
      href: "/learn/guides/ergoscript",
    },
    {
      title: t('items.2.title'),
      description: t('items.2.description'),
      icon: <Info className="w-10 h-10 text-orange-500" />,
      href: "/learn/guides/oracle-pool",
    },
    {
      title: t('items.3.title'),
      description: t('items.3.description'),
      icon: <Scale className="w-10 h-10 text-purple-500" />,
      href: "/learn/guides/fees",
    },
    {
      title: t('items.4.title'),
      description: t('items.4.description'),
      icon: <Sparkles className="w-10 h-10 text-yellow-500" />,
      href: "/learn/guides/ergo-vs-cardano",
    },
    {
      title: t('items.5.title'),
      description: t('items.5.description'),
      icon: <BookOpen className="w-10 h-10 text-pink-500" />,
      href: "/learn/guides/glossary",
    },
    {
      title: t('items.6.title'),
      description: t('items.6.description'),
      icon: <History className="w-10 h-10 text-gray-500" />,
      href: "/learn/guides/history",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <BookOpen className="w-20 h-20 mx-auto text-blue-400 mb-4" />
          <h1 className="text-5xl font-bold mb-4">{t('title')}</h1>
          <p className="text-xl text-gray-400">
            {t('description')}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide) => (
            <Link key={guide.title} href={guide.href} className="bg-zinc-900 rounded-xl p-6 flex flex-col items-center hover:bg-zinc-800 transition">
              {guide.icon}
              <h2 className="text-2xl font-semibold mt-4 mb-2 text-center">{guide.title}</h2>
              <p className="text-gray-400 text-center">{guide.description}</p>
            </Link>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-400 mb-2">{t('cta.suggest')}</p>
          <a href="https://github.com/ergoplatform/ergowebsite" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition">{t('cta.contribute')}</a>
        </div>
      </div>
    </div>
  )
} 