"use client";

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any */
import React from "react";
import { Link } from "@/i18n/navigation";
import { Server, Globe, Monitor, Smartphone, Key, User, Wrench, BookOpen, Rocket, Package, Box, MessageCircle, HelpCircle, TestTube, Link2, Users, Cpu, Code, Layers, FileText, Database, Zap, FileQuestion, ExternalLink } from "lucide-react";

// --- Development Stack Cards ---
const justGettingStartedCards = [
  {
    title: "Introduction",
    content: "Overview of Ergo development and ecosystem.",
    icon: <BookOpen className="w-10 h-10 text-cyan-400" />,
    url: "/docs/developers/tooling/introduction"
  },
  {
    title: "Beginner",
    content: "Just testing the waters? Not sure where to start?",
    icon: <User className="w-10 h-10 text-cyan-400" />,
    url: "/docs/developers/tooling/beginner"
  },
  {
    title: "Starter Tutorial",
    content: "Step-by-step guide for your first Ergo dApp.",
    icon: <Rocket className="w-10 h-10 text-orange-400" />,
    url: "/docs/developers/tooling/starter-tutorial"
  },
  {
    title: "Basics Tutorial",
    content: "Generate keys and address, send and receive payments.",
    icon: <Key className="w-10 h-10 text-yellow-400" />,
    url: "/docs/developers/tooling/basics-tutorial"
  },
];
const frameworksToolsCards = [
  {
    title: "Starter Tutorial",
    content: "Step-by-step guide for your first Ergo dApp.",
    icon: <Rocket className="w-10 h-10 text-orange-400" />,
    url: "/docs/developers/tooling/starter-tutorial"
  },
  {
    title: "Frameworks",
    content: "Jump straight to an overview of all frameworks",
    icon: <Wrench className="w-10 h-10 text-orange-400" />,
    url: "/docs/developers/tooling/frameworks"
  }
];
const deployCards = [
  {
    title: "Browser",
    content: "Interact with users in browser",
    icon: <Globe className="w-10 h-10 text-orange-400" />,
    url: "/docs/developers/tooling/browser"
  },
  {
    title: "Desktop",
    content: "Create a local application.",
    icon: <Monitor className="w-10 h-10 text-blue-400" />,
    url: "/docs/developers/tooling/desktop"
  },
  {
    title: "Mobile",
    content: "Creating a mobile app for Android or iOS.",
    icon: <Smartphone className="w-10 h-10 text-green-400" />,
    url: "/docs/developers/tooling/mobile"
  },
  {
    title: "Server",
    content: "Interact with the blockchain locally or via a remote server.",
    icon: <Server className="w-10 h-10 text-cyan-400" />,
    url: "/docs/developers/tooling/server"
  },
];
function Card({ title, content, icon, url }: { title: string; content: string; icon: React.ReactNode; url: string }) {
  return (
    <Link
      href={url}
      className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[160px] cursor-pointer group relative"
    >
      <div className="flex items-center gap-4 mb-3">
        {icon}
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-300 leading-relaxed mb-4">{content}</p>
      <div className="font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3 text-cyan-400 hover:underline">Learn more</div>
    </Link>
  );
}
// --- Introduction Data (from introduction/page.tsx) ---
const resourcesCards: any[] = [];
const baseResources = resourcesCards.filter(x => x.title !== "Sigmaverse" && x.title !== "Come chat!");
const communityCards = [
  ...resourcesCards.filter(x => x.title === "Sigmaverse" || x.title === "Come chat!"),
  {
    title: "DeCo Education",
    content: "Educational initiative for learning dApp development on Ergo. Guides, tutorials, and community support.",
    icon: <BookOpen className="w-8 h-8 text-green-400" />,
    url: "https://deco-education.github.io/deco-docs/docs/intro",
    external: true
  },
  {
    title: "ErgoTutorials",
    content: "A curated collection of tutorials and guides for Ergo developers of all levels.",
    icon: <BookOpen className="w-8 h-8 text-orange-400" />,
    url: "https://ergotutorials.com/",
    external: true
  }
];
const scriptsTools = [
  { title: "Miner rewards script", url: "https://github.com/lorien/ergotools", content: "Find unspent miner rewards and form withdrawal transactions." },
  { title: "Ergo P2S Playground", url: "https://wallet.plutomonkey.com/p2s/?source=dHJ1ZQ==", content: "Web tool to get addresses for custom scripts." },
  { title: "ergo-monitoring", url: "https://github.com/SabaunT/ergo-monitoring", content: "Debug service for blockchain state and monitoring." },
  { title: "Transaction builder", url: "https://thierrym1212.github.io/txbuilder/", content: <><span>UI for composing, editing, and signing Ergo JSON transactions. </span><a href="https://github.com/ThierryM1212/transaction-builder/" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://youtu.be/0VhfY7osT2k" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Video</a></> },
  { title: "ergo-puppet", url: "https://github.com/dav009/ergo-puppet", content: "Automation and testing tool for Ergo dApps." }
];
const testVectors = [
  { title: "Ergo transaction serialization", url: "https://git.io/fjqwX" },
  { title: "Signature scheme", url: "https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/interpreter/shared/src/test/scala/sigmastate/crypto/SigningSpecification.scala" }
];
const analysisTools = [
  { title: "Ergo Vision", url: "https://github.com/CryptoCream/ErgoVision", content: "Wallet visualization and transaction analysis tool." },
  { title: "Ergo Intelligence", url: "https://github.com/Eeysirhc/ergo_intelligence" },
  { title: "Ergo.watch", url: "https://ergo.watch" },
  { title: "ErgoStats", url: "https://github.com/ach2swift/ErgoStats" },
  { title: "Ergo-monitoring", url: "https://github.com/SabaunT/ergo-monitoring" },
  { title: "Ergo Utils", url: "https://github.com/anon-real/ErgoUtils" },
  { title: "Ergo Tokenautics", url: "https://github.com/babygrenade/ergo-tokenautics" },
  { title: "Tidy Ergo", url: "https://github.com/Eeysirhc/tidyergo" },
  { title: "Ergo Analytics", url: "https://github.com/gsblabsio/ergo-analytics" }
];
const overviewArticles = [
  { title: "Blockchain for Beginners: What is a Blockchain?", url: "https://medium.com/@ergoplatform/blockchain-for-beginners-what-is-a-blockchain-23f3b66f7c62", external: true },
  { title: "Finding Freedom with Ergo", url: "https://sujectiveobjectivity.substack.com/p/finding-freedom-with-ergo", external: true },
  { title: "ERGO Deep Dive: The Road to Top 10 Cryptocurrency", url: "https://thecryptodrip.com/ergo-deep-dive/", external: true }
];
const devArticles = [
  { title: "Learning blockchains like Cardano and Ergo", url: "https://www.youtube.com/watch?v=HDn49bToTMI", external: true },
  { title: "Side tooling for building dApps on Ergo", url: "https://dav009.medium.com/ergo-101-side-tooling-for-building-dapps-on-ergo-c71889d60826", external: true },
  { title: "DeCo Education: DApp Components - Backend", url: "https://deco-education.github.io/deco-docs/docs/into-the-woods/trail2-ergo-coding/dapp-components", external: true }
];
const courses = [
  {
    title: "DeCo Laymens Course",
    content: "A beginner-friendly video course introducing the core concepts of Ergo, its unique features, and how to get started as a developer. Perfect for those new to blockchain or Ergo.",
    url: "https://www.youtube.com/watch?v=SAWeW6wajEw&list=PLopsKGshj0B6C1mg6RpDsj0rhYxam3_RZ",
    external: true
  },
  {
    title: "Ergo Blockchain Crash Course",
    content: "A comprehensive video series covering the fundamentals of the Ergo blockchain, its architecture, consensus, and practical use cases. Great for developers and enthusiasts alike.",
    url: "https://www.youtube.com/playlist?list=PL8-KVrs6vXLTVXGwmYXjOBRx3VymB4Vm2",
    external: true
  },
  {
    title: "DeCo Intro Lessons",
    content: "Step-by-step lessons guiding you through building your first mobile dApp on Android or iOS using Ergo tools and best practices. Includes hands-on examples and explanations.",
    url: "https://www.youtube.com/watch?v=qR0_k7VH6KI&list=PLopsKGshj0B4BpMoSMh5hQk8gVfWk-si6",
    external: true
  }
];
const frameworks = [
  { title: "AppKit", content: "JVM-based SDK for building Ergo dApps in Scala, Java, or Kotlin. Provides full blockchain and transaction access.", icon: <Cpu className="w-8 h-8 text-blue-400" />, url: "/docs/developers/tooling/appkit" },
  { title: "Fleet", content: "Modern TypeScript/JavaScript library for creating and signing Ergo transactions in web and Node.js apps.", icon: <Code className="w-8 h-8 text-green-400" />, url: "/docs/developers/tooling/fleet" },
  { title: "Mosaik", content: "JSON-based UI framework for building cross-platform dApps, rendered natively in supported wallets.", icon: <Layers className="w-8 h-8 text-orange-400" />, url: "/docs/developers/tooling/mosaik" },
  { title: "Headless dApp Framework", content: "Rust toolkit for building backend-only (headless) dApps and off-chain logic.", icon: <Wrench className="w-8 h-8 text-yellow-400" />, url: "/docs/developers/tooling/headless" },
  { title: "RustKit", content: "(WIP) High-level Rust library for composing and signing Ergo transactions, built on sigma-rust.", icon: <Wrench className="w-8 h-8 text-yellow-400" />, url: "/docs/developers/tooling/rustkit" },
  { title: "JDE", content: "JSON dApp Environment: a lightweight environment for running JSON-based dApps.", icon: <FileText className="w-8 h-8 text-cyan-400" />, url: "/docs/developers/tooling/jde" }
];
const interpreters = [
  { title: "sigmastate-interpreter", content: "Reference JVM implementation of ErgoScript and ErgoTree, used in the core node and AppKit.", icon: <Cpu className="w-8 h-8 text-blue-400" />, url: "/docs/developers/tooling/programming-languages/jvm" },
  { title: "Sigma-Rust", content: "Alternative Rust implementation of ErgoTree interpreter and transaction tools. Useful for cross-platform and WASM.", icon: <Wrench className="w-8 h-8 text-yellow-400" />, url: "/docs/developers/tooling/sigma-rust" },
  { title: "Sigma.JS", content: "JavaScript/TypeScript library for parsing and working with ErgoTree scripts in web apps.", icon: <Code className="w-8 h-8 text-green-400" />, url: "/docs/developers/tooling/sigmajs" }
];
const libraries = [
  { title: "GetBlok Plasma", content: "AppKit-based library for integrating AVL Trees (Plasma) into off-chain code for scalable data storage.", url: "../lib/plasma.md" },
  { title: "Scrypto", content: "Comprehensive cryptographic toolkit for secure key management and cryptography in Ergo apps.", url: "../lib/scrypto.md" },
  { title: "EIP12-types", content: "TypeScript static typing library for working with EIP-12 dApp connector messages and objects.", url: "../lib/eip12-types.md" }
];
const utilities = [
  { title: "Node & Explorer Tools", content: "Tools for interacting with Ergo nodes and blockchain explorers via API or UI.", url: "explorer.md" },
  { title: "APIs", content: "REST and WebSocket APIs for accessing blockchain data, submitting transactions, and more.", url: "../stack/api.md" }
];
const simpleExamples = [
  { title: "Creating a simple *pay-to-script* app", content: "Step-by-step example of a basic pay-to-script (P2S) contract and transaction.", url: "../scs/p2s.md" },
  { title: "Creating a signature", content: "How to create and verify a multi-signature (m-of-n) contract on Ergo.", url: "../scs/sigma/3-out-of-5.md" },
  { title: "Sending a chained transaction", content: "Example of composing and sending chained transactions for advanced dApps.", url: "../anatomy/transactions/chained.md" }
];
function DevelopmentStackCardGrid({ items, icon }: { items: any[]; icon?: boolean }) {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-12">
      {items.map((item) => {
        const isExternal = item.url?.startsWith("http");
        return isExternal ? (
          <a
            key={item.title}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[160px] cursor-pointer group relative"
          >
            <div className="flex items-center gap-4 mb-3">
              {item.icon && icon && item.icon}
              <h3 className="text-xl font-bold">{item.title}</h3>
            </div>
            {item.content && <p className="text-gray-300 leading-relaxed mb-4">{item.content}</p>}
            <div className="font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3 text-cyan-400 hover:underline">Learn more</div>
          </a>
        ) : (
          <Link
            key={item.title}
            href={item.url}
            className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[160px] cursor-pointer group relative"
          >
            <div className="flex items-center gap-4 mb-3">
              {item.icon && icon && item.icon}
              <h3 className="text-xl font-bold">{item.title}</h3>
            </div>
            {item.content && <p className="text-gray-300 leading-relaxed mb-4">{item.content}</p>}
            <div className="font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3 text-cyan-400 hover:underline">Learn more</div>
          </Link>
        );
      })}
    </div>
  );
}
function DevelopmentStackSimpleList({ items }: { items: any[] }) {
  return (
    <ul className="list-disc pl-6 text-gray-300 mb-6">
      {items.map((item) => (
        <li key={item.title} className="mb-2">
          <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
            {item.title}
            <ExternalLink className="inline w-4 h-4 ml-1 align-baseline" />
          </a>
          {item.content && (
            <div className="text-gray-400 text-sm ml-2">{item.content}</div>
          )}
        </li>
      ))}
    </ul>
  );
}
// --- Combined Page ---
export default function DevelopmentStackPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Development Stack & Introduction
      </h1>
      <p className="text-lg text-gray-300 mb-8">
        Overview of Ergo development, tools, libraries, SDKs, frameworks and utilities developers can use to interact with the blockchain, build their applications, and display them to users.
      </p>
      <div className="mb-6">
        <Link
          href="/docs/developers/tooling"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path></svg>
          Back
        </Link>
      </div>
      {/* Development Stack Sections */}
      {/* Just Getting Started section removed */}
      <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">Frameworks & Tools</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {frameworksToolsCards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>
      <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">Where You’ll Deploy</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {deployCards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>
      {/* Introduction Sections */}
      <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">ErgoScript Interpreter/Compilers</h2>
      <DevelopmentStackCardGrid items={interpreters} icon />
      <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">Libraries</h2>
      <DevelopmentStackCardGrid items={libraries} />
      <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">Simple Examples</h2>
      <DevelopmentStackCardGrid items={simpleExamples} />
      <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">Utilities</h2>
      <DevelopmentStackCardGrid items={utilities} />
      <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">Test Vectors</h2>
      <DevelopmentStackSimpleList items={testVectors} />
      <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">Analysis Tools</h2>
      <DevelopmentStackSimpleList items={analysisTools} />
      <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">Community & Portals</h2>
      <DevelopmentStackCardGrid items={communityCards} icon />
      <div className="mb-10">
        <p className="text-gray-300 mb-2">
          Join our <a href="https://discord.gg/7kWWQeMCwe" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Discord server</a> dev-support (and regular <a href="ergohack.md" className="text-cyan-400 hover:underline">Hackathons</a>). Or search the chats via <a href="https://www.linen.dev/s/ergo" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">linen.dev/d/ergo</a>.
        </p>
      </div>
    </>
  );
} 