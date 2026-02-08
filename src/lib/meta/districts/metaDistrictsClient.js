export async function fetchDistricts() {
  const res = await fetch('/api/meta/districts')
  const data = await res.json()
  if (!res.ok) {
    throw new Error(data.message || 'Failed to fetch assemblies')
  }
  return data
}
