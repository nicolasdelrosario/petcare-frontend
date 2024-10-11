'use client'

import { MaxWidthWrapper } from '@/components'
import { buttonVariants } from '@/components/shadcn/button'
import { Input } from '@/components/shadcn/input'
import { Label } from '@/components/shadcn/label'
import Link from 'next/link'

export default function Login() {
	return (
		<MaxWidthWrapper className='grid place-content-center px-2.5'>
			<form action='' className='flex max-w-[350px] flex-col gap-3 px-6 py-6'>
				<h1 className="lg:text-5xl' mb-4 text-center text-3xl font-bold leading-relaxed tracking-tight text-gray-900 md:text-4xl">
					Bienvenido
				</h1>
				<div>
					<Label htmlFor='workspace'>¿Cual es el nombre de tu clinica?</Label>
					<Input
						id='workspace'
						type='text'
						placeholder='Clinica'
						className='outline-none focus-visible:bg-none'
					></Input>
				</div>
				<div>
					<Label htmlFor='email'>Correo electronico</Label>
					<Input id='email' type='email' placeholder='Correo'></Input>
				</div>
				<div>
					<Label htmlFor='password'>Contraseña</Label>
					<Input id='password' type='password' placeholder='Contraseña'></Input>
				</div>
				<Link
					href='/'
					className={buttonVariants({
						className: 'mt-4',
					})}
				>
					Ingresar
				</Link>
				<a className='mt-2 text-center text-sm' href=''>
					¿Olvidaste tu contraseña?
				</a>
			</form>
		</MaxWidthWrapper>
	)
}
