"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */

import { 
  Server, 
  Database, 
  Shield,
  CheckCircle,
  History,
  Link as LinkIcon,
  HardDrive,
  Zap,
  ArrowLeft,
  ExternalLink,
  BookOpen,
  Settings,
  ChevronRight,
  Globe,
  Activity,
  Cpu,
  Clock,
  Code
} from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function ArchivalNodePage() {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Archival Node Mode in Ergo
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          The complete full node mode designed to store all blocks from genesis onwards, 
          maintaining the entire UTXO set for maximum security and validation capabilities.
        </p>
        
        {/* Navigation Buttons */}
        <div className="flex flex-wrap gap-4">
          <Link 
            href="/docs/developers/infrastructure/node/modes"
            className="inline-flex items-center px-6 py-3 bg-blue-500 rounded-xl font-semibold text-white hover:bg-blue-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" />
            Back to Node Modes
          </Link>
          <Link
            href="/docs/developers/infrastructure/node/modes/archival-node/technical-details"
            className="inline-flex items-center px-6 py-3 bg-purple-500 rounded-xl font-semibold text-white hover:bg-purple-600 transition-transform hover:scale-105"
          >
            <Code className="w-5 h-5 mr-2" />
            Technical Details
          </Link>
          <a 
            href="https://github.com/ergoplatform/ergo/wiki/Node-Configuration"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            View on GitHub
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        {/* Overview Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <Server className="w-6 h-6 text-blue-400 mr-3" />
            <h2 className="text-2xl font-semibold text-blue-400">Overview</h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            The Archival Node Mode is the complete full node in Ergo. It is designed to store all blocks 
            from the genesis block onwards. This mode not only checks the proofs of work and the correctness 
            of the linking structure but also maintains a copy of the entire UTXO set. This allows it to 
            validate any transaction, regardless of its complexity or origin.
          </p>
        </div>

        {/* Key Features Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-center mb-6">
            <Shield className="w-6 h-6 text-green-400 mr-3" />
            <h2 className="text-2xl font-semibold text-green-400">Key Features and Functionalities</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Feature 1 */}
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <History className="w-5 h-5 text-blue-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Comprehensive Blockchain Storage</h3>
              </div>
              <p className="text-gray-300 text-sm">
                The archival node mode ensures the storage of every block since the genesis block. 
                This guarantees the availability of the complete history of the blockchain.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Proof-of-Work Verification</h3>
              </div>
              <p className="text-gray-300 text-sm">
                This feature allows the node to check the proofs of work for each block. This is crucial 
                for maintaining the integrity and validity of the blockchain's consensus mechanism.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <LinkIcon className="w-5 h-5 text-purple-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Linking Structure Verification</h3>
              </div>
              <p className="text-gray-300 text-sm">
                The node is capable of verifying the correctness of the linking structure. This includes 
                parent block IDs and interlink elements, which are essential for the blockchain's operation.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Database className="w-5 h-5 text-cyan-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">UTXO Set Storage</h3>
              </div>
              <p className="text-gray-300 text-sm">
                The archival node mode maintains a copy of the entire UTXO set. This feature enables it 
                to validate any transaction, regardless of its complexity or origin.
              </p>
            </div>
          </div>
        </div>

        {/* Configuration Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <Settings className="w-6 h-6 text-orange-400 mr-3" />
            <h2 className="text-2xl font-semibold text-orange-400">Configuration</h2>
          </div>
          
          {/* Required Settings */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" /> Required Settings
            </h3>
            <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <code className="text-green-400 font-mono">node.stateType = "utxo"</code>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <code className="text-green-400 font-mono">node.blocksToKeep = -1</code>
                </div>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              These settings ensure the node operates in archival mode, storing all blocks and maintaining the complete UTXO set.
            </p>
          </div>

          {/* Optional Bootstrapping */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue-400" /> Optional Bootstrapping
            </h3>
            <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                  <code className="text-blue-400 font-mono">node.utxoBootstrap = true</code> - Use UTXO snapshot for faster sync
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                  <code className="text-blue-400 font-mono">node.nipopowBootstrap = true</code> - Use NiPoPoW for faster sync
                </div>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              These options can significantly speed up the initial synchronization process while maintaining full archival capabilities.
            </p>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-purple-400 mr-3" />
            <h2 className="text-2xl font-semibold text-purple-400">Use Cases</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Blockchain Explorers</h3>
              <p className="text-gray-300 text-sm">
                Provides complete historical data for blockchain explorers and analytics platforms.
              </p>
            </div>
            
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Wallet Restoration</h3>
              <p className="text-gray-300 text-sm">
                Essential for restoring wallets from seed phrases, regardless of when they were created.
              </p>
            </div>
            
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Research & Development</h3>
              <p className="text-gray-300 text-sm">
                Complete data access for blockchain research, analysis, and development purposes.
              </p>
            </div>
            
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Network Security</h3>
              <p className="text-gray-300 text-sm">
                Provides maximum security by validating all transactions and maintaining complete network state.
              </p>
            </div>
          </div>
        </div>

        {/* Resource Requirements Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <Cpu className="w-6 h-6 text-red-400 mr-3" />
            <h2 className="text-2xl font-semibold text-red-400">Resource Requirements</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <HardDrive className="w-5 h-5 text-orange-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Storage</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Requires significant disk space (100s GB+) as it stores all blocks and the complete UTXO set.
              </p>
            </div>
            
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <Activity className="w-5 h-5 text-green-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Memory</h3>
              </div>
              <p className="text-gray-300 text-sm">
                High RAM requirements for processing large UTXO sets and maintaining blockchain state.
              </p>
            </div>
            
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <Clock className="w-5 h-5 text-blue-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Sync Time</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Initial synchronization can take several days due to processing all historical blocks.
              </p>
            </div>
          </div>
        </div>

        {/* Security Notes Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <Shield className="w-6 h-6 text-yellow-400 mr-3" />
            <h2 className="text-2xl font-semibold text-yellow-400">Security Notes</h2>
          </div>
          
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
              <li>Archival nodes provide the highest level of security by validating all transactions.</li>
              <li>They can detect and reject any invalid transactions or blocks.</li>
              <li>Essential for maintaining network integrity and preventing double-spending attacks.</li>
              <li>Recommended for critical infrastructure and high-value applications.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 