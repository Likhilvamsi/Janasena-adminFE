'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Modal from '../../components/ui/Modal'
import Button from '../../components/ui/Button'
import { useCreateElection } from '@/hooks/elections/useCreateElection'
import SuccessPopup from '../ui/SuccessPopup'
export default function CreateElectionModal({ open, onClose, assemblies }) {
  const router = useRouter()
  const { create, loading } = useCreateElection()
  const [showSuccess, setShowSuccess] = useState(false)
  const [form, setForm] = useState({
    title: '',
    assembly_id: '',
    nomination_start: '',
    nomination_end: '',
    voting_start: '',
    voting_end: '',
    polling_date: '',
    polling_start_time: '',
    polling_end_time: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  /**
   * Converts date + time → ISO string
   * Example: 2026-02-06 + 08:30 → 2026-02-06T08:30:00.000Z
   */
  const toISO = (date, time) => {
    if (!date || !time) return ''
    return new Date(`${date}T${time}`).toISOString()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const payload = {
      title: form.title,
      assembly_id: Number(form.assembly_id),

      nomination_start: toISO(form.polling_date, form.polling_start_time),
      nomination_end: toISO(form.polling_date, form.polling_end_time),

      voting_start: toISO(form.polling_date, form.polling_start_time),
      voting_end: toISO(form.polling_date, form.polling_end_time),

      polling_date: form.polling_date,
      polling_start_time: `${form.polling_start_time}:00.000Z`,
      polling_end_time: `${form.polling_end_time}:00.000Z`,
    }

    const { success } = await create(payload)

    if (success) {
       onClose()
      
      setShowSuccess(true)
      router.refresh()
    }
  }

  return (
    <>

      <Modal
        open={open}
        onClose={onClose}
        title="Create New Election"
        description="Set up nomination and voting schedule carefully."
      >
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* TITLE */}
          <div>
            <label className="text-sm font-medium">Election Title</label>
            <input
              name="title"
              required
              placeholder="e.g., Ward Election 2026"
              className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
              onChange={handleChange}
            />
          </div>

          {/* ASSEMBLY */}
          <div>
            <label className="text-sm font-medium">Assembly</label>
            <select
              name="assembly_id"
              required
              className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
              onChange={handleChange}
            >
              <option value="">Select Assembly</option>
              {assemblies.map(a => (
                <option key={a.id} value={a.id}>
                  {a.name}
                </option>
              ))}
            </select>
          </div>

          {/* POLLING DATE */}
          <div>
            <label className="text-sm font-medium">Polling Date</label>
            <input
              name="polling_date"
              type="date"
              required
              className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
              onChange={handleChange}
            />
          </div>

          {/* TIME */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Start Time</label>
              <input
                name="polling_start_time"
                type="time"
                required
                className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-sm font-medium">End Time</label>
              <input
                name="polling_end_time"
                type="time"
                required
                className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex justify-end gap-3 pt-4">
            <Button variant="outline" type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? 'Creating…' : 'Create Election'}
            </Button>
          </div>
        </form>
      </Modal>
      <SuccessPopup
        open={showSuccess}
        title="Election Created"
        message="The election has been created successfully."
        onClose={() => {
          setShowSuccess(false)
          onClose()
          router.refresh()
        }}
      />
    </>

  )
}
