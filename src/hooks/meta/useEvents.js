'use client'

import { useEffect, useState } from 'react'
import { fetchEventsClient } from '@/lib/meta/events/events.client'

export function useEvents() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadEvents() {
      try {
        setLoading(true)
        const res = await fetchEventsClient()

        // 👇 IMPORTANT FIX
        setEvents(res.events || [])
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadEvents()
  }, [])

  return { events, loading, error }
}
