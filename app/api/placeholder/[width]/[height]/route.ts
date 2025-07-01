import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: Request, { params }: { params: { width: string, height: string } }) {
  return new Response(`Placeholder: ${params.width}x${params.height}`, { status: 200 });
} 