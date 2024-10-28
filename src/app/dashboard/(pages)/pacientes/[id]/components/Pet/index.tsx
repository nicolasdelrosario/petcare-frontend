// Interfaces
import { Pet as PetI } from '@/interfaces/Pet'

// Lucide Icons
import {
	Cat,
	Squirrel,
	Weight,
	PawPrint,
	BookOpen,
	Hourglass,
	Rainbow,
} from 'lucide-react'

interface PetProps {
	pet: PetI
}

export default function Pet({ pet }: PetProps) {
	const { id, name, specie, gender, weight, age, color, characteristics } = pet

	return (
		<div className='space-y-4'>
			<div key={id} className='grid grid-cols-2 gap-4 text-muted-foreground'>
				<div className='flex items-center'>
					<PawPrint className='mr-2 h-4 w-4' />
					{name}
				</div>
				<div className='flex items-center'>
					<Cat className='mr-2 h-4 w-4' />
					{specie || 'Especie no especificada.'}
				</div>
				<div className='flex items-center'>
					<Squirrel className='mr-2 h-4 w-4' />
					{gender ? 'Macho' : 'Hembra'}
				</div>
				<div className='flex items-center'>
					<Weight className='mr-2 h-4 w-4' />
					{weight ? `${weight} kg` : 'Peso no especificado.'}
				</div>
				<div className='flex items-center'>
					<Hourglass className='mr-2 h-4 w-4' />
					{age ? `${age} años` : 'Edad no especificada.'}
				</div>
				<div className='flex items-center'>
					<Rainbow className='mr-2 h-4 w-4' />
					{color ? color : 'Color no especificado.'}
				</div>
			</div>

			<div className='flex items-center text-start text-muted-foreground'>
				<BookOpen className='mr-2 h-4 w-4' />
				{characteristics
					? characteristics
					: 'Características no especificadas.'}
			</div>
		</div>
	)
}
