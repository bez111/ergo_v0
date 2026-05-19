import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { MarkdownBlogPost } from "@/components/blog/markdown-blog-post"
import type { ArticleFrontMatter } from "@/components/blog/markdown-blog-post"
import { siteConfig } from "@/config/site-config"
import { getBlogCmsArticle } from "@/lib/blog-cms/storage"

export const revalidate = 300

interface BlogCmsPageProps {
  params: Promise<{
    locale: string
    slug: string
  }>
}

export async function generateMetadata({ params }: BlogCmsPageProps): Promise<Metadata> {
  const { slug } = await params
  const article = await getBlogCmsArticle(slug)

  if (!article) {
    return {
      title: "Blog article",
      robots: { index: false, follow: true },
    }
  }

  const title = String(article.frontMatter.seo_title ?? article.entry.title)
  const description = String(article.frontMatter.meta_description ?? article.entry.excerpt)
  const image = article.entry.hero?.jpgUrl ?? "/og/blog.svg"
  const canonical = `${siteConfig.siteUrl}/blog/${article.entry.slug}`

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      siteName: "Ergo Platform",
      url: canonical,
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: article.entry.title }],
      publishedTime: article.entry.date_published,
      modifiedTime: article.entry.date_modified,
      authors: [article.entry.author],
      tags: article.entry.tags,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  }
}

export default async function BlogCmsArticlePage({ params }: BlogCmsPageProps) {
  const { locale, slug } = await params
  const article = await getBlogCmsArticle(slug)

  if (!article) {
    notFound()
  }

  return (
    <MarkdownBlogPost
      slug={slug}
      locale={locale}
      heroImage={article.entry.hero?.jpgUrl ?? "/og/blog.svg"}
      article={{ frontMatter: article.frontMatter as ArticleFrontMatter, body: article.body }}
      trusted={false}
    />
  )
}
