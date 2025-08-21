import React from "react";
import Link from "next/link";
import { 
  Gift, 
  Mail, 
  BookOpen, 
  Code2, 
  ExternalLink,
  CheckCircle,
  Target,
  Users,
  Lightbulb,
  Terminal,
  Database,
  Globe,
  Shield,
  Network,
  Zap,
  GraduationCap
} from "lucide-react";

export default function BountiesPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Bounties & Grants
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Discover funding opportunities, development bounties, and educational programs to support your journey in the Ergo ecosystem.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="mailto:grants@ergoplatform.org"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <Mail className="w-5 h-5 mr-2" /> Apply for Grant
          </Link>
          <Link
            href="https://github.com/ergoplatform/bounties"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> View Bounties
          </Link>
        </div>
      </div>

      {/* Educational Programs Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <GraduationCap className="w-6 h-6 text-orange-400" /> Educational Programs
        </h2>
        <p className="text-gray-300 mb-6">
          Learn blockchain development while earning rewards through structured educational initiatives.
        </p>
      </div>

      {/* Educational Programs Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-400" /> ErgoHack
          </h3>
          <p className="text-gray-300 mb-4">
            Participate in Ergo's premier hackathon series. Build innovative dApps, tools, and infrastructure while competing for substantial prizes.
          </p>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Users className="w-5 h-5 text-green-400" /> Developer Bootcamp
          </h3>
          <p className="text-gray-300 mb-4">
            Intensive 8-week program covering ErgoScript, dApp development, and ecosystem integration with mentorship and certification.
          </p>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-orange-400" /> Research Fellowship
          </h3>
          <p className="text-gray-300 mb-4">
            6-month research positions for graduate students and academics working on blockchain scalability, privacy, and consensus.
          </p>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-cyan-400" /> Innovation Grants
          </h3>
          <p className="text-gray-300 mb-4">
            Funding for innovative projects that advance the Ergo ecosystem based on project scope and impact.
          </p>
        </div>
      </div>

      {/* Development Bounties Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Code2 className="w-6 h-6 text-yellow-400" /> Development Bounties
        </h2>
        <p className="text-gray-300 mb-6">
          Contribute to the Ergo ecosystem by completing specific development tasks and earning rewards.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Shield className="w-4 h-4 text-red-400" /> Security Audits
            </h4>
            <p className="text-gray-400 text-sm">
              Audit smart contracts, dApps, and protocol implementations. Rewards based on severity of findings.
            </p>
          </div>

          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Database className="w-4 h-4 text-blue-400" /> Indexer Development
            </h4>
            <p className="text-gray-400 text-sm">
              Build and maintain blockchain indexers for improved data access and analytics capabilities.
            </p>
          </div>

          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Globe className="w-4 h-4 text-green-400" /> SDK Improvements
            </h4>
            <p className="text-gray-400 text-sm">
              Enhance existing SDKs or create new ones for different programming languages and frameworks.
            </p>
          </div>

          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Network className="w-4 h-4 text-purple-400" /> Protocol Research
            </h4>
            <p className="text-gray-400 text-sm">
              Contribute to protocol improvements, scalability solutions, and consensus mechanism research.
            </p>
          </div>

          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-pink-400" /> Documentation
            </h4>
            <p className="text-gray-400 text-sm">
              Create tutorials, guides, and technical documentation to help developers join the ecosystem.
            </p>
          </div>

          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-400" /> Tool Development
            </h4>
            <p className="text-gray-400 text-sm">
              Build developer tools, CLI utilities, IDE plugins, and other productivity-enhancing applications.
            </p>
          </div>
        </div>
      </div>

      {/* Application Process Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Target className="w-6 h-6 text-indigo-400" /> How to Apply
        </h2>
        <p className="text-gray-300 mb-6">
          Simple steps to get started with grants and bounties in the Ergo ecosystem.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
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
      </div>

      {/* Community Support Section */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Users className="w-5 h-5 text-emerald-400" /> Discord Community
          </h3>
          <p className="text-gray-300 mb-4">
            Join our active Discord server to connect with developers, get real-time help, and participate in discussions.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Real-time developer support
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Community collaboration
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Project announcements
            </li>
          </ul>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-teal-400" /> Developer Resources
          </h3>
          <p className="text-gray-300 mb-4">
            Access comprehensive documentation, tutorials, and code examples to accelerate your development.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Comprehensive documentation
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Step-by-step tutorials
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Code examples & templates
            </li>
          </ul>
        </div>
      </div>
    </>
  );
} 