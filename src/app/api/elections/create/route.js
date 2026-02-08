import { NextResponse } from 'next/server'
import { getAuthToken } from '@/lib/serverAuth'
import { createElectionServer } from '@/lib/elections/elections.server'
export async function POST(req) {
  try {
    const token = await getAuthToken()
    const body = await req.json()

    const result = await createElectionServer(token, body)

    return NextResponse.json(result)
  } catch (error) {
    console.error('[CREATE_ELECTION]', error)

    return NextResponse.json(
      {
        message:
          error?.response?.data?.message ||
          error.message ||
          'Failed to create election',
      },
      { status: 422 }
    )
  }
}

