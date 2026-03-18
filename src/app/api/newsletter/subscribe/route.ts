
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from 'next/server'
import { subscribeToNewsletter } from '@/lib/beehiiv-api'
import { newsletterAnalytics } from '@/lib/newsletter-analytics'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, source = 'website', utmSource, utmMedium, utmCampaign } = body

    // Валидация email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      )
    }

    // Простая валидация формата email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Попытка подписки через Beehiiv
    const result = await subscribeToNewsletter(email, source, {
      utm_source: utmSource,
      utm_medium: utmMedium,
      utm_campaign: utmCampaign,
      referring_site: request.headers.get('referer') || undefined
    })

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: 'Successfully subscribed to newsletter!'
      })
    } else {
      // Возвращаем пользователю понятное сообщение об ошибке
      let userMessage = 'Failed to subscribe. Please try again.'
      
      if (result.error?.includes('already subscribed') || result.error?.includes('already exists')) {
        userMessage = 'You are already subscribed to our newsletter!'
      } else if (result.error?.includes('invalid') || result.error?.includes('Invalid')) {
        userMessage = 'Please enter a valid email address.'
      }
      
      return NextResponse.json(
        { 
          success: false, 
          error: userMessage,
          details: result.error // Для отладки
        },
        { status: 400 }
      )
    }
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error. Please try again later.' 
      },
      { status: 500 }
    )
  }
}

// Опционально: GET метод для проверки статуса подписки
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const email = searchParams.get('email')

  if (!email) {
    return NextResponse.json(
      { success: false, error: 'Email parameter is required' },
      { status: 400 }
    )
  }

  try {
    // Здесь можно добавить проверку статуса подписчика через Beehiiv API
    // Пока возвращаем базовый ответ
    return NextResponse.json({
      success: true,
      subscribed: false // Будет реализовано позже
    })
  } catch (error) {
    if (process.env.NODE_ENV === 'development') console.error('Newsletter status check error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to check subscription status' },
      { status: 500 }
    )
  }
}
