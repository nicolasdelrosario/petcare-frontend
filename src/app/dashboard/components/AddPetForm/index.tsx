'use client'

// Hooks
import { useForm } from '@/hooks/useForm'
import { useOwners } from '@/hooks/owners/useOwners'
import { useCreatePet } from '@/hooks/pets/useCreatePet'
import { useState } from 'react'

// Interfaces
import { Pet } from '@/interfaces/Pet'

// Components
import { AnimatedInput, AnimatedSelect } from '@/components'

// Shadcn Components
import { Button } from '@/components/shadcn'

//Schemas
import { addPetSchema } from '../../(pages)/pacientes/[id]/components/PetSchema/addPetSchema'

//Zod
import { z } from 'zod'

interface AddPetFormProps {
	onSuccess: () => void
}

type PetFormData = Partial<Pet> & { ownerId?: number }

export default function AddPetForm({ onSuccess }: AddPetFormProps) {
	const { data: owners } = useOwners()
	const createPet = useCreatePet()
	const [errors, setErrors] = useState<{ [key: string]: string }>({})

	const {
		formData: petData,
		handleChange,
		updateField,
	} = useForm<PetFormData>({} as PetFormData)

	const handleSelectOwner = (ownerId: string) => {
		updateField('ownerId', Number(ownerId))
	}

	const handleSelectSex = (sex: string) => {
		updateField('sex', sex === 'true')
	}

	const petFields = [
		{ id: 'name', label: 'Nombre', type: 'text' },
		{ id: 'species', label: 'Especie', type: 'text' },
		{ id: 'breed', label: 'Raza', type: 'text' },
		{ id: 'birthDate', label: 'Fecha de Nacimiento', type: 'date' },
		{ id: 'weight', label: 'Peso', type: 'text' },
		{ id: 'color', label: 'Color', type: 'text' },
	]

	const petSelectFields = [
		{
			id: 'sex',
			label: 'Sexo',
			value: petData.sex?.toString(),
			options: [
				{ id: 'true', name: 'Macho' },
				{ id: 'false', name: 'Hembra' },
			],
			onChange: handleSelectSex,
		},
		{
			id: 'owner',
			label: 'Dueño',
			value: petData.ownerId?.toString(),
			options: owners?.map(owner => ({ id: owner.id, name: owner.name })) ?? [],
			onChange: handleSelectOwner,
		},
	]

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		try {
			addPetSchema.parse(petData)
			setErrors({})

			createPet.mutate(petData)
			onSuccess()
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
						error={errors[field.id] || ''}
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
