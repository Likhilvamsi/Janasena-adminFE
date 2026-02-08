import api from '@/lib/axios'
import { API_ROUTES } from '@/app/constants/apiRoutes'

export async function fetchEventsServer(token) {
  const res = await api.get(API_ROUTES.meta.events, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return res.data
}
