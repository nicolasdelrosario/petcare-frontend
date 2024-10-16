import { Appointment } from '@/interfaces/Appointment'
import { Owner } from '@/interfaces/Owner'

export function filterAppointments(
	appointments: Appointment[],
	searchTerm: string
): Appointment[] {
	const lowerCaseSearchTerm = searchTerm.toLowerCase()

	return appointments.filter(
		appointment =>
			appointment.pet.owner.name.toLowerCase().includes(lowerCaseSearchTerm) ||
			appointment.pet.name.toLowerCase().includes(lowerCaseSearchTerm) ||
			appointment.date.toString().includes(lowerCaseSearchTerm)
	)
}

export function filterOwners(owners: Owner[], searchTerm: string): Owner[] {
	const lowerCaseSearchTerm = searchTerm.toLowerCase()

	return owners.filter(
		owner =>
			(owner.name && owner.name.toLowerCase().includes(lowerCaseSearchTerm)) ||
			(owner.dni && owner.dni.includes(lowerCaseSearchTerm)) ||
			(owner.phone && owner.phone.includes(lowerCaseSearchTerm))
	)
}
