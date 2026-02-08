export async function fetchCandidates() {
  const res = await fetch('/api/candidates')
  const data = await res.json()
  if (!res.ok) {
    throw new Error(data.message || 'Failed to fetch nominations')
  }
  return data
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

export async function statusReject(candidateId) {
  const res = await fetch(`/api/candidates/${candidateId}/reject`, {
    method: 'POST',
  })

  if (!res.ok) {
    const data = await res.json()
    throw {
      message: data.message || 'Failed to approve candidate',
      status: res.status,
    }
  }

  return res.json()
}
