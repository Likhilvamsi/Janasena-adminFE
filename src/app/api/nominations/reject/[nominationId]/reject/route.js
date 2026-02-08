import { NextResponse } from 'next/server'
import { getAuthToken } from '@/lib/serverAuth'
import { rejectCandidate } from '@/lib/nominations/nominations.server'

export async function POST(req, { params }) {
  try {
    const token = await getAuthToken()
    if (!token) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }

    const nominationId = Number(params.nominationId)

    // ✅ READ BODY FROM CLIENT
    const body = await req.json()
    // body = { reason: "Not eligible" }

    const result = await rejectCandidate(
      token,
      nominationId,
      body
    )

    return NextResponse.json(result)
  } catch (error) {
    console.error('Reject error:', error)

    return NextResponse.json(
      { message: error.message || 'Reject failed' },
      { status: 400 }
    )
  }
}
