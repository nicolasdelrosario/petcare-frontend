'use client'

// Next
import { useRouter } from 'next/navigation'

// React
import { useState } from 'react'

// Interfaces
import { Owner as IOwner } from '@/interfaces/Owner'

// Hooks
import { useUpdateOwner } from '@/hooks/owners/useUpdateOwner'
import { useDeleteOwner } from '@/hooks/owners/useDeleteOwner'

// Components
import { Owner, OwnerUpdate, OwnerDelete } from '../'

// Shadcn Components
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/shadcn'

interface OwnerDetailsProps {
	owner: IOwner
}

export default function OwnerDetails({ owner }: OwnerDetailsProps) {
	const router = useRouter()

	const [isEditing, setIsEditing] = useState(false)
	const [editedOwner, setEditedOwner] = useState<IOwner>(owner)

	const PATIENTS = '/dashboard/pacientes'

	const updateOwnerMutation = useUpdateOwner()
	const deleteOwnerMutation = useDeleteOwner(owner.id, () =>
		router.push(PATIENTS)
	)

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setEditedOwner(prev => ({
			...prev,
			[name]: value,
		}))
	}

	const handleUpdate = () => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { id, createdAt, updatedAt, deletedAt, pets, ...changes } =
			editedOwner
		updateOwnerMutation.mutate({
			id: owner.id,
			changes,
		})

		setIsEditing(false)
	}

	const handleDelete = () => deleteOwnerMutation.mutate()

	return (
		<section className='mt-8 lg:mt-4'>
			<h2 className='mb-4 text-lg font-semibold'>Detalles del Propietario</h2>
			<Card className='border'>
				<CardHeader className='border-b p-4'>
					<CardTitle className='text-md font-semibold'>
						{owner.name || 'Nombre no especificado.'}
					</CardTitle>
				</CardHeader>
				<CardContent className='space-y-3 p-4'>
					<Owner owner={owner} />
				</CardContent>
				<CardFooter className='flex flex-col gap-y-3 px-4 pb-4'>
					<OwnerUpdate
						isEditing={isEditing}
						setIsEditing={setIsEditing}
						handleUpdate={handleUpdate}
						handleInputChange={handleInputChange}
						owner={editedOwner}
					/>
					<OwnerDelete handleDelete={handleDelete} />
				</CardFooter>
			</Card>
		</section>
	)
}
