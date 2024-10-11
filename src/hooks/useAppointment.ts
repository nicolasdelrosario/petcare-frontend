import { useEffect } from 'react'
import { useAppointmentStore } from '@/store/useAppointmentStore'

const useAppointment = () => {
	const { appointments, loading, getAppointments } = useAppointmentStore()

	useEffect(() => {
		getAppointments()
	}, [getAppointments])

	return { appointments, loading }
}

export default useAppointment
