import React from 'react';
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  ExternalLink, 
  ArrowLeft,
  CheckCircle,
  Star,
  Target,
  ChevronRight,
  Settings,
  Shield,
  Clock,
  BarChart3,
  Zap,
  Globe
} from 'lucide-react';
import Link from 'next/link';

export default function PoolsPage() {
  const pools = [
    {
      name: "Herominers",
      url: "https://ergo.herominers.com/",
      fee: "1%",
      minPayout: "1 ERG",
      paymentScheme: "PPLNS",
      hashrate: "~800 TH/s",
      miners: "~15,000",
      features: ["Auto-switching", "Mobile app", "Telegram bot"],
      color: "text-blue-400",
      recommended: true,
      description: "Large, stable pool with excellent support"
    },
    {
      name: "Leafpool",
      url: "https://ergo.leafpool.com/",
      fee: "1%",
      minPayout: "0.1 ERG",
      paymentScheme: "PPLNS",
      hashrate: "~400 TH/s", 
      miners: "~8,000",
      features: ["Low minimum", "Fast payouts", "Good uptime"],
      color: "text-green-400",
      recommended: true,
      description: "Popular choice with low payout threshold"
    },
    {
      name: "WoolyPooly",
      url: "https://woolypooly.com/ergo",
      fee: "0.9%",
      minPayout: "0.1 ERG",
      paymentScheme: "PPLNS",
      hashrate: "~600 TH/s",
      miners: "~12,000", 
      features: ["Low fees", "Multiple regions", "MEV rewards"],
      color: "text-purple-400",
      recommended: true,
      description: "Professional pool with global servers"
    },
    {
      name: "2Miners",
      url: "https://2miners.com/ergo-mining-pool",
      fee: "1%",
      minPayout: "0.1 ERG",
      paymentScheme: "PPLNS",
      hashrate: "~300 TH/s",
      miners: "~6,000",
      features: ["Multi-algo", "Good stats", "Stable"],
      color: "text-orange-400",
      recommended: false,
      description: "Reliable multi-algorithm mining pool"
    },
    {
      name: "Nanopool",
      url: "https://nanopool.org/ergo",
      fee: "1%",
      minPayout: "0.1 ERG",
      paymentScheme: "PPLNS",
      hashrate: "~250 TH/s",
      miners: "~5,000",
      features: ["Email alerts", "Mobile app", "Analytics"],
      color: "text-cyan-400",
      recommended: false,
      description: "Well-established pool with good tools"
    },
    {
      name: "K1Pool",
      url: "https://k1pool.com/pool/ergo",
      fee: "0.5%",
      minPayout: "1 ERG",
      paymentScheme: "PPLNS",
      hashrate: "~150 TH/s",
      miners: "~3,000",
      features: ["Lowest fees", "Clean interface", "Fair distribution"],
      color: "text-yellow-400",
      recommended: false,
      description: "Community-focused pool with low fees"
    }
  ];

  const poolFactors = [
    {
      title: "Pool Fees",
      description: "Typically 0.5-1.5%, lower isn't always better",
      icon: DollarSign,
      importance: "High"
    },
    {
      title: "Pool Size",
      description: "Larger pools = more frequent, smaller payouts",
      icon: Users,
      importance: "Medium"
    },
    {
      title: "Minimum Payout",
      description: "How much ERG before automatic withdrawal",
      icon: Target,
      importance: "High"
    },
    {
      title: "Geographic Location",
      description: "Closer servers = lower latency",
      icon: Globe,
      importance: "Low"
    },
    {
      title: "Uptime & Stability",
      description: "Pool should have 99%+ uptime",
      icon: Shield,
      importance: "Critical"
    },
    {
      title: "Payment Scheme",
      description: "PPLNS vs PPS affects payout consistency",
      icon: BarChart3,
      importance: "Medium"
    }
  ];

  const paymentSchemes = [
    {
      name: "PPLNS",
      fullName: "Pay Per Last N Shares",
      description: "Most common scheme, pays based on contributed shares",
      pros: ["No pool fees on luck", "Fair long-term returns", "Discourages pool hopping"],
      cons: ["Variance in payouts", "Delayed rewards", "Complex calculation"],
      recommended: true
    },
    {
      name: "PPS",
      fullName: "Pay Per Share", 
      description: "Fixed payment per valid share submitted",
      pros: ["Predictable payouts", "Immediate rewards", "No variance"],
      cons: ["Higher pool fees", "Pool takes risk", "Less profitable long-term"],
      recommended: false
    }
  ];

  return (
    <>
      {/* Back Button */}
      <div className="mb-8">
        <Link 
          href="/Docs/miners/mining-guides"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Mining Guides</span>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Ergo Mining Pools
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Join forces with other miners to earn consistent Ergo rewards. Choose from established pools with different features, fees, and payout schemes.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/Docs/miners/mining-guides/software"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            <Settings className="w-5 h-5" />
            Mining Software
          </Link>
          <Link
            href="/Docs/miners/mining-guides/solo-mining"
            className="inline-flex items-center gap-2 border border-gray-600 hover:border-gray-500 text-gray-300 px-6 py-3 rounded-lg transition-colors"
          >
            <Shield className="w-5 h-5" />
            Solo Mining
          </Link>
        </div>
      </div>

      {/* Pool Mining Overview */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/20 border border-blue-700/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Why Pool Mining?</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Pool mining combines the computational power of many miners to increase the chance of finding blocks. 
            Instead of waiting potentially months to find a block solo, pools provide regular, predictable payouts.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-4">
              <h3 className="font-semibold text-blue-400 mb-2">Steady Income</h3>
              <p className="text-sm text-gray-400">Regular payouts instead of sporadic large rewards</p>
            </div>
            <div className="bg-green-900/20 border border-green-700/30 rounded-lg p-4">
              <h3 className="font-semibold text-green-400 mb-2">Lower Variance</h3>
              <p className="text-sm text-gray-400">Reduced impact of mining luck on earnings</p>
            </div>
            <div className="bg-purple-900/20 border border-purple-700/30 rounded-lg p-4">
              <h3 className="font-semibold text-purple-400 mb-2">Easy Setup</h3>
              <p className="text-sm text-gray-400">No need to run your own Ergo node</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pool Selection Factors */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-yellow-900/20 to-yellow-800/20 border border-yellow-700/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">Pool Selection Factors</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {poolFactors.map((factor, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <factor.icon className="w-6 h-6 text-yellow-400" />
                  <h3 className="font-semibold text-white">{factor.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    factor.importance === 'Critical' ? 'bg-red-600 text-white' :
                    factor.importance === 'High' ? 'bg-orange-600 text-white' :
                    factor.importance === 'Medium' ? 'bg-yellow-600 text-black' :
                    'bg-gray-600 text-white'
                  }`}>
                    {factor.importance}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Pools */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-green-900/20 to-green-800/20 border border-green-700/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-green-400 mb-6">Popular Ergo Mining Pools</h2>
          <div className="space-y-6">
            {pools.map((pool, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <h3 className={`text-xl font-bold ${pool.color}`}>{pool.name}</h3>
                    {pool.recommended && (
                      <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Recommended
                      </span>
                    )}
                  </div>
                  <Link
                    href={pool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-gray-400 hover:text-white transition-colors"
                  >
                    Visit Pool <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
                <p className="text-gray-400 mb-4">{pool.description}</p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-white mb-3">Pool Stats</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Fee:</span>
                        <span className="text-white">{pool.fee}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Min Payout:</span>
                        <span className="text-white">{pool.minPayout}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Scheme:</span>
                        <span className="text-white">{pool.paymentScheme}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-3">Network Stats</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Hashrate:</span>
                        <span className="text-white">{pool.hashrate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Miners:</span>
                        <span className="text-white">{pool.miners}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-3">Features</h4>
                    <div className="flex flex-wrap gap-1">
                      {pool.features.map((feature, i) => (
                        <span key={i} className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded">
                          {feature}
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

      {/* Payment Schemes */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-purple-900/20 to-purple-800/20 border border-purple-700/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-purple-400 mb-6">Payment Schemes Explained</h2>
          <div className="space-y-6">
            {paymentSchemes.map((scheme, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold text-white">{scheme.name}</h3>
                  <span className="text-sm text-gray-400">({scheme.fullName})</span>
                  {scheme.recommended && (
                    <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">Recommended</span>
                  )}
                </div>
                <p className="text-gray-400 mb-4">{scheme.description}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-400 mb-2">Advantages</h4>
                    <ul className="space-y-1">
                      {scheme.pros.map((pro, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-400 mb-2">Disadvantages</h4>
                    <ul className="space-y-1">
                      {scheme.cons.map((con, i) => (
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

      {/* Getting Started */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-orange-900/20 to-orange-800/20 border border-orange-700/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-orange-400 mb-6">Getting Started with Pool Mining</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
              <div>
                <h3 className="font-semibold text-white mb-2">Choose Your Pool</h3>
                <p className="text-gray-400">Consider fees, payout threshold, and server locations</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
              <div>
                <h3 className="font-semibold text-white mb-2">Create Account</h3>
                <p className="text-gray-400">Register on the pool website and get your stratum details</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
              <div>
                <h3 className="font-semibold text-white mb-2">Configure Miner</h3>
                <p className="text-gray-400">Set up your mining software with pool address and wallet</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
              <div>
                <h3 className="font-semibold text-white mb-2">Start Mining</h3>
                <p className="text-gray-400">Begin mining and monitor your dashboard for statistics</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">5</div>
              <div>
                <h3 className="font-semibold text-white mb-2">Monitor & Optimize</h3>
                <p className="text-gray-400">Track performance and adjust settings for maximum efficiency</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="grid md:grid-cols-2 gap-6">
        <Link
          href="/Docs/miners/mining-guides/overclocking"
          className="group bg-gradient-to-r from-yellow-900/20 to-yellow-800/20 border border-yellow-700/30 rounded-xl p-6 hover:border-yellow-600/50 transition-all"
        >
          <div className="flex items-center justify-between mb-4">
            <Zap className="w-8 h-8 text-yellow-400" />
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-yellow-400 transition-colors" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">GPU Overclocking</h3>
          <p className="text-gray-400 text-sm">Optimize your hardware for maximum mining performance</p>
        </Link>

        <Link
          href="/Docs/miners/Revenue"
          className="group bg-gradient-to-r from-green-900/20 to-green-800/20 border border-green-700/30 rounded-xl p-6 hover:border-green-600/50 transition-all"
        >
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="w-8 h-8 text-green-400" />
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Mining Revenue</h3>
          <p className="text-gray-400 text-sm">Learn about future revenue streams beyond block rewards</p>
        </Link>
    </div>
    </>
  );
} 