/**
 * Blog Internationalization Utilities
 * 
 * This module provides functions for localizing blog content.
 * 
 * Strategy:
 * 1. Blog posts in blog-data.ts serve as the English (default) source
 * 2. Translations are stored in messages/{locale}.json under "blogPosts.{slug}"
 * 3. getLocalizedBlogPost() merges translations with original post data
 * 
 * To add a translation for a post:
 * 1. Add to messages/ru.json (or other locale):
 *    "blogPosts": {
 *      "eutxo-model-explained": {
 *        "title": "Модель eUTXO: Объяснение",
 *        "excerpt": "Глубокое погружение в расширенную модель UTXO Ergo..."
 *      }
 *    }
 * 
 * 2. Only include fields that should be translated (title, excerpt, content)
 *    Other fields (date, author, slug, etc.) remain from the original
 */

import { blogPosts,type BlogPost } from './blog-data'

export interface BlogPostTranslation {
  title?: string
  excerpt?: string
  content?: string
}

export type BlogPostsTranslations = Record<string, BlogPostTranslation>

/**
 * Get a localized blog post by merging translation with original
 */
export function getLocalizedBlogPost(
  post: BlogPost,
  translations?: BlogPostsTranslations
): BlogPost {
  const translation = translations?.[post.slug]
  if (!translation) return post

  const nextTitle = translation.title ?? post.title
  const nextExcerpt = translation.excerpt ?? post.excerpt
  const nextContent = translation.content ?? post.content

  // With `exactOptionalPropertyTypes`, we must omit optional props instead of
  // explicitly setting them to `undefined`.
  return {
    ...post,
    title: nextTitle,
    excerpt: nextExcerpt,
    ...(nextContent !== undefined ? { content: nextContent } : {}),
  }
}

/**
 * Get all blog posts with localization applied
 */
export function getLocalizedBlogPosts(
  translations?: BlogPostsTranslations
): BlogPost[] {
  return blogPosts.map(post => getLocalizedBlogPost(post, translations))
}

/**
 * Get a single post by slug with localization
 */
export function getLocalizedBlogPostBySlug(
  slug: string,
  translations?: BlogPostsTranslations
): BlogPost | undefined {
  const post = blogPosts.find(p => p.slug === slug)
  if (!post) return undefined
  return getLocalizedBlogPost(post, translations)
}

/**
 * Get posts by category with localization
 */
export function getLocalizedPostsByCategory(
  category: string,
  translations?: BlogPostsTranslations
): BlogPost[] {
  return getLocalizedBlogPosts(translations).filter(
    post => post.category.toLowerCase() === category.toLowerCase()
  )
}

/**
 * Get featured posts with localization
 */
export function getLocalizedFeaturedPosts(
  translations?: BlogPostsTranslations
): BlogPost[] {
  return getLocalizedBlogPosts(translations).filter(post => post.featured)
}

/**
 * Get trending posts with localization
 */
export function getLocalizedTrendingPosts(
  translations?: BlogPostsTranslations
): BlogPost[] {
  return getLocalizedBlogPosts(translations).filter(post => post.trending)
}

// Re-export for convenience
export { authors,blogPosts,type Author,type BlogPost } from './blog-data'

