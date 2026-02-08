'use client'

import { useEffect, useState } from 'react'
import { fetchResults } from '@/lib/results/results.client'
import { mapResultToCard } from '@/utils/results/resultsMapper'

export function useResults({ page = 1, limit = 10, election_level = 'all',assembly_id = 'all', }) {
  const [results, setResults] = useState([])
  const [pagination, setPagination] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function load() {
      try {
        setLoading(true)
        setError(null)

        const data = await fetchResults({
          page,
          limit,
          election_level,
          assembly_id
        })

        // ✅ FIX: items not results
        setResults(data.items.map(mapResultToCard))
        setPagination(data.pagination)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [page, limit, election_level,assembly_id])

  return {
    results,
    pagination,
    loading,
    error,
    clearError: () => setError(null),
  }
}
