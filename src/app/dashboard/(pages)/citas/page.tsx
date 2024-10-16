'use client'

// React
import { useState } from 'react'

// Hooks
import useAppointment from '@/hooks/useAppointment'

// Util
import { filterAppointments } from '@/util/filters'

// Components
import { MaxWidthWrapper } from '@/components'
import { Header, ViewToggle, Search } from '@/app/dashboard/components'
import { AppointmentList } from './components'

const TITLE_PAGE = 'Citas'

export default function Appointments() {
	const { appointments } = useAppointment()
	const [searchTerm, setSearchTerm] = useState('')

	const filteredAppointments = filterAppointments(appointments, searchTerm)

	return (
		<div>
			<Header title={TITLE_PAGE} />
			<MaxWidthWrapper className='h-auto'>
				<div className='flex items-center justify-between py-10'>
					<Search
						placeholder='Buscar Cita...'
						searchTerm={searchTerm}
						setSearchTerm={setSearchTerm}
					/>
					<ViewToggle />
				</div>
			</MaxWidthWrapper>
			<AppointmentList appointments={filteredAppointments} />
		</div>
	)
}
