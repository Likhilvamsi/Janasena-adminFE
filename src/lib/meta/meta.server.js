import api from '@/lib/axios'
import { API_ROUTES } from '../../app/constants/apiRoutes'
export async function fetchAssemblies(token) {
  const res = await api.get('/meta/assemblies', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return res.data
}
