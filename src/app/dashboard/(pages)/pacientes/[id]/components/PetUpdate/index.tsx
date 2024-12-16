// Interfaces
import { Pet, Pet as PetI } from '@/interfaces/Pet'

// Hooks
import { useUpdatePet } from '@/hooks/pets/useUpdatePet'
import { useForm } from '@/hooks/useForm'
import { useState } from 'react'

// Components
import { AnimatedInput } from '@/components'

// Shadcn Components
import { Button } from '@/components/shadcn'

//Schema
import { updatePetSchema } from '../PetSchema/updatePetSchema'

//Utils
import { validateWithSchema } from '@/util/validateSchemas'

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

		const { data: validateData, errors } = validateWithSchema(
			updatePetSchema,
			editedPet
		)

		if (errors) {
			setErrors(errors)
			return
		}

		updatePetMutation.mutate({
			id: pet.id,
			changes: validateData as Omit<
				Pet,
				'id' | 'createdAt' | 'updatedAt' | 'deletedAt'
			>,
		})

		setIsEditing(false)
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
