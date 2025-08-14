import React from "react";
import { ArrowLeft, Download, Monitor, Zap, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function SoftwarePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
          <Download className="w-8 h-8 text-brand-primary-400" />
          Software
        </h1>
        <p className="text-xl text-gray-300 mb-6">
          Essential software tools for mining Ergo. Choose the right miner for your setup and get started.
        </p>
      </div>

      {/* Back Button */}
      <div className="mb-6">
        <Link 
          href="/Docs/miners/mining-guides" 
          className="inline-flex items-center gap-2 text-brand-primary-400 hover:text-brand-primary-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Mining Guides
        </Link>
      </div>

      {/* Mining Software Table */}
      <div className="mb-8">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-700">
                  <th className="text-left py-4 px-6 text-white font-semibold">Coins</th>
                  <th className="text-left py-4 px-6 text-white font-semibold">Miners</th>
                  <th className="text-center py-4 px-6 text-white font-semibold">NVIDIA</th>
                  <th className="text-center py-4 px-6 text-white font-semibold">AMD</th>
                  <th className="text-center py-4 px-6 text-white font-semibold">Intel</th>
                  <th className="text-center py-4 px-6 text-white font-semibold">Dev Fee</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-neutral-700/50 hover:bg-neutral-800/30">
                  <td className="py-4 px-6">ERG</td>
                  <td className="py-4 px-6">
                    <Link href="https://github.com/Lolliedieb/lolMiner-releases" 
                          className="text-brand-primary-400 hover:text-brand-primary-300 underline inline-flex items-center gap-1">
                      lolminer <ExternalLink className="w-3 h-3" />
                    </Link>
                  </td>
                  <td className="py-4 px-6 text-center text-green-400">✓</td>
                  <td className="py-4 px-6 text-center text-green-400">✓</td>
                  <td className="py-4 px-6 text-center text-green-400">✓</td>
                  <td className="py-4 px-6 text-center">1.5%</td>
                </tr>
                <tr className="border-b border-neutral-700/50 hover:bg-neutral-800/30">
                  <td className="py-4 px-6">ERG</td>
                  <td className="py-4 px-6">
                    <Link href="https://github.com/nanopool/nanominer/releases" 
                          className="text-brand-primary-400 hover:text-brand-primary-300 underline inline-flex items-center gap-1">
                      Nanominer <ExternalLink className="w-3 h-3" />
                    </Link>
                  </td>
                  <td className="py-4 px-6 text-center text-green-400">✓</td>
                  <td className="py-4 px-6 text-center text-green-400">✓</td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center">
                    2.5% or{" "}
                    <Link href="https://help.nanopool.org/article/218-pool-information" 
                          className="text-brand-primary-400 hover:text-brand-primary-300 underline">
                      5%
                    </Link>
                  </td>
                </tr>
                <tr className="border-b border-neutral-700/50 hover:bg-neutral-800/30">
                  <td className="py-4 px-6">ERG</td>
                  <td className="py-4 px-6">
                    <Link href="https://github.com/doktor83/SRBMiner-Multi/releases" 
                          className="text-brand-primary-400 hover:text-brand-primary-300 underline inline-flex items-center gap-1">
                      SRB Miner <ExternalLink className="w-3 h-3" />
                    </Link>
                  </td>
                  <td className="py-4 px-6 text-center text-green-400">✓</td>
                  <td className="py-4 px-6 text-center text-green-400">✓</td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center">2%</td>
                </tr>
                <tr className="border-b border-neutral-700/50 hover:bg-neutral-800/30">
                  <td className="py-4 px-6">ERG</td>
                  <td className="py-4 px-6">
                    <Link href="https://github.com/NebuTech/NBMiner" 
                          className="text-brand-primary-400 hover:text-brand-primary-300 underline inline-flex items-center gap-1">
                      NB Miner <ExternalLink className="w-3 h-3" />
                    </Link>
                  </td>
                  <td className="py-4 px-6 text-center text-green-400">✓</td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center">2%</td>
                </tr>
                <tr className="border-b border-neutral-700/50 hover:bg-neutral-800/30">
                  <td className="py-4 px-6">ERG</td>
                  <td className="py-4 px-6">
                    <Link href="https://github.com/todxx/teamredminer/releases" 
                          className="text-brand-primary-400 hover:text-brand-primary-300 underline inline-flex items-center gap-1">
                      Team Red Miner <ExternalLink className="w-3 h-3" />
                    </Link>
                  </td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center text-green-400">✓</td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center">2%</td>
                </tr>
                <tr className="border-b border-neutral-700/50 hover:bg-neutral-800/30">
                  <td className="py-4 px-6">ERG</td>
                  <td className="py-4 px-6">
                    <Link href="https://github.com/trexminer/T-Rex/releases" 
                          className="text-brand-primary-400 hover:text-brand-primary-300 underline inline-flex items-center gap-1">
                      Trex Miner <ExternalLink className="w-3 h-3" />
                    </Link>
                  </td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center text-green-400">✓</td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center">2%</td>
                </tr>
                <tr className="border-b border-neutral-700/50 hover:bg-neutral-800/30">
                  <td className="py-4 px-6">ERG+KAS</td>
                  <td className="py-4 px-6">BzMiner</td>
                  <td className="py-4 px-6 text-center text-green-400">✓</td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center">-</td>
                </tr>
                <tr className="border-b border-neutral-700/50 hover:bg-neutral-800/30">
                  <td className="py-4 px-6">ERG+KAS</td>
                  <td className="py-4 px-6">Gminer</td>
                  <td className="py-4 px-6 text-center text-green-400">✓</td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center">-</td>
                </tr>
                <tr className="hover:bg-neutral-800/30">
                  <td className="py-4 px-6">ERG+KAS</td>
                  <td className="py-4 px-6">
                    <Link href="https://github.com/doktor83/SRBMiner-Multi/releases" 
                          className="text-brand-primary-400 hover:text-brand-primary-300 underline inline-flex items-center gap-1">
                      SRB Miner <ExternalLink className="w-3 h-3" />
                    </Link>
                  </td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center text-green-400">✓</td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center">2%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Source Code Miners */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Source Code Miners</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
              <Monitor className="w-5 h-5 text-red-400" />
              AMD Miner
            </h3>
            <Link href="https://github.com/mhssamadani/Autolykos2_AMD_Miner" 
                  className="text-brand-primary-400 hover:text-brand-primary-300 underline inline-flex items-center gap-1">
              GitHub Repository <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
              <Monitor className="w-5 h-5 text-green-400" />
              NVIDIA Miner
            </h3>
            <Link href="https://github.com/mhssamadani/Autolykos2_NV_Miner" 
                  className="text-brand-primary-400 hover:text-brand-primary-300 underline inline-flex items-center gap-1">
              GitHub Repository <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Other Miners */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-4">Other Miners</h2>
        <div className="space-y-4">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
              <Zap className="w-5 h-5 text-green-400" />
              CUDA-based GPU miner for Ergo
            </h3>
            <p className="text-gray-400 mb-2">For NVIDIA cards</p>
            <Link href="https://github.com/ergoplatform/Autolykos-GPU-miner" 
                  className="text-brand-primary-400 hover:text-brand-primary-300 underline inline-flex items-center gap-1">
              GitHub Repository <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
              <Zap className="w-5 h-5 text-red-400" />
              OpenCL miner for ERGO
            </h3>
            <p className="text-gray-400 mb-2">For AMD cards</p>
            <Link href="https://github.com/mhssamadani/ergoAMDminer" 
                  className="text-brand-primary-400 hover:text-brand-primary-300 underline inline-flex items-center gap-1">
              GitHub Repository <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 