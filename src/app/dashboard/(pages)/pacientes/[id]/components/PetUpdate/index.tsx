// Interfaces
import { Pet as PetI } from '@/interfaces/Pet'

// Hooks
import { useUpdatePet } from '@/hooks/pets/useUpdatePet'
import { useForm } from '@/hooks/useForm'

// Components
import { AnimatedInput } from '@/components'

// Shadcn Components
import { Button } from '@/components/shadcn'

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

	const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsEditing(false)

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { id, createdAt, updatedAt, deletedAt, ...changes } = editedPet

		updatePetMutation.mutate({
			id: pet.id,
			changes,
		})
	}

	return (
		<form onSubmit={handleUpdate} className='flex flex-col gap-4'>
			<div className='grid grid-cols-2 gap-4'>
				<AnimatedInput
					id='color'
					label='Color'
					defaultValue={color || ''}
					onChange={handleChange}
				/>

				<AnimatedInput
					id='weight'
					label='Peso'
					defaultValue={weight || ''}
					onChange={handleChange}
				/>
			</div>
			<AnimatedInput
				id='characteristics'
				label='Caracteristicas'
				defaultValue={characteristics || ''}
				onChange={handleChange}
			/>

			<div className='flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2'>
				<Button type='submit'>Guardar</Button>
			</div>
		</form>
	)
}
