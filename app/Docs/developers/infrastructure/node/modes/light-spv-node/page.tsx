"use client";

import { 
  Server,
  Shield,
  CheckCircle,
  Info,
  ExternalLink,
  BookOpen,
  ChevronRight,
  Zap,
  Lightbulb,
  Code,
  Download,
  AlertTriangle,
  Settings,
  Globe,
  Activity,
  Cpu,
  Clock,
  Database
} from "lucide-react";
import Link from "next/link";

export default function LightSpvNodePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-16">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-6 leading-tight pb-2">
          Light-SPV Mode
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">
          Simplified Payment Verification (SPV) allows for a simplified way of verifying transactions by only downloading 
          and verifying the block headers, rather than the entire blockchain. This makes it possible for users with limited 
          resources to participate in the network and make transactions without needing a full node.
        </p>
      </div>
      
      {/* Navigation Buttons */}
      <div className="flex flex-wrap gap-6 mb-12">
        <Link 
          href="/Docs/developers/infrastructure/node/modes"
          className="inline-flex items-center px-6 py-3 bg-blue-500 rounded-xl font-semibold text-white hover:bg-blue-600 transition-transform hover:scale-105"
        >
          <ChevronRight className="w-5 h-5 mr-2" />
          Back to Node Modes
        </Link>
        <Link 
          href="/Docs/developers/infrastructure/node/modes/light-spv-node/technical-details"
          className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
        >
          <Code className="w-5 h-5 mr-2" />
          Technical Details
        </Link>
        <Link 
          href="/Docs/developers/infrastructure/node/modes/light-spv-node/overview"
          className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
        >
          <BookOpen className="w-5 h-5 mr-2" />
          Light Client (SPV) Overview
        </Link>
      </div>

      {/* Main Content */}
      <div className="space-y-12">
        {/* What is SPV */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
          <div className="flex items-center mb-6">
            <Info className="w-6 h-6 text-blue-400 mr-3" />
            <h2 className="text-2xl font-semibold text-blue-400">What is SPV?</h2>
          </div>
          <div className="space-y-6 text-gray-300">
            <p className="text-lg leading-relaxed">
              <a href="/Docs/developers/infrastructure/node/protocol/spv" 
                 className="text-blue-400 hover:text-blue-300 underline">
                Simplified Payment Verification (SPV)
              </a> allows for a simplified way of verifying transactions by only downloading and verifying the block headers, 
              rather than the entire blockchain. This makes it possible for users with limited resources to participate in 
              the network and make transactions without needing a full node.
            </p>
          </div>
        </div>

        {/* Ergo's NIPoPoWs */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
          <div className="flex items-center mb-6">
            <Zap className="w-6 h-6 text-yellow-400 mr-3" />
            <h2 className="text-2xl font-semibold text-yellow-400">Ergo's NIPoPoWs</h2>
          </div>
          <div className="space-y-6 text-gray-300">
            <p className="text-lg leading-relaxed">
              Ergo implements <strong>Non-Interactive Proofs of Proof-of-Work (NIPoPoWs)</strong> to enhance the efficiency 
              of SPV wallets. NIPoPoWs are short stand-alone strings that allow a computer program to verify events on a 
              proof-of-work-based blockchain without connecting to the blockchain network or downloading all block headers.
            </p>
            <p className="text-lg leading-relaxed">
              This enables the creation of lightweight SPV wallets that only need to download a small sample of block headers, 
              around <strong>250</strong>, compared to other SPV clients that may need to download around 
              <strong>half a million</strong> block headers. The sample size remains relatively small even as the blockchain 
              grows larger over time.
            </p>
          </div>
        </div>

        {/* Development Status */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
          <div className="flex items-center mb-6">
            <Code className="w-6 h-6 text-green-400 mr-3" />
            <h2 className="text-2xl font-semibold text-green-400">Development Status</h2>
          </div>
          <div className="space-y-6 text-gray-300">
            <p className="text-lg leading-relaxed">
              We are currently developing a highly efficient Ergo wallet with SPV security. Stay updated on the progress 
              of this development.
            </p>
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <ExternalLink className="w-5 h-5 text-blue-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Development Progress</h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed mb-4">
                Track the development progress of the Ergo SPV wallet implementation.
              </p>
              <a 
                href="https://github.com/ergoplatform/sigma-rust/milestone/17"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-500 rounded-xl font-semibold text-white hover:bg-blue-600 transition-transform hover:scale-105"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                View Development Progress
              </a>
            </div>
          </div>
        </div>

        {/* Benefits of SPV */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
          <div className="flex items-center mb-6">
            <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
            <h2 className="text-2xl font-semibold text-green-400">Benefits of SPV</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Download className="w-5 h-5 text-blue-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Reduced Storage</h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                Only downloads block headers instead of the entire blockchain, significantly reducing storage requirements.
              </p>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Fast Synchronization</h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                Quick initial sync with only ~250 block headers needed, compared to millions in traditional SPV.
              </p>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Shield className="w-5 h-5 text-green-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Security</h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                Maintains security through NIPoPoW proofs while being lightweight and efficient.
              </p>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Globe className="w-5 h-5 text-cyan-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Accessibility</h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                Enables participation in the network for users with limited computational resources.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Details */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
          <div className="flex items-center mb-6">
            <Settings className="w-6 h-6 text-purple-400 mr-3" />
            <h2 className="text-2xl font-semibold text-purple-400">Technical Details</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Code className="w-5 h-5 text-blue-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">NIPoPoW Implementation</h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                Ergo's implementation of NIPoPoWs provides a mathematical foundation for efficient SPV verification, 
                allowing wallets to verify transactions with minimal data requirements.
              </p>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Activity className="w-5 h-5 text-green-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Scalability</h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                The sample size of required block headers remains small (~250) even as the blockchain grows, 
                ensuring the solution scales efficiently over time.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
          <div className="flex items-center mb-6">
            <BookOpen className="w-6 h-6 text-cyan-400 mr-3" />
            <h2 className="text-2xl font-semibold text-cyan-400">Additional Resources</h2>
          </div>
          
          <div className="space-y-4">
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="/Docs/developers/infrastructure/node/protocol/spv" 
                     className="text-blue-400 hover:text-blue-300 underline">
                    SPV Protocol Documentation
                  </a>
                </li>
                <li>
                  <a href="/Docs/developers/infrastructure/node/protocol/nipopows" 
                     className="text-blue-400 hover:text-blue-300 underline">
                    NIPoPoWs Documentation
                  </a>
                </li>
                <li>
                  <a href="/Docs/developers/infrastructure/node/modes/light-full-node" 
                     className="text-blue-400 hover:text-blue-300 underline">
                    Light Full-Node Mode
                  </a>
                </li>
                <li>
                  <a href="https://github.com/ergoplatform/sigma-rust" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-blue-400 hover:text-blue-300 underline">
                    Sigma Rust Repository
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 