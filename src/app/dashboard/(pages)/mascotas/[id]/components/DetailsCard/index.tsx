// Components/DetailsCard.tsx
import { formatDate } from 'date-fns'

interface DetailsCardProps {
	title?: string
	details: { icon: React.ElementType; label: string; value: string }[]
	updatedAt?: Date
}

export default function DetailsCard({
	title,
	details,
	updatedAt,
}: DetailsCardProps) {
	return (
		<div className='mt-6 space-y-4'>
			<h2 className='text-xl font-bold'>{title}</h2>
			<div className='grid grid-cols-2 gap-4'>
				{details.map(({ icon: Icon, value }, index) => (
					<div key={index} className='flex items-center'>
						<Icon className='mr-2 h-4 w-4' />
						<span>{value}</span>
					</div>
				))}
			</div>
			{updatedAt && (
				<p className='text-sm text-muted-foreground'>
					Última actualización: {formatDate(updatedAt, 'dd MMM yyyy HH:mm')}
				</p>
			)}
		</div>
	)
}
