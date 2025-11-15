import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'

// Временное in-memory хранилище (пока не установлена БД)
// В продакшене заменить на Redis или базу данных
const viewCounts = new Map<string, { views: number, shares: number, title?: string }>()
const viewEvents: Array<{
  slug: string
  timestamp: number
  userAgent: string
  ipAddress: string
  referrer: string
}> = []

// Получить просмотры статьи
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params
    const data = viewCounts.get(slug) || { views: 0, shares: 0 }
    
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching views:', error)
    return NextResponse.json({ views: 0, shares: 0 })
  }
}

// Увеличить просмотры статьи
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params
    const body = await request.json()
    const { title } = body
    
    // Получаем данные о пользователе для аналитики
    const headersList = await headers()
    const userAgent = headersList.get('user-agent') || ''
    const forwarded = headersList.get('x-forwarded-for')
    const ipAddress = forwarded ? forwarded.split(',')[0] : 
                     headersList.get('x-real-ip') || 
                     'unknown'
    const referrer = headersList.get('referer') || ''
    
    // Получаем текущие данные или создаем новые
    const currentData = viewCounts.get(slug) || { views: 0, shares: 0 }
    const newData = {
      views: currentData.views + 1,
      shares: currentData.shares,
      title: title || currentData.title
    }
    
    // Обновляем счетчик
    viewCounts.set(slug, newData)
    
    // Логируем событие для аналитики
    viewEvents.push({
      slug,
      timestamp: Date.now(),
      userAgent,
      ipAddress,
      referrer
    })
    
    // Ограничиваем размер массива событий (последние 1000)
    if (viewEvents.length > 1000) {
      viewEvents.splice(0, viewEvents.length - 1000)
    }
    
    console.log(`📊 View tracked: ${slug} (${newData.views} total views)`)
    
    return NextResponse.json({ 
      views: newData.views,
      shares: newData.shares 
    })
  } catch (error) {
    console.error('Error tracking view:', error)
    return NextResponse.json({ error: 'Failed to track view' }, { status: 500 })
  }
}

// API для получения статистики (бонус)
export async function PATCH(request: NextRequest) {
  try {
    // Возвращаем общую статистику
    const stats = {
      totalPosts: viewCounts.size,
      totalViews: Array.from(viewCounts.values()).reduce((sum, data) => sum + data.views, 0),
      recentEvents: viewEvents.slice(-10), // Последние 10 событий
      topPosts: Array.from(viewCounts.entries())
        .map(([slug, data]) => ({ slug, ...data }))
        .sort((a, b) => b.views - a.views)
        .slice(0, 5)
    }
    
    return NextResponse.json(stats)
  } catch (error) {
    console.error('Error fetching stats:', error)
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 })
  }
}
