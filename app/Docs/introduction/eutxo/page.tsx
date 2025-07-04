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
  Layers
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
        <div className="mb-10 p-6 rounded-xl bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 shadow">
          <h2 className="text-2xl font-bold mb-4">Understanding Ergo's Transaction Model</h2>
          <p className="text-gray-300 mb-4">
            Ergo, similar to Bitcoin, employs the Unspent Transaction Outputs (UTXO) model instead of the Account model used in platforms like Ethereum. This documentation aims to provide a comprehensive understanding of the UTXO model, also known as the Box model, and highlight the advantages it brings.
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-2 mt-8 flex items-center gap-2"><Database className="w-5 h-5 text-orange-400" /> Account Balance and UTXO</h3>
          <p className="text-gray-300 mb-4">
            In the Account model, a balance is represented as a simple numerical value that increases or decreases with transactions. This parallels real-world transactions where your bank balance changes when money is added or deducted. Transactions to and from an account directly affect the blockchain balance.
          </p>
          <p className="text-gray-300 mb-4">
            On the other hand, the UTXO model, introduced by Bitcoin, takes a different approach. It considers an individual's balance as a collection of unspent outputs, analogous to having multiple portions of bread dough. The total balance is the sum of these portions, or UTXOs. These UTXOs can be split or merged before being transferred to another address. Let's illustrate this with an example:
          </p>
          <div className="bg-neutral-900/70 border border-neutral-700 rounded-xl p-4 mb-4">
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Alice has 100 units (100 ERG). She sends 75 units to Bob and keeps 25 units for herself.</li>
              <li>Charlie has 250 units. He transfers 150 units to Bob and retains 100 units.</li>
              <li>Bob splits 20 units from the 150 units received from Charlie and merges them with the 75 units received from Alice. He then sends a total of 205 units to Dave, keeping 20 units for himself.</li>
            </ul>
          </div>
          <p className="text-gray-300 mb-4">
            <span className="font-semibold text-orange-300">Dave now owns 205 units previously owned by Charlie, Alice, and Bob.</span> In the UTXO model, these units can be split and merged, but they retain their original identity, unlike bread dough. The transaction history of these units can be traced back to when they were initially created.
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-2 mt-8 flex items-center gap-2"><Shield className="w-5 h-5 text-orange-400" /> Advantages of the eUTxO Model over Account-Based Blockchains</h3>
          <p className="text-gray-300 mb-4">
            The UTXO (Unspent Transaction Output) model used in Ergo offers several advantages over account-based blockchains like Ethereum. Let's compare the UTXO model to the account model to highlight these benefits:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-900/70 border border-neutral-700 rounded-xl p-4">
              <span className="font-semibold text-orange-300">Immutability and Security</span>
              <ul className="list-disc pl-6 mt-2 text-gray-300 text-sm">
                <li><b>Ergo's eUTxO model:</b> Each UTXO is immutable and cannot be modified during a transaction. This enhances security and simplifies transaction verification.</li>
                <li><b>Account Model:</b> Account balances can be modified during a transaction, which introduces potential vulnerabilities and requires careful state management.</li>
              </ul>
            </div>
            <div className="bg-neutral-900/70 border border-neutral-700 rounded-xl p-4">
              <span className="font-semibold text-orange-300">Simplicity and Developer-Friendliness</span>
              <ul className="list-disc pl-6 mt-2 text-gray-300 text-sm">
                <li><b>Ergo's eUTxO model:</b> ErgoScript contracts in the UTXO model use a declarative programming paradigm. This simplifies development and reduces the likelihood of mistakes.</li>
                <li><b>Account Model:</b> The account model uses an imperative programming paradigm, which can be more challenging for developers and increase the risk of errors.</li>
              </ul>
            </div>
            <div className="bg-neutral-900/70 border border-neutral-700 rounded-xl p-4">
              <span className="font-semibold text-orange-300">Support for Off-Chain Protocols</span>
              <ul className="list-disc pl-6 mt-2 text-gray-300 text-sm">
                <li><b>Ergo's eUTxO model:</b> Ergo's UTXO model provides better support for off-chain protocols like sidechains and the Lightning Network. Off-chain transaction creation reduces on-chain operations, improving scalability and network efficiency.</li>
                <li><b>Account Model:</b> Account-based blockchains have limited support for off-chain protocols, making it more challenging to scale and utilize layer-2 solutions effectively.</li>
              </ul>
            </div>
            <div className="bg-neutral-900/70 border border-neutral-700 rounded-xl p-4">
              <span className="font-semibold text-orange-300">Scalability and Optimization</span>
              <ul className="list-disc pl-6 mt-2 text-gray-300 text-sm">
                <li><b>Ergo's eUTxO model:</b> The UTXO model allows for efficient off-chain transaction creation and verification. On-chain operations primarily focus on validation checks, reducing computational load and enhancing scalability.</li>
                <li><b>Account Model:</b> In account-based blockchains, most operations occur on-chain, leading to increased computational requirements and potentially limiting scalability.</li>
              </ul>
            </div>
            <div className="bg-neutral-900/70 border border-neutral-700 rounded-xl p-4">
              <span className="font-semibold text-orange-300">Concurrent and Distributed Nature</span>
              <ul className="list-disc pl-6 mt-2 text-gray-300 text-sm">
                <li><b>Ergo's eUTxO model:</b> The UTXO model naturally supports concurrent transactions, as different UTXOs can be processed simultaneously without conflicts. This distributed nature enhances network efficiency and reduces bottlenecks.</li>
                <li><b>Account Model:</b> Account-based models often require sequential processing of transactions involving the same account, which can lead to congestion and slower transaction processing.</li>
              </ul>
            </div>
            <div className="bg-neutral-900/70 border border-neutral-700 rounded-xl p-4">
              <span className="font-semibold text-orange-300">Predictable Transaction Costs</span>
              <ul className="list-disc pl-6 mt-2 text-gray-300 text-sm">
                <li><b>Ergo's eUTxO model:</b> Transaction costs in Ergo are predictable and based on the size of the transaction, not the computational complexity. This eliminates the need for gas-like mechanisms and provides users with clear cost expectations.</li>
                <li><b>Account Model:</b> Gas-based pricing models can lead to unpredictable costs, especially during network congestion, making it difficult for users to estimate transaction fees accurately.</li>
              </ul>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="atomic-swaps">
        <div className="mb-10 p-6 rounded-xl bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 shadow">
          <h2 className="text-2xl font-bold mb-4">Atomic Swaps in Ergo</h2>
          <p className="text-gray-300 mb-4">
            Atomic swaps are a fundamental feature enabled by Ergo's eUTXO model, allowing for trustless cross-chain token exchanges without intermediaries.
          </p>
        </div>
        {/* Add atomic swaps content */}
      </TabsContent>

      <TabsContent value="ergo-cardano">
        <div className="mb-10 p-6 rounded-xl bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 shadow">
          <h2 className="text-2xl font-bold mb-4">Ergo vs Cardano</h2>
          <p className="text-gray-300 mb-4">
            A comparison of how Ergo and Cardano implement the eUTXO model and their respective approaches to smart contracts.
          </p>
        </div>
        {/* Add comparison content */}
      </TabsContent>

      <TabsContent value="utxo-state">
        <div className="mb-10 p-6 rounded-xl bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 shadow">
          <h2 className="text-2xl font-bold mb-4">UTXO State Management</h2>
          <p className="text-gray-300 mb-4">
            Understanding how Ergo manages UTXO state and the implications for smart contract development and network performance.
          </p>
        </div>
        {/* Add state management content */}
      </TabsContent>
    </Tabs>
  );
} 