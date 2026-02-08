'use client'

export default function ErrorModal({ open, message, onClose }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="relative bg-white w-[420px] rounded-xl shadow-xl p-6">
        <h2 className="text-lg font-semibold text-heading mb-2">
          Something went wrong
        </h2>

        <p className="text-sm text-paragraph mb-6">
          {message}
        </p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md border text-sm"
          >
            Cancel
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-primary-red text-white text-sm"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  )
}
