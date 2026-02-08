'use client'

import { useEffect, useState } from 'react'
import { fetchAssemblies } from '../../lib/meta/metaClient'

export function useAssemblies() {
  const [assemblies, setAssemblies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function load() {
      try {
        setLoading(true)
        setError(null)

        const data = await fetchAssemblies()
        setAssemblies(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [])

  return {
    assemblies,
    loading,
    error,
  }
}
