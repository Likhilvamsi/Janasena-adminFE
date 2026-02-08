import { NextResponse } from 'next/server'
import { getAuthToken } from '../../../lib/serverAuth'
import { ListCandidates } from '../../../lib/candidates/candidate.server'
export async function GET(req) {
  try {
    const token = await getAuthToken()
    const { searchParams } = new URL(req.url)
    const status = searchParams.get()
    const elections = await ListCandidates(token, status)
    return NextResponse.json(elections)
  } catch (error) {
    console.error('AUTH ERROR:', error.message)
    return NextResponse.json(
      { message: error.message || 'Unauthorized' },
      { status: 401 }
    )
  }
}