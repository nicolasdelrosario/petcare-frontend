// Interfaces
import { Appointment } from '@/interfaces/Appointment'

// Format Date
import { format } from 'date-fns'

// Components
import { AppointmentDetailsDialog } from '@/app/dashboard/(pages)/citas/components'

// Shadcn Components
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardFooter,
} from '@/components/shadcn'

// Lucide Icons
import { Calendar, Clock } from 'lucide-react'

interface AppointmentCardProps {
	appointment: Appointment
}

export default function AppointmentCard({ appointment }: AppointmentCardProps) {
	const { id, date, pet } = appointment
	const { name: petName, owner } = pet
	const { name: ownerName } = owner

	return (
		<Card key={id}>
			<CardHeader className='border-b p-4'>
				<CardTitle className='truncate text-sm font-semibold'>
					{ownerName}
				</CardTitle>
			</CardHeader>
			<CardContent className='p-4'>
				<p className='text-sm font-medium'>{petName}</p>
				<div className='flex items-center text-sm text-muted-foreground'>
					<Calendar className='mr-2 size-4' />
					{format(new Date(date), 'dd MMMM yyyy')}
				</div>
				<div className='flex items-center text-sm text-muted-foreground'>
					<Clock className='mr-2 size-4' />
					{format(new Date(date), 'HH:mm')}
				</div>
			</CardContent>
			<CardFooter className='px-4 pb-4'>
				<AppointmentDetailsDialog appointment={appointment} />
			</CardFooter>
		</Card>
	)
}
