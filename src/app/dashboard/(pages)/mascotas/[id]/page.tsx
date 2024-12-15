'use client'

// Services
import { usePetById } from '@/hooks/pets/usePetById'

// Components
import { Header } from '@/app/dashboard/components'
import { Loading, MaxWidthWrapper, Error } from '@/components'
import { PetDetails, PetHistory } from './components'

interface Props {
	params: {
		id: string
	}
}

export default function Page({ params }: Props) {
	const { data: pet, error, isLoading } = usePetById(parseInt(params.id))

	if (isLoading) return <Loading />

	if (error || !pet) return <Error />

	return (
		<>
			<Header title='Detalles de la Mascota' />
			<MaxWidthWrapper>
				<div className='grid lg:grid-cols-2 lg:gap-x-4 lg:pt-12 xl:gap-x-8'>
					<div className='order-2 lg:order-1'>
						<PetHistory pet={pet} />
					</div>
					<div className='order-1 mt-8 lg:order-2'>
						<PetDetails pet={pet} />
					</div>
				</div>
			</MaxWidthWrapper>
		</>
	)
}
