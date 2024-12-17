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
import { validateWithSchema } from '@/util/validateSchemas'
import { userSchema } from './schema'

//Hooks
import { useState } from 'react'

interface Props {
	user: User
}

export default function UserDetails({ user }: Props) {
	const updateUser = useUpdateUser()
	const { formData: editedUser, handleChange } = useForm<User>(user)
	const [errors, setErrors] = useState<{ [key: string]: string }>({})

	const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const { data: validData, errors } = validateWithSchema(
			userSchema,
			editedUser
		)

		if (errors) {
			setErrors(errors)
			return
		}

		updateUser.mutate({
			id: user.id,
			changes: validData as Omit<User, 'createdAt' | 'updatedAt' | 'deletedAt'>,
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
						error={errors.email}
					/>

					<AnimatedInput
						id='name'
						label='Nombre'
						defaultValue={user.name || ''}
						onChange={handleChange}
						error={errors.name}
					/>

					<AnimatedInput
						id='phone'
						label='Telefono'
						defaultValue={user.phone || ''}
						onChange={handleChange}
						error={errors.phone}
					/>

					{user.dni === null && (
						<AnimatedInput
							id='dni'
							label='DNI'
							defaultValue={user.dni || ''}
							onChange={handleChange}
							error={errors.dni}
						/>
					)}

					<div className='mt-4 flex justify-end'>
						<Button>Guardar</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	)
}
