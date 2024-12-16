// Interfaces
import { Owner } from '@/interfaces/Owner'

// Lucide Icons
import { Mail, MapPin, Phone, IdCard } from 'lucide-react'

export const generateOwnerDetails = (owner: Owner) => [
	{
		icon: Mail,
		value: owner.email || 'Correo no especificado.',
		label: 'Email',
	},
	{
		icon: MapPin,
		value: owner.address || 'Dirección no especificada.',
		label: 'Dirección',
	},
	{
		icon: Phone,
		value: owner.phone || 'Teléfono no especificado.',
		label: 'Teléfono',
	},
	{ icon: IdCard, value: owner.dni || 'DNI no especificado.', label: 'DNI' },
	// {
	// 	icon: PawPrint,
	// 	value:
	// 		owner.pets && owner.pets.length > 0
	// 			? `${owner.pets.length} mascota${owner.pets.length > 1 ? 's' : ''}`
	// 			: 'No tiene mascotas.',
	// 	label: 'Mascotas',
	// },
]
