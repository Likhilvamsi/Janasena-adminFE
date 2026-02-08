import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { getAuthToken } from '@/lib/serverAuth'
import { sendNominationNotificationServer } from '@/lib/nominations/nominations.server'

export async function POST(req, context) {
  console.log('--- API HIT: /api/nominations/[eventId] ---')

  try {
    // ✅ FIX 1: await params
    const params = await context.params
    const rawEventId = params.eventId

    console.log('RAW eventId:', rawEventId, typeof rawEventId)

    const eventId = Number(rawEventId)
    console.log('PARSED eventId:', eventId)
    console.log('IS INTEGER:', Number.isInteger(eventId))

    // ✅ FIX 2: await cookies()
    const cookieStore = await cookies()
    console.log('ALL COOKIES:', cookieStore.getAll())

    const token = await getAuthToken()
    console.log('TOKEN from getAuthToken():', token)

    if (!token) {
      console.error('❌ STOPPED: TOKEN MISSING')
      return NextResponse.json(
        { message: 'Token missing' },
        { status: 401 }
      )
    }

    if (!Number.isInteger(eventId)) {
      console.error('❌ STOPPED: INVALID EVENT ID')
      return NextResponse.json(
        { message: 'Invalid event id' },
        { status: 400 }
      )
    }

    console.log('➡️ CALLING BACKEND API NOW')

    const result = await sendNominationNotificationServer(token, eventId)

    console.log('✅ BACKEND RESPONSE:', result)

    return NextResponse.json(result)
  } catch (error) {
    console.error(
      '🔥 API ROUTE ERROR:',
      error?.response?.data || error
    )

    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
