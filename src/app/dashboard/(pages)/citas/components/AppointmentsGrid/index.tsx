// Interfaces
import { Appointment } from '@/interfaces/Appointment'

// Format Date
import { formatDate } from 'date-fns'

// Components
import { MaxWidthWrapper } from '@/components'
import { AppointmentDetailsDialog } from '../index'

// Shadcn Components
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardFooter,
} from '@/components/shadcn'

// Lucide Icons
import { Calendar, Clock, Info } from 'lucide-react'

interface AppointmentsGridProps {
	appointments: Appointment[]
}

export default function AppointmentsGrid({
	appointments,
}: AppointmentsGridProps) {
	return (
		<section>
			<MaxWidthWrapper>
				{appointments.length === 0 ? (
					<div className='flex flex-col items-center justify-center space-y-2 text-muted-foreground'>
						<Info className='size-5' />
						<p className='text-sm'>Aún no se han agendado citas.</p>
					</div>
				) : (
					<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
						{appointments.map(appointment => {
							if (appointment !== null && appointment.pet !== null) {
								const { id, pet, dateTime } = appointment
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
												{dateTime && formatDate(dateTime, 'dd MMM yyyy')}
											</div>
											<div className='flex items-center text-sm text-muted-foreground'>
												<Clock className='mr-2 size-4' />
												{dateTime && formatDate(dateTime, 'HH:mm')}
											</div>
										</CardContent>
										<CardFooter className='px-4 pb-4'>
											<AppointmentDetailsDialog appointment={appointment} />
										</CardFooter>
									</Card>
								)
							}
						})}
					</div>
				)}
			</MaxWidthWrapper>
		</section>
	)
}
