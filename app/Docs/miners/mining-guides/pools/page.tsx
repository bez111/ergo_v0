import React from "react";
import { ArrowLeft, Users, Network, Activity, Shield, ExternalLink, AlertTriangle, Star, Zap, Award } from "lucide-react";
import Link from "next/link";

export default function PoolsPage() {
  const pools = [
    {
      name: "Kryptex",
      url: "https://pool.kryptex.com/erg",
      guideUrl: "https://pool.kryptex.com/articles/how-to-mine-ergo-en",
      guideTitle: "How to start mining on Kryptex",
      icon: <Shield className="w-6 h-6 text-blue-400" />
    },
    {
      name: "Sigmanauts Mining Pool",
      url: "https://sigmanauts.com/mining/",
      guideUrl: "https://sigmanauts.com/mining/",
      guideTitle: "How to start mining on Sigmanaut Pool & Earn Bonus Tokens",
      icon: <Award className="w-6 h-6 text-yellow-400" />,
      featured: true,
      extraLinks: [
        { title: "Current and past votes on Paideia", url: "https://app.paideia.im/sigmanautsminingdao" },
        { title: "Discord", url: "https://discord.gg/cZMwX347Dx" },
        { title: "Telegram Chat", url: "https://t.me/+TPc9MRparGFjZjYx" }
      ]
    },
    {
      name: "WoolyPooly",
      url: "https://woolypooly.com/en/coin/erg",
      guideUrl: "https://www.youtube.com/watch?v=47eBVIjWYqY",
      guideTitle: "How to start mining Ergo (ERG) on Windows with AMD RX 4GB cards",
      icon: <Activity className="w-6 h-6 text-purple-400" />,
      extraLinks: [
        { title: "Discord", url: "https://woolypooly.com/discord" },
        { title: "Telegram Chat", url: "https://woolypooly.com/telegram" }
      ]
    },
    {
      name: "NanoPool",
      url: "https://ergo.nanopool.org/",
      guideUrl: "https://help.nanopool.org/hc/en-us/categories/4896043358365-Ergo-ERG-pool",
      guideTitle: "How to start mining Ergo (ERG) on NanoPool",
      icon: <Network className="w-6 h-6 text-green-400" />
    },
    {
      name: "K1pool",
      url: "https://k1pool.com/pool/erg",
      guideUrl: "https://k1pool.com/pool/erg/how-to-start",
      guideTitle: "How to start mining on K1pool",
      icon: <Users className="w-6 h-6 text-cyan-400" />
    },
    {
      name: "2Miners",
      url: "https://2miners.com/erg-mining-pool",
      guideUrl: "https://erg.2miners.com/help",
      guideTitle: "How to start mining Ergo",
      icon: <Zap className="w-6 h-6 text-orange-400" />
    },
    {
      name: "F2pool",
      url: "https://www.f2pool.com/?_ga=2.253802568.1957310317.1634436769-1506845288.1634436769",
      guideUrl: "https://f2pool.io/mining/guides/how-to-mine-ergo/",
      guideTitle: "How to mine Ergo (ERG) on f2pool",
      icon: <Shield className="w-6 h-6 text-red-400" />
    },
    {
      name: "HeroMiners",
      url: "https://ergo.herominers.com/",
      guideUrl: "https://herominers.medium.com/how-to-mine-ergo-erg-complete-beginners-guide-608a87e89ed6",
      guideTitle: "Hero Miners: How to Mine Ergo (ERG)? Complete Beginner's Guide",
      icon: <Award className="w-6 h-6 text-indigo-400" />,
      extraLinks: [
        { title: "How to mine Erg", url: "https://ergo.herominers.com/#how-to-mine-ergo-erg" },
        { title: "How to Mine Ergo? Step by Step (Youtube)", url: "https://www.youtube.com/watch?v=4SnpCF67kyc" }
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
          <Users className="w-8 h-8 text-brand-primary-400" />
          Mining Pools
        </h1>
        <p className="text-xl text-gray-300 mb-6">
          Mining pools are groups of miners who combine their computational resources to increase their chances of finding a block. The reward is then split among the pool members, proportional to the amount of work they contributed.
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

      {/* Decentralization Warning */}
      <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-yellow-300 mb-2">Distribute your hashrate! Keep Ergo decentralised!</h3>
            <p className="text-yellow-100">
              Please distribute your hashrate and mine towards smaller pools! A comprehensive list of Ergo mining pools is available on{" "}
              <Link href="https://miningpoolstats.stream/ergo" 
                    className="text-yellow-300 hover:text-yellow-200 underline inline-flex items-center gap-1"
                    target="_blank" rel="noopener noreferrer">
                Mining Pool Stats <ExternalLink className="w-3 h-3" />
              </Link>.
            </p>
          </div>
        </div>
      </div>

      {/* Key Concepts */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
            <Activity className="w-5 h-5 text-green-400" />
            Earnings and Pool Size
          </h3>
          <p className="text-gray-300">
            While larger pools win blocks more frequently and can provide more consistent payouts, your long-term earnings should be roughly the same regardless of the pool size. In smaller pools, you might not receive a payout until the pool wins a block.
          </p>
        </div>
        
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-purple-400" />
            Dual Mining
          </h3>
          <p className="text-gray-300">
            Dual mining allows you to mine Ergo alongside other coins such as KAS and ALPH.{" "}
            <Link href="https://miningpoolstats.stream/ergo" 
                  className="text-brand-primary-400 hover:text-brand-primary-300 underline inline-flex items-center gap-1"
                  target="_blank" rel="noopener noreferrer">
              Mining Pool Stats <ExternalLink className="w-3 h-3" />
            </Link>{" "}
            provides details on pools currently offering this feature natively.
          </p>
        </div>
      </div>

      {/* Solo Mining Info */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Shield className="w-6 h-6 text-cyan-400" />
          Solo Mining
        </h2>
        <p className="text-gray-300 mb-4">
          Solo mining is an option for those who wish to operate independently of mining pools. This requires setting up a node and stratum server, which can be done by following the instructions provided in our guide.
        </p>
        <p className="text-gray-300">
          Several mining pools offer a solo port for those who prefer this method. A comprehensive list of these pools can be found on{" "}
          <Link href="https://miningpoolstats.stream/ergo" 
                className="text-brand-primary-400 hover:text-brand-primary-300 underline inline-flex items-center gap-1"
                target="_blank" rel="noopener noreferrer">
            Mining Pool Stats <ExternalLink className="w-3 h-3" />
          </Link>.
        </p>
      </div>

      {/* Resources */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">Resources</h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <Network className="w-5 h-5 text-blue-400" />
            Nice Hash
          </h3>
          <p className="text-gray-300 mb-4">
            <Link href="https://www.nicehash.com/" 
                  className="text-brand-primary-400 hover:text-brand-primary-300 underline inline-flex items-center gap-1"
                  target="_blank" rel="noopener noreferrer">
              Nice Hash <ExternalLink className="w-4 h-4" />
            </Link>{" "}
            is a popular platform for cryptocurrency mining and trading that supports Ergo. They hosted a live event with Ergo, which you can watch{" "}
            <Link href="https://www.nicehash.com/blog/post/join-us-live-with-ergo-on-nice-talk-on-the-29th" 
                  className="text-brand-primary-400 hover:text-brand-primary-300 underline inline-flex items-center gap-1"
                  target="_blank" rel="noopener noreferrer">
              here <ExternalLink className="w-3 h-3" />
            </Link>.
          </p>
        </div>
      </div>

      {/* Mining Pools List */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">Mining Pools</h2>
        <div className="grid gap-6">
          {pools.map((pool, index) => (
            <div key={index} className={`bg-neutral-900/50 border rounded-xl p-6 hover:border-orange-400 transition-colors ${
              pool.featured ? 'border-yellow-600/30 bg-yellow-900/10' : 'border-neutral-700'
            }`}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  {pool.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-xl font-bold text-white">{pool.name}</h3>
                    {pool.featured && (
                      <div className="flex items-center gap-1 px-2 py-1 bg-yellow-600/20 text-yellow-300 rounded text-sm">
                        <Star className="w-3 h-3" />
                        Featured
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Link 
                      href={pool.url}
                      className="text-brand-primary-400 hover:text-brand-primary-300 underline inline-flex items-center gap-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Pool <ExternalLink className="w-4 h-4" />
                    </Link>
                    
                    <div>
                      <Link 
                        href={pool.guideUrl}
                        className="text-brand-primary-400 hover:text-brand-primary-300 underline inline-flex items-center gap-1 text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {pool.guideTitle} <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                    
                    {pool.extraLinks && (
                      <div className="space-y-1">
                        {pool.extraLinks.map((link, linkIndex) => (
                          <div key={linkIndex}>
                            <Link 
                              href={link.url}
                              className="text-brand-primary-400 hover:text-brand-primary-300 underline inline-flex items-center gap-1 text-sm"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {link.title} <ExternalLink className="w-3 h-3" />
                            </Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SmartPools */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Network className="w-6 h-6 text-purple-400" />
          SmartPools
        </h2>
        <p className="text-gray-300">
          SmartPools are a decentralized alternative to traditional mining pools. They replace centralized mining pools with autonomous on-chain smart contracts. Keep an eye on Lithos Protocol for the next generation of mining.
        </p>
      </div>
    </div>
  );
} 