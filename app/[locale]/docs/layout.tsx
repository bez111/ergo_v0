"use client"
import { useState } from "react"
import Link from "next/link"
import { BookOpen, Globe, Code, Pickaxe, Menu } from "lucide-react"
import { usePathname } from "next/navigation"
import NavLink from "@/components/nav-link"
import SidebarMenu from "@/components/SidebarMenu"

const NoIcon = () => null;

const introductionNav = [
  { title: "Why Ergo", href: "/docs/introduction" },
  { title: "Key Features", children: [
    { title: "eUTxO", children: [
      { title: "UTxO vs Account", href: "/docs/introduction/utxo-vs-account" },
      { title: "Atomic Swaps", href: "/docs/introduction/atomic-swaps" },
      { title: "Ergo vs Cardano", href: "/docs/introduction/ergo-vs-cardano" },
      { title: "UTXO State", href: "/docs/introduction/utxo-state" },
    ]},
    { title: "NIPoPoWs", children: [
      { title: "Light Clients", href: "/docs/introduction/light-clients" },
      { title: "Light Miners", href: "/docs/introduction/light-miners" },
      { title: "Sidechains", href: "/docs/introduction/sidechains" },
    ]},
    { title: "Privacy", href: "/docs/introduction/privacy" },
    { title: "Storage Rent", href: "/docs/introduction/storage-rent" },
    { title: "Autolykos", href: "/docs/introduction/autolykos" },
  ]},
  { title: "Research & Whitepapers", children: [
    { title: "Whitepaper", href: "/docs/introduction/whitepaper" },
    { title: "ErgoScript Whitepaper", href: "/docs/introduction/ergoscript-whitepaper" },
    { title: "On Contractual Money", href: "/docs/introduction/on-contractual-money" },
  ]},
  { title: "Roadmap", children: [
    { title: "Scaling", href: "/docs/introduction/scaling" },
    { title: "Layer 0", href: "/docs/introduction/layer-0" },
    { title: "Layer 1", href: "/docs/introduction/layer-1" },
    { title: "Layer 2", href: "/docs/introduction/layer-2" },
    { title: "Discussions", children: [
      { title: "Roadmaps", href: "/docs/introduction/roadmaps" },
      { title: "Transactions Per Second", href: "/docs/introduction/tps" },
      { title: "Atomic Composability", href: "/docs/introduction/atomic-composability" },
    ]},
  ]},
  { title: "Entities", children: [
    { title: "Ergo Foundation", children: [
      { title: "Scope", href: "/docs/introduction/scope" },
      { title: "Treasury", href: "/docs/introduction/treasury" },
      { title: "Votes", href: "/docs/introduction/votes" },
      { title: "Future", href: "/docs/introduction/future" },
    ]},
    { title: "DevDao", href: "/docs/introduction/devdao" },
    { title: "Sigmanauts", href: "/docs/introduction/sigmanauts" },
  ]},
  { title: "Events", children: [
    { title: "Events", href: "/docs/introduction/events" },
  ]},
  { title: "Contribute", children: [
    { title: "Developers", children: [
      { title: "Technical Guidelines", href: "/docs/introduction/guidelines" },
      { title: "Bounties", href: "/docs/introduction/bounties" },
      { title: "Grants", href: "/docs/introduction/grants" },
      { title: "Roles", href: "/docs/introduction/roles" },
    ]},
    { title: "Marketing", href: "/docs/introduction/marketing" },
    { title: "Sigmanauts", href: "/docs/introduction/sigmanauts-contrib" },
    { title: "Contribute to the docs!", href: "/docs/introduction/contribute-docs" },
  ]},
  { title: "Wallets", href: "/docs/introduction/wallets" },
  { title: "Resources", children: [
    { title: "Social Contract", href: "/docs/introduction/social-contract" },
    { title: "Audit", href: "/docs/introduction/audit" },
    { title: "The Howey Test", href: "/docs/introduction/howey-test" },
    { title: "Privacy Guide", href: "/docs/introduction/privacy-guide" },
    { title: "Glossary", href: "/docs/introduction/glossary" },
    { title: "FAQ", href: "/docs/introduction/faq" },
    { title: "Common Misconceptions", href: "/docs/introduction/misconceptions" },
    { title: "A CBDC For All", href: "/docs/introduction/cbdc" },
  ]},
]

const sectionButtons = [
  { key: "introduction", label: "Introduction", icon: BookOpen },
  { key: "ecosystem", label: "Ecosystem", icon: Globe },
  { key: "developers", label: "Developers", icon: Code },
  { key: "miners", label: "Miners", icon: Pickaxe },
]

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="grid lg:grid-cols-[280px_1fr] gap-x-8">
          {/* Sidebar Navigation */}
          <aside className="lg:block hidden fixed lg:relative inset-0 z-40 lg:z-auto">
            <SidebarMenu />
          </aside>
          {/* Main Content */}
          <main className="lg:pl-8">
            <div className="prose prose-invert prose-lg max-w-3xl prose-headings:font-bold prose-headings:text-white prose-a:text-orange-400 prose-a:no-underline hover:prose-a:underline">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
} 