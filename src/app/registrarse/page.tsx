'use client'

// Next
import Link from 'next/link'

// React
import { useState } from 'react'

// Components
import { MaxWidthWrapper } from '@/components'

// Shadcn Components
import { Progress } from '@/components/shadcn'

// Components
import AddUserForm from './components/AddUserForm'
import AddWorkspaceForm from './components/AddWorkspaceForm'

export default function SignUp() {
	const [step, setStep] = useState(1)
	const [workspaceId, setWorkspaceId] = useState<number | null>(null)

	const handleForward = () => setStep(2)
	const handleBack = () => setStep(1)

	const handleWorkspaceSuccess = (id: number) => {
		setWorkspaceId(id)
		handleForward()
	}

	return (
		<MaxWidthWrapper className='grid h-[calc(100vh-143px)] place-content-center'>
			<div className='mt-24 min-w-80 rounded-md bg-slate-50 p-6 text-center dark:bg-neutral-950 lg:min-w-[29rem] lg:p-12'>
				<h1 className="lg:text-5xl' mb-4 text-center text-3xl font-bold leading-relaxed tracking-tight text-gray-900 dark:text-gray-100 md:text-4xl">
					Crea una cuenta
				</h1>
				<span className='text-muted-foreground'>Solo toma un momento</span>

				<Progress className='mt-4' value={step === 1 ? 50 : 100} />

				{step === 1 ? (
					<AddWorkspaceForm onSuccess={handleWorkspaceSuccess} />
				) : (
					<AddUserForm handleBack={handleBack} workspaceId={workspaceId!} />
				)}

				<div className='mt-6'>
					<span className='text-sm text-muted-foreground'>
						¿Ya tienes una cuenta?{' '}
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
