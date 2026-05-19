import { NextRequest, NextResponse } from 'next/server'
import { readFile, stat } from 'fs/promises'
import { basename, extname, isAbsolute, relative, resolve } from 'path'

const DOCS_DIR = resolve(process.cwd(), 'public', 'docs')

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  try {
    const { path } = await params
    const filePath = resolve(DOCS_DIR, ...path)
    const relativePath = relative(DOCS_DIR, filePath)
    
    // Security check - ensure file is within docs directory
    if (
      path.length === 0 ||
      path.some((part) => part.includes('\0')) ||
      relativePath.startsWith('..') ||
      isAbsolute(relativePath)
    ) {
      return new NextResponse('Forbidden', { status: 403 })
    }
    
    // Ensure file has .pdf extension
    if (extname(filePath).toLowerCase() !== '.pdf') {
      return new NextResponse('Only PDF files are allowed', { status: 400 })
    }
    
    // Check if file exists
    let fileStat
    try {
      fileStat = await stat(filePath)
    } catch {
      return new NextResponse('PDF not found', { status: 404 })
    }
    if (!fileStat.isFile()) {
      return new NextResponse('PDF not found', { status: 404 })
    }
    
    // Read the PDF file
    const fileBuffer = await readFile(filePath)
    
    // Get filename for Content-Disposition
    const filename = basename(filePath)
    const safeFilename = filename.replace(/[^\w .,-]/g, '_').replace(/"/g, '_')
    
    // Return PDF with proper headers
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `inline; filename="${safeFilename}"; filename*=UTF-8''${encodeURIComponent(filename)}`,
        'Cache-Control': 'public, max-age=31536000, immutable',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'Content-Security-Policy': "default-src 'self'; object-src 'self';"
      }
    })
  } catch (error) {
    if (process.env.NODE_ENV === 'development') console.error('Error serving PDF:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
