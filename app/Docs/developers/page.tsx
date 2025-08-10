import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Info, BookOpen, Code, Users, ExternalLink, Zap, Key, Layers, Shield, Wrench, ChevronRight, Cpu, Globe, FileText, Terminal, Book, MessageCircle
} from "lucide-react";

const cards1 = [
  {
    title: "📚 DeCo EU Layman Class - Basics of eUTxO",
    content: "A great introductory course aimed at the layman from Decentralised Collaboration.",
    url: "https://www.youtube.com/watch?v=SAWeW6wajEw"
  },
  {
    title: "🧾 Learning Ergo 101: eUTXO Explained for Human Beings",
    content: "How Ergo’s eUTXO model works, with simple analogies, boxes, and real use cases.",
    url: "https://dav009.medium.com/learning-ergo-101-blockchain-paradigm-eutxo-c90b0274cf5e"
  },
];

const cards2 = [
  {
    title: "📕 Side Tooling for Building dApps on Ergo",
    url: "https://dav009.medium.com/ergo-101-side-tooling-for-building-dapps-on-ergo-c71889d60826",
    content: "Building functional dApps on Ergo requires more than just smart contracts and transactions."
  },
  {
    title: "📕 DeCo Education: DApp Components - Backend",
    url: "https://deco-education.github.io/deco-docs/docs/into-the-woods/trail2-ergo-coding/dapp-components",
    content: "Understand the backend pillars of a DApp: explorers, transactions, and bots."
  },
];

const cards3 = [
  {
    title: "📚 DeCo Intro Lessons",
    content: "Programming basics for the layman from Decentralised Collaboration (DeCo).",
    url: "https://www.youtube.com/watch?v=qR0_k7VH6KI&list=PLopsKGshj0B4BpMoSMh5hQk8gVfWk-si6"
  },
  {
    title: "📚 DeCo Education Docs",
    content: "DeCo steps you through eUTXO & NFTs, dApp Development, and Multi-Stage Transactions & Smart Contracts.",
    url: "https://deco-education.github.io/deco-docs/docs/category/into-the-woods"
  },
  {
    title: "📹 Ergo Blockchain Crash Course",
    content: "Ergo crash course presented by developer Luca (lgd), covering the eUTXO model, anatomy of Ergo, and more.",
    url: "https://www.youtube.com/playlist?list=PL8-KVrs6vXLTVXGwmYXjOBRx3VymB4Vm2"
  }
];

const communityCards = [
  {
    title: "Come Chat!",
    content: "Join the action on Discord",
    image: "/assets/img/dev-grid/discord.png",
    url: "https://discord.gg/ergo-platform-668903786361651200"
  },
  {
    title: "ERGOHACK",
    content: "We host regular hackathons which are a great opportunity to get involved.",
    image: "/assets/img/grid/05.png",
    url: "/events/ergohack.md"
  },
  {
    title: "Contribute",
    content: "See the Contributing Guidelines for information on bounties and grants.",
    image: "/assets/img/grid/05.png",
    url: "/contribute/standards/guidelines.md"
  }
];

export default function DevelopersGuide() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Ergo Developer Ecosystem
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Build, experiment, and collaborate on Ergo: a next-generation blockchain platform for open finance, privacy, and resilient, community-owned infrastructure.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/Docs/ecosystem/tooling"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <Wrench className="w-5 h-5 mr-2" /> Start Building
          </Link>
          <Link
            href="/Docs/why-ergo"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <Shield className="w-5 h-5 mr-2" /> Explore Key Features
          </Link>
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Info className="w-6 h-6 text-cyan-400" /> The Ergo Developer Vision
        </h2>
        <p className="text-gray-300">
          Whether you're a seasoned blockchain developer or just starting out, Ergo provides a robust, open platform for building secure, efficient, and decentralized applications. Leverage advanced scripting, privacy, and a vibrant community to bring your ideas to life.
        </p>
      </div>

      {/* Key Features Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Key className="w-5 h-5 text-cyan-400" /> Key Features
        </h3>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li><b>ErgoScript</b>: A simple high-level language that enables clear descriptions of contractual logic. Supports flexible crypto-contracts based on Σ-protocols (Zero-Knowledge Proofs), allowing for privacy-preserving transactions and complex smart contract functionality.</li>
          <li><b>Extended UTXO Model (eUTXO)</b>: The <Link href="/Docs/introduction/eutxo" className="text-cyan-400 hover:underline">eUTXO</Link> model allows each UTXO to carry arbitrary data and be protected by an arbitrary predicate or spending condition. Enables representation of various assets, tokens, and smart contract states within the blockchain.</li>
          <li><b>Mining with Autolykos</b>: Ergo utilizes <Link href="/Docs/introduction/autolykos" className="text-cyan-400 hover:underline">Autolykos</Link>, an efficient, ASIC-resistant PoW algorithm designed for a fair launch. <span className="text-xs">Learn about Ergo's <Link href="/Docs/introduction/emission" className="text-cyan-400 hover:underline">Emission</Link> schedule.</span></li>
          <li><b>NiPoPoWs</b>: <Link href="/Docs/introduction/nipopows" className="text-cyan-400 hover:underline">Non-Interactive Proofs of Proof-of-Work</Link> enable efficient light clients, log-space mining, and trustless sidechains.</li>
          <li><b>Storage Rent</b>: Also known as <Link href="/Docs/introduction/storage-rent" className="text-cyan-400 hover:underline">demurrage</Link>, this mechanism mitigates blockchain bloat and turns it into a profitable venture by charging for on-chain storage.</li>
          <li><b>Turing-Complete Smart Contracts</b>: Ergo supports <Link href="/Docs/ecosystem/financial/defi/multi-stage-protocols" className="text-cyan-400 hover:underline">Turing-complete smart contracts</Link>, enabling complex on-chain computations.</li>
        </ul>
      </div>

      {/* Resource Cards 1 */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {cards1.map((card, i) => (
          <a key={i} href={card.url} target="_blank" rel="noopener noreferrer" className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 block cursor-pointer group relative">
            <div className="font-semibold text-lg mb-1 text-cyan-300">{card.title}</div>
            {card.content && <div className="text-gray-400 text-sm mb-2">{card.content}</div>}
            <div className="flex items-center text-cyan-300 text-xs font-semibold mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3">Learn more</div>
          </a>
        ))}
      </div>

      {/* Transactional Model Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Layers className="w-5 h-5 text-orange-400" /> Transactional Model
        </h3>
        <p className="text-gray-300 mb-2">Ergo adopts a transactional approach similar to Bitcoin's UTXO model. In this model, transactions utilize and produce single-use entities known as <b>boxes</b>. Every transaction in Ergo represents an atomic state transition, consuming boxes from the state and creating new ones in their place. The eUTXO model allows each UTXO to carry arbitrary data and be protected by an arbitrary predicate (or <b>spending condition</b>). The data can represent various tokens or smart contract states.</p>
        <div className="flex flex-col items-center my-4">
          <a href="/assets/ergo-model.png" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/ergo-model.png" alt="Diagram of Ergo eUTXO transactional model" width={600} height={360} sizes="(max-width: 768px) 100vw, 600px" className="rounded-lg border border-neutral-700 max-w-xs mx-auto h-auto" />
          </a>
          <span className="text-xs text-gray-500 mt-2">This image illustrates the structure and process flow of a blockchain transaction on the Ergo platform using its <b>extended UTXO model</b> (eUTXO).</span>
        </div>
        <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-2">
          <li><Link href="/Docs/introduction/registers" className="text-cyan-400 hover:underline">Registers within Boxes</Link>: Boxes come equipped with multiple registers capable of holding various assets and complex ErgoScript types.</li>
          <li><Link href="/Docs/introduction/tokens" className="text-cyan-400 hover:underline">Assets in Ergo</Link>: Dive deeper into the different assets that can be held within these boxes.</li>
          <li>Ergo also supports advanced <Link href="/Docs/introduction/data-structures" className="text-cyan-400 hover:underline">data structures</Link> like AVL+ Trees for on-chain authenticated data.</li>
        </ul>
      </div>

      {/* Resource Cards 2 */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {cards2.map((card, i) => (
          <a key={i} href={card.url} target="_blank" rel="noopener noreferrer" className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 block cursor-pointer group relative">
            <div className="font-semibold text-lg mb-1 text-cyan-300">{card.title}</div>
            {card.content && <div className="text-gray-400 text-sm mb-2">{card.content}</div>}
            <div className="flex items-center text-cyan-300 text-xs font-semibold mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3">Learn more</div>
          </a>
        ))}
      </div>

      {/* ErgoScript Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Code className="w-5 h-5 text-orange-400" /> ErgoScript
        </h3>
        <p className="text-gray-300 mb-2">ErgoScript is a super-simple subset of Scala, enabling clear descriptions of contractual logic that can be Turing-complete. It is flexible enough to allow for ring signatures, multi-signatures, multiple currencies, atomic swaps, self-replicating scripts, and long-term computation.</p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-2">
          <li><a href="/Docs/introduction/ergoscript-primer" className="text-cyan-400 hover:underline">Quick Primer</a></li>
          <li><a href="/Docs/introduction/ergoscript-key-concepts" className="text-cyan-400 hover:underline">Core Concepts of ErgoScript</a></li>
          <li><a href="/Docs/introduction/sigma-lang" className="text-cyan-400 hover:underline">Sigma Language</a></li>
          <li><a href="/Docs/introduction/p2s" className="text-cyan-400 hover:underline">Creating a Simple Pay-to-Script App</a></li>
        </ul>
        <h4 className="font-semibold text-lg mt-6 mb-2">Experimenting</h4>
        <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-2">
          <li><a href="https://escript.online/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">escript.online</a></li>
          <li><a href="/Docs/introduction/plutomonkey" className="text-cyan-400 hover:underline">PlutoMonkey</a>: Compile any ErgoScript contract into a P2S. <a href="/Docs/introduction/p2s" className="text-cyan-400 hover:underline">Simple examples</a>.</li>
          <li><a href="/Docs/introduction/scastie" className="text-cyan-400 hover:underline">Scastie</a>: Online Scala compiler.</li>
          <li><a href="/Docs/introduction/stack/kiosk" className="text-cyan-400 hover:underline">Kiosk</a>: Web-based UI to explore ErgoScript.</li>
          <li><a href="/Docs/introduction/puppet" className="text-cyan-400 hover:underline">Ergo-Puppet</a>: Advanced tool for off-chain experimentation and unit testing.</li>
        </ul>
        <h4 className="font-semibold text-lg mt-6 mb-2">Tooling</h4>
        <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-2">
          <li><a href="https://github.com/Ergo-Lend/edge" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo Development Generics Elements</a></li>
          <li><a href="https://github.com/GuapSwap/vscode-ergoscript-language-support" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">VSCode ErgoScript Language Support</a></li>
          <li><a href="/Docs/introduction/ergoscala" className="text-cyan-400 hover:underline">ErgoScala</a>: Compiler for Ergo smart contracts.</li>
          <li><a href="/Docs/introduction/compiler" className="text-cyan-400 hover:underline">CLI Compiler</a>: Compile ErgoScript code into an Ergo address.</li>
          <li><a href="/Docs/introduction/flowcards" className="text-cyan-400 hover:underline">FlowCards</a>: Declarative framework for dApps.</li>
          <li><a href="https://github.com/ergoplatform/ergo-playgrounds" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ergo-playgrounds</a>: Run contracts and off-chain code in the browser.</li>
          <li><a href="https://github.com/ross-weir/ergo-script-re/tree/main" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ergo-script-re</a>: Libraries for Ergo Script reverse engineering and analysis.</li>
        </ul>
        <h4 className="font-semibold text-lg mt-6 mb-2">Courses</h4>
        <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-2">
          <li><a href="https://deco-education.github.io/deco-docs/docs/category/into-the-woods" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">DeCo Education: Into the Woods</a>: Comprehensive introduction to the Ergo ecosystem.</li>
          <li><a href="https://docs.google.com/presentation/d/10gYO82z_7qloRrFOcCxTFuzpP40IImPyIKMV2ZFd9M4/edit#slide=id.p" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoScript 101 Crash Course (Slides)</a></li>
          <li><a href="https://www.youtube.com/watch?v=8l2v1asHgyA" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Learn ErgoScript By Example Via The Ergo Playground (Video)</a></li>
          <li><a href="https://github.com/DeCo-Education/ErgoScript-Developer-Course" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">DeCo-Education/ErgoScript-Developer-Course</a>: Advanced course for developers.</li>
        </ul>
        <h4 className="font-semibold text-lg mt-6 mb-2">Tutorials</h4>
        <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-2">
          <li><a href="https://github.com/ergoplatform/ergoscript-by-example" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoScript by Example Repository</a></li>
          <li><a href="https://github.com/anon-real/contract-testing" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Testing Ergo Contracts Off-chain</a></li>
          <li><a href="/Docs/introduction/debugging" className="text-cyan-400 hover:underline">Debugging ErgoScript</a></li>
          <li><a href="https://github.com/jaysee260/ergo-playground" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ergo-playground</a>: Miscellaneous scenarios implemented on Ergo.</li>
        </ul>
        <h4 className="font-semibold text-lg mt-6 mb-2">Boilerplate</h4>
        <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-2">
          <li><a href="https://github.com/kii-dot/scala-play-next-ergo" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">scala-play-next-ergo</a></li>
          <li><a href="https://github.com/dav009/ergo-scala-skeleton-app" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ergo-scala-skeleton-app</a></li>
          <li><a href="https://github.com/SavonarolaLabs/ergo-web-template" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">The Ergo Web Template</a>: Hands-on experience with essential Ergo functionalities.</li>
          <li><a href="https://github.com/kii-dot/ergo-play-boilerplate" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ergo-play-boilerplate</a>: Barebone code to jump into Ergo development quickly.</li>
        </ul>
        <h4 className="font-semibold text-lg mt-6 mb-2">Advanced Tutorials</h4>
        <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-2">
          <li><a href="https://ergoplatform.org/docs/ErgoScript.pdf" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoScript Tutorial (PDF)</a></li>
          <li><a href="https://ergoplatform.org/docs/AdvancedErgoScriptTutorial.pdf" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Advanced ErgoScript Tutorial (PDF)</a></li>
        </ul>
        <h4 className="font-semibold text-lg mt-6 mb-2">Interpreters</h4>
        <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-2">
          <li><a href="/Docs/introduction/sigmastate-interpreter" className="text-cyan-400 hover:underline">Sigmastate-interpreter</a>: For JVM languages, used by AppKit.</li>
          <li><a href="/Docs/introduction/sigma-rust" className="text-cyan-400 hover:underline">Sigma-Rust</a>: ErgoTree interpreter and transaction tools.</li>
        </ul>
      </div>

      {/* Resource Cards 3 */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {cards3.map((card, i) => (
          <a key={i} href={card.url} target="_blank" rel="noopener noreferrer" className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 block cursor-pointer group relative">
            <div className="font-semibold text-lg mb-1 text-cyan-300">{card.title}</div>
            {card.content && <div className="text-gray-400 text-sm mb-2">{card.content}</div>}
            <div className="flex items-center text-cyan-300 text-xs font-semibold mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3">Learn more</div>
          </a>
        ))}
      </div>

      {/* Community & Resources Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Users className="w-5 h-5 text-cyan-400" /> Connect with Our Community
        </h3>
        <div className="grid md:grid-cols-3 gap-6 mb-4">
          {/* Discord */}
          <a
            href="https://discord.gg/ergo-platform-668903786361651200"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-neutral-900/60 border border-neutral-700 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 flex flex-col items-center justify-between min-h-[240px] text-center"
          >
            <Users className="w-10 h-10 text-cyan-400 mb-3" />
            <div className="font-bold text-lg text-white mb-2">Discord</div>
            <div className="text-gray-400 text-sm mb-4">Join the action, ask questions, and connect with the Ergo community in real time.</div>
            <div className="flex items-center justify-center text-cyan-300 text-sm font-semibold mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Join <ExternalLink className="w-4 h-4 ml-1" />
            </div>
          </a>
          {/* ERGOHACK */}
          <a
            href="/events/ergohack.md"
            className="group bg-neutral-900/60 border border-neutral-700 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 flex flex-col items-center justify-between min-h-[240px] text-center"
          >
            <Wrench className="w-10 h-10 text-orange-400 mb-3" />
            <div className="font-bold text-lg text-white mb-2">ERGOHACK</div>
            <div className="text-gray-400 text-sm mb-4">Take part in regular hackathons — a great opportunity to learn, build, and win prizes.</div>
            <div className="flex items-center justify-center text-cyan-300 text-sm font-semibold mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Learn more <ExternalLink className="w-4 h-4 ml-1" />
            </div>
          </a>
          {/* Contribute */}
          <a
            href="/contribute/standards/guidelines.md"
            className="group bg-neutral-900/60 border border-neutral-700 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 flex flex-col items-center justify-between min-h-[240px] text-center"
          >
            <Code className="w-10 h-10 text-green-400 mb-3" />
            <div className="font-bold text-lg text-white mb-2">Contribute</div>
            <div className="text-gray-400 text-sm mb-4">Help improve Ergo: contribute code, docs, or community support. Bounties and grants available!</div>
            <div className="flex items-center justify-center text-cyan-300 text-sm font-semibold mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Learn more <ExternalLink className="w-4 h-4 ml-1" />
            </div>
          </a>
        </div>
      </div>
    </>
  );
} 