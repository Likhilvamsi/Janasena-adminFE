'use client'

import { useState, useEffect } from 'react'
import { useNominations } from '@/hooks/nominations/useNominations'
import CandidateCard from '@/app/components/candidates/CandidateCard'
import CandidatesListSkeleton from '@/app/components/Shimmer/CandidatesListSkeleton'
import { useApproveCandidate } from '@/hooks/nominations/useApproveNomination'
import { useRejectCandidate } from '@/hooks/nominations/useRejectNomination'
import { useEvents } from '@/hooks/meta/useEvents'
import { useSendNominationNotification } from '@/hooks/nominations/useSendNominationNotification'

export default function MembersPage() {
  const { sendNotification, loading: sending } =
    useSendNominationNotification()
  const { nominations, loading } = useNominations()
  const { approve } = useApproveCandidate()
  const { reject } = useRejectCandidate()
  const { events } = useEvents()

  const [openModal, setOpenModal] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState('')

  /* ESC key close */
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setOpenModal(false)
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  const handleApprove = async (nominationId) => {
    try {
      const res = await approve(nominationId)
      if (res) {
        alert('Approved Successfully')
        window.location.reload()
      }
    } catch (error) {
      alert(error.message || 'Failed to approve nomination')
    }
  }

  const handleReject = async (nominationId) => {
    try {
      const reason = prompt('Enter rejection reason')
      if (!reason || !reason.trim()) {
        alert('Rejection reason is required')
        return
      }

      const res = await reject(nominationId, reason)
      if (res) {
        alert(res.message || 'Nomination rejected')
      }
    } catch (error) {
      alert(error.message || 'Failed to reject nomination')
    }
  }

  const handleSendNotification = async () => {
    const eventId = Number(selectedEvent)
    if (!Number.isInteger(eventId) || eventId <= 0) {
      alert('Please select a valid event')
      return
    }

    const res = await sendNotification(eventId)
    if (res) {
      alert(res.message)
      setOpenModal(false)
      setSelectedEvent('')
    }
  }

  if (loading) return <CandidatesListSkeleton />

  return (
    <>
      {/* BUTTON */}
      <div className="mb-6 flex justify-end">
        <button
          onClick={() => setOpenModal(true)}
          className="bg-hover-red px-4 py-3 text-white rounded"
        >
          Send Nomination Notifications
        </button>
      </div>

      {/* CANDIDATES */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {nominations.map((candidate) => (
          <CandidateCard
            key={candidate.id}
            candidate={candidate}
            onApprove={handleApprove}
            onReject={handleReject}
          />
        ))}
      </div>

      {/* MODAL */}
      {openModal && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          onClick={() => setOpenModal(false)}
        >
          <div
            className="bg-white rounded-lg p-6 w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-semibold mb-4">
              Send Nomination Notification
            </h2>

            {/* DROPDOWN */}
            <select
              value={selectedEvent}
              onChange={(e) => setSelectedEvent(e.target.value)}
              className="w-full border rounded px-3 py-2 mb-4"
            >
              <option value="">Select Event</option>
              {events?.map((event) => (
                <option key={event.event_id} value={event.event_id}>
                  {event.event_title}
                </option>
              ))}
            </select>

            {/* ACTIONS */}
            <div className="flex justify-end gap-3 items-center">
              {sending && (
                <p className="text-sm text-gray-600 mr-auto">
                  Sending nomination notification, please wait...
                </p>
              )}

              {/* CANCEL */}
              <button
                onClick={() => {
                  setOpenModal(false)
                  setSelectedEvent('')
                }}
                disabled={sending}
                className="px-4 py-2 rounded border border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>

              {/* SEND */}
              <button
                onClick={handleSendNotification}
                disabled={sending}
                className={`px-4 py-2 rounded text-white ${
                  sending
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-hover-red'
                }`}
              >
                {sending ? 'Sending...' : 'Send'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
