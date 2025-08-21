import React from "react";
import Link from "next/link";
import { 
  Users, MessageCircle, Heart, Globe, BookOpen, Code, 
  ExternalLink, Github, MessageSquare, HelpCircle, 
  Zap, Star, Coffee, Headphones, Video, FileText,
  Calendar, Award, Target, Lightbulb, CheckCircle
} from "lucide-react";

export default function CommunitySupport() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Community Support
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          The Ergo community is vibrant, welcoming, and always ready to help developers at every stage of their journey. Connect with fellow builders, get expert guidance, and contribute to the growing ecosystem.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="https://discord.gg/ergo-platform-668903786361651200"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <MessageSquare className="w-5 h-5 mr-2" /> Join Discord
          </Link>
          <Link
            href="https://www.ergoforum.org/"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <MessageCircle className="w-5 h-5 mr-2" /> Visit Forum
          </Link>
        </div>
      </div>

      {/* Primary Communication Channels */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <MessageCircle className="w-6 h-6 text-orange-400" /> Primary Communication Channels
        </h2>
        <p className="text-gray-300 mb-6">Join our main communication platforms where the community gathers to discuss, collaborate, and support each other.</p>
      </div>

      {/* Communication Channels Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-indigo-400" /> Discord Community
          </h3>
          <p className="text-gray-300 mb-4">
            Join over 15,000 community members in our Discord server. Get instant help, participate in discussions, and connect with core developers.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm mb-4">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              24/7 active community
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Dedicated developer channels
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Weekly community calls
            </li>
          </ul>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-orange-400" /> Ergo Forum
          </h3>
          <p className="text-gray-300 mb-4">
            Engage in detailed technical discussions, share ideas, and participate in governance discussions on our official forum.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm mb-4">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Technical deep dives
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Governance proposals
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Project showcases
            </li>
          </ul>
        </div>
      </div>

      {/* Developer-Specific Support */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Code className="w-6 h-6 text-green-400" /> Developer-Specific Support
        </h2>
        <p className="text-gray-300 mb-6">Specialized resources and support channels designed specifically for developers building on Ergo.</p>
        
        <div className="space-y-4">
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Github className="w-4 h-4 text-green-400" /> GitHub Discussions
            </h4>
            <p className="text-gray-400 text-sm mb-2">
              Get technical help directly from core developers and maintainers on specific repositories. Perfect for code-related questions and bug reports.
            </p>
          </div>

          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Headphones className="w-4 h-4 text-cyan-400" /> Office Hours
            </h4>
            <p className="text-gray-400 text-sm mb-2">
              Regular office hours with core team members where you can get direct help with your projects and technical challenges.
            </p>
            <p className="text-cyan-400 text-sm">Wednesdays 3PM UTC on Discord</p>
          </div>

          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-purple-400" /> AI-Powered Chatbots
            </h4>
            <p className="text-gray-400 text-sm mb-2">
              Get instant answers to common questions using our specialized chatbots trained on Ergo documentation.
            </p>
            <div className="flex gap-3 text-sm">
              <span className="text-purple-400">Ergo Bot • ErgoScript Bot</span>
            </div>
          </div>
        </div>
      </div>

      {/* Community Knowledge Base */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-yellow-400" /> Community Knowledge Base
        </h2>
        <p className="text-gray-300 mb-4">Community-maintained resources and documentation to help you learn and build.</p>
        
        <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <Globe className="w-4 h-4 text-yellow-400" /> Ergonaut Space
          </h4>
          <p className="text-gray-400 text-sm">
            Community-driven wiki with comprehensive guides, tutorials, and ecosystem information.
          </p>
        </div>
      </div>

      {/* Events & Meetups */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Calendar className="w-6 h-6 text-purple-400" /> Events & Meetups
        </h2>
        <p className="text-gray-300 mb-6">Connect with the community through regular events, hackathons, and educational sessions.</p>
        
        <div className="space-y-4">
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Video className="w-4 h-4 text-purple-400" /> Community Calls
            </h4>
            <p className="text-gray-400 text-sm mb-2">
              Weekly community calls to discuss updates, showcase projects, and answer questions.
            </p>
            <p className="text-purple-400 text-sm">Every Thursday 3PM UTC</p>
          </div>

          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Zap className="w-4 h-4 text-pink-400" /> Hackathons
            </h4>
            <p className="text-gray-400 text-sm mb-2">
              Regular hackathons with prizes and mentorship opportunities for developers of all skill levels.
            </p>
            <p className="text-pink-400 text-sm">Quarterly events - follow Discord for announcements</p>
          </div>

          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Coffee className="w-4 h-4 text-green-400" /> Developer Meetups
            </h4>
            <p className="text-gray-400 text-sm mb-2">
              Local and virtual meetups to network with other developers and learn about the latest developments.
            </p>
            <p className="text-green-400 text-sm">Check forum for upcoming events</p>
          </div>
        </div>
      </div>

      {/* Getting Help - Best Practices */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-cyan-400" /> Getting Help - Best Practices
        </h2>
        <p className="text-gray-300 mb-6">Follow these guidelines to get the most effective help from the community.</p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-cyan-300 mb-3">Before Asking</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Search existing documentation and community resources</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Check if your question has been asked before on Discord or the forum</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Try the AI chatbots for quick answers to common questions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Review relevant GitHub issues and discussions</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-cyan-300 mb-3">When Asking for Help</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Provide a clear, descriptive title for your question</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Include relevant code snippets and error messages</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Describe what you've already tried</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Specify your environment (OS, versions, tools)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Be patient and respectful - community members volunteer their time</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contributing Back */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Star className="w-5 h-5 text-orange-400" /> Answer Questions
          </h3>
          <p className="text-gray-300 mb-4">
            Help newcomers by answering questions in Discord and on the forum.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Share your experience
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Build reputation
            </li>
          </ul>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <FileText className="w-5 h-5 text-red-400" /> Create Content
          </h3>
          <p className="text-gray-300 mb-4">
            Write tutorials, guides, or blog posts about your experiences.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Document learnings
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Help ecosystem grow
            </li>
          </ul>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Award className="w-5 h-5 text-yellow-400" /> Mentor Others
          </h3>
          <p className="text-gray-300 mb-4">
            Share your knowledge and mentor new developers joining the ecosystem.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Guide newcomers
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Build community
            </li>
          </ul>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
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