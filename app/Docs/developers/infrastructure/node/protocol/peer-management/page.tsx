"use client";
import React from "react";
import Link from "next/link";
import { ChevronLeft, Users, Shield, AlertTriangle, Search, Clock } from "lucide-react";

export default function PeerManagementPage() {
  return (
    <>
      <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Peer Management Protocol
      </h1>
      
      <div className="mb-6">
        <Link
          href="/Docs/developers/infrastructure/node/protocol/p2p-protocol-overview"
          className="inline-flex items-center px-5 py-2 bg-orange-500 rounded-lg font-semibold text-black hover:bg-orange-600 transition hover:scale-[1.02]"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to P2P Overview
        </Link>
      </div>

      

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Users className="w-6 h-6 text-cyan-400" />
          Core Concepts
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-bold text-cyan-300 mb-3">Peer Structure</h3>
            <div className="space-y-3">
              <div>
                <code className="bg-neutral-800 px-2 py-1 rounded text-sm">peer = (addr, port)</code>
                <p className="text-gray-300 text-sm mt-1">IPv4/IPv6 address + port</p>
              </div>
              <div>
                <code className="bg-neutral-800 px-2 py-1 rounded text-sm">management = (G, B, C)</code>
                <p className="text-gray-300 text-sm mt-1">Good, Banned, Connected sets</p>
              </div>
            </div>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-bold text-cyan-300 mb-3">Set Invariants</h3>
            <div className="space-y-2 text-sm">
              <div className="text-cyan-300 font-mono">G ∩ B = ∅</div>
              <div className="text-cyan-300 font-mono">C ⊆ G</div>
              <div className="text-cyan-300 font-mono">G, B ⊆ 𝒫</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Shield className="w-6 h-6 text-red-400" />
          Penalty System
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-bold text-red-300 mb-3">Penalty Types</h3>
            <div className="space-y-3">
              <div>
                <code className="bg-neutral-800 px-2 py-1 rounded text-sm">NonDeliveryPenalty</code>
                <p className="text-gray-300 text-sm mt-1">Failed modifier delivery</p>
              </div>
              <div>
                <code className="bg-neutral-800 px-2 py-1 rounded text-sm">MisbehaviorPenalty</code>
                <p className="text-gray-300 text-sm mt-1">Invalid modifier delivery</p>
              </div>
              <div>
                <code className="bg-neutral-800 px-2 py-1 rounded text-sm">SpamPenalty</code>
                <p className="text-gray-300 text-sm mt-1">Unsolicited modifier</p>
              </div>
              <div>
                <code className="bg-neutral-800 px-2 py-1 rounded text-sm">PermanentPenalty</code>
                <p className="text-gray-300 text-sm mt-1">Severe protocol violation</p>
              </div>
            </div>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-bold text-red-300 mb-3">System Components</h3>
            <div className="space-y-3">
              <div>
                <strong className="text-red-200">Penalty Book:</strong>
                <p className="text-gray-300 text-sm mt-1">ip → (score, timestamp)</p>
              </div>
              <div>
                <strong className="text-red-200">Blacklist:</strong>
                <p className="text-gray-300 text-sm mt-1">ip → ban_timestamp</p>
              </div>
              <div>
                <strong className="text-red-200">Safe Interval:</strong>
                <p className="text-gray-300 text-sm mt-1">Cooldown between penalties</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Search className="w-6 h-6 text-green-400" />
          Peer Discovery
        </h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          The peer discovery protocol aims to find new potential peers from various sources and add them to the set of good peers (G). Sources for discovery can include:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-6">
          <li>Other connected peers (exchanging peer lists).</li>
          <li>Predefined bootstrap nodes.</li>
          <li>Trusted central servers (less common in decentralized networks).</li>
          <li>Potentially untrusted channels like DNS seeds, IRC, Twitter, etc. (requiring careful validation).</li>
        </ul>
        
        <div className="bg-green-900/20 border border-green-400/30 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-bold text-green-300 mb-3">Discovery Process</h3>
          <p className="text-gray-300 mb-4">
            The discovery process involves several stages to ensure network reliability and security:
          </p>
          <ol className="list-decimal list-inside text-gray-300 space-y-2 ml-4">
            <li><strong>Initial Bootstrap:</strong> Nodes start with a predefined list of trusted bootstrap nodes.</li>
            <li><strong>Peer Exchange:</strong> Connected peers exchange their peer lists to discover new nodes.</li>
            <li><strong>Validation:</strong> New peers are validated through handshake and capability checks.</li>
            <li><strong>Integration:</strong> Validated peers are added to the good peers set (G).</li>
          </ol>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Clock className="w-6 h-6 text-blue-400" />
          Connection Management
        </h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Effective peer management requires sophisticated connection handling to maintain network stability and performance.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-bold text-cyan-300 mb-3">Connection Limits</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Maximum connections per peer type</li>
              <li>• Rate limiting for connection attempts</li>
              <li>• Timeout handling for stale connections</li>
              <li>• Automatic reconnection strategies</li>
            </ul>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-bold text-orange-300 mb-3">Health Monitoring</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Response time tracking</li>
              <li>• Message delivery success rates</li>
              <li>• Protocol compliance monitoring</li>
              <li>• Automatic peer quality assessment</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Shield className="w-6 h-6 text-purple-400" />
          Security Considerations
        </h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Peer management includes several security mechanisms to protect against malicious actors and ensure network integrity.
        </p>
        
        <div className="bg-purple-900/20 border border-purple-400/30 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-bold text-purple-300 mb-3">Attack Prevention</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-purple-200 mb-2">Sybil Attacks</h4>
              <p className="text-gray-300 text-sm">
                Prevention through peer validation, reputation systems, and connection limits per IP address.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-200 mb-2">Eclipse Attacks</h4>
              <p className="text-gray-300 text-sm">
                Mitigation via diverse peer selection, bootstrap node protection, and connection diversity requirements.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-red-900/20 border border-red-400/30 rounded-xl p-6">
          <h3 className="text-lg font-bold text-red-300 mb-3">Penalty System Details</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-neutral-700 rounded-lg overflow-hidden">
              <thead className="bg-neutral-800">
                <tr>
                  <th className="border border-neutral-700 px-4 py-3 text-left text-red-300 font-semibold">Penalty Type</th>
                  <th className="border border-neutral-700 px-4 py-3 text-left text-red-300 font-semibold">Score</th>
                  <th className="border border-neutral-700 px-4 py-3 text-left text-red-300 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-neutral-900/50">
                  <td className="border border-neutral-700 px-4 py-3 text-gray-300">NonDeliveryPenalty</td>
                  <td className="border border-neutral-700 px-4 py-3 text-gray-300">+5</td>
                  <td className="border border-neutral-700 px-4 py-3 text-gray-300">Temporary restriction</td>
                </tr>
                <tr className="bg-neutral-900">
                  <td className="border border-neutral-700 px-4 py-3 text-gray-300">MisbehaviorPenalty</td>
                  <td className="border border-neutral-700 px-4 py-3 text-gray-300">+10</td>
                  <td className="border border-neutral-700 px-4 py-3 text-gray-300">Extended timeout</td>
                </tr>
                <tr className="bg-neutral-900/50">
                  <td className="border border-neutral-700 px-4 py-3 text-gray-300">SpamPenalty</td>
                  <td className="border border-neutral-700 px-4 py-3 text-gray-300">+15</td>
                  <td className="border border-neutral-700 px-4 py-3 text-gray-300">Connection limit</td>
                </tr>
                <tr className="bg-neutral-900">
                  <td className="border border-neutral-700 px-4 py-3 text-gray-300">PermanentPenalty</td>
                  <td className="border border-neutral-700 px-4 py-3 text-gray-300">+100</td>
                  <td className="border border-neutral-700 px-4 py-3 text-gray-300">Immediate ban</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Users className="w-6 h-6 text-teal-400" />
          Implementation Guidelines
        </h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          When implementing peer management systems, consider these best practices for optimal network performance and security.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-teal-900/20 border border-teal-400/30 rounded-xl p-6">
            <h3 className="text-lg font-bold text-teal-300 mb-3">Performance Optimization</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Use efficient data structures for peer sets</li>
              <li>• Implement connection pooling</li>
              <li>• Optimize penalty book lookups</li>
              <li>• Cache frequently accessed peer information</li>
            </ul>
          </div>
          
          <div className="bg-teal-900/20 border border-teal-400/30 rounded-xl p-6">
            <h3 className="text-lg font-bold text-teal-300 mb-3">Monitoring & Logging</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Track peer connection statistics</li>
              <li>• Monitor penalty application rates</li>
              <li>• Log peer discovery events</li>
              <li>• Alert on suspicious peer behavior</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
} 