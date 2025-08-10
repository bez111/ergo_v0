import { blogPosts } from "./_lib/blog-data"

export default function Head({ searchParams }: { searchParams?: { page?: string } }) {
  const page = Math.max(1, Number(searchParams?.page ?? 1) || 1)
  const pageSize = 12
  const total = blogPosts.filter((p) => !p.featured).length
  const last = Math.max(1, Math.ceil(total / pageSize))

  return (
    <>
      {page > 1 && <link rel="prev" href={`/blog?page=${page - 1}`} />}
      {page < last && <link rel="next" href={`/blog?page=${page + 1}`} />}
      <link rel="alternate" type="application/rss+xml" href="/blog/rss.xml" />
      <link rel="alternate" type="application/feed+json" href="/blog/feed.json" />
    </>
  )
} 