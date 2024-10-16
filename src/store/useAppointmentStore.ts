import { create } from 'zustand'

// Services
import {
	getAppointments,
	getAppointment,
	updateAppointment,
	deleteAppointment,
} from '@/services/appointment.service'

// Interfaces
import { Appointment } from '@/interfaces/Appointment'

interface AppointmentStore {
	appointments: Appointment[]
	appointment: Appointment | null
	loading: boolean
	getAppointments: () => Promise<void>
	updateAppointment: (
		appointmentId: number,
		data: Partial<Appointment>
	) => Promise<{ success: boolean; message: string }>
	removeAppointment: (
		appointmentId: number
	) => Promise<{ success: boolean; message: string }>
}

export const useAppointmentStore = create<AppointmentStore>(set => ({
	appointments: [],
	appointment: null,
	loading: true,

	getAppointments: async () => {
		const appointments = await getAppointments()
		set({ appointments, loading: false })
	},

	updateAppointment: async (id: number, data: Partial<Appointment>) => {
		try {
			await updateAppointment(id, data)
			const updatedAppointment = await getAppointment(id)
			set(state => ({
				appointments: state.appointments.map(appointment =>
					appointment.id === id ? updatedAppointment : appointment
				),
			}))

			return { success: true, message: 'Cita actualizada correctamente.' }
		} catch (error) {
			return {
				success: false,
				message: 'No ha sido posible actualizar la cita.',
			}
		}
	},

	removeAppointment: async (id: number) => {
		try {
			await deleteAppointment(id)
			set(state => ({
				appointments: state.appointments.filter(
					appointment => appointment.id !== id
				),
			}))
			return { success: true, message: 'Cita eliminada correctamente.' }
		} catch (error) {
			return { success: false, message: 'No ha sido posible eliminar la cita.' }
		}
	},
}))
