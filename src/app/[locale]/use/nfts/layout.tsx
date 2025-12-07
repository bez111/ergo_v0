import { Metadata } from "next"
import { getTranslations } from "next-intl/server"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'use.nfts.seo' });
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: ["/og-nfts.png"],
      type: "website",
      url: "https://ergoblockchain.org/use/nfts-digital-assets",
    },
    twitter: {
      card: "summary_large_image",
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: ["/og-nfts.png"],
    },
    alternates: {
      canonical: "https://ergoblockchain.org/use/nfts-digital-assets",
    },
  }
}

export default function NFTsLayout({ children }: { children: React.ReactNode }) {
  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": "https://ergoblockchain.org/use/nfts",
    headline: "NFTs on Ergo: Native Digital Assets",
    description: "Create and trade NFTs as first-class native tokens on Ergo. Low fees, instant minting, full ownership.",
    author: { "@type": "Organization", name: "Ergo Platform", url: "https://ergoblockchain.org" },
    publisher: { "@type": "Organization", name: "Ergo Platform", url: "https://ergoblockchain.org" },
    image: "https://ergoblockchain.org/og-nfts.png",
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split('T')[0],
    keywords: "Ergo NFT, NFT marketplace, digital collectibles, native tokens, SkyHarbor"
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I mint NFTs on Ergo?",
        acceptedAnswer: { "@type": "Answer", text: "Mint NFTs using platforms like SkyHarbor or Ergo Auction House. Connect your wallet, upload media, set metadata, and pay a small ERG fee." }
      },
      {
        "@type": "Question",
        name: "Why are Ergo NFTs different?",
        acceptedAnswer: { "@type": "Answer", text: "Ergo NFTs are native tokens, not smart contract records. This means lower fees, better security, and true ownership without contract dependencies." }
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