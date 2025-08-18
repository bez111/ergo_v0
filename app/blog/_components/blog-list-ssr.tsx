import Link from "next/link"
import Image from "next/image"
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
                <div className="relative w-full h-48 mb-3 rounded-lg overflow-hidden">
                  <Image 
                    itemProp="image" 
                    src={p.image} 
                    alt={p.title} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy" 
                    decoding="async" 
                    className="object-cover" 
                    style={{ aspectRatio: '16/9' }}
                  />
                </div>
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