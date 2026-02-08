'use client'

import { useState } from 'react'
import { createElectionClient } from '@/lib/elections/elections.client'

export function useCreateElection() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const create = async (payload) => {
    try {
      setLoading(true)
      setError(null)
      const data = await createElectionClient(payload)
      return { success: true, data }
    } catch (err) {
      setError(err)
      return { success: false }
    } finally {
      setLoading(false)
    }
  }
  return { create, loading, error }
}
