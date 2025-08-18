import React from 'react';
import { 
  Monitor, 
  Cpu, 
  Shield, 
  ExternalLink, 
  ArrowLeft,
  CheckCircle,
  Star,
  Download,
  Settings,
  ChevronRight,
  Target,
  BarChart3,
  Zap,
  HardDrive
} from 'lucide-react';
import Link from 'next/link';

export default function OperatingSystemsPage() {
  const operatingSystems = [
    {
      name: "HiveOS",
      description: "Most popular mining OS with web-based management",
      pros: ["Web dashboard", "Auto-updates", "Mass deployment", "24/7 monitoring"],
      cons: ["Subscription cost", "Internet dependent"],
      difficulty: "Beginner",
      color: "text-green-400",
      recommended: true
    },
    {
      name: "Windows 10/11",
      description: "Familiar interface but requires manual optimization",
      pros: ["User-friendly", "Wide compatibility", "Easy troubleshooting"],
      cons: ["Resource heavy", "Manual setup", "Background processes"],
      difficulty: "Intermediate", 
      color: "text-blue-400",
      recommended: false
    },
    {
      name: "SimpleMining OS",
      description: "Easy-to-use alternative to HiveOS",
      pros: ["Simple setup", "Good support", "Reasonable pricing"],
      cons: ["Smaller community", "Fewer features"],
      difficulty: "Beginner",
      color: "text-cyan-400", 
      recommended: false
    },
    {
      name: "Ubuntu/Linux",
      description: "Free and powerful but requires technical knowledge",
      pros: ["Free", "Lightweight", "Full control", "No licensing"],
      cons: ["Learning curve", "Manual configuration", "Less support"],
      difficulty: "Advanced",
      color: "text-purple-400",
      recommended: false
    }
  ];

  const optimizationTips = [
    {
      title: "Disable Windows Updates",
      description: "Prevent automatic restarts during mining",
      icon: Shield
    },
    {
      title: "Power Settings",
      description: "Set to High Performance mode",
      icon: Zap
    },
    {
      title: "Virtual Memory",
      description: "Increase pagefile size for large DAG files",
      icon: HardDrive
    },
    {
      title: "GPU Drivers",
      description: "Use latest stable drivers",
      icon: Settings
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Mining Operating Systems
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Choose the right operating system for your Ergo mining setup. From beginner-friendly solutions to advanced configurations.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/miners/mining-guides/software"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            <Download className="w-5 h-5" />
            Mining Software
          </Link>
          <Link
            href="/docs/miners/mining-guides/pools"
            className="inline-flex items-center gap-2 border border-gray-600 hover:border-gray-500 text-gray-300 px-6 py-3 rounded-lg transition-colors"
          >
            <Target className="w-5 h-5" />
            Mining Pools
          </Link>
          <Link
            href="/docs/miners/mining-guides"
            className="inline-flex items-center gap-2 border border-gray-600 hover:border-gray-500 text-gray-300 px-6 py-3 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Mining Guides
          </Link>
        </div>
      </div>

      {/* Operating System Overview */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-green-900/20 to-green-800/20 border border-green-700/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Choosing Your Mining OS</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Your operating system choice significantly impacts mining efficiency, ease of management, and overall stability. 
            Consider your technical expertise, number of rigs, and management preferences when selecting.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-900/20 border border-green-700/30 rounded-lg p-4">
              <h3 className="font-semibold text-green-400 mb-2">Beginners</h3>
              <p className="text-sm text-gray-400">HiveOS or SimpleMining for ease of use</p>
            </div>
            <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-4">
              <h3 className="font-semibold text-blue-400 mb-2">Home Users</h3>
              <p className="text-sm text-gray-400">Windows for familiar interface</p>
            </div>
            <div className="bg-purple-900/20 border border-purple-700/30 rounded-lg p-4">
              <h3 className="font-semibold text-purple-400 mb-2">Advanced</h3>
              <p className="text-sm text-gray-400">Linux for maximum control</p>
            </div>
          </div>
        </div>
      </div>

      {/* Operating Systems Comparison */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/20 border border-blue-700/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-blue-400 mb-6">Operating Systems Comparison</h2>
          <div className="space-y-6">
            {operatingSystems.map((os, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <h3 className={`text-xl font-bold ${os.color}`}>{os.name}</h3>
                    {os.recommended && (
                      <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Recommended
                      </span>
                    )}
                  </div>
                  <span className={`text-sm px-3 py-1 rounded-full ${
                    os.difficulty === 'Beginner' ? 'bg-green-900/50 text-green-400' :
                    os.difficulty === 'Intermediate' ? 'bg-yellow-900/50 text-yellow-400' :
                    'bg-red-900/50 text-red-400'
                  }`}>
                    {os.difficulty}
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{os.description}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-400 mb-2">Pros</h4>
                    <ul className="space-y-1">
                      {os.pros.map((pro, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-400 mb-2">Cons</h4>
                    <ul className="space-y-1">
                      {os.cons.map((con, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-4 h-4 border border-red-400 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                          </div>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Windows Optimization */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-purple-900/20 to-purple-800/20 border border-purple-700/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-purple-400 mb-6">Windows Optimization Tips</h2>
          <p className="text-gray-300 mb-6">
            If you choose Windows, these optimizations will improve mining performance and stability:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {optimizationTips.map((tip, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <tip.icon className="w-6 h-6 text-purple-400" />
                  <h3 className="font-semibold text-white">{tip.title}</h3>
                </div>
                <p className="text-gray-400 text-sm">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* HiveOS Deep Dive */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-orange-900/20 to-orange-800/20 border border-orange-700/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-orange-400 mb-6">HiveOS - The Mining Standard</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Why HiveOS?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">Web Dashboard</span>
                    <p className="text-sm text-gray-400">Monitor and control rigs from anywhere</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">Mass Management</span>
                    <p className="text-sm text-gray-400">Configure hundreds of rigs simultaneously</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">Automatic Updates</span>
                    <p className="text-sm text-gray-400">Latest miners and drivers automatically</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Getting Started</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                  <span className="text-gray-300">Create HiveOS account</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                  <span className="text-gray-300">Download and flash image</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                  <span className="text-gray-300">Configure farm and workers</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
                  <span className="text-gray-300">Start mining</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cost Comparison */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-cyan-900/20 to-cyan-800/20 border border-cyan-700/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Cost Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-3 px-4 font-semibold text-white">OS</th>
                  <th className="text-left py-3 px-4 font-semibold text-white">Cost</th>
                  <th className="text-left py-3 px-4 font-semibold text-white">Free Rigs</th>
                  <th className="text-left py-3 px-4 font-semibold text-white">Monthly Cost (10 rigs)</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4">HiveOS</td>
                  <td className="py-3 px-4">$3/rig/month</td>
                  <td className="py-3 px-4">1 rig free</td>
                  <td className="py-3 px-4">$27</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4">SimpleMining</td>
                  <td className="py-3 px-4">$2/rig/month</td>
                  <td className="py-3 px-4">2 rigs free</td>
                  <td className="py-3 px-4">$16</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4">Windows</td>
                  <td className="py-3 px-4">License cost</td>
                  <td className="py-3 px-4">N/A</td>
                  <td className="py-3 px-4">$0 (if licensed)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Linux</td>
                  <td className="py-3 px-4">Free</td>
                  <td className="py-3 px-4">Unlimited</td>
                  <td className="py-3 px-4">$0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="grid md:grid-cols-2 gap-6">
        <Link
          href="/docs/miners/mining-guides/overclocking"
          className="group bg-gradient-to-r from-yellow-900/20 to-yellow-800/20 border border-yellow-700/30 rounded-xl p-6 hover:border-yellow-600/50 transition-all"
        >
          <div className="flex items-center justify-between mb-4">
            <BarChart3 className="w-8 h-8 text-yellow-400" />
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-yellow-400 transition-colors" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">GPU Overclocking</h3>
          <p className="text-gray-400 text-sm">Optimize your GPUs for maximum Ergo mining performance</p>
        </Link>

        <Link
          href="/docs/miners/mining-guides/pools"
          className="group bg-gradient-to-r from-purple-900/20 to-purple-800/20 border border-purple-700/30 rounded-xl p-6 hover:border-purple-600/50 transition-all"
        >
          <div className="flex items-center justify-between mb-4">
            <Target className="w-8 h-8 text-purple-400" />
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Mining Pools</h3>
          <p className="text-gray-400 text-sm">Choose the best pool for consistent Ergo payouts</p>
        </Link>
    </div>
    </>
  );
} 