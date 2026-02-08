'use client'
import { useEffect, useState } from 'react'
import { fetchDistricts } from '@/lib/meta/districts/metaDistrictsServer'
export function useDistricts() {
  const [districts, setDistricts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {

    async function load() {
      try {
        debugger
        setLoading(true)
        setError(null)
        const data = await fetchDistricts()
        setDistricts(data,"------------")
        console.log(data,"---");
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [])

  return {
    districts,
    loading,
    error,
  }
}
