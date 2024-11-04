'use client'

// Services
import { useOwnerById } from '@/hooks/owners/useOwnerById'

// Components
import { MaxWidthWrapper, Loading } from '@/components'
import { Header } from '@/app/dashboard/components'
import { OwnerDetails, PetGrid } from './components'

interface Props {
	params: {
		id: string
	}
}

export default function Page({ params }: Props) {
	const { data: owner, error, isLoading } = useOwnerById(parseInt(params.id))

	if (isLoading) return <Loading />

	if (error || !owner) {
		return <div></div>
	}

	const pets = owner?.pets || []

	return (
		<>
			<Header title='Detalles del Propietario' />
			<MaxWidthWrapper>
				<div className='lg:grid lg:grid-cols-2 lg:gap-x-4 lg:pt-24 xl:gap-x-8 xl:pt-32'>
					<PetGrid pets={pets} />
					<OwnerDetails owner={owner} />
				</div>
			</MaxWidthWrapper>
		</>
	)
}
