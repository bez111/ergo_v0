import { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { ScopedMessagesProvider } from "@/components/i18n/scoped-messages-provider"
import type { Locale } from "@/i18n/request"
import { getAlternates, getCanonicalUrl } from "@/lib/seo"

interface Props {
  params: Promise<{ locale: string }>
  children: React.ReactNode
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'technology.seo' })

  return {
    title: t('title'),
    description: t('description'),
    alternates: getAlternates('/technology', locale),
    openGraph: {
      type: "website",
      url: getCanonicalUrl('/technology', locale),
      title: t('title'),
      description: t('description'),
      images: [{ url: "https://www.ergoblockchain.org/og/technology/technology.jpg", width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image" },
  }
}

export default async function TechnologyLayout({ children, params }: Props) {
  const { locale } = await params
  return (
    <ScopedMessagesProvider locale={locale as Locale} files={['technology']}>
      {children}
    </ScopedMessagesProvider>
  )
}
