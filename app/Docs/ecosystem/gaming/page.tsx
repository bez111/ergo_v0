"use client";

import React from "react";
import {
  ExternalLink,
  CheckCircle,
  TrendingUp,
  Shield,
  Users,
  AlertTriangle,
  Target,
  ChevronRight,
  GitBranch,
  Code,
  BookOpen,
  Activity,
  Store,
  Image,
  Palette,
  Tag,
  Search,
  Filter,
  Heart,
  Eye,
  Download,
  Upload,
  Share2,
  Grid3X3,
  List,
  Calendar,
  Gamepad2,
  Globe,
  Coins,
  Crown,
  Zap,
  Star,
  Play,
  Trophy,
  Award,
  Users2,
  Building2,
  Sparkles,
  Sword,
  Shield as ShieldIcon,
  DollarSign,
  Wallet,
  Smartphone,
  Monitor,
  Server,
  Database,
  Cpu,
  Settings,
  FileText,
  Github,
  Terminal,
  Layers,
  Puzzle,
  Lightbulb,
  Rocket,
  Flag,
  Clock,
  AlertCircle,
  Info,
  HelpCircle,
  Twitter,
  Map,
  Briefcase,
  Home,
  ShoppingCart,
  Music,
  PawPrint,
  Banknote,
  Building,
  Car,
  TreePine,
  Sprout,
  Leaf,
  Wheat
} from "lucide-react";
import Link from "next/link";

export default function GamingPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Gaming on Ergo
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Discover innovative gaming experiences on the Ergo blockchain, featuring revolutionary trading card games and immersive metaverse projects that leverage Ergo's unique capabilities for engaging gameplay.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/Docs/ecosystem"
            className="inline-flex items-center px-6 py-3 bg-green-500 rounded-xl font-semibold text-black hover:bg-green-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Ecosystem
          </Link>

        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Gamepad2 className="w-6 h-6 text-green-400" /> Gaming Ecosystem Overview
        </h2>
        <p className="text-gray-300">
          The Ergo gaming ecosystem features innovative projects that push the boundaries of blockchain gaming. From revolutionary trading card games to immersive metaverse experiences, these projects leverage Ergo's blockchain capabilities to create unique, transparent, and engaging gaming experiences.
        </p>
      </div>

      {/* Tip Section */}
      <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Info className="w-6 h-6 text-blue-400" /> Tip
        </h2>
        <p className="text-gray-300">
          Discover innovative gaming experiences built on the Ergo blockchain, featuring unique gameplay mechanics and blockchain integration.
        </p>
      </div>

      {/* Blitz TCG Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Sword className="w-8 h-8 text-blue-400" /> Blitz TCG
        </h2>
        
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-400" /> Overview
          </h3>
          <p className="text-gray-300 mb-4">
            Blitz TCG is an innovative gaming project launched on Ergo. It has revolutionized traditional TCG gameplay by introducing unique features such as access to the entire deck for players, a chess-like time bank system, and the inclusion of NPC alternatives on the game board. The team is committed to transparency and regularly shares updates on Twitter.
          </p>
          <p className="text-gray-300 mb-4">
            Blitz TCG is a self-funded project that prioritizes gameplay over profits. It provides a play and earn model, as opposed to a play to earn model. The game is available on both the Ergo and Cardano platforms.
          </p>
          <div className="flex items-center gap-2 text-green-400 text-sm">
            <CheckCircle className="w-4 h-4" />
            Live and Active
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-green-400" /> Recent Developments
            </h3>
            <p className="text-gray-300 mb-4">
              Blitz TCG has successfully launched and is now live! Stay updated with the latest news on their Twitter.
            </p>
            <div className="flex items-center gap-2 text-blue-400 text-sm">
              <Twitter className="w-4 h-4" />
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Follow on Twitter</a>
            </div>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Crown className="w-5 h-5 text-purple-400" /> Key Features
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Access to entire deck
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Chess-like time bank system
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                NPC alternatives on game board
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Play and earn model
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Puzzle className="w-5 h-5 text-orange-400" /> Game Mechanics
          </h3>
          <p className="text-gray-300 mb-4">
            Blitz TCG is designed with competitive players in mind. It provides a consistent gaming experience where players can predict the outcome of their strategies based on the probability of drawing specific cards within a given number of turns. The game minimizes the role of luck and emphasizes skill and strategy by limiting the use of RNG (Random Number Generation).
          </p>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-400" /> Additional Resources
          </h3>
          <p className="text-gray-300 mb-4">
            For more information about Blitz TCG, please refer to the following resources:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-blue-400" />
                <a href="#" className="text-blue-400 hover:text-blue-300">General Information</a>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-blue-400" />
                <a href="#" className="text-blue-400 hover:text-blue-300">Roadmap</a>
              </li>
            </ul>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-blue-400" />
                <a href="#" className="text-blue-400 hover:text-blue-300">Whitepaper</a>
              </li>
              <li className="flex items-center gap-2">
                <Twitter className="w-4 h-4 text-blue-400" />
                <a href="#" className="text-blue-400 hover:text-blue-300">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Cyberverse Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Globe className="w-8 h-8 text-purple-400" /> Cyberverse
        </h2>
        
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-400" /> Overview
          </h3>
          <p className="text-gray-300 mb-4">
            CyberVerse is an open-world, pixel-based game filled with various opportunities to socialize with others and earn while doing so. Our vision is to have an open world pixel game, fit with blockchain integration to allow for unique player experiences using <strong>Ergo Blockchain</strong> (by having NFT integrations, custom tokens, in-game marketplace integrated with Ergo blockchain, etc).
          </p>
          <p className="text-gray-300 mb-4">
            Not only will this increase player satisfaction, it will allow us to tailor unique experiences to community members who have purchased our NFTs. The CyberCity will be a city available to all, however, holders of CyberCitizens will have special privileges, early access for the early versions of the game and access to special areas!
          </p>
          <div className="flex items-center gap-2 text-green-400 text-sm">
            <CheckCircle className="w-4 h-4" />
            Active Development
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Map className="w-5 h-5 text-green-400" /> CyberCity Experience
            </h3>
            <p className="text-gray-300 mb-4">
              Within the city, depending on your seniority and if you hold CyberCitizen NFT, you will be able to access special areas. While taking a stroll through the streets of CyberCity, you will also find a variety of jobs (mini games) to take part in, these jobs will be one of many ways to earn Cyberverse token $CYPX.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Crown className="w-5 h-5 text-purple-400" /> NFT Benefits
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Special privileges for holders
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Early access to game versions
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Access to special areas
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Unique player experiences
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-400" /> Additional Resources
          </h3>
          <p className="text-gray-300 mb-4">
            For more information about Cyberverse, please refer to the following resources:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-purple-400" />
                <a href="https://docs.cyberversegame.io/cyberverse-whitepaper/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Whitepaper</a>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-purple-400" />
                <a href="#" className="text-purple-400 hover:text-purple-300">Official Website</a>
              </li>
            </ul>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-purple-400" />
                <a href="#" className="text-purple-400 hover:text-purple-300">Documentation</a>
              </li>
              <li className="flex items-center gap-2">
                <Twitter className="w-4 h-4 text-purple-400" />
                <a href="#" className="text-purple-400 hover:text-purple-300">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Common Questions</h2>
        <div className="space-y-4">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-blue-400" /> How do I get started with gaming on Ergo?
            </h3>
            <p className="text-gray-300">
              Start by visiting ErgoGames.io to discover available games, then ensure you have a compatible wallet like Nautilus or Satergo to interact with the games and manage your NFTs and tokens.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Code className="w-5 h-5 text-green-400" /> How can I develop games for Ergo?
            </h3>
            <p className="text-gray-300">
              Use ErgoScript and AppKit to build smart contracts, leverage the developer resources, and participate in Ergo Hack events to learn from the community and showcase your projects.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" /> Are Ergo games secure?
            </h3>
            <p className="text-gray-300">
              Yes, games built on Ergo benefit from the blockchain's security features, including the eUTxO model and provably fair smart contracts. However, always do your own research before participating in any game.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-yellow-400" /> What is the difference between play-to-earn and play-and-earn?
            </h3>
            <p className="text-gray-300">
              Play-to-earn focuses on earning as the primary goal, while play-and-earn emphasizes gameplay quality first, with earning as a secondary benefit. Blitz TCG follows the play-and-earn model, prioritizing fun gameplay over profit generation.
            </p>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-blue-400" /> Resources & Community
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-3">Key Resources</h3>
            <ul className="space-y-2 text-gray-300">

              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-green-400" />
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">Discord Gaming Channel</a>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-green-400" />
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">GitHub Gaming Repos</a>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-green-400" />
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">Developer Documentation</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3">Available Games</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <Sword className="w-4 h-4 text-green-400" />
                Blitz TCG
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-green-400" />
                Cyberverse
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-gradient-to-r from-green-400/10 to-blue-400/10 border border-green-400/20 rounded-xl p-6">
        <blockquote className="text-xl italic text-center text-gray-300">
          "The Ergo gaming ecosystem represents the future of blockchain gaming, combining innovative gameplay mechanics with the security and transparency of decentralized technology."
        </blockquote>
      </div>
    </>
      );
  } 