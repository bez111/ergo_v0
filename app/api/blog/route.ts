import { NextRequest, NextResponse } from 'next/server'
import { blogPosts } from '@/app/blog/_lib/blog-data'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get('page') || '1')
  const pageSize = parseInt(searchParams.get('pageSize') || '12')
  
  // Filter out featured posts for the main list
  const allNonFeatured = blogPosts.filter(p => !p.featured)
  
  // Calculate pagination
  const startIndex = (page - 1) * pageSize
  const endIndex = startIndex + pageSize
  const posts = allNonFeatured.slice(startIndex, endIndex)
  const total = allNonFeatured.length
  const hasMore = endIndex < total
  
  return NextResponse.json({
    posts,
    page,
    pageSize,
    total,
    hasMore,
    totalPages: Math.ceil(total / pageSize)
  })
} 