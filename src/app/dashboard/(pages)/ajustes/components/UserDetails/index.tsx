import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardDescription,
	Button,
} from '@/components/shadcn'

// Interfaces
import { User } from '@/interfaces/User'

// Hooks
import { useForm } from '@/hooks/useForm'
import { useUpdateUser } from '@/hooks/users/useUpdateUser'
import { AnimatedInput } from '@/components'

interface Props {
	user: User
}

export default function UserDetails({ user }: Props) {
	const updateUser = useUpdateUser()
	const { formData: editedUser, handleChange } = useForm<User>(user)

	const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const { id, createdAt, updatedAt, deletedAt, role, workspace, ...changes } =
			editedUser

		updateUser.mutate({
			id: user.id,
			changes,
		})
	}

	return (
		<Card className='mt-8'>
			<CardHeader>
				<CardTitle>Perfil</CardTitle>
				<CardDescription>Maneja tu información personal.</CardDescription>
			</CardHeader>
			<CardContent>
				<form onSubmit={handleUpdate} className='flex flex-col gap-4'>
					<AnimatedInput
						id='email'
						type='email'
						label='Email'
						defaultValue={user.email || ''}
						onChange={handleChange}
					/>

					<AnimatedInput
						id='name'
						label='Nombre'
						defaultValue={user.name || ''}
						onChange={handleChange}
					/>

					<AnimatedInput
						id='phone'
						label='Telefono'
						defaultValue={user.phone || ''}
						onChange={handleChange}
					/>

					{user.dni === null && (
						<AnimatedInput
							id='dni'
							label='DNI'
							defaultValue={user.dni || ''}
							onChange={handleChange}
						/>
					)}

					<div className='flex justify-end'>
						<Button>Save Changes</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	)
}
