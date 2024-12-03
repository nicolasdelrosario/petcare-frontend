'use client'

// Next
import { useRouter } from 'next/navigation'

// Interfaces
import { RegisterCredentials } from '@/interfaces/auth'

// Hooks
import { useForm } from '@/hooks/useForm'
import { useRegister } from '@/hooks/auth/useRegister'

// Shadcn Components
import { Button } from '@/components/shadcn'

// Lucide Icons
import { Mail, Lock, UserRound } from 'lucide-react'

// Components
import { AnimatedInput } from '@/components'

interface Props {
	handleBack: () => void
	workspaceId: number
}

export default function AddUserForm({ handleBack, workspaceId }: Props) {
	const router = useRouter()
	const { formData: userData, handleChange } = useForm<RegisterCredentials>(
		{} as RegisterCredentials
	)
	const register = useRegister(() => router.push('/iniciar-sesion'))

	const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		register.mutate({ ...userData, workspaceId })
	}

	return (
		<form onSubmit={handleSignUp}>
			<div className='mt-12 flex flex-col gap-3'>
				<AnimatedInput
					key='name'
					id='name'
					label='Nombre'
					type='text'
					className='bg-transparent'
					onChange={handleChange}
					icon={<UserRound />}
				/>

				<AnimatedInput
					key='email'
					id='email'
					label='Correo Electronico'
					type='email'
					className='bg-transparent'
					onChange={handleChange}
					icon={<Mail />}
				/>

				<AnimatedInput
					key='password'
					id='password'
					label='Contraseña'
					type='password'
					className='bg-transparent'
					onChange={handleChange}
					icon={<Lock />}
				/>
			</div>

			<div className='mt-4 flex w-full gap-4'>
				<Button
					type='button'
					variant='outline'
					onClick={handleBack}
					className='w-full'
				>
					Retroceder
				</Button>
				<Button type='submit' className='w-full'>
					Registrarse
				</Button>
			</div>
		</form>
	)
}
