import { Appointment } from '@/interfaces/Appointment'

export function filterAppointments(
	appointments: Appointment[],
	searchTerm: string
): Appointment[] {
	const lowerCaseSearchTerm = searchTerm.toLowerCase()

	return appointments.filter(appointment => {
		const { pet, date } = appointment
		const { owner, name: petName } = pet || {}
		const ownerName = owner?.name?.toLowerCase() || ''

		return (
			ownerName.includes(lowerCaseSearchTerm) ||
			petName?.toLowerCase().includes(lowerCaseSearchTerm) ||
			date.toString().includes(lowerCaseSearchTerm)
		)
	})
}
