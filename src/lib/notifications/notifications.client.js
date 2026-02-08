export async function fetchNotifications({ page = 1 }) {
  const res = await fetch(`/api/notifications?page=${page}`, {
    credentials: 'include',
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message || 'Failed to fetch notifications')
  }

  return data
}
export async function createNotification(payload) {
  const res = await fetch('/api/notifications/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include', // ✅ IMPORTANT
    body: JSON.stringify(payload),
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message || 'Create notification failed')
  }

  return data
}
