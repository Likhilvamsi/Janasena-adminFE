'use client'

import clsx from 'clsx'

export default function VotedBadge({ voted }) {
  return (
    <span
      className={clsx(
        'inline-flex px-2 py-0.5 rounded-md text-xs font-medium',
        voted
          ? 'bg-green-100 text-green-700'
          : 'bg-orange-100 text-orange-700'
      )}
    >
      {voted ? 'Yes' : 'No'}
    </span>
  )
}
