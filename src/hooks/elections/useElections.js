'use client'
import { useEffect, useState } from 'react'
import { fetchElections } from '../../lib/elections/elections.client'
import { mapElectionToCard } from '../../utils/electionMapper'
export function useElections(status) {
  const [elections, setElections] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function load() {
      try {
        setLoading(true)
        setError(null)
        const data = await fetchElections(status)
        setElections(data.map(mapElectionToCard))
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [status])

  return {
    elections,
    loading,
    error,
    clearError: () => setError(null),
  }
}
