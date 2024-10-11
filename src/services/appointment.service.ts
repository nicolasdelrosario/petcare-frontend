import API_BASE from './api'
import { Appointment } from '@/interfaces/Appointment'

const PATH_APPOINTMENTS = '/appointments'

export const getAppointments = async (): Promise<Appointment[]> => {
	const { data } = await API_BASE.get(`${PATH_APPOINTMENTS}`)
	return data
}

export const getAppointment = async (id: string): Promise<Appointment> => {
	const { data } = await API_BASE.get(`${PATH_APPOINTMENTS}/${id}`)
	return data
}
