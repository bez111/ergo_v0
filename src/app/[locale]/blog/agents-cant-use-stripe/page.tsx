import type { Metadata } from "next"
import { MarkdownBlogPost } from "@/components/blog/markdown-blog-post"
import { buildBlogMetadata } from "@/components/blog/markdown-blog-metadata"

const SLUG = "agents-cant-use-stripe"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return buildBlogMetadata({ slug: SLUG, locale })
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <MarkdownBlogPost slug={SLUG} locale={locale} />
}
