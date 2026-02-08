import api from '@/lib/axios'
export async function fetchDistricts(token) {
  const res = await api.get('/locations/districts', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return res.data
}
