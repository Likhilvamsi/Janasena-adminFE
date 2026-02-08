'use client'

import { useState } from 'react'
import { statusApprove } from '@/lib/nominations/nominations.client'

export function useApproveCandidate() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const approve = async (nominationId) => {
    console.log(nominationId,"pppp")
    try {
      setLoading(true)
      setError(null)
      await statusApprove(nominationId)
      return true
    } catch (err) {
      setError(err)
      return false
    } finally {
      setLoading(false)
    }
  }

  return {
    approve,      // ✅ FUNCTION
    loading,
    error,
    clearError: () => setError(null),
  }

}
