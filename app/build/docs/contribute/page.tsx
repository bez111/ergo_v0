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
import Link from "next/link"

export default function ContributePage() {
  return (
    <div className="mb-12">
      {/* Hero Section */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4">
          Contribution Guide
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          The Ergo ecosystem thrives on community contributions. Whether you're a developer, designer, writer, or simply passionate about decentralized technology, there's a place for you to make an impact.
        </p>
        <div className="bg-gradient-to-r from-orange-500/20 to-cyan-500/20 border border-orange-500/30 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="w-6 h-6 text-orange-400" />
            <h2 className="text-2xl font-semibold text-orange-400">Why Contribute to Ergo?</h2>
          </div>
          <p className="text-gray-300 text-lg">
            Contributing to Ergo means becoming part of a vibrant, open-source community dedicated to building a secure, decentralized, and economically free future. Your efforts directly impact the growth and resilience of the platform.
          </p>
        </div>
      </div>

      {/* Code Contribution Section */}
      <section className="mb-12">
        <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Code className="w-6 h-6 text-blue-400" />
            <h2 className="text-2xl font-semibold text-blue-400">Code Contributions: Development & Core Protocol</h2>
          </div>
          <p className="text-gray-300 mb-6">
            Contributing code is a direct way to impact Ergo's development, from core protocol enhancements to new dApps and tools. All Ergo code development is managed through the ErgoPlatform Organization on GitHub.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-300 mb-3 flex items-center gap-2">
                <Github className="w-5 h-5" />
                Key Repositories
              </h3>
              <p className="text-gray-300 mb-4">
                Familiarize yourself with the main repositories:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span><strong>ergo:</strong> The core Ergo node implementation (Scala).</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span><strong>ergo-appkit:</strong> The JVM-based SDK for Java, Kotlin, and Scala developers.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span><strong>fleet:</strong> The TypeScript/JavaScript SDK for web and Node.js dApp development.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span><strong>sigma-rust:</strong> Low-level cryptographic library for Rust, used in various Ergo components.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>**ergo-wallet:** Reference GUI wallet implementation.</span>
                </li>
              </ul>
              <Link href="https://github.com/ergoplatform" target="_blank" className="inline-flex items-center text-orange-400 hover:underline mt-4">
                View all ErgoPlatform Repositories <ExternalLink className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-blue-300 mb-3 flex items-center gap-2">
                <GitBranch className="w-5 h-5" />
                Contribution Workflow
              </h3>
              <p className="text-gray-300 mb-4">
                Follow the standard GitHub workflow for contributing code:
              </p>
              <ol className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                  <span>**Find a task:** Look for open issues with labels like "good first issue," "help wanted," or "bug" in the relevant repository. You can also propose new features.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                  <span>**Fork the repository:** Create a personal fork of the repository on GitHub.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                  <span>**Clone & branch:** Clone your fork to your local machine and create a new branch for your changes (e.g., `feature/my-new-feature` or `fix/bug-name`).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                  <span>**Make changes:** Implement your code, ensuring it adheres to the project's coding style and includes relevant tests.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">5</span>
                  <span>**Test your changes:** Run existing tests and add new ones if necessary to cover your changes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">6</span>
                  <span>**Submit Pull Request (PR):** Create a pull request from your branch to the main repository. Provide a clear and detailed description of your changes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">7</span>
                  <span>**Code Review:** Address feedback from core developers and community members during the review process.</span>
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
            <h2 className="text-2xl font-semibold text-green-400">Documentation Contributions: Guides & References</h2>
          </div>
          
          <p className="text-gray-300 mb-6">
            High-quality documentation is vital for the growth and adoption of Ergo. We welcome contributions from writers, technical communicators, and anyone passionate about making information accessible.
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
                  <span>Ergo's documentation is primarily written in Markdown (or MDX) and hosted on GitHub.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-green-400 mt-1" />
                  <span>**Find something to improve:** Look for typos, grammatical errors, areas that lack clarity, outdated information, or suggest new topics and tutorials.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-green-400 mt-1" />
                  <span>**Fork & Clone:** Fork the relevant documentation repository on GitHub and clone it to your local machine.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-green-400 mt-1" />
                  <span>**Make Changes:** Edit the Markdown files using your preferred text editor.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-green-400 mt-1" />
                  <span>**Submit Pull Request:** Create a pull request with a clear description of your changes.</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-green-300 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Documentation Best Practices
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>**Clarity & Accuracy:** Strive for clear, concise, and technically accurate information.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>**Code Examples:** Use code examples where appropriate, ensuring they are correct and easy to understand.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>**Consistency:** Follow existing style guides, formatting, and terminology used throughout the documentation.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>**Visual Aids:** Include diagrams, screenshots, or flowcharts to explain complex concepts.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>**User-Centric:** Write from the perspective of the user, anticipating their questions and needs.</span>
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
            <h2 className="text-2xl font-semibold text-purple-400">Bug Reports & Feature Suggestions</h2>
          </div>
          
          <p className="text-gray-300 mb-6">
            Your feedback is invaluable for improving Ergo. We highly encourage you to report any bugs you encounter and suggest new features that would enhance the platform.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-purple-300 mb-3 flex items-center gap-2">
                <Bug className="w-5 h-5" />
                Reporting Bugs
              </h3>
              <p className="text-gray-300 mb-3">
                When reporting a bug, please use the "Issues" section of the relevant GitHub repository (e.g., `ergo`, `ergo-appkit`, `fleet`). Provide as much detail as possible:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-purple-400" />
                  <span>**Clear steps to reproduce the issue:** What did you do?</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-purple-400" />
                  <span>**Expected vs actual behavior:** What did you expect to happen, and what actually happened?</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-purple-400" />
                  <span>**Error messages and logs:** Include full stack traces or relevant log snippets.</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-purple-400" />
                  <span>**Environment details:** Node/SDK version, operating system, hardware specifications.</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-purple-400" />
                  <span>**Screenshots or videos:** Visual aids can be very helpful.</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-purple-300 mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Suggesting Features
              </h3>
              <p className="text-gray-300 mb-3">
                Share your ideas for new features on GitHub Issues, the Ergo forum, or Discord. A well-described suggestion includes:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-purple-400" />
                  <span>**Clear description of the feature:** What is it, and how would it work?</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-purple-400" />
                  <span>**Rationale and potential benefits:** Why is this feature needed, and what problem does it solve?</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-purple-400" />
                  <span>**Use cases and examples:** How would users interact with it?</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-purple-400" />
                  <span>**Implementation suggestions (optional):** If you have ideas on how it could be built, include them.</span>
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
            <h2 className="text-2xl font-semibold text-cyan-400">Community Support & Knowledge Sharing</h2>
          </div>
          
          <p className="text-gray-300 mb-6">
            Helping other users and sharing your knowledge is a fantastic way to contribute to the Ergo ecosystem, deepen your own understanding, and connect with the community.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <MessageCircle className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-cyan-300 mb-2">Answer Questions</h3>
              <p className="text-gray-300 text-sm">
                Actively participate in community channels (Discord, Telegram, Reddit, Ergo Forum) by answering questions from new and existing users. Your expertise can make a big difference!
              </p>
            </div>
            
            <div className="text-center">
              <BookOpen className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-cyan-300 mb-2">Create Educational Content</h3>
              <p className="text-gray-300 text-sm">
                Share your knowledge by writing blog posts, creating video tutorials, hosting webinars, or developing simple example dApps. High-quality content helps onboard new users and developers.
              </p>
            </div>
            
            <div className="text-center">
              <Bug className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-cyan-300 mb-2">Test & Provide Feedback</h3>
              <p className="text-gray-300 text-sm">
                Participate in testing beta versions of the node, SDKs, or new dApps. Providing detailed feedback helps catch issues early and improves the overall quality of the ecosystem.
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
            <h2 className="text-2xl font-semibold text-orange-400">Code of Conduct: Fostering a Welcoming Community</h2>
          </div>
          
          <p className="text-gray-300 mb-4">
            The Ergo community is committed to providing a welcoming and inclusive environment for everyone. We expect all contributors and participants to adhere to our Code of Conduct, which is typically based on the Contributor Covenant.
          </p>
          
          <div className="bg-neutral-800/50 rounded-lg p-4 border border-orange-500/20">
            <h3 className="text-lg font-semibold text-orange-300 mb-2">Key Principles:</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-orange-400" />
                <span>**Be respectful and inclusive:** Treat all community members with dignity and respect, regardless of background, experience, or opinions.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-orange-400" />
                <span>**Focus on constructive feedback:** Provide feedback that is helpful and actionable, focusing on the content rather than the person.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-orange-400" />
                <span>**Help create a welcoming environment:** Be patient and supportive, especially with newcomers.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-orange-400" />
                <span>**Report violations:** If you witness or experience behavior that violates the Code of Conduct, please report it to the project maintainers.</span>
              </li>
            </ul>
          </div>
          <div className="mt-4 text-sm text-orange-300 flex items-center gap-2">
            <ExternalLink className="w-4 h-4" /> You can usually find the full Code of Conduct in the main GitHub repositories (e.g., `ergoplatform/ergo`).
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
            href="https://discord.gg/ergoplatform" 
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