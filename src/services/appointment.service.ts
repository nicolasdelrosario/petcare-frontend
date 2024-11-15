import { createApiInstance } from './api'

// Interfaces
import { Appointment } from '@/interfaces/Appointment'

const PATH_APPOINTMENTS = '/appointments'

export const appointmentService = {
	getAppointments: async (token: string): Promise<Appointment[]> => {
		const api = createApiInstance(token)
		const { data } = await api.get(PATH_APPOINTMENTS)

		return data
	},

	getAppointmentById: async (
		id: number,
		token: string
	): Promise<Appointment> => {
		const api = createApiInstance(token)
		const { data } = await api.get(`${PATH_APPOINTMENTS}/${id}`)

		return data
	},

	createAppointment: async (
		changes: Partial<Appointment>,
		token: string
	): Promise<Appointment> => {
		const api = createApiInstance(token)
		const { data } = await api.post(PATH_APPOINTMENTS, changes)

		return data
	},

	updateAppointment: async (
		id: number,
		changes: Partial<Appointment>,
		token: string
	): Promise<Appointment> => {
		const api = createApiInstance(token)
		const { data } = await api.put(`${PATH_APPOINTMENTS}/${id}`, changes)

		return data
	},

	deleteAppointment: async (id: number, token: string): Promise<void> => {
		const api = createApiInstance(token)
		await api.patch(`${PATH_APPOINTMENTS}/${id}`)
	},
}
