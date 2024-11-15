'use client'

// Next
import Link from 'next/link'
import { useRouter } from 'next/navigation'

// Hooks
import { useForm } from '@/hooks/useForm'
import { useLogin } from '@/hooks/auth/useLogin'

// Interfaces
import { LoginCredentials } from '@/interfaces/auth'

// Components
import { MaxWidthWrapper, AnimatedInput } from '@/components'

// Shadcn Components
import { Button, buttonVariants } from '@/components/shadcn/button'

// Lucide Icons
import { Mail, Lock } from 'lucide-react'

export default function Login() {
	const router = useRouter()
	const { formData: userData, handleChange } = useForm<LoginCredentials>(
		{} as LoginCredentials
	)

	const login = useLogin(() => router.push('/dashboard/home'))

	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		login.mutate(userData)
	}

	return (
		<MaxWidthWrapper className='grid h-[calc(100vh-143px)] place-content-center'>
			<div className='mt-24 min-w-80 rounded-md bg-slate-50 p-6 text-center lg:min-w-[29rem] lg:p-12'>
				<h1 className="lg:text-5xl' mb-4 text-center text-3xl font-bold leading-relaxed tracking-tight text-gray-900 md:text-4xl">
					Bienvenido
				</h1>
				<span className='text-muted-foreground'>Inicia sesion</span>

				<form onSubmit={handleLogin}>
					<div className='mt-12 flex flex-col gap-4'>
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

					<Link className='my-1 flex justify-end text-sm font-medium' href='/'>
						Olvidaste tu contraseña?
					</Link>

					<Button className='mt-4 w-full' type='submit'>
						Iniciar Sesion
					</Button>
				</form>

				<div className='mt-6'>
					<div className='relative'>
						<div className='absolute inset-0 flex items-center'>
							<div className='w-full border-t border-gray-300' />
						</div>
						<div className='relative flex justify-center text-sm'>
							<span className='bg-white px-2 text-gray-500'>
								No tienes una cuenta?
							</span>
						</div>
					</div>

					<div className='mt-6'>
						<Link
							href='/registrarse'
							className={buttonVariants({
								className: 'w-full',
								variant: 'outline',
							})}
						>
							Registrarse
						</Link>
					</div>
				</div>
			</div>
		</MaxWidthWrapper>
	)
}
