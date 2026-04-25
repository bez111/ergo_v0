import type { Metadata } from "next"
import { getAlternates, getCanonicalUrl } from "@/lib/seo"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return {
    title: "Terms of Use | Ergo Platform",
    description: "Terms of use for ergoblockchain.org. Informational site, no financial advice, no warranty.",
    alternates: getAlternates("/legal/terms", locale),
    openGraph: {
      type: "article",
      url: getCanonicalUrl("/legal/terms", locale),
      siteName: "Ergo Platform",
      title: "Terms of Use | Ergo Platform",
    },
    robots: { index: true, follow: true },
  }
}

const LAST_UPDATED = "2026-04-25"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <header className="mb-10">
          <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Terms of Use</h1>
          <p className="text-neutral-400 text-sm">Last updated: {LAST_UPDATED}</p>
        </header>

        <div className="prose prose-invert max-w-none space-y-6 text-neutral-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-3">1. About This Site</h2>
            <p>
              ergoblockchain.org is an informational and educational website about the open-source Ergo blockchain protocol.
              The Site is operated by community contributors. The Site is not a financial service provider, exchange, custodian, or investment advisor.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-3">2. No Financial Advice</h2>
            <p>
              <strong>Nothing on this Site constitutes financial, investment, tax, or legal advice.</strong>
              Information about ERG, mining, DeFi, NFTs, or other topics is provided for educational purposes only.
              You are solely responsible for your own decisions. Cryptocurrency markets are volatile and risky — see our{" "}
              <a href="/legal/risk" className="text-orange-400 hover:underline">Risk Disclosure</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-3">3. Third-Party Links and Software</h2>
            <p>
              The Site links to third-party wallets, exchanges, dApps, and other tools.
              We do not control these third parties and are not responsible for their actions, security, or content.
              Always verify URLs before connecting wallets, and use only software you trust.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-3">4. No Warranty</h2>
            <p>
              The Site is provided &quot;as is&quot; without warranty of any kind, express or implied.
              We do not warrant that the Site will be uninterrupted, error-free, or that information is accurate or current.
              Mining calculator results, ecosystem project descriptions, and similar tools are estimates only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-3">5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, the Site operators are not liable for any direct, indirect, incidental, or consequential damages
              arising from your use of the Site, the Ergo protocol, third-party software, or any decisions you make based on information found here.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-3">6. Open-Source Content</h2>
            <p>
              Most code samples, documentation, and articles on the Site are released under open-source licenses (typically MIT or CC-BY).
              Source repository:{" "}
              <a href="https://github.com/ergoplatform" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">github.com/ergoplatform</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-3">7. Changes</h2>
            <p>We may update these Terms. The &quot;Last updated&quot; date at the top reflects the current version.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-3">8. Contact</h2>
            <p>
              Questions about these Terms: see our{" "}
              <a href="/legal/security" className="text-orange-400 hover:underline">Security &amp; Contact</a> page.
            </p>
          </section>
        </div>
      </article>
    </main>
  )
}
