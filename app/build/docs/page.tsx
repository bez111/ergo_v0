"use client"

import {
  BookOpen,
  Code,
  Rocket,
  Shield,
  Cpu,
  GitBranch,
  Link as LinkIcon,
  Layers,
  Database,
  Share2,
  Wrench,
  LifeBuoy,
  FileQuestion,
  Github,
  ChevronRight,
  Search,
  ExternalLink,
  Play,
  Brain,
  Users,
  Settings,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const sidebarNav = [
  {
    title: "Getting Started",
    children: [
      { title: "Quickstart", href: "#quickstart", icon: Rocket, description: "Launch your first Ergo app in minutes" },
      { title: "Dev Environment Setup", href: "#setup", icon: Settings, description: "Configure your development environment" },
      { title: "First Ergo DApp", href: "#first-dapp", icon: Code, description: "Build and deploy your first dApp" },
    ],
  },
  {
    title: "Core Concepts",
    children: [
      { title: "eUTXO Model", href: "#eutxo", icon: Layers, description: "Understanding Ergo's account model" },
      { title: "Transactions & Scripts", href: "#transactions", icon: Share2, description: "How transactions work in Ergo" },
      { title: "Fees & Mining", href: "#fees", icon: Zap, description: "Network economics and mining" },
      { title: "Smart Contracts", href: "#contracts", icon: FileQuestion, description: "ErgoScript fundamentals" },
    ],
  },
  {
    title: "Development",
    children: [
      { title: "SDKs & Libraries", href: "#sdks", icon: Code, description: "Available development tools" },
      { title: "RPC API", href: "#api", icon: Share2, description: "Node interaction interface" },
      { title: "ErgoBox & ErgoTree", href: "#ergobox", icon: Database, description: "Core data structures" },
      { title: "Developer Tools", href: "#tools", icon: Wrench, description: "Explorers, wallets, debuggers" },
    ],
  },
  {
    title: "Operating the Network",
    children: [
      { title: "Running a Node", href: "#node", icon: Cpu, description: "Deploy and configure Ergo nodes" },
      { title: "System Requirements", href: "#requirements", icon: Settings, description: "Hardware and software specs" },
      { title: "Staking & Mining", href: "#mining", icon: Database, description: "Participate in network consensus" },
    ],
  },
  {
    title: "Community & Support",
    children: [
      { title: "Forums & Chats", href: "#forums", icon: Users, description: "Connect with the community" },
      { title: "FAQ & Troubleshooting", href: "#faq", icon: LifeBuoy, description: "Common issues and solutions" },
      { title: "Contribution Guide", href: "#contribute", icon: Github, description: "How to contribute to Ergo" },
    ],
  },
]

const sdks = [
  {
    name: "AppKit (JVM)",
    description: "Java/Kotlin/Scala SDK for backend and service-layer Ergo dApps",
    href: "https://docs.ergoplatform.com/dev/quick-start/",
    github: "https://github.com/ergoplatform/ergo-appkit",
    icon: Cpu,
    language: "Java/Kotlin/Scala",
  },
  {
    name: "Fleet (TS/JS)",
    description: "TypeScript SDK for building modern web and browser-based Ergo dApps",
    href: "https://docs.ergoplatform.com/dev/fleet/",
    github: "https://github.com/ergoplatform/fleet",
    icon: Code,
    language: "TypeScript/JavaScript",
  },
  {
    name: "Sigma-Rust",
    description: "Core protocol library and cryptographic primitives written in Rust",
    href: "https://docs.ergoplatform.com/dev/sigma-rust/",
    github: "https://github.com/ergoplatform/sigma-rust",
    icon: Shield,
    language: "Rust",
  },
]

export default function DocsV2Page() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute left-0 top-0 -z-10 h-1/3 w-full bg-[radial-gradient(circle_800px_at_50%_0px,#27272a,transparent)]" />

      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="grid lg:grid-cols-[320px_1fr] gap-x-12">
          {/* Sidebar Navigation */}
          <aside className="hidden lg:block">
            <nav className="sticky top-24">
              {/* Search */}
              <div className="mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-neutral-900/50 border border-neutral-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-400"
                  />
                </div>
              </div>

              {/* Navigation */}
              <ul className="space-y-8">
                {sidebarNav.map(section => (
                  <li key={section.title}>
                    <h3 className="font-semibold text-lg mb-4 text-orange-400">{section.title}</h3>
                    <ul className="space-y-3 border-l-2 border-neutral-800">
                      {section.children.map(link => (
                        <li key={link.title}>
                          <a
                            href={link.href}
                            className="relative flex flex-col gap-1 pl-6 text-gray-300 hover:text-white transition -ml-px border-l-2 border-transparent hover:border-orange-400 group"
                          >
                            <div className="flex items-center gap-3">
                              <link.icon className="w-4 h-4" />
                              <span className="font-medium">{link.title}</span>
                            </div>
                            <p className="text-xs text-gray-500 group-hover:text-gray-400 pl-7">
                              {link.description}
                            </p>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main>
            <div className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:text-white prose-a:text-cyan-400 prose-a:underline">
              {/* Hero Section */}
              <div className="mb-16">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent mb-4">
                  Ergo Developer Documentation
                </h1>
                <p className="text-xl text-gray-400 mb-6">
                  Your central hub for building on Ergo. From your first dApp to advanced protocol integrations.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/build/playground"
                    className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
                  >
                    <Play className="w-5 h-5 mr-2" /> Try Ergo Playground
                  </Link>
                  <Link
                    href="https://discord.gg/ergoplatform"
                    className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
                  >
                    <Users className="w-5 h-5 mr-2" /> Join Discord
                  </Link>
                </div>
              </div>

              {/* Getting Started Section */}
              <section id="quickstart" className="mb-20 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                  Getting Started: Quickstart
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  This section is designed for new developers to quickly and easily dive into the Ergo ecosystem, 
                  lowering barriers to entry and providing immediate hands-on experience.
                </p>

                <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Rocket className="w-5 h-5 text-orange-400" /> Goal
                  </h3>
                  <p className="text-gray-300">
                    Allow users to write and run their first Ergo program in minutes, without the need for complex local setup.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Start Your Journey with Ergo</h3>
                  <p className="text-lg text-gray-300 mb-6">
                    Start your journey with Ergo right in your browser! Our Ergo Playground is an interactive environment 
                    that allows you to write, compile, and simulate ErgoScript contracts without installing any software 
                    on your computer. It's the ideal way to quickly grasp the basics of ErgoScript and the eUTXO model.
                  </p>
                </div>

                {/* Original Graphic Cards */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                    <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <Play className="w-5 h-5 text-orange-400" /> Interactive Tutorial
                    </h4>
                    <p className="text-gray-400 mb-4">
                      Start with our browser-based playground. No setup required - write and test ErgoScript contracts instantly.
                    </p>
                    <Link
                      href="/build/playground"
                      className="inline-flex items-center text-orange-400 hover:text-orange-300"
                    >
                      Open Playground <ExternalLink className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                    <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <Code className="w-5 h-5 text-cyan-400" /> First dApp
                    </h4>
                    <p className="text-gray-400 mb-4">
                      Build a complete decentralized application step-by-step with our guided tutorial.
                    </p>
                    <Link
                      href="#first-dapp"
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300"
                    >
                      Start Building <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>

                <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Play className="w-5 h-5 text-cyan-400" /> Introduction to Ergo Playground
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Ergo Playground is a web-based tool that provides you with a sandbox for experimenting with ErgoScript. It includes:
                  </p>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <Code className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span><strong>Code Editor:</strong> For writing your ErgoScript.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Settings className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span><strong>Compiler:</strong> Converts your ErgoScript into ErgoTree (bytecode). Note: The compiler functionality in Playground may sometimes lag behind the CLI compiler (ergo-tool).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Share2 className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span><strong>Transaction Simulator:</strong> Allows you to create and test transactions that interact with your contract, mimicking blockchain behavior.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Wrench className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span><strong>Debugging Tools:</strong> Help you understand how your script processes various inputs. Important: Debugging in Playground is limited, and it's not always possible to see a full trace. For complex contracts and deep debugging, it is recommended to test on a local or testnet environment.</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Step-by-step Tutorial: A Simple Counter in ErgoScript</h3>
                  <p className="text-lg text-gray-300 mb-6">
                    Let's create a simple smart contract that will store a number and allow it to be incremented.
                  </p>

                  <div className="space-y-6">
                    <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                      <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <span className="bg-orange-500 text-black px-2 py-1 rounded text-sm font-bold">1</span>
                        Open Ergo Playground
                      </h4>
                      <p className="text-gray-300 mb-3">
                        Go to the link: <Link href="/build/playground" className="text-orange-400 hover:text-orange-300">Ergo Playground</Link>.
                      </p>
                    </div>

                    <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                      <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <span className="bg-orange-500 text-black px-2 py-1 rounded text-sm font-bold">2</span>
                        Write ErgoScript
                      </h4>
                      <p className="text-gray-300 mb-3">
                        Paste the following code into the editor:
                      </p>
                      <div className="bg-black border border-neutral-600 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm text-gray-300">
{`{
  // Contract for a simple counter
  // Input parameters:
  //   currentValue: Long - current value of the counter
  //   incrementAmount: Long - amount to increment the counter by
  //   pk: SigmaProp - public key of the owner who can increment the counter

  // Spending condition:
  //   1. The input box must contain the current counter value in R4.
  //   2. The output box must contain the new counter value (currentValue + incrementAmount) in R4.
  //   3. The output box must be protected by the same public key.
  //   4. The input transaction must be signed by the owner.

  // Check that the input box has the correct type and contains the counter value
  // (assuming R4 is used to store the counter value)
  val current_value = SELF.R4[Long].get

  // Check that there is one output box
  val output_box = OUTPUTS(0)

  // Check that the output box is protected by the same public key
  val output_pk = output_box.propositionBytes == pk.propBytes

  // Check that the new counter value in the output box equals the expected value
  val value_incremented = output_box.R4[Long].get == current_value + incrementAmount

  // Check that the transaction is signed by the owner
  val signed_by_owner = pk.isValid

  // All conditions must be true
  output_pk && value_incremented && signed_by_owner
}`}
                        </pre>
                      </div>
                    </div>

                    <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                      <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <span className="bg-orange-500 text-black px-2 py-1 rounded text-sm font-bold">3</span>
                        Compile
                      </h4>
                      <p className="text-gray-300">
                        Click the "Compile" button (or similar) in the Playground. You will see the generated ErgoTree (bytecode) of your contract.
                      </p>
                    </div>

                    <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                      <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <span className="bg-orange-500 text-black px-2 py-1 rounded text-sm font-bold">4</span>
                        Simulate a Transaction
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold mb-2">Create an input box:</h5>
                          <p className="text-gray-300 text-sm">
                            Simulate an existing UTXO that will contain the initial counter value. Specify the initial value in R4 (register 4), for example, 10.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-2">Create an output box:</h5>
                          <p className="text-gray-300 text-sm">
                            Simulate a new UTXO that will contain the incremented value. Specify the new value in R4, for example, 11 (if incrementAmount will be 1).
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-2">Specify parameters:</h5>
                          <p className="text-gray-300 text-sm">
                            In the "Context" or "Parameters" section, specify incrementAmount = 1 and pk = &lt;your public key&gt;.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-2">Run simulation:</h5>
                          <p className="text-gray-300 text-sm">
                            Click "Run" or "Simulate". The Playground will show if the script executed successfully and why.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Settings className="w-5 h-5 text-green-400" /> Explanation of Playground Interface Elements
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Code Editor</h4>
                        <p className="text-sm text-gray-400">The main area for writing ErgoScript.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Compiled Script / ErgoTree</h4>
                        <p className="text-sm text-gray-400">Displays the bytecode of your compiled script.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Input Boxes</h4>
                        <p className="text-sm text-gray-400">Here you define the UTXOs that will be "spent" by your transaction. You can specify their value, registers (R4-R9), and creationHeight.</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Output Boxes</h4>
                        <p className="text-sm text-gray-400">Here you define the new UTXOs that will be created by your transaction. You also specify their value, registers, and propositionBytes (the script that protects them).</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Context / Parameters</h4>
                        <p className="text-sm text-gray-400">Allows you to pass values that will be available in the script during execution (e.g., pk, incrementAmount).</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Console / Logs</h4>
                        <p className="text-sm text-gray-400">Displays compilation, simulation results, and any errors.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <LinkIcon className="w-5 h-5 text-purple-400" /> Links to Quickstart Code Examples
                  </h3>
                  <div className="space-y-3">
                    <Link
                      href="https://docs.ergoplatform.com/dev/sc/examples/"
                      className="flex items-center text-orange-400 hover:text-orange-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      ErgoScript Examples Collection
                    </Link>
                    <Link
                      href="https://github.com/ergoplatform/ergo-script-cookbook"
                      className="flex items-center text-orange-400 hover:text-orange-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      ErgoScript Cookbook on GitHub
                    </Link>
                  </div>
                </div>
              </section>

              {/* Core Concepts Section */}
              <section id="eutxo" className="mb-20 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                  Core Concepts: eUTXO Model
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  Understand Ergo's unique Extended UTXO model, which provides a secure and scalable foundation for all smart contracts. 
                  This section explains how data is stored and managed on the ledger.
                </p>
                <blockquote className="border-l-4 border-orange-400 pl-6 py-4 bg-orange-400/10 rounded-r-lg">
                  <p className="text-lg italic">
                    "The eUTXO model combines the security of Bitcoin's UTXO system with the expressive power of smart contracts."
                  </p>
                </blockquote>
                <div className="mt-8">
                  <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span><strong>Security:</strong> Each UTXO can only be spent once, preventing double-spending attacks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Layers className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span><strong>Composability:</strong> Smart contracts can interact with each other seamlessly</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span><strong>Scalability:</strong> Parallel processing of independent transactions</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Development Section */}
              <section id="sdks" className="mb-20 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                  Development: SDKs & Libraries
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  A centralized list of available Software Development Kits (SDKs) to interact with the Ergo blockchain. 
                  Find links to documentation, repositories, and usage examples for your preferred language.
                </p>
                <div className="grid gap-6">
                  {sdks.map(sdk => (
                    <div key={sdk.name} className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <sdk.icon className="w-8 h-8 text-orange-400" />
                          <div>
                            <h3 className="text-xl font-bold">{sdk.name}</h3>
                            <p className="text-sm text-gray-400">{sdk.language}</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Link
                            href={sdk.href}
                            className="inline-flex items-center px-3 py-1 bg-orange-500/20 text-orange-400 rounded-lg text-sm hover:bg-orange-500/30"
                          >
                            <BookOpen className="w-4 h-4 mr-1" /> Docs
                          </Link>
                          <Link
                            href={sdk.github}
                            className="inline-flex items-center px-3 py-1 bg-neutral-700 text-gray-300 rounded-lg text-sm hover:bg-neutral-600"
                          >
                            <Github className="w-4 h-4 mr-1" /> GitHub
                          </Link>
                        </div>
                      </div>
                      <p className="text-gray-400">{sdk.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Operating the Network Section */}
              <section id="node" className="mb-20 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                  Operating the Network: Running a Node
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  A step-by-step guide for deploying and configuring a full Ergo node. Running your own node gives you direct, 
                  trustless access to the network for building advanced dApps or participating in mining.
                </p>
                <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-green-400" /> System Requirements
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Minimum Requirements</h4>
                      <ul className="text-sm text-gray-400 space-y-1">
                        <li>• 4GB RAM</li>
                        <li>• 50GB storage</li>
                        <li>• Stable internet connection</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Recommended</h4>
                      <ul className="text-sm text-gray-400 space-y-1">
                        <li>• 8GB RAM</li>
                        <li>• 100GB SSD storage</li>
                        <li>• High-speed internet</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Community Section */}
              <section id="contribute" className="mb-20 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                  Community: Contribution Guide
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  Ergo is an open-source project. This guide provides instructions for developers who want to contribute 
                  to the Ergo ecosystem, from fixing bugs to building new features.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 text-center">
                    <Github className="w-12 h-12 mx-auto mb-4 text-orange-400" />
                    <h3 className="text-lg font-bold mb-2">Code Contributions</h3>
                    <p className="text-sm text-gray-400 mb-4">
                      Submit pull requests, report bugs, or propose new features
                    </p>
                    <Link
                      href="https://github.com/ergoplatform"
                      className="inline-flex items-center text-orange-400 hover:text-orange-300 text-sm"
                    >
                      View Repositories <ExternalLink className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 text-center">
                    <Users className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                    <h3 className="text-lg font-bold mb-2">Community Support</h3>
                    <p className="text-sm text-gray-400 mb-4">
                      Help other developers and share your knowledge
                    </p>
                    <Link
                      href="https://discord.gg/ergoplatform"
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm"
                    >
                      Join Discord <ExternalLink className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 text-center">
                    <BookOpen className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                    <h3 className="text-lg font-bold mb-2">Documentation</h3>
                    <p className="text-sm text-gray-400 mb-4">
                      Improve docs, write tutorials, or translate content
                    </p>
                    <Link
                      href="#"
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm"
                    >
                      Contribute Docs <ExternalLink className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
} 