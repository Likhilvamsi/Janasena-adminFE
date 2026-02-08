export async function fetchAssemblies() {
  const res = await fetch('/api/meta/assemblies')

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message || 'Failed to fetch assemblies')
  }

  return data
}
