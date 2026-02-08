'use client'

import { Users, Clock } from 'lucide-react'
import Text from '@/app/components/ui/Text'

export default function NotificationCard({ notification }) {
  return (
    <div className="bg-white border rounded-xl p-6 space-y-3">
      
      {/* TITLE */}
      <Text as="h3" variant="h4">
        {notification.title}
      </Text>

      {/* MESSAGE */}
      <Text>
        {notification.message}
      </Text>

      {/* META */}
      <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <Users size={14} />
          {notification.recipientsCount.toLocaleString()} recipients
        </div>

        <div className="flex items-center gap-2">
          <Clock size={14} />
          {formatDate(notification.sentAt)}
        </div>

        <span>
          Sent by {notification.sender}
        </span>
      </div>
    </div>
  )
}

/* -------- helpers -------- */

function formatDate(dateStr) {
  if (!dateStr) return '—'
  return new Date(dateStr).toLocaleString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}
