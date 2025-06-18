import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { width: string; height: string } }
) {
  const width = parseInt(params.width) || 400
  const height = parseInt(params.height) || 200
  
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <rect width="${width}" height="${height}" fill="#f3f4f6"/>
      <rect x="1" y="1" width="${width - 2}" height="${height - 2}" fill="none" stroke="#d1d5db" stroke-width="2"/>
      <text x="${width / 2}" y="${height / 2}" font-family="Arial, sans-serif" font-size="16" fill="#6b7280" text-anchor="middle" dominant-baseline="middle">
        <tspan x="${width / 2}" dy="-10">Placeholder</tspan>
        <tspan x="${width / 2}" dy="20" font-size="14">${width}x${height}</tspan>
      </text>
    </svg>
  `

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
} 