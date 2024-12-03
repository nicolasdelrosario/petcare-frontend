'use client'

// Interfaces
import { Workspace } from '@/interfaces/Workspace'

// Hooks
import { useForm } from '@/hooks/useForm'
import { useCreateWorkspace } from '@/hooks/workspaces/useCreateWorkspace'

// Shadcn Components
import { Button } from '@/components/shadcn'

// Components
import { AnimatedInput } from '@/components'

// Lucide Icons
import { Users } from 'lucide-react'

interface Props {
	onSuccess: (workspaceId: number) => void
}

export default function AddWorkspaceForm({ onSuccess }: Props) {
	const { formData: workspaceData, handleChange } = useForm<Workspace>(
		{} as Workspace
	)

	const createWorkspace = useCreateWorkspace((workspaceId: number) =>
		onSuccess(workspaceId)
	)

	const handleCreateWorkspace = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		createWorkspace.mutate(workspaceData)
	}

	return (
		<form onSubmit={handleCreateWorkspace}>
			<div className='mt-12 flex flex-col gap-3'>
				<AnimatedInput
					key='name'
					id='name'
					label='Nombre'
					type='text'
					className='bg-transparent'
					onChange={handleChange}
					icon={<Users />}
				/>

				<Button className='mt-4 w-full' type='submit'>
					Crear espacio de trabajo
				</Button>
			</div>
		</form>
	)
}
