export async function fetchMemebers(status) {
  const query = status && status !== 'all' ? `?status=${status}` : ''
  const res = await fetch(`/api/members${query}`)
  if (!res.ok) {
    throw {
      message: data.message || 'Failed to fetch elections',
      code: data.code || 'UNKNOWN_ERROR',
      status: res.status,
    }
  }
  return res.json()
}