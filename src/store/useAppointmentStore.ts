import { create } from 'zustand'

// Services
import { getAppointments } from '@/services/appointment.service'

// Interfaces
import { Appointment } from '@/interfaces/Appointment'

interface AppointmentStore {
	appointments: Appointment[]
	loading: boolean
	getAppointments: () => Promise<void>
}

export const useAppointmentStore = create<AppointmentStore>(set => ({
	appointments: [],
	loading: false,
	getAppointments: async () => {
		set({ loading: true })
		try {
			const appointments = await getAppointments()
			set({ appointments, loading: true })
		} catch (error) {
			console.log('Failed to fetch users:', error)
			set({ loading: false })
		}
	},
}))
