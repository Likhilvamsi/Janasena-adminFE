'use client'
import { useState } from 'react'
import { statusApprove } from '@/lib/candidates/candidate.client'
export function useApproveCandidate() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const approve = async (candidateId) => {
    debugger
    console.log(candidateId,"pppp")
    try {
      setLoading(true)
      setError(null)
      await statusApprove(candidateId)
      return true
    } catch (err) {
      setError(err)
      return false
    } finally {
      setLoading(false)
    }
  }

  return {
    approve,     
    loading,
    error,
    clearError: () => setError(null),
  }

}
