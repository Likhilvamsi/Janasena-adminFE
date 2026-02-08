import api from '@/lib/axios'
import { API_ROUTES } from '../../app/constants/apiRoutes'

export async function listMembers(token, status) {
  const res = await api.get(API_ROUTES.members.list, {
    params: status ? { status } : {},
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return res.data
}
