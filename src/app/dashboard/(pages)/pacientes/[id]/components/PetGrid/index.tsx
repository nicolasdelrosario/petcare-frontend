// Next
import Link from 'next/link'

// Interfaces
import { Pet } from '@/interfaces/Pet'

// Components
import { PetDetailsDialog } from '../'

// Shadcn Components
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardFooter,
	buttonVariants,
} from '@/components/shadcn'

// Lucide Icons
import { Cat, Squirrel, Weight, History } from 'lucide-react'

interface PetGridProps {
	pets: Pet[]
}

export default function PetGrid({ pets }: PetGridProps) {
	return (
		<section>
			<h2 className='mb-4 text-lg font-semibold'>Mascotas</h2>
			<div className='grid grid-cols-1 gap-4 xl:grid-cols-2'>
				{pets?.map(pet => {
					const { id, name, species, sex, weight } = pet

					return (
						<Card key={id}>
							<CardHeader className='border-b p-4'>
								<CardTitle className='truncate text-sm font-semibold'>
									{name}
								</CardTitle>
							</CardHeader>
							<CardContent className='space-y-2 p-4'>
								<div className='flex items-center text-sm text-muted-foreground'>
									<Cat className='mr-2 size-4' />
									{species || 'Especie no especificada.'}
								</div>
								<div className='flex items-center text-sm text-muted-foreground'>
									<Squirrel className='mr-2 size-4' />
									{sex ? 'Macho' : 'Hembra'}
								</div>
								<div className='flex items-center text-sm text-muted-foreground'>
									<Weight className='mr-2 size-4' />
									{weight ? `${weight} kg` : 'Peso no especificado.'}
								</div>
							</CardContent>
							<CardFooter className='flex flex-col space-y-4 px-4'>
								<PetDetailsDialog pet={pet} />
								<Link
									href={`/dashboard/mascotas/${id}`}
									className={buttonVariants() + ' w-full'}
								>
									<History className='mr-2 size-4' />
									Ver Historial
								</Link>
							</CardFooter>
						</Card>
					)
				})}
			</div>
		</section>
	)
}
