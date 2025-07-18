"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronLeft, Share2, FileText, Cpu, Shield, Network, Users, ChevronDown } from "lucide-react";

export default function NodeProtocolPage() {
  const [openSections, setOpenSections] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    setOpenSections(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const sections = [
    {
      title: "Processing Algorithm",
      icon: Cpu,
      color: "cyan",
      description: "This section explains the algorithm used for processing Ergo modifiers. It is applicable across all security modes within the Ergo network, ensuring consistent data processing.",
      links: [
        { text: "modifiers", href: "modifiers-processing.md" },
        { text: "security modes", href: "modes.md" }
      ]
    },
    {
      title: "Validation Rules",
      icon: Shield,
      color: "orange",
      description: "This part outlines the consensus-critical validation rules. These rules are mandatory for every node in the Ergo network to maintain network integrity and security. They ensure that all transactions and blocks adhere to the established network standards.",
      links: [
        { text: "validation rules", href: "modifiers-validation.md" },
        { text: "node", href: "install.md" },
        { text: "transactions", href: "transactions.md" },
        { text: "blocks", href: "block.md" }
      ]
    },
    {
      title: "P2P Protocol",
      icon: Network,
      color: "green",
      description: "The P2P Protocol section delves into the peer-to-peer protocol used in the Ergo network. It provides insights into how nodes communicate and share information, facilitating efficient data exchange within the network.",
      links: [
        { text: "P2P Protocol", href: "p2p-protocol-overview.md" },
        { text: "peer-to-peer", href: "p2p-protocol-overview.md" }
      ]
    },
    {
      title: "Peer Management",
      icon: Users,
      color: "purple",
      description: "The peer management section discusses the strategies nodes in the Ergo network employ to manage their peers. It includes information about peer discovery, connection, and disconnection, providing a clear understanding of how nodes maintain network connectivity.",
      links: [
        { text: "peer management", href: "peer-management.md" }
      ]
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Ergo Node Protocol
      </h1>
      <div className="mb-8">
        <Link
          href="/Docs/developers/infrastructure/node"
          className="inline-flex items-center px-5 py-2 bg-orange-500 rounded-lg font-semibold text-black hover:bg-orange-600 transition hover:scale-[1.02]"
        >
          <ChevronLeft className="w-5 h-5 mr-2" /> Back to Node Overview
        </Link>
      </div>
      <div className="text-gray-300 mb-10 text-base">
        <p className="mb-6 text-lg">
          The Node Protocol section provides a comprehensive overview of the core operational aspects of the Ergo network. It covers the following key areas:
        </p>
        
        <div className="space-y-3 mb-8">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            const isOpen = openSections.includes(index);
            const colorClasses = {
              cyan: "text-cyan-400 bg-cyan-400/10",
              orange: "text-orange-400 bg-orange-400/10",
              green: "text-green-400 bg-green-400/10",
              purple: "text-purple-400 bg-purple-400/10"
            };
            
            return (
              <div key={index} className="bg-neutral-900/50 border border-neutral-700 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full p-4 text-left hover:bg-neutral-800/50 transition-all duration-300 flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded-lg ${colorClasses[section.color as keyof typeof colorClasses]}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-cyan-300">{section.title}</h3>
                  </div>
                  <ChevronDown 
                    className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-4 pb-4">
                    <p className="text-gray-300 leading-relaxed mb-3 text-sm">
                      {section.description.split(' ').map((word, wordIndex) => {
                        const link = section.links.find(link => 
                          word.toLowerCase().includes(link.text.toLowerCase())
                        );
                        
                        if (link) {
                          return (
                            <Link 
                              key={wordIndex}
                              href={link.href} 
                              className="text-cyan-400 hover:underline"
                            >
                              {word}
                            </Link>
                          );
                        }
                        return word + ' ';
                      })}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="bg-gradient-to-r from-neutral-900/50 to-neutral-800/50 border border-neutral-700 rounded-xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-cyan-300 mb-4">Understanding the Core</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              By understanding these aspects, you can gain a deeper insight into how the Ergo network operates, ensuring its security and efficiency.
            </p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {/* P2P Card */}
        <Link
          href="/Docs/developers/infrastructure/node/protocol/p2p-protocol-overview"
          className="group bg-neutral-900/50 border border-neutral-700 rounded-lg p-5 hover:border-cyan-400/60 hover:bg-neutral-800/70 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 flex flex-col items-center justify-between min-h-[130px] text-center cursor-pointer transform hover:scale-[1.03]"
        >
          <div className="p-2 bg-cyan-400/10 rounded-lg mb-3 group-hover:bg-cyan-400/20 transition-colors duration-300">
            <Share2 className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
          </div>
          <div className="font-bold text-lg text-white mb-2 group-hover:text-cyan-50 transition-colors duration-300">P2P Protocol</div>
          <div className="text-gray-400 text-sm mb-4 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">How nodes communicate, share information, and maintain network connectivity in Ergo.</div>
          <div className="flex items-center justify-center text-cyan-300 text-xs font-semibold mt-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-1">
            Learn more →
          </div>
        </Link>
        {/* EIPs Card */}
        <Link
          href="/Docs/developers/infrastructure/node/protocol/eips"
          className="group bg-neutral-900/50 border border-neutral-700 rounded-lg p-5 hover:border-orange-400/60 hover:bg-neutral-800/70 hover:shadow-lg hover:shadow-orange-400/20 transition-all duration-300 flex flex-col items-center justify-between min-h-[130px] text-center cursor-pointer transform hover:scale-[1.03]"
        >
          <div className="p-2 bg-orange-400/10 rounded-lg mb-3 group-hover:bg-orange-400/20 transition-colors duration-300">
            <FileText className="w-6 h-6 text-orange-400 group-hover:text-orange-300 transition-colors duration-300" />
          </div>
          <div className="font-bold text-lg text-white mb-2 group-hover:text-orange-50 transition-colors duration-300">EIPs</div>
          <div className="text-gray-400 text-sm mb-4 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">Ergo Improvement Proposals: standards and upgrades for the Ergo protocol and ecosystem.</div>
          <div className="flex items-center justify-center text-orange-300 text-xs font-semibold mt-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-1">
            Learn more →
          </div>
        </Link>
      </div>
    </div>
  );
} 