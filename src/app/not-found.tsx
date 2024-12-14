'use client'

import { Button } from '@/components/shadcn/button'
import { Compass, Home, MoveLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function NotFound() {
	const router = useRouter()

	return (
		<div className='flex min-h-screen items-center justify-center bg-gradient-to-b from-background to-muted p-4'>
			<div className='w-full max-w-md space-y-6 text-center'>
				<div className='relative'>
					<div className='absolute -top-2 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl' />
					<Compass className='mx-auto h-24 w-24 text-primary' />
				</div>

				<div className='relative space-y-3'>
					<h1 className='text-3xl font-bold tracking-tight'>
						404 - No Encontrado
					</h1>
					<p className='text-base text-muted-foreground'>
						La página que busca no existe o se ha producido otro error.
					</p>
				</div>

				<div className='flex flex-col justify-center gap-4 pt-2 sm:flex-row'>
					<Button
						variant='default'
						onClick={() => router.push('/')}
						className='gap-2'
					>
						<Home className='h-4 w-4' />
						Volver a inicio
					</Button>
					<Button
						variant='outline'
						onClick={() => router.back()}
						className='gap-2'
					>
						<MoveLeft className='h-4 w-4' />
						Volver
					</Button>
				</div>
			</div>
		</div>
	)
}
