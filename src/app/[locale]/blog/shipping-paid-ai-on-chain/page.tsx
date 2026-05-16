import type { Metadata } from "next"
import { MarkdownBlogPost } from "@/components/blog/markdown-blog-post"
import { buildBlogMetadata } from "@/components/blog/markdown-blog-metadata"

const SLUG = "shipping-paid-ai-on-chain"
const HERO_IMAGE = "/og/blog/shipping-paid-ai-on-chain.jpg"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return buildBlogMetadata({ slug: SLUG, locale, fallbackImage: HERO_IMAGE })
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <MarkdownBlogPost slug={SLUG} locale={locale} heroImage={HERO_IMAGE} />
}
