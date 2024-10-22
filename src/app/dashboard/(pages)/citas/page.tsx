'use client'

// React
import { useState } from 'react'

// Hooks
import useAppointment from '@/hooks/useAppointment'
import { useViewModeStore } from '@/store/useViewModeStore'

// Util
import { filterAppointments } from '@/util/filters'

// Components
import { HeaderWithSearch } from '@/app/dashboard/components'
import { AppointmentsGrid, AppointmentsTable } from './components'

const TITLE_PAGE = 'Citas'

export default function Appointments() {
	const { appointments } = useAppointment()
	const { viewMode } = useViewModeStore()
	const [searchTerm, setSearchTerm] = useState('')

	const filteredAppointments = filterAppointments(appointments, searchTerm)

	return (
		<div>
			<HeaderWithSearch
				title={TITLE_PAGE}
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
				placeholder='Buscar Cita...'
			/>

			{viewMode === 'card' && (
				<AppointmentsGrid appointments={filteredAppointments} />
			)}
			{viewMode === 'table' && (
				<AppointmentsTable appointments={filteredAppointments} />
			)}
		</div>
	)
}
