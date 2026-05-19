import { NextRequest, NextResponse } from 'next/server'
import { getAllBlogPostsWithUploaded } from '@/app/[locale]/blog/_lib/uploaded-posts'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const page = boundedInt(searchParams.get('page'), 1, 10_000, 1)
  const pageSize = boundedInt(searchParams.get('pageSize'), 1, 50, 12)
  const allPosts = await getAllBlogPostsWithUploaded()

  // Calculate pagination
  const startIndex = (page - 1) * pageSize
  const endIndex = startIndex + pageSize
  const posts = allPosts.slice(startIndex, endIndex)
  const total = allPosts.length
  const hasMore = endIndex < total

  return NextResponse.json({
    posts,
    pagination: {
      page,
      pageSize,
      total,
      totalPages: Math.ceil(total / pageSize),
      hasMore
    }
  })
}

function boundedInt(value: string | null, min: number, max: number, fallback: number): number {
  const parsed = Number.parseInt(value ?? '', 10)
  if (!Number.isFinite(parsed)) return fallback
  return Math.min(max, Math.max(min, parsed))
}
