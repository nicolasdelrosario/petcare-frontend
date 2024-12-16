'use client'

// Hooks
import { useForm } from '@/hooks/useForm'
import { useRegister } from '@/hooks/auth/useRegister'

// Interfaces
import { RegisterCredentials } from '@/interfaces/auth'

// Components
import { AnimatedInput } from '@/components'

// Shadcn Components
import { Button } from '@/components/shadcn'

// Lucide Icons
import { Lock, Mail, User } from 'lucide-react'

interface AddUserFormProps {
	workspaceId: number
	onSuccess: () => void
}

export default function AddUserForm({
	workspaceId,
	onSuccess,
}: AddUserFormProps) {
	const register = useRegister(onSuccess)
	const { formData: userData, handleChange } = useForm<RegisterCredentials>(
		{} as RegisterCredentials
	)

	const userFields = [
		{
			id: 'name',
			label: 'Name',
			icon: <User />,
		},
		{
			id: 'email',
			label: 'Email',
			icon: <Mail />,
		},
		{
			id: 'password',
			label: 'Password',
			type: 'password',
			icon: <Lock />,
		},
	]

	const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		register.mutate({
			...userData,
			workspaceId,
		})
	}

	return (
		<form onSubmit={handleRegister}>
			<div className='flex flex-col gap-4'>
				{userFields.map(({ id, label, type, icon }) => (
					<AnimatedInput
						key={id}
						id={id}
						label={label}
						type={type}
						className='bg-transparent'
						onChange={handleChange}
						icon={icon}
					/>
				))}

				<div className='mt-8 flex justify-end'>
					<Button type='submit'>Agregar Usuario</Button>
				</div>
			</div>
		</form>
	)
}
