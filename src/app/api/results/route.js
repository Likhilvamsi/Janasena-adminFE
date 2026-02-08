import { NextResponse } from 'next/server'
import { getAuthToken } from '@/lib/serverAuth'
import { listResults } from '@/lib/results/results.server'

export async function GET(req) {
  try {
    const token = await getAuthToken()

    const { searchParams } = new URL(req.url)
    const page = Number(searchParams.get('page')) || 1
    const limit = Number(searchParams.get('limit')) || 10
    const election_level = searchParams.get('election_level')
    const assembly_id = searchParams.get('assembly_id')
    const data = await listResults(token, {
      page,
      limit,
      election_level,
        assembly_id,
    })

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { message: error.message || 'Unauthorized' },
      { status: 401 }
    )
  }
}
