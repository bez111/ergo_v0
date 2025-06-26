"use client"

import {
  Github,
  Code,
  BookOpen,
  Bug,
  Lightbulb,
  Users,
  GitBranch,
  FileText,
  MessageCircle,
  Heart,
  CheckCircle,
  ArrowRight,
  ExternalLink,
} from "lucide-react"

export default function ContributePage() {
  return (
    <div className="mb-12">
      {/* Hero Section */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4">
          Contribution Guide
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Help shape the future of Ergo! We welcome contributions from developers, designers, writers, and community members.
        </p>
        <div className="bg-gradient-to-r from-orange-500/20 to-cyan-500/20 border border-orange-500/30 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="w-6 h-6 text-orange-400" />
            <h2 className="text-2xl font-semibold text-orange-400">Why Contribute?</h2>
          </div>
          <p className="text-gray-300 text-lg">
            Ergo is an open-source project that thrives on community contributions. Whether you're a developer, 
            designer, writer, or just passionate about blockchain technology, there's a place for you in our community.
          </p>
        </div>
      </div>

      {/* Code Contribution Section */}
      <section className="mb-12">
        <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Code className="w-6 h-6 text-blue-400" />
            <h2 className="text-2xl font-semibold text-blue-400">How to Contribute Code</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-300 mb-3 flex items-center gap-2">
                <Github className="w-5 h-5" />
                GitHub Platform
              </h3>
              <p className="text-gray-300 mb-4">
                The primary platform for Ergo code development is the ErgoPlatform Organization on GitHub.
              </p>
              
              <h4 className="font-semibold text-blue-200 mb-2">Key Repositories:</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span><strong>ergo:</strong> The main Ergo node</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span><strong>ergo-appkit:</strong> JVM SDK</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span><strong>fleet:</strong> JS/TS SDK</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span><strong>sigma-rust:</strong> Low-level cryptographic library</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-blue-300 mb-3 flex items-center gap-2">
                <GitBranch className="w-5 h-5" />
                Contribution Process
              </h3>
              <ol className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                  <span><strong>Find a task:</strong> Look for open issues with "good first issue," "help wanted," or "bug" labels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                  <span><strong>Fork the repository:</strong> Create a fork on GitHub</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                  <span><strong>Clone & branch:</strong> Clone your fork and create a new branch</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                  <span><strong>Make changes:</strong> Write code and add tests</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">5</span>
                  <span><strong>Submit PR:</strong> Create a pull request with clear description</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">6</span>
                  <span><strong>Code review:</strong> Address feedback from the community</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Contribution Section */}
      <section className="mb-12">
        <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-green-400" />
            <h2 className="text-2xl font-semibold text-green-400">How to Contribute to Documentation</h2>
          </div>
          
          <p className="text-gray-300 mb-6">
            Documentation is a vital part of the Ergo ecosystem. We are always happy to help improve it!
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-green-300 mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Platform & Process
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-green-400 mt-1" />
                  <span>Documentation is written in Markdown format and stored in GitHub repositories</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-green-400 mt-1" />
                  <span>Find something to improve: typos, clarity, new tutorials, translations</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-green-400 mt-1" />
                  <span>Fork/clone the documentation repository</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-green-400 mt-1" />
                  <span>Make changes and submit a pull request</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-green-300 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Documentation Tips
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Strive for clarity, accuracy, and conciseness</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Use code examples where appropriate</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Follow existing style and formatting</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Include screenshots for UI-related content</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bug Reports & Feature Requests Section */}
      <section className="mb-12">
        <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="w-6 h-6 text-purple-400" />
            <h2 className="text-2xl font-semibold text-purple-400">Report Bugs & Suggest Features</h2>
          </div>
          
          <p className="text-gray-300 mb-6">
            Your feedback is invaluable for improving Ergo. We welcome bug reports and feature suggestions!
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-purple-300 mb-3 flex items-center gap-2">
                <Bug className="w-5 h-5" />
                Bug Reports
              </h3>
              <p className="text-gray-300 mb-3">
                Use the "Issues" section in the relevant GitHub repository and provide:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-purple-400" />
                  <span>Steps to reproduce the issue</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-purple-400" />
                  <span>Expected vs actual behavior</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-purple-400" />
                  <span>Error messages and logs</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-purple-400" />
                  <span>Node/SDK version and OS</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-purple-300 mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Feature Requests
              </h3>
              <p className="text-gray-300 mb-3">
                Share your ideas on GitHub Issues, Ergo forum, or Discord:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-purple-400" />
                  <span>Clear description of the feature</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-purple-400" />
                  <span>Rationale and potential benefits</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-purple-400" />
                  <span>Use cases and examples</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-purple-400" />
                  <span>Implementation suggestions (if any)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Community Support Section */}
      <section className="mb-12">
        <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6 text-cyan-400" />
            <h2 className="text-2xl font-semibold text-cyan-400">Participate in Community Support</h2>
          </div>
          
          <p className="text-gray-300 mb-6">
            Helping other users is a great way to contribute and deepen your knowledge of Ergo.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <MessageCircle className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-cyan-300 mb-2">Answer Questions</h3>
              <p className="text-gray-300 text-sm">
                Help users on Discord, Telegram, Reddit, or the forum with their Ergo-related questions.
              </p>
            </div>
            
            <div className="text-center">
              <BookOpen className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-cyan-300 mb-2">Share Knowledge</h3>
              <p className="text-gray-300 text-sm">
                Write blog posts, create video tutorials, or host webinars about Ergo.
              </p>
            </div>
            
            <div className="text-center">
              <Bug className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-cyan-300 mb-2">Test Features</h3>
              <p className="text-gray-300 text-sm">
                Participate in testing beta versions of the node or SDK to help catch issues early.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Code of Conduct Section */}
      <section className="mb-12">
        <div className="bg-orange-900/20 border border-orange-500/30 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="w-6 h-6 text-orange-400" />
            <h2 className="text-2xl font-semibold text-orange-400">Code of Conduct</h2>
          </div>
          
          <p className="text-gray-300 mb-4">
            We strive to create an open and inclusive community. Please review the Ergo Code of Conduct, 
            which is typically based on the Contributor Covenant.
          </p>
          
          <div className="bg-neutral-800/50 rounded-lg p-4 border border-orange-500/20">
            <h3 className="text-lg font-semibold text-orange-300 mb-2">Key Principles:</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-orange-400" />
                <span>Be respectful and inclusive to all community members</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-orange-400" />
                <span>Focus on constructive feedback and collaboration</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-orange-400" />
                <span>Help create a welcoming environment for newcomers</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-orange-400" />
                <span>Report any violations to maintainers</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-orange-500/10 to-cyan-500/10 border border-orange-500/30 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-orange-400 mb-4">Ready to Contribute?</h2>
        <p className="text-gray-300 mb-6">
          Join our community and help build the future of decentralized finance with Ergo!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="https://github.com/ergoplatform" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            <Github className="w-5 h-5" />
            View on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
          <a 
            href="https://discord.gg/ergo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Join Discord
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  )
} 