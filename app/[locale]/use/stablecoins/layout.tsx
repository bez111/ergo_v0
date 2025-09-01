import { Metadata } from "next"
import { SchemaOrg } from "@/components/seo/schema-org"
import { getTranslations } from "next-intl/server"

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'use.stablecoins.seo' });
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: ["/og-stablecoins.png"],
      type: "website",
      url: "https://ergoblockchain.org/use/stablecoins",
    },
    twitter: {
      card: "summary_large_image",
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: ["/og-stablecoins.png"],
    },
    alternates: {
      canonical: "https://ergoblockchain.org/use/stablecoins",
    },
  }
}

export default async function AlgorithmicStablecoinsLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'use.stablecoins.schema' });
  
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
          image: "https://ergoblockchain.org/og-stablecoins.png",
          datePublished: "2024-01-01",
          dateModified: new Date().toISOString(),
          keywords: t('techArticle.keywords'),
        }}
      />
      
      <SchemaOrg
        type="HowTo"
        data={{
          "@type": "HowTo",
          name: t('howTo.name'),
          description: t('howTo.description'),
          step: [
            {
              "@type": "HowToStep",
              position: 1,
              name: t('howTo.steps.setupWallet.name'),
              text: t('howTo.steps.setupWallet.text'),
            },
            {
              "@type": "HowToStep",
              position: 2,
              name: t('howTo.steps.getErg.name'),
              text: t('howTo.steps.getErg.text'),
            },
            {
              "@type": "HowToStep",
              position: 3,
              name: t('howTo.steps.accessSigmaUsd.name'),
              text: t('howTo.steps.accessSigmaUsd.text'),
            },
            {
              "@type": "HowToStep",
              position: 4,
              name: t('howTo.steps.managePositions.name'),
              text: t('howTo.steps.managePositions.text'),
            },
          ],
        }}
      />
      
      {children}
    </>
  )
} 