'use client'
import { useEffect, useState } from 'react'
import { fetchMemebers } from '../../lib/members/members.client'
import { mapMembersTable } from '../../utils/members/membersMapper'
export function useMembers(status) {
  const [membersList, setMembersList] = useState([])
  const [summary,setSummary]=useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function load() {
      try {
        setLoading(true)
        setError(null)
        const data = await fetchMemebers(status)
        setMembersList(data.members.map(mapMembersTable))
        setSummary(data.summary)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [status])

  return {
    membersList,
    summary,
    loading,
    error,
    clearError: () => setError(null),
  }
}
