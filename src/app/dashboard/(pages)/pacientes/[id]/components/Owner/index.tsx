import { Mail, Phone, MapPin, IdCard, PawPrint } from 'lucide-react'
import { format } from 'date-fns'
import { Owner as OwnerI } from '@/interfaces/Owner'

interface OwnerProps {
	owner: OwnerI
}

export default function Owner({ owner }: OwnerProps) {
	const { dni, email, phone, address, pets, updatedAt } = owner

	return (
		<div>
			<div className='mt-3 flex items-center'>
				<Mail className='mr-2 size-5' />
				{email || 'Correo no especificado.'}
			</div>
			<div className='mt-3 flex items-center'>
				<MapPin className='mr-2 size-5' />
				{address || 'Dirección no especificada.'}
			</div>
			<div className='mt-3 flex items-center'>
				<Phone className='mr-2 size-5' />s{phone || 'Teléfono no especificado.'}
			</div>
			<div className='mt-3 flex items-center'>
				<IdCard className='mr-2 size-5' />
				{dni || 'DNI no especificado.'}
			</div>
			<div className='mt-3 flex items-center'>
				<PawPrint className='mr-2 size-5' />
				{pets && pets.length > 0
					? `${pets.length} mascota${pets.length > 1 ? 's' : ''}`
					: 'No tiene mascotas.'}
			</div>
			<div className='flex items-center pt-4 text-sm text-muted-foreground'>
				Última actualización: {format(new Date(updatedAt), 'dd MMM yyyy HH:mm')}
			</div>
		</div>
	)
}
