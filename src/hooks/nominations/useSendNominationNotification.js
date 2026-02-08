'use client'

import { useState } from 'react'
import { sendNominationNotificationClient } from '@/lib/nominations/nominations.client'

export function useSendNominationNotification() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const sendNotification = async (eventId) => {
    try {
      setLoading(true)
      setError(null)

      return await sendNominationNotificationClient(eventId)
    } catch (err) {
      setError(err.message)
      return null
    } finally {
      setLoading(false)
    }
  }

  return { sendNotification, loading, error }
}
