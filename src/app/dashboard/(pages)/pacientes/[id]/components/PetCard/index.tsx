// Interfaces
import { Pet } from '@/interfaces/Pet'

// Components
import { PetDetailsDialog } from '../'

// Shadcn Components
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardFooter,
} from '@/components/shadcn'

// Lucide Icons
import { Cat, Squirrel, Weight } from 'lucide-react'

interface PetCardProps {
	pet: Pet
}

export default function PetCard({ pet }: PetCardProps) {
	const { id, name, species, sex, weight } = pet

	return (
		<Card key={id}>
			<CardHeader className='border-b p-4'>
				<CardTitle className='truncate text-sm font-semibold'>{name}</CardTitle>
			</CardHeader>
			<CardContent className='space-y-2 p-4'>
				<div className='flex items-center text-sm text-muted-foreground'>
					<Cat className='mr-2 h-4 w-4' />
					{species || 'Especie no especificada.'}
				</div>
				<div className='flex items-center text-sm text-muted-foreground'>
					<Squirrel className='mr-2 h-4 w-4' />
					{sex ? 'Macho' : 'Hembra'}
				</div>
				<div className='flex items-center text-sm text-muted-foreground'>
					<Weight className='mr-2 h-4 w-4' />
					{weight ? `${weight} kg` : 'Peso no especificado.'}
				</div>
			</CardContent>
			<CardFooter className='px-4 pb-4'>
				<PetDetailsDialog pet={pet} />
			</CardFooter>
		</Card>
	)
}
