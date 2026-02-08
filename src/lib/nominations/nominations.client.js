export async function fetchNominations() {
  const res = await fetch('/api/nominations')

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message || 'Failed to fetch nominations')
  }

  return data
}

export async function sendNominationNotificationClient(eventId) {
  if (!Number.isInteger(eventId)) {
    throw new Error('Invalid event id')
  }

  const res = await fetch(`/api/nominations/${eventId}`, {
    method: 'POST',
    credentials: 'include', // keep this
  })

  const text = await res.text()
  const data = text ? JSON.parse(text) : null

  if (!res.ok) {
    let message = 'Failed to send notification'

    if (data?.message) {
      message = data.message
    } else if (data?.detail) {
      if (Array.isArray(data.detail)) {
        message = data.detail.map(d => d.msg).join(', ')
      } else {
        message = data.detail
      }
    }

    throw new Error(message)
  }
  return data ?? { message: 'Notification sent successfully' }
}
export async function statusApprove(nominationId) {
  if (!Number.isInteger(nominationId)) {
    throw new Error('Invalid nomination id')
  }
  const res = await fetch(
    `/api/nominations/approve/${nominationId}/approve`,
    {
      method: 'POST',
      credentials: 'include', 
    }
  )

  const text = await res.text()
  const data = text ? JSON.parse(text) : null

  if (!res.ok) {
    throw {
      message:
        data?.message || 'Failed to approve nomination',
      status: res.status,
    }
  }

  return data
}
export async function statusReject(nominationId) {
  const res = await fetch(
    `/api/nominations/reject/${nominationId}/reject`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        reason: 'Not eligible', // ✅ STATIC reason
      }),
    }
  )

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message || 'Reject failed')
  }

  return data
}


