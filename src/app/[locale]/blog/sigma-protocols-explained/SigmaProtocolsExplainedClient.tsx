"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { FinalCTASimple } from "@/components/home/final-cta-simple"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ShareCTA } from "@/components/blog/share-cta"
import { ShareInline } from "@/components/blog/share-inline"
import { RelatedContent } from "@/components/seo/related-content"
import { GlossaryLink } from "@/components/glossary"
import { 
  GraduationCap,
  Eye,
  Lock,
  Unlock,
  Key,
  CheckCircle,
  ChevronDown,
  Code,
  Lightbulb,
  Puzzle,
  Shield,
  Smartphone,
  Dice1,
  Building2,
  Users,
  Vote,
  Coins,
  Zap
} from "lucide-react"

export function SigmaProtocolsExplainedClient() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  // TL;DR cards with simple explanations
  const tldrItems = [
    {
      icon: GraduationCap,
      title: "No PhD Required",
      description:
        "Sigma Protocols use simple concepts like combination locks and card tricks. The math is complex, but the ideas are surprisingly intuitive.",
    },
    {
      icon: Eye,
      title: "Prove Without Revealing",
      description:
        "Like unlocking your phone to prove it's yours without showing your PIN. You can prove knowledge of secrets without exposing them.",
    },
    {
      icon: Puzzle,
      title: "Composable Like Lego",
      description:
        "Combine proofs using AND, OR logic. Prove 'I know secret A OR secret B' without revealing which one or what they are.",
    },
    {
      icon: Zap,
      title: "Lightweight & Fast",
      description:
        "Unlike heavy zkSNARKs, Sigma Protocols are efficient and scalable. Perfect for blockchain applications where every byte counts.",
    },
    {
      icon: Building2,
      title: "Real-World Applications",
      description:
        "Build threshold signatures, private voting, confidential DeFi, and more. Privacy that works in practice, not just theory.",
    },
  ]

  const faqItems = [
    {
      question: "What are Sigma Protocols in simple terms?",
      answer:
        "Sigma Protocols are a way to prove you know something (like a password or secret) without actually revealing what that something is. Think of it like proving you can unlock your phone without showing anyone your PIN code."
    },
    {
      question: "How do Sigma Protocols work with a simple example?",
      answer:
        "Imagine proving a dice roll is greater than 3 without showing the number. You cover faces 4, 5, 6 with stickers, roll the dice. If a sticker shows up, it proves the number is &gt;3 without revealing the exact number."
    },
    {
      question: "What makes Sigma Protocols composable?",
      answer:
        "Sigma Protocols can be combined like Lego blocks using logical operators (AND, OR). You can prove 'I know secret A OR secret B' or 'I know secret X AND secret Y' without revealing any of the actual secrets."
    },
    {
      question: "Do I need a PhD to understand Sigma Protocols?",
      answer:
        "No! While the underlying math is complex, the concepts can be understood through simple analogies like combination locks, dice games, and card tricks. You don't need advanced mathematics to grasp how they work."
    },
    {
      question: "How are Sigma Protocols different from other privacy technologies?",
      answer:
        "Sigma Protocols are lightweight, composable, and don't require trusted setup. Unlike ZCash's heavy zkSNARKs or Monero's always-on privacy, they offer flexible, optional privacy that can be combined in creative ways."
    },
    {
      question: "What can you build with Sigma Protocols?",
      answer:
        "You can build threshold signatures, confidential voting systems, private DeFi applications, ring signatures, and any application requiring flexible privacy with selective disclosure capabilities."
    },
    {
      question: "Are Sigma Protocols secure?",
      answer:
        "Yes, Sigma Protocols are cryptographically secure and have been extensively studied in academic literature. They provide strong privacy guarantees while being computationally efficient."
    }
  ]

  const articleContents = [
    { label: "Introduction", href: "#introduction" },
    { label: "Why Zero-Knowledge Proofs Matter", href: "#zkp-matter" },
    { label: "What Exactly Are Sigma Protocols?", href: "#what-are-sigma" },
    { label: "From Interactive to Non-Interactive", href: "#interactive-to-nizk" },
    { label: "Programmable Privacy on Ergo", href: "#programmable-privacy" },
    { label: "Sigma Protocols vs Other Privacy Tech", href: "#comparison" },
    { label: "The Future of Accessible Privacy", href: "#future" },
    { label: "Frequently Asked Questions", href: "#faq" },
    { label: "Essential Documents", href: "#documents" }
  ]

  // Simple comparison data for privacy technologies
  const privacyComparison = [
    {
      feature: "Trusted Setup",
      zcash: "Required",
      monero: "Not needed",
      dash: "Not needed",
      ergo: "Not needed"
    },
    {
      feature: "Lightweight",
      zcash: "Heavy",
      monero: "Moderate",
      dash: "Light",
      ergo: "Light"
    },
    {
      feature: "Optional Privacy",
      zcash: "Yes",
      monero: "Always-on",
      dash: "Yes",
      ergo: "Yes"
    },
    {
      feature: "Selective Disclosure",
      zcash: "Possible",
      monero: "Limited",
      dash: "No",
      ergo: "Full support"
    },
    {
      feature: "Composable",
      zcash: "Limited",
      monero: "No",
      dash: "No",
      ergo: "Fully composable"
    }
  ]

  return (
    <BackgroundWrapper>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Blog", href: "/blog" },
              { name: "Sigma Protocols Explained (Without A PhD)", href: "/blog/sigma-protocols-explained" }
            ]}
            className="mb-8"
          />

          {/* Hero */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              Sigma Protocols Explained (Without A PhD)
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed mb-6">
              A plain-English guide to Sigma Protocols – the powerful, flexible zero-knowledge cryptography that powers Ergo's privacy and smart contracts.
            </p>

            {/* Article Meta */}
            <div className="flex items-center gap-4 mb-8 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                10 min read
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                Privacy
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                Beginner
              </span>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <ShareInline
                title="Sigma Protocols Explained (Without A PhD)"
                url="https://ergoblockchain.org/blog/sigma-protocols-explained"
                utm="?utm_source=share_hero"
              />
            </div>
          </motion.header>

          {/* TL;DR Section - Compact */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">TL;DR</h2>
            <div className="grid gap-3">
              {tldrItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                >
                  <Card className="bg-black border border-white/10 rounded-xl">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <item.icon className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                        <div>
                          <h3 className="text-base font-semibold text-white mb-1">
                            {item.title}
                          </h3>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Article Contents */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-12"
          >
            <Card className="bg-black/80 border border-orange-500/20 rounded-2xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg text-white flex items-center gap-2">
                  <Eye className="w-5 h-5 text-orange-400" />
                  Article Contents
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <nav className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  {articleContents.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="text-gray-300 hover:text-orange-400 transition-colors py-1"
                    >
                      → {item.label}
                    </a>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </motion.section>

          {/* Article Body */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            {/* Introduction */}
            <section
              id="introduction"
              className="bg-black border border-white/20 rounded-3xl p-8 mb-12 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-7 h-7 text-orange-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Introduction
                </h2>
              </div>

              <p className="text-gray-300 leading-relaxed mb-4">
                Cryptography can often feel inaccessible, partly because modern cryptography is based on some highly advanced math. Ultimately, though, we all understand the basic idea: using a secret code to ensure that no one can read a message unless they have the right key.
              </p>

              <p className="text-gray-300 leading-relaxed mb-4">
                Cryptography underpins all blockchains, but some blockchains offer privacy features that rely on additional cryptographic processes. There are many ways to achieve on-chain privacy, and to deliver confidential transactions of different kinds.
              </p>

              <p className="text-gray-300 leading-relaxed">
                In Ergo's case, a special class of cryptographic proofs is used, known as Sigma Protocols. Below, we'll take a high-level look at what they are, how they work, and why they offer such powerful privacy functionality for Ergo's users.
              </p>
            </section>

            {/* Why Zero-Knowledge Proofs Matter */}
            <section
              id="zkp-matter"
              className="mb-12 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-4">
                <Key className="w-7 h-7 text-orange-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Why Zero-Knowledge Proofs Matter
                </h2>
              </div>

              <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Sigma Protocols are a special type of zero-knowledge proofs. A zero-knowledge proof allows you to prove something without revealing the nature of the underlying piece of information.
                </p>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Lock className="w-6 h-6 text-blue-400" />
                      <h3 className="text-blue-400 font-semibold text-lg">Bike Lock Analogy</h3>
                    </div>
                    <p className="text-blue-100 leading-relaxed">
                      An everyday analogy is a number combination lock used to secure a bike. You can prove the bike is yours by entering the correct combination. No one watching needs to see the number itself: the proof is the fact that the bike has been released.
                    </p>
                  </div>

                  <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Smartphone className="w-6 h-6 text-green-400" />
                      <h3 className="text-green-400 font-semibold text-lg">Phone Unlock</h3>
                    </div>
                    <p className="text-green-100 leading-relaxed">
                      Proving a mobile phone is yours by entering the correct pin code or unlocking it with your fingerprint is another example. The unlock proves ownership without revealing the PIN.
                    </p>
                  </div>
                </div>

                <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Dice1 className="w-6 h-6 text-orange-400" />
                    <h3 className="text-orange-400 font-semibold text-lg">The Dice Example</h3>
                  </div>
                  <p className="text-orange-100 leading-relaxed mb-4">
                    You want to prove to an observer that the number rolled on a dice is larger than 3, without revealing what the number actually is.
                  </p>
                  <div className="bg-black/30 rounded-xl p-4">
                    <ol className="text-orange-100 space-y-2 text-sm">
                      <li><strong>1.</strong> Cover the numbers 4, 5, and 6 with stickers</li>
                      <li><strong>2.</strong> Roll the dice in front of the observer</li>
                      <li><strong>3.</strong> If a sticker shows up, it proves the number is &gt;3</li>
                      <li><strong>4.</strong> Observer can check faces 1, 2, 3 are uncovered</li>
                      <li><strong>5.</strong> You remove the sticker in secret later</li>
                    </ol>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  Zero-knowledge proofs have lots of real-world privacy-preserving applications. For example, you might want to prove you are over 18, without revealing your actual date of birth or other sensitive information.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  They are also used by some cryptocurrencies. Privacy coin ZCash uses ZKPs to enable privacy in blockchain transactions. Users can prove a transaction is legitimate (for example, that they have a large enough balance, and that the addresses are valid) without revealing the actual amount, or the sender/recipient.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  Ergo's Sigma Protocols are one way of implementing zero-knowledge proofs, but they hold additional advantages beyond the ZKPs used by ZCash and other similar cryptocurrencies.
                </p>
              </div>
            </section>

            {/* What Exactly Are Sigma Protocols? */}
            <section
              id="what-are-sigma"
              className="mb-12 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-4">
                <Puzzle className="w-7 h-7 text-orange-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  What Exactly Are Sigma Protocols?
                </h2>
              </div>

              <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Sigma Protocols are a special class of composable zero-knowledge proofs. As well as being used to prove information without revealing sensitive data, they can be customized to create special conditions.
                </p>

                <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-6">
                  <h3 className="text-purple-400 font-semibold text-lg mb-4">The Three-Step Dance</h3>
                  <p className="text-purple-100 leading-relaxed mb-4">
                    A Sigma Protocol involves a three-step interaction: a commitment, challenge, and response. Here's a simple card example:
                  </p>
                  <div className="space-y-3 text-purple-100 text-sm">
                    <div className="flex items-start gap-3">
                      <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs font-mono">1</span>
                      <span><strong>Commitment:</strong> You shuffle a deck and secretly draw the Four of Hearts</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs font-mono">2</span>
                      <span><strong>Challenge:</strong> Your friend challenges you to prove your card is red</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs font-mono">3</span>
                      <span><strong>Response:</strong> You remove all 26 black cards and pass them over. This proves your card is red without revealing it's the Four of Hearts</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  Sigma Protocols allow a user to prove knowledge of a secret, without revealing the secret itself. But there's much more to them than that. A key benefit of Sigma Protocols is that they are composable: they can be combined like building blocks, stringing together a series of proofs, still without revealing sensitive information.
                </p>

                <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6">
                  <h3 className="text-green-400 font-semibold text-lg mb-4">The "Lego Block" Approach</h3>
                  <p className="text-green-100 leading-relaxed mb-4">
                    You can take two or more proofs, and link them using logical connectors like AND, OR, etc. For example, you could create a proof that shows you know the private key to Address A OR Address B.
                  </p>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="bg-black/30 rounded-xl p-4 text-center">
                      <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
                      <h4 className="text-green-400 font-semibold mb-2">Threshold Signatures</h4>
                      <p className="text-green-100 text-sm">Prove 3 of 5 parties approved without revealing which 3</p>
                    </div>
                    <div className="bg-black/30 rounded-xl p-4 text-center">
                      <Vote className="w-8 h-8 text-green-400 mx-auto mb-2" />
                      <h4 className="text-green-400 font-semibold mb-2">Confidential Voting</h4>
                      <p className="text-green-100 text-sm">Prove token ownership and voting eligibility privately</p>
                    </div>
                    <div className="bg-black/30 rounded-xl p-4 text-center">
                      <Coins className="w-8 h-8 text-green-400 mx-auto mb-2" />
                      <h4 className="text-green-400 font-semibold mb-2">Private DeFi</h4>
                      <p className="text-green-100 text-sm">Prove sufficient collateral without revealing holdings</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  Sigma Protocols are also lightweight, making them ideal for blockchain use, where on-chain data storage is expensive. (The size of conventional zero-knowledge proofs limits the throughput of ZCash.)
                </p>
              </div>
            </section>

            {/* From Sigma To Non-Interactive Proofs */}
            <section
              id="interactive-to-nizk"
              className="mb-12 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-7 h-7 text-orange-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  From Interactive to Non-Interactive Proofs
                </h2>
              </div>

              <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  So-called "interactive" proofs require this kind of back-and-forth between prover and verifier – the commit/challenge/response cycle. While this offers a high degree of flexibility and is useful for many applications, it is not always practical. When the verifier is the whole blockchain network, with hundreds or thousands of nodes, everything must be verifiable from a single transaction.
                </p>

                <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6">
                  <h3 className="text-blue-400 font-semibold text-lg mb-3">Fiat-Shamir Transformation</h3>
                  <p className="text-blue-100 leading-relaxed mb-4">
                    This is achieved using a technique known as a Fiat-Shamir Transformation. Instead of the verifier asking for a random challenge, the challenge is derived from the commitment, using a hash (a kind of unique cryptographic fingerprint) and included with the response.
                  </p>
                  <div className="bg-black/30 rounded-xl p-4">
                    <p className="text-blue-100 text-sm">
                      <strong>Result:</strong> The prover can include everything in a single, self-contained message. Anyone can check the challenge, because it is based on the commitment.
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  This allows the prover to include everything in a single, self-contained message. This doesn't work for cases where the verifier wants to choose what information is to be proved, but it is a simple and efficient way to prove specific aspects of a piece of data. This is how Ergo turns Sigma Protocols into non-interactive zero-knowledge (NIZK) proofs.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  NIZKs are useful for many popular applications. A user can prove that an on-chain vote is valid, without revealing their identity or choice. In the context of anonymizing coins (ErgoMixer), they can prove that they made a deposit of a certain amount, without revealing the originating address. You can even prove that a smart contract executed properly, despite using private inputs.
                </p>
              </div>
            </section>

            {/* Programmable Privacy: How Ergo Uses Sigma Protocols */}
            <section
              id="programmable-privacy"
              className="mb-12 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-7 h-7 text-orange-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Programmable Privacy: How Ergo Uses Sigma Protocols
                </h2>
              </div>

              <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Ergo's unique Sigma Protocols layer enables flexible and confidential smart contracts. While first-generation privacy coins like ZCash, Dash, and Monero offer private transfers, Ergo allows <strong className="text-orange-400">Programmable Privacy</strong>.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  Using Sigma Protocols, developers can build a wide range of cryptographic solutions, including ring signatures, multi-sig addresses, zero-knowledge mixers, and dApps based on these. Unlike ZCash and Monero, Ergo's approach is lightweight and scalable, ensuring a sustainable future for private applications on the network.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Eye className="w-6 h-6 text-green-400" />
                      <h3 className="text-green-400 font-semibold text-lg">Optional Privacy</h3>
                    </div>
                    <p className="text-green-100 leading-relaxed">
                      Privacy is optional, rather than "always on". Users and developers can benefit from the transparency of the public blockchain where they want, but implement robust privacy where they need to.
                    </p>
                  </div>

                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Shield className="w-6 h-6 text-blue-400" />
                      <h3 className="text-blue-400 font-semibold text-lg">Auditable Proofs</h3>
                    </div>
                    <p className="text-blue-100 leading-relaxed">
                      The proofs are auditable. Users can selectively disclose information about private transactions, as required. This is vital for compliance and institutional adoption.
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  This makes the Ergo blockchain an incredibly powerful toolkit for builders. For blockchain technology to become widely adopted, and to ensure maximum possible utility, we need both privacy and compliance.
                </p>
              </div>
            </section>

            {/* Sigma Protocols Vs Other Privacy Tech */}
            <section
              id="comparison"
              className="mb-12 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-7 h-7 text-orange-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Sigma Protocols Vs Other Privacy Tech
                </h2>
              </div>

              <p className="text-gray-300 leading-relaxed mb-8">
                Ergo offers a different approach to other privacy coins on the market, thanks to Sigma Protocols' unique combination of properties.
              </p>

              <div className="bg-black/80 border border-white/10 rounded-3xl backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 mb-8 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <caption className="sr-only">Privacy technology comparison between different blockchain platforms</caption>
                    <thead>
                      <tr className="border-b border-neutral-700">
                        <th className="text-left p-4 font-semibold text-orange-400">Feature</th>
                        <th className="text-left p-4 font-semibold text-blue-400">ZCash</th>
                        <th className="text-left p-4 font-semibold text-purple-400">Monero</th>
                        <th className="text-left p-4 font-semibold text-green-400">Dash</th>
                        <th className="text-left p-4 font-semibold text-orange-400">Ergo</th>
                      </tr>
                    </thead>
                    <tbody className="text-neutral-300">
                      {privacyComparison.map((row, index) => {
                        const getColoredContent = (content: string, isErgo: boolean = false) => {
                          const lower = content.toLowerCase().trim();
                          
                          // Ergo advantages (orange) - check first!
                          if (isErgo) {
                            if (lower === 'not needed' || lower === 'light' || lower === 'yes' || 
                                lower === 'full support' || lower === 'fully composable') {
                              return <span className="text-orange-400 font-medium">{content}</span>;
                            }
                          }
                          
                          // Positive indicators (green)
                          if (lower === 'yes' || lower === 'light' || lower === 'not needed' || 
                              lower === 'full support' || lower === 'fully composable' || lower === 'possible') {
                            return <span className="text-green-400">{content}</span>;
                          }
                          
                          // Negative indicators (red)
                          if (lower === 'required' || lower === 'heavy' || lower === 'always-on' || 
                              lower === 'limited' || lower === 'no') {
                            return <span className="text-red-400">{content}</span>;
                          }
                          
                          // Neutral/moderate (yellow)
                          if (lower === 'moderate') {
                            return <span className="text-yellow-400">{content}</span>;
                          }
                          
                          return <span className="text-neutral-300">{content}</span>;
                        };

                        return (
                          <tr key={index} className="border-b border-neutral-800 hover:bg-neutral-800/30">
                            <th scope="row" className="p-4 font-medium text-white">{row.feature}</th>
                            <td className="p-4">{getColoredContent(row.zcash)}</td>
                            <td className="p-4">{getColoredContent(row.monero)}</td>
                            <td className="p-4">{getColoredContent(row.dash)}</td>
                            <td className="p-4">{getColoredContent(row.ergo, true)}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Color Legend */}
              <div className="mb-6">
                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-neutral-300">Strong advantages</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                    <span className="text-sm text-neutral-300">Moderate/mixed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-400 rounded-full"></div>
                    <span className="text-sm text-neutral-300">Limitations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
                    <span className="text-sm text-neutral-300">Ergo highlights</span>
                  </div>
                </div>
              </div>

              <div className="bg-orange-900/20 border border-orange-500/30 rounded-2xl p-6">
                <p className="text-orange-100 leading-relaxed">
                  <strong className="text-orange-400">Key Takeaway:</strong> Monero (ring signatures), Dash (CoinJoin mixing), and ZCash (zero-knowledge proofs) all provide a degree of privacy, but only Ergo offers flexible, auditable privacy without the overhead of heavy cryptographic circuits.
                </p>
              </div>
            </section>

            {/* Ergo And The Future Of Accessible Privacy */}
            <section
              id="future"
              className="mb-16 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-7 h-7 text-orange-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Ergo And The Future Of Accessible Privacy
                </h2>
              </div>

              <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Privacy has become the single most important trend in the blockchain space. Individuals are increasingly demanding privacy, against a backdrop of increasingly intrusive financial surveillance, and institutions cannot adopt blockchain at scale without ensuring compliance with data protection laws and protections against industrial espionage.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  Ergo's Sigma Protocols offer programmable privacy: flexible, composable proofs that can be used as primitives for blockchain and DeFi operations. Importantly, they enable both robust privacy and the ability to selectively disclose transaction information where required – offering the ideal combination of confidentiality and compliance.
                </p>

                <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-6 text-center">
                  <p className="text-orange-100 font-medium">
                    Find out more about Sigma Protocols and start building privacy-focused dApps by checking out Ergo's documentation.
                  </p>
                </div>
              </div>
            </section>
          </motion.article>

          {/* FAQ */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mb-16"
            id="faq"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
              ❓ Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <Card key={index} className="bg-black border border-white/10 rounded-2xl">
                  <Collapsible open={openFAQ === index} onOpenChange={(open) => setOpenFAQ(open ? index : null)}>
                    <CollapsibleTrigger asChild>
                      <button className="w-full text-left">
                        <CardContent className="p-6 flex items-center justify-between hover:bg-black/70 transition-colors">
                          <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                          <ChevronDown
                            className={`w-5 h-5 text-neutral-400 transition-transform shrink-0 ${
                              openFAQ === index ? "rotate-180" : ""
                            }`}
                          />
                        </CardContent>
                      </button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent className="px-6 pb-6 pt-0">
                        <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              ))}
            </div>
          </motion.section>

          {/* Essential Documents - Beginner friendly */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mb-16"
            id="documents"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              📚 Essential Documents (Beginner Friendly)
            </h2>
            <p className="text-gray-300 mb-8">Start your journey into Sigma Protocols with these accessible resources.</p>

            <div className="grid gap-4">
              <a href="/doc/privacy/sigma-protocols-intro" className="group">
                <Card className="bg-black border border-white/10 rounded-2xl hover:bg-neutral-900 hover:border-green-400/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center shrink-0">
                          <GraduationCap className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-lg mb-2">Sigma Protocols Introduction</h3>
                          <p className="text-gray-400 text-sm">Beginner-friendly guide to understanding Sigma Protocols with examples and analogies.</p>
                        </div>
                      </div>
                      <div className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors shrink-0">→</div>
                    </div>
                  </CardContent>
                </Card>
              </a>

              <a href="/doc/ergoscript/privacy-examples" className="group">
                <Card className="bg-black border border-white/10 rounded-2xl hover:bg-neutral-900 hover:border-blue-400/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                          <Code className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-lg mb-2">ErgoScript Privacy Examples</h3>
                          <p className="text-gray-400 text-sm">Simple code examples showing how to implement privacy features with Sigma Protocols.</p>
                        </div>
                      </div>
                      <div className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors shrink-0">→</div>
                    </div>
                  </CardContent>
                </Card>
              </a>

              <a href="/api/pdf/documents/Ergo- A Resilient Platform For Contractual Money.pdf" target="_blank" rel="noopener noreferrer" className="group">
                <Card className="bg-black border border-white/10 rounded-2xl hover:bg-neutral-900 hover:border-orange-400/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shrink-0">
                          <CheckCircle className="w-6 h-6 text-orange-400" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-lg mb-2">Ergo Platform Whitepaper</h3>
                          <p className="text-gray-400 text-sm">Technical deep-dive into Sigma Protocols and their implementation on Ergo (advanced reading).</p>
                        </div>
                      </div>
                      <div className="w-5 h-5 text-gray-400 group-hover:text-orange-400 transition-colors shrink-0">→</div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </div>
          </motion.section>

          {/* Share CTA */}
          <ShareCTA
            title="Sigma Protocols Explained (Without A PhD)"
            url="https://ergoblockchain.org/blog/sigma-protocols-explained"
            description="Learn about Sigma Protocols through simple analogies and real-world examples. No advanced mathematics required!"
            subtitle="If this helped you understand Sigma Protocols, share it with others who want to learn about accessible privacy technology."
          />

          {/* Continue learning */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
              Continue Learning
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <a href="/blog/sigma-protocols-privacy" className="group">
                <Card className="bg-black border border-white/10 rounded-2xl hover:bg-neutral-900 hover:border-orange-400/40 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center shrink-0">
                        <Shield className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-2">Advanced Sigma Protocols</h3>
                        <p className="text-gray-400 text-sm mb-2">Deep dive into privacy coin comparison and technical implementation details</p>
                        <Badge variant="outline" className="bg-purple-500/10 border-purple-500/30 text-purple-400 text-xs">
                          Advanced
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>

              <a href="/blog/ergo-in-5-minutes" className="group">
                <Card className="bg-black border border-white/10 rounded-2xl hover:bg-neutral-900 hover:border-orange-400/40 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                        <Zap className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-2">Ergo in 5 Minutes</h3>
                        <p className="text-gray-400 text-sm mb-2">Quick overview of Ergo's features including privacy, smart contracts, and DeFi</p>
                        <Badge variant="outline" className="bg-blue-500/10 border-blue-500/30 text-blue-400 text-xs">
                          Overview
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </div>
          </motion.section>

          {/* Related Content */}
          <RelatedContent
            title="Further Reading"
            links={[
              {
                title: "Ergo Privacy Features",
                href: "/technology/privacy-features",
                description: "Complete overview of Ergo's privacy capabilities and tools",
                type: "technology",
                category: "Privacy"
              },
              {
                title: "Two Blockchain Models: eUTXO vs Accounts",
                href: "/blog/eutxo-vs-accounts",
                description: "How Ergo's eUTXO model enables better privacy and composability",
                type: "blog",
                category: "Technology"
              },
              {
                title: "ErgoScript Privacy Examples",
                href: "/docs/ergoscript/privacy",
                description: "Code examples for implementing privacy features with Sigma Protocols",
                type: "docs",
                category: "Developer"
              },
              {
                title: "Ergo Platform Whitepaper",
                href: "/api/pdf/documents/Ergo- A Resilient Platform For Contractual Money.pdf",
                description: "Technical deep-dive into Sigma Protocols implementation (advanced)",
                type: "docs",
                category: "Research"
              }
            ]}
            showForumLink={true}
            forumThreadUrl="https://forum.ergoblockchain.org/t/sigma-protocols-discussion"
            className="mb-12"
          />

          {/* Email capture */}
          <FinalCTASimple 
            title="Join the resistance"
            description="Fight for financial freedom. Build censorship-resistant money. No banks, no middlemen."
          />
        </div>
      </div>
    </BackgroundWrapper>
  )
}
