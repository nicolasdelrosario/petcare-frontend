// format Date
import { formatDate } from 'date-fns'

// Interfaces
import { Pet } from '@/interfaces/Pet'

// Shadcn Components
import { Card, CardContent, ScrollArea } from '@/components/shadcn'

// Icons
import { Calendar, NotepadText } from 'lucide-react'

// Components
import { PDFGeneratorService } from '../'

interface PetHistoryProps {
	pet: Pet
}

export default function PetHistory({ pet }: PetHistoryProps) {
	return (
		<ScrollArea className='h-[calc(100vh-12rem)] pr-4'>
			<div className='flex flex-col gap-y-4 space-y-4'>
				{pet.appointments.length > 0 ? (
					pet.appointments.map(appointment => {
						const { dateTime, reason } = appointment

						return (
							<Card key={appointment.id}>
								<CardContent className='p-4'>
									<div className='flex items-start justify-between'>
										<div className='space-y-1'>
											<div className='flex items-center space-x-2 font-medium'>
												<Calendar className='size-5' />
												<span className='text-md truncate tracking-tight'>
													{dateTime
														? formatDate(dateTime, 'dd MMM yyyy')
														: 'Fecha no disponible'}
												</span>
											</div>
											<div className='flex items-center space-x-2 font-medium text-muted-foreground'>
												<NotepadText className='size-5' />
												<span className='text-md'>
													{reason || 'Motivo no especificado'}
												</span>
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						)
					})
				) : (
					// Mensaje cuando no hay citas
					<div className='mt-8 text-center text-muted-foreground'>
						Todavía no se ha creado ninguna cita.
					</div>
				)}
			</div>

			{pet.appointments.length > 0 && (
				<div className='mt-8 flex justify-end'>
					<PDFGeneratorService pet={pet} />
				</div>
			)}
		</ScrollArea>
	)
}
