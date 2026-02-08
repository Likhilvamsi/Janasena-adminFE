import { cookies } from 'next/headers'

export async function getAuthToken() {
  const cookieStore = await cookies()   
  const token = cookieStore.get('access_token')?.value

  if (!token) {
    throw new Error('Unauthorized')
  }

  return token
}
