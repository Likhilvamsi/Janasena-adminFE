import { NextResponse } from 'next/server'
import { getAuthToken } from '../../../lib/serverAuth'
import { fetchNominations } from '../../../lib/nominations/nominations.server'
export async function GET() {
  try {
    const token = await getAuthToken()
    const nominations = await fetchNominations(token)
    return NextResponse.json(nominations)
  } catch (error) {
    console.error('[META_ASSEMBLIES]', error)

    return NextResponse.json(
      {
        message: ' to load nominations',
      },
      { status: 401 }
    )
  }
}
