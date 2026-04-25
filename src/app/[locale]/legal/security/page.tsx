import type { Metadata } from "next"
import { getAlternates, getCanonicalUrl } from "@/lib/seo"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return {
    title: "Security & Responsible Disclosure | Ergo Platform",
    description: "How to report security vulnerabilities affecting ergoblockchain.org, the Ergo node, or ecosystem. security.txt, contact, and disclosure policy.",
    alternates: getAlternates("/legal/security", locale),
    openGraph: {
      type: "article",
      url: getCanonicalUrl("/legal/security", locale),
      siteName: "Ergo Platform",
      title: "Security & Responsible Disclosure | Ergo Platform",
    },
    robots: { index: true, follow: true },
  }
}

const SECURITY_EMAIL = "security@ergoplatform.org"

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <header className="mb-10">
          <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Security &amp; Responsible Disclosure</h1>
          <p className="text-neutral-400 text-sm">For reporting security vulnerabilities</p>
        </header>

        <div className="space-y-6 text-neutral-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-3">Contact</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${SECURITY_EMAIL}`} className="text-orange-400 hover:underline">{SECURITY_EMAIL}</a>
              </li>
              <li>
                <strong>GitHub Security Advisory:</strong>{" "}
                <a href="https://github.com/ergoplatform/ergo/security/advisories/new" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">
                  Open advisory
                </a>{" "}
                (preferred for protocol-level issues)
              </li>
              <li>
                <strong>security.txt:</strong>{" "}
                <a href="/.well-known/security.txt" className="text-orange-400 hover:underline">/.well-known/security.txt</a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-3">Scope</h2>
            <p>Reports are welcome for issues affecting:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><code className="text-orange-300">ergoblockchain.org</code> — this website</li>
              <li>Ergo node and protocol (<a href="https://github.com/ergoplatform/ergo" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">github.com/ergoplatform/ergo</a>)</li>
              <li>Official Ergo SDKs (Fleet SDK, Sigma Rust, AppKit)</li>
              <li>Official wallets and bridges</li>
            </ul>
            <p className="mt-3">
              For ecosystem projects (DEXes, dApps, NFT platforms), please report directly to the respective project. Contact information is usually in their GitHub or Discord.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-3">What to Include</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Description of the vulnerability</li>
              <li>Steps to reproduce (proof of concept if possible)</li>
              <li>Impact assessment</li>
              <li>Affected versions / URLs</li>
              <li>Your contact information for follow-up</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-3">Responsible Disclosure</h2>
            <p>We ask that you:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Give us reasonable time to investigate and remediate before public disclosure (typically 90 days)</li>
              <li>Do not access, modify, or destroy data that does not belong to you</li>
              <li>Do not perform attacks that could degrade service for other users (DoS, spam, social engineering)</li>
              <li>Do not violate laws in any jurisdiction</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-3">Out of Scope</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Vulnerabilities in third-party services we link to (report to them directly)</li>
              <li>Best-practice findings without demonstrable impact (e.g., missing security headers without exploitation)</li>
              <li>Phishing campaigns impersonating Ergo brands (report to relevant registrars / hosting providers)</li>
              <li>SPF/DMARC/DKIM completeness (handled by email provider)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-3">Bounties</h2>
            <p>
              The Ergo Foundation may award discretionary bounties for high-severity findings.
              Severity is assessed using CVSS v3.1. There is no guaranteed payout — disclose responsibly because it is the right thing to do.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-3">Acknowledgments</h2>
            <p>
              Security researchers who follow this policy are credited (with consent) on{" "}
              <a href="https://github.com/ergoplatform/ergo/security/advisories" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">
                Ergo&apos;s GitHub Security Advisories page
              </a>.
            </p>
          </section>
        </div>
      </article>
    </main>
  )
}
