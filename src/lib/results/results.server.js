import api from '@/lib/axios'   // ✅ MISSING LINE
import { API_ROUTES } from '@/app/constants/apiRoutes'

export async function listResults(
  token,
  { page = 1, limit = 10, election_level, assembly_id }
) {
  const res = await api.get(
    API_ROUTES.results.list('all'),
    {
      params: {
        page,
        limit,
        ...(election_level && election_level !== 'all'
          ? { election_level }
          : {}),
        ...(assembly_id && assembly_id !== 'all'
          ? { assembly_id }
          : {}),
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  return res.data
}
