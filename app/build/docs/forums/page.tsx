import {
  Users,
  MessageCircle,
  Globe,
  ExternalLink,
  AlertTriangle,
  Info,
  BookOpen,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"

export default function ForumsPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4">
          Community & Support Resources
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Join the Ergo community: get help, share knowledge, and participate in the ecosystem's development.
        </p>
      </div>

      {/* Community Channels */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-blue-400"><Users className="w-6 h-6" /> Forums & Chats</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Discord */}
          <div className="bg-neutral-900/60 border border-blue-500/30 rounded-xl p-6 flex flex-col gap-2">
            <div className="flex items-center gap-2"><MessageCircle className="w-5 h-5 text-blue-400" /> Discord (main)</div>
            <Link href="https://discord.gg/ergoplatform" target="_blank" className="text-orange-400 hover:underline inline-flex items-center">Join Discord <ExternalLink className="w-4 h-4 ml-1" /></Link>
            <span className="text-gray-400 text-sm">Main hub for support, dev, mining, news, and Q&A. Fastest way to get help.</span>
          </div>
          {/* Telegram */}
          <div className="bg-neutral-900/60 border border-blue-500/30 rounded-xl p-6 flex flex-col gap-2">
            <div className="flex items-center gap-2"><MessageCircle className="w-5 h-5 text-cyan-400" /> Telegram</div>
            <Link href="https://t.me/ergoplatform" target="_blank" className="text-orange-400 hover:underline inline-flex items-center">Ergo Platform Official <ExternalLink className="w-4 h-4 ml-1" /></Link>
            <Link href="https://t.me/ergodevelopers" target="_blank" className="text-orange-400 hover:underline inline-flex items-center">Ergo Developers <ExternalLink className="w-4 h-4 ml-1" /></Link>
            <span className="text-gray-400 text-sm">General news, discussions, and a dedicated dev chat.</span>
          </div>
          {/* Reddit */}
          <div className="bg-neutral-900/60 border border-orange-500/30 rounded-xl p-6 flex flex-col gap-2">
            <div className="flex items-center gap-2"><Globe className="w-5 h-5 text-orange-400" /> Reddit</div>
            <Link href="https://reddit.com/r/ergonauts" target="_blank" className="text-orange-400 hover:underline inline-flex items-center">r/ergonauts <ExternalLink className="w-4 h-4 ml-1" /></Link>
            <span className="text-gray-400 text-sm">Discussions, news, Q&A, memes.</span>
          </div>
          {/* Forum */}
          <div className="bg-neutral-900/60 border border-green-500/30 rounded-xl p-6 flex flex-col gap-2">
            <div className="flex items-center gap-2"><BookOpen className="w-5 h-5 text-green-400" /> Ergo Forum</div>
            <Link href="https://forum.ergoplatform.com" target="_blank" className="text-orange-400 hover:underline inline-flex items-center">forum.ergoplatform.com <ExternalLink className="w-4 h-4 ml-1" /></Link>
            <span className="text-gray-400 text-sm">Structured discussions, EIPs, deep technical topics.</span>
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-orange-400"><Info className="w-6 h-6" /> Community Guidelines</h2>
        <div className="bg-neutral-900/60 border border-orange-500/30 rounded-xl p-6 mb-4">
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Be respectful and polite.</li>
            <li>Avoid spam and scams.</li>
            <li>Ask clear questions, provide all necessary info (logs, screenshots).</li>
            <li>Help others if you can.</li>
          </ul>
        </div>
      </section>
    </>
  )
} 