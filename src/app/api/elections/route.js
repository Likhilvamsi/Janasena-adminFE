import { NextResponse } from 'next/server'
import { getAuthToken } from '../../../lib/serverAuth'
import { listElections} from '../../../lib/elections/elections.server'
export async function GET(req) {
  try {
    const token = await getAuthToken()
    const { searchParams } = new URL(req.url)
    const status = searchParams.get('status')
    const elections = await listElections(token, status)
    return NextResponse.json(elections)
  } catch (error) {
    console.error('AUTH ERROR:', error.message)
    return NextResponse.json(
      { message: error.message || 'Unauthorized' },
      { status: 401 }
    )
  }
}
