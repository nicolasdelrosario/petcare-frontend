'use client'

// Next
import Link from 'next/link'

// Hooks
import { useForm } from '@/hooks/useForm'
import { useRegister } from '@/hooks/auth/useRegister'

// Interfaces
import { RegisterCredentials } from '@/interfaces/auth'

// Components
import { MaxWidthWrapper, AnimatedInput } from '@/components'

// Shadcn Components
import { Button } from '@/components/shadcn'

// Lucide Icons
import { Mail, Lock, UserRound } from 'lucide-react'

export default function SignUp() {
	const { formData: userData, handleChange } = useForm<RegisterCredentials>(
		{} as RegisterCredentials
	)
	const register = useRegister()

	const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		register.mutate(userData)
	}

	return (
		<MaxWidthWrapper className='grid h-[calc(100vh-143px)] place-content-center'>
			<div className='mt-24 min-w-80 rounded-md bg-slate-50 p-6 text-center lg:min-w-[29rem] lg:p-12'>
				<h1 className="lg:text-5xl' mb-4 text-center text-3xl font-bold leading-relaxed tracking-tight text-gray-900 md:text-4xl">
					Crea una cuenta
				</h1>
				<span className='text-muted-foreground'>Solo toma un momento</span>

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

					<Button className='mt-4 w-full' type='submit'>
						Registrarse
					</Button>
				</form>

				<div className='mt-6'>
					<span className='text-sm text-muted-foreground'>
						Ya tienes una cuenta?{' '}
						<Link
							href='/iniciar-sesion'
							className='font-medium text-primary underline'
						>
							Iniciar sesion
						</Link>
					</span>
				</div>
			</div>
		</MaxWidthWrapper>
	)
}
