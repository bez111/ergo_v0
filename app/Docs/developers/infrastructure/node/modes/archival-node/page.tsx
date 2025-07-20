"use client";

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
  Settings
} from "lucide-react";
import Link from "next/link";

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
        <div className="flex flex-wrap gap-4 mb-8">
          <Link 
            href="/Docs/developers/infrastructure/node/modes"
            className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200 border border-gray-600 hover:border-gray-500"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Node Modes
          </Link>
          <Link 
            href="/Docs/developers/infrastructure/node/configuration"
            className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200 border border-gray-600 hover:border-gray-500"
          >
            <Settings className="w-4 h-4 mr-2" />
            Node Configuration
          </Link>
          <Link 
            href="https://github.com/ergoplatform/ergo/wiki/Node-Configuration"
            target="_blank"
            className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200 border border-gray-600 hover:border-gray-500"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View on GitHub
          </Link>
        </div>
      </div>

      {/* Overview Section */}
      <div className="mb-12">
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Server className="w-6 h-6 text-blue-400 mr-3" />
            <h2 className="text-2xl font-bold text-white">Overview</h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            The Archival Node Mode is the complete full node in Ergo. It is designed to store all blocks 
            from the genesis block onwards. This mode not only checks the proofs of work and the correctness 
            of the linking structure but also maintains a copy of the entire UTXO set. This allows it to 
            validate any transaction, regardless of its complexity or origin.
          </p>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="mb-12">
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="flex items-center mb-6">
            <Shield className="w-6 h-6 text-green-400 mr-3" />
            <h2 className="text-2xl font-bold text-white">Key Features and Functionalities</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Feature 1 */}
            <div className="bg-gray-700 border border-gray-600 rounded-lg p-4">
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
            <div className="bg-gray-700 border border-gray-600 rounded-lg p-4">
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
            <div className="bg-gray-700 border border-gray-600 rounded-lg p-4">
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
            <div className="bg-gray-700 border border-gray-600 rounded-lg p-4">
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
      </div>

      {/* Configuration Section */}
      <div className="mb-12">
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Settings className="w-6 h-6 text-orange-400 mr-3" />
            <h2 className="text-2xl font-bold text-white">Configuration</h2>
          </div>
          
          <div className="bg-gray-900 border border-gray-600 rounded-lg p-4 mb-4">
            <h3 className="text-lg font-semibold text-white mb-3">Required Settings</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <code className="text-green-400">node.stateType = "utxo"</code>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <code className="text-green-400">node.blocksToKeep = -1</code>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-600 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-white mb-3">Optional Bootstrapping</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                <code className="text-blue-400">node.utxoBootstrap = true</code> - Use UTXO snapshot for faster sync
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                <code className="text-blue-400">node.nipopowBootstrap = true</code> - Use NiPoPoW for faster sync
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="mb-12">
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-purple-400 mr-3" />
            <h2 className="text-2xl font-bold text-white">Use Cases</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-700 border border-gray-600 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Blockchain Explorers</h3>
              <p className="text-gray-300 text-sm">
                Provides complete historical data for blockchain explorers and analytics platforms.
              </p>
            </div>
            
            <div className="bg-gray-700 border border-gray-600 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Wallet Restoration</h3>
              <p className="text-gray-300 text-sm">
                Essential for restoring wallets from seed phrases, regardless of when they were created.
              </p>
            </div>
            
            <div className="bg-gray-700 border border-gray-600 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Research & Development</h3>
              <p className="text-gray-300 text-sm">
                Complete data access for blockchain research, analysis, and development purposes.
              </p>
            </div>
            
            <div className="bg-gray-700 border border-gray-600 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Maximum Security</h3>
              <p className="text-gray-300 text-sm">
                Provides the highest level of security and validation capabilities for critical applications.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Resource Requirements */}
      <div className="mb-12">
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <HardDrive className="w-6 h-6 text-red-400 mr-3" />
            <h2 className="text-2xl font-bold text-white">Resource Requirements</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400 mb-2">100s GB+</div>
              <div className="text-gray-400 text-sm">Storage Space</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400 mb-2">High</div>
              <div className="text-gray-400 text-sm">CPU & RAM</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400 mb-2">Very Long</div>
              <div className="text-gray-400 text-sm">Initial Sync Time</div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-yellow-900/20 border border-yellow-600 rounded-lg">
            <div className="flex items-center mb-2">
              <CheckCircle className="w-5 h-5 text-yellow-400 mr-2" />
              <h3 className="text-lg font-semibold text-yellow-400">Important Note</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Archival nodes require significant storage space and time for initial synchronization. 
              Consider using bootstrapping options for faster setup, but be aware that the complete 
              blockchain history will still be downloaded and stored.
            </p>
          </div>
        </div>
      </div>

      {/* Reference Section */}
      <div className="mb-12">
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <ExternalLink className="w-6 h-6 text-blue-400 mr-3" />
            <h2 className="text-2xl font-bold text-white">Reference</h2>
          </div>
          <p className="text-gray-300 mb-4">
            For detailed instructions on setting up a full node, please refer to the manual configuration page.
          </p>
          <Link 
            href="/Docs/developers/infrastructure/node/configuration"
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
          >
            <Settings className="w-4 h-4 mr-2" />
            Node Configuration Manual
          </Link>
        </div>
      </div>
    </div>
  );
} 