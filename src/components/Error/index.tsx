'use client'

import { Button } from '@/components/shadcn/button'
import { FileQuestion, RotateCcw } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface Props {
	error?: Error & { digest?: string }
}

export default function Error({ error }: Props) {
	const router = useRouter()
	return (
		<main className='flex min-h-screen items-center justify-center bg-gradient-to-b from-background to-muted p-4'>
			<div className='w-full max-w-md'>
				<div className='space-y-6 rounded-lg p-8'>
					<div className='flex items-center justify-center'>
						<div className='relative'>
							<div className='relative rounded-full p-3'>
								<FileQuestion className='mx-auto h-24 w-24 animate-pulse text-primary' />
							</div>
						</div>
					</div>

					<div className='space-y-3 text-center'>
						<h1 className='text-3xl font-bold tracking-tight'>
							¡Algo salió mal!
						</h1>
						<p className='text-base text-muted-foreground'>
							{error?.message || 'Se ha producido un error inesperado'}
						</p>
						{error?.digest && (
							<p className='font-mono text-xs text-muted-foreground'>
								Error ID: {error.digest}
							</p>
						)}
					</div>

					<Button className='w-full' onClick={() => router.refresh}>
						<RotateCcw className='mr-2 h-4 w-4' />
						Inténtalo de nuevo
					</Button>

					<div className='border-t border-border pt-4'>
						<p className='text-center text-sm text-muted-foreground'>
							Si este error persiste, póngase en contacto con nuestro{' '}
							<a href='/support' className='underline hover:text-primary'>
								equipo de soporte
							</a>
						</p>
					</div>
				</div>
			</div>
		</main>
	)
}
