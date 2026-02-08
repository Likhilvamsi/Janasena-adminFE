export async function fetchEventsClient() {
  const res = await fetch('/api/meta/events')

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message || 'Failed to fetch events')
  }

  return data
}
