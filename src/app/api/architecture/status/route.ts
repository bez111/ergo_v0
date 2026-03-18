import { NextResponse } from 'next/server'
import architectureMonitor from '@/lib/architecture-monitor'

export async function GET() {
  try {
    const dashboardData = await architectureMonitor.getDashboardData()
    
    return NextResponse.json({
      success: true,
      data: dashboardData
    }, {
      status: 200,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    if (process.env.NODE_ENV === 'development') console.error('Architecture status error:', error)
    
    return NextResponse.json({
      success: false,
      error: 'Failed to generate architecture status',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, {
      status: 500
    })
  }
} 