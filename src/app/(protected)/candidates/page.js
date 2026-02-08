'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import DashboardHeader from '../../components/layout/DashboardHeader'
import CandidateCard from '@/app/components/candidates/CandidateCard'
import { useCandidates } from '@/hooks/candidates/useCandidates'
import { useApproveCandidate } from '@/hooks/candidates/useApprovel'
import { useRejectCandidate } from '@/hooks/candidates/useReject'
import FiltersBar from '@/app/components/ui/FiltersBar'
import CandidatesListSkeleton from '@/app/components/Shimmer/CandidatesListSkeleton'
export default function CandidatesPage() {
  const router = useRouter()
  const [status, setStatus] = useState('ALL')
  const [search, setSearch] = useState('')
  const [level, setLevel] = useState('all')
  const { candidateList, summary, loading, error } = useCandidates()
  const { approve, loading: approveLoading } = useApproveCandidate()
  const { reject, loading: rejectLoading } = useRejectCandidate()
  const handleApprove = async (candidateId) => {
    const success = await approve(candidateId)
    if (success) {
      console.log('Approved successfully')
      window.location.reload()
    }
  }
  const handleReject = async (candidateId) => {
    const success = await reject(candidateId)
    if (success) {
      console.log('Rejected successfully')
      window.location.reload()

    }
  }
  return (
    <div className="space-y-6">
      <DashboardHeader
        title="Candidates"
        para="Review and manage nomination applications"
      />

      <FiltersBar
        search={search}
        onSearchChange={setSearch}
        filters={[
          {
            key: 'status',
            value: status,
            onChange: setStatus,
            options: [
              { label: 'All Status', value: 'all' },
              { label: 'Pending', value: 'PENDING' },
              { label: 'Approved', value: 'APPROVED' },
              { label: 'Rejected', value: 'REJECTED' },
            ],
          },
          // {
          //   key: 'level',
          //   value: level,
          //   onChange: setLevel,
          //   options: [
          //     { label: 'All Levels', value: 'all' },
          //     { label: 'District', value: 'district' },
          //     { label: 'Assembly', value: 'assembly' },
          //   ],
          // },
        ]}
      />

      {loading ? (
        <CandidatesListSkeleton />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {candidateList.map(candidate => (
            <CandidateCard
              key={candidate.id}
              candidate={candidate}
              onApprove={handleApprove}
              onReject={handleReject}
            />
          ))}
        </div>
      )}
    </div>

  )
}
