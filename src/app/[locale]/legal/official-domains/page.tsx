import type { Metadata } from "next"
import { getAlternates, getCanonicalUrl } from "@/lib/seo"
import { ShieldCheck, AlertTriangle, ExternalLink, Github, MessagesSquare, Globe } from "lucide-react"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return {
    title: "Official Domains & Verification | Ergo Platform",
    description: "Authoritative list of official Ergo domains, GitHub orgs, wallets and social accounts. Use this page to verify a link before clicking, and to spot phishing impersonators.",
    alternates: getAlternates("/legal/official-domains", locale),
    openGraph: {
      type: "article",
      url: getCanonicalUrl("/legal/official-domains", locale),
      siteName: "Ergo Platform",
      title: "Official Domains & Verification",
    },
    robots: { index: true, follow: true },
  }
}

const LAST_REVIEWED = "2026-05-08"

const websites = [
  { url: "https://www.ergoblockchain.org", role: "This site — current marketing & docs front for Ergo." },
  { url: "https://ergoplatform.org", role: "Historical Ergo Foundation site (still active for older blog posts and the 2019 audit write-up)." },
  { url: "https://www.ergoforum.org", role: "Community forum for proposals, EIPs and long-form discussion." },
  { url: "https://docs.ergoplatform.com", role: "Long-form developer docs (gitbook)." },
]

const githubOrgs = [
  { url: "https://github.com/ergoplatform", role: "Canonical org for the Ergo node, sigma-rust, sigma-state, Fleet SDK, AppKit." },
  { url: "https://github.com/accord-protocol/accord-protocol", role: "Accord Protocol (testnet beta) — agreement protocol & SDKs." },
  { url: "https://github.com/chainCashLabs", role: "ChainCash open-source prototype (Reserve + Note + Tracker)." },
]

const wallets = [
  { name: "Nautilus Wallet", url: "https://nautilus-wallet.io", note: "Browser extension. Verify the Chrome Web Store listing matches `nautilus-wallet.io` before installing." },
  { name: "Satergo", url: "https://satergo.com", note: "Desktop wallet. Releases on github.com/Satergo/Satergo only." },
  { name: "SAFEW", url: "https://safew.org", note: "Browser & desktop wallet. Verify the source URL before installing — web wallets carry phishing risk." },
  { name: "Ledger (Ergo app)", url: "https://www.ledger.com", note: "Hardware. Only install via Ledger Live." },
  { name: "Ergo mobile (Android / iOS)", url: "https://github.com/ergoplatform/ergo-wallet-app", note: "Official mobile wallet. Use the app store links from the linked README only." },
]

const socials = [
  { label: "X / Twitter", url: "https://x.com/ergo_platform", role: "Official platform account." },
  { label: "Discord", url: "https://discord.gg/ergo-platform-668903786361651200", role: "Community + dev rooms." },
  { label: "Telegram", url: "https://t.me/Ergo_Chat", role: "Community chat (read announcements channel for verified posts)." },
  { label: "Reddit", url: "https://www.reddit.com/r/ergonauts/", role: "Community subreddit." },
]

const securityChannels = [
  { label: "security.txt", url: "/.well-known/security.txt", role: "RFC 9116 contacts." },
  { label: "Responsible disclosure policy", url: "/legal/security", role: "Scope, timeline, acknowledgments." },
  { label: "GitHub Security Advisories", url: "https://github.com/ergoplatform/ergo/security/advisories", role: "Coordinated published advisories appear here." },
]

function LinkRow({ url, label, role }: { url: string; label?: string; role: string }) {
  const isExternal = url.startsWith("http")
  return (
    <li className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 py-2 border-b border-neutral-800 last:border-b-0">
      <a
        href={url}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="text-orange-400 hover:text-orange-300 underline underline-offset-2 font-mono text-sm sm:w-72 shrink-0 break-all"
      >
        {label ?? url}
      </a>
      <span className="text-sm text-neutral-300">{role}</span>
    </li>
  )
}

export default function OfficialDomainsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <header className="mb-10">
          <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-3">Trust &amp; Safety</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Official Domains &amp; Verification</h1>
          <p className="text-neutral-400 max-w-2xl">
            Authoritative list of the domains, GitHub orgs, wallets and
            social accounts we treat as official. If a link claims to be
            &quot;Ergo&quot; and isn&apos;t on this page, treat it with the suspicion
            you&apos;d give any unsolicited crypto link.
          </p>
          <p className="text-neutral-500 text-xs mt-3 font-mono">Last reviewed: {LAST_REVIEWED}</p>
        </header>

        {/* Anti-phishing primer */}
        <section className="mb-10 rounded-2xl border border-yellow-500/30 bg-yellow-500/5 p-5">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" aria-hidden="true" />
            <div className="text-sm text-yellow-100/90 leading-relaxed">
              <p className="font-semibold text-yellow-200 mb-1">Anti-phishing — read first</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>We will <strong>never</strong> DM you a wallet, &quot;airdrop link&quot; or &quot;recovery&quot; URL.</li>
                <li>We will <strong>never</strong> ask for your seed phrase, mnemonic, or private key. No wallet ever needs it.</li>
                <li>Hover before you click. Sites with <code className="px-1 py-0.5 bg-black/30 rounded text-xs">ergo</code> in the name that aren&apos;t below — including any &quot;ergo-platform.io&quot;, &quot;ergoblockchain.app&quot;, &quot;ergodex.app&quot; — are not us.</li>
                <li>For Chrome / Firefox extensions, install only via the link rows in the &quot;Wallets&quot; section below.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Websites */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
            <Globe className="w-5 h-5 text-orange-400" aria-hidden="true" /> Websites
          </h2>
          <ul className="rounded-xl border border-neutral-800 bg-neutral-900/40 px-4 py-1">
            {websites.map((w) => <LinkRow key={w.url} url={w.url} role={w.role} />)}
          </ul>
        </section>

        {/* GitHub */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
            <Github className="w-5 h-5 text-orange-400" aria-hidden="true" /> GitHub organizations
          </h2>
          <ul className="rounded-xl border border-neutral-800 bg-neutral-900/40 px-4 py-1">
            {githubOrgs.map((g) => <LinkRow key={g.url} url={g.url} role={g.role} />)}
          </ul>
        </section>

        {/* Wallets */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-orange-400" aria-hidden="true" /> Wallets
          </h2>
          <ul className="rounded-xl border border-neutral-800 bg-neutral-900/40 px-4 py-1">
            {wallets.map((w) => <LinkRow key={w.url} url={w.url} label={w.name} role={w.note} />)}
          </ul>
          <p className="text-xs text-neutral-500 mt-3">
            Full wallet registry with maturity, last-verified date and
            warnings: <a href="/wallet" className="text-orange-400 hover:text-orange-300 underline underline-offset-2">/wallet</a>.
          </p>
        </section>

        {/* Socials */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
            <MessagesSquare className="w-5 h-5 text-orange-400" aria-hidden="true" /> Official social accounts
          </h2>
          <ul className="rounded-xl border border-neutral-800 bg-neutral-900/40 px-4 py-1">
            {socials.map((s) => <LinkRow key={s.url} url={s.url} label={s.label} role={s.role} />)}
          </ul>
        </section>

        {/* Security */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
            <ExternalLink className="w-5 h-5 text-orange-400" aria-hidden="true" /> Security channels
          </h2>
          <ul className="rounded-xl border border-neutral-800 bg-neutral-900/40 px-4 py-1">
            {securityChannels.map((s) => <LinkRow key={s.url} url={s.url} label={s.label} role={s.role} />)}
          </ul>
        </section>

        <p className="text-xs text-neutral-500 mt-12">
          See something missing or impersonated? Report via{" "}
          <a href="/legal/security" className="text-orange-400 hover:text-orange-300 underline underline-offset-2">
            responsible disclosure
          </a>{" "}
          and we&apos;ll add a row.
        </p>
      </article>
    </main>
  )
}
