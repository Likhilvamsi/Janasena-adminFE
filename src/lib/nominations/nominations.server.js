import api from '@/lib/axios'
import { API_ROUTES } from '../../app/constants/apiRoutes'
export async function fetchNominations(token) {
  const res = await api.get(API_ROUTES.nominations.list, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return res.data
}
export async function sendNominationNotificationServer(token, eventId) {
  if (!token) {
    throw new Error('Token is missing')
  }

  const res = await api.post(
    `/nominations/${eventId}`,
    null,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    }
  )

  return res.data   // ✅ THIS WAS MISSING
}
export async function approveCandidate(token, candidateId) {
  const res = await api.post(API_ROUTES.candidates.APPROVE_CANDIDATE(candidateId),
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  return res.data
}


export async function rejectCandidate(token, nominationId, body) {
  const res = await api.post(
    `/nominations/${nominationId}/reject`,
    body, 
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  return res.data
}
