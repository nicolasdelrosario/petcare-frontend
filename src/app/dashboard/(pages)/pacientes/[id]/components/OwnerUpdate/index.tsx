//Interface
import { Owner } from '@/interfaces/Owner'

// Hooks
import { useUpdateOwner } from '@/hooks/owners/useUpdateOwner'
import { useForm } from '@/hooks/useForm'
import { useState } from 'react'

// Components
import { AnimatedInput } from '@/components'

// Shadcn Components
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	Button,
	DialogFooter,
} from '@/components/shadcn'

// Icons From Lucide React
import { UserPen } from 'lucide-react'

//Schemas
import { updateOwnerSchema } from '../OwnerSchema/updateOwnerSchema'

//Zod
import { z } from 'zod'

interface OwnerEditProps {
	owner: Owner
	isEditing: boolean
	setIsEditing: (isEditing: boolean) => void
}

export default function OwnerEdit({
	owner,
	isEditing,
	setIsEditing,
}: OwnerEditProps) {
	const updateOwnerMutation = useUpdateOwner()
	const { email, phone, address } = owner
	const { formData: editedOwner, handleChange } = useForm<Owner>(owner)
	const [errors, setErrors] = useState<{ [key: string]: string }>({})

	const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		try {
			const updatedOwner = {
				email: editedOwner.email,
				phone: editedOwner.phone,
				address: editedOwner.address,
			}
			const validateData = updateOwnerSchema.parse(updatedOwner)
			setErrors({})

			updateOwnerMutation.mutate({
				id: owner.id,
				changes: validateData as Omit<
					Owner,
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
		<Dialog open={isEditing} onOpenChange={setIsEditing}>
			<DialogTrigger asChild>
				<Button
					variant='outline'
					className='w-full'
					onClick={() => setIsEditing(true)}
				>
					<UserPen className='mr-2 size-4' />
					Editar
				</Button>
			</DialogTrigger>

			<DialogContent>
				<DialogHeader>
					<DialogTitle className='border-b bg-background pb-2 text-lg font-semibold'>
						Editar
					</DialogTitle>
				</DialogHeader>

				<form onSubmit={handleUpdate} className='flex flex-col gap-4'>
					<AnimatedInput
						id='email'
						label='Correo Electrónico'
						defaultValue={email || ''}
						onChange={handleChange}
						error={errors.email}
					/>

					<AnimatedInput
						id='phone'
						label='Teléfono'
						defaultValue={phone || ''}
						onChange={handleChange}
						error={errors.phone}
					/>
					<AnimatedInput
						id='address'
						label='Dirección'
						defaultValue={address || ''}
						onChange={handleChange}
						error={errors.address}
					/>

					<DialogFooter>
						<Button type='submit'>Guardar</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	)
}
