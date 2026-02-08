import api from '@/lib/axios'
import { API_ROUTES } from '../../app/constants/apiRoutes'

export async function ListCandidates(token, status) {
  const res = await api.get(API_ROUTES.candidates.list, {
    params: status ? { status } : {},
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return res.data
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
export async function rejectCandidate(token, candidateId) {
  const res = await api.post(API_ROUTES.candidates.reject_candidate(candidateId),
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  return res.data
}