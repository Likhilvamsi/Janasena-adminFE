import { NextResponse } from 'next/server'
import { getAuthToken } from '../../../../lib/serverAuth'
import { fetchAssemblies } from '../../../../lib/meta/meta.server'

export async function GET() {
  try {
    const token = await getAuthToken()

    const assemblies = await fetchAssemblies(token)
    return NextResponse.json(assemblies)
  } catch (error) {
    console.error('[META_ASSEMBLIES]', error)

    return NextResponse.json(
      {
        message: ' to load assemblies',
      },
      { status: 401 }
    )
  }Failed
}
