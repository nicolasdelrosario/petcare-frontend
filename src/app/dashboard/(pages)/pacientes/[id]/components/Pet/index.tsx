// Interfaces
import { Pet as PetI } from '@/interfaces/Pet'

// Format Date
import { format } from 'date-fns'

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
	const {
		id,
		name,
		species,
		sex,
		weight,
		age,
		color,
		characteristics,
		updatedAt,
	} = pet

	const petDetails = [
		{ icon: PawPrint, label: name },
		{
			icon: Cat,
			label: species || 'Especie no especificada.',
		},
		{
			icon: Squirrel,
			label: sex ? 'Macho' : 'Hembra',
		},
		{
			icon: Weight,
			label: weight ? `${weight} kg` : 'Peso no especificado.',
		},
		{
			icon: Hourglass,
			label: age ? `${age}` : 'Edad no especificada.',
		},
		{
			icon: Rainbow,
			label: color || 'Color no especificado.',
		},
	]

	return (
		<div className='space-y-4'>
			<div key={id} className='grid grid-cols-2 gap-4 text-muted-foreground'>
				{petDetails.map(({ icon: Icon, label }, index) => (
					<div key={index} className='flex items-center'>
						{Icon && <Icon className='mr-2 h-4 w-4' />}
						{label}
					</div>
				))}
			</div>

			<div className='flex items-center text-start text-muted-foreground'>
				<BookOpen className='mr-2 h-4 w-4' />
				{characteristics || 'Características no especificadas.'}
			</div>

			<div className='flex items-center pt-2 text-sm text-muted-foreground'>
				Última actualización: {format(new Date(updatedAt), 'dd MMM yyyy HH:mm')}
			</div>
		</div>
	)
}
