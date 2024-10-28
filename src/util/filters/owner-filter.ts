import { Owner } from '@/interfaces/Owner'

export function filterOwners(owners: Owner[], searchTerm: string): Owner[] {
	const lowerCaseSearchTerm = searchTerm.toLowerCase()

	return owners.filter(owner => {
		const { name, dni, phone } = owner

		return (
			(name && name.toLowerCase().includes(lowerCaseSearchTerm)) ||
			(dni && dni.includes(lowerCaseSearchTerm)) ||
			(phone && phone.includes(lowerCaseSearchTerm))
		)
	})
}
