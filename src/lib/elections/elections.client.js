export async function fetchElections(status) {
  const query = status && status !== 'all' ? `?status=${status}` : ''
  const res = await fetch(`/api/elections${query}`)
  if (!res.ok) {
    throw {
      message: data.message || 'Failed to fetch elections',
      code: data.code || 'UNKNOWN_ERROR',
      status: res.status,
    }
  }
  return res.json()
}
export async function createElectionClient(payload) {
  const res = await fetch('/api/elections/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message || 'Create election failed')
  }

  return data
}
