"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  Database, 
  Zap, 
  GitBranch, 
  Globe, 
  BookOpen, 
  FileText, 
  Video, 
  Shield, 
  Coins, 
  Lock, 
  Cpu, 
  Code,
  CheckCircle,
  ExternalLink,
  ChevronRight,
  Brain,
  Rocket,
  Eye,
  Key,
  Network,
  Smartphone,
  ArrowRight,
  Star,
  Target,
  Layers,
  FileQuestion
} from "lucide-react";
import Link from "next/link";

const resourceLinks = {
  articles: [
    { title: "Learning Ergo 101 : eUTXO explained for human beings", url: "https://ergoplatform.org/en/blog/2021-11-10-learning-ergo-101-eutxo-explained-for-human-beings/" },
    { title: "Off-chain logic & eUTXO", url: "https://ergoplatform.org/en/blog/2022-01-10-off-chain-logic-and-eutxo/" },
    { title: "The UTXO Alliance Announcement", url: "https://iohk.io/en/blog/posts/2021/08/12/the-utxo-alliance-announcement/" },
  ],
  docs: [
    { title: "The Extended UTXO Model - IOHK Research", url: "https://iohk.io/en/research/library/papers/the-extended-utxo-model/" },
    { title: "Understanding the Extended UTXO model - docs.cardano", url: "https://docs.cardano.org/learn/understanding-the-extended-utxo-model/" },
  ],
  videos: [
    { title: "Ergo Blockchain Crash Course Part 1: eUTXO Model Review", url: "https://www.youtube.com/watch?v=QwI6U5QkB1A" },
    { title: "DeCo EU Layman Class - Basics of eUTxO", url: "https://www.youtube.com/watch?v=QwI6U5QkB1A" },
    { title: "Interesting explanation on the eUTXO model and dapps built in it", url: "https://www.youtube.com/watch?v=QwI6U5QkB1A" },
    { title: "Blockchain Basics & Transactions, UTXO and Script Code", url: "https://www.youtube.com/watch?v=QwI6U5QkB1A" },
  ],
};

function ResourceCards({ items, icon }: { items: { title: string; url: string }[]; icon: React.ReactNode }) {
  return (
    <div className="grid md:grid-cols-2 gap-4 mb-6">
      {items.map((item: { title: string; url: string }) => (
        <a
          key={item.title}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-neutral-900/60 border border-neutral-700 rounded-xl p-4 hover:bg-orange-500/10 transition-all hover:scale-105"
        >
          {icon}
          <span className="font-semibold text-orange-300 hover:underline text-base">{item.title}</span>
          <ExternalLink className="w-4 h-4 ml-auto text-gray-400" />
        </a>
      ))}
    </div>
  );
}

export default function EutxoPage() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid w-full grid-cols-5 mb-8 bg-neutral-900/50 border border-neutral-700/50">
        <TabsTrigger value="overview" className="flex items-center gap-2 justify-center">
          <BookOpen className="w-4 h-4" /> Overview
        </TabsTrigger>
        <TabsTrigger value="utxo-account" className="flex items-center gap-2 justify-center">
          <Database className="w-4 h-4" /> UTxO vs Account
        </TabsTrigger>
        <TabsTrigger value="atomic-swaps" className="flex items-center gap-2 justify-center">
          <Zap className="w-4 h-4" /> Atomic Swaps
        </TabsTrigger>
        <TabsTrigger value="ergo-cardano" className="flex items-center gap-2 justify-center">
          <GitBranch className="w-4 h-4" /> Ergo vs Cardano
        </TabsTrigger>
        <TabsTrigger value="utxo-state" className="flex items-center gap-2 justify-center">
          <Globe className="w-4 h-4" /> UTXO State
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="overview">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Extended UTXO (eUTXO) Model
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            Ergo utilizes the Extended UTXO (eUTXO) model, based on Bitcoin's original UTXO model but with enhanced capabilities that enable more expressive smart contracts.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            This revolutionary approach provides superior security, scalability, and composability compared to traditional account-based models.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/Docs/introduction/utxo-vs-account"
              className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
            >
              <Database className="w-5 h-5 mr-2" /> UTXO vs Account
            </Link>
            <Link
              href="/Docs/introduction/faq"
              className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
            >
              <FileText className="w-5 h-5 mr-2" /> Learn More
            </Link>
          </div>
        </div>

        {/* Quote Section */}
        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
          <blockquote className="text-xl italic text-center text-gray-300">
            "The eUTXO model represents a paradigm shift in blockchain architecture, combining the security of Bitcoin's UTXO with the expressiveness needed for modern DeFi applications."
          </blockquote>
        </div>

        {/* Core Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5 text-green-400" /> Enhanced Privacy
            </h3>
            <p className="text-gray-300 mb-4">
              UTXOs being one-time objects allow for formalized privacy measures, enhancing user confidentiality through advanced cryptographic protocols.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                One-time transaction outputs
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Stealth address support
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Ring signature compatibility
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-blue-400" /> Superior Scalability
            </h3>
            <p className="text-gray-300 mb-4">
              UTXO's inherent design supports parallel transaction processing, making it simpler to scale the network and handle high transaction volumes.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Parallel transaction processing
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                NIPoPoW compatibility
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Reduced computational overhead
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Globe className="w-5 h-5 text-purple-400" /> Interoperability
            </h3>
            <p className="text-gray-300 mb-4">
              UTXOs are well-suited for off-chain and sidechain protocols, enabling seamless integration with various solutions beyond the main chain.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Sidechain support
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Cross-chain compatibility
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Layer-2 solutions
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Coins className="w-5 h-5 text-yellow-400" /> Predictable Costs
            </h3>
            <p className="text-gray-300 mb-4">
              In Ergo, transaction costs are predictable and significantly lower than account-based models, eliminating the need for gas-like mechanisms.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Fixed transaction fees
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                No gas price volatility
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Transparent pricing
              </li>
            </ul>
          </div>
        </div>

        {/* eUTXO and Smart Contracts Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Zap className="w-6 h-6 text-cyan-400" /> eUTXO and Smart Contracts
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>
              In the eUTXO model, Ergo allows smart contracts to utilize UTXOs as data inputs without modifying them. This means that nodes primarily verify transactions rather than balances, significantly improving efficiency.
            </p>
            <p>
              By leveraging eUTXO, Ergo enables parallel computation and facilitates non-custodial atomic swaps, making it easier to perform complex operations securely and efficiently.
            </p>
            <p>
              Furthermore, Ergo's Multi-Stage UTXO model enables the implementation of Turing-complete smart contracts through multi-stage protocols, providing unprecedented flexibility for DeFi applications.
            </p>
            <div className="mt-4">
              <Link 
                href="/Docs/introduction/utxo-vs-account" 
                className="inline-flex items-center text-orange-400 hover:text-orange-300 underline"
              >
                Compare with Account-Based Model <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Advanced Features Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Brain className="w-6 h-6 text-orange-400" /> Advanced eUTXO Features
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-2 flex items-center gap-2">
                <Target className="w-4 h-4" /> Data Inputs
              </h4>
              <p className="text-gray-300 text-sm">Read-only access to UTXO data without consuming them, enabling oracle integration and complex smart contract logic.</p>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-cyan-400 mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4" /> Multi-Stage Protocols
              </h4>
              <p className="text-gray-300 text-sm">Complex smart contracts that span multiple transactions with sophisticated state management capabilities.</p>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-green-400 mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4" /> Atomic Swaps
              </h4>
              <p className="text-gray-300 text-sm">Trustless cross-chain token exchanges without intermediaries or centralized exchanges.</p>
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-orange-400" /> Learning Resources
          </h2>
          <p className="text-gray-300 mb-6">
            Explore these resources to deepen your understanding of the eUTXO model and its applications in Ergo.
          </p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-green-400" /> Articles & Blog Posts
              </h3>
              <ResourceCards items={resourceLinks.articles} icon={<FileText className="w-5 h-5 text-green-400" />} />
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-400" /> Research & Documentation
              </h3>
              <ResourceCards items={resourceLinks.docs} icon={<BookOpen className="w-5 h-5 text-blue-400" />} />
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Video className="w-5 h-5 text-purple-400" /> Video Tutorials
              </h3>
              <ResourceCards items={resourceLinks.videos} icon={<Video className="w-5 h-5 text-purple-400" />} />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 text-center">Ready to explore more?</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/Docs/introduction/utxo-vs-account"
              className="flex items-center justify-center px-4 py-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
            >
              <Database className="w-5 h-5 mr-2 text-orange-400" />
              <span className="text-gray-300">UTXO vs Account</span>
            </Link>
            <Link
              href="/Docs/introduction/key-features"
              className="flex items-center justify-center px-4 py-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
            >
              <Star className="w-5 h-5 mr-2 text-cyan-400" />
              <span className="text-gray-300">Key Features</span>
            </Link>
            <Link
              href="/Docs/developers"
              className="flex items-center justify-center px-4 py-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
            >
              <Code className="w-5 h-5 mr-2 text-green-400" />
              <span className="text-gray-300">Developer Docs</span>
            </Link>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="utxo-account">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            UTXO vs Account Model
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            Understanding the fundamental differences between Ergo's UTXO model and traditional account-based blockchains like Ethereum.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            This comparison highlights why Ergo's approach provides superior security, scalability, and developer experience.
          </p>
        </div>

        {/* Quote Section */}
        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
          <blockquote className="text-xl italic text-center text-gray-300">
            "The UTXO model represents a paradigm shift from traditional account-based systems, offering immutable transaction outputs and enhanced security."
          </blockquote>
        </div>

        {/* Core Concepts Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Database className="w-6 h-6 text-orange-400" /> Account Model
            </h3>
            <p className="text-gray-300 mb-4">
              In the Account model, balances are represented as simple numerical values that increase or decrease with transactions, similar to traditional banking.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span className="text-gray-300">Sequential processing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span className="text-gray-300">Mutable state</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span className="text-gray-300">Gas-based pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span className="text-gray-300">Complex state management</span>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-green-400" /> UTXO Model
            </h3>
            <p className="text-gray-300 mb-4">
              The UTXO model considers balances as collections of unspent outputs, each with its own identity and spending conditions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-300">Parallel processing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-300">Immutable outputs</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-300">Fixed transaction fees</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-300">Simplified verification</span>
              </div>
            </div>
          </div>
        </div>

        {/* Transaction Example */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Code className="w-6 h-6 text-cyan-400" /> Transaction Example
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Let's illustrate how UTXO transactions work with a practical example:
            </p>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-3">Transaction Flow:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-orange-400 rounded-full flex items-center justify-center text-xs text-black font-bold">1</span>
                  Alice has 100 ERG in UTXOs
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-orange-400 rounded-full flex items-center justify-center text-xs text-black font-bold">2</span>
                  Sends 75 ERG to Bob, keeps 25 ERG
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-orange-400 rounded-full flex items-center justify-center text-xs text-black font-bold">3</span>
                  Charlie has 250 ERG, sends 150 ERG to Bob
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-orange-400 rounded-full flex items-center justify-center text-xs text-black font-bold">4</span>
                  Bob combines UTXOs and sends 205 ERG to Dave
                </li>
              </ul>
            </div>
            <p className="text-orange-300 font-semibold">
              Dave now owns 205 ERG from multiple sources, each UTXO retaining its original identity and history.
            </p>
          </div>
        </div>

        {/* Detailed Comparison */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5 text-green-400" /> Security & Immutability
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-green-400 mb-2">UTXO Model</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Each UTXO is immutable
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Simplified verification
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Reduced attack surface
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-400 mb-2">Account Model</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 text-red-400">✗</div>
                    Mutable account balances
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 text-red-400">✗</div>
                    Complex state management
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 text-red-400">✗</div>
                    Higher vulnerability risk
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-blue-400" /> Scalability & Performance
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">UTXO Model</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Parallel transaction processing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Efficient off-chain operations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Reduced computational load
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-400 mb-2">Account Model</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 text-red-400">✗</div>
                    Sequential processing required
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 text-red-400">✗</div>
                    On-chain heavy operations
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 text-red-400">✗</div>
                    Higher computational requirements
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Code className="w-5 h-5 text-purple-400" /> Developer Experience
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-purple-400 mb-2">UTXO Model</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Declarative programming
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Predictable execution costs
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Reduced error potential
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-400 mb-2">Account Model</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 text-red-400">✗</div>
                    Imperative programming
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 text-red-400">✗</div>
                    Unpredictable gas costs
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 text-red-400">✗</div>
                    Higher complexity
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Coins className="w-5 h-5 text-yellow-400" /> Transaction Costs
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-yellow-400 mb-2">UTXO Model</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Fixed transaction fees
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    No gas price volatility
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Transparent pricing
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-400 mb-2">Account Model</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 text-red-400">✗</div>
                    Variable gas costs
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 text-red-400">✗</div>
                    Network congestion impact
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 text-red-400">✗</div>
                    Unpredictable fees
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Features */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Brain className="w-6 h-6 text-orange-400" /> Advanced UTXO Features
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-2 flex items-center gap-2">
                <Target className="w-4 h-4" /> Data Inputs
              </h4>
              <p className="text-gray-300 text-sm">Read-only access to UTXO data without consuming them, enabling oracle integration.</p>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-cyan-400 mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4" /> Multi-Stage Protocols
              </h4>
              <p className="text-gray-300 text-sm">Complex smart contracts spanning multiple transactions with sophisticated state management.</p>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-green-400 mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4" /> Atomic Swaps
              </h4>
              <p className="text-gray-300 text-sm">Trustless cross-chain token exchanges without intermediaries or centralized exchanges.</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 text-center">Learn More About UTXO</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/Docs/introduction/key-features"
              className="flex items-center justify-center px-4 py-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
            >
              <Star className="w-5 h-5 mr-2 text-orange-400" />
              <span className="text-gray-300">Key Features</span>
            </Link>
            <Link
              href="/Docs/developers"
              className="flex items-center justify-center px-4 py-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
            >
              <Code className="w-5 h-5 mr-2 text-cyan-400" />
              <span className="text-gray-300">Developer Docs</span>
            </Link>
            <Link
              href="/Docs/introduction/faq"
              className="flex items-center justify-center px-4 py-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
            >
              <FileText className="w-5 h-5 mr-2 text-green-400" />
              <span className="text-gray-300">FAQ</span>
            </Link>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="atomic-swaps">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Atomic Swaps
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            Atomic Swaps are a revolutionary technology that enables direct interaction between different blockchain systems.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            They facilitate the transfer of digital assets across chains without the need for centralized exchanges, providing trustless and secure cross-chain trading.
          </p>
        </div>

        {/* Quote Section */}
        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
          <blockquote className="text-xl italic text-center text-gray-300">
            "Atomic swaps offer a solution to cross-chain challenges, enabling secure and efficient cross-blockchain trade of cryptocurrencies without intermediaries."
          </blockquote>
        </div>

        {/* Core Concepts */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" /> Trustless Exchange
            </h3>
            <p className="text-gray-300 mb-4">
              Atomic swaps enable direct, trustless exchange of assets between different blockchain networks without requiring third-party intermediaries.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                No centralized exchanges needed
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Eliminates counterparty risk
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Secure cross-chain transfers
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-400" /> Binary Execution
            </h3>
            <p className="text-gray-300 mb-4">
              Traditional atomic swaps operate on a 'fill-or-kill' principle - transactions are either completed in full or not executed at all.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                All-or-nothing execution
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Prevents partial failures
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Guaranteed atomicity
              </li>
            </ul>
          </div>
        </div>

        {/* How Atomic Swaps Work */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Code className="w-6 h-6 text-cyan-400" /> How Atomic Swaps Work
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Here's a simplified step-by-step overview of how atomic swaps work:
            </p>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-3">Step-by-Step Process:</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center text-xs text-black font-bold mt-0.5">1</span>
                  <div>
                    <span className="font-semibold">Agreement:</span> Alice and Bob agree to trade 1 BTC for 50,000 ERG. Neither party trusts the other completely.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center text-xs text-black font-bold mt-0.5">2</span>
                  <div>
                    <span className="font-semibold">Secret Creation:</span> Alice creates a secret random number and generates its hash. She creates a Bitcoin transaction locking 1 BTC with a script requiring the secret.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center text-xs text-black font-bold mt-0.5">3</span>
                  <div>
                    <span className="font-semibold">Counter Transaction:</span> Bob creates a similar transaction on Ergo, locking 50,000 ERG with the same hash, but cannot execute without the secret.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center text-xs text-black font-bold mt-0.5">4</span>
                  <div>
                    <span className="font-semibold">Execution:</span> After confirming Bob's transaction, Alice reveals the secret, allowing both parties to claim their assets.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center text-xs text-black font-bold mt-0.5">5</span>
                  <div>
                    <span className="font-semibold">Time Limits:</span> Both parties can set time limits to prevent indefinite locking if the secret isn't revealed.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Ergo Advantage */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Brain className="w-6 h-6 text-orange-400" /> The Ergo Advantage
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Ergo enhances the existing atomic swaps concept by leveraging its unique eUTXO (Extended Unspent Transaction Output) model, a significant evolution over the conventional UTXO model found in Bitcoin-like blockchains.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-green-400 mb-2">Traditional Atomic Swaps</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 text-red-400">✗</div>
                    Binary execution only
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 text-red-400">✗</div>
                    No partial fills
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 text-red-400">✗</div>
                    Limited flexibility
                  </li>
                </ul>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-green-400 mb-2">Ergo's Enhanced Swaps</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Partial order fulfillment
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Flexible trading options
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Advanced smart contracts
                  </li>
                </ul>
              </div>
            </div>
            <p className="mt-4">
              The eUTXO model allows each UTXO to carry arbitrary data and be protected by arbitrary predicates. This enables complex smart contract logic while maintaining the security benefits of the UTXO model.
            </p>
          </div>
        </div>

        {/* Advanced Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-orange-400" /> Partial Fills
            </h3>
            <p className="text-gray-300 mb-4">
              Ergo's eUTXO model enables partial order fulfillment, allowing traders to fill orders according to their preferences rather than being limited to all-or-nothing execution.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Flexible order sizes
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Trader preference support
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Enhanced liquidity
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Globe className="w-5 h-5 text-cyan-400" /> Decentralized Exchange
            </h3>
            <p className="text-gray-300 mb-4">
              Ergo provides infrastructure for fully decentralized exchanges supporting cross-chain trading without intermediaries or token wrapping requirements.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                No intermediaries
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Reduced bottlenecks
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Enhanced security
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Code className="w-5 h-5 text-purple-400" /> Smart Contracts
            </h3>
            <p className="text-gray-300 mb-4">
              Advanced ErgoScript smart contracts enable complex atomic swap logic while maintaining the security and predictability of the UTXO model.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Complex logic support
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Predictable execution
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Declarative programming
              </li>
            </ul>
          </div>
        </div>

        {/* Technical Implementation */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Code className="w-6 h-6 text-yellow-400" /> Technical Implementation
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Atomic swaps use cryptographic techniques including hash time-locked contracts (HTLCs) and the secp256k1 elliptic curve for secure cross-chain transactions.
            </p>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-3">Key Components:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                  <span><strong>Hash Time-Locked Contracts (HTLCs):</strong> Enable conditional transactions with time-based expiration</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                  <span><strong>secp256k1 Curve:</strong> Provides cryptographic security for key generation and verification</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                  <span><strong>Secret Generation:</strong> Random values ensure transaction security and prevent double-spending</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                  <span><strong>Cross-Chain Verification:</strong> Both blockchains verify transaction conditions independently</span>
                </li>
              </ul>
            </div>
            <p className="text-orange-300 font-semibold">
              For a comprehensive understanding of Ergo's atomic swaps and the possibilities they offer for intra-chain and cross-chain token swaps, refer to the ErgoScript white paper.
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 text-center">Explore More About Atomic Swaps</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/Docs/introduction/utxo-vs-account"
              className="flex items-center justify-center px-4 py-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
            >
              <Database className="w-5 h-5 mr-2 text-orange-400" />
              <span className="text-gray-300">UTXO vs Account</span>
            </Link>
            <Link
              href="/Docs/developers"
              className="flex items-center justify-center px-4 py-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
            >
              <Code className="w-5 h-5 mr-2 text-cyan-400" />
              <span className="text-gray-300">Developer Docs</span>
            </Link>
            <Link
              href="/Docs/introduction/key-features"
              className="flex items-center justify-center px-4 py-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
            >
              <Star className="w-5 h-5 mr-2 text-green-400" />
              <span className="text-gray-300">Key Features</span>
            </Link>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="ergo-cardano">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Ergo vs Cardano
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            Comparing Ergo and Cardano's eUTXO Models
          </p>
          <p className="text-lg text-gray-300 mb-6">
            Both platforms leverage the eUTXO model to provide native asset support and distributed states for decentralized applications (dApps), among other features.
          </p>
        </div>

        {/* Quote Section */}
        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
          <blockquote className="text-xl italic text-center text-gray-300">
            "Ergo and Cardano are pioneers in implementing the extended UTXO model and have collaborated to advance research and development through the eUTXO Alliance."
          </blockquote>
        </div>

        {/* History Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-orange-400" /> History & Foundation
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Ergo was founded by Alex Chepurnoy (known as "kushti") and Dmitry Meshakov, two respected figures in the decentralized technology space. Alex's expertise, gained from working on projects like NXT and smart-contract.com, before his 'ScoreX' project caught the attention of IOG (Input Output Global), the company behind Cardano.
            </p>
            <p>
              However, driven by a shared vision to innovate, Alex and Dmitry decided to pursue an independent path, leaving IOG to create Ergo. They aimed to combine the strengths of the extended UTXO (eUTXO) model with the robustness of Proof-of-Work (PoW).
            </p>
            <p>
              Central to Ergo's ethos is a fair launch, ensuring a balanced token distribution and preventing wealth concentration. This commitment to fairness has resonated within the Ergo community.
            </p>
          </div>
        </div>

        {/* Programming Languages Comparison */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Code className="w-5 h-5 text-orange-400" /> ErgoScript
            </h3>
            <p className="text-gray-300 mb-4">
              Ergo employs a language known as ErgoScript, which draws inspiration from Scala. Ergo stores data in registers, facilitating the development of complex smart contracts and advanced features.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Based on Scorex framework, influenced by Scala
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Strongly typed with first-class functions
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Zero-knowledge proofs supported
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Transaction Trees supported
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Code className="w-5 h-5 text-cyan-400" /> Plutus
            </h3>
            <p className="text-gray-300 mb-4">
              Cardano uses a language named Plutus, which is inspired by Haskell. Cardano uses "datum" for data storage and employs a two-layer architecture.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Based on Haskell
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Strongly typed with first-class functions
              </li>
              <li className="flex items-center gap-2">
                <div className="w-4 h-4 text-yellow-400">⚠</div>
                Zero-knowledge proofs planned for future
              </li>
              <li className="flex items-center gap-2">
                <div className="w-4 h-4 text-red-400">✗</div>
                Transaction Trees not supported
              </li>
            </ul>
          </div>
        </div>

        {/* Token Minting Comparison */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Coins className="w-6 h-6 text-yellow-400" /> Token Minting Policies
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-orange-400 mb-3">Ergo's Native Tokens</h4>
              <p className="text-gray-300 mb-3 text-sm">
                Ergo's token issuance is standardized through EIP4. Tokens are stored in the R2 register of a box.
              </p>
              <div className="bg-neutral-800/50 rounded-lg p-3 text-sm">
                <div className="space-y-1 text-gray-300">
                  <div><strong>R0:</strong> Value (in nanoErgs as Base58)</div>
                  <div><strong>R1:</strong> Protection script (Smart Contract)</div>
                  <div><strong>R2:</strong> Assets (tokens)</div>
                  <div><strong>R3:</strong> Creation details</div>
                  <div><strong>R4-R9:</strong> Available for custom use</div>
                </div>
              </div>
              <ul className="space-y-1 text-gray-400 text-xs mt-3">
                <li>• Each box can hold up to 255 secondary tokens</li>
                <li>• Box size cannot exceed 4 kilobytes</li>
                <li>• NFT minting policy defined by EIP-0024</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-cyan-400 mb-3">Cardano's Native Tokens</h4>
              <p className="text-gray-300 mb-3 text-sm">
                Native tokens on Cardano allow for transacting multiple assets without smart contracts.
              </p>
              <div className="bg-neutral-800/50 rounded-lg p-3 text-sm">
                <div className="space-y-1 text-gray-300">
                  <div><strong>Asset ID:</strong> Policy ID + Asset Name</div>
                  <div><strong>Policy ID:</strong> Permanent identifier from policy script</div>
                  <div><strong>Token Bundles:</strong> Standard way to represent assets</div>
                  <div><strong>Minimum ADA:</strong> Required for token transfers</div>
                </div>
              </div>
              <ul className="space-y-1 text-gray-400 text-xs mt-3">
                <li>• Assets uniquely identified by asset ID</li>
                <li>• Policy script defines asset attributes</li>
                <li>• Supports minting, issuing, using, redeeming, burning</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Global State Management */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Brain className="w-6 h-6 text-purple-400" /> Global State Management
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-orange-400 mb-3">ErgoScript Approach</h4>
              <p className="text-gray-300 mb-3 text-sm">
                ErgoScript is a call-by-value, higher-order functional language without recursion. It defines guarding propositions for coins as logical formulas.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Not inherently Turing complete
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Turing completeness via transaction trees
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Focuses on transactional model
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-cyan-400 mb-3">Plutus Approach</h4>
              <p className="text-gray-300 mb-3 text-sm">
                Plutus is a Turing-complete, higher-order functional programming language subset of Haskell, designed specifically for smart contracts.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Inherently Turing complete
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  General-purpose language
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  More intuitive for complex contracts
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Privacy Features */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Lock className="w-6 h-6 text-green-400" /> Privacy Features
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Ergo's cryptographic design incorporates Sigma protocols, providing extensive access to discrete log-based zero-knowledge proofs, offering potential advantages in privacy and security.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-green-400 mb-2">Ergo's Sigma Protocols</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Zero-knowledge proofs supported
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Schnorr signature scheme
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Self-sovereign privacy
                  </li>
                </ul>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-cyan-400 mb-2">Cardano's Privacy</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 text-yellow-400">⚠</div>
                    Zero-knowledge proofs planned
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Complex authentication schemes
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Standard privacy features
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Data Inputs Comparison */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-blue-400" /> Data Inputs
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Both platforms have implemented solutions to access off-chain data and oracles through data inputs, broadening their potential applications and use cases.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-orange-400 mb-3">Ergo's Data Inputs</h4>
                <p className="text-gray-300 mb-3 text-sm">
                  Ergo's eUTXO model supports data inputs, which allow transactions to read data from other boxes (UTXOs) without consuming them.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Read data without consuming UTXOs
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Access off-chain data and oracles
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Minimize transaction fees
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-cyan-400 mb-3">Cardano's Reference Inputs</h4>
                <p className="text-gray-300 mb-3 text-sm">
                  Cardano introduced reference inputs in the Vasil Hardfork, enabling functionality similar to Ergo's data inputs.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Access data from other datums
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Integrate off-chain data
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Expand platform applications
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Collaboration */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <GitBranch className="w-6 h-6 text-green-400" /> Collaboration
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Ergo and Cardano are pioneers in implementing the extended UTXO (eUTXO) model and have collaborated to advance research and development in this area through the eUTXO Alliance.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-green-400 mb-2">Rosen Bridge</h4>
                <p className="text-gray-300 text-sm mb-3">
                  Currently live bridge enabling transfer of wrapped ADA tokens between Cardano and Ergo, promoting interoperability and collaboration.
                </p>
                <ul className="space-y-1 text-gray-400 text-xs">
                  <li>• Transfer wrapped ADA tokens</li>
                  <li>• Access DeFi ecosystem on Ergo</li>
                  <li>• Bridge back to Cardano</li>
                </ul>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-green-400 mb-2">ErgoMixer</h4>
                <p className="text-gray-300 text-sm mb-3">
                  The only token mixer in the space, enabling users to mix wrapped ADA and other native tokens like wrapped HOSKY.
                </p>
                <ul className="space-y-1 text-gray-400 text-xs">
                  <li>• Mix wrapped ADA tokens</li>
                  <li>• Bridge back to Cardano</li>
                  <li>• Use in SigmaFi, SigmaO, dApps</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <FileQuestion className="w-6 h-6 text-blue-400" /> Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="border-b border-neutral-700 pb-4">
              <h4 className="font-bold text-orange-400 mb-2">What are the similarities and differences between Ergo and Cardano's native assets?</h4>
              <p className="text-gray-300 text-sm">
                Ergo and Cardano both support native assets within their respective blockchain ecosystems. They both utilize the eUTXO model, but they employ different scripting languages (Ergo uses ErgoScript, while Cardano uses Plutus) and have distinct approaches to data storage, global state management, and minting policies.
              </p>
            </div>
            <div className="border-b border-neutral-700 pb-4">
              <h4 className="font-bold text-orange-400 mb-2">Can Ergo's multiasset ledger interact with Cardano's ledger?</h4>
              <p className="text-gray-300 text-sm">
                While Ergo and Cardano share similarities due to their use of the eUTXO model, their ledgers are not directly interoperable. This is primarily due to differences in their scripting languages, minting policies, and data handling mechanisms.
              </p>
            </div>
            <div className="border-b border-neutral-700 pb-4">
              <h4 className="font-bold text-orange-400 mb-2">Does Ergo have a feature similar to Cardano's CIP25?</h4>
              <p className="text-gray-300 text-sm">
                Ergo has a robust set of features and improvements, but as of now, there is no direct equivalent to Cardano's CIP25 in the Ergo ecosystem.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-orange-400 mb-2">Does Ergo offer a feature like Cardano's dbsync?</h4>
              <p className="text-gray-300 text-sm">
                Yes, Ergo provides a similar feature through its Explorer tool, which allows users to synchronize and interact with the Ergo blockchain.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 text-center">Explore More About eUTXO</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/Docs/introduction/utxo-vs-account"
              className="flex items-center justify-center px-4 py-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
            >
              <Database className="w-5 h-5 mr-2 text-orange-400" />
              <span className="text-gray-300">UTXO vs Account</span>
            </Link>
            <Link
              href="/Docs/introduction/atomic-swaps"
              className="flex items-center justify-center px-4 py-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
            >
              <Zap className="w-5 h-5 mr-2 text-cyan-400" />
              <span className="text-gray-300">Atomic Swaps</span>
            </Link>
            <Link
              href="/Docs/developers"
              className="flex items-center justify-center px-4 py-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
            >
              <Code className="w-5 h-5 mr-2 text-green-400" />
              <span className="text-gray-300">Developer Docs</span>
            </Link>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="utxo-state">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            UTXO State Management
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            Understanding how Ergo manages UTXO state and the implications for smart contract development and network performance.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            The UTXO (Unspent Transaction Output) state is a fundamental concept in blockchain technology, particularly in platforms that use the UTXO model, such as Ergo and Cardano.
          </p>
        </div>

        {/* Quote Section */}
        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
          <blockquote className="text-xl italic text-center text-gray-300">
            "The UTXO model differs from the account-based model used by other platforms like Ethereum. The account-based model requires nodes to check all accounts to validate the system, whereas in the UTXO model, nodes primarily verify transactions."
          </blockquote>
        </div>

        {/* Core Concepts */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Database className="w-5 h-5 text-orange-400" /> UTXO State
            </h3>
            <p className="text-gray-300 mb-4">
              The UTXO state is a database of all unspent transaction outputs, or boxes. Each box is an immutable unit, which can be created or removed, but never altered.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Database of unspent outputs
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Immutable box units
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Unique box IDs
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Code className="w-5 h-5 text-cyan-400" /> Transaction Validation
            </h3>
            <p className="text-gray-300 mb-4">
              In the eUTXO model, Ergo allows smart contracts to utilize UTXOs as data inputs without modifying them, enabling parallel computation and facilitating non-custodial atomic swaps.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Parallel computation
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Non-custodial atomic swaps
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Complex operations support
              </li>
            </ul>
          </div>
        </div>

        {/* UTXO Model and Transactions */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Zap className="w-6 h-6 text-blue-400" /> UTXO Model and Transactions
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>
              In the UTXO model, a transaction consumes unspent outputs from previous transactions and creates new output(s) that can be used as inputs for future transactions. These transactions are atomic state transition operations, which means they destroy a box from the state and create new ones.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-orange-400 mb-2">Input Boxes</h4>
                <p className="text-gray-300 text-sm mb-3">
                  The source of funds for the transaction and will be destroyed by the transaction.
                </p>
                <ul className="space-y-1 text-gray-400 text-xs">
                  <li>• Consume unspent outputs</li>
                  <li>• Destroyed during transaction</li>
                  <li>• Require proof of spending correctness</li>
                </ul>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-cyan-400 mb-2">Output Boxes</h4>
                <p className="text-gray-300 text-sm mb-3">
                  The destination of funds and will be created by the transaction.
                </p>
                <ul className="space-y-1 text-gray-400 text-xs">
                  <li>• Created during transaction</li>
                  <li>• Added to UTXO state</li>
                  <li>• Available for future transactions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* UTXO State and Boxes */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-green-400" /> UTXO State and Boxes
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Each box is not just a simple coin; it houses data, code, and registers, with all of its contents exclusively stored in the registers. Four pre-defined registers contain the box's monetary value, its protection script, and the ID of the transaction that created the box.
            </p>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-3">Box Structure:</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                    <span><strong>Monetary Value:</strong> Amount of cryptocurrency</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                    <span><strong>Protection Script:</strong> Smart contract logic</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                    <span><strong>Transaction ID:</strong> Creator transaction</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                    <span><strong>Unique ID:</strong> Derived from contents</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-orange-300 font-semibold">
              Each box has a unique ID, derived from the unique contents of the box, including the data of the transaction that created it.
            </p>
          </div>
        </div>

        {/* UTXO and Cryptocurrency */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Coins className="w-6 h-6 text-yellow-400" /> UTXO and Cryptocurrency
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Each UTXO represents a certain amount of cryptocurrency and can only be spent once by the owner of the private key associated with it. When a UTXO is spent, it is removed from the UTXO state. When a transaction creates new outputs, they are added to the UTXO state.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-red-400 mb-2">When UTXO is Spent</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 text-red-400">→</div>
                    Removed from UTXO state
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 text-red-400">→</div>
                    Cannot be spent again
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 text-red-400">→</div>
                    Requires private key
                  </li>
                </ul>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-green-400 mb-2">When New Outputs Created</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Added to UTXO state
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Available for future spending
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Unique identifier assigned
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Advantages of UTXO Model */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-blue-400" /> Parallelizability
            </h3>
            <p className="text-gray-300 mb-4">
              The inherent design of UTXO supports parallel transaction processing, making it simpler to scale the network.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Parallel transaction processing
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Improved network scalability
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Reduced bottlenecks
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5 text-green-400" /> Improved Privacy
            </h3>
            <p className="text-gray-300 mb-4">
              UTXOs provide better privacy through their one-time use nature and clear ownership structure.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                One-time use nature
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Clear ownership structure
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Enhanced confidentiality
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Globe className="w-5 h-5 text-purple-400" /> Off-Chain Compatibility
            </h3>
            <p className="text-gray-300 mb-4">
              UTXOs are more compatible with stateless client solutions and well-suited for off-chain and sidechain protocols.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Stateless client support
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Sidechain protocols
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Seamless integration
              </li>
            </ul>
          </div>
        </div>

        {/* Challenges in UTXO Model */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Brain className="w-6 h-6 text-orange-400" /> Challenges in UTXO Model
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>
              The UTXO model also presents unique challenges for developers, such as handling UTXO fragmentation and understanding the concept of "change" outputs.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-orange-400 mb-2">Developer Challenges</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 text-yellow-400">⚠</div>
                    UTXO fragmentation handling
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 text-yellow-400">⚠</div>
                    Understanding "change" outputs
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 text-yellow-400">⚠</div>
                    Complex transaction construction
                  </li>
                </ul>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-cyan-400 mb-2">Technical Requirements</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 text-blue-400">→</div>
                    Proof of spending correctness
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 text-blue-400">→</div>
                    Context extension (key-value map)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 text-blue-400">→</div>
                    Data inputs and signatures
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-orange-300 font-semibold">
              If the transaction is spending boxes protected by a non-trivial script, its inputs should also contain proof of spending correctness - context extension (user-defined key-value map) and data inputs (links to existing boxes in the state) that you may use during script reduction to crypto, signatures that satisfy the remaining cryptographic protection of the script.
            </p>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Star className="w-6 h-6 text-yellow-400" /> Conclusion
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>
              The UTXO model, despite its challenges, offers a robust and efficient method for transaction validation and execution of smart contracts. By leveraging the advantages of UTXO and extending its capabilities with eUTXO, Ergo provides a powerful and efficient platform for building and executing smart contracts.
            </p>
            <p>
              This makes it easier to perform complex operations securely and efficiently, enabling the development of sophisticated decentralized applications that can scale with the network's growth.
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 text-center">Learn More About UTXO</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/Docs/introduction/utxo-vs-account"
              className="flex items-center justify-center px-4 py-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
            >
              <Database className="w-5 h-5 mr-2 text-orange-400" />
              <span className="text-gray-300">UTXO vs Account</span>
            </Link>
            <Link
              href="/Docs/introduction/ergo-cardano"
              className="flex items-center justify-center px-4 py-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
            >
              <GitBranch className="w-5 h-5 mr-2 text-cyan-400" />
              <span className="text-gray-300">Ergo vs Cardano</span>
            </Link>
            <Link
              href="/Docs/developers"
              className="flex items-center justify-center px-4 py-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
            >
              <Code className="w-5 h-5 mr-2 text-green-400" />
              <span className="text-gray-300">Developer Docs</span>
            </Link>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
} 