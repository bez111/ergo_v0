import { blogPosts } from "./_lib/blog-data"

export default async function Head({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const sp = await searchParams
  const page = Math.max(1, Number(sp?.page ?? 1) || 1)
  const pageSize = 12
  const total = blogPosts.filter((p) => !p.featured).length
  const last = Math.max(1, Math.ceil(total / pageSize))
  const base = "https://ergoblockchain.org/blog"

  const prev = page > 2 ? `${base}?page=${page - 1}` : page === 2 ? base : undefined
  const next = page < last ? `${base}?page=${page + 1}` : undefined

  return (
    <>
      <link rel="alternate" type="application/rss+xml" href="/blog/rss.xml" />
      <link rel="alternate" type="application/feed+json" href="/blog/feed.json" />
      {prev && <link rel="prev" href={prev} />}
      {next && <link rel="next" href={next} />}
    </>
  )
} 