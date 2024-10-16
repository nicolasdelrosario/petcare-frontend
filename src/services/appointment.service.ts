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
