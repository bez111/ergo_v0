"use client";

import React from "react";
import Head from "next/head";
import {
  Rocket,
  Settings,
  DollarSign,
  Lock,
  Users,
  Gamepad2,
  Wrench,
  Lightbulb,
  ChevronRight,
  Shield,
  Globe,
  Cpu,
  Database,
  Coins,
  GitBranch,
  Zap,
  Brain,
  Code
} from 'lucide-react';
import Link from 'next/link';

export default function EcosystemPage() {
  const ecosystemSections = [
    {
      title: "Infrastructure",
      description: "Explore the technologies powering Ergo: robust Proof of Work consensus, extended UTXO, oracles, bridges, and cross-chain capabilities.",
      icon: Settings,
      color: "text-cyan-400",
      link: "/Docs/ecosystem/infrastructure"
    },
    {
      title: "Financial Tools",
      description: "Dive into the financial backbone of Ergo: decentralized exchanges, stablecoins, lending, synthetics, and new DeFi primitives.",
      icon: DollarSign,
      color: "text-green-400",
      link: "/Docs/ecosystem/financial"
    },
    {
      title: "Privacy Solutions",
      description: "Ergo is at the forefront of privacy innovation, featuring native zero-knowledge proofs, non-custodial mixers, and stealth addresses.",
      icon: Lock,
      color: "text-purple-400",
      link: "/Docs/ecosystem/privacy"
    },
    {
      title: "Decentralized Governance",
      description: "Community-driven governance with DAOs, on-chain voting, and collaborative tools that empower open decision-making.",
      icon: Users,
      color: "text-yellow-400",
      link: "/Docs/ecosystem/daos"
    },
    {
      title: "NFTs & Gaming",
      description: "NFT collections, creator protocols, and on-chain games: experience a thriving digital culture built on Ergo.",
      icon: Gamepad2,
      color: "text-pink-400",
      link: "/Docs/ecosystem/nfts"
    },
    {
      title: "Developer Tooling",
      description: "All the SDKs, APIs, libraries, templates, and resources to build your vision on Ergo’s innovative platform.",
      icon: Wrench,
      color: "text-indigo-400",
      link: "/Docs/ecosystem/tooling"
    }
  ];

  const coreComponents = [
    {
      name: "Autolykos",
      description: "Memory-hard, ASIC-resistant Proof of Work algorithm optimized for GPUs. The security backbone of the Ergo blockchain.",
      link: "/Docs/introduction/autolykos",
      icon: Cpu
    },
    {
      name: "eUTXO",
      description: "Ergo’s extended UTXO model enables complex scripts, arbitrary data, and powerful on-chain logic at the protocol level.",
      link: "/Docs/introduction/eutxo",
      icon: Database
    },
    {
      name: "ErgoScript",
      description: "A robust, high-level smart contract language for expressive and auditable decentralized logic.",
      link: "/Docs/introduction/ergoscript",
      icon: Code
    },
    {
      name: "NIPoPoWs",
      description: "Non-Interactive Proofs of Proof-of-Work: true light clients, secure bridges, and efficient mobile-first interactions.",
      link: "/Docs/introduction/nipopows",
      icon: Zap
    },
    {
      name: "Privacy",
      description: "Native support for discrete log-based zero-knowledge proofs and privacy-preserving transactions.",
      link: "/Docs/introduction/privacy",
      icon: Lock
    },
    {
      name: "Storage Rent",
      description: "A unique mechanism charging small fees for unmoved coins, keeping the blockchain state sustainable long-term.",
      link: "/Docs/introduction/storage-rent",
      icon: Coins
    },
    {
      name: "Oracles",
      description: "Decentralized Oracle Pools securely inject real-world data into Ergo, powering advanced DeFi and cross-chain dApps.",
      link: "/Docs/ecosystem/infrastructure/oracles",
      icon: Globe
    },
    {
      name: "Scaling",
      description: "Layer-1 optimizations, stateless clients, and ongoing sharding research for efficient, future-proof growth.",
      link: "/Docs/introduction/scaling",
      icon: GitBranch
    },
    {
      name: "Parachains/Sidechains",
      description: "Interoperability and horizontal scaling via NIPoPoW-powered sidechains and cross-chain bridges.",
      link: "/Docs/introduction/nipopow-sidechains",
      icon: GitBranch
    }
  ];

  return (
    <>
      <Head>
        <title>Ergo Ecosystem - Explore the Ergo Universe</title>
        <meta name="description" content="Explore the thriving Ergo ecosystem: robust infrastructure, DeFi, privacy, NFTs, governance, and tooling for builders and users." />
        <meta name="keywords" content="ergo ecosystem, decentralized applications, defi, privacy, nft, governance, developer tools, blockchain" />
      </Head>

      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Welcome to the Ergo Ecosystem
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          The Ergo Ecosystem is a thriving hub of decentralized applications, infrastructure, and protocols empowering users, developers, and communities. Explore everything from secure DeFi to private transactions, community DAOs, and next-generation developer tooling.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/Docs/introduction/key-features"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <Rocket className="w-5 h-5 mr-2" /> Explore Key Features
          </Link>
          <Link
            href="/Docs/developers"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <Wrench className="w-5 h-5 mr-2" /> Start Building
          </Link>
        </div>
      </div>

      {/* Ecosystem Overview */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Brain className="w-6 h-6 text-orange-400" /> The Ergo Ecosystem Vision
        </h2>
        <p className="text-gray-300">
          Ergo merges proven blockchain foundations with innovative research, providing a platform for open finance, privacy, and resilient, community-owned infrastructure. Build, experiment, and collaborate on a platform engineered for real-world impact.
        </p>
      </div>

      {/* Ecosystem Sections Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {ecosystemSections.map((section, index) => {
          const IconComponent = section.icon;
          return (
            <Link
              key={index}
              href={section.link}
              className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 block cursor-pointer group"
            >
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2 group-hover:text-cyan-300 transition-colors">
                <IconComponent className={`w-5 h-5 ${section.color}`} />
                {section.title}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {section.description}
              </p>
              <div className="flex items-center text-cyan-300 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* Core Components Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Shield className="w-6 h-6 text-cyan-400" /> Core Components
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {coreComponents.map((component, index) => {
            const IconComponent = component.icon;
            return (
              <Link
                key={index}
                href={component.link}
                className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-400/50 transition-all duration-300 group cursor-pointer block"
              >
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2 group-hover:text-orange-200 transition-colors">
                  <IconComponent className="w-5 h-5 text-orange-300" />
                  {component.name}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {component.description}
                </p>
                <div className="flex items-center text-orange-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Example Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-yellow-400" /> Conceptual Example: Programmable Contracts
        </h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Even the most complex use case is simpler than general-purpose software that can be used to program any contract. After all, generalized logic must be both far-reaching and secure. Moreover, even a specialized contract comprises many steps, each of which is fairly simple. Thus, another requirement for a general-purpose platform is that it should simplify the process of writing contracts, making them as accessible (and safe) as possible. This can be achieved using template agreements with customizable parameters.
        </p>
        
        <h3 className="text-xl font-bold mb-4 text-orange-300">Gold-backed Tokens Example</h3>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Alice uses ERGs to purchase gold-backed tokens from Bob. Bob stores the gold in a secure vault and uses the blockchain to issue one token for every Troy ounce of gold he holds. Alice can then use these tokens freely in different contracts, transferring and trading them under whatever conditions she specifies in the smart contract code. When Alice wants to sell the tokens for physical gold, she can conduct another transaction with Bob, receiving ERG in return at the market price.
        </p>
        
        <p className="text-gray-300 mb-6 leading-relaxed">
          The point of blockchain contracts is to eliminate the need for trust. While the purchase transaction is now trustless, in this instance, Alice still needs to trust Bob about two things: 1. Bob may refuse to swap the gold tokens back to ERG at the correct price when Alice wants to sell. 2. Bob may default on his obligations – running away with the gold or misusing the funds he receives and operating a fractional reserve.
        </p>

        <h3 className="text-xl font-bold mb-4 text-cyan-300">Extending the Contracts with Oracles and Insurance</h3>
        <p className="text-gray-300 mb-6 leading-relaxed">
          We can create an Oracle or decentralized price feed to address these issues. This uses multiple external data sources to record the price of gold on the blockchain at regular intervals. This price feed will be the reference point for the redemption contract that manages the sale of Alice's gold with Bob (or any other participant). Thus, the system automatically enforces the right price when a swap takes place.
        </p>
        
        <p className="text-gray-300 leading-relaxed">
          The second situation requires a third-party insurer, Charlie, whose service is also hosted on the blockchain with a smart contract (perhaps an Insurance dApp). When Alice purchases gold from Bob, she additionally buys an insurance contract from Charlie. The payment can depend on factors like the amount of insurance required and Bob's reputation, managed by a decentralized feedback mechanism. Now, if Bob defaults, Alice will automatically receive the value of her gold tokens, with Charlie effectively acting as a buyer of last resort.
        </p>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-200">Explore the Ecosystem</h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Use the navigation on the left to explore each section in detail. Whether you're interested in DeFi, privacy, NFTs, or governance, the Ergo Ecosystem has something for everyone.
        </p>
        <p className="text-lg text-orange-300 font-semibold">
          Join us in building the future of open, decentralized finance and technology.
        </p>
      </div>
    </>
  );
}
