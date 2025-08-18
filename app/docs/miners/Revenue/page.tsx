import React from 'react';
import { 
  Coins, 
  TrendingUp, 
  Server, 
  Layers, 
  Settings, 
  ExternalLink,
  CheckCircle, 
  DollarSign,
  ArrowUpRight,
  Zap,
  Database,
  GitBranch,
  Clock,
  Users,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';

export default function RevenuePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Miner Revenue Streams
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          As Ergo's emission schedule concludes around 2045, ensuring continued miner incentivization is paramount. Ergo's architecture supports diverse revenue streams, promoting network growth and long-term sustainability beyond traditional block rewards.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/Docs/introduction/storage-rent"
            className="inline-flex items-center px-6 py-3 bg-green-500 rounded-xl font-semibold text-black hover:bg-green-600 transition-transform hover:scale-105"
          >
            <Database className="w-5 h-5 mr-2" /> Learn Storage Rent
          </Link>
          <Link
            href="/Docs/miners/mining-guides"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <Settings className="w-5 h-5 mr-2" /> Mining Guides
          </Link>
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-green-400" /> Revenue Sustainability Vision
        </h2>
        <p className="text-gray-300 mb-4">
          Ergo's transition from emission-based rewards to sustainable revenue models ensures long-term network security. Our multi-faceted approach combines proven mechanisms with innovative blockchain economics to maintain miner incentives well beyond the emission period.
        </p>
        <div className="bg-neutral-800/50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-5 h-5 text-green-400" />
            <span className="font-semibold text-green-400">Timeline: Emission ends ~2045</span>
          </div>
          <p className="text-gray-300 text-sm">
            Transition period allows gradual adoption of alternative revenue streams while maintaining network security.
          </p>
        </div>
      </div>

      {/* Revenue Streams Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        
        {/* Transaction Fees */}
        <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-blue-400" /> Transaction Fees
          </h3>
          <p className="text-gray-300 mb-4">
            Dynamic fee structure with miner-adjustable parameters through on-chain voting. Potential for MEV (Maximum Extractable Value) opportunities through transaction ordering.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm mb-4">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              On-chain governance for fee adjustments
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Front-running revenue opportunities
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Market-responsive pricing mechanisms
            </li>
          </ul>
          <div className="bg-neutral-800/50 rounded-lg p-3">
            <span className="text-blue-400 font-semibold text-sm">Status:</span>
            <span className="text-white text-sm ml-2">Active & Growing</span>
          </div>
        </div>

        {/* Storage Rent */}
        <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Database className="w-5 h-5 text-purple-400" /> Storage Rent
          </h3>
          <p className="text-gray-300 mb-4">
            Already active demurrage system providing steady income. Encourages efficient UTXO management while generating continuous revenue for miners.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm mb-4">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Continuous revenue stream
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Network efficiency incentives
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Automatic UTXO cleanup
            </li>
          </ul>
          <div className="bg-neutral-800/50 rounded-lg p-3">
            <span className="text-purple-400 font-semibold text-sm">Status:</span>
            <span className="text-green-300 text-sm ml-2">✓ Implemented</span>
          </div>
        </div>

      </div>

      {/* Layer 2 Infrastructure */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Layers className="w-6 h-6 text-cyan-400" /> Layer 2 Infrastructure
        </h2>
      <p className="text-gray-300 mb-6">
          Layer 2 solutions enhance scalability through off-chain processing. Miners can operate L2 infrastructure, earning fees while contributing to network efficiency and user experience.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-semibold text-cyan-400 mb-2">State Channels</h4>
            <p className="text-gray-300 text-sm mb-2">High-throughput off-chain transaction processing</p>
            <ul className="space-y-1 text-gray-400 text-xs">
              <li>• Instant transaction finality</li>
              <li>• Reduced on-chain congestion</li>
              <li>• Operator fee opportunities</li>
            </ul>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-semibold text-cyan-400 mb-2">Sidechains</h4>
            <p className="text-gray-300 text-sm mb-2">Specialized blockchain networks for specific use cases</p>
            <ul className="space-y-1 text-gray-400 text-xs">
              <li>• Application-specific optimizations</li>
              <li>• Cross-chain asset transfers</li>
              <li>• Validation rewards</li>
            </ul>
          </div>
        </div>

        <div className="bg-neutral-800/50 rounded-lg p-4">
          <h4 className="font-semibold text-cyan-400 mb-2">Sigma Chains Integration</h4>
          <p className="text-gray-300 text-sm">
            Leverage Sigma Chain expertise to provide robust L2 infrastructure, supporting various sidechain constructions and earning diverse revenue streams.
          </p>
        </div>
      </div>

      {/* Sidechain Rewards */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <GitBranch className="w-6 h-6 text-orange-400" /> Sidechain Rewards
        </h2>
      <p className="text-gray-300 mb-6">
          Ergo's sidechain architecture provides platforms for dApp deployment. Miners secure these chains, earning rewards while supporting ecosystem growth.
        </p>

        {/* Quote */}
        <div className="bg-neutral-800/50 border-l-4 border-orange-400 rounded-lg p-4 mb-6">
          <blockquote className="text-gray-300 italic mb-2">
            "For incentivizing weak blocks reporting, they can commit to sidechains, thus making fast sidechains possible and miners will get rewards from that."
      </blockquote>
          <p className="text-gray-400 text-sm">
            — <a 
              href="https://www.ergoforum.org/t/a-scalability-plan-for-ergo/226/5" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-orange-400 hover:text-orange-300 inline-flex items-center gap-1"
            >
              A Scalability Plan for Ergo <ExternalLink className="w-3 h-3" />
            </a>
          </p>
        </div>

        {/* Sidechain Types */}
        <div className="space-y-4">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <h4 className="font-semibold text-orange-400">Merged-Mined Sidechains</h4>
            </div>
            <p className="text-gray-300 text-sm">Secure multiple chains simultaneously using existing mining infrastructure</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <h4 className="font-semibold text-blue-400">Double Merged-Mined Sidechains</h4>
            </div>
            <p className="text-gray-300 text-sm">Enhanced security model with dual mining commitments</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
              <h4 className="font-semibold text-green-400">Dedicated Algorithm Sidechains</h4>
            </div>
            <p className="text-gray-300 text-sm">Specialized mining algorithms for specific use cases and applications</p>
          </div>
        </div>
      </div>

      {/* Emission Schedule Adjustment */}
      <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Settings className="w-6 h-6 text-yellow-400" /> Emission Schedule Flexibility
        </h2>
        <p className="text-gray-300 mb-4">
          Ergo's governance model allows emission schedule adjustments through on-chain voting and soft forks, ensuring smooth transitions between reward mechanisms.
        </p>
        
        <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
          <h4 className="font-semibold text-yellow-400 mb-2">Adaptive Governance</h4>
          <p className="text-gray-300 text-sm mb-3">
            Community-driven decisions on emission policy based on network conditions and revenue stream adoption.
          </p>
          <a 
            href="https://eprint.iacr.org/2021/577.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-300 text-sm inline-flex items-center gap-1"
          >
            📄 "Soft Power: Upgrading Chain Macroeconomic Policy" <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-neutral-800/50 rounded-lg p-3 text-center">
            <Zap className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
            <h5 className="font-semibold text-yellow-400 text-sm">Soft Forks</h5>
            <p className="text-gray-300 text-xs">Non-disruptive policy updates</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-3 text-center">
            <Users className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <h5 className="font-semibold text-blue-400 text-sm">Community Voting</h5>
            <p className="text-gray-300 text-xs">Democratic decision making</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-3 text-center">
            <TrendingUp className="w-6 h-6 text-green-400 mx-auto mb-2" />
            <h5 className="font-semibold text-green-400 text-sm">Smooth Transition</h5>
            <p className="text-gray-300 text-xs">Gradual revenue adoption</p>
          </div>
        </div>
      </div>

      {/* Future Opportunities */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <ArrowUpRight className="w-6 h-6 text-purple-400" /> Future Revenue Opportunities
        </h2>
      <p className="text-gray-300 mb-6">
          As Ergo evolves and attracts broader adoption, new revenue streams will emerge. Active participation in these opportunities ensures network security while contributing to ecosystem growth.
        </p>

        <div className="space-y-4">
          <div className="flex items-start gap-4 bg-neutral-800/30 rounded-lg p-4">
            <Server className="w-6 h-6 text-blue-400 mt-1" />
            <div>
              <h4 className="font-semibold text-blue-400 mb-1">Infrastructure Services</h4>
              <p className="text-gray-300 text-sm">Oracle operations, data feeds, and decentralized services</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-neutral-800/30 rounded-lg p-4">
            <Coins className="w-6 h-6 text-green-400 mt-1" />
            <div>
              <h4 className="font-semibold text-green-400 mb-1">DeFi Protocol Rewards</h4>
              <p className="text-gray-300 text-sm">Liquidity provision, yield farming, and protocol governance</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-neutral-800/30 rounded-lg p-4">
            <GitBranch className="w-6 h-6 text-purple-400 mt-1" />
            <div>
              <h4 className="font-semibold text-purple-400 mb-1">Cross-Chain Bridges</h4>
              <p className="text-gray-300 text-sm">Validator roles in interoperability protocols</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white">Stay Informed</h3>
        </div>
        <p className="text-gray-300 mb-4">
          Monitor Ergo community announcements for emerging revenue opportunities. Strategic participation in these streams maximizes earning potential while securing the network's future.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/Docs/introduction/entities"
            className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 hover:bg-green-500/30 transition-colors text-sm"
          >
            Ergo Foundation <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
          <Link
            href="/Docs/miners/governance"
            className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-300 hover:bg-blue-500/30 transition-colors text-sm"
          >
            Mining Governance <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </>
  );
} 