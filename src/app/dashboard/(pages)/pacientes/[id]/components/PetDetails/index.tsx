'use client'

// React
import { useState } from 'react'

// Interfaces
import { Pet as PetI } from '@/interfaces/Pet'

// Hooks
import { useUpdatePet } from '@/hooks/pets/useUpdatePet'
import { useDeletePet } from '@/hooks/pets/useDeletePet'
// import { useOwnerById } from '@/hooks/owners/useOwnerById'

// Components
import { ActionButtons } from '@/app/dashboard/components'
import { Pet, PetEditableFields } from '../'

interface PetDetailsProps {
	pet: PetI
}

export default function PetDetails({ pet }: PetDetailsProps) {
	const [isEditing, setIsEditing] = useState(false)
	const [editedPet, setEditedPet] = useState<PetI>(pet)

	const updatePetMutation = useUpdatePet()
	const deletePetMutation = useDeletePet(pet.id)
	// const { refetch } = useOwnerById(pet.owner.id)

	const toggleEditing = () => setIsEditing(prev => !prev)

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setEditedPet(prev => ({
			...prev,
			[name]: value,
		}))
	}

	const handleUpdate = () => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { id, createdAt, updatedAt, deletedAt, ...changes } = editedPet

		updatePetMutation.mutate({
			id: pet.id,
			changes,
		})

		// refetch()
		toggleEditing()
	}

	const handleDelete = () => deletePetMutation.mutate()

	return (
		<div className='pt-2'>
			{isEditing ? (
				<PetEditableFields
					pet={editedPet}
					handleInputChange={handleInputChange}
				/>
			) : (
				<Pet pet={editedPet} />
			)}

			<ActionButtons
				isEditing={isEditing}
				handleUpdate={handleUpdate}
				setIsEditing={toggleEditing}
				handleDelete={handleDelete}
			/>
		</div>
	)
}
