'use client'

// Hooks
import { useForm } from '@/hooks/useForm'
import { useCreateOwner } from '@/hooks/owners/useCreateOwner'
import { useState } from 'react'

// Interfaces
import { Owner } from '@/interfaces/Owner'

//Schemas
import { addOwnerSchema } from '../../(pages)/pacientes/[id]/components/OwnerSchema/addOwnerSchema'

// Components
import { AnimatedInput } from '@/components'

// Shadcn Components
import { Button } from '@/components/shadcn'

// Lucide Icons
import { Mail, Phone, IdCard, MapPin } from 'lucide-react'

//Zod
import { z } from 'zod'

interface AddOwnerFormProps {
	onSuccess: () => void
}

export default function AddOwnerForm({ onSuccess }: AddOwnerFormProps) {
	const createOwner = useCreateOwner()
	const { formData: ownerData, handleChange } = useForm<Partial<Owner>>(
		{} as Partial<Owner>
	)
	const [errors, setErrors] = useState<{ [key: string]: string }>({})

	const ownerFields = [
		{ id: 'name', label: 'Nombre', type: 'text' },
		{ id: 'dni', label: 'DNI', type: 'text', icon: <IdCard /> },
		{ id: 'email', label: 'Email', type: 'text', icon: <Mail /> },
		{ id: 'phone', label: 'Teléfono', type: 'tel', icon: <Phone /> },
		{ id: 'address', label: 'Dirección', type: 'text', icon: <MapPin /> },
	]

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		try {
			addOwnerSchema.parse(ownerData)
			setErrors({})

			createOwner.mutate(ownerData)
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
				{ownerFields.map(field => (
					<AnimatedInput
						key={field.id}
						id={field.id}
						label={field.label}
						type={field.type}
						icon={field.icon}
						onChange={handleChange}
						error={errors[field.id] || ''}
					/>
				))}
			</div>

			<div className='mt-8 flex justify-end'>
				<Button type='submit'>Agregar Propietario</Button>
			</div>
		</form>
	)
}
