import { Metadata } from 'next'
import { notFound } from "next/navigation"
import { blogPosts } from "../_lib/blog-data"
import { BlogPostClient } from "./BlogPostClient"
import { generateMetadata as generatePageMetadata } from '@/components/seo/page-metadata'
import { PageMetadata } from '@/components/seo/page-metadata'

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

// export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
//   const post = blogPosts.find((post) => post.slug === params.slug)

//   if (!post) {
//     return {
//       title: 'Post Not Found',
//       description: 'The requested blog post could not be found.',
//     }
//   }

//   return generatePageMetadata({
//     title: post.title,
//     description: post.description,
//     image: post.image,
//     type: 'article',
//     schemaType: 'Article',
//     schemaData: {
//       title: post.title,
//       description: post.description,
//       image: post.image,
//       datePublished: new Date().toISOString(),
//       dateModified: new Date().toISOString(),
//     },
//   })
// }

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 3)

  return (
    <>
      <PageMetadata
        title={post.title}
        description={post.description}
        image={post.image}
        type="article"
        schemaType="Article"
        schemaData={{
          title: post.title,
          description: post.description,
          image: post.image,
          datePublished: new Date().toISOString(),
          dateModified: new Date().toISOString(),
        }}
      />
      <BlogPostClient post={post} relatedPosts={relatedPosts} />
    </>
  )
}
