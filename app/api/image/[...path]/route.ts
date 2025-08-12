import { NextRequest, NextResponse } from 'next/server'
import sharp from 'sharp'
import fs from 'fs/promises'
import path from 'path'

export const runtime = 'nodejs'

// Cache optimized images
const imageCache = new Map<string, Buffer>()

export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  try {
    const imagePath = params.path.join('/')
    const searchParams = request.nextUrl.searchParams
    
    // Get query parameters
    const width = parseInt(searchParams.get('w') || '0')
    const height = parseInt(searchParams.get('h') || '0')
    const quality = parseInt(searchParams.get('q') || '85')
    const format = searchParams.get('f') || 'webp'
    
    // Generate cache key
    const cacheKey = `${imagePath}-${width}-${height}-${quality}-${format}`
    
    // Check cache
    if (imageCache.has(cacheKey)) {
      const cachedImage = imageCache.get(cacheKey)!
      return new NextResponse(cachedImage, {
        headers: {
          'Content-Type': `image/${format}`,
          'Cache-Control': 'public, max-age=31536000, immutable',
          'X-Optimized': 'true',
        },
      })
    }
    
    // Build full path
    const fullPath = path.join(process.cwd(), 'public', imagePath)
    
    // Check if file exists
    try {
      await fs.access(fullPath)
    } catch {
      return new NextResponse('Image not found', { status: 404 })
    }
    
    // Read and process image
    let image = sharp(fullPath)
    
    // Get metadata for responsive images
    const metadata = await image.metadata()
    
    // Resize if dimensions provided
    if (width || height) {
      image = image.resize(width || undefined, height || undefined, {
        fit: 'inside',
        withoutEnlargement: true,
      })
    }
    
    // Convert to requested format
    let optimizedBuffer: Buffer
    
    switch (format) {
      case 'webp':
        optimizedBuffer = await image
          .webp({ quality, effort: 6 })
          .toBuffer()
        break
        
      case 'avif':
        optimizedBuffer = await image
          .avif({ quality, effort: 6 })
          .toBuffer()
        break
        
      case 'jpeg':
      case 'jpg':
        optimizedBuffer = await image
          .jpeg({ quality, progressive: true })
          .toBuffer()
        break
        
      case 'png':
        optimizedBuffer = await image
          .png({ quality, compressionLevel: 9 })
          .toBuffer()
        break
        
      default:
        optimizedBuffer = await image.toBuffer()
    }
    
    // Cache the result
    if (imageCache.size > 100) {
      // Simple LRU: clear cache when it gets too big
      imageCache.clear()
    }
    imageCache.set(cacheKey, optimizedBuffer)
    
    // Return optimized image
    return new NextResponse(optimizedBuffer, {
      headers: {
        'Content-Type': `image/${format}`,
        'Cache-Control': 'public, max-age=31536000, immutable',
        'X-Original-Format': metadata.format || 'unknown',
        'X-Original-Size': metadata.size?.toString() || '0',
        'X-Optimized-Size': optimizedBuffer.length.toString(),
        'X-Compression-Ratio': (
          ((metadata.size || 0) / optimizedBuffer.length) * 100
        ).toFixed(2),
      },
    })
  } catch (error) {
    console.error('Image optimization error:', error)
    return new NextResponse('Error processing image', { status: 500 })
  }
}

// Preload critical images
export async function warmupCache() {
  const criticalImages = [
    '/logo.png',
    '/hero-bg.jpg',
    '/ergo-icon.svg',
  ]
  
  for (const img of criticalImages) {
    try {
      await fetch(`https://ergoblockchain.org/api/image/${img}?f=webp&q=85`)
    } catch (error) {
      console.error(`Failed to preload ${img}:`, error)
    }
  }
} 