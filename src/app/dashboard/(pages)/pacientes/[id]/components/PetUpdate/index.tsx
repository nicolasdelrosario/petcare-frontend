// Interfaces
import { Pet, Pet as PetI } from '@/interfaces/Pet'

// Hooks
import { useUpdatePet } from '@/hooks/pets/useUpdatePet'
import { useForm } from '@/hooks/useForm'

// Components
import { AnimatedInput } from '@/components'

// Shadcn Components
import { Button } from '@/components/shadcn'
import { useState } from 'react'
import { updatePetSchema } from '../PetSchema/updatePetSchema'

//Zod
import { z } from 'zod'

interface PetEditableFieldsProps {
	pet: PetI
	setIsEditing: (isEditing: boolean) => void
}

export default function PetEditableFields({
	pet,
	setIsEditing,
}: PetEditableFieldsProps) {
	const updatePetMutation = useUpdatePet()
	const { weight, color, characteristics } = pet
	const { formData: editedPet, handleChange } = useForm<PetI>(pet)
	const [errors, setErrors] = useState<{ [key: string]: string }>({})

	const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		try {
			const updatePet = {
				color: editedPet.color,
				weight: editedPet.weight,
				characteristics: editedPet.characteristics,
			}

			const validateData = updatePetSchema.parse(updatePet)
			setErrors({})

			updatePetMutation.mutate({
				id: pet.id,
				changes: validateData as Omit<
					Pet,
					'id' | 'createdAt' | 'updatedAt' | 'deletedAt'
				>,
			})

			setIsEditing(false)
		} catch (error) {
			if (error instanceof z.ZodError) {
				const newErrors: { [key: string]: string } = {}
				error.errors.forEach(err => {
					if (err.path[0]) {
						newErrors[err.path[0] as string] = err.message
					}
				})
				setErrors(newErrors)
			}
		}
	}

	return (
		<form onSubmit={handleUpdate} className='flex flex-col gap-4'>
			<div className='grid grid-cols-2 gap-4'>
				<AnimatedInput
					id='color'
					label='Color'
					defaultValue={color || ''}
					onChange={handleChange}
					error={errors.color}
				/>

				<AnimatedInput
					id='weight'
					label='Peso'
					defaultValue={weight || ''}
					onChange={handleChange}
					error={errors.weight}
				/>
			</div>
			<AnimatedInput
				id='characteristics'
				label='Caracteristicas'
				defaultValue={characteristics || ''}
				onChange={handleChange}
				error={errors.characteristics}
			/>

			<div className='flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2'>
				<Button type='submit'>Guardar</Button>
			</div>
		</form>
	)
}
