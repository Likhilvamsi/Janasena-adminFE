import { headers } from 'next/headers'

export function getToken() {
  const cookieHeader = headers().get('cookie')

  if (!cookieHeader) return null

  const cookies = Object.fromEntries(
    cookieHeader.split('; ').map(c => c.split('='))
  )

  return cookies.access_token || null
}
