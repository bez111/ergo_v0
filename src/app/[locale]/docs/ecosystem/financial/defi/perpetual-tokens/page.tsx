
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Users,
  Shield,
  CheckCircle,
  TrendingUp,
  BookOpen,
  Target,
  GitBranch,
  ExternalLink,
  Cpu,
  Settings,
  ChevronRight,
  Info,
  BarChart3,
  Zap,
  AlertTriangle,
  Infinity,
  Code,
  Layers
} from "lucide-react";
import Link from "next/link";
import { Alert } from "@/components/ui/alert";

export default function PerpetualTokensPage() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid w-full grid-cols-6 mb-8 bg-neutral-900/50 border border-neutral-700/50">
        <TabsTrigger value="overview" className="flex items-center gap-2 justify-center">
          <GitBranch className="w-4 h-4" /> Overview
        </TabsTrigger>
        <TabsTrigger value="implementation" className="flex items-center gap-2 justify-center">
          <Cpu className="w-4 h-4" /> Implementation
        </TabsTrigger>
        <TabsTrigger value="multi-stage" className="flex items-center gap-2 justify-center">
          <Shield className="w-4 h-4" /> Multi-Stage
        </TabsTrigger>
        <TabsTrigger value="patterns" className="flex items-center gap-2 justify-center">
          <Users className="w-4 h-4" /> Patterns
        </TabsTrigger>
        <TabsTrigger value="uses" className="flex items-center gap-2 justify-center">
          <Target className="w-4 h-4" /> Uses
        </TabsTrigger>
        <TabsTrigger value="resources" className="flex items-center gap-2 justify-center">
          <BookOpen className="w-4 h-4" /> Resources
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="overview">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Perpetual Tokens
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            ErgoScript tokens designed to exist indefinitely, unless removed by garbage collection, enabling persistent token systems.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <Link
              href="/docs/ecosystem/financial/defi"
              className="inline-flex items-center px-6 py-3 bg-indigo-500 rounded-xl font-semibold text-black hover:bg-indigo-600 transition-transform hover:scale-105"
            >
              <ChevronRight className="w-5 h-5 mr-2" /> Back to DeFi
            </Link>
            <a
              href="https://www.ergoforum.org/t/a-perpetual-token/205/3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
            >
              <ExternalLink className="w-5 h-5 mr-2" /> Forum Discussion
            </a>
          </div>
          <p className="text-lg text-gray-300">
            ErgoScript allows the creation of a 'perpetual token', a token that is designed to exist indefinitely, unless it is removed by garbage collection. This enables persistent token systems with unique properties.
          </p>
        </div>

        {/* Alert Section */}
        <div className="bg-gradient-to-r from-indigo-400/10 to-pink-500/10 border border-indigo-400/20 rounded-xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-3">
            <Infinity className="w-6 h-6 text-indigo-400" />
            <span className="font-semibold text-indigo-400">Indefinite Existence</span>
          </div>
          <p className="text-gray-300">
            Perpetual tokens are designed to persist across transactions, only being removed through garbage collection mechanisms.
          </p>
        </div>

        {/* Core Concepts */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Infinity className="w-5 h-5 text-indigo-400" /> Perpetual Design
            </h3>
            <p className="text-gray-300 mb-4">
              Tokens designed to exist indefinitely, with persistence guaranteed through ErgoScript validation.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Indefinite existence
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Garbage collection removal
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Persistent token systems
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                ErgoScript validation
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Code className="w-5 h-5 text-purple-400" /> Script-Based
            </h3>
            <p className="text-gray-300 mb-4">
              Perpetual tokens are implemented through ErgoScript contracts that ensure their persistence across transactions.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                ErgoScript contracts
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Validation logic
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Transaction persistence
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Automated enforcement
              </li>
            </ul>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-pink-400" /> Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-indigo-400 mb-2 flex items-center gap-2">
                <Infinity className="w-4 h-4" /> Persistence
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                Tokens designed to exist indefinitely across all transactions.
              </p>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>• Indefinite existence</li>
                <li>• Transaction persistence</li>
                <li>• Garbage collection only</li>
              </ul>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-purple-400 mb-2 flex items-center gap-2">
                <Code className="w-4 h-4" /> Script Validation
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                ErgoScript ensures tokens persist through validation logic.
              </p>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>• Automated validation</li>
                <li>• Contract enforcement</li>
                <li>• Persistent logic</li>
              </ul>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-pink-400 mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4" /> Multi-Stage Support
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                Support for complex multi-stage protocols and interactions.
              </p>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>• Protocol interactions</li>
                <li>• Stage references</li>
                <li>• Complex workflows</li>
              </ul>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="implementation">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <Cpu className="w-6 h-6 text-cyan-400" /> Implementation
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            How to implement perpetual tokens using ErgoScript contracts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Code className="w-5 h-5 text-indigo-400" /> Basic Implementation
            </h3>
            <p className="text-gray-300 mb-4">
              The core ErgoScript code that ensures the persistence of perpetual tokens.
            </p>
            <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
              <pre className="text-xs text-gray-300 overflow-x-auto">
{`{
  val isPerpetual = {(b: Box) =>
    b.propositionBytes == SELF.propositionBytes && b.tokens == SELF.tokens
  }

  sigmaProp(OUTPUTS.exists(isPerpetual))
}`}
              </pre>
            </div>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Perpetual validation
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Token persistence
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Output verification
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-purple-400" /> Collection Persistence
            </h3>
            <p className="text-gray-300 mb-4">
              This code ensures the persistence of a collection of perpetual tokens, even if the collection's size is zero.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Collection management
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Zero-size support
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Garbage collection protection
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Single token protection
              </li>
            </ul>
          </div>
        </div>

        {/* Implementation Details */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Settings className="w-6 h-6 text-orange-400" /> Implementation Details
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-green-400 mb-2">Validation Logic</h4>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>• Proposition bytes matching</li>
                <li>• Token collection verification</li>
                <li>• Output existence check</li>
                <li>• Perpetual persistence guarantee</li>
              </ul>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-blue-400 mb-2">Garbage Collection</h4>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>• Only removal mechanism</li>
                <li>• Automatic cleanup</li>
                <li>• Memory management</li>
                <li>• System optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="multi-stage">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-green-400" /> Multi-Stage Protocols
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            How perpetual tokens enable complex multi-stage protocol interactions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-400" /> Protocol Interactions
            </h3>
            <p className="text-gray-300 mb-4">
              Multi-stage protocols are beneficial in situations where multiple scripts need to interact. In these protocols, a script can reference the script of a subsequent stage.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Multiple script interactions
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Stage references
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Complex workflows
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Protocol chaining
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Code className="w-5 h-5 text-purple-400" /> Script References
            </h3>
            <p className="text-gray-300 mb-4">
              Example of how scripts can reference each other in multi-stage protocols.
            </p>
            <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
              <pre className="text-xs text-gray-300 overflow-x-auto">
{`// In script1
hash(OUTPUTS(0).propositionBytes) == script2Hash

// In script2  
hash(OUTPUTS(0).propositionBytes) == script1Hash`}
              </pre>
            </div>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Cross-script validation
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Hash verification
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Output proposition checking
              </li>
            </ul>
          </div>
        </div>

        {/* Cyclic Reference Solution */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-orange-400" /> Cyclic Reference Solution
          </h2>
          <div className="space-y-4">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-red-400 mb-2">The Problem</h4>
              <p className="text-gray-300 text-sm mb-3">
                When both scripts reference each other, we face a cyclic reference problem that prevents proper execution.
              </p>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-green-400 mb-2">The Solution</h4>
              <p className="text-gray-300 text-sm mb-3">
                Store script1Hash in a register of the box that contains script2. Modify script1 to ensure the corresponding register of any box containing script2 equals hash(SELF.propositionBytes).
              </p>
            </div>
            <Alert className="bg-blue-500/10 border-blue-500/20">
              <Info className="h-4 w-4 text-blue-400" />
              <div className="text-gray-300">
                This approach allows for complex multi-stage protocols while avoiding cyclic reference issues.
              </div>
            </Alert>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="patterns">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <Users className="w-6 h-6 text-blue-400" /> Design Patterns
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Different patterns for implementing perpetual tokens and their use cases.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Infinity className="w-5 h-5 text-indigo-400" /> Vanilla Perpetual Token
            </h3>
            <p className="text-gray-300 mb-4">
              The basic perpetual token pattern that ensures indefinite existence through simple validation logic.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Basic persistence
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Simple validation
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Garbage collection only
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Intriguing concept
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-purple-400" /> Max-Once-Per-Block
            </h3>
            <p className="text-gray-300 mb-4">
              A more flexible and powerful pattern that limits usage to once per block, offering enhanced control and security.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Enhanced flexibility
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Greater power
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Block-based limits
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Distinct design pattern
              </li>
            </ul>
          </div>
        </div>

        {/* Pattern Comparison */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-cyan-400" /> Pattern Comparison
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-indigo-400 mb-2">Vanilla Pattern</h4>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>• Simple implementation</li>
                <li>• Basic persistence</li>
                <li>• Limited flexibility</li>
                <li>• Intriguing concept</li>
              </ul>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-purple-400 mb-2">Max-Once-Per-Block</h4>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>• Enhanced flexibility</li>
                <li>• Greater power</li>
                <li>• Block-based control</li>
                <li>• Distinct pattern</li>
              </ul>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="uses">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-green-400" /> Use Cases
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Practical applications and benefits of perpetual tokens.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h4 className="font-bold text-indigo-400 mb-2 flex items-center gap-2">
              <Infinity className="w-4 h-4" /> Persistent Systems
            </h4>
            <p className="text-gray-300 text-sm mb-3">
              Systems that require tokens to persist across multiple transactions and protocol stages.
            </p>
            <ul className="space-y-1 text-gray-400 text-xs">
              <li>• Long-term token systems</li>
              <li>• Persistent state management</li>
              <li>• Cross-transaction continuity</li>
            </ul>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h4 className="font-bold text-purple-400 mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4" /> Multi-Stage Protocols
            </h4>
            <p className="text-gray-300 text-sm mb-3">
              Complex protocols that require tokens to exist across multiple stages and interactions.
            </p>
            <ul className="space-y-1 text-gray-400 text-xs">
              <li>• Protocol chaining</li>
              <li>• Stage transitions</li>
              <li>• Complex workflows</li>
            </ul>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h4 className="font-bold text-pink-400 mb-2 flex items-center gap-2">
              <Shield className="w-4 h-4" /> Security Applications
            </h4>
            <p className="text-gray-300 text-sm mb-3">
              Security-focused applications that require persistent token validation and enforcement.
            </p>
            <ul className="space-y-1 text-gray-400 text-xs">
              <li>• Access control tokens</li>
              <li>• Security validations</li>
              <li>• Persistent permissions</li>
            </ul>
          </div>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-orange-400" /> Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-green-400 mb-2">For Developers</h4>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>• Simplified token management</li>
                <li>• Persistent state handling</li>
                <li>• Reduced complexity</li>
                <li>• Automated persistence</li>
              </ul>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-blue-400 mb-2">For Systems</h4>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>• Reliable token persistence</li>
                <li>• Complex protocol support</li>
                <li>• Multi-stage interactions</li>
                <li>• Garbage collection efficiency</li>
              </ul>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="resources">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-purple-400" /> Resources & Research
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Technical documentation and community resources for perpetual tokens.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-green-400" /> Technical Implementation
            </h3>
            <p className="text-gray-300 mb-4">
              Detailed guides for implementing perpetual tokens using ErgoScript contracts.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                ErgoScript contracts
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Validation logic
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Multi-stage protocols
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-400" /> Community Resources
            </h3>
            <p className="text-gray-300 mb-4">
              Community discussions and resources for understanding perpetual tokens.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Forum discussions
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Implementation examples
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Best practices
              </li>
            </ul>
          </div>
        </div>

        {/* Community Discussion */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <ExternalLink className="w-6 h-6 text-blue-400" /> Community Discussion
          </h2>
          <div className="space-y-4">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-amber-400 mb-2">"A Perpetual Token"</h4>
              <p className="text-gray-300 text-sm mb-3">
                Comprehensive discussion on the Ergo Forum about perpetual tokens, their implementation, and use cases.
              </p>
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <span>Platform: Ergo Forum</span>
                <span>Topic: Perpetual Token Implementation</span>
              </div>
            </div>
            <a
              href="https://www.ergoforum.org/t/a-perpetual-token/205/3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 rounded-lg font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Read Forum Discussion
            </a>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
} 