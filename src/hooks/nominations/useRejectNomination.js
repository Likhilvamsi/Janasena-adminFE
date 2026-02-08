'use client'

import { useState } from 'react'

const getCookie = (name) => {
    if (typeof document === 'undefined') return null

    const cookies = document.cookie.split('; ')
    for (const cookie of cookies) {
        const [key, value] = cookie.split('=')
        if (key === name) return decodeURIComponent(value)
    }
    return null
}

export function useRejectCandidate() {
    const [loading, setLoading] = useState(false)

    const reject = async (nominationId, reason) => {
        setLoading(true)
        try {
            const token = getCookie('access_token')

            if (!token) {
                throw new Error('Access token not found in cookies')
            }

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/nominations/${nominationId}/reject`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        Authorization: `Bearer ${token}`, // ✅ WORKS
                    },
                    body: JSON.stringify({ reason }),
                }
            )

            if (!res.ok) {
                const errorData = await res.json()
                throw new Error(
                    errorData?.detail?.[0]?.msg || 'Reject failed'
                )
            }

            return await res.json()
        } finally {
            setLoading(false)
        }
    }

    return { reject, loading }
}
