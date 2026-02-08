import { NextResponse } from 'next/server'
import { getAuthToken } from '@/lib/serverAuth'
import { listNotifications } from '@/lib/notifications/notifications.server'

export async function GET(req) {
  try {
    const token = await getAuthToken()
    const { searchParams } = new URL(req.url)
    const page = Number(searchParams.get('page')) || 1

    const data = await listNotifications(token, { page })

    return NextResponse.json(data)
  } catch (error) {
    console.error('[NOTIFICATIONS]', error)

    return NextResponse.json(
      { message: error.message || 'Unauthorized' },
      { status: 401 }
    )
  }
}
