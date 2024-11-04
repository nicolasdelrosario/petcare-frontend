'use client'

// React
import { useState } from 'react'

// Interfaces
import { Pet as PetI } from '@/interfaces/Pet'

// Hooks
import { useDeletePet } from '@/hooks/pets/useDeletePet'

// Components
import { Pet, PetUpdate, Delete } from '../'

// Shadcn Components
import { Button } from '@/components/shadcn'

interface PetDetailsProps {
	pet: PetI
}

export default function PetDetails({ pet }: PetDetailsProps) {
	const [isEditing, setIsEditing] = useState(false)

	const deletePetMutation = useDeletePet(pet.id)
	const handleDelete = () => deletePetMutation.mutate()

	return (
		<div className='pt-2'>
			{isEditing ? (
				<PetUpdate pet={pet} setIsEditing={setIsEditing} />
			) : (
				<>
					<Pet pet={pet} />
					<div className='flex flex-col-reverse pt-6 sm:flex-row sm:justify-end sm:space-x-2'>
						<Button variant='outline' onClick={() => setIsEditing(true)}>
							Editar
						</Button>
						<Delete onConfirm={handleDelete} />
					</div>
				</>
			)}
		</div>
	)
}
