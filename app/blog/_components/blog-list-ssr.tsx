import Link from "next/link"
import type { BlogPost } from "../_lib/blog-data"

export default function BlogListSSR({ posts, categories }: { posts: BlogPost[]; categories: { id: string; name: string }[] }) {
  return (
    <section aria-labelledby="posts-h2">
      <h2 id="posts-h2" className="sr-only">All posts</h2>
      <ul role="list" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <li key={p.id} role="listitem">
            <article
              itemScope
              itemType="https://schema.org/BlogPosting"
              className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4"
            >
              {p.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img 
                  itemProp="image" 
                  src={p.image} 
                  alt={p.title} 
                  width="300" 
                  height="200" 
                  loading="lazy" 
                  decoding="async" 
                  className="rounded-lg mb-3 w-full h-auto" 
                />
              )}
              <div className="text-xs uppercase tracking-wide text-orange-400 mb-2">
                {categories.find((c) => c.id === p.category)?.name ?? p.category}
              </div>
              <h3 className="text-lg font-semibold">
                <Link href={`/blog/${p.slug}`} itemProp="url">
                  <span itemProp="headline">{p.title}</span>
                </Link>
              </h3>
              <time dateTime={new Date(p.publishedAt).toISOString()} className="text-neutral-400 text-sm">
                {p.publishedAt}
              </time>
              <meta itemProp="datePublished" content={new Date(p.publishedAt).toISOString()} />
              <meta itemProp="dateModified" content={new Date(p.updatedAt || p.publishedAt).toISOString()} />
              {typeof p.readTime === "number" && <meta itemProp="timeRequired" content={`PT${p.readTime}M`} />}
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
} 