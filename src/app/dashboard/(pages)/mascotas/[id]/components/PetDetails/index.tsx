'use client'

// Interfaces
import { Pet } from '@/interfaces/Pet'

// Utility
import { formatDate } from 'date-fns'
import { generatePetDetails } from '@/util/generatePetDetails'
import { generateOwnerDetails } from '@/util/generateOwnerDetails'

// Components
import DetailsCard from '../DetailsCard'

// Shadcn Components
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	Tabs,
	TabsList,
	TabsTrigger,
	TabsContent,
} from '@/components/shadcn'

interface PetDetailsProps {
	pet: Pet
}

export default function PetDetails({ pet }: PetDetailsProps) {
	const petDetails = generatePetDetails(pet)
	const ownerDetails = generateOwnerDetails(pet.owner)

	return (
		<div className='space-y-4'>
			<Card>
				<CardHeader className='flex items-center space-x-4'>
					{/* TODO: Add random avatars in the future */}
					<div className='text-center'>
						<CardTitle className='text-2xl'>{pet.name}</CardTitle>
						<p className='text-muted-foreground'>{pet.breed}</p>
					</div>
				</CardHeader>
				<CardContent>
					<Tabs defaultValue='info' className='w-full'>
						<TabsList className='grid w-full grid-cols-2'>
							<TabsTrigger value='info'>Información</TabsTrigger>
							<TabsTrigger value='owner'>Dueño</TabsTrigger>
						</TabsList>

						<TabsContent value='info'>
							<DetailsCard details={petDetails} updatedAt={pet.updatedAt} />
						</TabsContent>

						<TabsContent value='owner'>
							<div className='mt-6 space-y-4'>
								{ownerDetails.map(({ icon: Icon, value, label }, index) => (
									<div
										key={label}
										className={`flex items-center ${index > 0 ? 'mt-3' : ''}`}
									>
										<Icon className='mr-2 size-4' />
										<span>{value}</span>
									</div>
								))}
								<p className='text-sm text-muted-foreground'>
									Última actualización:{' '}
									{formatDate(pet.owner.updatedAt, 'dd MMM yyyy HH:mm')}
								</p>
							</div>
						</TabsContent>
					</Tabs>
				</CardContent>
			</Card>
		</div>
	)
}
