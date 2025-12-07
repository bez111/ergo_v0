import { Metadata } from "next"
import { getTranslations } from "next-intl/server"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'use.identity.seo' });
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: ["/og-identity.png"],
      type: "website",
      url: "https://ergoblockchain.org/use/identity-reputation",
    },
    twitter: {
      card: "summary_large_image",
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: ["/og-identity.png"],
    },
    alternates: {
      canonical: "https://ergoblockchain.org/use/identity-reputation",
    },
  }
}

export default function IdentityLayout({ children }: { children: React.ReactNode }) {
  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": "https://ergoblockchain.org/use/identity",
    headline: "Digital Identity on Ergo",
    description: "Privacy-preserving digital identity solutions with Sigma protocols and zero-knowledge proofs on Ergo.",
    author: { "@type": "Organization", name: "Ergo Platform", url: "https://ergoblockchain.org" },
    publisher: { "@type": "Organization", name: "Ergo Platform", url: "https://ergoblockchain.org" },
    image: "https://ergoblockchain.org/og-identity.png",
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split('T')[0],
    keywords: "digital identity, self-sovereign identity, Ergo identity, zero-knowledge proofs, verifiable credentials"
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is self-sovereign identity on Ergo?",
        acceptedAnswer: { "@type": "Answer", text: "Self-sovereign identity on Ergo allows users to control their digital identity using cryptographic proofs without relying on centralized authorities." }
      },
      {
        "@type": "Question",
        name: "How do Sigma protocols enable privacy?",
        acceptedAnswer: { "@type": "Answer", text: "Sigma protocols allow proving statements about your identity (like being over 18) without revealing the underlying data." }
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