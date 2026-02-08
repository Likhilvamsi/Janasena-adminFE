'use client'

import { useState } from 'react'
import DashboardHeader from '@/app/components/layout/DashboardHeader'
import Button from '@/app/components/ui/Button'
import NotificationCard from '@/app/components/notification/NotificationCards'
import { useNotifications } from '../../../hooks/notifications/useNotificationsList'
import CreateNotificationModal from '@/app/components/notification/CreateNotificationModal'
import { useAssemblies } from '@/hooks/meta/useAssemblies'
export default function NotificationsPage() {
  const [page, setPage] = useState(1)
  const [openCompose, setOpenCompose] = useState(false)
  const [openCreate, setOpenCreate] = useState(false)
  const {assemblies} = useAssemblies()
  const {
    notifications,
    loading,
    error,
    clearError,
    pagination,
  } = useNotifications({ page })
  const openModal = () => setOpenCreate(true)
  const closeModal = () => setOpenCreate(false)
  return (
    <div className="space-y-6">
      <DashboardHeader
        title="Notifications"
        para="View and manage system notifications"
        action={
          <Button onClick={openModal}>
            + Compose Notification
          </Button>
        }
      />

      {/* Loading */}
      {loading && <p className="text-gray-500">Loading notifications...</p>}

      {/* Error */}
      {error && (
        <p
          className="text-red-600 cursor-pointer"
          onClick={clearError}
        >
          {error.message}
        </p>
      )}

      {/* Notifications list */}
      {!loading && notifications.map(item => (
        <NotificationCard
          key={item.id}
          notification={item}
        />
      ))}

      {/* Pagination */}
      {pagination && (
        <div className="flex justify-end gap-3 pt-4">
          <button
            disabled={page === 1}
            onClick={() => setPage(p => Math.max(1, p - 1))}
            className="px-4 py-2 border rounded disabled:opacity-50"
          >
            Previous
          </button>

          <button
            disabled={page >= pagination.pages}
            onClick={() => setPage(p => p + 1)}
            className="px-4 py-2 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}

      {openCreate && (
        <CreateNotificationModal
          open={openCreate}
          onClose={closeModal}
          assemblies={assemblies}
        />
      )}
    </div>
  )
}
