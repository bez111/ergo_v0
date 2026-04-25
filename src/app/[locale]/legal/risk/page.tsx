import type { Metadata } from "next"
import { getAlternates, getCanonicalUrl } from "@/lib/seo"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return {
    title: "Risk Disclosure | Ergo Platform",
    description: "Risks of using cryptocurrency, mining, DeFi, and the Ergo blockchain. Read before participating.",
    alternates: getAlternates("/legal/risk", locale),
    openGraph: {
      type: "article",
      url: getCanonicalUrl("/legal/risk", locale),
      siteName: "Ergo Platform",
      title: "Risk Disclosure | Ergo Platform",
    },
    robots: { index: true, follow: true },
  }
}

const LAST_UPDATED = "2026-04-25"

export default function RiskPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <header className="mb-10">
          <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Risk Disclosure</h1>
          <p className="text-neutral-400 text-sm">Last updated: {LAST_UPDATED}</p>
        </header>

        <div className="space-y-6 text-neutral-300 leading-relaxed">
          <div className="p-5 rounded-2xl border border-red-500/30 bg-red-500/5">
            <p className="font-bold text-red-300 mb-2">Cryptocurrency carries real risks of total loss.</p>
            <p className="text-sm text-red-200/80">
              Read this page before buying ERG, mining, or interacting with any DeFi protocol on Ergo.
              Information on this Site is educational, not advice. You alone bear the consequences of your decisions.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-3">1. Market Risk</h2>
            <p>
              ERG and other cryptocurrencies are highly volatile. Prices can drop 50%+ in a day or 90%+ over months.
              Past performance is not indicative of future results. You may lose all funds invested.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-3">2. Custody Risk</h2>
            <p>
              You are responsible for securing your own wallet. There is no password recovery for self-custody wallets.
              If you lose your seed phrase, your funds are gone permanently. If a thief obtains your seed phrase, your funds will be stolen.
              Phishing sites impersonate real wallets — always verify URLs before connecting.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-3">3. Smart Contract Risk</h2>
            <p>
              Smart contracts (DeFi protocols, dApps, bridges, NFT marketplaces) can have bugs.
              Even audited contracts have been exploited. Some Ergo ecosystem projects are unaudited or experimental.
              Read project documentation before depositing funds. Start with small amounts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-3">4. Mining Risk</h2>
            <p>
              Mining profitability is not guaranteed. It depends on:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Network hashrate (the more miners, the lower your share)</li>
              <li>ERG market price</li>
              <li>Your local electricity costs</li>
              <li>Hardware costs and depreciation</li>
              <li>Pool fees and difficulty adjustments</li>
            </ul>
            <p className="mt-3">
              Mining calculator results on this Site are <strong>estimates only</strong>, based on current network conditions.
              Real earnings will differ. You may operate at a loss.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-3">5. Bridge Risk</h2>
            <p>
              Cross-chain bridges (such as Rosen Bridge) introduce additional trust assumptions and have historically been targets of major exploits across the industry.
              Bridge funds at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-3">6. Regulatory Risk</h2>
            <p>
              Cryptocurrency regulations vary by country and change frequently.
              Mining, holding, or trading ERG may have tax implications, reporting requirements, or be restricted in your jurisdiction.
              Consult a qualified tax and legal advisor in your country.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-3">7. Protocol Risk</h2>
            <p>
              The Ergo protocol is open-source and maintained by community contributors. Like any software, it can have undiscovered bugs.
              Hard forks, soft forks, or major upgrades may affect existing tokens, contracts, or applications.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-3">8. Experimental Projects</h2>
            <p>
              Some projects discussed on this Site (such as ChainCash, certain agent economy primitives, or research initiatives) are <strong>experimental prototypes</strong>.
              They are not production-ready and may have bugs, missing features, or undergo breaking changes.
              Treat them as research code unless explicitly marked as production / mainnet-released.
            </p>
          </section>

          <section className="mt-10 p-5 rounded-2xl border border-orange-500/30 bg-orange-500/5">
            <p className="text-orange-200/90 text-sm">
              <strong>By using this Site or the Ergo protocol, you acknowledge these risks and accept full responsibility for your decisions.</strong>
            </p>
          </section>
        </div>
      </article>
    </main>
  )
}
