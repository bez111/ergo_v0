import { NextRequest, NextResponse } from 'next/server'
import sharp from 'sharp'
import fs from 'fs/promises'
import path from 'path'

export const runtime = 'nodejs'

// Cache optimized images
const imageCache = new Map<string, Buffer>()
const PUBLIC_DIR = path.resolve(process.cwd(), 'public')
const ALLOWED_SOURCE_EXTENSIONS = new Set(['.avif', '.gif', '.jpeg', '.jpg', '.png', '.webp'])
const ALLOWED_FORMATS = new Set(['avif', 'jpeg', 'jpg', 'png', 'webp'])
const MAX_WIDTH = 2400
const MAX_HEIGHT = 2400
const MAX_SOURCE_BYTES = 20 * 1024 * 1024

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  try {
    const resolvedParams = await params
    const imagePath = resolvedParams.path.join('/')
    const fullPath = path.resolve(PUBLIC_DIR, ...resolvedParams.path)
    const relativePath = path.relative(PUBLIC_DIR, fullPath)
    if (
      !imagePath ||
      imagePath.includes('\0') ||
      relativePath.startsWith('..') ||
      path.isAbsolute(relativePath)
    ) {
      return new NextResponse('Forbidden', { status: 403 })
    }

    const sourceExtension = path.extname(fullPath).toLowerCase()
    if (!ALLOWED_SOURCE_EXTENSIONS.has(sourceExtension)) {
      return new NextResponse('Unsupported image type', { status: 400 })
    }

    const searchParams = request.nextUrl.searchParams

    // Get query parameters
    const width = boundedInt(searchParams.get('w'), 0, MAX_WIDTH, 0)
    const height = boundedInt(searchParams.get('h'), 0, MAX_HEIGHT, 0)
    const quality = boundedInt(searchParams.get('q'), 1, 95, 85)
    const format = (searchParams.get('f') || 'webp').toLowerCase()
    if (!ALLOWED_FORMATS.has(format)) {
      return new NextResponse('Unsupported output format', { status: 400 })
    }

    // Generate cache key
    const cacheKey = `${relativePath}-${width}-${height}-${quality}-${format}`

    // Check cache
    if (imageCache.has(cacheKey)) {
      const cachedImage = imageCache.get(cacheKey)!
      return new NextResponse(new Uint8Array(cachedImage), {
        headers: {
          'Content-Type': contentTypeForFormat(format),
          'Cache-Control': 'public, max-age=31536000, immutable',
          'X-Optimized': 'true',
        },
      })
    }

    // Check if file exists
    let stat
    try {
      stat = await fs.stat(fullPath)
    } catch {
      return new NextResponse('Image not found', { status: 404 })
    }
    if (!stat.isFile()) {
      return new NextResponse('Image not found', { status: 404 })
    }
    if (stat.size > MAX_SOURCE_BYTES) {
      return new NextResponse('Image too large', { status: 413 })
    }

    // Read and process image
    let image = sharp(fullPath, { limitInputPixels: 40_000_000 })

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
    return new NextResponse(new Uint8Array(optimizedBuffer), {
      headers: {
        'Content-Type': contentTypeForFormat(format),
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
    if (process.env.NODE_ENV === 'development') console.error('Image optimization error:', error)
    return new NextResponse('Error processing image', { status: 500 })
  }
}

// Cache warmup moved to separate utility if needed

function boundedInt(value: string | null, min: number, max: number, fallback: number): number {
  if (!value) return fallback
  const parsed = Number.parseInt(value, 10)
  if (!Number.isFinite(parsed)) return fallback
  return Math.min(max, Math.max(min, parsed))
}

function contentTypeForFormat(format: string): string {
  return format === 'jpg' ? 'image/jpeg' : `image/${format}`
}
