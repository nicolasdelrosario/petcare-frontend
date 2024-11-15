// Interfaces
import { Owner as OwnerI } from '@/interfaces/Owner'

// Lucide Icons
import { Mail, Phone, MapPin, IdCard, PawPrint } from 'lucide-react'

// Date Fns
import { format } from 'date-fns'

interface OwnerProps {
	owner: OwnerI
}

export default function Owner({ owner }: OwnerProps) {
	const { dni, email, phone, address, pets, updatedAt } = owner

	const ownerDetails = [
		{ icon: Mail, value: email || 'Correo no especificado.', label: 'Email' },
		{
			icon: MapPin,
			value: address || 'Dirección no especificada.',
			label: 'Dirección',
		},
		{
			icon: Phone,
			value: phone || 'Teléfono no especificado.',
			label: 'Teléfono',
		},
		{ icon: IdCard, value: dni || 'DNI no especificado.', label: 'DNI' },
		{
			icon: PawPrint,
			value:
				pets && pets.length > 0
					? `${pets.length} mascota${pets.length > 1 ? 's' : ''}`
					: 'No tiene mascotas.',
			label: 'Mascotas',
		},
	]

	return (
		<div>
			{ownerDetails.map(({ icon: Icon, value, label }, index) => (
				<div key={label} className={`flex items-center ${index > 0 && 'mt-3'}`}>
					<Icon className='mr-2 size-4' />
					{value}
				</div>
			))}
			<div className='flex items-center pt-4 text-sm text-muted-foreground'>
				Última actualización: {format(new Date(updatedAt), 'dd MMM yyyy HH:mm')}
			</div>
		</div>
	)
}
