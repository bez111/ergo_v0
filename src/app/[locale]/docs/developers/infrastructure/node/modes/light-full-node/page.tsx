"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars, @next/next/no-html-link-for-pages */

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
  Code,
  Download,
  FileText,
  AlertTriangle,
  Info,
  HardDrive as Storage,
  Network,
  Wallet,
  Lightbulb,
  Gauge,
  Cpu as Memory
} from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function LightFullNodePage() {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Light Full-Node Mode
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          The light full-node mode in Ergo allows for a more resource-efficient way of running a node 
          while still maintaining full-node security. It only holds the root digest of the dictionary 
          and checks full blocks or a suffix of the blockchain.
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
            href="/docs/developers/infrastructure/node/modes/light-full-node/technical-details"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <Code className="w-5 h-5 mr-2" />
            Technical Details
          </Link>
          <Link 
            href="/docs/developers/infrastructure/node/modes/history-pruning"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <History className="w-5 h-5 mr-2" />
            History Pruning
          </Link>
          <Link 
            href="/docs/developers/infrastructure/node/modes/digest-state"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <Database className="w-5 h-5 mr-2" />
            Digest State
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        {/* Overview Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <Lightbulb className="w-6 h-6 text-blue-400 mr-3" />
            <h2 className="text-2xl font-semibold text-blue-400">Overview</h2>
          </div>
          <p className="text-gray-300 leading-relaxed mb-4">
            In this mode, the node only holds the root digest of the dictionary and checks full blocks 
            or a suffix of the blockchain, depending on the setting. It uses AD-transformations to get 
            a new digest from an old one and checks all transactions, but only stores a single digest.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Full-Node Security</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Maintains full-node security while being more resource-efficient than archive mode.
              </p>
            </div>
            
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Database className="w-5 h-5 text-cyan-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Digest Storage</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Only stores the root digest of the dictionary instead of the full UTXO set.
              </p>
            </div>
          </div>
        </div>

        {/* Features and Limitations Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-center mb-6">
            <Zap className="w-6 h-6 text-yellow-400 mr-3" />
            <h2 className="text-2xl font-semibold text-yellow-400">Features and Limitations</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Supported Features</h3>
              </div>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Wallet functionalities</li>
                <li>• Custom scans</li>
                <li>• Full-node security</li>
                <li>• Resource efficiency</li>
              </ul>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <AlertTriangle className="w-5 h-5 text-orange-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Limitations</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Can only accept and broadcast transactions initiated within its own network, 
                not those coming from external peers.
              </p>
            </div>
          </div>
        </div>

        {/* Getting Started Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <Download className="w-6 h-6 text-green-400 mr-3" />
            <h2 className="text-2xl font-semibold text-green-400">Getting Started</h2>
          </div>
          <p className="text-gray-300 mb-4">
            To run the node in light mode, you need to adjust specific settings in your <code className="text-blue-400">ergo.conf</code> file.
          </p>
          
          <div className="space-y-6">
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Settings className="w-5 h-5 text-purple-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Core Settings</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-md font-semibold text-blue-400 mb-2">
                    <code className="text-blue-400">ergo.node.stateType = "digest"</code>
                  </h4>
                  <p className="text-gray-300 text-sm mb-2">
                    This is the key setting that enables light-fullnode mode. Instead of storing the full UTXO set, 
                    the node only maintains the authenticated root hash of the state and validates state transitions 
                    using ADProofs contained in the blocks.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-md font-semibold text-blue-400 mb-2">
                    <code className="text-blue-400">ergo.node.blocksToKeep = 1440</code> (Example)
                  </h4>
                  <p className="text-gray-300 text-sm mb-2">
                    This setting controls how many of the most recent blocks are stored with full transaction data. 
                    Older blocks will only have their headers stored. Setting it to <code className="text-blue-400">-1</code> keeps all blocks 
                    (similar to an archive node but still in digest state). A common value is <code className="text-blue-400">1440</code> (roughly one day).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Download className="w-5 h-5 text-cyan-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Bootstrapping Options</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Bootstrapping is the initial synchronization process. Light nodes have options to speed this up 
                and reduce initial storage requirements:
              </p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="text-md font-semibold text-blue-400 mb-1">
                    <code className="text-blue-400">ergo.node.nipopow.nipopowBootstrap = true</code>
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Instructs the node to download a NiPoPoW proof during startup. This significantly reduces 
                    the data needed for initial sync compared to downloading all headers from genesis.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-md font-semibold text-blue-400 mb-1">
                    <code className="text-blue-400">ergo.node.utxoBootstrap = true</code>
                  </h4>
                  <p className="text-gray-300 text-sm">
                    (Alternative to NiPoPoW bootstrap) Instructs the node to download a UTXO set snapshot 
                    to initialize its state. This can be faster but might require more initial bandwidth.
                  </p>
                  <p className="text-gray-300 text-sm mt-2 italic">
                    Note: These two bootstrap options might be mutually exclusive depending on the node version; 
                    check current node documentation or configuration comments.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Code className="w-5 h-5 text-green-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Example Configuration</h3>
              </div>
              
              <div className="relative">
                <button
                  onClick={() => navigator.clipboard.writeText(`ergo {
  node {
    stateType = "digest"
    blocksToKeep = 1440 // Keep ~1 day of full blocks
    mining = false      // Usually false for light nodes

    # Choose one bootstrapping method (check compatibility):
    nipopow.nipopowBootstrap = true 
    # utxoBootstrap = true 

    # Optional: Adjust NiPoPoW parameters if using nipopowBootstrap
    nipopow.p2pNipopows = 2 
  }
}

scorex {
  restApi {
    # Set your API key hash for security
    apiKeyHash = "YOUR_API_KEY_HASH_HERE" 
  }
  # Optional: Adjust network settings if needed
  # network { ... } 
}`)}
                  className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
                  title="Copy code"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
                <pre className="bg-neutral-900 border border-neutral-600 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
                  <code>{`ergo {
  node {
    stateType = "digest"
    blocksToKeep = 1440 // Keep ~1 day of full blocks
    mining = false      // Usually false for light nodes

    # Choose one bootstrapping method (check compatibility):
    nipopow.nipopowBootstrap = true 
    # utxoBootstrap = true 

    # Optional: Adjust NiPoPoW parameters if using nipopowBootstrap
    nipopow.p2pNipopows = 2 
  }
}

scorex {
  restApi {
    # Set your API key hash for security
    apiKeyHash = "YOUR_API_KEY_HASH_HERE" 
  }
  # Optional: Adjust network settings if needed
  # network { ... } 
}`}</code>
                </pre>
              </div>
              
              <div className="mt-4 bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <Info className="w-5 h-5 text-blue-400 mr-2" />
                  <h4 className="text-lg font-semibold text-blue-400">Configuration Explanation</h4>
                </div>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• <code className="text-blue-400">stateType = "digest"</code> enables the core light-fullnode mode.</li>
                  <li>• <code className="text-blue-400">blocksToKeep = 1440</code> keeps roughly the last day's worth of full blocks.</li>
                  <li>• <code className="text-blue-400">nipopowBootstrap = true</code> is enabled for faster initial sync using NiPoPoW proofs.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Resource Considerations Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-center mb-6">
            <Gauge className="w-6 h-6 text-purple-400 mr-3" />
            <h2 className="text-2xl font-semibold text-purple-400">Resource Considerations</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Memory className="w-5 h-5 text-blue-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Memory (RAM)</h3>
              </div>
              <p className="text-gray-300 text-sm">
                While lighter than archive mode, digest nodes still require sufficient RAM, especially during bootstrapping. 
                Users have reported needing to increase the JVM heap space using the <code className="text-blue-400">-Xmx</code> flag 
                (e.g., <code className="text-blue-400">java -Xmx1G -jar ...</code> or higher) particularly when bootstrapping 
                on resource-constrained devices like mobile phones.
              </p>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Storage className="w-5 h-5 text-green-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Disk Space</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Significantly lower than archive mode. With <code className="text-blue-400">nipopowBootstrap</code> and a reasonable 
                <code className="text-blue-400">blocksToKeep</code> value (like 1440), the storage footprint after sync can be 
                relatively small (potentially under 1GB, but this can vary).
              </p>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Cpu className="w-5 h-5 text-orange-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">CPU</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Validation still requires CPU power, but generally less than an archive node maintaining 
                the full UTXO set database.
              </p>
            </div>
          </div>
        </div>

        {/* Wallet Compatibility Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-center mb-6">
            <Wallet className="w-6 h-6 text-green-400 mr-3" />
            <h2 className="text-2xl font-semibold text-green-400">Wallet Compatibility</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">General Support</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Light-fullnodes running in digest mode <em>can</em> support wallet functionalities, including 
                managing keys and creating transactions.
              </p>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <AlertTriangle className="w-5 h-5 text-orange-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Potential Issues</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Some wallet implementations or specific wallet features might have compatibility issues with digest mode. 
                This is because the node doesn't have the full UTXO set readily available locally, and certain queries 
                might rely on that. Developers have reported issues in community channels, particularly concerning wallets 
                needing to scan the full UTXO set or perform complex balance calculations.
              </p>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Info className="w-5 h-5 text-blue-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Recommendation</h3>
              </div>
              <p className="text-gray-300 text-sm">
                If you intend to use a specific wallet with a digest-mode node, verify its compatibility with 
                the wallet developers or community resources. Standard transaction sending/receiving is generally 
                expected to work.
              </p>
            </div>
          </div>
        </div>



        {/* Additional Resources */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-cyan-400 mr-3" />
            <h2 className="text-2xl font-semibold text-cyan-400">Additional Resources</h2>
          </div>
          
          <div className="space-y-4">
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="/docs/developers/infrastructure/node/configuration" 
                     className="text-blue-400 hover:text-blue-300 underline">
                    Node Configuration Guide
                  </a>
                </li>
                <li>
                  <a href="/docs/developers/infrastructure/node/protocol/nipopows" 
                     className="text-blue-400 hover:text-blue-300 underline">
                    NiPoPoWS Documentation
                  </a>
                </li>
                <li>
                  <a href="/docs/developers/infrastructure/node/modes/history-pruning" 
                     className="text-blue-400 hover:text-blue-300 underline">
                    History Pruning
                  </a>
                </li>
                <li>
                  <a href="/docs/developers/infrastructure/node/modes/digest-state" 
                     className="text-blue-400 hover:text-blue-300 underline">
                    Digest State
                  </a>
                </li>
                <li>
                  <a href="https://github.com/ergoplatform/ergo" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-blue-400 hover:text-blue-300 underline">
                    Ergo Protocol Repository
                  </a>
                </li>
                <li>
                  <a href="/docs/developers/infrastructure/node/modes/light-full-node/technical-details" 
                     className="text-blue-400 hover:text-blue-300 underline">
                    Light Node Technical Workflow
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 