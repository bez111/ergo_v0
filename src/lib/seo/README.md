# SEO Module Documentation

Centralized SEO management for ergoblockchain.org. This module provides consistent metadata and JSON-LD structured data across all pages.

## Quick Start

```tsx
// In any page.tsx or layout.tsx
import { createMetadata } from "@/lib/seo"
import { createBreadcrumbSchema, createFAQSchema } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

// Metadata
export async function generateMetadata(): Promise<Metadata> {
  return createMetadata({
    title: "Page Title",
    description: "Page description",
    path: "/your-path",
  })
}

// JSON-LD Schemas
export default function Page() {
  const schemas = [
    createBreadcrumbSchema([{ name: "Section", href: "/section" }]),
    createFAQSchema([{ question: "...", answer: "..." }]),
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      <PageContent />
    </>
  )
}
```

---

## File Structure

```
src/lib/seo/
├── index.ts        # Main exports (use this for imports)
├── types.ts        # TypeScript interfaces
├── metadata.ts     # Metadata generators (title, description, OG, Twitter)
├── schemas.ts      # JSON-LD schema generators
└── README.md       # This file

src/components/seo/
└── SEOSchemas.tsx  # Render utility for JSON-LD scripts
```

---

## Checklist: Adding a New Page

### Step 1: Determine Page Type

| Page Type | Example | Metadata Function | Primary Schemas |
|-----------|---------|-------------------|-----------------|
| Technology | `/technology/eutxo-model` | `createTechnologyMetadata()` | `TechArticle`, `FAQ`, `Breadcrumb` |
| Use Case | `/use/nfts` | `createUseCaseMetadata()` | `TechArticle`, `FAQ`, `Breadcrumb` |
| Blog Article | `/blog/sigma-protocols` | `createBlogMetadata()` | `TechArticle`, `FAQ`, `Breadcrumb` |
| Hub/Index | `/ecosystem`, `/questions` | `createHubMetadata()` | `CollectionPage`, `ItemList`, `Breadcrumb` |
| General | `/wallet`, `/start` | `createMetadata()` | Depends on content |

### Step 2: Add Metadata

```tsx
// Option A: Generic metadata
export async function generateMetadata(): Promise<Metadata> {
  return createMetadata({
    title: "Ergo Wallets | Secure Storage for ERG",
    description: "Choose from official Ergo wallets...",
    path: "/wallet",
    ogImage: "/og/wallet.png",
    keywords: ["ergo wallet", "nautilus", "safew"],
  })
}

// Option B: Specialized metadata (for technology pages)
export async function generateMetadata(): Promise<Metadata> {
  return createTechnologyMetadata("eutxo-model", {
    title: "eUTXO Model | Extended UTXO Architecture",
    description: "Learn about Ergo's Extended UTXO model...",
  })
}
```

### Step 3: Add JSON-LD Schemas

```tsx
import { 
  createBreadcrumbSchema, 
  createFAQSchema, 
  createTechArticleSchema 
} from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

export default function Page() {
  const breadcrumbs = createBreadcrumbSchema([
    { name: "Technology", href: "/technology" },
    { name: "eUTXO Model", href: "/technology/eutxo-model" },
  ])

  const article = createTechArticleSchema("/technology/eutxo-model", {
    headline: "Extended UTXO Model",
    description: "Advanced blockchain architecture...",
    about: [{ name: "eUTXO" }, { name: "Smart Contracts" }],
  })

  const faq = createFAQSchema([
    { question: "What is eUTXO?", answer: "Extended UTXO is..." },
    { question: "How does it differ from accounts?", answer: "Unlike account-based..." },
  ])

  return (
    <>
      {renderSchemaScripts([breadcrumbs, article, faq])}
      <PageContent />
    </>
  )
}
```

### Step 4: Verify

1. Check page returns 200: `curl -s -o /dev/null -w "%{http_code}" http://localhost:3001/your-page`
2. Verify JSON-LD count: `curl -s http://localhost:3001/your-page | grep -o '<script type="application/ld+json">' | wc -l`
3. Test with Google Rich Results Test: https://search.google.com/test/rich-results

---

## Available Schema Functions

### Core Schemas

| Function | Schema Type | Use Case |
|----------|-------------|----------|
| `createBreadcrumbSchema()` | BreadcrumbList | Navigation path (almost every page) |
| `createFAQSchema()` | FAQPage | Q&A sections |
| `createTechArticleSchema()` | TechArticle | Technical content, blog posts |
| `createCollectionSchema()` | CollectionPage | Hub pages, directories |
| `createItemListSchema()` | ItemList | Lists of items (projects, articles) |
| `createHowToSchema()` | HowTo | Step-by-step guides |
| `createSoftwareAppSchema()` | SoftwareApplication | Ecosystem projects, dApps |
| `createWebSiteSchema()` | WebSite | Site-wide (homepage) |
| `createOrganizationSchema()` | Organization | About Ergo Platform |

### Specialized Schemas

| Function | Schema Type | Use Case |
|----------|-------------|----------|
| `createWebApplicationSchema()` | WebApplication | Interactive tools (ecosystem map) |
| `createDatasetSchema()` | Dataset | Data collections |
| `createFinancialServiceSchema()` | FinancialService | Grants, funding programs |
| `createEventSchema()` | Event | Upcoming events, launches |

---

## Schema Examples by Page Type

### Technology Page (`/technology/*`)

```tsx
const schemas = [
  createBreadcrumbSchema([
    { name: "Technology", href: "/technology" },
    { name: "Storage Rent", href: "/technology/storage-rent" },
  ]),
  createTechArticleSchema("/technology/storage-rent", {
    headline: "Storage Rent | Sustainable Blockchain Economics",
    description: "How Ergo prevents blockchain bloat...",
    proficiencyLevel: "Intermediate",
    about: [{ name: "Storage Rent" }, { name: "Blockchain Sustainability" }],
  }),
  createFAQSchema([
    { question: "What is storage rent?", answer: "..." },
    { question: "How much does it cost?", answer: "..." },
  ]),
]
```

### Use Case Page (`/use/*`)

```tsx
const schemas = [
  createTechArticleSchema("/use/nfts", {
    headline: "NFTs on Ergo",
    description: "Create and trade NFTs with low fees...",
  }),
  createFAQSchema([...]),
  createHowToSchema({
    name: "How to Mint NFTs on Ergo",
    description: "Step-by-step guide to creating NFTs",
    steps: [
      { name: "Set up wallet", text: "Install Nautilus..." },
      { name: "Choose platform", text: "Visit SkyHarbor..." },
      { name: "Upload artwork", text: "..." },
    ],
  }),
]
```

### Hub Page (`/ecosystem`, `/questions`, etc.)

```tsx
const schemas = [
  createBreadcrumbSchema([{ name: "Ecosystem", href: "/ecosystem" }]),
  createCollectionSchema({
    name: "Ergo Ecosystem",
    description: "Discover projects built on Ergo",
    url: "/ecosystem",
  }),
  createItemListSchema({
    name: "Ecosystem Projects",
    description: "Active projects in the Ergo ecosystem",
    items: projects.map(p => ({
      name: p.name,
      url: `/ecosystem/${p.slug}`,
      description: p.description,
    })),
  }, "SoftwareApplication"),
  createFAQSchema([...]),
]
```

### Blog Article (`/blog/*`)

```tsx
const schemas = [
  createBreadcrumbSchema([
    { name: "Blog", href: "/blog" },
    { name: article.title, href: `/blog/${article.slug}` },
  ]),
  createTechArticleSchema(`/blog/${article.slug}`, {
    headline: article.title,
    description: article.excerpt,
    image: article.ogImage,
    datePublished: article.publishDate,
    dateModified: article.updatedDate,
    keywords: article.tags,
  }),
  createFAQSchema(article.faqs),
]
```

---

## Best Practices

### DO

- Always include `BreadcrumbList` for navigation context
- Add `FAQPage` if the page has Q&A content
- Use `TechArticle` for educational/technical content
- Include `about` array in TechArticle for topic categorization
- Set `proficiencyLevel` for technical content ("Beginner" | "Intermediate" | "Advanced")

### DON'T

- Don't duplicate schemas on the same page
- Don't add empty FAQ arrays
- Don't use client-side data in server component schemas
- Don't forget to restart dev server after schema changes (Turbopack cache)

---

## Troubleshooting

### Error: "renderSchemaScripts is on the client"

The file `SEOSchemas.tsx` should NOT have `"use client"` directive. Check:

```tsx
// src/components/seo/SEOSchemas.tsx
// NO "use client" here!
export function renderSchemaScripts(schemas: object[]) { ... }
```

### Schemas not appearing

1. Clear cache: `rm -rf .next && npm run dev`
2. Hard refresh browser (Cmd+Shift+R)
3. Check for JS errors in console

### Hydration errors

If using dynamic data in schemas, ensure it's the same on server and client. For client-dependent data, render schemas only after mount:

```tsx
const [mounted, setMounted] = useState(false)
useEffect(() => setMounted(true), [])

if (!mounted) return <LoadingState />
return <>{renderSchemaScripts(schemas)}<Content /></>
```

---

## Migration Guide

If you find pages still using old patterns:

### Old Pattern (SchemaTypes)
```tsx
import { SchemaTypes } from "@/lib/schema-ultimate"
const faq = SchemaTypes.FAQSchema([...])
<script dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
```

### New Pattern
```tsx
import { createFAQSchema } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"
const faq = createFAQSchema([...])
{renderSchemaScripts([faq])}
```

---

## Files with Intentional Inline Schemas

These files use inline schemas intentionally (complex/dynamic data):

| File | Reason |
|------|--------|
| `app/layout.tsx` | Global Organization schema |
| `blog/layout.tsx` | Shared Blog schema for all articles |
| `docs/docs-schema.tsx` | Complex nested docs structure |
| `*Client.tsx` files | Dynamic client-side data |

These are fine as-is and don't need migration.

