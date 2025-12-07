import { Metadata } from "next"
import { getTranslations } from "next-intl/server"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'use.oracles.seo' });
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: ["/og-oracles.png"],
      type: "website",
      url: "https://ergoblockchain.org/use/oracles-data-feeds",
    },
    twitter: {
      card: "summary_large_image",
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: ["/og-oracles.png"],
    },
    alternates: {
      canonical: "https://ergoblockchain.org/use/oracles-data-feeds",
    },
  }
}

export default function OraclesLayout({ children }: { children: React.ReactNode }) {
  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": "https://ergoblockchain.org/use/oracles",
    headline: "Oracle Pools on Ergo: Decentralized Data Feeds",
    description: "Reliable, decentralized price feeds for DeFi. Ergo's native oracle pools provide manipulation-resistant data.",
    author: { "@type": "Organization", name: "Ergo Platform", url: "https://ergoblockchain.org" },
    publisher: { "@type": "Organization", name: "Ergo Platform", url: "https://ergoblockchain.org" },
    image: "https://ergoblockchain.org/og-oracles.png",
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split('T')[0],
    keywords: "oracle pools, price feeds, DeFi oracles, Ergo oracles, decentralized data"
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are Ergo Oracle Pools?",
        acceptedAnswer: { "@type": "Answer", text: "Oracle Pools are decentralized data providers that aggregate information from multiple sources to provide reliable price feeds for DeFi applications." }
      },
      {
        "@type": "Question",
        name: "How do Oracle Pools prevent manipulation?",
        acceptedAnswer: { "@type": "Answer", text: "Multiple independent data providers stake collateral and submit data. Outliers are filtered, and the median value is used, making manipulation economically infeasible." }
      }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  )
} 