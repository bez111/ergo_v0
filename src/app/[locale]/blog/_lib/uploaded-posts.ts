import "server-only"
import { getBlogCmsIndex } from "@/lib/blog-cms/storage"
import { authors, blogPosts, type Author, type BlogPost } from "./blog-data"

const supersededUploadedSlugs = new Set([
  "agent-economy-live-proof-site-update",
])

export async function getPublishedUploadedBlogPosts(): Promise<BlogPost[]> {
  const index = await getBlogCmsIndex()
  const staticSlugs = new Set(blogPosts.map((post) => post.slug))

  return index.entries
    .filter((entry) => !staticSlugs.has(entry.slug) && !supersededUploadedSlugs.has(entry.slug))
    .map((entry) => ({
      id: entry.slug,
      slug: entry.slug,
      title: entry.title,
      excerpt: entry.excerpt,
      date: entry.date_published,
      lastUpdated: entry.date_modified,
      author: resolveAuthor(entry.author),
      category: entry.category,
      readTime: entry.readTime,
      wordCount: entry.wordCount,
      image: entry.hero?.jpgUrl,
      tags: entry.tags,
      featured: false,
      trending: false,
      difficulty: "Intermediate",
      shares: 0,
    }))
}

export async function getAllBlogPostsWithUploaded(): Promise<BlogPost[]> {
  const uploaded = await getPublishedUploadedBlogPosts()
  return [...blogPosts, ...uploaded].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )
}

function resolveAuthor(author: string): Author {
  return (
    authors[author] ??
    Object.values(authors).find((item) => item.name === author) ??
    {
      id: "external-author",
      name: author,
      bio: "Ergo ecosystem contributor",
      avatar: "",
      role: "Contributor",
    }
  )
}
