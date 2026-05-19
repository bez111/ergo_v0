# Blog CMS over Vercel Blob

The blog now has a small Blob-backed publishing path for articles that should not require a code change and full site deploy every time.

## Runtime model

- Static repo articles stay in `src/content/blog` and `src/app/[locale]/blog/_lib/blog-data.ts`.
- Uploaded articles live in Vercel Blob under `cms/blog/v1/`.
- `/admin/blog` uploads a Markdown file and optional hero image.
- `/api/admin/blog` validates the admin token, optimizes the hero image to `1200x630`, stores the article bundle, and revalidates blog surfaces.
- `/blog/[slug]` renders published Blob articles through the same Markdown article component as static posts.
- Blog list, RSS, JSON Feed, sitemap, and `/api/search-index` merge static posts with published Blob posts.

## Required environment

```bash
BLOB_READ_WRITE_TOKEN=<vercel-blob-token>
BLOG_ADMIN_TOKEN=<random-admin-token>
```

Generate the admin token locally with:

```bash
openssl rand -hex 32
```

## Publishing flow

1. Open `/admin/blog`.
2. Paste `BLOG_ADMIN_TOKEN`.
3. Upload a `.md` article.
4. Upload a hero image if available.
5. Choose `Published` or `Draft`.
6. Save to Blob.

Published articles appear at `/blog/<slug>`. Drafts stay visible only in the admin list.

## Markdown contract

Recommended frontmatter:

```yaml
---
title: "Article title"
excerpt: "Short card and metadata summary."
author: "Developer Relations"
category: "Build Log"
date_published: "2026-05-18"
date_modified: "2026-05-18"
tags:
  - Ergo
  - Agent Economy
target_keywords:
  - ergo agent economy
---
```

If `slug` is omitted, the slug is generated from the title. If `date_published` is omitted, the current date is used.

## Safety notes

- The admin API requires `BLOG_ADMIN_TOKEN` in production.
- Uploaded Markdown is rendered with HTML sanitization enabled.
- Slugs that already belong to static repo articles are rejected.
- Hero images are stored as public Blob assets; Markdown and index bundles are private Blob objects.

