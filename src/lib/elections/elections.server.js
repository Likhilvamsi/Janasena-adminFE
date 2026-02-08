import api from '@/lib/axios'
import { API_ROUTES } from '../../app/constants/apiRoutes'

export async function listElections(token, status) {
  const res = await api.get(API_ROUTES.elections.list, {
    params: status ? { status } : {},
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return res.data
}
export async function createElectionServer(token, payload) {
  const res = await api.post(
    API_ROUTES.elections.create,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  return res.data
}
