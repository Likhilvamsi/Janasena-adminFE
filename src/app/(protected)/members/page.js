'use client'
import { useState, useEffect } from 'react'
import { useMembers } from '../../../hooks/members/useMembersList'
import { Statics } from '../../components/members/Statics'
import DashboardHeader from '../../components/layout/DashboardHeader'
import ElectionsFilters from '../../components/elections/ElectionsFilters'
import MembersTable from '@/app/components/members/MembersTable'
import { useAssemblies } from '../../../hooks/meta/useAssemblies'
import { StaticsSkeleton } from '@/app/components/Shimmer/StaticsSkeleton'
import MembersTableSkeleton from '@/app/components/Shimmer/MembersTableSkeleton'
export default function MembersPage() {
    const [status, setStatus] = useState("all")
    const { assemblies } = useAssemblies()
    const { membersList, summary, loading, error } = useMembers(status)
    const [filters, setFilters] = useState({
        search: '',
        status: 'all',
        level: 'all',
    })
    return (
    <>
      <DashboardHeader
        title="Members"
        para="View and manage party member database"
      />

      {loading ? (
        <StaticsSkeleton />
      ) : (
        <Statics summary={summary} />
      )}

      {loading ? (
        <MembersTableSkeleton />
      ) : (
        <MembersTable members={membersList} />
      )}
    </>
  )
}
