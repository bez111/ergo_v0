import { NextRequest, NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  try {
    const { path } = await params
    const filePath = join(process.cwd(), 'public', 'docs', ...path)
    
    // Security check - ensure file is within docs directory
    if (!filePath.includes('/public/docs/')) {
      return new NextResponse('Forbidden', { status: 403 })
    }
    
    // Ensure file has .pdf extension
    if (!filePath.toLowerCase().endsWith('.pdf')) {
      return new NextResponse('Only PDF files are allowed', { status: 400 })
    }
    
    // Check if file exists
    if (!existsSync(filePath)) {
      return new NextResponse('PDF not found', { status: 404 })
    }
    
    // Read the PDF file
    const fileBuffer = await readFile(filePath)
    
    // Get filename for Content-Disposition
    const filename = path[path.length - 1]
    
    // Return PDF with proper headers
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `inline; filename="${filename}"`,
        'Cache-Control': 'public, max-age=31536000, immutable',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'Content-Security-Policy': "default-src 'self'; object-src 'self';"
      }
    })
  } catch (error) {
    console.error('Error serving PDF:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
