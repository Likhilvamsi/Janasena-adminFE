import { NextResponse } from 'next/server'
import { getAuthToken } from '@/lib/serverAuth'
import { approveCandidate } from '@/lib/candidates/candidate.server'

export async function POST(req, context) {
  console.log('--- API HIT: /api/nominations/[nominationId]/approve ---')

  try {
    // ✅ App Router: params is async
    const params = await context.params
    const rawNominationId = params.nominationId

    console.log('RAW nominationId:', rawNominationId, typeof rawNominationId)

    const nominationId = Number(rawNominationId)

    console.log('PARSED nominationId:', nominationId)
    console.log('IS INTEGER:', Number.isInteger(nominationId))

    // ✅ Get token (also async-safe)
    const token = await getAuthToken()
    console.log('TOKEN:', token)

    if (!token) {
      console.error('❌ STOPPED: TOKEN MISSING')
      return NextResponse.json(
        { message: 'Token missing' },
        { status: 401 }
      )
    }

    if (!Number.isInteger(nominationId)) {
      console.error('❌ STOPPED: INVALID NOMINATION ID')
      return NextResponse.json(
        { message: 'Invalid nomination id' },
        { status: 400 }
      )
    }

    console.log('➡️ CALLING BACKEND APPROVE API')

    // ✅ Call backend server function
    const result = await approveCandidate(token, nominationId)

    console.log('✅ BACKEND RESPONSE:', result)

    return NextResponse.json(result)
  } catch (error) {
    console.error(
      '🔥 APPROVE API ERROR:',
      error?.response?.data || error
    )

    return NextResponse.json(
      {
        message:
          error?.response?.data?.detail ||
          error?.message ||
          'Approve failed',
      },
      { status: 500 }
    )
  }
}
