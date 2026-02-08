import { NextResponse } from 'next/server'
import { getAuthToken } from '@/lib/serverAuth'
import { approveNominationServer } from '@/lib/nominations/nomination.server'

export async function POST(req, context) {
  console.log('--- API HIT: /api/nominations/[nominationId]/approve ---')

  try {
    const { nominationId } = await context.params
    const id = Number(nominationId)

    if (!Number.isInteger(id)) {
      return NextResponse.json(
        { message: 'Invalid nomination id' },
        { status: 400 }
      )
    }

    const token = await getAuthToken()
    if (!token) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }

    const result = await approveNominationServer(token, id)
    return NextResponse.json(result)
  } catch (error) {
    console.error('Approve route error:', error?.response?.data || error)

    return NextResponse.json(
      { message: 'Approve failed' },
      { status: 500 }
    )
  }
}
