import React from 'react';
import { 
  Rocket, 
  Shield, 
  Users, 
  Code, 
  Zap, 
  CheckCircle, 
  ExternalLink,
  ChevronRight,
  Brain,
  Lock,
  Cpu,
  Coins,
  GitBranch
} from 'lucide-react';
import Link from 'next/link';

export default function WhyErgoPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Why Ergo?
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Ergo is a next-generation smart contract platform that ensures the economic freedom of ordinary people through secure, accessible, and decentralized financial tools. Backed by a powerful scripting language, advanced cryptographic features, and a foundation rooted in the best principles of blockchain technology, Ergo is poised to revolutionize the concept of Contractual Money.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/introduction/key-features"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <Rocket className="w-5 h-5 mr-2" /> Explore Key Features
          </Link>
          <Link
            href="/docs/developers"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <Code className="w-5 h-5 mr-2" /> Start Building
          </Link>
        </div>
      </div>

      {/* Vision Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Brain className="w-6 h-6 text-orange-400" /> The Vision Behind Ergo
        </h2>
        <p className="text-gray-300">
          Ergo encapsulates over a decade of blockchain evolution, merging proven concepts with the latest in peer-reviewed academic research. This blend has empowered Ergo to embed advanced cryptographic features directly into its core, crafting a resilient blockchain equipped for future innovations.
        </p>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-400" /> Strength and Security
          </h3>
          <p className="text-gray-300 mb-4">
            Engineered with a strong emphasis on security and versatility, Ergo offers a reliable foundation for dApps to operate with predictable costs. Its smart contracts ensure Turing completeness without compromising on predictability or affordability.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Declarative programming model
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Predictable execution costs
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Sigma Protocols integration
            </li>
          </ul>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Lock className="w-5 h-5 text-blue-400" /> Intelligent and User-Friendly
          </h3>
          <p className="text-gray-300 mb-4">
            Ergo leverages Sigma Protocols (Σ-Protocols) to power its smart contracts, enabling the use of efficient zero-knowledge proofs. This allows for the performance of complex, privacy-sensitive tasks without intermediaries.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Zero-knowledge proofs
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Trustless environment
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Application-level privacy
            </li>
          </ul>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-purple-400" /> Secure and Accessible to All
          </h3>
          <p className="text-gray-300 mb-4">
            Ergo's dedication to universal blockchain security is evident through its implementation of Non-Interactive Proofs of Proof-of-Work (NIPoPoWs). This feature allows users to transact and verify with confidence without a full node.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              NIPoPoWs implementation
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Lightweight verification
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Storage Rent system
            </li>
          </ul>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Coins className="w-5 h-5 text-yellow-400" /> Commodity Money and Innovation
          </h3>
          <p className="text-gray-300 mb-4">
            Ergo transcends the traditional concept of a blockchain token, embodying commodity money with real-world consumption of resources for mining. This approach distinguishes Ergo with unique features.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Long-term mining incentives
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              SigmaFi bonds
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Cryptographic protocols
            </li>
          </ul>
        </div>
      </div>

      {/* Genesis Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <GitBranch className="w-6 h-6 text-cyan-400" /> The Genesis of Ergo
        </h2>
        <p className="text-gray-300 mb-4">
          Launched in 2019 by esteemed developers and cryptocurrency luminaries, including Alex Chepurnoy and Dmitry Meshkov, Ergo emerged from a shared vision to revolutionize the blockchain landscape.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Fixed Supply</h4>
            <p className="text-gray-300 text-sm">Ergo has a fixed supply of 97,739,924 coins, combating inflation.</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Extended Emission</h4>
            <p className="text-gray-300 text-sm">Through EIP-27, Ergo's mining rewards are extended for approximately 17.38 years.</p>
          </div>
        </div>
      </div>

      {/* Proof of Work Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Zap className="w-6 h-6 text-yellow-400" /> Why Ergo Embraces Proof-of-Work
        </h2>
        <p className="text-gray-300">
          Ergo utilizes the Autolykos Proof-of-Work protocol, demonstrating its commitment to decentralization and fairness. Proof of Work enables a user-friendly environment where lightweight clients can interact directly with the blockchain, creating a truly programmable currency that is accessible and ready for use today.
        </p>
      </div>

      {/* Comparison Tables */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">How Does Ergo Address Bitcoin's Challenges?</h2>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border border-neutral-700 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-neutral-800">
                <th className="border border-neutral-700 px-4 py-3 text-left text-orange-400 font-semibold">Challenges Faced by Bitcoin</th>
                <th className="border border-neutral-700 px-4 py-3 text-left text-cyan-400 font-semibold">Ergo's Solution</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-neutral-900/50">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Limited smart contract functionality</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Rich language (ErgoScript), eUTXO model, Sigma protocols, transaction chaining</td>
              </tr>
              <tr className="bg-neutral-900">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Unclear network security as block reward subsidy approaches zero</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">More revenue from transaction fees due to DeFi and higher usage/scalability, storage rent</td>
              </tr>
              <tr className="bg-neutral-900/50">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Lack of economy around state</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Storage Rent provides additional rewards for miners, compensating for long-term UTXO holding</td>
              </tr>
              <tr className="bg-neutral-900">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Inefficient merkle tree data structure</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">AVL trees enabling drastically more efficient light client verification</td>
              </tr>
              <tr className="bg-neutral-900/50">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Weak and cumbersome optional privacy tools</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Sigma protocols enable true peer-to-peer privacy, ErgoMixer provides better anonymity than Monero</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mb-6">How Does Ergo Address Ethereum's Challenges?</h2>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border border-neutral-700 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-neutral-800">
                <th className="border border-neutral-700 px-4 py-3 text-left text-orange-400 font-semibold">Challenges Faced by Ethereum</th>
                <th className="border border-neutral-700 px-4 py-3 text-left text-cyan-400 font-semibold">Ergo's Solution</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-neutral-900/50">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Creating transactions requires paying fees in ETH</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Babel Fees allow users to pay transaction fees in native tokens</td>
              </tr>
              <tr className="bg-neutral-900">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Gas requirement and the 'stopping problem'</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">No gas fees or stopping problem, most computations done off-chain</td>
              </tr>
              <tr className="bg-neutral-900/50">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">High gas fees and network congestion</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Engineered with long-term scaling in mind, using advanced and well-researched tools</td>
              </tr>
              <tr className="bg-neutral-900">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Node centralization in AWS / Infura</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Anyone can run a node (similar to Bitcoin), mitigants prevent bad node running experience</td>
              </tr>
              <tr className="bg-neutral-900/50">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Censorship: Most blocks are OFAC blocks</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Decentralization and PoW deeply ingrained in Ergo's ethos, resists censorship</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Learn More Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Users className="w-6 h-6 text-blue-400" /> Want to Learn More?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-3">Meet the Minds Behind Ergo</h3>
            <p className="text-gray-300 mb-4">
              Ergo is powered by experienced developers and researchers with strong academic backgrounds in cryptography, compiler theory, blockchain technology, and cryptographic e-cash.
            </p>
            <p className="text-gray-300 mb-4">
              Notable contributor Alexander kushti Chepurnoy co-founded smartcontract.com (now Chainlink), served as a core developer at NXT, and was among the first employees at IOHK.
            </p>
            <Link
              href="/docs/introduction/entities"
              className="inline-flex items-center text-orange-400 hover:text-orange-300"
            >
              Learn More <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3">Resources</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-orange-400" />
                The Ergo Manifesto
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-orange-400" />
                Explore Yield-Generating Strategies on Ergo
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-orange-400" />
                Our comprehensive FAQ
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-orange-400" />
                cafebedouin.org: Why Ergo
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-orange-400" />
                Join our community chats
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6">
        <blockquote className="text-xl italic text-center text-gray-300">
          "Cryptocurrency should provide tools to enrich ordinary people. Small businesses struggling to make ends meet, not big depersonalised financial capital."
        </blockquote>
      </div>
    </>
  );
} 