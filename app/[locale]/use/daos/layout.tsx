import { Metadata } from "next"
import { getTranslations } from "next-intl/server"

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'use.daos.seo' });
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: ["/og-daos.png"],
      type: "website",
      url: "https://ergoblockchain.org/use/daos-alternative-economies",
    },
    twitter: {
      card: "summary_large_image",
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: ["/og-daos.png"],
    },
    alternates: {
      canonical: "https://ergoblockchain.org/use/daos-alternative-economies",
    },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
} 