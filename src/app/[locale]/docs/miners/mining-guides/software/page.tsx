import React from 'react';
import { 
  Download, 
  Monitor, 
  Zap, 
  ExternalLink, 
  ArrowLeft,
  CheckCircle,
  Star,
  Shield,
  Cpu,
  HardDrive,
  ChevronRight,
  Target,
  BarChart3
} from 'lucide-react';
import Link from 'next/link';

export default function SoftwarePage() {
  const recommendedMiners = [
    {
      name: "T-Rex",
      description: "High-performance NVIDIA miner with excellent optimization",
      gpu: "NVIDIA",
      fee: "1%",
      color: "text-green-400",
      recommended: true,
      features: ["Auto-tuning", "Web monitoring", "Dual mining"]
    },
    {
      name: "TeamRedMiner",
      description: "Optimized for AMD GPUs with superior hashrates",
      gpu: "AMD",
      fee: "2-3%",
      color: "text-red-400",
      recommended: true,
      features: ["AMD optimization", "Stable performance", "Low rejection rates"]
    },
    {
      name: "NBMiner",
      description: "Versatile miner supporting both NVIDIA and AMD",
      gpu: "NVIDIA/AMD",
      fee: "2%",
      color: "text-blue-400",
      recommended: false,
      features: ["Cross-platform", "LHR support", "Dual mining"]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Mining Software
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Essential software tools for mining Ergo with Autolykos2. Choose the right miner for your setup to maximize performance and profitability.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/trexminer/T-Rex/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-500 rounded-xl font-semibold text-black hover:bg-blue-600 transition-transform hover:scale-105"
          >
            <Download className="w-5 h-5 mr-2" /> Download T-Rex
          </a>
          <Link
            href="/docs/miners/mining-guides"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Guides
          </Link>
        </div>
      </div>

      {/* Software Selection Guide */}
      <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Target className="w-6 h-6 text-blue-400" /> Choosing the Right Miner
        </h2>
        <p className="text-gray-300 mb-4">
          Your choice of mining software significantly impacts hashrate, stability, and profitability. Consider your GPU type, experience level, and specific requirements when selecting a miner.
        </p>
        <div className="bg-neutral-800/50 rounded-lg p-4">
          <h4 className="font-semibold text-blue-400 mb-2">Key Considerations:</h4>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li>• <strong>GPU Compatibility:</strong> Ensure the miner supports your graphics card</li>
            <li>• <strong>Developer Fee:</strong> Balance between features and fee percentage</li>
            <li>• <strong>Stability:</strong> Look for miners with proven track records</li>
            <li>• <strong>Features:</strong> Web monitoring, auto-tuning, and optimization tools</li>
          </ul>
        </div>
      </div>

      {/* Recommended Miners */}
      <div className="grid md:grid-cols-1 gap-6 mb-8">
        {recommendedMiners.map((miner, index) => (
          <div key={index} className={`bg-${miner.color.split('-')[1]}-400/10 border border-${miner.color.split('-')[1]}-400/20 rounded-xl p-6 relative`}>
            {miner.recommended && (
              <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                <Star className="w-3 h-3" /> Recommended
              </div>
            )}
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className={`text-xl font-bold mb-2 flex items-center gap-2 ${miner.color}`}>
                  <Cpu className="w-5 h-5" /> {miner.name}
                </h3>
                <p className="text-gray-300 mb-3">{miner.description}</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="bg-neutral-800/50 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">GPU Support</span>
                  <span className={`font-semibold ${miner.color}`}>{miner.gpu}</span>
                </div>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Dev Fee</span>
                  <span className="text-white font-semibold">{miner.fee}</span>
                </div>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Features</span>
                  <span className="text-white font-semibold">{miner.features.length}</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className={`font-semibold ${miner.color} text-sm`}>Key Features:</h4>
              <div className="flex flex-wrap gap-2">
                {miner.features.map((feature, idx) => (
                  <span key={idx} className="bg-neutral-800/50 text-gray-300 text-xs px-2 py-1 rounded">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Complete Miners Table */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <BarChart3 className="w-6 h-6 text-purple-400" /> Complete Miners Comparison
        </h2>
        <p className="text-gray-300 mb-6">
          Comprehensive comparison of all available Ergo miners with platform support and developer fees.
        </p>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-700">
                <th className="text-left py-4 px-6 text-white font-semibold">Miner</th>
                <th className="text-center py-4 px-6 text-white font-semibold">NVIDIA</th>
                <th className="text-center py-4 px-6 text-white font-semibold">AMD</th>
                <th className="text-center py-4 px-6 text-white font-semibold">Intel</th>
                <th className="text-center py-4 px-6 text-white font-semibold">Dev Fee</th>
                <th className="text-center py-4 px-6 text-white font-semibold">Download</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-neutral-700/50 hover:bg-neutral-800/30">
                <td className="py-4 px-6 font-semibold">lolMiner</td>
                <td className="py-4 px-6 text-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                </td>
                <td className="py-4 px-6 text-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                </td>
                <td className="py-4 px-6 text-center">-</td>
                <td className="py-4 px-6 text-center">1%</td>
                <td className="py-4 px-6 text-center">
                  <a href="https://github.com/Lolliedieb/lolMiner-releases" 
                     target="_blank" rel="noopener noreferrer"
                     className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </td>
              </tr>
              <tr className="border-b border-neutral-700/50 hover:bg-neutral-800/30">
                <td className="py-4 px-6 font-semibold">T-Rex</td>
                <td className="py-4 px-6 text-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                </td>
                <td className="py-4 px-6 text-center">-</td>
                <td className="py-4 px-6 text-center">-</td>
                <td className="py-4 px-6 text-center">1%</td>
                <td className="py-4 px-6 text-center">
                  <a href="https://github.com/trexminer/T-Rex/releases" 
                     target="_blank" rel="noopener noreferrer"
                     className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </td>
              </tr>
              <tr className="border-b border-neutral-700/50 hover:bg-neutral-800/30">
                <td className="py-4 px-6 font-semibold">TeamRedMiner</td>
                <td className="py-4 px-6 text-center">-</td>
                <td className="py-4 px-6 text-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                </td>
                <td className="py-4 px-6 text-center">-</td>
                <td className="py-4 px-6 text-center">2-3%</td>
                <td className="py-4 px-6 text-center">
                  <a href="https://github.com/todxx/teamredminer/releases" 
                     target="_blank" rel="noopener noreferrer"
                     className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </td>
              </tr>
              <tr className="border-b border-neutral-700/50 hover:bg-neutral-800/30">
                <td className="py-4 px-6 font-semibold">NBMiner</td>
                <td className="py-4 px-6 text-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                </td>
                <td className="py-4 px-6 text-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                </td>
                <td className="py-4 px-6 text-center">-</td>
                <td className="py-4 px-6 text-center">2%</td>
                <td className="py-4 px-6 text-center">
                  <a href="https://github.com/NebuTech/NBMiner/releases" 
                     target="_blank" rel="noopener noreferrer"
                     className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </td>
              </tr>
              <tr className="border-b border-neutral-700/50 hover:bg-neutral-800/30">
                <td className="py-4 px-6 font-semibold">Nanominer</td>
                <td className="py-4 px-6 text-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                </td>
                <td className="py-4 px-6 text-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                </td>
                <td className="py-4 px-6 text-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                </td>
                <td className="py-4 px-6 text-center">2.5%</td>
                <td className="py-4 px-6 text-center">
                  <a href="https://github.com/nanopool/nanominer/releases" 
                     target="_blank" rel="noopener noreferrer"
                     className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </td>
              </tr>
              <tr className="border-b border-neutral-700/50 hover:bg-neutral-800/30">
                <td className="py-4 px-6 font-semibold">Rigel</td>
                <td className="py-4 px-6 text-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                </td>
                <td className="py-4 px-6 text-center">-</td>
                <td className="py-4 px-6 text-center">-</td>
                <td className="py-4 px-6 text-center">1%</td>
                <td className="py-4 px-6 text-center">
                  <a href="https://github.com/rigelminer/rigel/releases" 
                     target="_blank" rel="noopener noreferrer"
                     className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </td>
              </tr>
              <tr className="hover:bg-neutral-800/30">
                <td className="py-4 px-6 font-semibold">SRBMiner-Multi</td>
                <td className="py-4 px-6 text-center">-</td>
                <td className="py-4 px-6 text-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                </td>
                <td className="py-4 px-6 text-center">-</td>
                <td className="py-4 px-6 text-center">0.85%</td>
                <td className="py-4 px-6 text-center">
                  <a href="https://github.com/doktor83/SRBMiner-Multi/releases" 
                     target="_blank" rel="noopener noreferrer"
                     className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Setup Tips */}
      <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Shield className="w-6 h-6 text-green-400" /> Setup & Optimization Tips
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-green-400 mb-3">Getting Started</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                Download the latest version from official sources
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                Configure your pool settings and wallet address
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                Test with default settings before optimization
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                Monitor temperatures and power consumption
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-green-400 mb-3">Performance Tips</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                Use latest GPU drivers for optimal performance
              </li>
              <li className="flex items-start gap-2">
                <HardDrive className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                Ensure adequate virtual memory (16GB+)
              </li>
              <li className="flex items-start gap-2">
                <Monitor className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                Use web monitoring for remote management
              </li>
              <li className="flex items-start gap-2">
                <Shield className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                Regularly backup your configuration files
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <Target className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white">Next Steps</h3>
        </div>
        <p className="text-gray-300 mb-4">
          After choosing your mining software, configure your system and join a mining pool for steady rewards.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/docs/miners/mining-guides/pools"
            className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-300 hover:bg-blue-500/30 transition-colors text-sm"
          >
            Find Mining Pools <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
          <Link
            href="/docs/miners/mining-guides/overclocking"
            className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 hover:bg-green-500/30 transition-colors text-sm"
          >
            Optimize Performance <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
      </div>
    </div>
    </>
  );
} 