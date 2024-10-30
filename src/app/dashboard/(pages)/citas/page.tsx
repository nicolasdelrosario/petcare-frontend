'use client'

// React
import { useState } from 'react'

// Hooks
import { useAppointments } from '@/hooks/appointments/useAppointments'
import { useViewModeStore } from '@/store/useViewModeStore'

// Util
import { filterAppointments } from '@/util/filters/appointmet-filter'

// Components
import { HeaderWithSearch } from '@/app/dashboard/components'
import { AppointmentsGrid, AppointmentsTable } from './components'

const TITLE_PAGE = 'Citas'

export default function Appointments() {
	const { data: appointments } = useAppointments()
	const { viewMode } = useViewModeStore()
	const [searchTerm, setSearchTerm] = useState('')

	const filteredAppointments =
		appointments && filterAppointments(appointments, searchTerm)

	return (
		<div>
			<HeaderWithSearch
				title={TITLE_PAGE}
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
				placeholder='Buscar Cita...'
			/>

			{viewMode === 'card' && filteredAppointments && (
				<AppointmentsGrid appointments={filteredAppointments} />
			)}
			{viewMode === 'table' && filteredAppointments && (
				<AppointmentsTable appointments={filteredAppointments} />
			)}
		</div>
	)
}
