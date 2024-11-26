// Interfaces
import { Pet as PetI } from '@/interfaces/Pet'

// Util
import { generatePetDetails } from '@/util/generatePetDetails'

// Format Date
import { format } from 'date-fns'

// Lucide Icons
import { BookOpen } from 'lucide-react'

interface PetProps {
	pet: PetI
}

export default function Pet({ pet }: PetProps) {
	const petDetails = generatePetDetails(pet)

	return (
		<div className='space-y-4'>
			<div className='grid grid-cols-2 gap-4 text-muted-foreground'>
				{petDetails.map(({ icon: Icon, label }, index) => (
					<div key={index} className='flex items-center'>
						{Icon && <Icon className='mr-2 h-4 w-4' />}
						{label}
					</div>
				))}
			</div>

			<div className='flex items-center text-start text-muted-foreground'>
				<BookOpen className='mr-2 h-4 w-4' />
				{pet.characteristics || 'Características no especificadas.'}
			</div>

			<div className='flex items-center pt-2 text-sm text-muted-foreground'>
				Última actualización:{' '}
				{format(new Date(pet.updatedAt), 'dd MMM yyyy HH:mm')}
			</div>
		</div>
	)
}
