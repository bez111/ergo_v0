
/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
import React from 'react';
import { 
  Coins, 
  Shield, 
  Code, 
  ExternalLink,
  ChevronRight,
  Lock,
  Cpu,
  Database,
  CheckCircle,
  Zap,
  Users,
  Globe,
  GitBranch,
  Brain,
  GitCommit,
  Network,
  FileText,
  Play,
  BookOpen
} from 'lucide-react';
import Link from 'next/link';

export default function ChainCashPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          ChainCash
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          A decentralized monetary system that enables flexible money creation by combining trust and blockchain-backed assets. ChainCash operates on the Ergo blockchain, allowing users to create and manage digital currency securely, adaptably, and transparently.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/ecosystem/financial/monetary-systems"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Monetary Systems
          </Link>
          <a
            href="https://github.com/ChainCashLabs/chaincash-rs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> View on GitHub
          </a>
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Brain className="w-6 h-6 text-orange-400" /> What is ChainCash?
        </h2>
        <p className="text-gray-300">
          ChainCash addresses the limitations of traditional financial systems and cryptocurrencies by introducing an elastic money supply system that adjusts to economic conditions through a combination of trust and blockchain reserves. It provides a modern implementation of historical free banking systems with blockchain transparency and smart contract guarantees.
        </p>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-400" /> Elastic Money Supply
          </h3>
          <p className="text-gray-300 mb-4">
            ChainCash allows for flexible money creation that adjusts to economic needs, unlike fixed-supply cryptocurrencies like Bitcoin that suffer from price volatility and inelastic supply.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Adapts to economic activity
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Reduces price volatility
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Supports real-world economic needs
            </li>
          </ul>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Network className="w-5 h-5 text-blue-400" /> Trust & Blockchain Assets
          </h3>
          <p className="text-gray-300 mb-4">
            ChainCash combines the transparency of blockchain technology with historical free banking concepts, enabling peer-to-peer monetary systems backed by digital assets and trust.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Transparent transaction records
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Smart contract guarantees
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Reputation-based trust systems
            </li>
          </ul>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Globe className="w-5 h-5 text-purple-400" /> Decentralized & Accessible
          </h3>
          <p className="text-gray-300 mb-4">
            ChainCash makes financial services available to individuals and businesses worldwide, including those without access to traditional banking systems.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              No central authority
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Global accessibility
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Reduced transaction costs
            </li>
          </ul>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-yellow-400" /> Smart Contract Security
          </h3>
          <p className="text-gray-300 mb-4">
            Built on Ergo's secure smart contract platform, ChainCash leverages blockchain security and automated dispute resolution through predefined rules.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Automated transaction validation
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Immutable transaction records
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Programmatic dispute resolution
            </li>
          </ul>
        </div>
      </div>

      {/* Evolution of Money Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <GitBranch className="w-6 h-6 text-cyan-400" /> Evolution of Money
        </h2>
        <p className="text-gray-300 mb-4">
          Historically, money has evolved from primitive forms like barter and commodity money to metal coins, paper money, and fiat currencies. Cryptocurrencies represent the latest step, often considered "digital gold," but their adoption as a medium of exchange has been limited by price volatility and fixed supply.
        </p>
        <p className="text-gray-300 mb-4">
          ChainCash seeks to continue this evolution by creating digital IOU notes backed by blockchain assets, allowing for an elastic money supply that can adapt to economic needs while maintaining the transparency and security of blockchain technology.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Traditional Systems</h4>
            <p className="text-gray-300 text-sm">Centralized, high costs, limited access, government control</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Cryptocurrencies</h4>
            <p className="text-gray-300 text-sm">Price volatility, inelastic supply, limited practical use</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">ChainCash</h4>
            <p className="text-gray-300 text-sm">Elastic supply, trust-based, decentralized, blockchain-backed</p>
          </div>
        </div>
      </div>

      {/* Technical Components Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Code className="w-6 h-6 text-green-400" /> Technical Components
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-400" /> Agents
            </h3>
            <p className="text-gray-300 mb-4">
              Participants in the ChainCash network who issue, accept, and redeem notes. They provide reserves and establish trust within the network.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5 text-green-400" /> Reserves
            </h3>
            <p className="text-gray-300 mb-4">
              Assets locked in smart contracts to back the notes issued by agents, ensuring each note has tangible backing for stability and trust.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-yellow-400" /> Notes
            </h3>
            <p className="text-gray-300 mb-4">
              Digital representations of value backed by reserves and the trust of all agents who have held or transacted with them. All transaction histories are recorded on the blockchain.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <GitCommit className="w-5 h-5 text-purple-400" /> Smart Contracts
            </h3>
            <p className="text-gray-300 mb-4">
              Automated contracts that manage reserves, validate transactions, and handle redemptions based on predefined conditions.
            </p>
          </div>
        </div>
      </div>

      {/* Transaction Workflow Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Zap className="w-6 h-6 text-yellow-400" /> Transaction Workflow
        </h2>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="bg-orange-400 text-black rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <h4 className="font-bold text-orange-400 mb-1">Create Reserve</h4>
              <p className="text-gray-300 text-sm">Alice locks assets (e.g., cryptocurrency) in a smart contract to create a reserve that backs the notes she issues.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-orange-400 text-black rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <h4 className="font-bold text-orange-400 mb-1">Issue Notes</h4>
              <p className="text-gray-300 text-sm">Alice issues a digital note worth $100, backed by her reserve. The note is digitally signed and recorded on the blockchain.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-orange-400 text-black rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <h4 className="font-bold text-orange-400 mb-1">Transfer Notes</h4>
              <p className="text-gray-300 text-sm">Alice transfers the note to Bob in exchange for goods. Bob checks the note's backing and Alice's reputation before accepting it.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-orange-400 text-black rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
            <div>
              <h4 className="font-bold text-orange-400 mb-1">Redeem Notes</h4>
              <p className="text-gray-300 text-sm">Charlie redeems the note for assets from any previous holder's reserve. The smart contract handles the redemption automatically.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Real-World Applications Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Real-World Applications</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Globe className="w-5 h-5 text-green-400" /> International Trade
            </h3>
            <p className="text-gray-300 mb-4">
              A gold mining cooperative in Ghana issues ChainCash notes backed by their gold reserves. The government accepts these notes for taxes, then uses them to purchase oil from Saudi suppliers.
            </p>
            <p className="text-gray-300 text-sm">
              This demonstrates how ChainCash can facilitate international trade by creating trusted, asset-backed digital currency that reduces conversion fees and enhances global trust.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-400" /> Content Creation Platform
            </h3>
            <p className="text-gray-300 mb-4">
              A decentralized platform where creators issue notes backed by their future content output. Fans purchase notes for exclusive access to early releases or special editions.
            </p>
            <p className="text-gray-300 text-sm">
              This empowers creators to directly monetize their work while building engaged communities, eliminating traditional middlemen.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Play className="w-5 h-5 text-purple-400" /> Indie Game Crowdfunding
            </h3>
            <p className="text-gray-300 mb-4">
              Game developers lock ETH into reserves and issue notes representing exclusive in-game assets. Fans trade these notes within the community before the game launches.
            </p>
            <p className="text-gray-300 text-sm">
              This creates a liquid, community-driven economy around the game while avoiding high platform fees and empowering fans.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Network className="w-5 h-5 text-yellow-400" /> Festival Experience
            </h3>
            <p className="text-gray-300 mb-4">
              Festival organizers issue limited-edition tokens tied to NFTs, unlocking exclusive experiences like backstage access or private performances.
            </p>
            <p className="text-gray-300 text-sm">
              This blends physical and digital worlds, creating a hybrid event where participation value extends beyond the festival itself.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Common Questions</h2>
        <div className="space-y-4">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" /> How does ChainCash ensure stability?
            </h3>
            <p className="text-gray-300">
              Stability is achieved through collective backing by multiple agents' reserves and trust. The money supply is elastic, adjusting to economic demand rather than being fixed like traditional cryptocurrencies.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-400" /> Can anyone participate?
            </h3>
            <p className="text-gray-300">
              Yes, ChainCash is designed to be inclusive, allowing anyone to participate by creating reserves, issuing, accepting, and redeeming notes. There are no central authorities controlling access.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5 text-red-400" /> What happens if an agent defaults?
            </h3>
            <p className="text-gray-300">
              If an agent defaults, the note can still be redeemed against the reserves of any other previous signer. Simply accepting and using a ChainCash note does not put your reserves at risk unless you have issued or explicitly signed the note.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Code className="w-5 h-5 text-purple-400" /> How are disputes handled?
            </h3>
            <p className="text-gray-300">
              ChainCash prevents disputes through automatic enforcement of rules by smart contracts. All transactions are recorded transparently and immutably on the blockchain, with smart contracts handling scenarios like refunds and partial redemptions programmatically.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Globe className="w-5 h-5 text-cyan-400" /> Is ChainCash compatible with existing systems?
            </h3>
            <p className="text-gray-300">
              Yes, ChainCash is designed to be flexible and interoperable, making it easy to integrate with existing financial systems and services while maintaining its decentralized nature.
            </p>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-blue-400" /> Resources & Documentation
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-3">Key Resources</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-orange-400" />
                <a href="https://github.com/ChainCashLabs/chaincash-rs" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">ChainCash Server Repository</a>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-orange-400" />
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">ChainCash Whitepaper</a>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-orange-400" />
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">Server Documentation</a>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-orange-400" />
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">Contracts Repository</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3">Videos & Presentations</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-orange-400" />
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">Ergo Summit - Cypherpunk Finance</a>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-orange-400" />
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">ChainCash - part II - Alex Chepurnoy</a>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-orange-400" />
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">Join the ChainCash Experiment</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">First Transactions</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-orange-400" />
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">Reserve Mint</a>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-orange-400" />
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">Note Mint</a>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-orange-400" />
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">Note Spending</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6">
        <blockquote className="text-xl italic text-center text-gray-300">
          "ChainCash provides a modern implementation of historical free banking systems, where multiple banks issued their own notes backed by their reserves. With the transparency and security of blockchain technology, ChainCash enables a decentralized, trust-based monetary system that adapts to the needs of its users."
        </blockquote>
      </div>
    </>
  );
} 