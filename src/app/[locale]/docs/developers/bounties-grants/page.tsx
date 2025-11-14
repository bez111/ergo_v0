import React from "react";
import Link from "next/link";
import { 
  Gift, 
  Mail, 
  BookOpen, 
  Code2, 
  ExternalLink,
  Target,
  Users,
  Lightbulb,
  Globe,
  Terminal,
  Database,
  Network,
  Shield,
  ChevronRight,
  GraduationCap,
  Zap
} from "lucide-react";

export default function BountiesPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
          <Gift className="w-10 h-10 text-pink-400" /> Bounties & Grants
        </h1>
        <p className="text-lg text-gray-300">
          Discover funding opportunities, development bounties, and educational programs to support your journey in the Ergo ecosystem.
        </p>
      </div>

      {/* Educational Programs Section */}
      <div className="relative bg-gradient-to-br from-purple-500/5 via-neutral-900/95 to-pink-500/5 border border-purple-400/20 rounded-2xl p-8 mb-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-50"></div>
        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl mb-4 shadow-lg shadow-purple-500/20">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              Educational Programs
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Learn blockchain development while earning rewards through structured educational initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group bg-gradient-to-br from-blue-500/10 to-blue-600/5 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BookOpen className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="font-bold text-lg text-blue-300">ErgoHack</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Participate in Ergo's premier hackathon series. Build innovative dApps, tools, and infrastructure while competing for substantial prizes.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-green-500/10 to-green-600/5 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="font-bold text-lg text-green-300">Developer Bootcamp</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Intensive 8-week program covering ErgoScript, dApp development, and ecosystem integration with mentorship and certification.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-orange-500/10 to-orange-600/5 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Terminal className="w-5 h-5 text-orange-400" />
                </div>
                <h3 className="font-bold text-lg text-orange-300">Research Fellowship</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                6-month research positions for graduate students and academics working on blockchain scalability, privacy, and consensus.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Lightbulb className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="font-bold text-lg text-cyan-300">Innovation Grants</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Funding for innovative projects that advance the Ergo ecosystem based on project scope and impact.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Development Bounties Section */}
      <div className="relative bg-gradient-to-br from-yellow-500/5 via-neutral-900/95 to-orange-500/5 border border-yellow-400/20 rounded-2xl p-8 mb-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 opacity-50"></div>
        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl mb-4 shadow-lg shadow-yellow-500/20">
              <Code2 className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
              Development Bounties
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Contribute to the Ergo ecosystem by completing specific development tasks and earning rewards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group bg-gradient-to-br from-red-500/10 to-red-600/5 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Shield className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="font-bold text-lg text-red-300">Security Audits</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Audit smart contracts, dApps, and protocol implementations. Rewards based on severity of findings.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-blue-500/10 to-blue-600/5 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Database className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="font-bold text-lg text-blue-300">Indexer Development</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Build and maintain blockchain indexers for improved data access and analytics capabilities.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-green-500/10 to-green-600/5 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Globe className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="font-bold text-lg text-green-300">SDK Improvements</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Enhance existing SDKs or create new ones for different programming languages and frameworks.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-purple-500/10 to-purple-600/5 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Network className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="font-bold text-lg text-purple-300">Protocol Research</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Contribute to protocol improvements, scalability solutions, and consensus mechanism research.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-pink-500/10 to-pink-600/5 backdrop-blur-sm border border-pink-500/20 rounded-xl p-6 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BookOpen className="w-5 h-5 text-pink-400" />
                </div>
                <h3 className="font-bold text-lg text-pink-300">Documentation</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Create tutorials, guides, and technical documentation to help developers join the ecosystem.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="font-bold text-lg text-cyan-300">Tool Development</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Build developer tools, CLI utilities, IDE plugins, and other productivity-enhancing applications.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Application Process Section */}
      <div className="relative bg-gradient-to-br from-indigo-500/5 via-neutral-900/95 to-purple-500/5 border border-indigo-400/20 rounded-2xl p-8 mb-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 opacity-50"></div>
        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl mb-4 shadow-lg shadow-indigo-500/20">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              How to Apply
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Simple steps to get started with grants and bounties in the Ergo ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-500/20 rounded-xl mb-4">
                <span className="text-2xl font-bold text-indigo-400">1</span>
              </div>
              <h3 className="font-bold text-lg text-indigo-300 mb-2">Choose Your Path</h3>
              <p className="text-gray-400 text-sm">
                Browse available opportunities and select projects that match your skills and interests.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-xl mb-4">
                <span className="text-2xl font-bold text-purple-400">2</span>
              </div>
              <h3 className="font-bold text-lg text-purple-300 mb-2">Submit Proposal</h3>
              <p className="text-gray-400 text-sm">
                Create a detailed proposal outlining your approach, timeline, and expected deliverables.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-pink-500/20 rounded-xl mb-4">
                <span className="text-2xl font-bold text-pink-400">3</span>
              </div>
              <h3 className="font-bold text-lg text-pink-300 mb-2">Start Building</h3>
              <p className="text-gray-400 text-sm">
                Get approved and begin working with community support and milestone-based payments.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-4">
              <Link 
                href="mailto:grants@ergoplatform.org" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 shadow-lg shadow-indigo-500/25"
              >
                <Mail className="w-5 h-5" />
                Apply for Grant
              </Link>
              <Link 
                href="https://github.com/ergoplatform/bounties" 
                className="inline-flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 border border-neutral-600"
              >
                <ExternalLink className="w-5 h-5" />
                View Bounties
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Community Support Section */}
      <div className="relative bg-gradient-to-br from-emerald-500/5 via-neutral-900/95 to-teal-500/5 border border-emerald-400/20 rounded-2xl p-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 opacity-50"></div>
        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl mb-4 shadow-lg shadow-emerald-500/20">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              Community Support
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Connect with mentors, collaborators, and the broader Ergo community for guidance and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="font-bold text-lg text-emerald-300">Discord Community</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Join our active Discord server to connect with developers, get real-time help, and participate in discussions.
              </p>
              <Link 
                href="https://discord.gg/ergo" 
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-sm font-medium"
              >
                Join Discord <ExternalLink className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-teal-500/10 to-teal-600/5 backdrop-blur-sm border border-teal-500/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-teal-400" />
                </div>
                <h3 className="font-bold text-lg text-teal-300">Developer Resources</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Access comprehensive documentation, tutorials, and code examples to accelerate your development.
              </p>
              <Link 
                href="/docs/developers" 
                className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 text-sm font-medium"
              >
                Explore Docs <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 