import type { Metadata } from "next"
import { getAlternates, getCanonicalUrl } from "@/lib/seo"
import { siteConfig } from "@/config/site-config"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return {
    title: "Privacy Policy | Ergo Platform",
    description: "How ergoblockchain.org collects, uses, and protects information. Cookies, analytics, third-party services, and your rights.",
    alternates: getAlternates("/legal/privacy", locale),
    openGraph: {
      type: "article",
      url: getCanonicalUrl("/legal/privacy", locale),
      siteName: "Ergo Platform",
      title: "Privacy Policy | Ergo Platform",
    },
    robots: { index: true, follow: true },
  }
}

const LAST_UPDATED = "2026-04-25"
const CONTACT_EMAIL = "privacy@ergoplatform.org"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <header className="mb-10">
          <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-neutral-400 text-sm">Last updated: {LAST_UPDATED}</p>
        </header>

        <div className="prose prose-invert max-w-none space-y-6 text-neutral-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-3">1. Scope</h2>
            <p>
              This Privacy Policy applies to <a href={siteConfig.siteUrl} className="text-orange-400 hover:underline">{siteConfig.siteUrl}</a> (the &quot;Site&quot;).
              The Site is an informational and educational resource about the open-source Ergo blockchain protocol.
              The Site does not custody funds, does not require user accounts, and is not a financial service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-3">2. Information We Collect</h2>
            <p>The Site collects minimal information:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Analytics:</strong> Anonymous page views, referrer, country, device type via Google Analytics 4 (GA ID: G-S4TR1WWM7Q). IP addresses are anonymized.</li>
              <li><strong>Newsletter:</strong> If you subscribe, your email is stored by our newsletter provider (Beehiiv). You can unsubscribe anytime.</li>
              <li><strong>Server logs:</strong> Hosted by Vercel — standard request logs (IP, user agent, timestamp) retained per Vercel&apos;s policy.</li>
              <li><strong>Cookies:</strong> Functional cookies for locale preference (NEXT_LOCALE) and Google Analytics. No advertising cookies.</li>
            </ul>
            <p className="mt-3">We do <strong>not</strong> collect: real names, payment information, wallet addresses, government IDs, or biometric data.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-3">3. Third Parties</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Vercel</strong> — hosting (<a href="https://vercel.com/legal/privacy-policy" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">privacy</a>)</li>
              <li><strong>Google Analytics</strong> — anonymized analytics (<a href="https://policies.google.com/privacy" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">privacy</a>)</li>
              <li><strong>Beehiiv</strong> — newsletter subscriptions (<a href="https://www.beehiiv.com/tou/privacy" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">privacy</a>)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-3">4. Your Rights</h2>
            <p>
              Under GDPR, CCPA, and similar laws, you may request access to, correction of, or deletion of any personal data we hold about you.
              For analytics data, since it is anonymized at collection, individual identification is not possible.
              For newsletter data, you can unsubscribe via the link in any email or contact us at <a href={`mailto:${CONTACT_EMAIL}`} className="text-orange-400 hover:underline">{CONTACT_EMAIL}</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-3">5. Children</h2>
            <p>The Site is not directed to children under 13. We do not knowingly collect data from children.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-3">6. Changes</h2>
            <p>We may update this policy. The &quot;Last updated&quot; date at the top reflects the current version.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-3">7. Contact</h2>
            <p>
              Privacy questions: <a href={`mailto:${CONTACT_EMAIL}`} className="text-orange-400 hover:underline">{CONTACT_EMAIL}</a>
            </p>
          </section>
        </div>
      </article>
    </main>
  )
}
