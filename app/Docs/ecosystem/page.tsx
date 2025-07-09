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
  ExternalLink,
  ChevronRight,
  CheckCircle,
  Globe,
  Shield,
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
      title: "Applications",
      description: "Ergo's ecosystem is built on a solid foundation of key technologies and applications that cater to diverse use cases.",
      icon: Rocket,
      color: "text-orange-400"
    },
    {
      title: "Infrastructure", 
      description: "Explore the underlying technologies that power the Ergo blockchain, including our robust Proof of Work consensus algorithm, sidechains, bridges, and oracle systems.",
      icon: Settings,
      color: "text-cyan-400"
    },
    {
      title: "Financial Tools",
      description: "Dive into the financial applications and services within the Ergo ecosystem, including decentralized exchanges, stablecoins, lending platforms, and derivatives.",
      icon: DollarSign,
      color: "text-green-400"
    },
    {
      title: "Privacy Solutions",
      description: "Ergo is at the forefront of privacy innovation with solutions like non-custodial mixers and stealth addresses.",
      icon: Lock,
      color: "text-purple-400"
    },
    {
      title: "Decentralized Governance",
      description: "Discover the tools and platforms that enable decentralized governance within the Ergo ecosystem, including DAOs and community-driven initiatives.",
      icon: Users,
      color: "text-yellow-400"
    },
    {
      title: "Gaming and Metaverse",
      description: "Ergo supports a growing number of gaming and metaverse projects, offering developers the tools they need to create immersive, blockchain-based experiences.",
      icon: Gamepad2,
      color: "text-pink-400"
    },
    {
      title: "Tooling and Developer Resources",
      description: "Get access to a suite of developer tools and resources designed to facilitate the creation and deployment of decentralized applications on the Ergo blockchain.",
      icon: Wrench,
      color: "text-indigo-400"
    },
    {
      title: "Further Ideas and Innovation",
      description: "Explore new and experimental ideas within the Ergo ecosystem that push the boundaries of what's possible with blockchain technology.",
      icon: Lightbulb,
      color: "text-teal-400"
    }
  ];

  const coreComponents = [
    {
      name: "Autolykos",
      description: "The underlying Memory-hard ASIC-resistant Proof of Work (PoW) algorithm oriented towards GPUs.",
      link: "/Docs/introduction/autolykos",
      icon: Cpu
    },
    {
      name: "eUTXO",
      description: "Ergo uses a so-called extended-UTXO model, which implies UTXOs with the ability to contain arbitrary data and sophisticated scripts.",
      link: "/Docs/introduction/eutxo",
      icon: Database
    },
    {
      name: "NIPoPoWs",
      description: "Enable extended support of light nodes which makes Ergo friendly for end-users, allowing them to run contracts on common devices such as mobile phones without centralised intermediaries.",
      link: "/Docs/introduction/nipopows",
      icon: Zap
    },
    {
      name: "Privacy",
      description: "Ergo provides superior access to discrete log-based zero-knowledge proofs",
      link: "/Docs/introduction/privacy",
      icon: Lock
    },
    {
      name: "Scaling",
      description: "Explore the various scaling solutions being explored on Ergo.",
      link: "/Docs/introduction/scaling",
      icon: GitBranch
    },
    {
      name: "Storage Rent",
      description: "Storage Rent is a nominal fee incurred by unmoved boxes after four years.",
      link: "/Docs/introduction/storage-rent",
      icon: Coins
    },
    {
      name: "ErgoScript",
      description: "A simple high-level language enabling clear descriptions of contractual logic.",
      link: "/Docs/introduction/ergoscript",
      icon: Code
    },
    {
      name: "Oracles",
      description: "The messengers in and out of blockchains. Ergo Blockchain's design allows Oracle Pools, protected by trust heirarchies.",
      link: "/Docs/introduction/oracle-pool",
      icon: Globe
    },
    {
      name: "Parachains/Sidechains",
      description: "Explore the various scaling solutions being explored on Ergo.",
      link: "/Docs/introduction/nipopow-sidechains",
      icon: GitBranch
    }
  ];

  return (
    <>
      <Head>
        <title>Ergo Ecosystem - Explore the Ergo Universe</title>
        <meta name="description" content="Explore the thriving Ergo ecosystem with decentralized applications, tools, and protocols designed to empower users, developers, and communities." />
        <meta name="keywords" content="ergo ecosystem, decentralized applications, defi, privacy, gaming, metaverse, blockchain tools" />
      </Head>

      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Welcome to the Ergo Ecosystem
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          The Ergo Ecosystem is a thriving hub of decentralized applications, tools, and protocols designed to empower users, developers, and communities in the blockchain space. This section provides an overview of the various components that make up the Ergo Ecosystem, highlighting the innovation and utility that drive our growing network.
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
          Ergo's ecosystem encapsulates the best of blockchain innovation, merging proven concepts with cutting-edge research. This comprehensive ecosystem provides the tools, infrastructure, and applications needed to build the future of decentralized finance and beyond.
        </p>
      </div>

      {/* Ecosystem Sections Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {ecosystemSections.map((section, index) => {
          const IconComponent = section.icon;
          return (
            <div 
              key={index}
              className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <IconComponent className={`w-5 h-5 ${section.color}`} />
                {section.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {section.description}
              </p>
            </div>
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
              <div 
                key={index}
                className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-400/50 transition-all duration-300 group cursor-pointer"
                onClick={() => window.location.href = component.link}
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
              </div>
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
          Use the navigation on the left to explore each of these sections in detail. Whether you're interested in financial services, privacy solutions, or decentralized governance, the Ergo Ecosystem has something to offer for everyone.
        </p>
        <p className="text-lg text-orange-300 font-semibold">
          Join us in building the future of decentralized finance and beyond.
        </p>
      </div>
    </>
  );
} 