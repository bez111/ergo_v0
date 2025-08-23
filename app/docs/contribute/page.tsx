"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import Link from "next/link"
import { 
  Users, 
  Code, 
  BookOpen, 
  Megaphone, 
  CheckCircle,
  Rocket,
  Brain,
  GitBranch,
  Zap,
  Shield,
  Globe,
  Target,
  Settings
} from "lucide-react"

export default function ContributePage() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid w-full grid-cols-5 mb-8 bg-neutral-900/50 border border-neutral-700/50">
        <TabsTrigger value="overview" className="flex items-center gap-2"><Code className="w-4 h-4" />Overview</TabsTrigger>
        <TabsTrigger value="developers" className="flex items-center gap-2"><Code className="w-4 h-4" />Developers</TabsTrigger>
        <TabsTrigger value="marketing" className="flex items-center gap-2"><Megaphone className="w-4 h-4" />Marketing</TabsTrigger>
        <TabsTrigger value="sigmanauts" className="flex items-center gap-2"><Users className="w-4 h-4" />Sigmanauts</TabsTrigger>
        <TabsTrigger value="docs" className="flex items-center gap-2"><BookOpen className="w-4 h-4" />Contribute</TabsTrigger>
      </TabsList>
      
      <TabsContent value="overview">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Contributing to Ergo
        </h1>
          <p className="text-xl text-gray-400 mb-6">
            Ergo is an open-source project driven by its community. Contributions of all kinds are welcome and essential for the ecosystem's growth and success.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            Whether you're a developer, writer, designer, marketer, researcher, or simply an enthusiastic user, there are many ways to get involved!
        </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://bounties.ergo.community/"
              target="_blank"
              className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
            >
              <Rocket className="w-5 h-5 mr-2" /> View Bounties
            </Link>
            <Link
              href="https://discord.gg/ergo"
              target="_blank"
              className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
            >
              <Users className="w-5 h-5 mr-2" /> Join Discord
            </Link>
          </div>
        </div>

        {/* Quote Section */}
        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
          <blockquote className="text-xl italic text-center text-gray-300">
            "Let's create grassroots finance! Every contribution, big or small, helps strengthen the Ergo ecosystem."
          </blockquote>
        </div>

        {/* Ways to Contribute Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Code className="w-5 h-5 text-green-400" /> Development
            </h3>
            <p className="text-gray-300 mb-4">
              Help build and improve Ergo's core protocol, node software, SDKs, tooling, and ecosystem projects.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Core repositories: <a href="https://github.com/ergoplatform/ergo" target="_blank" className="text-cyan-400 hover:underline">ergo</a>, <a href="https://github.com/ScorexFoundation/sigmastate-interpreter" target="_blank" className="text-cyan-400 hover:underline">sigmastate-interpreter</a>
                </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <a href="https://bounties.ergo.community/" target="_blank" className="text-cyan-400 hover:underline">Bounties Board</a> for funded tasks
                </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <a href="https://ergoplatform.org/en/grants/" target="_blank" className="text-cyan-400 hover:underline">Development Grants</a> for larger projects
                </li>
              </ul>
            </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-400" /> Documentation
            </h3>
            <p className="text-gray-300 mb-4">
              Help enhance this documentation site by fixing errors, improving clarity, adding examples, translating content, or writing new guides.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Improve ErgoDocs clarity and examples
                </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <a href="https://github.com/ergoplatform/ergodocs" target="_blank" className="text-cyan-400 hover:underline">Submit PRs to ergodocs</a>
                </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Translate content to other languages
                </li>
              </ul>
            </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Megaphone className="w-5 h-5 text-purple-400" /> Marketing & Outreach
            </h3>
            <p className="text-gray-300 mb-4">
              Help raise awareness about Ergo through social media, content creation, community engagement, and organizing local meetups.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Social media and content creation
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Articles, videos, and infographics
                </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Community engagement and meetups
                </li>
              </ul>
            </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Users className="w-5 h-5 text-yellow-400" /> Community Support
            </h3>
            <p className="text-gray-300 mb-4">
              Assist new users and developers in community channels, join the Sigmanauts program, and help test new releases.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Help users in Discord and Telegram
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <a href="https://sigmanauts.org/" target="_blank" className="text-cyan-400 hover:underline">Join Sigmanauts Program</a>
                </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Test releases, wallets, and dApps
                </li>
              </ul>
          </div>
        </div>

        {/* Getting Started Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Brain className="w-6 h-6 text-orange-400" /> Getting Started
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-orange-400 mb-2">Step 1: Explore</h4>
              <p className="text-gray-300 text-sm mb-4">Browse the different contribution areas and find what matches your skills and interests.</p>
              
              <h4 className="font-bold text-orange-400 mb-2">Step 2: Connect</h4>
              <p className="text-gray-300 text-sm">Join the <a href="https://discord.gg/ergo" target="_blank" className="text-cyan-400 hover:underline">Ergo Discord Server</a> and introduce yourself in relevant channels.</p>
            </div>
            <div>
              <h4 className="font-bold text-orange-400 mb-2">Step 3: Find a Task</h4>
              <p className="text-gray-300 text-sm mb-4">Look for open issues, bounties, or areas needing improvement. Don't hesitate to ask for guidance!</p>
              
              <h4 className="font-bold text-orange-400 mb-2">Step 4: Contribute</h4>
              <p className="text-gray-300 text-sm">Follow the specific guidelines for your contribution area and submit your work for review.</p>
            </div>
          </div>
        </div>

        {/* Other Ways Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Settings className="w-6 h-6 text-cyan-400" /> Other Ways to Contribute
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-2">Testing</h4>
              <p className="text-gray-300 text-sm">Help test new node releases, wallet updates, and dApps.</p>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-2">Design</h4>
              <p className="text-gray-300 text-sm">Contribute UI/UX improvements for wallets and applications.</p>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-2">Research</h4>
              <p className="text-gray-300 text-sm">Explore new cryptographic techniques, economic models, or protocol enhancements.</p>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="developers">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Developer Contributions
        </h1>
          <p className="text-xl text-gray-400 mb-6">
            Help build and improve Ergo's core protocol, node software, SDKs, tooling, and ecosystem projects.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            Find bounties, grants, and technical guidelines for contributing code to the Ergo ecosystem.
        </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://bounties.ergo.community/"
              target="_blank"
              className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
            >
              <Target className="w-5 h-5 mr-2" /> View Bounties
            </Link>
            <Link
              href="https://ergoplatform.org/en/grants/"
              target="_blank"
              className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
            >
              <Shield className="w-5 h-5 mr-2" /> Apply for Grants
            </Link>
          </div>
        </div>

        {/* How to Contribute Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <GitBranch className="w-6 h-6 text-cyan-400" /> How to Contribute as a Developer
          </h2>
          <ol className="list-decimal ml-6 text-gray-300 space-y-3 mb-6">
            <li><strong>Join the Ergo Community:</strong> Connect with other developers and Ergo team members on our <a href="https://discord.gg/ergo" target="_blank" className="text-cyan-400 hover:underline">Discord Server</a>. Make sure to enable the development channels for relevant discussions.</li>
            <li><strong>Explore Opportunities:</strong> Visit our <a href="https://bounties.ergo.community/" target="_blank" className="text-cyan-400 hover:underline">Bounties</a> and <a href="https://ergoplatform.org/en/grants/" target="_blank" className="text-cyan-400 hover:underline">Grants</a> pages to find out about ongoing projects and tasks you can contribute to.</li>
            <li><strong>Submit Your Work:</strong> Once you've completed a task or project, you can submit your work for review.</li>
              </ol>
            </div>

        {/* Payment Requests Section */}
        <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-orange-400" /> Submitting Payment Requests
          </h3>
          <ol className="list-decimal ml-6 text-gray-300 space-y-2">
            <li><strong>Draft an Email:</strong> Write an email detailing your claim and send it to <a href="mailto:team@ergoplatform.org" className="text-cyan-400 hover:underline">team@ergoplatform.org</a>.</li>
            <li><strong>Include Relevant Details:</strong> Include all necessary details, such as the platform where the bounty was announced or a reference to the bounty page.</li>
            <li><strong>Attach Evidence:</strong> Attach any documents, files, or links that showcase your completed work.</li>
            <li><strong>Provide Your Ergo Address:</strong> This is where we will send your bounty reward.</li>
          </ol>
          <p className="text-gray-400 mt-4">We appreciate your contributions and look forward to working with you!</p>
        </div>

        {/* Technical Guidelines Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Technical Contribution Guidelines</h2>
          <p className="text-gray-300 mb-6">
            Contributing code to Ergo's core repositories involves adhering to certain technical standards and being aware of common build and dependency considerations.
          </p>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-cyan-400">General Workflow</h3>
            <ol className="list-decimal ml-6 text-gray-300 space-y-2">
              <li><strong>Find an Issue/Task:</strong> Look for issues tagged <span className="text-orange-400">good first issue</span> or <span className="text-orange-400">help wanted</span> in GitHub repositories. Check the <a href="https://bounties.ergo.community/" target="_blank" className="text-cyan-400 hover:underline">Bounties Board</a> for funded tasks.</li>
              <li><strong>Fork & Branch:</strong> Fork the repository and create a new branch for your changes.</li>
              <li><strong>Develop & Test:</strong> Write code following the project's style guide, add tests, and ensure all existing tests pass.</li>
              <li><strong>Submit Pull Request:</strong> Open a PR with clear description and reference to issue number.</li>
              <li><strong>Code Review:</strong> Respond to feedback and update your PR accordingly.</li>
              <li><strong>Merge:</strong> Once approved, maintainers will merge your PR.</li>
              </ol>
            </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-orange-400 mb-3">Build & CI Troubleshooting</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li><strong>GitHub Actions Updates:</strong> Check workflow logs for action version errors.</li>
                <li><strong>Flaky Test Failures:</strong> Re-run failed jobs for transient issues.</li>
                <li><strong>Dependency Conflicts:</strong> Ensure local environment matches CI.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-orange-400 mb-3">Dependency Management</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li><strong>BouncyCastle:</strong> Use consistent, modern variants (prefer jdk18on).</li>
                <li><strong>Updates:</strong> Keep dependencies updated but test thoroughly.</li>
                <li><strong>Core Libraries:</strong> Minimize new dependencies to avoid conflicts.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bounties Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-yellow-400" /> Active Bounties & Programs
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-yellow-400 mb-2">Educational Reward Program</h4>
              <p className="text-gray-300 text-sm mb-3">
                Create educational content for Developer Tutorials and Guides. Rewards are open to contributors of all skill levels.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-yellow-400 mb-2">Development Reward Program</h4>
              <p className="text-gray-300 text-sm mb-3">
                Significant contributions to Ergo repositories are eligible for rewards and recognition.
              </p>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="marketing">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Community Marketing
        </h1>
          <p className="text-xl text-gray-400 mb-6">
            Ergo has a lively and diverse community made up of various sub-ecosystems.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            Here's how you can get involved and make a difference in spreading awareness about Ergo.
        </p>
        </div>

        {/* Marketing Activities Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Users className="w-5 h-5 text-green-400" /> Join the Conversation
            </h3>
            <p className="text-gray-300 mb-4">
              Dive into discussions on our community channels and collaborate on grassroots initiatives.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <a href="https://t.me/ergoplatform" target="_blank" className="text-cyan-400 hover:underline">Telegram group</a> discussions
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <a href="https://discord.gg/ergo" target="_blank" className="text-cyan-400 hover:underline">#marketing channel on Discord</a>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Collaborate on marketing strategies
                </li>
              </ul>
            </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-400" /> Contribute to Wiki
            </h3>
            <p className="text-gray-300 mb-4">
              Help expand our comprehensive Wiki available in over forty languages.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <a href="https://ergonaut.space" target="_blank" className="text-cyan-400 hover:underline">Ergonaut.space</a> content expansion
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Multi-language accessibility
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Global community reach
                </li>
              </ul>
            </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Megaphone className="w-5 h-5 text-purple-400" /> Create and Share Content
            </h3>
            <p className="text-gray-300 mb-4">
              Produce various types of content to educate and engage the community.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <a href="https://www.figma.com/file/ErgoShared" target="_blank" className="text-cyan-400 hover:underline">Shared Figma Space</a> for design
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Infographics and educational videos
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Blog posts and articles
              </li>
              </ul>
            </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Globe className="w-5 h-5 text-yellow-400" /> Community Outreach
            </h3>
            <p className="text-gray-300 mb-4">
              Engage in various outreach activities to grow the Ergo community.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <a href="https://ergone.io" target="_blank" className="text-cyan-400 hover:underline">ErgOne PoCoP</a> participation
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Local meetups and events
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Webinars and live streams
              </li>
              </ul>
            </div>
        </div>

        {/* Collaboration Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Users className="w-6 h-6 text-green-400" /> Collaborate and Spread the Word
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-green-400 mb-2">Partnerships & Media</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Partner with blockchain influencers</li>
                <li>• Participate in podcasts and YouTube shows</li>
                <li>• Guest appearances on media platforms</li>
                <li>• Check <a href="https://www.ergoforum.org/" target="_blank" className="text-cyan-400 hover:underline">Ergo Forum</a> for strategies</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-green-400 mb-2">Social Media & Support</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Promote on Nostr, Bsky, Instagram, TikTok</li>
                <li>• Help new users on forums and Discord</li>
                <li>• Provide feedback to development team</li>
                <li>• Organize community fundraising campaigns</li>
              </ul>
            </div>
            </div>
            </div>
      </TabsContent>

      <TabsContent value="sigmanauts">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Sigmanauts: Empowering the Ergo Community
        </h1>
          <p className="text-xl text-gray-400 mb-6">
            The Sigmanauts Program is a grassroots initiative aimed at empowering individuals to take ownership of Ergo and help shape its future.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://sigmanauts.org/"
              target="_blank"
              className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
            >
              <Users className="w-5 h-5 mr-2" /> Join Sigmanauts
            </Link>
            <Link
              href="https://sigmamine.com/"
              target="_blank"
              className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
            >
              <Zap className="w-5 h-5 mr-2" /> Mining Pool
            </Link>
          </div>
        </div>

        {/* Vision Section */}
        <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Brain className="w-6 h-6 text-orange-400" /> Introduction
          </h2>
          <p className="text-gray-300">
            Ergo, as outlined in its Manifesto, is a platform designed for the common person, standing against the centralization of banking and the misuse of money. The future of Ergo lies in the hands of its users, and we encourage everyone to take as much control of the Ergo ecosystem as possible.
          </p>
            </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-green-400" /> Growth
            </h3>
            <p className="text-gray-300 text-sm">
              Ideal for those with marketing expertise, connections to other projects, or skills that can help expand the community and attract diverse individuals.
            </p>
            </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-400" /> Community
            </h3>
            <p className="text-gray-300 text-sm">
              Perfect for individuals interested in roles such as ambassador, moderator, or translator, fostering a welcoming environment for all members.
            </p>
            </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Megaphone className="w-5 h-5 text-purple-400" /> Creative
            </h3>
            <p className="text-gray-300 text-sm">
              Suited for graphic designers, videographers, writers, or social media experts who want to showcase their talents and contribute to the visual and narrative aspects.
            </p>
            </div>
            </div>

        {/* Process & Achievements */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Rocket className="w-5 h-5 text-cyan-400" /> Becoming a Sigmanaut
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Interested individuals must go through a formal application process. Once accepted as a SigCAN (Sigmanaut Candidate), participants work with like-minded individuals to make significant impact.
            </p>
            <p className="text-gray-300 text-sm">
              As SigCANs demonstrate commitment and abilities, they can become full-fledged Sigmanauts with greater community responsibility and leadership roles.
            </p>
            </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-green-400" /> Training & Support
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Comprehensive training covers decentralized finance, blockchain technology, and community building, ensuring Sigmanauts are well-prepared.
            </p>
            <p className="text-gray-300 text-sm">
              Collaborative environment for learning, sharing ideas, and working towards common goals with networking opportunities.
            </p>
            </div>
            </div>

        {/* Mining Pool Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Zap className="w-6 h-6 text-yellow-400" /> Sigmanauts Mining Pool
          </h2>
          <p className="text-gray-300 mb-4">
            The Sigmanauts Mining Pool is a DAO-driven, community-run mining pool dedicated to supporting the Ergo ecosystem.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-2">Pool Features</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Minimal 0.9% fee</li>
                <li>• 0.5 ERG payout threshold</li>
                <li>• PPLNS payment method</li>
                <li>• Hourly bonus token payments</li>
              </ul>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-2">Getting Started</h4>
              <p className="text-gray-300 text-sm">
                Visit <a href="https://sigmamine.com/" target="_blank" className="text-cyan-400 hover:underline">Sigmanauts Mining Pool</a> for detailed setup instructions, wallet requirements, and mining software configurations.
              </p>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="docs">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Contributing to Documentation
        </h1>
          <p className="text-xl text-gray-400 mb-6">
            We appreciate your interest in contributing! Your assistance is invaluable, and we aim to make the contribution process as straightforward as possible.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://github.com/ergoplatform/ergodocs"
              target="_blank"
              className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
            >
              <BookOpen className="w-5 h-5 mr-2" /> ErgoDocs Repository
            </Link>
          </div>
        </div>

        {/* Prerequisites Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Settings className="w-6 h-6 text-cyan-400" /> Prerequisites
          </h2>
          <ul className="text-gray-300 space-y-2">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              A <strong>GitHub account</strong> for version control and collaboration
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <strong>Python (3.7 or higher)</strong> if you plan to build the documentation locally
            </li>
          </ul>
        </div>

        {/* How to Contribute Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Code className="w-5 h-5 text-green-400" /> Minor Changes
            </h3>
            <p className="text-gray-300 text-sm">
              For minor changes, simply log into GitHub, click the edit arrow at the top-right of this page. After saving, you'll have the option to open a pull request.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-blue-400" /> Major Changes
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              For major changes, clone the repository and work locally:
            </p>
            <div className="bg-neutral-800 rounded p-3 text-xs text-gray-100 space-y-2">
              <div>git clone https://github.com/ergoplatform/ergodocs.git</div>
              <div>cd mkdocs-project && pip install -r requirements.txt</div>
              <div>mkdocs serve</div>
            </div>
          </div>
        </div>

        {/* Guidelines Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Contribution Guidelines</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold text-orange-400 mb-2">Writing Style</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Clear, concise, grammatically correct English</li>
                <li>• Appropriate formatting for emphasis</li>
                <li>• Short, focused paragraphs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-orange-400 mb-2">Code Style</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Follow project conventions</li>
                <li>• Include comments and explanations</li>
                <li>• Use syntax highlighting in code blocks</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-orange-400 mb-2">Commit Messages</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Clear, meaningful messages</li>
                <li>• Use imperative form ("Add feature")</li>
                <li>• Sentence capitalization</li>
              </ul>
            </div>
            </div>
            </div>
      </TabsContent>
    </Tabs>
  )
} 