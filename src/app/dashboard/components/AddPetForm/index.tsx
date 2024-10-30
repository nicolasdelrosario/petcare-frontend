'use client'

// Hooks
import { useForm } from '@/hooks/useForm'
import { useOwners } from '@/hooks/owners/useOwners'
import { useCreatePet } from '@/hooks/pets/useCreatePet'

// Interfaces
import { Pet } from '@/interfaces/Pet'

// Components
import { AnimatedInput, AnimatedSelect } from '@/components'

// Shadcn Components
import { Button } from '@/components/shadcn'

interface AddPetFormProps {
	onSuccess: () => void
}

type PetFormData = Partial<Pet> & { ownerId?: number }

export default function AddPetForm({ onSuccess }: AddPetFormProps) {
	const { data: owners } = useOwners()
	const createPet = useCreatePet()

	const {
		formData: petData,
		handleChange,
		setFormData,
	} = useForm<PetFormData>({} as PetFormData)

	const handleSelectOwner = (ownerId: string) => {
		setFormData(prev => ({ ...prev, ownerId: Number(ownerId) }))
	}

	const handleSelectGender = (gender: string) => {
		setFormData(prev => ({ ...prev, gender: gender === 'true' }))
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		createPet.mutate(petData)
		onSuccess()
	}

	const petFields = [
		{ id: 'name', label: 'Nombre', type: 'text' },
		{ id: 'specie', label: 'Especie', type: 'text' },
		{ id: 'type', label: 'Raza', type: 'text' },
		{ id: 'age', label: 'Age', type: 'text' },
		{ id: 'weight', label: 'Peso', type: 'text' },
		{ id: 'color', label: 'Color', type: 'text' },
	]

	const petSelectFields = [
		{
			id: 'gender',
			label: 'Género',
			value: petData.gender?.toString(),
			options: [
				{ id: 'true', name: 'Macho' },
				{ id: 'false', name: 'Hembra' },
			],
			onChange: handleSelectGender,
		},
		{
			id: 'owner',
			label: 'Dueño',
			value: petData.ownerId?.toString(),
			options: owners?.map(owner => ({ id: owner.id, name: owner.name })) ?? [],
			onChange: handleSelectOwner,
		},
	]

	return (
		<form onSubmit={handleSubmit}>
			<div className='grid grid-cols-2 gap-4'>
				{petSelectFields.map(field => (
					<AnimatedSelect
						key={field.id}
						id={field.id}
						label={field.label}
						value={field.value}
						options={field.options}
						onChange={field.onChange}
					/>
				))}
				{petFields.map(field => (
					<AnimatedInput
						key={field.id}
						id={field.id}
						label={field.label}
						type={field.type}
						onChange={handleChange}
					/>
				))}
			</div>
			<AnimatedInput
				id='characteristics'
				label='Características'
				onChange={handleChange}
			/>

			<div className='mt-8 flex justify-end'>
				<Button type='submit'>Agregar Mascota</Button>
			</div>
		</form>
	)
}
