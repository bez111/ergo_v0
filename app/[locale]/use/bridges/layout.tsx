import { Metadata } from "next"
import { SchemaOrg } from "@/components/seo/schema-org"
import { getTranslations } from "next-intl/server"

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'use.bridges.seo' });
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: ["/og-bridges.png"],
      type: "website",
      url: "https://ergoblockchain.org/use/cross-chain-bridges",
    },
    twitter: {
      card: "summary_large_image",
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: ["/og-bridges.png"],
    },
    alternates: {
      canonical: "https://ergoblockchain.org/use/cross-chain-bridges",
    },
  }
}

export default async function CrossChainBridgesLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'use.bridges.schema' });
  
  return (
    <>
      <SchemaOrg
        type="TechArticle"
        data={{
          "@type": "TechArticle",
          headline: t('techArticle.headline'),
          description: t('techArticle.description'),
          author: {
            "@type": "Organization",
            name: "Ergo Platform",
            url: "https://ergoplatform.org",
          },
          publisher: {
            "@type": "Organization",
            name: "Ergo Platform",
            url: "https://ergoplatform.org",
            logo: {
              "@type": "ImageObject",
              url: "https://ergoblockchain.org/logo.png",
            },
          },
          image: "https://ergoblockchain.org/og-bridges.png",
          datePublished: "2024-01-01",
          dateModified: new Date().toISOString(),
          keywords: t('techArticle.keywords'),
        }}
      />
      
      {children}
    </>
  )
} 