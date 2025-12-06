
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { 
  Users, 
  Shield, 
  Code, 
  ExternalLink,
  ChevronRight,
  Globe,
  Zap,
  BookOpen,
  MessageCircle,
  FileText,
  CheckCircle,
  GitBranch,
  Brain
} from 'lucide-react';
import Link from 'next/link';

export default function LETSPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Local Exchange Trading Systems (LETS)
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Innovative mutual credit associations that empower communities to create their own local currencies, 
          fostering sustainable economies independent of traditional monetary systems.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/ecosystem/financial/monetary-systems"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Monetary Systems
          </Link>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-orange-400 hover:text-orange-300 hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> Learn More
          </a>
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Brain className="w-6 h-6 text-blue-400" /> What are LETS?
        </h2>
        <p className="text-gray-300">
          Local Exchange Trading Systems (LETS) are innovative mutual credit associations that empower communities to create their own local currencies. 
          In a LETS, members can generate common credit money individually, which is then recorded in a shared ledger. 
          This system enhances the velocity of trade, goods, and services within a community, providing a robust mechanism for economic resilience.
        </p>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-400" /> Community-Driven
          </h3>
          <p className="text-gray-300 mb-4">
            LETS enable communities to create their own local currencies, fostering sustainable economies independent of traditional monetary systems.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Local credit generation
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Shared ledger system
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Community autonomy
            </li>
          </ul>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-green-400" /> Economic Resilience
          </h3>
          <p className="text-gray-300 mb-4">
            LETS provide economic resilience during crises, enabling trade and services even when participants have no traditional cash.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Crisis-resistant trading
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              No cash requirements
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Continuous economic activity
            </li>
          </ul>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Globe className="w-5 h-5 text-purple-400" /> Blockchain Integration
          </h3>
          <p className="text-gray-300 mb-4">
            Blockchain-based LETS offer secure, transparent, and scalable solutions with interoperability between different systems.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Immutable transactions
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Cross-system liquidity
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Automated governance
            </li>
          </ul>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-orange-400" /> Trustless Operation
          </h3>
          <p className="text-gray-300 mb-4">
            Ergo's Sigma Protocols enable trustless LETS operation without centralized control or management committees.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              No central authority
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Autonomous operation
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Sigma Protocol security
            </li>
          </ul>
        </div>
      </div>

      {/* How it Works Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <GitBranch className="w-6 h-6 text-green-400" /> How LETS Works
        </h2>
        <p className="text-gray-300 mb-4">
          LETS can be visualized as a decentralized financial network where participants exchange goods and services 
          using locally-created credit. Here's a simple example to illustrate the process:
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-blue-400 mb-2">Step 1: Transaction Initiation</h4>
            <p className="text-gray-300 text-sm">Alice wants to buy milk from Bob, both with zero balance initially.</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-blue-400 mb-2">Step 2: Credit Exchange</h4>
            <p className="text-gray-300 text-sm">They agree on price (2 Euros), Alice's balance becomes -2, Bob's becomes +2.</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-blue-400 mb-2">Step 3: Credit Circulation</h4>
            <p className="text-gray-300 text-sm">Bob spends his 2 Euros on beer from Charlie, continuing the cycle.</p>
          </div>
        </div>
      </div>

      {/* Historical Context Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Shield className="w-6 h-6 text-orange-400" /> LETS in Times of Crisis
        </h2>
        <p className="text-gray-300 mb-4">
          LETS have historically emerged as a solution during economic crises. The first LETS was established by 
          Michael Linton in 1981 in a Canadian town grappling with depression. Similarly, during the Argentine 
          Great Depression (1998-2002), LETS provided a lifeline for communities facing severe economic hardship.
        </p>
        <div className="bg-neutral-800/50 rounded-lg p-4">
          <h4 className="font-bold text-orange-400 mb-2">Traditional LETS Characteristics:</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-orange-400" />
              Most groups consist of 50 to 250 members
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-orange-400" />
              Transactions recorded manually in paper-based ledgers
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-orange-400" />
              Maintained by a committee
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-orange-400" />
              Vulnerable to counterfeit notes and administrative fraud
            </li>
          </ul>
        </div>
      </div>

      {/* Blockchain Benefits Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Globe className="w-6 h-6 text-purple-400" /> Why Blockchain-Based LETS?
        </h2>
        <p className="text-gray-300 mb-4">
          A blockchain-based LETS could revolutionize this concept by offering a more secure, transparent, and scalable solution. 
          By utilizing blockchain technology, multiple small credit systems can operate on the same ledger, enabling:
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-purple-400 mb-2">Interoperability</h4>
            <p className="text-gray-300 text-sm">Different LETS can interact seamlessly, allowing liquidity to flow between them as needed.</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-purple-400 mb-2">Resilience</h4>
            <p className="text-gray-300 text-sm">Blockchain ensures that transactions are immutable, secure, and transparent, reducing the risks associated with traditional paper-based systems.</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-purple-400 mb-2">Innovation</h4>
            <p className="text-gray-300 text-sm">The ability to design new financial products that strengthen the system, such as dynamic credit limits and automated collateralization requirements.</p>
          </div>
        </div>
        <p className="text-gray-300 mt-6">
          Hundreds of LETS could coexist on the same blockchain, each with its unique participation criteria, 
          credit limits, and other parameters, yet remain connected through gateways that manage liquidity and 
          exposure to toxic debt.
        </p>
      </div>

      {/* Ergo Implementation Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Code className="w-6 h-6 text-green-400" /> Implementing LETS on Ergo
        </h2>
        <p className="text-gray-300 mb-4">
          Ergo's blockchain offers unique capabilities to implement a LETS system without the need for centralized control. 
          Thanks to Sigma Protocols, we can create a Trustless LETS on Ergo with no need for a membership record or 
          management committee, allowing the system to operate with complete autonomy.
        </p>
        <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
          <h4 className="font-bold text-blue-400 mb-2">Key Advantages on Ergo:</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Sigma Protocols enable trustless operation
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              No centralized membership management
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Complete system autonomy
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              ErgoScript for custom logic
            </li>
          </ul>
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-blue-400" /> Explore Further
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <a href="#" target="_blank" rel="noopener noreferrer"
            className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition">
            <h4 className="font-bold text-blue-400 mb-2 flex items-center gap-2">
              <FileText className="w-5 h-5" /> Draft Contracts
            </h4>
            <p className="text-gray-300 text-sm">For a basic implementation of LETS, check out our basic implementation guide.</p>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer"
            className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition">
            <h4 className="font-bold text-green-400 mb-2 flex items-center gap-2">
              <Shield className="w-5 h-5" /> Trustless LETS
            </h4>
            <p className="text-gray-300 text-sm">Learn more about creating a fully autonomous LETS system with Trustless LETS.</p>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer"
            className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition">
            <h4 className="font-bold text-purple-400 mb-2 flex items-center gap-2">
              <BookOpen className="w-5 h-5" /> Community Insights
            </h4>
            <p className="text-gray-300 text-sm">Read our blog post for a deeper introduction to LETS.</p>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer"
            className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition">
            <h4 className="font-bold text-orange-400 mb-2 flex items-center gap-2">
              <MessageCircle className="w-5 h-5" /> Latest Developments
            </h4>
            <p className="text-gray-300 text-sm">Join the ongoing discussion in the LETS Discussion Summary on ErgoForum to stay updated on the latest developments.</p>
          </a>
        </div>
      </div>

      {/* Related Systems */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Globe className="w-6 h-6 text-cyan-400" /> Related Monetary Systems
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            href="/docs/ecosystem/financial/monetary-systems/sigmausd"
            className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition"
          >
            <h4 className="font-bold text-orange-400 mb-2">SigmaUSD</h4>
            <p className="text-gray-300 text-sm">The first eUTxO-based stablecoin on Ergo.</p>
          </Link>
          <Link
            href="/docs/ecosystem/financial/monetary-systems/chaincash"
            className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition"
          >
            <h4 className="font-bold text-green-400 mb-2">ChainCash</h4>
            <p className="text-gray-300 text-sm">Elastic money creation combining trust and blockchain assets.</p>
          </Link>
          <Link
            href="/docs/ecosystem/financial/monetary-systems/gluon"
            className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition"
          >
            <h4 className="font-bold text-purple-400 mb-2">Gluon</h4>
            <p className="text-gray-300 text-sm">Dual to liquidity pools with nuclear reaction-inspired mechanisms.</p>
          </Link>
          <Link
            href="/docs/ecosystem/financial/monetary-systems/dexygold"
            className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition"
          >
            <h4 className="font-bold text-yellow-400 mb-2">DexyGold</h4>
            <p className="text-gray-300 text-sm">Seigniorage-based stablecoin pegged to USD/XAU (gold).</p>
          </Link>
        </div>
      </div>
    </>
  );
} 