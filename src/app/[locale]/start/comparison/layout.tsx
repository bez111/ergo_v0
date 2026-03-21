import { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { getAlternates, getCanonicalUrl } from "@/lib/seo"

interface Props {
  params: Promise<{ locale: string }>
  children: React.ReactNode
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'start.comparison.seo' })

  return {
    title: t('title'),
    description: t('description'),
    alternates: getAlternates('/start/comparison', locale),
    openGraph: {
      type: "article",
      url: getCanonicalUrl('/start/comparison', locale),
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: [{ url: "https://www.ergoblockchain.org/og/comparison.png", width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image" },
  }
}

export default function ComparisonLayout({ children }: { children: React.ReactNode }) {
  return children
}
