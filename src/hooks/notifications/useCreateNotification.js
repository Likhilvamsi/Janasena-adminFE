'use client'

import { useState } from 'react'
import { createNotification } from '@/lib/notifications/notifications.client'

export function useCreateNotification() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const create = async (payload) => {
    try {
      setLoading(true)
      setError(null)

      await createNotification(payload)

      return { success: true }
    } catch (err) {
      setError(err)
      return { success: false }
    } finally {
      setLoading(false)
    }
  }

  return {
    create,
    loading,
    error,
    clearError: () => setError(null),
  }
}
