// Interfaces
import { Owner as OwnerI } from '@/interfaces/Owner'

// Lucide Icons
import { format } from 'date-fns'

// Utility
import { generateOwnerDetails } from '@/util/generateOwnerDetails'

interface OwnerProps {
	owner: OwnerI
}

export default function Owner({ owner }: OwnerProps) {
	const ownerDetails = generateOwnerDetails(owner)

	return (
		<div className='w-full max-w-md sm:max-w-lg'>
			{ownerDetails.map(({ icon: Icon, value }, index) => (
				<div
					key={index}
					className={`flex items-center ${index > 0 ? 'mt-3' : ''}`}
				>
					<Icon className='mr-2 size-4' />
					<span className='truncate tracking-tight'>{value}</span>
				</div>
			))}

			<div className='flex items-center truncate pt-4 text-sm tracking-tight text-muted-foreground'>
				Última actualización:{' '}
				{format(new Date(owner.updatedAt), 'dd MMM yyyy HH:mm')}
			</div>
		</div>
	)
}
