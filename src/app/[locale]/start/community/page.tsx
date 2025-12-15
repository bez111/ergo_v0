import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import CommunityClient from "./CommunityClient"
import { createBreadcrumbSchema, createFAQSchema, getAlternates, getCanonicalUrl } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'start.community.seo' })
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: getAlternates('/start/community', locale),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: getCanonicalUrl('/start/community', locale),
      siteName: "Ergo Platform",
      images: [{ url: "https://ergoblockchain.org/og/community.png", width: 1200, height: 630, alt: t('ogAlt') }],
      type: "website",
      locale: "en_US"
    },
    twitter: {
      card: "summary_large_image",
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: ["https://ergoblockchain.org/og/community.png"]
    }
  }
}

// FAQ Content
const FAQ_ITEMS = [
  { question: "How do I join the Ergo community?", answer: "Join our Discord server for real-time chat, Telegram for quick updates, Reddit for discussions, or GitHub to contribute to development. All platforms are open and welcoming to newcomers." },
  { question: "What is the main Ergo community platform?", answer: "Discord is the most active platform with 15K+ members, featuring dedicated channels for development, mining, trading, and general discussion, plus regular AMA sessions." },
  { question: "Can I contribute to Ergo without coding?", answer: "Yes! You can contribute through content creation, translations, community management, testing, documentation, or participating in governance discussions." },
  { question: "Are there regional Ergo communities?", answer: "Yes, there are active regional communities in multiple languages including Chinese, Russian, Spanish, Turkish, and more, each with dedicated Telegram groups." }
]

export default function CommunityPage() {
  // Organization schema (special, kept structured)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://ergoblockchain.org/#community",
    name: "Ergo Community",
    description: "Global community of developers, miners, and enthusiasts building on Ergo",
    url: "https://ergoblockchain.org/start/community",
    logo: "https://ergoblockchain.org/logo.png",
    sameAs: [
      "https://discord.com/invite/ergo-platform-668903786361651200",
      "https://t.me/ergoplatform",
      "https://x.com/BuildOnErgo",
      "https://youtube.com/@ergoplatform",
      "https://medium.com/@buildonergo",
      "https://reddit.com/r/ergonauts",
      "https://ergoforum.org",
      "https://instagram.com/BuildOnErgo",
      "https://github.com/ergoplatform"
    ],
  }
  
  const schemas = [
    organizationSchema,
    createBreadcrumbSchema([
      { name: "Start", href: "/start" },
      { name: "Community", href: "/start/community" },
    ]),
    createFAQSchema(FAQ_ITEMS),
  ]
  
  return (
    <>
      {renderSchemaScripts(schemas)}
      <CommunityClient />
    </>
  )
}
