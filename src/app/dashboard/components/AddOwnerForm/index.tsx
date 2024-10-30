'use client'

// Hooks
import { useForm } from '@/hooks/useForm'
import { useCreateOwner } from '@/hooks/owners/useCreateOwner'

// Interfaces
import { Owner } from '@/interfaces/Owner'

// Components
import { AnimatedInput } from '@/components'

// Shadcn Components
import { Button } from '@/components/shadcn'

// Lucide Icons
import { Mail, Phone, IdCard, MapPin } from 'lucide-react'

interface AddOwnerFormProps {
	onSuccess: () => void
}

export default function AddOwnerForm({ onSuccess }: AddOwnerFormProps) {
	const createOwner = useCreateOwner()

	const { formData: ownerData, handleChange } = useForm<Partial<Owner>>(
		{} as Partial<Owner>
	)

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		createOwner.mutate(ownerData)
		onSuccess()
	}

	const ownerFields = [
		{ id: 'name', label: 'Nombre', type: 'text' },
		{ id: 'dni', label: 'DNI', type: 'text', icon: <IdCard /> },
		{ id: 'email', label: 'Email', type: 'email', icon: <Mail /> },
		{ id: 'phone', label: 'Teléfono', type: 'tel', icon: <Phone /> },
		{ id: 'address', label: 'Dirección', type: 'text', icon: <MapPin /> },
	]

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
					/>
				))}
			</div>

			<div className='mt-8 flex justify-end'>
				<Button type='submit'>Agregar Propietario</Button>
			</div>
		</form>
	)
}
