'use client'

import { useState } from 'react'
import { statusReject } from '@/lib/candidates/candidate.client'

export function useRejectCandidate() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const reject= async (candidateId) => {
    try {
      setLoading(true)
      setError(null)
      await statusReject(candidateId)
      return true
    } catch (err) {
      setError(err)
      return false
    } finally {
      setLoading(false)
    }
  }

  return {
    reject,
    loading,
    error,
    clearError: () => setError(null),
  }
}
