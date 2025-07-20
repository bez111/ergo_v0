"use client";

import { 
  Server, 
  Database, 
  HardDrive, 
  Smartphone,
  Shield,
  Zap,
  Clock,
  Activity,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Info,
  ChevronRight,
  ExternalLink,
  Download,
  HardDriveIcon,
  Wifi,
  Cpu
} from "lucide-react";
import Link from "next/link";

export default function NodeModesPage() {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Node Modes of Operation
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          The <a href="/Docs/developers/infrastructure/node" className="text-blue-400 hover:text-blue-300">Ergo node</a> offers several modes of operation, allowing users to balance resource requirements (disk space, memory, bandwidth) with security assumptions and desired functionality. Choosing the right mode depends on your specific use case, such as running a backend for a dApp, securing personal funds, or simply verifying transactions.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/Docs/developers/infrastructure/node"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Node
          </Link>
        </div>
      </div>

      {/* Mode Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
        {/* Archival Full Node */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
          <div className="flex items-center mb-4">
            <Server className="w-8 h-8 text-blue-400 mr-3" />
            <h3 className="text-xl font-bold text-blue-400">Archival Full Node</h3>
          </div>
          <p className="text-gray-300 text-sm mb-4">
            Maximum security with complete blockchain history. Stores all blocks and UTXO data from genesis.
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-gray-300">Full transaction validation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-gray-300">Complete wallet restore</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-gray-300">Full API support</span>
            </div>
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-yellow-400" />
              <span className="text-gray-300">High storage (100s GB+)</span>
            </div>
          </div>
          <Link
            href="/Docs/developers/infrastructure/node/modes/archival-node"
            className="inline-flex items-center mt-4 text-blue-400 hover:text-blue-300 text-sm font-medium"
          >
            Learn More <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        {/* Pruned Full Node */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-green-500/50 transition-colors">
          <div className="flex items-center mb-4">
            <HardDrive className="w-8 h-8 text-green-400 mr-3" />
            <h3 className="text-xl font-bold text-green-400">Pruned Full Node</h3>
          </div>
          <p className="text-gray-300 text-sm mb-4">
            Full security with reduced storage. Keeps recent blocks and prunes older history.
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-gray-300">Full transaction validation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-gray-300">Fast bootstrap sync</span>
            </div>
            <div className="flex items-center gap-2">
              <XCircle className="w-4 h-4 text-red-400" />
              <span className="text-gray-300">No wallet restore</span>
            </div>
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-yellow-400" />
              <span className="text-gray-300">Medium storage (~1-2GB)</span>
            </div>
          </div>
          <Link
            href="/Docs/developers/infrastructure/node/modes/pruned-full-node"
            className="inline-flex items-center mt-4 text-green-400 hover:text-green-300 text-sm font-medium"
          >
            Learn More <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        {/* Light Full Node */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-purple-500/50 transition-colors">
          <div className="flex items-center mb-4">
            <Database className="w-8 h-8 text-purple-400 mr-3" />
            <h3 className="text-xl font-bold text-purple-400">Light Full Node</h3>
          </div>
          <p className="text-gray-300 text-sm mb-4">
            Digest mode with minimal storage. Keeps UTXO digest and validates via ADProofs.
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-gray-300">Full security</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-gray-300">Minimal storage (~1-3GB)</span>
            </div>
            <div className="flex items-center gap-2">
              <XCircle className="w-4 h-4 text-red-400" />
              <span className="text-gray-300">Limited API support</span>
            </div>
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-yellow-400" />
              <span className="text-gray-300">Wallet compatibility issues</span>
            </div>
          </div>
          <Link
            href="/Docs/developers/infrastructure/node/modes/light-full-node"
            className="inline-flex items-center mt-4 text-purple-400 hover:text-purple-300 text-sm font-medium"
          >
            Learn More <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        {/* Light SPV */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 transition-colors">
          <div className="flex items-center mb-4">
            <Smartphone className="w-8 h-8 text-orange-400 mr-3" />
            <h3 className="text-xl font-bold text-orange-400">Light SPV</h3>
          </div>
          <p className="text-gray-300 text-sm mb-4">
            Ultra-light client for transaction verification. Minimal resources, relies on full nodes.
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-gray-300">Very fast sync</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-gray-300">Minimal storage (MBs)</span>
            </div>
            <div className="flex items-center gap-2">
              <XCircle className="w-4 h-4 text-red-400" />
              <span className="text-gray-300">No full validation</span>
            </div>
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-yellow-400" />
              <span className="text-gray-300">Relies on full nodes</span>
            </div>
          </div>
          <Link
            href="/Docs/developers/infrastructure/node/modes/light-spv-node"
            className="inline-flex items-center mt-4 text-orange-400 hover:text-orange-300 text-sm font-medium"
          >
            Learn More <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>

      {/* Mode Comparison Table */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <div className="flex items-center mb-6">
          <Activity className="w-6 h-6 text-cyan-400 mr-3" />
          <h2 className="text-2xl font-semibold text-cyan-400">Mode Comparison</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-700">
                <th className="text-left py-3 px-4 font-semibold text-gray-300">Feature / Mode</th>
                <th className="text-left py-3 px-4 font-semibold text-blue-400">Archival Full Node</th>
                <th className="text-left py-3 px-4 font-semibold text-green-400">Pruned Full Node</th>
                <th className="text-left py-3 px-4 font-semibold text-purple-400">Light Full Node</th>
                <th className="text-left py-3 px-4 font-semibold text-orange-400">Light SPV</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-neutral-800">
                <td className="py-3 px-4 font-medium">Primary Goal</td>
                <td className="py-3 px-4">Max Security, Full History</td>
                <td className="py-3 px-4">Full Security, Reduced Storage</td>
                <td className="py-3 px-4">Full Security, Minimal Storage</td>
                <td className="py-3 px-4">Tx Verification, Minimal Resources</td>
              </tr>
              <tr className="border-b border-neutral-800">
                <td className="py-3 px-4 font-medium">Key Config</td>
                <td className="py-3 px-4">
                  <code className="text-blue-400">stateType="utxo"</code><br/>
                  <code className="text-blue-400">blocksToKeep=-1</code>
                </td>
                <td className="py-3 px-4">
                  <code className="text-green-400">stateType="utxo"</code><br/>
                                     <code className="text-green-400">blocksToKeep &gt; 0</code>
                </td>
                <td className="py-3 px-4">
                  <code className="text-purple-400">stateType="digest"</code><br/>
                                     <code className="text-purple-400">blocksToKeep &gt; 0</code>
                </td>
                <td className="py-3 px-4">N/A (Client Software)</td>
              </tr>
              <tr className="border-b border-neutral-800">
                <td className="py-3 px-4 font-medium">Bootstrapping</td>
                <td className="py-3 px-4">Full Sync from Genesis</td>
                <td className="py-3 px-4">Full Sync / UTXO Snapshot / NiPoPoW</td>
                <td className="py-3 px-4">Full Sync / NiPoPoW / UTXO Snapshot</td>
                <td className="py-3 px-4">NiPoPoW Sync</td>
              </tr>
              <tr className="border-b border-neutral-800">
                <td className="py-3 px-4 font-medium">Storage (Initial)</td>
                <td className="py-3 px-4">Very High (100s GB+)</td>
                <td className="py-3 px-4">Medium (~1-2GB + Recent Blocks)</td>
                <td className="py-3 px-4">Low (~1-3GB + Recent Blocks)</td>
                <td className="py-3 px-4">Very Low (MBs)</td>
              </tr>
              <tr className="border-b border-neutral-800">
                <td className="py-3 px-4 font-medium">Storage (Ongoing)</td>
                <td className="py-3 px-4">High (Grows with chain)</td>
                <td className="py-3 px-4">Medium (Grows slowly)</td>
                <td className="py-3 px-4">Low (Grows slowly)</td>
                <td className="py-3 px-4">Very Low</td>
              </tr>
              <tr className="border-b border-neutral-800">
                <td className="py-3 px-4 font-medium">Resource Needs</td>
                <td className="py-3 px-4">High (CPU/RAM/Disk IO)</td>
                <td className="py-3 px-4">Moderate</td>
                <td className="py-3 px-4">Moderate-Low</td>
                <td className="py-3 px-4">Very Low</td>
              </tr>
              <tr className="border-b border-neutral-800">
                <td className="py-3 px-4 font-medium">Sync Time</td>
                <td className="py-3 px-4">Very Long</td>
                <td className="py-3 px-4">Fast (with bootstrap)</td>
                <td className="py-3 px-4">Fast (with bootstrap)</td>
                <td className="py-3 px-4">Very Fast</td>
              </tr>
              <tr className="border-b border-neutral-800">
                <td className="py-3 px-4 font-medium">Full Tx Validation</td>
                <td className="py-3 px-4">
                  <CheckCircle className="w-4 h-4 text-green-400 inline mr-1" /> Yes
                </td>
                <td className="py-3 px-4">
                  <CheckCircle className="w-4 h-4 text-green-400 inline mr-1" /> Yes (for kept blocks)
                </td>
                <td className="py-3 px-4">
                  <CheckCircle className="w-4 h-4 text-green-400 inline mr-1" /> Yes (via ADProofs)
                </td>
                <td className="py-3 px-4">
                  <XCircle className="w-4 h-4 text-red-400 inline mr-1" /> No
                </td>
              </tr>
              <tr className="border-b border-neutral-800">
                <td className="py-3 px-4 font-medium">API Support</td>
                <td className="py-3 px-4">Full</td>
                <td className="py-3 px-4">Full (for available data)</td>
                <td className="py-3 px-4">Limited</td>
                <td className="py-3 px-4">N/A</td>
              </tr>
              <tr className="border-b border-neutral-800">
                <td className="py-3 px-4 font-medium">Wallet Compatibility</td>
                <td className="py-3 px-4">Full (incl. restore)</td>
                <td className="py-3 px-4">New Wallets OK; No Restore</td>
                <td className="py-3 px-4">New Wallets OK; No Restore</td>
                <td className="py-3 px-4">Verification only</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Use Cases</td>
                <td className="py-3 px-4">Mining, Archiving, Max Trust Backend</td>
                <td className="py-3 px-4">dApp Backend, Personal Wallet Backend</td>
                <td className="py-3 px-4">Mobile Node Backend, dApp Backend</td>
                <td className="py-3 px-4">Light Wallets, Quick Verification</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Detailed Explanations */}
      <div className="space-y-8">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <Info className="w-6 h-6 text-blue-400 mr-3" />
            <h2 className="text-2xl font-semibold text-blue-400">Detailed Explanations & Notes</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold mb-3 text-green-400">1. Bootstrapping (utxoBootstrap, nipopowBootstrap)</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
                <li>These settings significantly speed up initial sync for Pruned and Digest nodes by downloading compressed UTXO snapshots or using NiPoPoW proofs.</li>
                <li>Using <code className="text-cyan-400">utxoBootstrap=true</code> is common for Pruned nodes.</li>
                <li>Using <code className="text-cyan-400">nipopowBootstrap=true</code> is common for Digest nodes.</li>
                <li>Enable both for fastest sync, especially on resource-constrained devices.</li>
                <li><strong>Progress Indication:</strong> Monitor network activity or data directory size during large snapshot downloads.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 text-purple-400">2. Digest Mode (stateType="digest") Limitations</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
                <li>Keeps only authenticated digest (root hash) of UTXO set, verifying state transitions using ADProofs.</li>
                <li><strong>Wallet Compatibility:</strong> Users report issues with P2P transaction submission. Verification recommended.</li>
                <li><strong>API Limitations:</strong> Some endpoints requiring full UTXO set access may be unavailable.</li>
                <li><strong>Peer Relaying:</strong> Cannot relay transactions as they don't validate against full UTXO set.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 text-yellow-400">3. Wallet Restoration (Pruned & Digest Modes)</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
                                 <li>Nodes with <code className="text-cyan-400">blocksToKeep &gt; 0</code> <strong>cannot</strong> restore wallets from seed phrases if wallets were used before oldest kept block.</li>
                <li>Use Archival Full Node (<code className="text-cyan-400">blocksToKeep = -1</code>) or trusted explorer service for restoring older wallets.</li>
                <li>For new wallets created while pruned/digest node is running, restoration might work, but archival node is safest.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 text-orange-400">4. Resource Usage</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
                <li>Storage estimates depend on <code className="text-cyan-400">blocksToKeep</code> setting and chain activity.</li>
                <li>Typical light/mobile setup using digest mode with bootstrapping: ~3GB initially.</li>
                <li>Memory requirements vary: archival node (8GB+), pruned/digest nodes (2-4GB), more needed during intense activity.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Further Reading */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <ExternalLink className="w-6 h-6 text-emerald-400 mr-3" />
            <h2 className="text-2xl font-semibold text-emerald-400">Further Reading</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/Docs/developers/infrastructure/node/configuration" className="text-blue-400 hover:text-blue-300">
              • Configuration File
            </Link>
            <Link href="/Docs/developers/infrastructure/node/modes/pruned-full-node" className="text-blue-400 hover:text-blue-300">
              • Pruned Full Node Details
            </Link>
            <Link href="/Docs/developers/infrastructure/node/modes/light-full-node" className="text-blue-400 hover:text-blue-300">
              • Light Full (Digest) Node Details
            </Link>
            <Link href="/Docs/developers/infrastructure/node/modes/light-spv-node" className="text-blue-400 hover:text-blue-300">
              • Light SPV Clients / NiPoPoWs
            </Link>
            <Link href="/Docs/developers/infrastructure/node/modes/history-pruning" className="text-blue-400 hover:text-blue-300">
              • History Pruning (blocksToKeep)
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 