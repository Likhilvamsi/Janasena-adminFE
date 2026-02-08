'use client'

import { useState } from 'react'
import Modal from '@/app/components/ui/Modal'
import Button from '@/app/components/ui/Button'
import Text from '@/app/components/ui/Text'
import { useCreateNotification } from '@/hooks/notifications/useCreateNotification'

export default function CreateNotificationModal({
  open,
  onClose,
  assemblies = [],
}) {
  const { create, loading, error } = useCreateNotification()

  const [form, setForm] = useState({
    assembly_id: '',
    type: 'Election Announcements',
    title: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { success } = await create({
      ...form,
      assembly_id: Number(form.assembly_id),
    })

    if (success) {
      onClose()
    }
  }

  return (
    <Modal
      open={open}
      onClose={loading ? () => {} : onClose} // 🚫 prevent close while loading
      title="Create Notification"
      description="Send announcements and updates to members."
    >
      {/* 🔴 LOADING OVERLAY */}
      {loading && (
        <div className="absolute inset-0 bg-white/80 z-50 flex flex-col items-center justify-center rounded-lg">
          <div className="animate-spin h-8 w-8 border-4 border-primary-red border-t-transparent rounded-full mb-4" />
          <Text className="text-sm font-medium text-gray-700">
            Sending notification… Please wait
          </Text>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 relative">

        {/* Notification Type */}
        <div>
          <label className="text-sm font-medium text-heading">
            Notification Type
          </label>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            disabled={loading}
            className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
          >
            <option value="Election Announcements">Election Announcements</option>
            <option value="Nominations Open">Nominations Open</option>
            <option value="Election Reminders">Election Reminders</option>
            <option value="Results Published">Results Published</option>
          </select>
        </div>

        {/* Assembly */}
        <div>
          <label className="text-sm font-medium text-heading">
            Assembly
          </label>
          <select
            name="assembly_id"
            value={form.assembly_id}
            onChange={handleChange}
            disabled={loading}
            className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
            required
          >
            <option value="">Select Assembly</option>
            {assemblies.map(a => (
              <option key={a.id} value={a.id}>
                {a.name}
              </option>
            ))}
          </select>
        </div>

        {/* Title */}
        <div>
          <label className="text-sm font-medium text-heading">
            Title
          </label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            disabled={loading}
            className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label className="text-sm font-medium text-heading">
            Message
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            disabled={loading}
            rows={4}
            className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
            required
          />
        </div>

        {/* Error */}
        {error && !loading && (
          <Text className="text-sm text-red-600">
            {error.message}
          </Text>
        )}

        {/* Actions */}
        <div className="flex justify-end gap-3 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            disabled={loading}
          >
            Cancel
          </Button>

          <Button
            type="submit"
            className="bg-primary-red text-white"
            disabled={loading}
          >
            Send Notification
          </Button>
        </div>
      </form>
    </Modal>
  )
}
