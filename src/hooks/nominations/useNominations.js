'use client'

import { useEffect, useState } from 'react'
import { fetchNominations } from '@/lib/nominations/nominations.client'
import { mapNominationCard } from '@/utils/nominations/nominationMapper'

export function useNominations() {
  const [nominations, setNominations] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function load() {
      try {
        setLoading(true)
        setError(null)

        const data = await fetchNominations()

        // ✅ APPLY MAPPER HERE
        const mapped = data.nominations.map(mapNominationCard)
        setNominations(mapped)

      } catch (err) {
        setError(err.message || 'Failed to load nominations')
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [])

  return {
    nominations,
    loading,
    error,
    clearError: () => setError(null),
  }
}
