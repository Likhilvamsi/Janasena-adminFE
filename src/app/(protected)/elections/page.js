'use client'

import { useState } from 'react'
import ElectionsList from '../../components/elections/ElectionsList'
import DashboardHeader from '../../components/layout/DashboardHeader'
import Button from '../../components/ui/Button'
import ErrorModal from '../../components/ui/Alert'
import CreateElectionModal from '../../components/elections/CreateElectionModal'
import { useElections } from '@/hooks/elections/useElections'
import { useAssemblies } from '../../../hooks/meta/useAssemblies'
import FiltersBar from '@/app/components/ui/FiltersBar'
import ElectionsListSkeleton from '@/app/components/Shimmer/ElectionsListSkeleton'
export default function ElectionsPage() {
    const [openCreate, setOpenCreate] = useState(false)
    const { assemblies } = useAssemblies()
    const [search, setSearch] = useState('')
    const [status, setStatus] = useState('all')
    const [level, setLevel] = useState('all')
    const { elections, loading, error, clearError } = useElections(status)
    const openModal = () => setOpenCreate(true)
    const closeModal = () => setOpenCreate(false)
    return (
        <div className="space-y-6">
            <DashboardHeader
                title="Elections"
                para="You have full administrative access"
                action={<Button onClick={openModal}>+ Create</Button>}
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
                            { label: 'Active', value: 'ACTIVE' },
                            { label: 'Scheduled', value: 'SCHEDULED' },
                            { label: 'Draft', value: 'DRAFT' },
                            { label: 'COMPLETED', value: 'COMPLETED' }
                        ],
                    },
                    // {
                    //     key: 'level',
                    //     value: level,
                    //     onChange: setLevel,
                    //     options: [
                    //         { label: 'All Levels', value: 'all' },
                    //         { label: 'District', value: 'district' },
                    //         { label: 'Assembly', value: 'assembly' },
                    //     ],
                    // },
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
                <ElectionsListSkeleton />
            ) : (
                <ElectionsList elections={elections} />
            )}
            {openCreate && (
                <CreateElectionModal
                    open={openCreate}
                    onClose={closeModal}
                    assemblies={assemblies}
                />
            )}
        </div>
    )
}
