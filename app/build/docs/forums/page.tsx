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
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Community & Support Resources
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Connect with the global Ergo community, find support, share knowledge, and contribute to the growth of the ecosystem. Your journey with Ergo is a shared one!
        </p>
      </div>

      {/* Community Channels */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-blue-400"><Users className="w-6 h-6" /> Official Community Channels</h2>
        <p className="text-gray-300 mb-6">
          The Ergo community is active across various platforms. Choose the channel that best suits your needs for real-time discussions, support, and updates.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Discord */}
          <div className="bg-neutral-900/60 border border-blue-500/30 rounded-xl p-6 flex flex-col gap-2">
            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-blue-400" /> Discord (Main Hub)
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              The primary hub for the Ergo community. Find dedicated channels for general discussion, development, mining, news, and direct Q&A with core contributors. Often the fastest way to get help.
            </p>
            <Link href="https://discord.gg/ergoplatform" target="_blank" className="text-orange-400 hover:underline inline-flex items-center">
              Join Ergo Discord <ExternalLink className="w-4 h-4 ml-1" />
            </Link>
          </div>
          {/* Telegram */}
          <div className="bg-neutral-900/60 border border-blue-500/30 rounded-xl p-6 flex flex-col gap-2">
            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-cyan-400" /> Telegram Groups
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Various Telegram groups for general news, discussions, and specific topics. Good for quick updates and informal chats.
            </p>
            <Link href="https://t.me/ergoplatform" target="_blank" className="text-orange-400 hover:underline inline-flex items-center">
              Ergo Platform Official <ExternalLink className="w-4 h-4 ml-1" />
            </Link>
            <Link href="https://t.me/ergodevelopers" target="_blank" className="text-orange-400 hover:underline inline-flex items-center mt-1">
              Ergo Developers Chat <ExternalLink className="w-4 h-4 ml-1" />
            </Link>
          </div>
          {/* Reddit */}
          <div className="bg-neutral-900/60 border border-orange-500/30 rounded-xl p-6 flex flex-col gap-2">
            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
              <Globe className="w-5 h-5 text-orange-400" /> Reddit (r/ergonauts)
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              A vibrant subreddit for discussions, news, Q&A, and community content. A great place to share your thoughts and engage with the broader Ergo community.
            </p>
            <Link href="https://reddit.com/r/ergonauts" target="_blank" className="text-orange-400 hover:underline inline-flex items-center">
              Visit r/ergonauts <ExternalLink className="w-4 h-4 ml-1" />
            </Link>
          </div>
          {/* Forum */}
          <div className="bg-neutral-900/60 border border-green-500/30 rounded-xl p-6 flex flex-col gap-2">
            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-green-400" /> Ergo Forum
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              For more structured discussions, in-depth technical topics, Ergo Improvement Proposals (EIPs), and long-form content. Ideal for detailed inquiries and proposals.
            </p>
            <Link href="https://forum.ergoplatform.com" target="_blank" className="text-orange-400 hover:underline inline-flex items-center">
              Visit Ergo Forum <ExternalLink className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-orange-400"><Info className="w-6 h-6" /> Community Guidelines & Best Practices</h2>
        <p className="text-gray-300 mb-6">
          To ensure a positive and productive environment for everyone, please adhere to these community guidelines when participating in Ergo forums and chats:
        </p>
        <div className="bg-neutral-900/60 border border-orange-500/30 rounded-xl p-6 mb-4">
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>
              **Be Respectful and Polite:** Treat all members with courtesy, even if you disagree with their opinions. Personal attacks, harassment, or offensive language will not be tolerated.
            </li>
            <li>
              **Avoid Spam and Scams:** Do not post unsolicited advertisements, phishing links, or any content designed to deceive or defraud other members.
            </li>
            <li>
              **Ask Clear Questions:** When seeking help, provide as much detail as possible, including error messages, logs, screenshots, and steps to reproduce the issue. This helps others assist you more effectively.
            </li>
            <li>
              **Help Others:** If you have knowledge or experience, consider helping other community members. Sharing your expertise strengthens the entire ecosystem.
            </li>
            <li>
              **Stay On-Topic:** Keep discussions relevant to the channel or forum topic. If you have an unrelated question, find the appropriate channel or start a new thread.
            </li>
            <li>
              **Report Issues:** If you encounter any violations of these guidelines, please report them to the moderators.
            </li>
          </ul>
          <div className="mt-4 text-sm text-orange-300 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" /> Adhering to these guidelines helps foster a welcoming and productive environment for all Ergonauts.
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <div className="mt-12 p-6 bg-gradient-to-r from-orange-500/10 to-cyan-500/10 border border-orange-500/20 rounded-xl">
        <h3 className="text-xl font-bold mb-4 text-white">Next Steps: Get Involved!</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2 text-orange-400">Contribute to Ergo</h4>
            <p className="text-gray-400 text-sm mb-3">
              Learn how you can contribute to the Ergo ecosystem, whether through code, documentation, or community efforts.
            </p>
            <Link
              href="/build/docs/contribute"
              className="inline-flex items-center text-orange-400 hover:text-orange-300 text-sm font-medium"
            >
              Contribution Guide <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-cyan-400">Explore the Ergo Ecosystem</h4>
            <p className="text-gray-400 text-sm mb-3">
              Discover the wide range of applications and services built on the Ergo blockchain.
            </p>
            <Link
              href="/build/docs/ecosystem"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium"
            >
              Ecosystem Overview <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
} 