// format Date
import { formatDate } from 'date-fns'

// Interfaces
import { Appointment } from '@/interfaces/Appointment'

// Shadcn Components
import { Card, CardContent, ScrollArea } from '@/components/shadcn'

// Icons
import { Calendar, NotepadText } from 'lucide-react'

interface PetHistoryProps {
	appointments: Appointment[]
}

export default function PetHistory({ appointments }: PetHistoryProps) {
	return (
		<ScrollArea className='h-[calc(100vh-12rem)] pr-4'>
			<div className='flex flex-col gap-y-4 space-y-4'>
				{appointments.map(appointment => {
					const { dateTime, reason } = appointment

					return (
						<Card key={appointment.id}>
							<CardContent className='p-4'>
								<div className='flex items-start justify-between'>
									<div className='space-y-1'>
										<div className='flex items-center space-x-2 font-medium'>
											<Calendar className='size-5' />
											<span className='text-md truncate tracking-tight'>
												{dateTime && formatDate(dateTime, 'dd MMM yyyy')}
											</span>
										</div>
										<div className='flex items-center space-x-2 font-medium text-muted-foreground'>
											<NotepadText className='size-5' />
											<span className='text-md'>{reason}</span>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					)
				})}
			</div>
		</ScrollArea>
	)
}
