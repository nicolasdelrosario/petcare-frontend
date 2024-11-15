'use client'

// Next
import { useRouter } from 'next/navigation'

// React
import { useState } from 'react'

// Interfaces
import { Owner as IOwner } from '@/interfaces/Owner'

// Hooks
import { useDeleteOwner } from '@/hooks/owners/useDeleteOwner'

// Components
import { Owner, OwnerUpdate, Delete } from '../'

// Icons From Lucide React
import { UserRoundX } from 'lucide-react'

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
	const [isEditing, setIsEditing] = useState(false)
	const router = useRouter()
	const PATIENTS = '/dashboard/pacientes'

	const deleteOwnerMutation = useDeleteOwner(owner.id, () =>
		router.push(PATIENTS)
	)

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
						owner={owner}
						isEditing={isEditing}
						setIsEditing={setIsEditing}
					/>
					<Delete
						btnStyle='w-full'
						onConfirm={handleDelete}
						icon={<UserRoundX className='size-4' />}
					/>
				</CardFooter>
			</Card>
		</section>
	)
}
