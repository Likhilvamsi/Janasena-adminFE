'use client'

import { useEffect, useState } from 'react'
import { fetchCandidates } from '@/lib/candidates/candidate.client'
import { mapCandidatesTable } from '@/utils/candidate/candidateMapper'

export function useCandidates() {
  const [candidateList, setCandidateList] = useState([])
  const [summary, setSummary] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function load() {
      try {
        setLoading(true)
        setError(null)

        const data = await fetchCandidates()
        setCandidateList(data.candidates.map(mapCandidatesTable))
        setSummary(data.summary)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [])

  return {
    candidateList,
    summary,
    loading,
    error,
    clearError: () => setError(null),
  }
}
