"use client";

import { 
  BookOpen,
  ChevronRight,
  ArrowLeft,
  ExternalLink,
  Code,
  Settings,
  Zap,
  Lightbulb,
  Database,
  Info,
  AlertTriangle,
  CheckCircle,
  Activity,
  Cpu,
  Clock,
  Server,
  Download,
  Shield,
  Smartphone,
  Globe,
  FileText,
  Link as LinkIcon
} from "lucide-react";
import Link from "next/link";

export default function LightClientSpvOverviewPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-16">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-6 leading-tight pb-2">
          Simplified Payment Verification (SPV)
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">
          A lightweight approach to blockchain verification that allows resource-limited devices to verify payments 
          without running a full network node, enhanced by Ergo's NIPoPoW technology.
        </p>
      </div>
      
      {/* Navigation Buttons */}
      <div className="flex flex-wrap gap-6 mb-12">
        <Link 
          href="/Docs/developers/infrastructure/node/modes/light-spv-node"
          className="inline-flex items-center px-6 py-3 bg-blue-500 rounded-xl font-semibold text-white hover:bg-blue-600 transition-transform hover:scale-105"
        >
          <ChevronRight className="w-5 h-5 mr-2" />
          Back to Light-SPV Mode
        </Link>
        <Link 
          href="/Docs/developers/infrastructure/node/modes/light-spv-node/technical-details"
          className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
        >
          <Code className="w-5 h-5 mr-2" />
          Technical Details
        </Link>
        <Link 
          href="/Docs/developers/infrastructure/node/modes"
          className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
        >
          <Server className="w-5 h-5 mr-2" />
          Node Modes
        </Link>
      </div>

      {/* Main Content */}
      <div className="space-y-12">
        {/* SPV Overview Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
          <div className="flex items-center mb-6">
            <Shield className="w-6 h-6 text-blue-400 mr-3" />
            <h2 className="text-2xl font-semibold text-blue-400">What is SPV?</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Cpu className="w-5 h-5 text-green-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Full Node Requirements</h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                A full Bitcoin node checks all the blocks in the blockchain (using headers) and ensures no fraudulent transactions. 
                However, running a full node requires significant bandwidth, storage, and processing power, making it unsuitable 
                for resource-limited devices like mobile devices.
              </p>
              <div className="mt-4 p-4 bg-neutral-700/50 rounded-lg">
                <p className="text-gray-300 text-sm">
                  <strong>Example:</strong> Bitcoin's blockchain size has exceeded 270 GB and continues to grow 
                  (<a href="https://www.blockchain.com/charts/blocks-size" 
                      className="text-blue-400 hover:text-blue-300 underline" 
                      target="_blank" 
                      rel="noopener noreferrer">source</a>).
                </p>
              </div>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Smartphone className="w-5 h-5 text-yellow-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">SPV Solution</h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                To address this issue, Satoshi Nakamoto proposed Simplified Payment Verification (SPV) in the 
                <a href="https://bitcoin.org/bitcoin.pdf" 
                   className="text-blue-400 hover:text-blue-300 underline ml-1" 
                   target="_blank" 
                   rel="noopener noreferrer">Bitcoin white paper</a>. SPV allows users to verify payments without running a full network node.
              </p>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <FileText className="w-5 h-5 text-purple-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">How SPV Works</h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                Instead of downloading the entire blockchain, users only need to keep a copy of the block headers of the longest 
                proof-of-work chain. By querying network nodes, users can obtain the Merkle branch linking their transaction 
                to the block it's timestamped in.
              </p>
              <div className="mt-4 p-4 bg-neutral-700/50 rounded-lg">
                <p className="text-gray-300 text-sm">
                  <strong>Note:</strong> Although users cannot independently verify the transaction, they can trust that a network 
                  node has accepted it and that subsequent blocks confirm its validity.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Limitations Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
          <div className="flex items-center mb-6">
            <AlertTriangle className="w-6 h-6 text-yellow-400 mr-3" />
            <h2 className="text-2xl font-semibold text-yellow-400">SPV Limitations</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Shield className="w-5 h-5 text-red-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Security Vulnerabilities</h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                SPV is not a perfect solution and is vulnerable to attacks where an attacker overpowers the network and deceives SPV users.
              </p>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Globe className="w-5 h-5 text-orange-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Resource Constraints</h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                While SPV mode is intended for resource-limited devices, it may not always be feasible. For example, Ethereum's 
                headers alone total around 5 GB to download, making it challenging for Ethereum mobile clients to validate chain validity. 
                As a result, these clients often have to blindly trust third parties.
              </p>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Settings className="w-5 h-5 text-blue-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Implementation Challenges</h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                Efforts have been made to reduce the requirements for SPV mode by checking only a few random headers instead of all. 
                However, securely implementing this approach requires significant work.
              </p>
            </div>
          </div>
        </div>

        {/* NIPoPoWs Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
          <div className="flex items-center mb-6">
            <Zap className="w-6 h-6 text-green-400 mr-3" />
            <h2 className="text-2xl font-semibold text-green-400">Efficient SPV with NIPoPoWs</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Lightbulb className="w-5 h-5 text-green-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">NIPoPoW Technology</h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                To further enhance the efficiency of SPV wallets, Ergo implements Non-Interactive Proofs of Proof-of-Work (NIPoPoWs). 
                NIPoPoWs are short stand-alone strings that allow a computer program to verify events on a proof-of-work-based 
                blockchain without connecting to the blockchain network or downloading all block headers.
              </p>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-5 h-5 text-blue-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Proof Capabilities</h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                These proofs can demonstrate that a cryptocurrency payment was made, for example. By leveraging NIPoPoWs, 
                Ergo enables the creation of highly efficient Light SPV mobile wallets.
              </p>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Download className="w-5 h-5 text-purple-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Efficiency Comparison</h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                Compared to full nodes, SPV wallets are already lightweight as they only require the download of block headers 
                instead of the entire blockchain. NIPoPoW wallets need to download only a small sample of block headers, 
                making them even more efficient for mobile and resource-constrained devices.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
          <div className="flex items-center mb-6">
            <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
            <h2 className="text-2xl font-semibold text-green-400">Benefits of Light SPV</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Smartphone className="w-5 h-5 text-blue-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Mobile Friendly</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Perfect for mobile devices with limited storage and processing power.
              </p>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Download className="w-5 h-5 text-green-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Minimal Bandwidth</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Requires only a small sample of block headers instead of the full blockchain.
              </p>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Shield className="w-5 h-5 text-purple-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Enhanced Security</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                NIPoPoW proofs provide cryptographic verification without full node requirements.
              </p>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Fast Synchronization</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Quick initial setup and synchronization with the network.
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
                  <a href="/Docs/developers/infrastructure/node/modes/light-spv-node" 
                     className="text-blue-400 hover:text-blue-300 underline">
                    Light-SPV Mode Overview
                  </a>
                </li>
                <li>
                  <a href="/Docs/developers/infrastructure/node/modes/light-spv-node/technical-details" 
                     className="text-blue-400 hover:text-blue-300 underline">
                    Technical Details & Workflow
                  </a>
                </li>
                <li>
                  <a href="/Docs/introduction/nipopows" 
                     className="text-blue-400 hover:text-blue-300 underline">
                    NIPoPoWs Documentation
                  </a>
                </li>
                <li>
                  <a href="https://bitcoin.org/bitcoin.pdf" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-blue-400 hover:text-blue-300 underline">
                    Bitcoin White Paper (SPV Section)
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