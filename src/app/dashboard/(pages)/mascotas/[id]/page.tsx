'use client'

// Services
import { usePetById } from '@/hooks/pets/usePetById'

// Components
import { Header } from '@/app/dashboard/components'
import { Loading, MaxWidthWrapper } from '@/components'
import { PetDetails, PetHistory } from './components'

interface Props {
	params: {
		id: string
	}
}

export default function Page({ params }: Props) {
	const { data: pet, error, isLoading } = usePetById(parseInt(params.id))

	if (isLoading) return <Loading />

	if (error || !pet) {
		return <div></div>
	}

	return (
		<>
			<Header title='Detalles de la Mascota' />
			<MaxWidthWrapper>
				<div className='lg:grid lg:grid-cols-2 lg:gap-x-4 lg:pt-24 xl:gap-x-8 xl:pt-32'>
					<PetHistory appointments={pet.appointments} />
					<PetDetails pet={pet} />
				</div>
			</MaxWidthWrapper>
		</>
	)
}