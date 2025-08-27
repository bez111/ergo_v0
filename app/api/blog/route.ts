import { NextRequest, NextResponse } from 'next/server'
import { blogPosts } from '@/app/[locale]/blog/_lib/blog-data'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get('page') || '1')
  const pageSize = parseInt(searchParams.get('pageSize') || '12')
  
  // Calculate pagination
  const startIndex = (page - 1) * pageSize
  const endIndex = startIndex + pageSize
  const posts = blogPosts.slice(startIndex, endIndex)
  const total = blogPosts.length
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