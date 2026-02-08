import { NextResponse } from 'next/server'
import { getAuthToken } from '@/lib/serverAuth'
import { fetchEventsServer } from '@/lib/meta/events/events.server'

export async function GET() {
  try {
    const token = await getAuthToken()

    if (!token) {
      return NextResponse.json(
        { message: 'Invalid token' },
        { status: 401 }
      )
    }

    const events = await fetchEventsServer(token)
    return NextResponse.json(events)
  } catch (error) {
    console.error('[META_EVENTS]', error)

    return NextResponse.json(
      { message: 'Failed to load events' },
      { status: 500 }
    )
  }
}
