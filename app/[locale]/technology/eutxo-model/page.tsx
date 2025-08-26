import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import EutxoClient from "./EutxoClient"

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations('technology.eutxoModelPage')
  const url = "https://ergoblockchain.org/technology/eutxo-model"
  const title = `${t('title')} — ${t('subtitle')} | Ergo`
  const description = t('description')
  const twitterHandle = process.env['NEXT_PUBLIC_TWITTER_HANDLE']
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      images: [{ url: "https://ergoblockchain.org/og/eutxo.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      images: ["https://ergoblockchain.org/og/eutxo.png"],
      ...(twitterHandle ? { site: twitterHandle, creator: twitterHandle } : {}),
    },
    robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  }
}

export default function Page() {
  return <EutxoClient />
}
