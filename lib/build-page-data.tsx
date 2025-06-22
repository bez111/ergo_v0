import { BookOpen, Code, Rocket, Users, Play, Brain, Star, Shield } from "lucide-react"
import React from "react"

export const quickLinks = [
  {
    title: "Developer Docs",
    description: "Full technical documentation",
    href: "/build/docs",
    icon: BookOpen,
  },
  {
    title: "Ergo Playground",
    description: "Test contracts in your browser",
    href: "/build/playground",
    icon: Code,
  },
  {
    title: "ErgoScript Tutorials",
    description: "Learn Ergo's smart contract language",
    href: "/build/tutorials",
    icon: Code,
  },
  {
    title: "Join Discord",
    description: "Chat with our developer community",
    href: "https://discord.gg/ergoplatform",
    icon: Users,
    external: true,
  },
]

export const whatsNew = [
  {
    title: "v5.1 SDK Released",
    date: "June 2025",
    description: "New features and bugfixes for the AppKit.",
    href: "/blog/v5.1-sdk-release",
  },
  {
    title: "DeFi Hackathon",
    date: "May 2025",
    description: "Build next-gen dApps. Prizes and grants available.",
    href: "/events/defi-hackathon",
  },
  {
    title: "Grant Round #7 Open",
    date: "May 2025",
    description: "Apply to build your project on Ergo.",
    href: "/build/grants",
  },
]

export const showcase = [
  {
    title: "SigmaUSD",
    description:
      "The original decentralized stablecoin for eUTXO. No custodians, pure smart contracts. Pioneered Oracle Pools and the two-token model.",
    href: "https://sigmaverse.io/sigmastable",
    icon: Rocket,
    featured: true,
    image: "/showcase/sigmausd.png",
  },
  {
    title: "Rosen Bridge",
    description:
      "Decentralized cross-chain bridge for Ergo, Cardano, Ethereum and more. Built on unique oracle pools and multi-chain security model. Powers true DeFi interoperability.",
    href: "https://rosen.tech/",
    icon: Rocket,
    featured: true,
    image: "/showcase/rosen.png",
  },
  {
    title: "Paideia DAO",
    description:
      "Modular DAO platform. Launch and manage on-chain organizations, voting, and treasuries—100% open and programmable. DAO infrastructure for the next wave of Web3.",
    href: "https://paideia.im/",
    icon: Users,
    featured: true,
    image: "/showcase/paideia.png",
  },
]

export const developerPaths = [
  {
    title: "New to Blockchain?",
    description: "Start your journey with Ergo. Learn core concepts and build your first simple dApp.",
    icon: Play,
    cta: "Beginner's Guide",
    href: "/build/getting-started",
    color: "from-orange-500/20 to-orange-500/5",
  },
  {
    title: "Experienced DeFi Developer?",
    description: "Leverage Ergo's eUTXO model and ErgoScript for advanced financial applications.",
    icon: Rocket,
    cta: "Explore Advanced DeFi",
    href: "/learn/ergoscript",
    color: "from-cyan-500/20 to-cyan-500/5",
  },
  {
    title: "Researcher or Cryptographer?",
    description: "Dive deep into Sigma protocols, NIPoPoWs, and contribute to Ergo's core research.",
    icon: Brain,
    cta: "Protocol Deep Dive",
    href: "/technology",
    color: "from-purple-500/20 to-purple-500/5",
  },
]

export const resources = [
  {
    title: "Getting Started Guide",
    description: "Step-by-step onboarding for new Ergo devs.",
    href: "/build/getting-started",
    icon: BookOpen,
  },
  {
    title: "Official Documentation",
    description: "All SDK, API and protocol docs.",
    href: "/build/docs",
    icon: Code,
  },
  {
    title: "Video Tutorials",
    description: "Watch quick guides on contract deployment, dApps, more.",
    href: "https://www.youtube.com/c/ErgoPlatform",
    icon: Play,
    external: true,
  },
  {
    title: "Cheatsheet: ErgoScript",
    description: "Handy reference for core language features.",
    href: "/build/cheatsheet",
    icon: Brain,
  },
  {
    title: "Starter Templates",
    description: "Ready-to-use dApp, DeFi and NFT project templates.",
    href: "https://github.com/ergoplatform",
    icon: Rocket,
    external: true,
  },
  {
    title: "Security Best Practices",
    description: "How to audit, test and secure your smart contracts.",
    href: "/build/security",
    icon: Shield,
  },
]

export const codeExample = `
// Example ErgoScript for a simple box protection
{
  sigmaProp(SELF.R4[Coll[Byte]].get == ownerPubKey)
}
`

export const tools = [
  { name: "AppKit (JVM)", description: "Java/Kotlin/Scala SDK for backend development.", href: "#" },
  { name: "Fleet (JS/TS)", description: "TypeScript SDK for web and JS-based applications.", href: "#" },
  { name: "Sigma-Rust", description: "The core protocol implementation in Rust.", href: "#" },
  { name: "Ergo-Playground", description: "Online tool for writing and testing ErgoScript.", href: "/build/playground" },
  { name: "Testnet Faucet", description: "Get test ERG for development.", href: "#" },
  { name: "Security Audits", description: "Best practices and resources for secure dApps.", href: "#" },
]

export const community = [
  { name: "Discord", description: "Main hub for developer discussion and support.", href: "https://discord.gg/ergoplatform" },
  { name: "GitHub", description: "Contribute to the open-source Ergo ecosystem.", href: "https://github.com/ergoplatform" },
  { name: "Ergo Forum", description: "Long-form discussions and proposals.", href: "https://www.ergoforum.org/" },
  { name: "Grant Program", description: "Apply for funding to build on Ergo.", href: "/build/grants" },
  { name: "Bounties", description: "Get paid for completing specific development tasks.", href: "#" },
  { name: "Upcoming Events", description: "Hackathons, AMAs, and community calls.", href: "/events" },
]

export const faq_new = [
  {
    question: "How do I deploy my first Ergo smart contract?",
    answer: (
      <>
        <b>Step-by-step:</b>
        <br />
        1. Open{" "}
        <a href="/build/playground" className="text-orange-400 underline">
          Ergo Playground
        </a>{" "}
        and write your contract in ErgoScript.
        <br />
        2. Use the "Test & Simulate" tab to check logic.
        <br />
        3. Deploy to{" "}
        <a href="https://testnet.ergoplatform.com" className="text-orange-400 underline" target="_blank">
          Testnet
        </a>{" "}
        using Fleet SDK or AppKit.
        <br />
        4. Need an example? Check the{" "}
        <a href="/docs/quick-start" className="text-orange-400 underline">
          Quick Start Guide
        </a>
        .<br />
      </>
    ),
  },
  {
    question: "What are the main tools and SDKs available for Ergo development?",
    answer: (
      <>
        <ul className="list-disc list-inside">
          <li>
            <b>AppKit (JVM):</b> Java/Kotlin/Scala backend SDK
          </li>
          <li>
            <b>Fleet:</b> TypeScript SDK for web and JS apps
          </li>
          <li>
            <b>Sigma-Rust:</b> Core protocol in Rust
          </li>
          <li>
            <b>Ergo Playground:</b> Online IDE for contracts
          </li>
        </ul>
        <a href="/build/tools" className="text-orange-400 underline">
          See all tools
        </a>
      </>
    ),
  },
  {
    question: "How do I get help or support?",
    answer: (
      <>
        <b>Get fast answers:</b>
        <br />– Join{" "}
        <a href="https://discord.gg/ergoplatform" target="_blank" className="text-orange-400 underline">
          Ergo Discord
        </a>{" "}
        (#dev-support)
        <br />– Search the{" "}
        <a href="/docs" className="text-orange-400 underline">
          developer docs
        </a>
        <br />– Ask in our{" "}
        <a href="https://github.com/ergoplatform" className="text-orange-400 underline" target="_blank">
          GitHub Discussions
        </a>
        <br />– Email support: dev@ergoplatform.org
        <br />
      </>
    ),
  },
  {
    question: "How do I get ERG for testing?",
    answer: (
      <>
        <b>Testnet:</b> Use the{" "}
        <a href="/build/testnet-faucet" className="text-orange-400 underline">
          Testnet Faucet
        </a>
        .<br />
        <b>Mainnet:</b> ERG can be purchased on supported exchanges.
        <br />
      </>
    ),
  },
  {
    question: "Which programming languages can I use with Ergo?",
    answer: (
      <>
        <b>Smart Contracts:</b> ErgoScript (native)
        <br />
        <b>dApps/Backends:</b> TypeScript, Java, Kotlin, Scala, Rust, Python (via REST API)
        <br />
        <a href="/docs/faq#languages" className="text-orange-400 underline">
          See language guides
        </a>
      </>
    ),
  },
  {
    question: "How do I audit and secure my contracts?",
    answer: (
      <>
        <ul className="list-disc list-inside">
          <li>
            Use <b>Ergo Playground</b> to simulate all edge-cases
          </li>
          <li>
            Follow{" "}
            <a href="/docs/security" className="text-orange-400 underline">
              Security Best Practices
            </a>
          </li>
          <li>Request a review in Discord #code-review</li>
        </ul>
      </>
    ),
  },
  {
    question: "How can I get a grant or funding for my project?",
    answer: (
      <>
        <b>1.</b> Go to{" "}
        <a href="/community/grants" className="text-orange-400 underline">
          Grant Program
        </a>{" "}
        and fill out the application.
        <br />
        <b>2.</b> Pitch your idea in{" "}
        <a href="https://discord.gg/ergoplatform" className="text-orange-400 underline" target="_blank">
          Discord
        </a>{" "}
        (#grants)
        <br />
        <b>3.</b> Explore hackathons for extra bounties!
        <br />
      </>
    ),
  },
  {
    question: "Where can I find real-world examples and templates?",
    answer: (
      <>
        –{" "}
        <a href="/build/showcase" className="text-orange-400 underline">
          Showcase
        </a>
        : top live dApps
        <br />–{" "}
        <a
          href="https://github.com/ergoplatform/templates"
          className="text-orange-400 underline"
          target="_blank"
        >
          Starter Templates on GitHub
        </a>
        <br />–{" "}
        <a href="/docs/examples" className="text-orange-400 underline">
          Code Examples
        </a>
        <br />
      </>
    ),
  },
  {
    question: "How do I contribute to Ergo open source?",
    answer: (
      <>
        <b>1.</b> Browse{" "}
        <a href="https://github.com/ergoplatform" className="text-orange-400 underline" target="_blank">
          Ergo GitHub
        </a>{" "}
        for issues and projects.
        <br />
        <b>2.</b> Ask in #dev-support for beginner-friendly tasks.
        <br />
        <b>3.</b> Read the{" "}
        <a href="/docs/contributing" className="text-orange-400 underline">
          contribution guide
        </a>
        .<br />
      </>
    ),
  },
  {
    question: "What if my question isn't listed?",
    answer: (
      <>
        – Search the full{" "}
        <a href="/docs/faq" className="text-orange-400 underline">
          FAQ page
        </a>
        <br />– Ask in{" "}
        <a href="https://discord.gg/ergoplatform" target="_blank" className="text-orange-400 underline">
          Discord
        </a>{" "}
        or use the support button below.
        <br />
      </>
    ),
  },
]

export { faq_new as faq } 