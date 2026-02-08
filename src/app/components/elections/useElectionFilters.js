export function useElectionFilters(data, filters) {
  return data.filter(item => {
    const matchSearch =
      item.title.toLowerCase().includes(filters.search.toLowerCase())

    const matchStatus =
      filters.status === 'all' || item.status === filters.status

    const matchLevel =
      filters.level === 'all' || item.level === filters.level

    return matchSearch && matchStatus && matchLevel
  })
}
