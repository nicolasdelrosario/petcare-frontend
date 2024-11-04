'use client'

// React
import { useState } from 'react'

// Hooks
import { useOwners } from '@/hooks/owners/useOwners'

// Stores
import { useViewModeStore } from '@/store/useViewModeStore'

// Util
import { filterOwners } from '@/util/filters/owner-filter'

// Components
import { Loading } from '@/components'
import { HeaderWithSearch } from '@/app/dashboard/components'
import { OwnersGrid, OwnersTable } from './components'

const TITLE_PAGE = 'Pacientes'

export default function Page() {
	const { data: owners, isLoading } = useOwners()
	const { viewMode } = useViewModeStore()
	const [searchTerm, setSearchTerm] = useState('')

	const filteredOwners = owners ? filterOwners(owners, searchTerm) : []

	if (isLoading) return <Loading />

	return (
		<>
			<HeaderWithSearch
				title={TITLE_PAGE}
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
				placeholder='Buscar Paciente...'
			/>

			{viewMode === 'card' && <OwnersGrid owners={filteredOwners} />}
			{viewMode === 'table' && <OwnersTable owners={filteredOwners} />}
		</>
	)
}
