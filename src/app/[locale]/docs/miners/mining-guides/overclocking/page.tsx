
/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
import React from 'react';
import { 
  Zap, 
  Thermometer, 
  BarChart3, 
  ExternalLink, 
  ArrowLeft,
  CheckCircle,
  AlertTriangle,
  Settings,
  ChevronRight,
  Target,
  Monitor,
  Shield,
  TrendingUp,
  Clock
} from 'lucide-react';
import Link from 'next/link';

export default function OverclockingPage() {
  const gpuSettings = [
    {
      brand: "NVIDIA RTX 30 Series",
      models: ["RTX 3060 Ti", "RTX 3070", "RTX 3080", "RTX 3090"],
      settings: {
        coreClock: "-200 to -500 MHz",
        memoryClock: "+1000 to +1500 MHz",
        powerLimit: "65-75%",
        fanSpeed: "60-80%"
      },
      hashrate: "120-170 MH/s",
      power: "150-250W",
      color: "text-green-400"
    },
    {
      brand: "NVIDIA RTX 40 Series", 
      models: ["RTX 4060 Ti", "RTX 4070", "RTX 4080", "RTX 4090"],
      settings: {
        coreClock: "-200 to -400 MHz",
        memoryClock: "+1200 to +1800 MHz", 
        powerLimit: "60-70%",
        fanSpeed: "55-75%"
      },
      hashrate: "130-200 MH/s",
      power: "140-300W",
      color: "text-blue-400"
    },
    {
      brand: "AMD RX 6000 Series",
      models: ["RX 6600 XT", "RX 6700 XT", "RX 6800 XT", "RX 6900 XT"],
      settings: {
        coreClock: "-10 to -20%",
        memoryClock: "+15 to +20%",
        powerLimit: "70-80%", 
        fanSpeed: "65-85%"
      },
      hashrate: "90-160 MH/s",
      power: "130-220W",
      color: "text-red-400"
    },
    {
      brand: "AMD RX 7000 Series",
      models: ["RX 7600", "RX 7700 XT", "RX 7800 XT", "RX 7900 XTX"],
      settings: {
        coreClock: "-15 to -25%",
        memoryClock: "+10 to +18%",
        powerLimit: "65-75%",
        fanSpeed: "60-80%"
      },
      hashrate: "100-180 MH/s", 
      power: "140-280W",
      color: "text-purple-400"
    }
  ];

  const safetyTips = [
    {
      title: "Temperature Monitoring",
      description: "Keep GPU temps below 83°C, VRAM below 95°C",
      icon: Thermometer,
      critical: true
    },
    {
      title: "Gradual Changes",
      description: "Increase overclocks in small 50MHz increments",
      icon: TrendingUp,
      critical: false
    },
    {
      title: "Stress Testing",
      description: "Test stability for 24+ hours before deploying",
      icon: Clock,
      critical: true
    },
    {
      title: "Power Supply",
      description: "Ensure adequate PSU capacity with 20% headroom",
      icon: Zap,
      critical: true
    }
  ];

  const tools = [
    {
      name: "MSI Afterburner",
      description: "Most popular overclocking tool for NVIDIA/AMD",
      platform: "Windows",
      free: true
    },
    {
      name: "HiveOS Overclocking",
      description: "Built-in overclocking for mining OS",
      platform: "HiveOS",
      free: true
    },
    {
      name: "AMD WattMan",
      description: "Official AMD overclocking utility",
      platform: "Windows",
      free: true
    },
    {
      name: "NVIDIA Inspector",
      description: "Advanced NVIDIA tweaking tool",
      platform: "Windows", 
      free: true
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          GPU Overclocking for Ergo
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Maximize your Ergo mining performance with safe and effective GPU overclocking techniques. Optimize power efficiency while maintaining stability.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/miners/mining-guides/software"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            <Monitor className="w-5 h-5" />
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

      {/* Overclocking Fundamentals */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-yellow-900/20 to-yellow-800/20 border border-yellow-700/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Overclocking Fundamentals</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Ergo's Autolykos2 algorithm is memory-intensive, meaning memory clock speeds have the greatest impact on hashrate. 
            Focus on maximizing memory bandwidth while reducing power consumption through core clock undervolting.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-yellow-900/20 border border-yellow-700/30 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-400 mb-2">Memory First</h3>
              <p className="text-sm text-gray-400">Prioritize memory overclocking for maximum hashrate gains</p>
            </div>
            <div className="bg-green-900/20 border border-green-700/30 rounded-lg p-4">
              <h3 className="font-semibold text-green-400 mb-2">Undervolt Core</h3>
              <p className="text-sm text-gray-400">Reduce core clocks to lower power and heat</p>
            </div>
            <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-4">
              <h3 className="font-semibold text-blue-400 mb-2">Efficiency Focus</h3>
              <p className="text-sm text-gray-400">Optimize for MH/s per watt, not raw performance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Safety Guidelines */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-red-900/20 to-red-800/20 border border-red-700/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-red-400 mb-6">Safety Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {safetyTips.map((tip, index) => (
              <div key={index} className={`bg-gray-900/50 border ${tip.critical ? 'border-red-500/50' : 'border-gray-700'} rounded-lg p-4`}>
                <div className="flex items-center gap-3 mb-3">
                  <tip.icon className={`w-6 h-6 ${tip.critical ? 'text-red-400' : 'text-yellow-400'}`} />
                  <h3 className="font-semibold text-white">{tip.title}</h3>
                  {tip.critical && (
                    <AlertTriangle className="w-5 h-5 text-red-400" />
                  )}
                </div>
                <p className="text-gray-400 text-sm">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* GPU-Specific Settings */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/20 border border-blue-700/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-blue-400 mb-6">GPU-Specific Settings</h2>
          <div className="space-y-6">
            {gpuSettings.map((gpu, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-xl font-bold ${gpu.color}`}>{gpu.brand}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>{gpu.hashrate}</span>
                    <span>{gpu.power}</span>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-white mb-3">Recommended Settings</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Core Clock:</span>
                        <span className="text-white">{gpu.settings.coreClock}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Memory Clock:</span>
                        <span className="text-white">{gpu.settings.memoryClock}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Power Limit:</span>
                        <span className="text-white">{gpu.settings.powerLimit}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Fan Speed:</span>
                        <span className="text-white">{gpu.settings.fanSpeed}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-3">Compatible Models</h4>
                    <div className="flex flex-wrap gap-2">
                      {gpu.models.map((model, i) => (
                        <span key={i} className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded">
                          {model}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Overclocking Tools */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-purple-900/20 to-purple-800/20 border border-purple-700/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-purple-400 mb-6">Overclocking Tools</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-white">{tool.name}</h3>
                  <div className="flex items-center gap-2">
                    {tool.free && (
                      <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">Free</span>
                    )}
                    <span className="text-xs text-gray-400">{tool.platform}</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Step-by-Step Guide */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-green-900/20 to-green-800/20 border border-green-700/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-green-400 mb-6">Step-by-Step Overclocking</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
              <div>
                <h3 className="font-semibold text-white mb-2">Baseline Testing</h3>
                <p className="text-gray-400">Record stock hashrate, power draw, and temperatures for comparison</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
              <div>
                <h3 className="font-semibold text-white mb-2">Reduce Power Limit</h3>
                <p className="text-gray-400">Lower power limit to 65-75% to improve efficiency</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
              <div>
                <h3 className="font-semibold text-white mb-2">Undervolt Core Clock</h3>
                <p className="text-gray-400">Reduce core clock by 200-500MHz to lower heat and power</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
              <div>
                <h3 className="font-semibold text-white mb-2">Increase Memory Clock</h3>
                <p className="text-gray-400">Gradually increase memory in +50MHz steps until instability</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">5</div>
              <div>
                <h3 className="font-semibold text-white mb-2">Fine-Tune & Test</h3>
                <p className="text-gray-400">Find optimal balance and stress test for 24+ hours</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">6</div>
              <div>
                <h3 className="font-semibold text-white mb-2">Monitor & Adjust</h3>
                <p className="text-gray-400">Continuously monitor temps and adjust fan curves as needed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Optimization */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-cyan-900/20 to-cyan-800/20 border border-cyan-700/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Performance Optimization Tips</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-white">Efficiency Focus</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Target 0.6-0.8 MH/s per watt
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Prioritize memory bandwidth over core speed
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Maintain GPU temps below 80°C
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-white">Common Mistakes</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                  Pushing memory too hard causing errors
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                  Ignoring VRAM temperature limits
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                  Not testing stability long enough
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="grid md:grid-cols-2 gap-6">
        <Link
          href="/docs/miners/mining-guides/pools"
          className="group bg-gradient-to-r from-orange-900/20 to-orange-800/20 border border-orange-700/30 rounded-xl p-6 hover:border-orange-600/50 transition-all"
        >
          <div className="flex items-center justify-between mb-4">
            <Target className="w-8 h-8 text-orange-400" />
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-orange-400 transition-colors" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Mining Pools</h3>
          <p className="text-gray-400 text-sm">Join a pool to start earning consistent Ergo rewards</p>
        </Link>

        <Link
          href="/docs/miners/mining-guides/solo-mining"
          className="group bg-gradient-to-r from-purple-900/20 to-purple-800/20 border border-purple-700/30 rounded-xl p-6 hover:border-purple-600/50 transition-all"
        >
          <div className="flex items-center justify-between mb-4">
            <Shield className="w-8 h-8 text-purple-400" />
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Solo Mining</h3>
          <p className="text-gray-400 text-sm">Advanced setup for mining directly to your node</p>
        </Link>
    </div>
    </>
  );
} 