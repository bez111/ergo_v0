import React from 'react';
import { 
  Server, 
  Users, 
  Settings, 
  ExternalLink, 
  ArrowLeft,
  CheckCircle,
  AlertTriangle,
  Download,
  ChevronRight,
  Target,
  Shield,
  DollarSign,
  Zap,
  Code,
  Terminal,
  HardDrive,
  Network,
  Clock,
  TrendingUp,
  Database,
  Globe
} from 'lucide-react';
import Link from 'next/link';

export default function HostAPoolPage() {
  const poolRequirements = [
    {
      title: "Technical Infrastructure",
      description: "Dedicated servers with high availability and redundancy",
      icon: Server,
      importance: "Critical"
    },
    {
      title: "Ergo Node",
      description: "Fully synchronized Ergo node with reliable connectivity", 
      icon: Network,
      importance: "Critical"
    },
    {
      title: "Database Management",
      description: "PostgreSQL or similar for storing pool statistics and payouts",
      icon: Database,
      importance: "High"
    },
    {
      title: "Security Expertise",
      description: "Understanding of server security and DDoS protection",
      icon: Shield,
      importance: "Critical"
    },
    {
      title: "Monitoring Systems",
      description: "24/7 monitoring and alerting for critical components",
      icon: TrendingUp,
      importance: "High"
    },
    {
      title: "Frontend Development",
      description: "Web interface for miners to track statistics and payouts",
      icon: Code,
      importance: "Medium"
    }
  ];

  const poolSoftware = [
    {
      name: "Miningcore",
      description: "Popular open-source pool software with Ergo support",
      language: "C#/.NET",
      features: ["Multi-currency", "PPLNS/PPS", "API", "Statistics"],
      difficulty: "Advanced",
      github: "https://github.com/oliverw/miningcore",
      recommended: true
    },
    {
      name: "ErgoPool", 
      description: "Specialized Ergo pool implementation",
      language: "Scala",
      features: ["Ergo-specific", "Custom features", "Performance optimized"],
      difficulty: "Expert",
      github: "https://github.com/K-Singh/ergopool",
      recommended: false
    },
    {
      name: "Custom Solution",
      description: "Build your own pool software from scratch",
      language: "Any",
      features: ["Full control", "Custom features", "Optimized for needs"],
      difficulty: "Expert",
      github: null,
      recommended: false
    }
  ];

  const setupSteps = [
    {
      step: "1",
      title: "Infrastructure Setup",
      description: "Set up dedicated servers, networking, and security",
      details: ["Rent dedicated servers or VPS", "Configure firewalls and DDoS protection", "Set up monitoring and backup systems"]
    },
    {
      step: "2",
      title: "Ergo Node Configuration",
      description: "Install and synchronize your Ergo node",
      details: ["Download latest Ergo node", "Configure for mining pool operations", "Ensure full blockchain sync"]
    },
    {
      step: "3",
      title: "Database Setup",
      description: "Install and configure database for pool data",
      details: ["Install PostgreSQL or preferred database", "Create pool schema and tables", "Configure backup and replication"]
    },
    {
      step: "4",
      title: "Pool Software Installation",
      description: "Deploy and configure pool mining software",
      details: ["Choose pool software (Miningcore recommended)", "Configure stratum ports and difficulty", "Set up payout logic and fees"]
    },
    {
      step: "5",
      title: "Frontend Development",
      description: "Create web interface for miners",
      details: ["Build dashboard for statistics", "Implement miner registration/authentication", "Create payout and earnings displays"]
    },
    {
      step: "6",
      title: "Testing & Launch",
      description: "Test thoroughly before public launch",
      details: ["Test with small hashrate", "Verify payouts and statistics", "Launch publicly and monitor closely"]
    }
  ];

  const operationalCosts = [
    {
      category: "Infrastructure",
      items: [
        { name: "Dedicated Servers", cost: "$200-500/month" },
        { name: "DDoS Protection", cost: "$100-300/month" },
        { name: "Backup Storage", cost: "$50-100/month" }
      ]
    },
    {
      category: "Development",
      items: [
        { name: "Pool Software Setup", cost: "$2,000-5,000" },
        { name: "Frontend Development", cost: "$3,000-8,000" },
        { name: "Ongoing Maintenance", cost: "$500-1,000/month" }
      ]
    },
    {
      category: "Operations",
      items: [
        { name: "System Administration", cost: "$1,000-3,000/month" },
        { name: "Support & Monitoring", cost: "$500-1,500/month" },
        { name: "Legal & Compliance", cost: "$200-500/month" }
      ]
    }
  ];

  const challenges = [
    {
      title: "High Competition",
      description: "Many established pools already exist",
      icon: Users
    },
    {
      title: "Technical Complexity",
      description: "Requires deep technical knowledge and experience",
      icon: Settings
    },
    {
      title: "Security Risks",
      description: "Constant threat of attacks and exploits",
      icon: Shield
    },
    {
      title: "Regulatory Concerns",
      description: "Potential legal and compliance requirements",
      icon: AlertTriangle
    },
    {
      title: "High Operational Costs",
      description: "Significant ongoing infrastructure and development costs",
      icon: DollarSign
    },
    {
      title: "Market Volatility",
      description: "ERG price fluctuations affect profitability",
      icon: TrendingUp
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
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Host an Ergo Mining Pool
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Learn how to create and operate your own Ergo mining pool. A comprehensive guide covering technical requirements, 
          software options, and operational considerations for running a successful mining pool.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/Docs/miners/mining-guides/pools"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            <Users className="w-5 h-5" />
            Existing Pools
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

      {/* Overview */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-purple-900/20 to-purple-800/20 border border-purple-700/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">Pool Operation Overview</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Running a mining pool involves coordinating the collective hashrate of many miners, 
            distributing work, validating shares, and managing payouts. It requires significant 
            technical expertise, infrastructure investment, and ongoing operational commitment.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-purple-900/20 border border-purple-700/30 rounded-lg p-4">
              <h3 className="font-semibold text-purple-400 mb-2">Technical Challenge</h3>
              <p className="text-sm text-gray-400">Complex software stack with multiple components</p>
            </div>
            <div className="bg-orange-900/20 border border-orange-700/30 rounded-lg p-4">
              <h3 className="font-semibold text-orange-400 mb-2">High Investment</h3>
              <p className="text-sm text-gray-400">Significant upfront and ongoing costs</p>
            </div>
            <div className="bg-red-900/20 border border-red-700/30 rounded-lg p-4">
              <h3 className="font-semibold text-red-400 mb-2">Security Critical</h3>
              <p className="text-sm text-gray-400">Handling other people's mining rewards</p>
            </div>
          </div>
        </div>
      </div>

      {/* Requirements */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-red-900/20 to-red-800/20 border border-red-700/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-red-400 mb-6">Technical Requirements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {poolRequirements.map((requirement, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <requirement.icon className="w-6 h-6 text-red-400" />
                  <h3 className="font-semibold text-white">{requirement.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    requirement.importance === 'Critical' ? 'bg-red-600 text-white' :
                    requirement.importance === 'High' ? 'bg-orange-600 text-white' :
                    'bg-yellow-600 text-black'
                  }`}>
                    {requirement.importance}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{requirement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pool Software Options */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/20 border border-blue-700/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-blue-400 mb-6">Pool Software Options</h2>
          <div className="space-y-6">
            {poolSoftware.map((software, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-white">{software.name}</h3>
                    {software.recommended && (
                      <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        Recommended
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      software.difficulty === 'Advanced' ? 'bg-orange-600 text-white' :
                      'bg-red-600 text-white'
                    }`}>
                      {software.difficulty}
                    </span>
                    {software.github && (
                      <Link
                        href={software.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-gray-400 hover:text-white transition-colors"
                      >
                        GitHub <ExternalLink className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
                <p className="text-gray-400 mb-4">{software.description}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Language</h4>
                    <span className="text-gray-300 text-sm">{software.language}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Features</h4>
                    <div className="flex flex-wrap gap-1">
                      {software.features.map((feature, i) => (
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

      {/* Setup Process */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-green-900/20 to-green-800/20 border border-green-700/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-green-400 mb-6">Pool Setup Process</h2>
          <div className="space-y-6">
            {setupSteps.map((step, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400 mb-3">{step.description}</p>
                    <ul className="space-y-1">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                          {detail}
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

      {/* Operational Costs */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-yellow-900/20 to-yellow-800/20 border border-yellow-700/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">Operational Costs</h2>
          <p className="text-gray-300 mb-6">
            Running a mining pool requires significant ongoing investment. Here's a breakdown of typical costs:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {operationalCosts.map((category, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-400 mb-3">{category.category}</h3>
                <div className="space-y-2">
                  {category.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-center text-sm">
                      <span className="text-gray-300">{item.name}</span>
                      <span className="text-white font-medium">{item.cost}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-yellow-900/20 border border-yellow-700/30 rounded-lg">
            <p className="text-yellow-100 text-sm">
              <strong>Total estimated monthly costs:</strong> $2,000-$10,000+ depending on scale and requirements. 
              Initial setup costs can range from $10,000-$50,000.
            </p>
          </div>
        </div>
      </div>

      {/* Challenges & Risks */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-orange-900/20 to-orange-800/20 border border-orange-700/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-orange-400 mb-6">Challenges & Risks</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <challenge.icon className="w-6 h-6 text-orange-400" />
                  <h3 className="font-semibold text-white">{challenge.title}</h3>
                </div>
                <p className="text-gray-400 text-sm">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-cyan-900/20 to-cyan-800/20 border border-cyan-700/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Our Recommendations</h2>
          <div className="space-y-6">
            <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">For Most People: Join Existing Pools</h3>
              <p className="text-gray-400 mb-4">
                Unless you have significant technical expertise, substantial capital, and specific reasons for running your own pool, 
                we recommend joining established pools that already provide excellent service to the Ergo community.
              </p>
              <Link
                href="/Docs/miners/mining-guides/pools"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
              >
                <Users className="w-4 h-4" />
                View Existing Pools
              </Link>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">If You Proceed: Start Small</h3>
              <p className="text-gray-400 mb-4">
                Begin with a test environment, thoroughly understand all components, and consider starting as a private pool 
                for your own operations before opening to public miners.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Test with small hashrate first
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Implement comprehensive monitoring
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Plan for security incidents
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Budget for ongoing costs
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="grid md:grid-cols-2 gap-6">
        <Link
          href="/Docs/miners/mining-guides/pools"
          className="group bg-gradient-to-r from-blue-900/20 to-blue-800/20 border border-blue-700/30 rounded-xl p-6 hover:border-blue-600/50 transition-all"
        >
          <div className="flex items-center justify-between mb-4">
            <Users className="w-8 h-8 text-blue-400" />
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Existing Pools</h3>
          <p className="text-gray-400 text-sm">Join established pools for easier mining</p>
        </Link>

        <Link
          href="/Docs/miners/governance"
          className="group bg-gradient-to-r from-purple-900/20 to-purple-800/20 border border-purple-700/30 rounded-xl p-6 hover:border-purple-600/50 transition-all"
        >
          <div className="flex items-center justify-between mb-4">
            <Target className="w-8 h-8 text-purple-400" />
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Miner Governance</h3>
          <p className="text-gray-400 text-sm">Learn about Ergo's governance mechanisms</p>
        </Link>
      </div>
    </>
  );
} 