import { Metadata } from "next"
import { getTranslations } from "next-intl/server"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'use.gaming.seo' });
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: ["/og-gaming.png"],
      type: "website",
      url: "https://ergoblockchain.org/use/gaming-metaverse",
    },
    twitter: {
      card: "summary_large_image",
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: ["/og-gaming.png"],
    },
    alternates: {
      canonical: "https://ergoblockchain.org/use/gaming-metaverse",
    },
  }
}

export default function GamingLayout({ children }: { children: React.ReactNode }) {
  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": "https://ergoblockchain.org/use/gaming",
    headline: "Blockchain Gaming on Ergo",
    description: "Build blockchain games with true asset ownership, NFT integration, and play-to-earn mechanics on Ergo.",
    author: { "@type": "Organization", name: "Ergo Platform", url: "https://ergoblockchain.org" },
    publisher: { "@type": "Organization", name: "Ergo Platform", url: "https://ergoblockchain.org" },
    image: "https://ergoblockchain.org/og-gaming.png",
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split('T')[0],
    keywords: "blockchain gaming, NFT games, play-to-earn, Ergo gaming, metaverse"
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What games are built on Ergo?",
        acceptedAnswer: { "@type": "Answer", text: "Ergo hosts various blockchain games with NFT integration, including collectible card games, strategy games, and play-to-earn experiences." }
      },
      {
        "@type": "Question",
        name: "How do NFTs work in Ergo games?",
        acceptedAnswer: { "@type": "Answer", text: "Game assets are minted as native Ergo tokens, giving players true ownership that can be traded, sold, or used across compatible games." }
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