# Information Architecture Specification
## Ergo Platform Website

### 1. URL Structure & Patterns

#### URL Rules
- **Always lowercase**: `/docs`, not `/Docs`
- **Use hyphens**: `/use-cases`, not `/use_cases`
- **No trailing slashes**: `/docs`, not `/docs/`
- **Maximum depth**: 4 levels
- **Clean parameters**: No `page=1`, no UTM in canonical

#### URL Patterns

```
# Main sections
/                              # Homepage
/docs                         # Documentation hub
/blog                         # Blog listing
/ecosystem                    # Ecosystem overview
/technology                   # Technology hub
/learn                        # Learning center
/use                          # Use cases
/wallet                       # Wallet guide
/start                        # Getting started

# Detail pages
/{section}/{slug}             # e.g., /blog/defi-revolution
/{section}/{category}/{slug}  # e.g., /docs/introduction/key-features

# Pagination (no page=1)
/{section}                    # First page
/{section}?page=2            # Subsequent pages

# Categories
/{section}/category/{slug}    # e.g., /blog/category/defi

# Search & Filters
/search?q={query}            # Search results
/{section}?filter={value}    # Filtered listings
```

### 2. Canonicalization Policy

| Page Type | Index | Follow | Canonical |
|-----------|-------|--------|-----------|
| Main sections | Yes | Yes | Self |
| Detail pages | Yes | Yes | Self |
| Paginated (page > 1) | Yes | Yes | Self |
| Search results | No | Yes | Base URL |
| Filtered lists | No | Yes | Base URL |
| Categories | Yes | Yes | Self |

### 3. Redirect Map (301)

#### Capitalization Fixes
```
/Docs → /docs
/Docs/introduction → /docs/introduction
/Docs/ecosystem → /docs/ecosystem
/Docs/developers → /docs/developers
/Docs/miners → /docs/miners
/Docs/contribute → /docs/contribute
/Docs/why-ergo → /docs/why-ergo
/Docs/ecosystem/Standards → /docs/ecosystem/standards
```

#### URL Simplification
```
/use/use-cases → /use/cases
/use/use-cases/algorithmic-stablecoins → /use/cases/stablecoins
/use/use-cases/privacy-confidentiality → /use/cases/privacy
/use/use-cases/cross-chain-bridges → /use/cases/bridges
/use/use-cases/daos-alternative-economies → /use/cases/daos
/use/use-cases/nfts-digital-assets → /use/cases/nfts
/use/use-cases/oracles-data-feeds → /use/cases/oracles
/use/use-cases/identity-reputation → /use/cases/identity
/use/use-cases/gaming-metaverse → /use/cases/gaming
```

### 4. Internal Linking Matrix

#### Hub Pages & Their Children

**Documentation Hub** `/docs`
- Children: `/docs/introduction`, `/docs/ecosystem`, `/docs/developers`, `/docs/miners`
- Related: `/technology`, `/learn`, `/use`

**Ecosystem Hub** `/ecosystem`
- Children: `/ecosystem/map`, `/ecosystem/grants`, `/ecosystem/mining`
- Related: `/use`, `/technology`

**Technology Hub** `/technology`
- Children: `/technology/ergoscript`, `/technology/eutxo-model`, `/technology/nipopows`, `/technology/storage-rent`
- Related: `/docs`, `/learn`

**Learning Hub** `/learn`
- Children: `/learn/faq`, `/learn/guides`, `/learn/research`, `/learn/ergoscript`
- Related: `/start`, `/docs`

**Use Cases Hub** `/use`
- Children: `/use/mining`, `/use/guides`, `/use/get-erg`, `/use/babel-fees`
- Related: `/ecosystem`, `/wallet`

#### Required Linking Elements
- ✅ Main navigation (all pages)
- ✅ Breadcrumbs (all sub-pages)
- ✅ Related content (detail pages)
- ✅ Footer links (all pages)
- ⚠️ Trending/popular (optional)

### 5. Sitemap Strategy

#### Separated Sitemaps
```xml
/sitemap-index.xml          # Index file
├── /sitemap-main.xml       # Main pages (priority: 1.0)
├── /sitemap-docs.xml       # Documentation (priority: 0.8)
├── /sitemap-blog.xml       # Blog posts (priority: 0.7)
├── /sitemap-ecosystem.xml  # Ecosystem pages (priority: 0.7)
├── /sitemap-technology.xml # Technology pages (priority: 0.8)
├── /sitemap-use.xml        # Use cases (priority: 0.7)
└── /sitemap-learn.xml      # Learning content (priority: 0.6)
```

#### Update Frequency
- Homepage: daily
- Hub pages: weekly
- Detail pages: monthly
- Blog posts: never (after initial)

### 6. Orphan Pages Prevention

#### Detection Criteria
- No incoming internal links
- Not in main navigation
- Not in sitemap
- Not linked from parent category

#### Resolution
1. Add to relevant hub page
2. Include in related content
3. Add breadcrumb trail
4. Or remove from sitemap if truly orphan

### 7. Index Bloat Prevention

#### Excluded Patterns
```
/api/*              # API endpoints
/admin/*            # Admin pages
/_next/*            # Next.js internals
/static/*           # Static assets
*.json              # JSON files
/print/*            # Print versions
?preview=*          # Preview URLs
?draft=*            # Draft URLs
```

#### Implementation
- `X-Robots-Tag: noindex, nofollow` via middleware
- Excluded from sitemap generation
- Blocked in robots.txt

### 8. Parameter Handling

#### Clean Parameters (kept)
- `page` (pagination, except page=1)
- `q` (search query)
- `filter` (category filter)
- `sort` (sorting)

#### Noise Parameters (removed via 301)
- `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`
- `ref`, `fbclid`, `gclid`
- Any tracking parameters

### 9. Semantic Structure

#### Page Requirements
- One `<h1>` per page
- Logical `<h2>`, `<h3>` hierarchy
- Breadcrumbs as `<nav>` element
- Main content in `<main>` tag
- Navigation in `<nav>` tag
- Footer in `<footer>` tag

### 10. Performance Metrics

#### Target Metrics
- URL normalization: < 10ms
- Redirect resolution: < 20ms
- Canonical generation: < 5ms
- Sitemap generation: < 100ms

### Implementation Checklist

- [x] URL normalization function
- [x] Redirect map implementation
- [x] Middleware integration
- [x] Canonical header injection
- [x] Separated sitemap generation
- [x] Parameter cleaning
- [x] Index bloat prevention
- [ ] Orphan page detection
- [ ] Internal linking audit
- [ ] Breadcrumb implementation
- [ ] Hub page optimization

### Monitoring & Maintenance

1. **Weekly**: Check for new orphan pages
2. **Monthly**: Review redirect performance
3. **Quarterly**: Audit internal linking matrix
4. **Yearly**: Full IA review and optimization

---

*Last Updated: ${new Date().toISOString()}*
*Version: 1.0.0* 