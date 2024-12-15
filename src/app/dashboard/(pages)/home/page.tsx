'use client'

// Auth
import { useSession } from 'next-auth/react'

export default function Page() {
	const { data: session } = useSession()

	return (
		<div className='grid min-h-[100vh] place-content-center text-center'>
			<h1 className='mt-16 w-fit text-balance text-4xl font-bold leading-relaxed tracking-tight text-gray-900 dark:text-white md:text-5xl md:!leading-tight lg:text-6xl'>
				Hola, {session?.user?.name}!
			</h1>
			<p className='mt-6 max-w-prose text-balance text-xl md:text-wrap lg:pr-10'>
				¿Que deseas hacer hoy?
			</p>
		</div>
	)
}
