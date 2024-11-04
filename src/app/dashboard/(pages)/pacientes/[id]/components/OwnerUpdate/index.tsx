// Interfaces
import { Owner } from '@/interfaces/Owner'

// Hooks
import { useUpdateOwner } from '@/hooks/owners/useUpdateOwner'
import { useForm } from '@/hooks/useForm'

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

	const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsEditing(false)

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { id, createdAt, updatedAt, deletedAt, pets, ...changes } =
			editedOwner

		updateOwnerMutation.mutate({
			id: owner.id,
			changes,
		})
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
					/>
					<AnimatedInput
						id='phone'
						label='Teléfono'
						defaultValue={phone || ''}
						onChange={handleChange}
					/>
					<AnimatedInput
						id='address'
						label='Dirección'
						defaultValue={address || ''}
						onChange={handleChange}
					/>

					<DialogFooter>
						<Button type='submit'>Guardar</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	)
}
