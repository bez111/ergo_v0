"use client"

import { BookOpen, Info, Code2, Scale, History, Sparkles } from "lucide-react"
import Link from "next/link"

const guides = [
  {
    title: "What is eUTXO and Why Does It Matter?",
    description: "A deep dive into the extended UTXO model at the core of Ergo.",
    icon: <Scale className="w-10 h-10 text-blue-500" />,
    href: "/learn/guides/eutxo",
  },
  {
    title: "How ErgoScript Works: The Basics",
    description: "An explanation of ErgoScript syntax and capabilities for smart contracts.",
    icon: <Code2 className="w-10 h-10 text-green-500" />,
    href: "/learn/guides/ergoscript",
  },
  {
    title: "What is an Oracle Pool?",
    description: "The role and structure of oracles in the Ergo ecosystem.",
    icon: <Info className="w-10 h-10 text-orange-500" />,
    href: "/learn/guides/oracle-pool",
  },
  {
    title: "How Fees Work in Ergo",
    description: "Principles of fee calculation and distribution in the network.",
    icon: <Scale className="w-10 h-10 text-purple-500" />,
    href: "/learn/guides/fees",
  },
  {
    title: "Ergo vs Cardano: A Comparison",
    description: "Key differences and similarities between two eUTXO blockchains.",
    icon: <Sparkles className="w-10 h-10 text-yellow-500" />,
    href: "/learn/guides/ergo-vs-cardano",
  },
  {
    title: "Ergo Glossary",
    description: "Terms and definitions every ecosystem participant should know.",
    icon: <BookOpen className="w-10 h-10 text-pink-500" />,
    href: "/learn/guides/glossary",
  },
  {
    title: "History and Mission of Ergo",
    description: "The project's development path, philosophy, and goals.",
    icon: <History className="w-10 h-10 text-gray-500" />,
    href: "/learn/guides/history",
  },
]

export default function LearnGuidesPage() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <BookOpen className="w-20 h-20 mx-auto text-blue-400 mb-4" />
          <h1 className="text-5xl font-bold mb-4">Ergo Educational Guides</h1>
          <p className="text-xl text-gray-400">
            Dive into the fundamental concepts, architecture, and technologies of the Ergo blockchain. Here you'll find explanations, comparisons, glossaries, and the best educational materials.
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
          <p className="text-lg text-gray-400 mb-2">Want to suggest your own guide or improve existing materials?</p>
          <a href="https://github.com/ergoplatform/ergowebsite" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition">Contribute to the documentation</a>
        </div>
      </div>
    </div>
  )
} 