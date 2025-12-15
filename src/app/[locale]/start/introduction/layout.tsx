import { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { getAlternates, getCanonicalUrl } from "@/lib/seo"

interface Props {
  params: Promise<{ locale: string }>
  children: React.ReactNode
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'start.introduction.seo' })

  return {
    title: t('title'),
    description: t('description'),
    alternates: getAlternates('/start/introduction', locale),
    openGraph: {
      type: "article",
      url: getCanonicalUrl('/start/introduction', locale),
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: [{ url: "https://ergoblockchain.org/og/intro.png", width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image" },
  }
}

export default function IntroductionLayout({ children }: { children: React.ReactNode }) {
  return children
}
