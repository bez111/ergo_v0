import type { Metadata } from "next"
import { getAlternates, getCanonicalUrl, getOgLocale } from "@/lib/seo"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return {
    title: "Editorial Policy | Ergo Platform",
    description: "How content on ergoblockchain.org is created, reviewed, and updated. Authorship, sourcing standards, correction policy, and how to flag inaccuracies.",
    alternates: getAlternates("/legal/editorial", locale),
    openGraph: {
      type: "article",
      url: getCanonicalUrl("/legal/editorial", locale),
      siteName: "Ergo Platform",
      title: "Editorial Policy | Ergo Platform",
      locale: getOgLocale(locale),
    },
    robots: { index: true, follow: true },
  }
}

const LAST_UPDATED = "2026-05-06"

export default function EditorialPolicyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <header className="mb-10">
          <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Editorial Policy</h1>
          <p className="text-neutral-400 text-sm">Last updated: {LAST_UPDATED}</p>
        </header>

        <div className="space-y-6 text-neutral-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-3">1. Who creates this content</h2>
            <p>
              ergoblockchain.org is maintained by open-source contributors to the Ergo Platform.
              The site is not operated by a corporate marketing team or by a paid editorial staff. Contributors
              include core protocol developers, ecosystem builders, technical writers, and community members
              who volunteer their work. The reference Ergo node implementation lives at{" "}
              <a href="https://github.com/ergoplatform/ergo" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">
                github.com/ergoplatform/ergo
              </a>{" "}
              and the website source is open at{" "}
              <a href="https://github.com/bez111/ergo_v0" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">
                github.com/bez111/ergo_v0
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-3">2. Sourcing standards</h2>
            <p>For technical and financial claims we aim to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Link the underlying source (GitHub repository, whitepaper, Ergo Improvement Proposal,
                explorer page, or peer-reviewed paper).
              </li>
              <li>State the date a claim was last verified (especially for live network metrics).</li>
              <li>Avoid absolute superlatives (&quot;the only chain&quot;, &quot;always profitable&quot;) unless backed by a specific, verifiable measurement and methodology.</li>
              <li>
                Distinguish clearly between <strong>protocol features that are live on mainnet</strong> (Ergo node,
                eUTXO, ErgoScript, Babel Fees, Sigma Protocols — live since 2019) and{" "}
                <strong>experimental ecosystem prototypes</strong> (e.g. ChainCash, ergo-agent-pay SDK
                — open-source, unaudited).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-3">3. Review &amp; update cadence</h2>
            <p>
              Site-wide content reviews run at least quarterly. Individual blog posts and technical pages
              show <code className="px-1.5 py-0.5 bg-orange-500/10 text-orange-300 rounded text-sm">datePublished</code> and{" "}
              <code className="px-1.5 py-0.5 bg-orange-500/10 text-orange-300 rounded text-sm">dateModified</code>{" "}
              in their structured data so readers and search engines can see freshness directly.
            </p>
            <p className="mt-3">
              Substantive corrections are added inline with a dated note (&quot;Updated YYYY-MM-DD: …&quot;).
              Typo fixes and link maintenance do not require a notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-3">4. Conflicts of interest</h2>
            <p>
              Contributors who write about specific ecosystem projects, exchanges, wallets, or DeFi protocols
              do so on a volunteer basis. The site does not accept paid placements, sponsored posts, or
              affiliate-linked editorial. Where a contributor is materially involved in a project being
              described, that involvement is disclosed in the post.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-3">5. Not financial advice</h2>
            <p>
              Per the{" "}
              <a href="/legal/terms" className="text-orange-400 hover:underline">Terms of Use</a> and{" "}
              <a href="/legal/risk" className="text-orange-400 hover:underline">Risk Disclosure</a>,
              nothing on this site is financial, legal, tax, or investment advice. Information about wallets,
              mining, DeFi, bridges, and tokens is educational. Decisions are your responsibility.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-3">6. How to report inaccuracies</h2>
            <p>If you find a factual error, an outdated number, or a broken source link, please:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Open an issue on{" "}
                <a href="https://github.com/bez111/ergo_v0/issues" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">
                  GitHub
                </a>{" "}
                describing the page URL and the claim you believe is incorrect.
              </li>
              <li>
                For security-related issues, follow the{" "}
                <a href="/legal/security" className="text-orange-400 hover:underline">responsible disclosure policy</a>.
              </li>
            </ul>
            <p className="mt-3">
              Substantive issues are reviewed within 5 working days. We aim to publish a correction within 10
              working days of confirming an inaccuracy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-3">7. AI and LLM-generated content</h2>
            <p>
              Some site content is drafted with AI assistance and reviewed by human contributors before
              publication. AI-generated drafts are never published without human review. Where a piece relies
              substantially on AI for analysis or generation, that is disclosed at the top of the post.
            </p>
            <p className="mt-3">
              We publish machine-readable summaries at{" "}
              <a href="/llms.txt" className="text-orange-400 hover:underline">/llms.txt</a> and{" "}
              <a href="/llms-full.txt" className="text-orange-400 hover:underline">/llms-full.txt</a>{" "}
              for downstream LLM and agent crawlers. The same sourcing standards apply to that content.
            </p>
          </section>
        </div>
      </article>
    </main>
  )
}
