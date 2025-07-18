import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const url = request.nextUrl;
  const segments = url.pathname.split('/');
  const width = segments[segments.length - 2];
  const height = segments[segments.length - 1];
  return NextResponse.json({ message: `Placeholder: ${width}x${height}` });
} 