'use client'

import { useState, useEffect } from 'react'
import DashboardHeader from '@/app/components/layout/DashboardHeader'
import FiltersBar from '@/app/components/ui/FiltersBar'
import ErrorModal from '@/app/components/ui/Alert'
import ResultsList from '@/app/components/results/ResultsList'
import { useResults } from '@/hooks/results/useResults'
import { useAssemblies } from '@/hooks/meta/useAssemblies'

export default function ResultsPage() {
  // pagination & filters
  const [page, setPage] = useState(1)
  const [limit] = useState(10)
  const [electionLevel, setElectionLevel] = useState('all')
  const [assemblyId, setAssemblyId] = useState('all')

  // ✅ MUST come before usage
  const { assemblies = [] } = useAssemblies()

  // ✅ build options AFTER assemblies exists
  const assemblyOptions = [
    { label: 'All Assemblies', value: 'all' },
    ...assemblies.map(a => ({
      label: a.name,
      value: String(a.id),
    })),
  ]

  const {
    results,
    loading,
    error,
    clearError,
  } = useResults({
    page,
    limit,
    election_level: electionLevel,
    assembly_id: assemblyId,
  })

  // ✅ Reset page when filters change (UX best practice)
  useEffect(() => {
    setPage(1)
  }, [electionLevel, assemblyId])

  return (
    <div className="space-y-6">
      <DashboardHeader
        title="Election Results"
        para="View published election results and winners"
      />

      <FiltersBar
        filters={[
          {
            key: 'level',
            value: electionLevel,
            onChange: setElectionLevel,
            options: [
              { label: 'All Types', value: 'all' },
              { label: 'Ward', value: 'ward' },
              { label: 'District', value: 'district' },
              { label: 'Assembly', value: 'assembly' },
              { label: 'Parliament', value: 'parliament' },
            ],
          },
          {
            key: 'assembly',
            value: assemblyId,
            onChange: setAssemblyId,
            options: assemblyOptions,
          },
        ]}
      />

      {error && (
        <ErrorModal
          open
          message={error.message}
          onClose={clearError}
        />
      )}

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ResultsList results={results} />
      )}
    </div>
  )
}
