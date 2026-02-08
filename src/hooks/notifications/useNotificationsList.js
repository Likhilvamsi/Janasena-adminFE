'use client'

import { useEffect, useState } from 'react'
import { fetchNotifications } from '@/lib/notifications/notifications.client'
import { mapNotificationToCard } from '@/utils/notifications/notificationsMapper'

export function useNotifications({ page = 1 }) {
  const [notifications, setNotifications] = useState([])
  const [pagination, setPagination] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function load() {
      try {
        setLoading(true)
        setError(null)

        const data = await fetchNotifications({ page })

        setNotifications(data.items.map(mapNotificationToCard))
        console.log(data,"====")
        setPagination(data.pagination)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [page])

  return {
    notifications,
    pagination,
    loading,
    error,
    clearError: () => setError(null),
  }
}
