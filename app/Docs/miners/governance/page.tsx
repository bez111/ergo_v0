import React from 'react';
import { 
  Vote, 
  GitBranch, 
  Shield, 
  Users, 
  Settings, 
  Zap,
  CheckCircle, 
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Lock,
  Clock,
  Layers,
  BarChart3,
  Target,
  Coins
} from 'lucide-react';
import Link from 'next/link';

export default function GovernancePage() {
  return (
    <>
      {/* Back Button */}
      <div className="mb-8">
        <Link
          href="/Docs/miners"
          className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors"
        >
          <span>←</span>
          <span>Back to Miners</span>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Miner Governance
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Ergo's decentralized governance model empowers miners to guide network evolution through transparent voting mechanisms. This ensures long-term economic stability, adaptability, and community-driven decision making without compromising network security.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/Docs/miners/governance/voting"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors justify-center"
          >
            <Vote className="w-5 h-5" />
            Voting Process
          </Link>
          <Link
            href="/Docs/miners/governance/forking"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors justify-center"
          >
            <GitBranch className="w-5 h-5" />
            Forking Mechanisms
          </Link>
          <Link
            href="/Docs/miners/resources"
            className="inline-flex items-center gap-2 border border-gray-600 hover:border-gray-500 text-gray-300 px-6 py-3 rounded-lg transition-colors justify-center"
          >
            <BarChart3 className="w-5 h-5" />
            Miner Resources
          </Link>
        </div>
      </div>

      {/* Governance Philosophy */}
      <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Shield className="w-6 h-6 text-purple-400" /> Governance Philosophy
        </h2>
        <p className="text-gray-300 mb-4">
          Ergo implements a robust governance framework designed to prevent disruptive hard forks while enabling continuous network evolution. By pushing complexity to the application layer and prioritizing soft-fork compatibility, Ergo maintains stability while fostering innovation.
        </p>
        <div className="bg-neutral-800/50 rounded-lg p-4">
          <h4 className="font-semibold text-purple-400 mb-2">Core Principles:</h4>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li>• <strong>Stability First:</strong> Minimize disruptive changes to maintain network integrity</li>
            <li>• <strong>Miner-Driven:</strong> Empower miners as key stakeholders in network decisions</li>
            <li>• <strong>Backward Compatibility:</strong> Prioritize soft-forks over hard-forks</li>
            <li>• <strong>High Consensus:</strong> Require supermajority for significant changes</li>
          </ul>
        </div>
      </div>

      {/* Governance Mechanisms Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        
        {/* Voting System */}
        <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Vote className="w-5 h-5 text-blue-400" /> Miner Voting
          </h3>
          <p className="text-gray-300 mb-4">
            Miners vote on protocol parameters and network upgrades through an on-chain mechanism. Proposals require sustained consensus across multiple epochs to ensure stability.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm mb-4">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              90% consensus requirement for major changes
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              32-epoch evaluation period for stability
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Parameter-specific voting mechanisms
            </li>
          </ul>
          <div className="bg-neutral-800/50 rounded-lg p-3">
            <span className="text-blue-400 font-semibold text-sm">Status:</span>
            <span className="text-green-300 text-sm ml-2">✓ Active</span>
          </div>
        </div>

        {/* Fork Management */}
        <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <GitBranch className="w-5 h-5 text-green-400" /> Fork Management
          </h3>
          <p className="text-gray-300 mb-4">
            Ergo prioritizes soft and velvet forks for backward-compatible upgrades, avoiding disruptive hard forks wherever possible to maintain network continuity.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm mb-4">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Soft-fork preference for compatibility
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Application-layer complexity management
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Velvet fork innovations support
            </li>
          </ul>
          <div className="bg-neutral-800/50 rounded-lg p-3">
            <span className="text-green-400 font-semibold text-sm">Approach:</span>
            <span className="text-white text-sm ml-2">Non-Disruptive</span>
          </div>
        </div>

      </div>

      {/* Voting Parameters */}
      <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Settings className="w-6 h-6 text-yellow-400" /> Adjustable Parameters
        </h2>
        <p className="text-gray-300 mb-6">
          Miners can vote to modify specific protocol parameters while maintaining network integrity. These adjustments allow Ergo to adapt to changing conditions without fundamental protocol changes.
        </p>
        
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-semibold text-yellow-400 mb-2 flex items-center gap-2">
              <Coins className="w-4 h-4" /> Economic Parameters
            </h4>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• Storage rent rates</li>
              <li>• Transaction fees</li>
              <li>• Mining rewards</li>
            </ul>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-semibold text-blue-400 mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4" /> Technical Parameters
            </h4>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• Block size limits</li>
              <li>• Difficulty adjustments</li>
              <li>• Script complexity</li>
            </ul>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-semibold text-green-400 mb-2 flex items-center gap-2">
              <Lock className="w-4 h-4" /> Protected Elements
            </h4>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• Maximum supply (fixed)</li>
              <li>• Core consensus rules</li>
              <li>• Basic cryptography</li>
            </ul>
          </div>
        </div>

        <div className="bg-neutral-800/50 rounded-lg p-4">
          <h4 className="font-semibold text-yellow-400 mb-2">Voting Requirements</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-300 text-sm mb-2">
                <strong>Soft-Fork Changes:</strong> Require 90% miner support sustained over 32 epochs
              </p>
              <p className="text-gray-300 text-sm">
                <strong>Parameter Updates:</strong> Lower thresholds for non-critical adjustments
              </p>
            </div>
            <div>
              <p className="text-gray-300 text-sm mb-2">
                <strong>Evaluation Period:</strong> Extended observation to ensure network stability
              </p>
              <p className="text-gray-300 text-sm">
                <strong>Rollback Capability:</strong> Mechanisms to reverse problematic changes
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Governance Process */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <BarChart3 className="w-6 h-6 text-cyan-400" /> Governance Process
        </h2>
        <p className="text-gray-300 mb-6">
          The governance process follows a structured approach to ensure thorough evaluation and broad consensus before implementing changes.
        </p>

        <div className="space-y-4">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <div>
                <h4 className="font-semibold text-cyan-400 mb-1">Proposal Submission</h4>
                <p className="text-gray-300 text-sm">Community or development team submits detailed proposals with technical specifications and impact analysis</p>
              </div>
            </div>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <div>
                <h4 className="font-semibold text-blue-400 mb-1">Community Discussion</h4>
                <p className="text-gray-300 text-sm">Extended discussion period for feedback, technical review, and consensus building within the community</p>
              </div>
            </div>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
              <div>
                <h4 className="font-semibold text-purple-400 mb-1">Miner Voting</h4>
                <p className="text-gray-300 text-sm">On-chain voting by miners with specific consensus thresholds and evaluation periods</p>
              </div>
            </div>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
              <div>
                <h4 className="font-semibold text-green-400 mb-1">Implementation</h4>
                <p className="text-gray-300 text-sm">Gradual rollout with monitoring and potential rollback mechanisms for network safety</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Consensus Requirements */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Target className="w-6 h-6 text-orange-400" /> Consensus Requirements
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-orange-400 mb-3">High-Impact Changes</h3>
            <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300">Required Consensus</span>
                <span className="text-orange-400 font-bold">90%</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300">Evaluation Period</span>
                <span className="text-orange-400 font-bold">32 Epochs</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Examples</span>
                <span className="text-gray-400 text-sm">Protocol upgrades</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-400 mb-3">Parameter Adjustments</h3>
            <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300">Required Consensus</span>
                <span className="text-blue-400 font-bold">Variable</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300">Evaluation Period</span>
                <span className="text-blue-400 font-bold">Flexible</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Examples</span>
                <span className="text-gray-400 text-sm">Fee adjustments</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-neutral-800/50 rounded-lg p-4">
          <h4 className="font-semibold text-orange-400 mb-2 flex items-center gap-2">
            <Clock className="w-4 h-4" /> Timeline Considerations
          </h4>
          <p className="text-gray-300 text-sm">
            The extended evaluation periods ensure that proposed changes maintain network stability and provide sufficient time for the community to assess potential impacts. This deliberate approach prevents hasty decisions that could compromise network security.
          </p>
        </div>
      </div>

      {/* Governance Tools */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Link href="/Docs/miners/governance/voting" className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 group cursor-pointer">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
              <Vote className="w-6 h-6 text-purple-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">Voting Mechanisms</h3>
              <p className="text-gray-400 text-sm mb-3">
                Comprehensive guide to miner voting processes, parameter changes, and consensus requirements for network governance.
              </p>
              <div className="flex items-center gap-2 text-purple-400 text-sm">
                <Users className="w-4 h-4" />
                <span>90% consensus threshold</span>
              </div>
              <span className="mt-3 inline-flex items-center gap-1 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                Learn voting process <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </Link>

        <Link href="/Docs/miners/governance/forking" className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-green-500/30 transition-all duration-300 group cursor-pointer">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
              <GitBranch className="w-6 h-6 text-green-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">Fork Strategies</h3>
              <p className="text-gray-400 text-sm mb-3">
                Understanding Ergo's approach to network upgrades through soft-forks, velvet forks, and backward-compatible changes.
              </p>
              <div className="flex items-center gap-2 text-green-400 text-sm">
                <Shield className="w-4 h-4" />
                <span>Backward compatibility focus</span>
              </div>
              <span className="mt-3 inline-flex items-center gap-1 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                Explore fork mechanisms <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </Link>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white">Participate in Governance</h3>
        </div>
        <p className="text-gray-300 mb-4">
          As a miner, your vote shapes Ergo's future. Stay informed about proposals, participate in community discussions, and help guide the network's evolution through democratic consensus.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/Docs/miners/governance/voting"
            className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-300 hover:bg-purple-500/30 transition-colors text-sm"
          >
            Start Voting <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
          <Link
            href="/Docs/miners"
            className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-300 hover:bg-blue-500/30 transition-colors text-sm"
          >
            Back to Miners <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </>
  );
} 