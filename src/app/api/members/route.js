import { NextResponse } from 'next/server'
import { getAuthToken } from '../../../lib/serverAuth'
import { listMembers } from '../../../lib/members/members.server'
export async function GET(req) {
  try {
    const token = await getAuthToken()
    const { searchParams } = new URL(req.url)
    const status = searchParams.get('status')
    const members = await listMembers(token, status)
    return NextResponse.json(members)
  } catch (error) {
    console.error('AUTH ERROR:', error.message)
    return NextResponse.json(
      { message: error.message || 'Unauthorized' },
      { status: 401 }
    )
  }
}