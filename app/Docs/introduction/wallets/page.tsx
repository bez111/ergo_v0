"use client";

import React, { useState, useEffect } from "react";
import { Shield, Smartphone, Monitor, Globe, Lock, BookOpen, ExternalLink, CheckCircle, Info, AlertTriangle, ArrowDown, ArrowUp, Users, Star, Key, FileText } from "lucide-react";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const wallets = [
  {
    name: "Ergo Mobile / Terminus",
    type: "Mobile",
    platforms: "iOS, Android",
    ease: "High",
    dapps: "Limited (ErgoPay)",
    cold: "Yes (via offline mode)",
    feature: "Convenient mobile use, NFT support",
    description: "A user-friendly, feature-rich mobile wallet. Supports ERG, tokens, NFTs, creating offline (\"cold\") wallets, and ErgoPay QR code scanning. A community favorite.",
    bestFor: "Everyday mobile use, managing diverse assets, easy payments.",
    icon: <Smartphone className="w-6 h-6 text-orange-400" />,
    link: "https://ergoplatform.org/en/wallets/"
  },
  {
    name: "Nautilus",
    type: "Browser Extension",
    platforms: "Browser Extension",
    ease: "Medium",
    dapps: "Yes (Directly)",
    cold: "No",
    feature: "Seamless dApp interaction, popular",
    description: "A very popular browser extension wallet (similar to MetaMask). Enables seamless connection to Ergo dApps. Manages ERG, tokens, and NFTs. Includes privacy features and transaction optimization.",
    bestFor: "Users frequently interacting with DeFi, NFT marketplaces, and other web-based Ergo applications.",
    icon: <Globe className="w-6 h-6 text-cyan-400" />,
    link: "https://nautiluswallet.io/"
  },
  {
    name: "Satergo",
    type: "Desktop",
    platforms: "Desktop (Win/Mac/Lin)",
    ease: "Medium",
    dapps: "No",
    cold: "Yes (if PC is offline)",
    feature: "User-friendly full node wallet",
    description: "A desktop wallet specifically designed to run alongside a full Ergo Node. Provides a user-friendly interface for managing funds while contributing to network decentralization.",
    bestFor: "Users who want to run their own full node for maximum trust and verification, without needing complex command-line interaction.",
    icon: <Monitor className="w-6 h-6 text-green-400" />,
    link: "https://satergo.com/"
  },
  {
    name: "SAFEW Wallet",
    type: "Web",
    platforms: "Web",
    ease: "Medium-Low",
    dapps: "Yes (Directly)",
    cold: "No",
    feature: "Advanced features, Mixer access",
    description: "A web-based wallet (accessed via a website, requires careful URL verification). Offers advanced features like ErgoMixer integration (for enhanced privacy) and developer tools.",
    bestFor: "Experienced users needing specific features like mixing or advanced transaction control.",
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    link: "https://safewallet.org/"
  },
  {
    name: "Minotaur Wallet",
    type: "Mobile",
    platforms: "Mobile",
    ease: "Medium-Low",
    dapps: "Limited (ErgoPay)",
    cold: "Yes (via offline mode)",
    feature: "Multi-signature security",
    description: "Offers advanced features like multi-signature capabilities (requiring multiple approvals for transactions).",
    bestFor: "Users needing shared fund control or enhanced security via multi-sig. May be more complex for beginners.",
    icon: <Smartphone className="w-6 h-6 text-purple-400" />,
    link: "https://minotaurwallet.com/"
  },
  {
    name: "Paper Wallet",
    type: "Offline Generation",
    platforms: "Offline Generation",
    ease: "N/A (Setup is simple)",
    dapps: "No",
    cold: "Yes (Primary purpose)",
    feature: "Maximum security for long-term holding",
    description: "A method to generate wallet keys offline and print them on paper (or save securely offline). Provides maximum security from online threats.",
    bestFor: "Long-term 'cold storage' of significant amounts, gifting ERG. Less convenient for frequent use.",
    icon: <Lock className="w-6 h-6 text-neutral-400" />,
    link: "https://ergoplatform.org/en/wallets/"
  },
  {
    name: "Node Wallet (Core)",
    type: "Desktop",
    platforms: "Desktop (Win/Mac/Lin)",
    ease: "Low",
    dapps: "No",
    cold: "Yes (if PC is offline)",
    feature: "Integrated with core node (Advanced users)",
    description: "The basic wallet functionality built into the core Ergo reference node software. Accessed via command line or API.",
    bestFor: "Developers or advanced users comfortable with command-line interfaces who are already running a core node. Satergo offers a graphical alternative for node users.",
    icon: <Key className="w-6 h-6 text-yellow-400" />,
    link: "https://ergoplatform.org/en/wallets/"
  },
];

export default function WalletsPage() {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const walletTypes = [
    { key: "Mobile", label: "Mobile", icon: <Smartphone className="w-4 h-4" /> },
    { key: "Desktop", label: "Desktop", icon: <Monitor className="w-4 h-4" /> },
    { key: "Browser Extension", label: "Browser Ext.", icon: <Globe className="w-4 h-4" /> },
    { key: "Web", label: "Web", icon: <Globe className="w-4 h-4" /> },
    { key: "Offline Generation", label: "Paper", icon: <Lock className="w-4 h-4" /> },
    { key: "all", label: "All", icon: <Star className="w-4 h-4" /> },
  ];
  const [tab, setTab] = useState("Desktop");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isMobile = /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
      setTab(isMobile ? "Mobile" : "Desktop");
    }
  }, []);
  return (
    <div className="px-4 space-y-12">
      {/* Hero Section */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent leading-tight pb-1">
          Choosing an Ergo Wallet
        </h1>
        <p className="text-xl text-gray-400 mt-2">
          A wallet is your essential gateway to the Ergo ecosystem. It allows you to securely store, send, and receive ERG and other tokens built on Ergo, as well as interact with decentralized applications (dApps). Choosing the right wallet depends on your technical comfort, security needs, and how you plan to use Ergo.
        </p>
      </div>
      {/* Disclaimer */}
      <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-5 flex items-center gap-4">
        <AlertTriangle className="w-7 h-7 text-orange-400" />
        <div>
          <span className="font-semibold text-orange-300">Disclaimer:</span> The wallets listed here are primarily developed and maintained by independent teams within the Ergo community. Always download software from official sources linked here and practice strong security habits (like safeguarding your seed phrase). This information is for guidance only; conduct your own research before entrusting funds to any wallet.
        </div>
      </div>
      {/* How to Choose */}
      <div>
        <h2 className="text-2xl font-bold mb-5 flex items-center gap-2"><Info className="w-6 h-6 text-cyan-400" /> How to Choose a Wallet?</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3 bg-neutral-900/50 rounded-xl p-4">
            <Smartphone className="w-9 h-9 text-orange-400 mt-2" />
            <div>
              <div className="font-bold text-orange-300 mb-1">Mobile Use</div>
              <div className="text-gray-300 text-sm">If you need access to your funds primarily on your smartphone (iOS or Android), look at <span className="text-orange-300 font-semibold">Mobile Wallets</span>.</div>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-neutral-900/50 rounded-xl p-4">
            <Monitor className="w-9 h-9 text-green-400 mt-2" />
            <div>
              <div className="font-bold text-green-300 mb-1">Desktop Management</div>
              <div className="text-gray-300 text-sm">If you prefer managing funds on your computer (Windows, macOS, Linux), check out <span className="text-green-300 font-semibold">Desktop Wallets</span>.</div>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-neutral-900/50 rounded-xl p-4">
            <Globe className="w-9 h-9 text-cyan-400 mt-2" />
            <div>
              <div className="font-bold text-cyan-300 mb-1">dApp Interaction</div>
              <div className="text-gray-300 text-sm">If you plan to frequently interact with Ergo dApps directly through your web browser, a <span className="text-cyan-300 font-semibold">Browser Extension Wallet</span> is often the most convenient.</div>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-neutral-900/50 rounded-xl p-4">
            <Lock className="w-9 h-9 text-neutral-400 mt-2" />
            <div>
              <div className="font-bold text-neutral-300 mb-1">Maximum Security / Long-Term Storage</div>
              <div className="text-gray-300 text-sm">For storing significant amounts of ERG or holding funds offline ("cold storage"), consider a <span className="text-neutral-300 font-semibold">Paper Wallet</span> or the offline/cold wallet features available in some mobile/desktop wallets.</div>
            </div>
          </div>
        </div>
      </div>
      {/* Wallet Tabs by Type */}
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Star className="w-6 h-6 text-orange-400" /> Recommended Wallets by Type</h2>
        <Tabs value={tab} onValueChange={setTab} className="w-full">
          <TabsList className="grid grid-cols-6 w-full mb-6 bg-neutral-900/50 border border-neutral-700/50">
            {walletTypes.map((t) => (
              <TabsTrigger key={t.key} value={t.key} className="flex items-center gap-2 justify-center">
                {t.icon} {t.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {walletTypes.map((t) => (
            <TabsContent key={t.key} value={t.key}>
              <div className="grid md:grid-cols-2 gap-6">
                {wallets.filter(w => t.key === "all" || w.type === t.key).map((w) => (
                  <div key={w.name} className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6 flex flex-col gap-2 shadow-md">
                    <div className="flex items-center gap-3 mb-2">
                      {w.icon}
                      <span className="font-bold text-lg bg-gradient-to-r from-orange-300 to-cyan-300 bg-clip-text text-transparent">{w.name}</span>
                    </div>
                    <div className="text-gray-400 text-sm mb-1">{w.description}</div>
                    <div className="text-gray-300 text-xs mb-1"><b>Best For:</b> {w.bestFor}</div>
                    <div className="flex flex-wrap gap-2 text-xs text-gray-400 mb-2">
                      <span className="bg-neutral-800 px-2 py-1 rounded">{w.type}</span>
                      <span className="bg-neutral-800 px-2 py-1 rounded">{w.platforms}</span>
                      <span className="bg-neutral-800 px-2 py-1 rounded">{w.feature}</span>
                    </div>
                    <a href={w.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-orange-300 hover:text-orange-200 text-xs font-semibold underline mt-auto"><ExternalLink className="w-4 h-4 mr-1" /> Official Site</a>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      {/* Quick Comparison Table */}
      <div>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><BookOpen className="w-6 h-6 text-cyan-400" /> Quick Comparison Table</h2>
        <div className="overflow-x-auto rounded-xl border border-neutral-800">
          <table className="min-w-full text-sm text-gray-300">
            <thead>
              <tr className="bg-neutral-900/70">
                <th className="px-4 py-2 text-left">Wallet Type</th>
                <th className="px-4 py-2 text-left">Platform(s)</th>
                <th className="px-4 py-2 text-left">Ease of Use</th>
                <th className="px-4 py-2 text-left">Connects to dApps?</th>
                <th className="px-4 py-2 text-left">Good for Cold Storage?</th>
                <th className="px-4 py-2 text-left">Key Feature</th>
              </tr>
            </thead>
            <tbody>
              {wallets.map((w) => (
                <tr key={w.name} className="border-b border-neutral-800 last:border-b-0">
                  <td className="px-4 py-2">{w.name}</td>
                  <td className="px-4 py-2">{w.platforms}</td>
                  <td className="px-4 py-2">{w.ease}</td>
                  <td className="px-4 py-2">{w.dapps}</td>
                  <td className="px-4 py-2">{w.cold}</td>
                  <td className="px-4 py-2">{w.feature}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Advanced Feature Comparison */}
      <div>
        <button onClick={() => setShowAdvanced((v) => !v)} className="flex items-center gap-2 text-orange-300 font-semibold mt-4 mb-2 hover:underline">
          {showAdvanced ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />} Advanced Feature Comparison (Expand)
        </button>
        {showAdvanced && (
          <div className="overflow-x-auto rounded-xl border border-neutral-800 mt-2">
            <table className="min-w-full text-xs text-gray-300">
              <thead>
                <tr className="bg-neutral-900/70">
                  <th className="px-3 py-2">Feature</th>
                  <th className="px-3 py-2">Satergo</th>
                  <th className="px-3 py-2">Nautilus</th>
                  <th className="px-3 py-2">Terminus</th>
                  <th className="px-3 py-2">Minotaur</th>
                  <th className="px-3 py-2">SafeW</th>
                  <th className="px-3 py-2">Node Wallet</th>
                  <th className="px-3 py-2">Paper Wallet</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["TX history", "✅", "✅", "✅", "✅", "✅", "✅", "❌"],
                  ["Configure node", "✅", "✅", "✅", "❌", "✅", "✅", "❌"],
                  ["Configure explorer", "✅", "✅", "✅", "❌", "✅", "✅", "❌"],
                  ["View-only wallet", "❌", "✅", "✅", "✅", "✅", "✅", "❌"],
                  ["ErgoPay (EIP-0020)", "✅", "❌", "✅", "✅", "✅", "✅", "❌"],
                  ["Input address selection", "✅", "❌", "✅", "✅", "TBC", "✅", "❌"],
                  ["Address management", "✅", "❌", "✅", "✅", "❌", "✅", "❌"],
                  ["Chained TXs", "❌", "✅", "✅", "❌", "✅", "✅", "❌"],
                  ["Many price currencies", "✅", "✅", "✅", "❌", "❌", "❌", "❌"],
                  ["NFT viewing", "❌", "✅", "✅", "❌", "TBC", "❌", "❌"],
                  ["Token prices", "❌", "✅", "✅", "❌", "✅", "❌", "❌"],
                  ["Babel fees", "❌", "✅", "✅", "❌", "TBC", "✅", "❌"],
                  ["Independent software", "✅", "❌", "✅", "✅", "❌", "✅", "✅"],
                  ["Website dApps", "❌", "✅", "❌", "❌", "✅", "❌", "❌"],
                  ["Ledger", "❌", "✅", "❌", "❌", "✅", "❌", "❌"],
                  ["Many price sources", "✅", "❌", "❌", "❌", "❌", "❌", "❌"],
                  ["Mixer integration", "❌", "❌", "❌", "❌", "✅", "❌", "❌"],
                  ["TX history export", "❌", "❌", "❌", "❌", "✅", "❌", "❌"],
                  ["Multi-sig", "❌", "❌", "❌", "✅", "❌", "✅", "❌"],
                  ["Mnemonic password", "✅", "❌", "❌", "✅", "❌", "✅", "❌"],
                  ["Full node", "✅", "❌", "❌", "❌", "❌", "✅", "❌"],
                  ["Add address at index", "✅", "❌", "❌", "❌", "❌", "✅", "❌"],
                  ["Anti address reuse", "❌", "✅", "❌", "❌", "TBC", "❌", "❌"],
                  ["Sending to stealth addresses", "✅", "TBC", "TBC", "TBC", "TBC", "✅", "❌"],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-neutral-800 last:border-b-0">
                    {row.map((cell, j) => (
                      <td key={j} className="px-3 py-2 text-center">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      {/* Yoroi Recovery */}
      <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-5 flex items-center gap-4">
        <AlertTriangle className="w-7 h-7 text-orange-400" />
        <div>
          <span className="font-semibold text-orange-300">Funds stuck in Yoroi?</span> Yoroi wallet no longer supports Ergo. If you have funds in an old Yoroi Ergo wallet and know the password, you might be able to use this <a href="https://ergowallet.io/yoroi-recovery" className="text-orange-300 underline hover:text-orange-200" target="_blank" rel="noopener noreferrer">community recovery tool</a> to send funds to a new Ergo wallet. Alternatively, check the <a href="https://ergoplatform.org/en/blog/access-issues-guide/" className="text-orange-300 underline hover:text-orange-200" target="_blank" rel="noopener noreferrer">access issues guide</a> for other troubleshooting tips.
        </div>
      </div>
      {/* Additional Resources */}
      <div>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><FileText className="w-6 h-6 text-cyan-400" /> Additional Resources</h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li><a href="https://ergoplatform.org/en/wallets/" className="text-orange-300 underline hover:text-orange-200" target="_blank" rel="noopener noreferrer">PDF Guide: Ergo Wallet Wonderland: Exploring the Best Wallet for Your Needs</a> <span className="text-xs text-gray-400">(May require update)</span></li>
          <li><a href="https://github.com/ergoplatform/ergo-ios" className="text-orange-300 underline hover:text-orange-200" target="_blank" rel="noopener noreferrer">Developer: SwiftAPI for iOS Wallet Dev</a></li>
          <li><a href="https://github.com/anon-real/ergo-light-client" className="text-orange-300 underline hover:text-orange-200" target="_blank" rel="noopener noreferrer">Community Project: Ergo Light Client (iOS Beta)</a> <span className="text-xs text-gray-400">(Requires a full node)</span></li>
        </ul>
      </div>
    </div>
  );
} 