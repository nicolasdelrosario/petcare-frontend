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
		<div>
			{ownerDetails.map(({ icon: Icon, value }, index) => (
				<div
					key={index}
					className={`flex items-center ${index > 0 ? 'mt-3' : ''}`}
				>
					<Icon className='mr-2 size-4' />
					<span>{value}</span>
				</div>
			))}

			<div className='flex items-center pt-4 text-sm text-muted-foreground'>
				Última actualización:{' '}
				{format(new Date(owner.updatedAt), 'dd MMM yyyy HH:mm')}
			</div>
		</div>
	)
}
