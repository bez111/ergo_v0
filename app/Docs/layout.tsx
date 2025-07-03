"use client"
import { useState } from "react"
import Link from "next/link"
import { BookOpen, Globe, Code, Pickaxe, Menu } from "lucide-react"
import { usePathname } from "next/navigation"
import NavLink from "@/components/nav-link"
import SidebarMenu from "@/components/SidebarMenu"

const NoIcon = () => null;

const introductionNav = [
  { title: "Why Ergo", href: "/Docs/introduction" },
  { title: "Key Features", children: [
    { title: "eUTxO", children: [
      { title: "UTxO vs Account", href: "/Docs/introduction/utxo-vs-account" },
      { title: "Atomic Swaps", href: "/Docs/introduction/atomic-swaps" },
      { title: "Ergo vs Cardano", href: "/Docs/introduction/ergo-vs-cardano" },
      { title: "UTXO State", href: "/Docs/introduction/utxo-state" },
    ]},
    { title: "NIPoPoWs", children: [
      { title: "Light Clients", href: "/Docs/introduction/light-clients" },
      { title: "Light Miners", href: "/Docs/introduction/light-miners" },
      { title: "Sidechains", href: "/Docs/introduction/sidechains" },
    ]},
    { title: "Privacy", href: "/Docs/introduction/privacy" },
    { title: "Storage Rent", href: "/Docs/introduction/storage-rent" },
    { title: "Autolykos", href: "/Docs/introduction/autolykos" },
  ]},
  { title: "Research & Whitepapers", children: [
    { title: "Whitepaper", href: "/Docs/introduction/whitepaper" },
    { title: "ErgoScript Whitepaper", href: "/Docs/introduction/ergoscript-whitepaper" },
    { title: "On Contractual Money", href: "/Docs/introduction/on-contractual-money" },
  ]},
  { title: "Roadmap", children: [
    { title: "Scaling", href: "/Docs/introduction/scaling" },
    { title: "Layer 0", href: "/Docs/introduction/layer-0" },
    { title: "Layer 1", href: "/Docs/introduction/layer-1" },
    { title: "Layer 2", href: "/Docs/introduction/layer-2" },
    { title: "Discussions", children: [
      { title: "Roadmaps", href: "/Docs/introduction/roadmaps" },
      { title: "Transactions Per Second", href: "/Docs/introduction/tps" },
      { title: "Atomic Composability", href: "/Docs/introduction/atomic-composability" },
    ]},
  ]},
  { title: "Entities", children: [
    { title: "Ergo Foundation", children: [
      { title: "Scope", href: "/Docs/introduction/scope" },
      { title: "Treasury", href: "/Docs/introduction/treasury" },
      { title: "Votes", href: "/Docs/introduction/votes" },
      { title: "Future", href: "/Docs/introduction/future" },
    ]},
    { title: "DevDao", href: "/Docs/introduction/devdao" },
    { title: "Sigmanauts", href: "/Docs/introduction/sigmanauts" },
  ]},
  { title: "Events", children: [
    { title: "Events", href: "/Docs/introduction/events" },
  ]},
  { title: "Contribute", children: [
    { title: "Developers", children: [
      { title: "Technical Guidelines", href: "/Docs/introduction/guidelines" },
      { title: "Bounties", href: "/Docs/introduction/bounties" },
      { title: "Grants", href: "/Docs/introduction/grants" },
      { title: "Roles", href: "/Docs/introduction/roles" },
    ]},
    { title: "Marketing", href: "/Docs/introduction/marketing" },
    { title: "Sigmanauts", href: "/Docs/introduction/sigmanauts-contrib" },
    { title: "Contribute to the docs!", href: "/Docs/introduction/contribute-docs" },
  ]},
  { title: "Wallets", href: "/Docs/introduction/wallets" },
  { title: "Resources", children: [
    { title: "Social Contract", href: "/Docs/introduction/social-contract" },
    { title: "Audit", href: "/Docs/introduction/audit" },
    { title: "The Howey Test", href: "/Docs/introduction/howey-test" },
    { title: "Privacy Guide", href: "/Docs/introduction/privacy-guide" },
    { title: "Glossary", href: "/Docs/introduction/glossary" },
    { title: "FAQ", href: "/Docs/introduction/faq" },
    { title: "Common Misconceptions", href: "/Docs/introduction/misconceptions" },
    { title: "A CBDC For All", href: "/Docs/introduction/cbdc" },
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
  )
} 