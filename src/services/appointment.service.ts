import API_BASE from './api'

// Interfaces
import { Appointment } from '@/interfaces/Appointment'

const PATH_APPOINTMENTS = '/appointments'

// Get appointments
export const getAppointments = async (): Promise<Appointment[]> => {
	const { data } = await API_BASE.get(`${PATH_APPOINTMENTS}`)
	return data
}

// Get appointment
export const getAppointment = async (id: number): Promise<Appointment> => {
	const { data } = await API_BASE.get(`${PATH_APPOINTMENTS}/${id}`)
	return data
}

// Update an appointment
export const updateAppointment = async (
	id: number,
	changes: Partial<Appointment>
): Promise<Appointment> => {
	const { data } = await API_BASE.put(`${PATH_APPOINTMENTS}/${id}`, changes)
	return data
}

// Delete an appointment
export const deleteAppointment = async (id: number): Promise<void> => {
	await API_BASE.patch(`${PATH_APPOINTMENTS}/${id}`)
}
