import api from '@/lib/axios'
import { API_ROUTES } from '@/app/constants/apiRoutes'

export async function listNotifications(token, { page = 1 }) {
  const res = await api.get(API_ROUTES.notifications.list, {
    params: { page },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return res.data
}
export async function createNotification(token, payload) {
  const res = await api.post(
    API_ROUTES.notifications.create,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  return res.data
}