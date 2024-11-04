import { MaxWidthWrapper } from '@/components'
import { Progress, Skeleton } from '../shadcn'

export default function Loading() {
	return (
		<MaxWidthWrapper className='p-4'>
			<h1 className='text-2xl font-semibold'>Cargando...</h1>
			<Progress value={60} className='mt-16 h-2 w-full' />
			<div className='mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
				{Array.from({ length: 12 }).map((_, index) => (
					<div key={index} className='rounded-lg border p-4 shadow-sm'>
						<Skeleton className='mb-2 h-6 w-1/2' />
						<Skeleton className='mb-4 h-4 w-1/3' />
						<Skeleton className='mb-2 h-4 w-full' />
						<Skeleton className='mb-4 h-4 w-full' />
						<Skeleton className='h-8 w-full' />
					</div>
				))}
			</div>
		</MaxWidthWrapper>
	)
}
