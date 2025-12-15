"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */

import React from "react";
import {
  Wallet,
  Smartphone,
  Monitor,
  Globe,
  Shield,
  FileText,
  Server,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Info,
  ExternalLink,
  Download,
  Lock,
  Users,
  Zap,
  Database,
  Code,
  Smartphone as Mobile,
  Monitor as Desktop,
  Globe as Browser,
  Shield as Security,
  BookOpen
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function WalletsPage() {
  return (
    <div className="min-h-screen text-white bg-black">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4">
          Choosing an Ergo Wallet
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          An overview of recommended Ergo wallets for different platforms and use cases, including mobile, desktop, browser extensions, and cold storage.
        </p>
        <div className="flex flex-wrap gap-4 mb-6">
          <Link
            href="/docs/developers/infrastructure"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path></svg>
            Back to Infrastructure
          </Link>
          <Link
            href="/docs/developers/infrastructure/wallets/multisig"
            className="inline-flex items-center px-6 py-3 bg-cyan-700 rounded-xl font-semibold text-white hover:bg-cyan-800 transition-transform hover:scale-105"
          >
            <Shield className="w-5 h-5 mr-2" />
            What is Multisig?
          </Link>
          <Link
            href="/docs/developers/infrastructure/wallets/access-issues"
            className="inline-flex items-center px-6 py-3 bg-yellow-600 rounded-xl font-semibold text-black hover:bg-yellow-700 transition-transform hover:scale-105"
          >
            <AlertTriangle className="w-5 h-5 mr-2" />
            Access Issues
          </Link>
        </div>
      </div>

      {/* Warning Disclaimer */}
      <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">Disclaimer</h3>
            <p className="text-gray-300">
              The wallets listed here are primarily developed and maintained by independent teams within the Ergo community. Always download software from official sources linked here and practice strong security habits (like safeguarding your seed phrase). This information is for guidance only; conduct your own research before entrusting funds to any wallet.
            </p>
          </div>
        </div>
      </div>

      {/* Accordion Section */}
      <Accordion type="single" collapsible className="mb-12">
        {/* Mobile Wallets */}
        <AccordionItem value="mobile-wallets">
          <AccordionTrigger>
            <span className="flex items-center gap-2 text-green-400"><Mobile className="w-5 h-5" /> Mobile Wallets (iOS & Android)</span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-300 mb-3">Ergo Mobile Wallet (Terminus on iOS)</h3>
                <p className="text-gray-300 mb-4">
                  A user-friendly, feature-rich mobile wallet. Supports ERG, tokens, NFTs, creating offline ("cold") wallets, and ErgoPay QR code scanning. A community favorite.
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-300">Best For: Everyday mobile use, managing diverse assets, easy payments</span>
                </div>
                <div className="flex flex-wrap gap-3 mt-2">
                  <a
                    href="https://play.google.com/store/apps/details?id=org.ergoplatform.android"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-green-600 rounded-lg text-white hover:bg-green-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Google Play
                  </a>
                  <a
                    href="https://apps.apple.com/us/app/terminus-wallet-ergo/id1643137927"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-green-600 rounded-lg text-white hover:bg-green-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    App Store
                  </a>
                </div>
              </div>
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-300 mb-3">Minotaur Wallet</h3>
                <p className="text-gray-300 mb-4">
                  Offers advanced features like multi-signature capabilities (requiring multiple approvals for transactions).
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-300">Best For: Users needing shared fund control or enhanced security via multi-sig</span>
                </div>
                <Link
                  href="/docs/developers/infrastructure/wallets/minotaur"
                  className="inline-flex items-center px-4 py-2 bg-green-600 rounded-lg text-white hover:bg-green-700 transition-colors"
                >
                  <Info className="w-4 h-4 mr-2" />
                  Learn More
                </Link>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Browser Extension Wallets */}
        <AccordionItem value="browser-wallets">
          <AccordionTrigger>
            <span className="flex items-center gap-2 text-purple-400"><Browser className="w-5 h-5" /> Browser Extension Wallets</span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-purple-300 mb-3">Nautilus Wallet</h3>
              <p className="text-gray-300 mb-4">
                A very popular browser extension wallet (similar to MetaMask). Enables seamless connection to Ergo dApps. Manages ERG, tokens, and NFTs. Includes privacy features and transaction optimization.
              </p>
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-300">Best For: Users frequently interacting with DeFi, NFT marketplaces, and other web-based Ergo applications</span>
              </div>
              <Link
                href="/docs/developers/infrastructure/wallets/nautilus"
                className="inline-flex items-center px-4 py-2 bg-purple-600 rounded-lg text-white hover:bg-purple-700 transition-colors"
              >
                <Info className="w-4 h-4 mr-2" />
                Learn More
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Desktop Wallets */}
        <AccordionItem value="desktop-wallets">
          <AccordionTrigger>
            <span className="flex items-center gap-2 text-blue-400"><Desktop className="w-5 h-5" /> Desktop Wallets</span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-300 mb-3">Satergo Wallet</h3>
                <p className="text-gray-300 mb-4">
                  A desktop wallet specifically designed to run alongside a full Ergo Node. Provides a user-friendly interface for managing funds while contributing to network decentralization.
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-300">Best For: Users who want to run their own full node for maximum trust and verification</span>
                </div>
                <Link
                  href="/docs/developers/infrastructure/wallets/satergo"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition-colors"
                >
                  <Info className="w-4 h-4 mr-2" />
                  Learn More
                </Link>
              </div>
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-300 mb-3">Node Wallet (Core)</h3>
                <p className="text-gray-300 mb-4">
                  The basic wallet functionality built into the core Ergo reference node software. Accessed via command line or API.
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-300">Best For: Developers or advanced users comfortable with command-line interfaces</span>
                </div>
                <Link
                  href="https://github.com/ergoplatform/ergo"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition-colors"
                >
                  <Server className="w-4 h-4 mr-2" />
                  Node Setup
                </Link>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Other Wallet Types */}
        <AccordionItem value="other-wallets">
          <AccordionTrigger>
            <span className="flex items-center gap-2 text-orange-400"><Shield className="w-5 h-5" /> Other Wallet Types</span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-orange-300 mb-3">SAFEW Wallet</h3>
                <p className="text-gray-300 mb-4">
                  A web-based wallet (accessed via a website, requires careful URL verification). Offers advanced features like ErgoMixer integration (for enhanced privacy) and developer tools.
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-300">Best For: Experienced users needing specific features like mixing or advanced transaction control</span>
                </div>
                <Link
                  href="/docs/developers/infrastructure/wallets/safew"
                  className="inline-flex items-center px-4 py-2 bg-orange-600 rounded-lg text-white hover:bg-orange-700 transition-colors"
                >
                  <Info className="w-4 h-4 mr-2" />
                  Learn More
                </Link>
              </div>
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-orange-300 mb-3">Ergo Paper Wallet</h3>
                <p className="text-gray-300 mb-4">
                  A method to generate wallet keys offline and print them on paper (or save securely offline). Provides maximum security from online threats.
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-300">Best For: Long-term "cold storage" of significant amounts, gifting ERG</span>
                </div>
                <Link
                  href="/docs/developers/infrastructure/wallets/paper-wallet"
                  className="inline-flex items-center px-4 py-2 bg-orange-600 rounded-lg text-white hover:bg-orange-700 transition-colors"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Generate
                </Link>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Quick Comparison Table */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
          <Database className="w-6 h-6 mr-3" />
          Quick Comparison Table
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-600">
                <th className="text-left py-3 px-4 text-cyan-300">Wallet Type</th>
                <th className="text-left py-3 px-4 text-cyan-300">Platform(s)</th>
                <th className="text-left py-3 px-4 text-cyan-300">Ease of Use</th>
                <th className="text-left py-3 px-4 text-cyan-300">dApp Connection</th>
                <th className="text-left py-3 px-4 text-cyan-300">Cold Storage</th>
                <th className="text-left py-3 px-4 text-cyan-300">Key Feature</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-neutral-700">
                <td className="py-3 px-4 text-green-300">Ergo Mobile / Terminus</td>
                <td className="py-3 px-4 text-gray-300">iOS, Android</td>
                <td className="py-3 px-4 text-gray-300">High</td>
                <td className="py-3 px-4 text-gray-300">Limited (ErgoPay)</td>
                <td className="py-3 px-4 text-green-400">✅ Yes</td>
                <td className="py-3 px-4 text-gray-300">Convenient mobile use, NFT support</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-3 px-4 text-purple-300">Nautilus</td>
                <td className="py-3 px-4 text-gray-300">Browser Extension</td>
                <td className="py-3 px-4 text-gray-300">Medium</td>
                <td className="py-3 px-4 text-green-400">✅ Yes</td>
                <td className="py-3 px-4 text-red-400">❌ No</td>
                <td className="py-3 px-4 text-gray-300">Seamless dApp interaction, popular</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-3 px-4 text-blue-300">Satergo</td>
                <td className="py-3 px-4 text-gray-300">Desktop (Win/Mac/Lin)</td>
                <td className="py-3 px-4 text-gray-300">Medium</td>
                <td className="py-3 px-4 text-red-400">❌ No</td>
                <td className="py-3 px-4 text-green-400">✅ Yes</td>
                <td className="py-3 px-4 text-gray-300">User-friendly full node wallet</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-3 px-4 text-orange-300">SAFEW</td>
                <td className="py-3 px-4 text-gray-300">Web</td>
                <td className="py-3 px-4 text-gray-300">Medium-Low</td>
                <td className="py-3 px-4 text-green-400">✅ Yes</td>
                <td className="py-3 px-4 text-red-400">❌ No</td>
                <td className="py-3 px-4 text-gray-300">Advanced features, Mixer access</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-3 px-4 text-green-300">Minotaur</td>
                <td className="py-3 px-4 text-gray-300">Mobile</td>
                <td className="py-3 px-4 text-gray-300">Medium-Low</td>
                <td className="py-3 px-4 text-gray-300">Limited (ErgoPay)</td>
                <td className="py-3 px-4 text-green-400">✅ Yes</td>
                <td className="py-3 px-4 text-gray-300">Multi-signature security</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-3 px-4 text-orange-300">Paper Wallet</td>
                <td className="py-3 px-4 text-gray-300">Offline Generation</td>
                <td className="py-3 px-4 text-gray-300">N/A</td>
                <td className="py-3 px-4 text-red-400">❌ No</td>
                <td className="py-3 px-4 text-green-400">✅ Yes</td>
                <td className="py-3 px-4 text-gray-300">Maximum security for long-term holding</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-blue-300">Node Wallet (Core)</td>
                <td className="py-3 px-4 text-gray-300">Desktop (Win/Mac/Lin)</td>
                <td className="py-3 px-4 text-gray-300">Low</td>
                <td className="py-3 px-4 text-red-400">❌ No</td>
                <td className="py-3 px-4 text-green-400">✅ Yes</td>
                <td className="py-3 px-4 text-gray-300">Integrated with core node (Advanced users)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Wallet Standards Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
          <BookOpen className="w-6 h-6 mr-3" />
          Wallet Standards
        </h2>
        <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 flex flex-col items-start">
          <p className="text-gray-300 mb-4">Explore technical standards for Ergo wallets, APIs, and integrations.</p>
          <Link
            href="/docs/developers/infrastructure/wallets/standards"
            className="inline-flex items-center px-6 py-3 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105 mb-2"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            View Wallet Standards
          </Link>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center">
          <BookOpen className="w-6 h-6 mr-3" />
          Additional Resources
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
              <div>
                <strong>PDF Guide:</strong> <a href="./Ergo_Wallet_Wonderland_Exploring_Wallets__Needs.pdf" className="text-blue-400 hover:underline">Ergo Wallet Wonderland: Exploring the Best Wallet for Your Needs</a> (May require update)
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Code className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
              <div>
                <strong>Developer:</strong> <a href="https://github.com/ergoplatform/sigma-rust/blob/31aa0922d03f632d22fdc348b2604d23ed296586/bindings/ergo-wallet-ios/Sources/ErgoWallet/ErgoWallet.swift" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">SwiftAPI for iOS Wallet Dev</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Users className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
              <div>
                <strong>Community Project:</strong> <a href="https://github.com/bjenkinsgit/ErgoIOSLiteClient.git" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Light Client (iOS Beta)</a> (Requires a full node)
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Yoroi Warning */}
      <div className="mb-12">
        <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-red-400 mb-2">Funds stuck in Yoroi?</h3>
              <p className="text-gray-300 mb-4">
                Yoroi wallet no longer supports Ergo. If you have funds in an old Yoroi Ergo wallet and know the password, you might be able to use <a href="https://github.com/satsen/yoroi-ergo-wallet-recover" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">this community recovery tool</a> to send funds to a new Ergo wallet.
              </p>
              <Link
                href="/docs/developers/infrastructure/wallets/access-issues"
                className="inline-flex items-center px-4 py-2 bg-red-600 rounded-lg text-white hover:bg-red-700 transition-colors"
              >
                <Info className="w-4 h-4 mr-2" />
                Troubleshooting Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 