'use client'
import { CheckCircle } from 'lucide-react'
import Button from './Button'
import Modal from './Modal'
export default function SuccessPopup({
    open,
    onClose,
    title = 'Success',
    message,
}) {
    return (
        <Modal open={open} onClose={onClose}>
            <div className="flex flex-col items-center text-center space-y-4 py-6">
                <CheckCircle size={56} className="text-green-600" />

                <h3 className="text-lg font-semibold text-heading">
                    {title}
                </h3>

                <p className="text-sm text-gray-600">
                    {message}
                </p>

                <Button onClick={onClose} className="mt-2">
                    OK
                </Button>
            </div>
        </Modal>
    )
}
