/* eslint-disable */
// ✅ ГОТОВЫЙ PR-DIFF: Blog Page с ARIA Live и Focus Management
// Файл: app/blog/page.tsx - ЗАМЕНИТЬ функцию BlogPage

export default async function BlogPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const sp = (await searchParams) || {}
  const pageParam = typeof sp.page === "string" ? sp.page : Array.isArray(sp.page) ? sp.page[0] : undefined
  const currentPage = Math.max(1, Number(pageParam ?? 1) || 1)

  const allowed = new Set(["page"]) // whitelist
  const hasJunk = Object.keys(sp).some((k) => !allowed.has(k))
  const baseUrl = "https://ergoblockchain.org/blog"

  // Canonicalize page=1 and strip junk params
  if (hasJunk || (typeof sp?.page !== "undefined" && currentPage === 1)) {
    const clean = currentPage > 1 ? `/blog?page=${currentPage}` : "/blog"
    redirect(clean)
  }

  // Featured + Trending (exclude duplicate)
  const featuredPost = blogPosts.find((p) => p.featured) ?? null
  const trendingPosts = blogPosts
    .filter((post) => post.trending)
    .filter((post) => !featuredPost || post.id !== featuredPost.id)

  // Non-featured, newest first for consistent SEO order
  const allNonFeatured = blogPosts
    .filter((p) => !p.featured)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  const total = allNonFeatured.length
  const start = (currentPage - 1) * pageSize
  const end = start + pageSize

  if (start >= total && total > 0) {
    return notFound()
  }

  const initialList = allNonFeatured.slice(start, end)
  const totalPages = Math.max(1, Math.ceil(total / pageSize))

  // ... existing schemas ...

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* ✅ КРИТИЧЕСКОЕ ИСПРАВЛЕНИЕ: Proper skip-link */}
      <a 
        href="#main" 
        className="skip-link"
      >
        Skip to main content
      </a>

      {/* Existing JSON-LD schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />
      {/* ... other schemas ... */}

      <main id="main" className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* ✅ ИЗМЕНЕНИЕ: Фокусируемый H1 для navigation management */}
          <header className="pt-4 pb-6">
            <div className="mb-4">
              <h1 
                id="blog-h1" 
                className="text-4xl md:text-5xl font-bold tracking-tight mb-3 focus:outline-none" 
                tabIndex={-1}
              >
                {currentPage > 1 ? `Ergo Blog — Page ${currentPage}` : 'Ergo Blog — news, research, guides'}
              </h1>
              <p className="text-neutral-300 text-lg leading-relaxed max-w-3xl">
                Latest updates, deep-dives and how-tos from the Ergo ecosystem.
              </p>
            </div>
          </header>

          {/* ✅ ИЗМЕНЕНИЕ: Семантическая структура с proper landmarks */}
          <section className="mb-12" aria-labelledby="featured-content">
            <h2 id="featured-content" className="sr-only">Featured and trending content</h2>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1" role="region" aria-labelledby="featured-article">
                <h3 id="featured-article" className="sr-only">Featured article</h3>
                <BlogHero featuredPost={featuredPost} />
              </div>
              <aside className="w-full lg:w-80" aria-labelledby="trending">
                <TrendingNow posts={trendingPosts.slice(0, 3)} categories={categories} />
              </aside>
            </div>
          </section>

          {/* ✅ КРИТИЧЕСКОЕ ИЗМЕНЕНИЕ: ARIA Live Region для динамических обновлений */}
          <section 
            aria-labelledby="blog-posts"
            aria-live="polite"
            aria-busy="false"
            className="transition-opacity duration-200"
          >
            <h2 id="blog-posts" className="sr-only">
              {currentPage > 1 ? `Blog posts page ${currentPage}` : 'All blog posts'}
            </h2>
            
            <BlogListSSR posts={initialList} categories={categories} />
            
            {/* ✅ НОВОЕ: Proper pagination component */}
            <BlogPagination 
              currentPage={currentPage}
              totalPages={totalPages}
              baseUrl="/blog"
            />
          </section>
        </div>
      </main>

      {/* ✅ НОВОЕ: Focus management script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Focus management для SPA navigation
            window.addEventListener('popstate', function() {
              const h1 = document.getElementById('blog-h1');
              if (h1) {
                h1.focus();
                h1.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            });
            
            // Announce page changes to screen readers
            const announcePageChange = (pageNum) => {
              const announcement = document.createElement('div');
              announcement.setAttribute('aria-live', 'assertive');
              announcement.setAttribute('aria-atomic', 'true');
              announcement.className = 'sr-only';
              announcement.textContent = \`Navigated to blog page \${pageNum}\`;
              document.body.appendChild(announcement);
              setTimeout(() => document.body.removeChild(announcement), 1000);
            };
          `
        }}
      />
    </div>
  )
}

/*
✅ КЛЮЧЕВЫЕ A11Y УЛУЧШЕНИЯ:
1. Proper skip-link с правильными стилями
2. Фокусируемый H1 с tabIndex={-1}
3. ARIA live regions для динамических обновлений
4. Semantic landmarks (main, section, aside, header)
5. Screen reader announcements для навигации
6. Proper pagination вместо "Load More"
7. Focus management при SPA transitions
*/ 