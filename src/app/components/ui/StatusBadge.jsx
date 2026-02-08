'use client'

import clsx from 'clsx'
import { User } from 'lucide-react'

export default function StatusBadge({ status }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-medium',
        status === 'active'
          ? 'bg-green-100 text-green-700'
          : 'bg-gray-200 text-gray-600'
      )}
    >
      <User size={12} />
      {status === 'active' ? 'Active' : 'Inactive'}
    </span>
  )
}
