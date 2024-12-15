'use client'

// Services
import { useOwnerById } from '@/hooks/owners/useOwnerById'

// Components
import { MaxWidthWrapper, Loading } from '@/components'
import { Header } from '@/app/dashboard/components'
import { OwnerDetails, PetGrid } from './components'
import Error from '@/components/Error'

interface Props {
	params: {
		id: string
	}
}

export default function Page({ params }: Props) {
	const { data: owner, error, isLoading } = useOwnerById(parseInt(params.id))

	if (isLoading) return <Loading />
	if (error || !owner) return <Error />
	const pets = owner?.pets || []

	return (
		<>
			<Header title='Detalles del Propietario' />
			<MaxWidthWrapper>
				<div className='grid lg:grid-cols-2 lg:gap-x-4 lg:pt-12 xl:gap-x-8'>
					<div className='order-2 max-w-[calc(100%-63px)] xs:max-w-full lg:order-1'>
						<PetGrid pets={pets} />
					</div>
					<div className='order-1 max-w-[calc(100%-63px)] xs:max-w-full lg:order-2'>
						<OwnerDetails owner={owner} />
					</div>
				</div>
			</MaxWidthWrapper>
		</>
	)
}
