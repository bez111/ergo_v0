import React from "react";
import Link from "next/link";
import { 
  Users, MessageCircle, Heart, Globe, BookOpen, Code, 
  ExternalLink, Github, MessageSquare, HelpCircle, 
  Zap, Star, Coffee, Headphones, Video, FileText,
  Calendar, Award, Target, Lightbulb
} from "lucide-react";

export default function CommunitySupport() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
          <Users className="w-10 h-10 text-blue-400" /> Community Support
        </h1>
        <p className="text-lg text-gray-300">
          The Ergo community is vibrant, welcoming, and always ready to help developers at every stage of their journey. Connect with fellow builders, get expert guidance, and contribute to the growing ecosystem.
        </p>
      </div>

      {/* Primary Communication Channels */}
      <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <MessageCircle className="w-6 h-6 text-blue-400" /> Primary Communication Channels
        </h2>
        <p className="text-gray-300 mb-6">Join our main communication platforms where the community gathers to discuss, collaborate, and support each other.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-indigo-500/10 to-blue-500/5 border border-indigo-500/20 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-indigo-300">Discord Community</h3>
                <p className="text-gray-400 text-sm">Real-time chat & support</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Join over 15,000 community members in our Discord server. Get instant help, participate in discussions, and connect with core developers.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>24/7 active community</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span>Dedicated developer channels</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                <span>Weekly community calls</span>
              </div>
            </div>
            <a 
              href="https://discord.gg/ergo-platform-668903786361651200" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-400/30 rounded-lg transition-colors"
            >
              <span className="text-indigo-300 font-semibold">Join Discord</span>
              <ExternalLink className="w-4 h-4 text-indigo-400" />
            </a>
          </div>

          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/5 border border-orange-500/20 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-orange-300">Ergo Forum</h3>
                <p className="text-gray-400 text-sm">Long-form discussions</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Engage in detailed technical discussions, share ideas, and participate in governance discussions on our official forum.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                <span>Technical deep dives</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                <span>Governance proposals</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                <span>Project showcases</span>
              </div>
            </div>
            <a 
              href="https://www.ergoforum.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-orange-500/20 hover:bg-orange-500/30 border border-orange-400/30 rounded-lg transition-colors"
            >
              <span className="text-orange-300 font-semibold">Visit Forum</span>
              <ExternalLink className="w-4 h-4 text-orange-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Developer-Specific Support */}
      <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Code className="w-6 h-6 text-green-400" /> Developer-Specific Support
        </h2>
        <p className="text-gray-300 mb-6">Specialized resources and support channels designed specifically for developers building on Ergo.</p>
        
        <div className="space-y-4">
          <div className="bg-neutral-900/50 border border-green-700/30 rounded-lg p-4 flex items-start gap-4">
            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Github className="w-5 h-5 text-green-400" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-green-300 mb-2">GitHub Discussions</h3>
              <p className="text-gray-300 text-sm mb-3">
                Get technical help directly from core developers and maintainers on specific repositories. Perfect for code-related questions and bug reports.
              </p>
              <a 
                href="https://github.com/ergoplatform" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-400 hover:underline text-sm"
              >
                <span>Explore Repositories</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="bg-neutral-900/50 border border-cyan-700/30 rounded-lg p-4 flex items-start gap-4">
            <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Headphones className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-cyan-300 mb-2">Office Hours</h3>
              <p className="text-gray-300 text-sm mb-3">
                Regular office hours with core team members where you can get direct help with your projects and technical challenges.
              </p>
              <div className="text-cyan-400 text-sm">
                <span>Wednesdays 3PM UTC on Discord</span>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900/50 border border-purple-700/30 rounded-lg p-4 flex items-start gap-4">
            <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-5 h-5 text-purple-400" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-purple-300 mb-2">AI-Powered Chatbots</h3>
              <p className="text-gray-300 text-sm mb-3">
                Get instant answers to common questions using our specialized chatbots trained on Ergo documentation.
              </p>
              <div className="flex gap-3">
                <a 
                  href="https://ergobot.io/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-purple-400 hover:underline text-sm"
                >
                  <span>Ergo Bot</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a 
                  href="https://ergoscriptbot.io/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-purple-400 hover:underline text-sm"
                >
                  <span>ErgoScript Bot</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Community Knowledge Base */}
      <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-yellow-400" /> Community Knowledge Base
        </h2>
        <p className="text-gray-300 mb-6">Community-maintained resources and documentation to help you learn and build.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-neutral-900/50 border border-yellow-700/30 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <Globe className="w-5 h-5 text-yellow-400" />
              <h3 className="font-bold text-yellow-300">Ergonaut Space</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Community-driven wiki with comprehensive guides, tutorials, and ecosystem information.
            </p>
            <a 
              href="https://ergonaut.space/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-yellow-400 hover:underline text-sm"
            >
              <span>Visit Ergonaut Space</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>


        </div>
      </div>

      {/* Events & Meetups */}
      <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Calendar className="w-6 h-6 text-purple-400" /> Events & Meetups
        </h2>
        <p className="text-gray-300 mb-6">Connect with the community through regular events, hackathons, and educational sessions.</p>
        
        <div className="space-y-4">
          <div className="bg-neutral-900/50 border border-purple-700/30 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <Video className="w-5 h-5 text-purple-400" />
              <h3 className="font-bold text-purple-300">Community Calls</h3>
            </div>
            <p className="text-gray-300 text-sm mb-2">
              Weekly community calls to discuss updates, showcase projects, and answer questions.
            </p>
            <p className="text-purple-400 text-sm">Every Thursday 3PM UTC</p>
          </div>

          <div className="bg-neutral-900/50 border border-pink-700/30 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <Zap className="w-5 h-5 text-pink-400" />
              <h3 className="font-bold text-pink-300">Hackathons</h3>
            </div>
            <p className="text-gray-300 text-sm mb-2">
              Regular hackathons with prizes and mentorship opportunities for developers of all skill levels.
            </p>
            <p className="text-pink-400 text-sm">Quarterly events - follow Discord for announcements</p>
          </div>

          <div className="bg-neutral-900/50 border border-green-700/30 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <Coffee className="w-5 h-5 text-green-400" />
              <h3 className="font-bold text-green-300">Developer Meetups</h3>
            </div>
            <p className="text-gray-300 text-sm mb-2">
              Local and virtual meetups to network with other developers and learn about the latest developments.
            </p>
            <p className="text-green-400 text-sm">Check forum for upcoming events</p>
          </div>
        </div>
      </div>

      {/* Getting Help - Best Practices */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-cyan-400" /> Getting Help - Best Practices
        </h2>
        <p className="text-gray-300 mb-6">Follow these guidelines to get the most effective help from the community.</p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-cyan-300 mb-3">Before Asking</h3>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300 text-sm">
              <li>Search existing documentation and community resources</li>
              <li>Check if your question has been asked before on Discord or the forum</li>
              <li>Try the AI chatbots for quick answers to common questions</li>
              <li>Review relevant GitHub issues and discussions</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-cyan-300 mb-3">When Asking for Help</h3>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300 text-sm">
              <li>Provide a clear, descriptive title for your question</li>
              <li>Include relevant code snippets and error messages</li>
              <li>Describe what you've already tried</li>
              <li>Specify your environment (OS, versions, tools)</li>
              <li>Be patient and respectful - community members volunteer their time</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-cyan-300 mb-3">Channel Guidelines</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-neutral-900/30 rounded-lg p-3">
                <h4 className="font-semibold text-cyan-200 mb-2">Use Discord for:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Quick questions</li>
                  <li>• Real-time troubleshooting</li>
                  <li>• General discussions</li>
                  <li>• Community chat</li>
                </ul>
              </div>
              <div className="bg-neutral-900/30 rounded-lg p-3">
                <h4 className="font-semibold text-cyan-200 mb-2">Use Forum for:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Complex technical discussions</li>
                  <li>• Feature requests</li>
                  <li>• Governance topics</li>
                  <li>• Long-form content</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contributing Back */}
      <div className="bg-gradient-to-br from-orange-400/10 to-red-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Heart className="w-6 h-6 text-orange-400" /> Contributing Back
        </h2>
        <p className="text-gray-300 mb-6">As you grow in the ecosystem, consider ways to give back and help other developers.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-neutral-900/50 border border-orange-700/30 rounded-lg p-4 text-center">
            <Star className="w-8 h-8 text-orange-400 mx-auto mb-3" />
            <h3 className="font-bold text-orange-300 mb-2">Answer Questions</h3>
            <p className="text-gray-300 text-sm">
              Help newcomers by answering questions in Discord and on the forum.
            </p>
          </div>
          <div className="bg-neutral-900/50 border border-red-700/30 rounded-lg p-4 text-center">
            <FileText className="w-8 h-8 text-red-400 mx-auto mb-3" />
            <h3 className="font-bold text-red-300 mb-2">Create Content</h3>
            <p className="text-gray-300 text-sm">
              Write tutorials, guides, or blog posts about your experiences.
            </p>
          </div>
          <div className="bg-neutral-900/50 border border-yellow-700/30 rounded-lg p-4 text-center">
            <Award className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="font-bold text-yellow-300 mb-2">Mentor Others</h3>
            <p className="text-gray-300 text-sm">
              Share your knowledge and mentor new developers joining the ecosystem.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Target className="w-6 h-6 text-gray-400" /> Quick Links
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a 
            href="https://discord.gg/ergo-platform-668903786361651200" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-3 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 rounded-lg transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-indigo-400" />
            <span className="text-indigo-300 text-sm font-medium">Discord</span>
          </a>
          <a 
            href="https://www.ergoforum.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-3 bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/20 rounded-lg transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-orange-400" />
            <span className="text-orange-300 text-sm font-medium">Forum</span>
          </a>
          <a 
            href="https://github.com/ergoplatform" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-3 bg-gray-500/10 hover:bg-gray-500/20 border border-gray-500/20 rounded-lg transition-colors"
          >
            <Github className="w-4 h-4 text-gray-400" />
            <span className="text-gray-300 text-sm font-medium">GitHub</span>
          </a>
          <a 
            href="https://ergonaut.space/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-3 bg-yellow-500/10 hover:bg-yellow-500/20 border border-yellow-500/20 rounded-lg transition-colors"
          >
            <Globe className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-300 text-sm font-medium">Ergonaut</span>
          </a>
        </div>
      </div>
    </>
  );
} 