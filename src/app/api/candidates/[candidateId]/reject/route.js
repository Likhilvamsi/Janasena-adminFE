import { NextResponse } from 'next/server'
import { getAuthToken } from '@/lib/serverAuth'
import { rejectCandidate } from '@/lib/candidates/candidate.server'

export async function PUT(req, context) {
  try {
    const token = await getAuthToken()
    const { candidateId } = await context.params
    const result = await rejectCandidate(token, candidateId)
    return NextResponse.json(result)
  } catch (error) {
    console.error('Approve error:', error)
    return NextResponse.json(
      { message: error.message || 'Reject failed' },
      { status: 400 }
    )
  }
}
