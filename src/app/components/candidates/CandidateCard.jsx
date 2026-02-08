'use client'

import { Eye, X, Check } from 'lucide-react'
import clsx from 'clsx'
import Image from 'next/image'

export default function CandidateCard({
  candidate,
  onApprove,
  onReject,
}) {
  const status = candidate.status?.toLowerCase()

  return (
    <div className="bg-white border rounded-xl overflow-hidden shadow-sm flex flex-col">
      <div className="relative h-48 w-full bg-gray-100">
        <Image
          src={candidate.profilePhoto || '/avatar-placeholder.png'}
          alt={candidate.name}
          fill
          className="object-cover"
        />

        <span
          className={clsx(
            'absolute top-3 right-3 px-2 py-0.5 rounded-md text-xs font-medium',
            status === 'approved' && 'bg-green-100 text-green-700',
            status === 'pending' && 'bg-orange-100 text-orange-700',
            status === 'rejected' && 'bg-red-100 text-red-700'
          )}
        >
          {status}
        </span>
      </div>

      <div className="p-5 space-y-2 flex-1">
        <h3 className="font-semibold">{candidate.name}</h3>
        <p>{candidate.election}</p>
        <p className="text-sm text-gray-500">
          Nominated: {candidate.nominated_at}
        </p>
      </div>

      <div className="p-4 pt-0 flex items-center gap-3">
        {/* <button className="flex-1 border rounded px-3 py-1 flex items-center gap-2">
          <Eye size={16} /> View
        </button> */}

        {status === 'pending' && (
          <>
            <button
              onClick={() => onApprove(candidate.id)} // ✅ send ID
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-green-200 text-green-600"
            >
              <Check size={18} />
            </button>

            {/* <button
              onClick={() => onReject(candidate.id)} // ✅ send ID
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-red-200 text-red-600"
            >
              <X size={18} />
            </button> */}
          </>
        )}
      </div>
    </div>
  )
}
