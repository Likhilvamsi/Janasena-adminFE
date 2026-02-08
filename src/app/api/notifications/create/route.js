import { NextResponse } from 'next/server'
import { getAuthToken } from '@/lib/serverAuth'
import { createNotification } from '@/lib/notifications/notifications.server'

export async function POST(req) {
  try {
    const token = await getAuthToken()
    const body = await req.json()

    const result = await createNotification(token, body)

    return NextResponse.json(result)
  } catch (error) {
    console.error('[CREATE_NOTIFICATION]', error)

    return NextResponse.json(
      {
        message: error.message || 'Failed to create notification',
      },
      { status: 422 }
    )
  }
}
