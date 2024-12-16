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

// Util
import { validateWithSchema } from '@/util/validateSchemas'

// Schemas
import { updateOwnerSchema } from '../OwnerSchema/updateOwnerSchema'

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

		const { data: validateData, errors } = validateWithSchema(
			updateOwnerSchema,
			editedOwner
		)

		if (errors) return setErrors(errors)

		updateOwnerMutation.mutate({
			id: owner.id,
			changes: validateData as Omit<
				Owner,
				'id' | 'createdAt' | 'updatedAt' | 'deletedAt'
			>,
		})

		setIsEditing(false)
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
