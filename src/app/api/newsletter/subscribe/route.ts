
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from 'next/server'
import { subscribeToNewsletter } from '@/lib/beehiiv-api'
import { rateLimit, searchLimiter } from '@/lib/rate-limiter'

const MAX_BODY_BYTES = 8 * 1024
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: NextRequest) {
  const rateLimitResult = await rateLimit(request, searchLimiter)
  if (rateLimitResult) return rateLimitResult

  try {
    const body = await readLimitedJson(request)
    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : ''
    const source = safeText(body.source, 'website')
    const utmSource = safeText(body.utmSource)
    const utmMedium = safeText(body.utmMedium)
    const utmCampaign = safeText(body.utmCampaign)

    // Валидация email
    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      )
    }

    // Простая валидация формата email
    if (email.length > 254 || !EMAIL_RE.test(email)) {
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
          ...(process.env.NODE_ENV === 'development' ? { details: result.error } : {})
        },
        { status: 400 }
      )
    }
  } catch (error) {
    if (error instanceof Error && error.message === 'request body too large') {
      return NextResponse.json(
        { success: false, error: 'Request body too large' },
        { status: 413 },
      )
    }
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { success: false, error: 'Invalid JSON body' },
        { status: 400 },
      )
    }
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
export async function GET() {
  return NextResponse.json(
    { success: false, error: 'Method not allowed' },
    { status: 405, headers: { Allow: 'POST' } },
  )
}

async function readLimitedJson(request: NextRequest): Promise<Record<string, unknown>> {
  const length = Number(request.headers.get('content-length') ?? '0')
  if (Number.isFinite(length) && length > MAX_BODY_BYTES) {
    throw new Error('request body too large')
  }
  const text = await request.text()
  if (text.length > MAX_BODY_BYTES) {
    throw new Error('request body too large')
  }
  return JSON.parse(text) as Record<string, unknown>
}

function safeText(value: unknown, fallback = ''): string {
  if (typeof value !== 'string') return fallback
  return value.trim().replace(/[^\w .:/-]/g, '').slice(0, 120) || fallback
}
