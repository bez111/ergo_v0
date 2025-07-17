import React from "react";
import Link from "next/link";
import { GraduationCap, BookOpen, Cpu, Database, Code, Network, Server, Terminal, Cloud, Lock, Shield, Users, MessageCircle, GitBranch, ExternalLink, Zap, Layers, Globe, Wrench, Key } from "lucide-react";

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
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Cpu className="w-6 h-6 text-cyan-400" /> Intersections with Computer Science
        </h2>
        <p className="text-gray-300 mb-4">As a student, you can leverage your academic knowledge in computer science and apply it to the innovative field of blockchain development, particularly with the Ergo platform. Explore how various CS disciplines intersect with blockchain tasks:</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold flex items-center gap-2 mb-1"><Database className="w-5 h-5 text-orange-400" /> Databases</h3>
            <p className="text-gray-300 mb-3 text-sm">Utilize your skills in relational and non-relational databases to build blockchain indexers and manage transactional data. The UTXO model in Ergo offers a unique perspective on data management and state representation.</p>
            <h3 className="font-semibold flex items-center gap-2 mb-1"><Code className="w-5 h-5 text-cyan-400" /> Programming Languages</h3>
            <p className="text-gray-300 mb-3 text-sm">Develop smart contracts using ErgoScript. Leverage your knowledge of functional programming, DSLs, and language design to contribute to ErgoScript and its compilers.</p>
            <h3 className="font-semibold flex items-center gap-2 mb-1"><Network className="w-5 h-5 text-green-400" /> Networks</h3>
            <p className="text-gray-300 mb-3 text-sm">Engage with the P2P layer of Ergo, drawing on distributed systems and network architecture. Understanding consensus and network protocols will help you optimize and secure the network.</p>
            <h3 className="font-semibold flex items-center gap-2 mb-1"><Terminal className="w-5 h-5 text-yellow-400" /> Systems Programming</h3>
            <p className="text-gray-300 mb-3 text-sm">Explore low-level operations of Ergo, focusing on ErgoTree script execution and the sigmastate-interpreter. Deepen your understanding of blockchain systems programming.</p>
            <h3 className="font-semibold flex items-center gap-2 mb-1"><Key className="w-5 h-5 text-pink-400" /> Compiler Design</h3>
            <p className="text-gray-300 mb-3 text-sm">Apply language and compiler design principles to create or enhance smart contract tooling for ErgoScript, from high-level code to low-level ErgoTree.</p>
          </div>
          <div>
            <h3 className="font-semibold flex items-center gap-2 mb-1"><Server className="w-5 h-5 text-orange-400" /> Backend Systems</h3>
            <p className="text-gray-300 mb-3 text-sm">Develop API endpoints for Ergo nodes, using server-side programming and database integration to support dApps and blockchain interaction.</p>
            <h3 className="font-semibold flex items-center gap-2 mb-1"><Cloud className="w-5 h-5 text-cyan-400" /> DevOps</h3>
            <p className="text-gray-300 mb-3 text-sm">Deploy and maintain dApp infrastructure on Ergo using automation, containerization, and cloud services for robust, scalable solutions.</p>
            <h3 className="font-semibold flex items-center gap-2 mb-1"><Shield className="w-5 h-5 text-green-400" /> Cryptography</h3>
            <p className="text-gray-300 mb-3 text-sm">Design secure transactions and privacy features by implementing advanced cryptographic algorithms. Ergo's use of Sigma protocols is a rich area for exploration.</p>
            <h3 className="font-semibold flex items-center gap-2 mb-1"><Lock className="w-5 h-5 text-yellow-400" /> Security</h3>
            <p className="text-gray-300 mb-3 text-sm">Implement privacy-enhancing protocols using cryptographic techniques like Sigma protocols and zero-knowledge proofs to ensure transaction security and privacy.</p>
            <h3 className="font-semibold flex items-center gap-2 mb-1"><Globe className="w-5 h-5 text-pink-400" /> Operating Systems</h3>
            <p className="text-gray-300 mb-3 text-sm">Contribute to node infrastructure and performance by addressing concurrency, resource management, and low-level system interactions. Storage rent in Ergo is a unique case study.</p>
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
          <li><Link href="/Docs/why-ergo" className="text-cyan-400 hover:underline">Why Ergo?</Link>: Get a concise overview of Ergo, its standout features, and the technology and decisions that power it.</li>
          <li><Link href="/Docs/developers" className="text-cyan-400 hover:underline">Ergo Platform Overview</Link>: Explore the key features of Ergo, including ErgoScript, the eUTXO model, Autolykos, NiPoPoWs, and more.</li>
          <li><Link href="/Docs/introduction/faq" className="text-cyan-400 hover:underline">FAQ</Link>: Find answers to the most common questions about Ergo.</li>
          <li>Introductory Resources: Check out the recommended introductory videos, courses, and resources in the <Link href="/Docs/developers/developers-resources" className="text-cyan-400 hover:underline">Developer Resources</Link> section.</li>
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
          <li><Link href="/Docs/introduction/ergoscript-primer" className="text-cyan-400 hover:underline">ErgoScript Primer</Link>: A quick introduction to ErgoScript and its core concepts.</li>
          <li><Link href="/Docs/introduction/sigma-lang" className="text-cyan-400 hover:underline">Sigma Language</Link>: Learn about the Sigma Language, the foundation of ErgoScript.</li>
          <li><Link href="/Docs/introduction/p2s" className="text-cyan-400 hover:underline">Creating a Simple Pay-to-Script App</Link>: Hands-on tutorial for creating a simple pay-to-script application.</li>
          <li>Experimenting: Try <a href="https://escript.online/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">escript.online</a>, <a href="https://plutomonkey.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">PlutoMonkey</a>, <a href="https://scastie.scala-lang.org/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Scastie</a>, <a href="https://kiosk.ergo.watch/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Kiosk</a>, and <a href="https://github.com/anon-real/ergo-puppet" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo-Puppet</a>.</li>
          <li>Tooling: Explore <a href="https://github.com/ergoplatform/ergo" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">compilers</a>, <a href="https://github.com/GuapSwap/vscode-ergoscript-language-support" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">language support</a>, and <a href="https://github.com/ergoplatform/ergo-playgrounds" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">frameworks</a>.</li>
          <li>Courses: Consider <a href="https://deco-education.github.io/deco-docs/docs/category/into-the-woods" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">DeCo Education: Into the Woods</a> and other recommended courses to deepen your understanding.</li>
        </ul>
      </div>
    </>
  );
} 