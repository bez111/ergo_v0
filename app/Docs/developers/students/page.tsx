import React from "react";
import Link from "next/link";
import { GraduationCap, BookOpen, Cpu, Database, Code, Network, Server, Terminal, Cloud, Lock, Shield, Users, MessageCircle, GitBranch, ExternalLink, Zap, Layers, Globe, Wrench, Key, ChevronRight } from "lucide-react";

export default function Students() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
          <GraduationCap className="w-10 h-10 text-cyan-400" /> Students
        </h1>
        <p className="text-lg text-gray-300">
          If you're a student interested in learning about the Ergo blockchain and its ecosystem, this guide is designed to provide you with a comprehensive introduction and valuable resources to kickstart your journey.
        </p>
      </div>

      {/* Intersections with Computer Science */}
      <div className="relative bg-gradient-to-br from-cyan-500/5 via-neutral-900/95 to-blue-500/5 border border-cyan-400/20 rounded-2xl p-8 mb-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-50"></div>
        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl mb-4 shadow-lg shadow-cyan-500/20">
              <Cpu className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Intersections with Computer Science
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Bridge your academic knowledge with blockchain innovation. Explore how various CS disciplines intersect with Ergo development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group bg-gradient-to-br from-orange-500/10 to-orange-600/5 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Database className="w-5 h-5 text-orange-400" />
                </div>
                <h3 className="font-bold text-lg text-orange-300">Databases</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Build blockchain indexers and manage transactional data using your database skills. The UTXO model offers unique perspectives on data management.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Code className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="font-bold text-lg text-cyan-300">Programming Languages</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Develop smart contracts using ErgoScript. Apply functional programming, DSLs, and language design to contribute to ErgoScript compilers.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-green-500/10 to-green-600/5 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Network className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="font-bold text-lg text-green-300">Networks</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Engage with Ergo's P2P layer using distributed systems knowledge. Understand consensus and network protocols for optimization.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-6 hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Terminal className="w-5 h-5 text-yellow-400" />
                </div>
                <h3 className="font-bold text-lg text-yellow-300">Systems Programming</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Explore low-level Ergo operations, ErgoTree execution, and the sigmastate-interpreter for blockchain systems programming.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-purple-500/10 to-purple-600/5 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Shield className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="font-bold text-lg text-purple-300">Cryptography</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Design secure transactions and privacy features. Ergo's Sigma protocols offer rich opportunities for cryptographic exploration.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-pink-500/10 to-pink-600/5 backdrop-blur-sm border border-pink-500/20 rounded-xl p-6 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Key className="w-5 h-5 text-pink-400" />
                </div>
                <h3 className="font-bold text-lg text-pink-300">Compiler Design</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Apply language and compiler design principles to create smart contract tooling for ErgoScript and ErgoTree.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="https://discord.com/invite/ergo-platform-668903786361651200" className="group">
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 border border-cyan-400/40 hover:border-cyan-400/60 rounded-xl text-cyan-300 hover:text-cyan-200 transition-all duration-300 group-hover:scale-105 shadow-lg hover:shadow-cyan-500/20">
                <Users className="w-5 h-5" />
                <div className="text-left">
                  <div className="font-semibold">Ready to start building?</div>
                  <div className="text-xs opacity-80">Join the Ergo developer community</div>
                </div>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Getting Started Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-orange-400" /> Getting Started
        </h2>
        <p className="text-gray-300 mb-4">Before diving into the technical aspects, it's essential to understand the fundamental concepts and principles behind Ergo. Here are some recommended resources:</p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li><Link href="/docs/why-ergo" className="text-cyan-400 hover:underline">Why Ergo?</Link>: Get a concise overview of Ergo, its standout features, and the technology and decisions that power it.</li>
          <li><Link href="/docs/developers" className="text-cyan-400 hover:underline">Ergo Platform Overview</Link>: Explore the key features of Ergo, including ErgoScript, the eUTXO model, Autolykos, NiPoPoWs, and more.</li>
          <li><Link href="/docs/introduction/faq" className="text-cyan-400 hover:underline">FAQ</Link>: Find answers to the most common questions about Ergo.</li>
                      <li>Introductory Resources: Check out the recommended introductory videos, courses, and resources in the <Link href="/docs/developers" className="text-cyan-400 hover:underline">Developer Resources</Link> section.</li>
          <li>Chatbots: Try the <a href="https://ergobot.io/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">General Ergo Chatbot</a> or <a href="https://ergoscriptbot.io/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoScript Chatbot</a> for quick info. For complex queries, refer to docs or the community.</li>
        </ul>
      </div>

      {/* Community Engagement Section */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Users className="w-6 h-6 text-cyan-400" /> Community & Collaboration
        </h2>
        <p className="text-gray-300 mb-4">Engaging with the Ergo community and collaborating with other students and developers can greatly enhance your learning experience. Here are some ways to get involved:</p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Connect with the Community: Join the <a href="https://discord.gg/ergo-platform-668903786361651200" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo Discord</a>, participate in hackathons, and explore contribution opportunities.</li>
          <li><a href="https://ergonaut.space/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergonaut Space</a>: Community-driven wiki with insights and information about Ergo.</li>
          <li><a href="https://www.ergoforum.org/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo Forum</a>: Participate in discussions, ask questions, and share your knowledge.</li>
          <li><a href="https://github.com/ergoplatform" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">GitHub Repositories</a>: Explore official Ergo repos and contribute to open-source projects.</li>
        </ul>
        <p className="text-gray-400 text-sm mt-4">Remember, learning is a continuous journey, and the Ergo ecosystem is constantly evolving. Stay curious, engage with the community, and don't hesitate to ask questions or seek guidance from experienced developers and contributors.</p>
      </div>

      {/* Learning ErgoScript Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Code className="w-6 h-6 text-orange-400" /> Learning ErgoScript
        </h2>
        <p className="text-gray-300 mb-4">ErgoScript is a powerful scripting language that enables the creation of flexible crypto-contracts based on Sigma Protocols, a class of Zero-Knowledge Proofs. Learning ErgoScript is crucial for understanding and developing on the Ergo blockchain. Here are some resources to help you get started:</p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li><Link href="/docs/developers/ergoscript-languages" className="text-cyan-400 hover:underline">ErgoScript Primer</Link>: A quick introduction to ErgoScript and its core concepts.</li>
          <li><Link href="/docs/developers/ergoscript-languages" className="text-cyan-400 hover:underline">Sigma Language</Link>: Learn about the Sigma Language, the foundation of ErgoScript.</li>
          <li><Link href="/docs/developers/ergoscript-languages/accessing-boxes" className="text-cyan-400 hover:underline">Creating a Simple Pay-to-Script App</Link>: Hands-on tutorial for creating a simple pay-to-script application.</li>
          <li>Experimenting: Try <a href="https://escript.online/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">escript.online</a>, <a href="https://plutomonkey.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">PlutoMonkey</a>, <a href="https://scastie.scala-lang.org/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Scastie</a>, <a href="https://kiosk.ergo.watch/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Kiosk</a>, and <a href="https://github.com/anon-real/ergo-puppet" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo-Puppet</a>.</li>
          <li>Tooling: Explore <a href="https://github.com/ergoplatform/ergo" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">compilers</a>, <a href="https://github.com/GuapSwap/vscode-ergoscript-language-support" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">language support</a>, and <a href="https://github.com/ergoplatform/ergo-playgrounds" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">frameworks</a>.</li>
          <li>Courses: Consider <a href="https://deco-education.github.io/deco-docs/docs/category/into-the-woods" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">DeCo Education: Into the Woods</a> and other recommended courses to deepen your understanding.</li>
        </ul>
      </div>
    </>
  );
} 