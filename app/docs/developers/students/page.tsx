import React from "react";
import Link from "next/link";
import { GraduationCap, BookOpen, Cpu, Database, Code, Network, Terminal, Shield, Key, Users, CheckCircle, ChevronRight, ExternalLink } from "lucide-react";

export default function Students() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Students
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          If you're a student interested in learning about the Ergo blockchain and its ecosystem, this guide is designed to provide you with a comprehensive introduction and valuable resources to kickstart your journey.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/developers"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <Code className="w-5 h-5 mr-2" /> Developer Resources
          </Link>
          <Link
            href="https://discord.com/invite/ergo-platform-668903786361651200"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <Users className="w-5 h-5 mr-2" /> Join Community
          </Link>
        </div>
      </div>

      {/* Intersections with Computer Science */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Cpu className="w-6 h-6 text-orange-400" /> Intersections with Computer Science
        </h2>
        <p className="text-gray-300 mb-6">
          Bridge your academic knowledge with blockchain innovation. Explore how various CS disciplines intersect with Ergo development.
        </p>
      </div>

      {/* CS Disciplines Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Database className="w-5 h-5 text-orange-400" /> Databases
          </h3>
          <p className="text-gray-300 mb-4">
            Build blockchain indexers and manage transactional data using your database skills. The UTXO model offers unique perspectives on data management.
          </p>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Code className="w-5 h-5 text-cyan-400" /> Programming Languages
          </h3>
          <p className="text-gray-300 mb-4">
            Develop smart contracts using ErgoScript. Apply functional programming, DSLs, and language design to contribute to ErgoScript compilers.
          </p>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Network className="w-5 h-5 text-green-400" /> Networks
          </h3>
          <p className="text-gray-300 mb-4">
            Engage with Ergo's P2P layer using distributed systems knowledge. Understand consensus and network protocols for optimization.
          </p>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-yellow-400" /> Systems Programming
          </h3>
          <p className="text-gray-300 mb-4">
            Explore low-level Ergo operations, ErgoTree execution, and the sigmastate-interpreter for blockchain systems programming.
          </p>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-purple-400" /> Cryptography
          </h3>
          <p className="text-gray-300 mb-4">
            Design secure transactions and privacy features. Ergo's Sigma protocols offer rich opportunities for cryptographic exploration.
          </p>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Key className="w-5 h-5 text-pink-400" /> Compiler Design
          </h3>
          <p className="text-gray-300 mb-4">
            Apply language and compiler design principles to create smart contract tooling for ErgoScript and ErgoTree.
          </p>
        </div>
      </div>

      {/* Getting Started Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-orange-400" /> Getting Started
        </h2>
        <p className="text-gray-300 mb-4">Before diving into the technical aspects, it's essential to understand the fundamental concepts and principles behind Ergo. Here are some recommended resources:</p>
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
            <span><Link href="/docs/why-ergo" className="text-cyan-400 hover:underline">Why Ergo?</Link>: Get a concise overview of Ergo, its standout features, and the technology and decisions that power it.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
            <span><Link href="/docs/developers" className="text-cyan-400 hover:underline">Ergo Platform Overview</Link>: Explore the key features of Ergo, including ErgoScript, the eUTXO model, Autolykos, NiPoPoWs, and more.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
            <span><Link href="/docs/introduction/faq" className="text-cyan-400 hover:underline">FAQ</Link>: Find answers to the most common questions about Ergo.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
            <span>Introductory Resources: Check out the recommended introductory videos, courses, and resources in the <Link href="/docs/developers" className="text-cyan-400 hover:underline">Developer Resources</Link> section.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
            <span>Chatbots: Try the <a href="https://ergobot.io/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">General Ergo Chatbot</a> or <a href="https://ergoscriptbot.io/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoScript Chatbot</a> for quick info. For complex queries, refer to docs or the community.</span>
          </li>
        </ul>
      </div>

      {/* Community Engagement Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Users className="w-6 h-6 text-cyan-400" /> Community & Collaboration
        </h2>
        <p className="text-gray-300 mb-4">Engaging with the Ergo community and collaborating with other students and developers can greatly enhance your learning experience. Here are some ways to get involved:</p>
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
            <span>Connect with the Community: Join the <a href="https://discord.gg/ergo-platform-668903786361651200" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo Discord</a>, participate in hackathons, and explore contribution opportunities.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
            <span><a href="https://ergonaut.space/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergonaut Space</a>: Community-driven wiki with insights and information about Ergo.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
            <span><a href="https://www.ergoforum.org/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo Forum</a>: Participate in discussions, ask questions, and share your knowledge.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
            <span><a href="https://github.com/ergoplatform" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">GitHub Repositories</a>: Explore official Ergo repos and contribute to open-source projects.</span>
          </li>
        </ul>
        <p className="text-gray-400 text-sm mt-4">Remember, learning is a continuous journey, and the Ergo ecosystem is constantly evolving. Stay curious, engage with the community, and don't hesitate to ask questions or seek guidance from experienced developers and contributors.</p>
      </div>

      {/* Learning ErgoScript Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Code className="w-6 h-6 text-orange-400" /> Learning ErgoScript
        </h2>
        <p className="text-gray-300 mb-4">ErgoScript is a powerful scripting language that enables the creation of flexible crypto-contracts based on Sigma Protocols, a class of Zero-Knowledge Proofs. Learning ErgoScript is crucial for understanding and developing on the Ergo blockchain. Here are some resources to help you get started:</p>
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
            <span><Link href="/docs/developers/ergoscript-languages" className="text-cyan-400 hover:underline">ErgoScript Primer</Link>: A quick introduction to ErgoScript and its core concepts.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
            <span><Link href="/docs/developers/ergoscript-languages" className="text-cyan-400 hover:underline">Sigma Language</Link>: Learn about the Sigma Language, the foundation of ErgoScript.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
            <span><Link href="/docs/developers/ergoscript-languages/accessing-boxes" className="text-cyan-400 hover:underline">Creating a Simple Pay-to-Script App</Link>: Hands-on tutorial for creating a simple pay-to-script application.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
            <span>Experimenting: Try <a href="https://escript.online/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">escript.online</a>, <a href="https://plutomonkey.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">PlutoMonkey</a>, <a href="https://scastie.scala-lang.org/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Scastie</a>, <a href="https://kiosk.ergo.watch/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Kiosk</a>, and <a href="https://github.com/anon-real/ergo-puppet" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo-Puppet</a>.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
            <span>Tooling: Explore <a href="https://github.com/ergoplatform/ergo" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">compilers</a>, <a href="https://github.com/GuapSwap/vscode-ergoscript-language-support" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">language support</a>, and <a href="https://github.com/ergoplatform/ergo-playgrounds" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">frameworks</a>.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
            <span>Courses: Consider <a href="https://deco-education.github.io/deco-docs/docs/category/into-the-woods" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">DeCo Education: Into the Woods</a> and other recommended courses to deepen your understanding.</span>
          </li>
        </ul>
      </div>
    </>
  );
} 